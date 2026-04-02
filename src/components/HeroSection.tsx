import { useEffect, useState } from "react";
import heroModel from "@/assets/hero-model.webp";

const HeroSection = () => {
  const [ctaPulse, setCtaPulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setCtaPulse(true);
      setTimeout(() => setCtaPulse(false), 550);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const scrollToOrder = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", { content_name: "Paravita Neo Collagen", content_category: "Hero CTA" });
    }
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section dir="rtl" className="relative overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* Hero background image — eager loaded for LCP */}
      <img
        src={heroModel}
        alt="Paravita Neo Collagen"
        width={800}
        height={1434}
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: [
            "linear-gradient(to bottom,",
            "rgba(4,1,0,0.70) 0%,",
            "rgba(4,1,0,0.25) 30%,",
            "rgba(4,1,0,0.15) 50%,",
            "rgba(4,1,0,0.60) 75%,",
            "rgba(4,1,0,0.95) 100%)",
          ].join(" "),
        }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col justify-between items-center text-center"
        style={{ zIndex: 20, paddingTop: "56px", paddingBottom: "28px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        {/* TOP: Headline area */}
        <div className="flex flex-col items-center pt-2">
          {/* Stars + trust */}
          <div
            className="flex items-center justify-center gap-2 mb-6"
            style={{
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
              padding: "6px 14px",
              borderRadius: "24px",
              border: "1px solid rgba(201,151,42,0.2)",
            }}
          >
            <span style={{ color: "#E8C460", fontSize: "14px", letterSpacing: "-1px" }}>⭐⭐⭐⭐⭐</span>
            <span className="text-[11px] font-bold font-body" style={{ color: "rgba(255,255,255,0.85)" }}>
              أكثر من 10,000 زبونة راضية في المغرب
            </span>
          </div>

          {/* Headline — updated for conversion */}
          <h1
            className="font-display font-semibold leading-tight mb-3"
            style={{
              fontSize: "clamp(26px, 7.5vw, 42px)",
              color: "#E8C460",
              textShadow: "0 2px 24px rgba(0,0,0,0.95), 0 0 50px rgba(201,151,42,0.30)",
              maxWidth: "420px",
            }}
          >
            اكتشفي السر لي 10,000 مغربية استخدموه — نتائج مرئية في 30 يوم
          </h1>
        </div>

        {/* BOTTOM: Sub-headline + CTA */}
        <div className="flex flex-col items-center w-full" style={{ maxWidth: "420px" }}>
          {/* Sub-headline */}
          <p
            className="text-sm leading-relaxed mb-5 font-body"
            style={{
              color: "rgba(255,255,255,0.90)",
              textShadow: "0 1px 10px rgba(0,0,0,0.95)",
              maxWidth: "360px",
            }}
          >
            استعيدي شباب بشرتك طبيعيًا مع كولاجين البحر النقي. نتائج ملموسة مع الاستخدام المنتظم.
          </p>

          {/* Primary CTA — pulsating gold */}
          <button
            onClick={scrollToOrder}
            className="w-full rounded-2xl font-black active:scale-95 font-body"
            style={{
              padding: "18px 20px",
              fontSize: "17px",
              background: "linear-gradient(135deg, #E8C460 0%, #C9972A 52%, #A07820 100%)",
              color: "#1A1208",
              border: "none",
              cursor: "pointer",
              marginBottom: "10px",
              minHeight: "56px",
              boxShadow: ctaPulse
                ? "0 0 0 8px rgba(201,151,42,0.30), 0 6px 30px rgba(201,151,42,0.70)"
                : "0 5px 22px rgba(201,151,42,0.52)",
              transform: ctaPulse ? "scale(1.02)" : "scale(1)",
              transition: "box-shadow 0.3s, transform 0.3s",
            }}
          >
            🛒 اطلبي الآن - الدفع عند الاستلام
          </button>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
            {[
              { emoji: "🔒", label: "بدون دفع مسبق" },
              { emoji: "🚀", label: "توصيل 24h" },
              { emoji: "🇲🇦", label: "جميع المدن" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="text-2xl">{badge.emoji}</span>
                <span
                  className="font-body font-medium text-sm md:text-base"
                  style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
