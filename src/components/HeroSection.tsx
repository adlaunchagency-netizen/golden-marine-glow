import { useEffect, useState } from "react";

const HeroSection = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => !p), 2000);
    return () => clearInterval(t);
  }, []);

  const scrollToOrder = () => {
    const el = document.getElementById("order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100svh", maxHeight: "100svh" }}
      dir="rtl"
    >
      {/* ── BACKGROUND WOMAN ── */}
      <img
        src="/assets/neo-collagen-hero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ zIndex: 0 }}
      />

      {/* ── GRADIENT OVERLAY ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,4,1,0.75) 0%, rgba(8,4,1,0.35) 40%, rgba(8,4,1,0.65) 75%, rgba(8,4,1,0.97) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── GOLD GLOW behind bottle ── */}
      <div
        className="absolute bottom-0 left-0"
        style={{
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,151,42,0.5) 0%, rgba(201,151,42,0.15) 50%, transparent 75%)",
          transform: "translate(-30%, 30%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── BOTTLE — large, left side, bottom-anchored ── */}
      <img
        src="https://cdn.shopify.com/s/files/1/1002/0913/1888/files/f19f9ef9-f69f-4ed4-aa69-aba7cec4fec8.webp?v=1773633264"
        alt="Neo Collagen"
        className="absolute bottom-0 left-0"
        style={{
          width: "210px",
          objectFit: "contain",
          zIndex: 3,
          filter:
            "drop-shadow(0 0 28px rgba(201,151,42,0.75)) drop-shadow(0 12px 20px rgba(0,0,0,0.7))",
          marginLeft: "-10px",
        }}
      />

      {/* ── CONTENT — right side ── */}
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ zIndex: 4, padding: "72px 20px 28px 190px" }}
      >
        {/* TOP: badge + headlines */}
        <div>
          {/* Urgency badge */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{
              background: "rgba(201,151,42,0.18)",
              border: "1px solid rgba(201,151,42,0.55)",
              color: "#E8C460",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{
                background: "#E8C460",
                boxShadow: pulse ? "0 0 6px #E8C460" : "none",
                transition: "box-shadow 0.6s",
              }}
            />
            الكمية محدودة
          </div>

          {/* Darija hook */}
          <p
            className="text-xs font-semibold mb-2 leading-snug"
            style={{
              color: "#C8A96E",
              textShadow: "0 1px 8px rgba(0,0,0,1)",
            }}
          >
            عيّيتي من تساقط الشعر؟
          </p>

          {/* Main headline */}
          <h1
            className="font-black leading-none mb-1"
            style={{
              fontSize: "clamp(32px, 9vw, 44px)",
              color: "#E8C460",
              textShadow:
                "0 2px 24px rgba(0,0,0,1), 0 0 48px rgba(201,151,42,0.4)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            بشرة مشرقة
          </h1>
          <h2
            className="font-black leading-none mb-4"
            style={{
              fontSize: "clamp(24px, 7vw, 36px)",
              color: "#FFFFFF",
              textShadow: "0 2px 20px rgba(0,0,0,1)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            من أعماق البحر
          </h2>

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-3">
            <span style={{ color: "#E8C460", fontSize: "13px" }}>
              ⭐⭐⭐⭐⭐
            </span>
            <span
              className="text-xs font-bold"
              style={{
                color: "rgba(255,255,255,0.75)",
                textShadow: "0 1px 6px rgba(0,0,0,0.9)",
              }}
            >
              +10,000 سيدة
            </span>
          </div>

          {/* Short benefit pills */}
          <div className="flex flex-col gap-1.5">
            {[
              "✓ بشرة أكثر إشراقاً",
              "✓ شعر أقوى وأكثف",
              "✓ أظافر لا تنكسر",
            ].map((b) => (
              <span
                key={b}
                className="text-xs font-semibold"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  textShadow: "0 1px 8px rgba(0,0,0,1)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM: CTAs + trust */}
        <div>
          {/* Trust pills row */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {["🚚 توصيل مجاني", "💳 الدفع عند الاستلام"].map((t) => (
              <span
                key={t}
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  backdropFilter: "blur(6px)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* PRIMARY CTA */}
          <button
            onClick={scrollToOrder}
            className="w-full py-4 rounded-2xl font-black text-base mb-2 active:scale-95 transition-all duration-150"
            style={{
              background:
                "linear-gradient(135deg, #E8C460 0%, #C9972A 55%, #A07820 100%)",
              color: "#1A1208",
              fontFamily: "'Cairo', sans-serif",
              boxShadow:
                "0 6px 24px rgba(201,151,42,0.6), 0 2px 8px rgba(0,0,0,0.5)",
              border: "none",
              cursor: "pointer",
            }}
          >
            🛒 اطلبي الآن — ابتداءً من 199 درهم
          </button>

          {/* SECONDARY CTA */}
          <button
            onClick={scrollToOrder}
            className="w-full py-3 rounded-2xl text-sm font-bold active:scale-95 transition-all duration-150"
            style={{
              background: "transparent",
              border: "1.5px solid rgba(201,151,42,0.55)",
              color: "#E8C460",
              fontFamily: "'Cairo', sans-serif",
              cursor: "pointer",
            }}
          >
            🎁 3 علب = سيروم مجاناً | 4 علب = سيرومان — شوفي العروض
          </button>

          {/* Micro-copy */}
          <p
            className="text-center text-xs mt-2"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            🔒 بدون دفع مسبق · الدفع عند الاستلام فقط
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
