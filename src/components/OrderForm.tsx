import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const cities = [
  "الدار البيضاء", "الرباط", "مراكش", "فاس", "طنجة", "أكادير",
  "مكناس", "سلا", "وجدة", "القنيطرة", "تطوان", "الجديدة",
  "خنيفرة", "بني ملال", "الناظور", "العيون", "أخرى"
];

const offers = [
  { label: "1 علبة — 199 درهم", value: "1-box-199" },
  { label: "3 علب + سيروم — 299 درهم", value: "3-boxes-299" },
  { label: "4 علب + 2 سيروم — 399 درهم", value: "4-boxes-399" },
];

const offerPriceMap: Record<string, number> = {
  "1-box-199": 199,
  "3-boxes-299": 299,
  "4-boxes-399": 399,
};

const OrderForm = () => {
  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    city: "",
    offer: "3-boxes-299",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
      const { error: dbError } = await supabase.from("orders").insert({
        customer_name: form.customer_name.trim(),
        phone: form.phone.trim(),
        city: form.city,
        offer_price: offerPriceMap[form.offer],
        product: "Neo Collagen",
        created_at: new Date().toISOString(),
      } as any);

      if (dbError) throw dbError;
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
    <section id="order" className="py-20 md:py-28 bg-dark-bg">
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

          {/* City */}
          <div>
            <label className="block font-body text-sm font-medium text-champagne mb-2">المدينة *</label>
            <select
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full bg-dark-bg border border-gold/30 rounded-xl px-4 py-3 min-h-[56px] text-champagne font-body focus:outline-none focus:border-gold transition-colors appearance-none"
            >
              <option value="">اختاري المدينة</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

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
