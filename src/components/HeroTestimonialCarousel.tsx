import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  city: string;
  benefit: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    city: "الدار البيضاء",
    benefit: "نتيجة على البشرة",
    text: "كنت شاكة لكن الحمد لله، طلبت 3 علب وتوصلت في 24 ساعة. البشرة اللي كانت حمراء صارت براقة! ⭐⭐⭐⭐⭐",
  },
  {
    city: "مراكش",
    benefit: "نتيجة على الشعر",
    text: "شعري اللي كان ضعيف صار قوي وحريري. الحمد لله على النتائج 🙏 ⭐⭐⭐⭐⭐",
  },
  {
    city: "الرباط",
    benefit: "نتيجة عام",
    text: "توصل في 24 ساعة، الدفع عند الاستلام. سهل جداً وآمن! نصحت جميع صديقاتي 💚 ⭐⭐⭐⭐⭐",
  },
];

const HeroTestimonialCarousel = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[active];

  return (
    <section dir="rtl" className="py-10 md:py-14 bg-dark">
      <div className="container max-w-2xl">
        <div
          className="rounded-2xl p-6 md:p-8 border border-gold/20 text-center"
          style={{ background: "rgba(26,18,8,0.95)" }}
        >
          {/* City badge */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-lg">🇲🇦</span>
            <span className="font-body text-sm font-medium" style={{ color: "#E8C460" }}>
              {t.city}
            </span>
            <span
              className="font-body text-xs px-2 py-0.5 rounded-full"
              style={{ background: "rgba(201,151,42,0.15)", color: "#E8C460" }}
            >
              {t.benefit}
            </span>
          </div>

          {/* Testimonial text */}
          <p
            className="font-body text-base md:text-lg leading-relaxed mb-5"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            "{t.text}"
          </p>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`شهادة ${i + 1}`}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  background: i === active ? "#E8C460" : "rgba(201,151,42,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTestimonialCarousel;
