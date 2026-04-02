import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useCities } from "@/hooks/useCities";

const pinnedCityNames = [
  "Casablanca", "Fes", "Marrakech", "Tanger", "Agadir", "Meknes", "Rabat", "Oujda", "Sale", "Kenitra",
];

const citySecteurs: Record<string, string[]> = {
  Casablanca: ["Maârif", "Aïn Diab", "Gauthier", "Bourgogne", "Sidi Moumen", "Hay Hassani", "Aïn Chock", "Derb Sultan", "Anfa", "Hay Mohammadi", "Sbata", "Ben M'Sick", "Moulay Rachid"],
  Rabat: ["Agdal", "Hassan", "Hay Riad", "L'Océan", "Souissi", "Yacoub El Mansour", "Akkari", "Takaddoum"],
  Marrakech: ["Guéliz", "Hivernage", "Médina", "Ménara", "Sidi Youssef Ben Ali", "Targa", "M'Hamid"],
  Fès: ["Ville Nouvelle", "Médina", "Saïss", "Zouagha", "Jnan El Ward", "Narjiss", "Mont Fleuri"],
  Tanger: ["Boulevard", "Malabata", "Iberia", "Marshan", "Boukhalef", "Médina", "Val Fleuri"],
  Agadir: ["Talborjt", "Hay Mohammadi", "Cité Dakhla", "Nouveau Talborjt", "Charaf", "Hay Salam"],
  Meknès: ["Hamria", "Ville Nouvelle", "Médina", "Sidi Bouzekri", "Marjane"],
  Salé: ["Tabriquet", "Hay Salam", "Bettana", "Laâyayda", "Sala Al Jadida"],
  Kénitra: ["Ville Haute", "Ville Basse", "Bir Rami", "Ouled Oujih", "Saknia"],
  Tétouan: ["Centre Ville", "Médina", "Martil", "Sania Ramel", "M'diq"],
};

const offers = [
  { label: "عبوة واحدة — 199 درهم", value: "1-box-199", price: 199 },
  { label: "3 علب + سيروم — 299 درهم ⭐ الأكثر مبيعاً", value: "3-boxes-299", price: 299, recommended: true },
  { label: "4 علب + 2 سيروم — 399 درهم 💎 الأفضل قيمة", value: "4-boxes-399", price: 399 },
];

const offerPriceMap: Record<string, number> = {
  "1-box-199": 199,
  "3-boxes-299": 299,
  "4-boxes-399": 399,
};

