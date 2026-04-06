import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";

const testimonials = [
  {
    name: "فاطمة الزهراء",
    city: "الدار البيضاء",
    image: testimonial1,
    text: "بعد الولادة كان شعري يتساقط بشكل مرعب، بعد 15 يوم من بارافيتا لاحظت فرقاً واضحاً",
  },
  {
    name: "سمية بنعلي",
    city: "مراكش",
    image: testimonial2,
    text: "جربت منتجات كثيرة، بارافيتا هو الوحيد اللي أثر فعلاً — وآمن للرضاعة",
  },
  {
    name: "نورة الإدريسي",
    city: "الرباط",
    image: testimonial3,
    text: "شعري رجع لطبيعته خلال شهر، أنصح به لكل أم بعد الولادة",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="w-full" dir="rtl" style={{ background: "var(--cream)", paddingBottom: 28 }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#0D9488", textAlign: "center", letterSpacing: "0.08em", textTransform: "uppercase", margin: "24px 0 14px", padding: "0 18px" }}>
      — تجارب أمهات حقيقيات —
    </div>
    <div style={{ padding: "0 18px", display: "flex", flexDirection: "column", gap: 12 }}>
      {testimonials.map((t, i) => (
        <div key={i} style={{ background: "#fff", border: "1px solid rgba(13,148,136,0.18)", borderRadius: 16, padding: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <img
              loading="lazy"
              src={t.image}
              alt={t.name}
              style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "2px solid rgba(13,148,136,0.3)", flexShrink: 0 }}
            />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>{t.name}</div>
              <div style={{ fontSize: 11, color: "var(--soft-text)" }}>📍 {t.city}</div>
            </div>
            <div style={{ fontSize: 12, color: "#F59E0B", marginRight: "auto", letterSpacing: 1 }}>★★★★★</div>
          </div>
          <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, fontStyle: "italic" }}>
            "{t.text}"
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 10, color: "#0D9488", fontWeight: 600, marginTop: 6, background: "rgba(13,148,136,0.07)", borderRadius: 20, padding: "2px 8px" }}>
            ✓ شراء موثق
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
