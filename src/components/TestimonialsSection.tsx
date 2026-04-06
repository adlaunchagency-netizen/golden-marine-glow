import { useState, useCallback, useEffect, useRef } from "react";
import whatsapp1 from "@/assets/whatsapp-1.webp";
import whatsapp2 from "@/assets/whatsapp-2.webp";
import whatsapp3 from "@/assets/whatsapp-3.webp";
import whatsapp4 from "@/assets/whatsapp-4.webp";

const testimonials = [
  { image: whatsapp2, name: "زبونة", city: "فاس", quote: "نتيجة زوينة — هاني صورت ليك قبل وبعد" },
  { image: whatsapp4, name: "زبونة", city: "طنجة", quote: "هادوك الفراغات مبقاوش وشعري ولا قوي بزاف" },
  { image: whatsapp1, name: "Chofi", city: "الدار البيضاء", quote: "بغيت نقوليك شكراً بزاف على الكولاجين — Tooop والله" },
  { image: whatsapp3, name: "زبونة", city: "مراكش", quote: "شوفي ضفاري كي ولاو — 15 يوم غير" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const dragging = useRef(false);

  const go = useCallback((dir: number) => {
    setActive(p => Math.max(0, Math.min(testimonials.length - 1, p + dir)));
  }, []);

  // Auto-advance every 4s
  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  // Swipe support
  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; dragging.current = true; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? -1 : 1); // RTL: swipe left = next in RTL is -1
  };

  return (
    <section id="testimonials" className="w-full" dir="rtl" style={{ background: "var(--cream)", padding: "24px 0 28px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "hsl(var(--primary))", textAlign: "center", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6, padding: "0 18px" }}>
        — تجارب حقيقية من واتساب —
      </div>
      <p style={{ textAlign: "center", fontSize: 13, color: "var(--soft-text)", margin: "0 0 14px", padding: "0 18px" }}>
        محادثات واتساب حقيقية مع زبوناتنا 💚
      </p>

      {/* Carousel */}
      <div style={{ overflow: "hidden", position: "relative" }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            transition: "transform 0.35s ease",
            transform: `translateX(${active * 100}%)`, // RTL: positive = scroll right
          }}
        >
          {testimonials.map((t, i) => (
            <div key={i} style={{ minWidth: "100%", padding: "0 14px", boxSizing: "border-box" }}>
              <div style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", border: "1px solid rgba(13,148,136,0.12)" }}>
                <img
                  src={t.image}
                  alt={`محادثة واتساب مع ${t.name} من ${t.city}`}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  style={{ width: "100%", display: "block", borderRadius: "18px 18px 0 0" }}
                />
                <div style={{ padding: "10px 14px 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "hsl(var(--foreground))" }}>{t.name}</span>
                    <span style={{ fontSize: 11, color: "var(--soft-text)" }}>📍 {t.city}</span>
                    <span style={{ fontSize: 12, color: "#F59E0B", marginRight: "auto", letterSpacing: 1 }}>★★★★★</span>
                  </div>
                  <div style={{ fontSize: 12.5, color: "hsl(var(--muted-foreground))", fontStyle: "italic", lineHeight: 1.5 }}>
                    "{t.quote}"
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: "#25D366", fontWeight: 600, marginTop: 6, background: "rgba(37,211,102,0.08)", borderRadius: 20, padding: "2px 8px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.61l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.344 0-4.507-.81-6.214-2.163l-.435-.348-3.2 1.073 1.073-3.2-.348-.435A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                    محادثة واتساب حقيقية ✅
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 14 }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`شهادة ${i + 1}`}
            style={{
              width: i === active ? 20 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              background: i === active ? "hsl(var(--primary))" : "rgba(0,0,0,0.15)",
              transition: "all 0.3s",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
