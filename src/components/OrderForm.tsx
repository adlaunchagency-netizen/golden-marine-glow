import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useCities } from "@/hooks/useCities";

const ChevronSvg = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);
const SearchSvg = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const LoaderSvg = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);

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
  { label: "باك الأمومة 3 علب + سيروم — 299 درهم ⭐", value: "3-boxes-299", price: 299, recommended: true },
  { label: "باك المكثف 4 علب + سيرومين — 399 درهم 💎", value: "4-boxes-399", price: 399 },
];

const offerPriceMap: Record<string, number> = {
  "1-box-199": 199,
  "3-boxes-299": 299,
  "4-boxes-399": 399,
};

const phonePrefixCityMap: Record<string, string> = {
  "061": "Casablanca",
  "062": "Fes",
  "063": "Marrakech",
  "064": "Agadir",
  "065": "Tétouan",
  "066": "Tanger",
  "067": "El Jadida",
  "068": "Sale",
  "069": "Sidi Kacem",
  "070": "Khenifra",
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
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const markTouched = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));

  const isPhoneValid = /^(0[5-7]\d{8}|\+212[5-7]\d{8})$/.test(form.phone.replace(/\s/g, ""));
  const isNameValid = form.customer_name.trim().length >= 3;
  const isCityValid = !!form.city;

  const fieldErrors: Record<string, string> = {};
  if (touched.customer_name && !form.customer_name.trim()) fieldErrors.customer_name = "المرجو إدخال الاسم الكامل";
  else if (touched.customer_name && !isNameValid) fieldErrors.customer_name = "الاسم قصير بزاف — 3 حروف على الأقل";
  if (touched.phone && !form.phone.trim()) fieldErrors.phone = "المرجو إدخال رقم الهاتف";
  else if (touched.phone && form.phone.trim() && !isPhoneValid) fieldErrors.phone = "رقم الهاتف غير صحيح — مثال: 0612345678";
  if (touched.city && !isCityValid) fieldErrors.city = "المرجو اختيار المدينة";

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
      <section id="order" style={{ background: "#1E293B", padding: "60px 0" }}>
        <div className="container max-w-lg">
          <div
            className="text-center rounded-2xl p-8 md:p-12 fade-in visible"
            style={{ background: "rgba(13,148,136,0.1)", border: "1px solid rgba(13,148,136,0.3)" }}
          >
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-body text-2xl font-bold mb-3" style={{ color: "#F1F5F9" }}>تم استلام طلبك بنجاح!</h3>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.6)" }}>غادي نتواصلو معاك قريباً لتأكيد الطلب 📞</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" style={{ background: "#1E293B", padding: "60px 0" }}>
      <div className="container max-w-lg">
        <div className="text-center mb-10">
          <h2 className="font-body text-3xl md:text-4xl font-bold mb-3" style={{ color: "#F1F5F9" }}>
            اطلبي <span className="text-gold-gradient">الآن</span>
          </h2>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.5)" }}>عمري الفورم وغادي نتصلو بيك لتأكيد الطلب</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-6 md:p-8 space-y-5"
          style={{ background: "rgba(13,148,136,0.05)", border: "1px solid rgba(13,148,136,0.2)" }}
        >
          {/* Name */}
          <div>
            <label className="block font-body text-sm font-medium mb-2" style={{ color: "#F1F5F9" }}>الاسم الكامل *</label>
            <input
              type="text"
              value={form.customer_name}
              onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
              placeholder="مثال: فاطمة الزهراء"
              className="w-full rounded-xl px-4 py-3 min-h-[56px] font-body focus:outline-none transition-colors"
              style={{ background: "#0F172A", border: "1px solid rgba(13,148,136,0.3)", color: "#F1F5F9" }}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-body text-sm font-medium mb-2" style={{ color: "#F1F5F9" }}>رقم الهاتف *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => {
                const val = e.target.value;
                setForm((prev) => {
                  const next = { ...prev, phone: val };
                  // Auto-detect city from phone prefix (only if city not yet chosen)
                  if (!prev.city) {
                    const clean = val.replace(/\s/g, "");
                    const prefix3 = clean.startsWith("+212") ? "0" + clean.slice(4, 6) : clean.slice(0, 3);
                    const detected = phonePrefixCityMap[prefix3];
                    if (detected && allCityNames.includes(detected)) {
                      next.city = detected;
                      next.secteur = "";
                    }
                  }
                  return next;
                });
              }}
              placeholder="06XXXXXXXX"
              dir="ltr"
              className="w-full rounded-xl px-4 py-3 min-h-[56px] font-body focus:outline-none transition-colors text-left"
              style={{ background: "#0F172A", border: "1px solid rgba(13,148,136,0.3)", color: "#F1F5F9" }}
            />
          </div>

          {/* City - Searchable Dropdown */}
          <div ref={cityRef} className="relative">
            <label className="block font-body text-sm font-medium mb-2" style={{ color: "#F1F5F9" }}>المدينة *</label>
            <button
              type="button"
              onClick={() => { setCityOpen(!cityOpen); setCitySearch(""); }}
              className="w-full rounded-xl px-4 py-3 min-h-[56px] font-body focus:outline-none transition-colors flex items-center justify-between"
              style={{ background: "#0F172A", border: "1px solid rgba(13,148,136,0.3)", color: "#F1F5F9" }}
            >
              <span style={{ color: form.city ? "#F1F5F9" : "rgba(255,255,255,0.3)" }}>
                {form.city || "اختاري المدينة"}
              </span>
              <ChevronSvg className={`transition-transform ${cityOpen ? "rotate-180" : ""}`} style={{ color: "rgba(255,255,255,0.4)" }} />
            </button>

            {cityOpen && (
              <div className="absolute z-50 top-full mt-1 w-full rounded-xl overflow-hidden shadow-lg max-h-[400px]" style={{ background: "#0F172A", border: "1px solid rgba(13,148,136,0.3)" }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(13,148,136,0.2)" }}>
                  <SearchSvg className="shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
                  <input
                    type="text"
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                    placeholder="ابحثي عن مدينتك..."
                    autoFocus
                    className="w-full bg-transparent font-body text-sm focus:outline-none"
                    style={{ color: "#F1F5F9" }}
                  />
                </div>
                <ul className="overflow-y-auto max-h-[340px]">
                  {citiesLoading ? (
                    <li className="px-4 py-3 text-sm font-body flex items-center gap-2 justify-center" style={{ color: "rgba(255,255,255,0.4)" }}>
                      <LoaderSvg className="w-4 h-4 animate-spin" /> جاري تحميل المدن...
                    </li>
                  ) : citiesError ? (
                    <li className="px-4 py-3 text-sm text-red-400 font-body text-center">{citiesError}</li>
                  ) : filteredCities.length === 0 ? (
                    <li className="px-4 py-3 text-sm font-body" style={{ color: "rgba(255,255,255,0.4)" }}>لا توجد نتائج</li>
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
                            className="w-full text-right px-4 min-h-[44px] flex items-center text-sm font-body font-medium transition-colors"
                            style={{
                              background: form.city === c ? "rgba(13,148,136,0.2)" : "transparent",
                              color: form.city === c ? "#14B8A6" : "#F1F5F9",
                            }}
                          >
                            {c}
                          </button>
                        </li>
                      ))}
                      {!citySearch && filteredCities.some((c) => !pinnedCityNames.includes(c)) && (
                        <li className="px-4 py-2 text-xs font-body text-center select-none" style={{ color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(13,148,136,0.1)", borderBottom: "1px solid rgba(13,148,136,0.1)", background: "rgba(13,148,136,0.05)" }}>
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
                            className="w-full text-right px-4 min-h-[44px] flex items-center text-sm font-body transition-colors"
                            style={{
                              background: form.city === c ? "rgba(13,148,136,0.2)" : "transparent",
                              color: form.city === c ? "#14B8A6" : "rgba(255,255,255,0.7)",
                            }}
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
              <label className="block font-body text-sm font-medium mb-2" style={{ color: "#F1F5F9" }}>المنطقة / Secteur</label>
              <select
                value={form.secteur}
                onChange={(e) => setForm({ ...form, secteur: e.target.value })}
                className="w-full rounded-xl px-4 py-3 min-h-[56px] font-body focus:outline-none transition-colors appearance-none"
                style={{ background: "#0F172A", border: "1px solid rgba(13,148,136,0.3)", color: "#F1F5F9" }}
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
            <label className="block font-body text-sm font-medium mb-2" style={{ color: "#F1F5F9" }}>العرض</label>
            <select
              value={form.offer}
              onChange={(e) => setForm({ ...form, offer: e.target.value })}
              className="w-full rounded-xl px-4 py-3 min-h-[56px] font-body focus:outline-none transition-colors appearance-none"
              style={{ background: "#0F172A", border: "1px solid rgba(13,148,136,0.3)", color: "#F1F5F9" }}
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
            className="w-full font-body text-lg font-bold py-4 rounded-xl min-h-[56px] transition-opacity disabled:opacity-50"
            style={{ background: "#0D9488", color: "#fff", border: "none" }}
          >
            {loading ? "⏳ جاري تأكيد طلبك..." : "أطلب الآن — الدفع عند الاستلام 🛒"}
          </button>

          <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            توصيل مجاني في 24–48 ساعة | الدفع عند الاستلام
          </p>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