const OrderForm = () => {
  const { cities: dbCities, loading: citiesLoading, error: citiesError } = useCities();
  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    city: "",
    secteur: "",
    offer: "3-boxes-299",
  });
  const [loading, setLoading] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [cityOpen, setCityOpen] = useState(false);
  const cityRef = useRef<HTMLDivElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const hasSecteurs = form.city && citySecteurs[form.city];
  const availableSecteurs = hasSecteurs ? citySecteurs[form.city] : [];

  useEffect(() => {
    const handler = (e: Event) => {
      const offer = (e as CustomEvent).detail;
      if (offer) setForm((prev) => ({ ...prev, offer }));
    };
    window.addEventListener("select-offer", handler);
    return () => window.removeEventListener("select-offer", handler);
  }, []);

  // Sort cities: pinned first, then rest alphabetically
  const allCityNames = dbCities.map((c) => c.city_name);
  const pinned = allCityNames.filter((c) => pinnedCityNames.includes(c));
  const rest = allCityNames.filter((c) => !pinnedCityNames.includes(c));
  const sortedCities = [...pinned, ...rest];

  const filteredCities = sortedCities.filter((c) =>
    c.toLowerCase().includes(citySearch.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
        setCityOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.customer_name.trim() || !form.phone.trim() || !form.city) {
      setError("المرجو ملء جميع الحقول المطلوبة");
      return;
    }

    if (!/^(0[5-7]\d{8}|\+212[5-7]\d{8})$/.test(form.phone.replace(/\s/g, ""))) {
      setError("المرجو إدخال رقم هاتف مغربي صحيح");
      return;
    }

    setLoading(true);
    try {
      const selectedOffer = offers.find(o => o.value === form.offer);
      const { error: dbError } = await (supabase as any).from("orders").insert({
        customer_name: form.customer_name.trim(),
        phone: form.phone.trim(),
        city: form.city,
        secteur: form.secteur || null,
        offer_price: selectedOffer?.price || offerPriceMap[form.offer],
        offer_label: selectedOffer?.label || form.offer,
        product: "Paravita Neo Collagen",
        created_at: new Date().toISOString(),
      } as any);

      if (dbError) throw dbError;
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Purchase", {
          value: selectedOffer?.price || offerPriceMap[form.offer],
          currency: "MAD",
        });
      }
      setSuccess(true);
    } catch (err: any) {
      setError("حدث خطأ، المرجو المحاولة مرة أخرى");
      console.error("Order error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="order" className="py-20 md:py-28 bg-dark-bg">
        <div className="container max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-gold/10 border border-gold/30 rounded-2xl p-8 md:p-12"
          >
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-body text-2xl font-bold text-champagne mb-3">تم استلام طلبك بنجاح!</h3>
            <p className="font-body text-gold-light/70">غادي نتواصلو معاك قريباً لتأكيد الطلب 📞</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="py-20 md:py-28 bg-dark-bg">
      <div className="container max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-body text-3xl md:text-4xl font-bold text-champagne mb-3">
            اطلبي <span className="text-gold-gradient">الآن</span>
          </h2>
          <p className="font-body text-gold-light/60">عمري الفورم وغادي نتصلو بيك لتأكيد الطلب</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gold/5 border border-gold/20 rounded-2xl p-6 md:p-8 space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block font-body text-sm font-medium text-champagne mb-2">الاسم الكامل *</label>
            <input
              type="text"
              value={form.customer_name}
              onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
              placeholder="مثال: فاطمة الزهراء"
              className="w-full bg-dark-bg border border-gold/30 rounded-xl px-4 py-3 min-h-[56px] text-champagne font-body placeholder:text-gold-light/30 focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-body text-sm font-medium text-champagne mb-2">رقم الهاتف *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="06XXXXXXXX"
              dir="ltr"
              className="w-full bg-dark-bg border border-gold/30 rounded-xl px-4 py-3 min-h-[56px] text-champagne font-body placeholder:text-gold-light/30 focus:outline-none focus:border-gold transition-colors text-left"
            />
          </div>

          {/* City - Searchable Dropdown */}
          <div ref={cityRef} className="relative">
            <label className="block font-body text-sm font-medium text-champagne mb-2">المدينة *</label>
            <button
              type="button"
              onClick={() => { setCityOpen(!cityOpen); setCitySearch(""); }}
              className="w-full bg-dark-bg border border-gold/30 rounded-xl px-4 py-3 min-h-[56px] text-champagne font-body focus:outline-none focus:border-gold transition-colors flex items-center justify-between"
            >
              <span className={form.city ? "text-champagne" : "text-gold-light/30"}>
                {form.city || "اختاري المدينة"}
              </span>
              <ChevronDown className={`w-4 h-4 text-gold-light/50 transition-transform ${cityOpen ? "rotate-180" : ""}`} />
            </button>

            {cityOpen && (
              <div className="absolute z-50 top-full mt-1 w-full bg-dark-bg border border-gold/30 rounded-xl overflow-hidden shadow-lg max-h-[400px]">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gold/20">
                  <Search className="w-4 h-4 text-gold-light/40 shrink-0" />
                  <input
                    type="text"
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                    placeholder="ابحثي عن مدينتك..."
                    autoFocus
                    className="w-full bg-transparent text-champagne font-body text-sm placeholder:text-gold-light/30 focus:outline-none"
                  />
                </div>
                <ul className="overflow-y-auto max-h-[340px]">
                  {citiesLoading ? (
                    <li className="px-4 py-3 text-sm text-gold-light/40 font-body flex items-center gap-2 justify-center">
                      <Loader2 className="w-4 h-4 animate-spin" /> جاري تحميل المدن...
                    </li>
                  ) : citiesError ? (
                    <li className="px-4 py-3 text-sm text-red-400 font-body text-center">{citiesError}</li>
                  ) : filteredCities.length === 0 ? (
                    <li className="px-4 py-3 text-sm text-gold-light/40 font-body">لا توجد نتائج</li>
                  ) : (
                    <>
                      {filteredCities.filter((c) => pinnedCityNames.includes(c)).map((c) => (
                        <li key={c}>
                          <button
                            type="button"
                            onClick={() => {
                              setForm({ ...form, city: c, secteur: "" });
                              setCityOpen(false);
                              setCitySearch("");
                            }}
                            className={`w-full text-right px-4 min-h-[44px] flex items-center text-sm font-body font-medium transition-colors ${
                              form.city === c
                                ? "bg-gold/20 text-gold-light"
                                : "text-champagne hover:bg-gold/10"
                            }`}
                          >
                            {c}
                          </button>
                        </li>
                      ))}
                      {!citySearch && filteredCities.some((c) => !pinnedCityNames.includes(c)) && (
                        <li className="px-4 py-2 text-xs text-gold-light/40 font-body border-t border-b border-gold/10 bg-gold/5 text-center select-none">
                          --- المزيد (بحث) ---
                        </li>
                      )}
                      {filteredCities.filter((c) => !pinnedCityNames.includes(c)).map((c) => (
                        <li key={c}>
                          <button
                            type="button"
                            onClick={() => {
                              setForm({ ...form, city: c, secteur: "" });
                              setCityOpen(false);
                              setCitySearch("");
                            }}
                            className={`w-full text-right px-4 min-h-[44px] flex items-center text-sm font-body transition-colors ${
                              form.city === c
                                ? "bg-gold/20 text-gold-light"
                                : "text-champagne/80 hover:bg-gold/10"
                            }`}
                          >
                            {c}
                          </button>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Secteur - dependent dropdown */}
          {hasSecteurs && (
            <div>
              <label className="block font-body text-sm font-medium text-champagne mb-2">المنطقة / Secteur</label>
              <select
                value={form.secteur}
                onChange={(e) => setForm({ ...form, secteur: e.target.value })}
                className="w-full bg-dark-bg border border-gold/30 rounded-xl px-4 py-3 min-h-[56px] text-champagne font-body focus:outline-none focus:border-gold transition-colors appearance-none"
              >
                <option value="">اختاري المنطقة</option>
                {availableSecteurs.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          {/* Offer */}
          <div>
            <label className="block font-body text-sm font-medium text-champagne mb-2">العرض</label>
            <select
              value={form.offer}
              onChange={(e) => setForm({ ...form, offer: e.target.value })}
              className="w-full bg-dark-bg border border-gold/30 rounded-xl px-4 py-3 min-h-[56px] text-champagne font-body focus:outline-none focus:border-gold transition-colors appearance-none"
            >
              {offers.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {error && (
            <p className="font-body text-sm text-red-400 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold-gradient text-dark-bg font-body text-lg font-bold py-4 rounded-xl min-h-[56px] hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "جاري الإرسال..." : "أكدي الطلب 🛒"}
          </button>

          <p className="text-center text-xs text-gold-light/50">
            🚚 توصيل مجاني | 💳 الدفع عند الاستلام | 🌿 100% طبيعي
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderForm;
