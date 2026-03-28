import { useEffect, useState } from "react";

const BOTTLE_URL =
  "https://cdn.shopify.com/s/files/1/1002/0913/1888/files/" + "f19f9ef9-f69f-4ed4-aa69-aba7cec4fec8.webp?v=1773633264";

const HeroSection = () => {
  const [ctaPulse, setCtaPulse] = useState(false);

  /* CTA heartbeat every 4s to re-attract attention */
  useEffect(() => {
    const t = setInterval(() => {
      setCtaPulse(true);
      setTimeout(() => setCtaPulse(false), 550);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const scrollToOrder = () => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section dir="rtl" className="relative overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* ── LAYER 0: WOMAN BACKGROUND ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          zIndex: 0,
          backgroundImage: "url('/assets/neo-collagen-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ── LAYER 1: DARK GRADIENT OVERLAY ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: [
            "linear-gradient(to bottom,",
            "rgba(4,1,0,0.88) 0%,",
            "rgba(4,1,0,0.52) 25%,",
            "rgba(4,1,0,0.30) 50%,",
            "rgba(4,1,0,0.75) 75%,",
            "rgba(4,1,0,0.97) 100%)",
          ].join(" "),
        }}
      />

      {/* ── LAYER 2: GOLD GLOW behind bottle ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          zIndex: 2,
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle," + "rgba(201,151,42,0.50) 0%," + "rgba(201,151,42,0.16) 48%," + "transparent 72%)",
          transform: "translate(22%, 22%)",
        }}
      />

      {/* ── LAYER 3: BOTTLE — bottom-right, transparent, glowing ── */}
      <img
        src={BOTTLE_URL}
        alt="Paravita Neo Collagen"
        aria-hidden="true"
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        style={{
          zIndex: 3,
          width: "40vw",
          maxWidth: "195px",
          height: "auto",
          maxHeight: "58vh",
          objectFit: "contain",
          objectPosition: "bottom right",
          background: "transparent",
          filter: "drop-shadow(0 0 28px rgba(201,151,42,0.80))" + " drop-shadow(0 12px 20px rgba(0,0,0,0.65))",
        }}
      />

      {/* ── LAYER 4: ALL CONTENT ── */}
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{
          zIndex: 20,
          paddingTop: "68px",
          paddingBottom: "28px",
          /* right padding = bottle zone so text never overlaps */
          paddingRight: "calc(40vw + 10px)",
          paddingLeft: "20px",
        }}
      >
        {/* ── TOP: Badge + Headlines + Sub + Pills ── */}
        <div>
          {/* Gold badge */}
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "#C9972A",
              color: "#1A1208",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            كولاجين بحري طبيعي 100%
          </span>

          {/* H1 */}
          <h1
            className="font-black leading-none mb-2"
            style={{
              fontSize: "clamp(36px, 11vw, 52px)",
              color: "#E8C460",
              textShadow: "0 2px 20px rgba(0,0,0,0.95)," + "0 0 44px rgba(201,151,42,0.35)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            بشرة مشرقة
          </h1>

          {/* H2 */}
          <h2
            className="font-black leading-tight mb-5"
            style={{
              fontSize: "clamp(24px, 7.5vw, 38px)",
              color: "#FFFFFF",
              textShadow: "0 2px 20px rgba(0,0,0,0.95)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            من أعماق البحر
          </h2>

          {/* Subtext */}
          <p
            className="text-sm leading-relaxed mb-5"
            style={{
              color: "rgba(255,255,255,0.85)",
              textShadow: "0 1px 8px rgba(0,0,0,0.95)",
              fontFamily: "'Cairo', sans-serif",
              maxWidth: "260px",
            }}
          >
            Neo Collagen من Paravita — ببتيدات الكولاجين البحري الذي يعطيك بشرة صافية، شعر قوي، وأظافر متينة.
          </p>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-5">
            <span style={{ color: "#E8C460", fontSize: "14px", letterSpacing: "-1px" }}>⭐⭐⭐⭐⭐</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.75)",
                textShadow: "0 1px 6px rgba(0,0,0,0.9)",
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              +10,000 سيدة مغربية
            </span>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2">
            {["🚚 توصيل مجاني", "💳 الدفع عند الاستلام", "🌿 100% طبيعي"].map((item) => (
              <span
                key={item}
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  color: "#fff",
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(5px)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── BOTTOM: CTA ── */}
        <div>
          {/* PRIMARY CTA — working onClick */}
          <button
            onClick={scrollToOrder}
            className="w-full rounded-2xl font-black active:scale-95"
            style={{
              padding: "18px 20px",
              fontSize: "17px",
              fontFamily: "'Cairo', sans-serif",
              background: "linear-gradient(135deg, #E8C460 0%, #C9972A 52%, #A07820 100%)",
              color: "#1A1208",
              border: "none",
              cursor: "pointer",
              marginBottom: "10px",
              boxShadow: ctaPulse
                ? "0 0 0 7px rgba(201,151,42,0.28), 0 6px 28px rgba(201,151,42,0.70)"
                : "0 5px 22px rgba(201,151,42,0.52)",
              transform: ctaPulse ? "scale(1.018)" : "scale(1)",
              transition: "box-shadow 0.28s, transform 0.28s",
            }}
          >
            🛒 اطلبي الآن — ابتداءً من 199 درهم
          </button>

          {/* SECONDARY CTA — working onClick */}
          <button
            onClick={scrollToOrder}
            className="w-full rounded-2xl font-bold active:scale-95"
            style={{
              padding: "13px 20px",
              fontSize: "13px",
              fontFamily: "'Cairo', sans-serif",
              background: "transparent",
              border: "1.5px solid rgba(201,151,42,0.50)",
              color: "#E8C460",
              cursor: "pointer",
              marginBottom: "8px",
              transition: "opacity 0.2s",
            }}
          >
            🎁 3 علب = سيروم مجاناً | 4 علب = سيرومان — شوفي العروض
          </button>

          {/* Micro-copy */}
          <p
            className="text-center"
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.40)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            🔒 بدون دفع مسبق · الدفع فقط عند استلام الطلب · توصيل 24-48 ساعة
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
