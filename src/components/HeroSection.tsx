import { useEffect, useState, useRef } from "react";
import heroBg from "@/assets/neo-collagen-hero.png";

const TICKER_ITEMS = [
  "⭐ +10,000 سيدة مغربية وثقن في نيو كولاجين",
  "🚚 توصيل مجاني لجميع مدن المغرب",
  "💳 الدفع فقط عند الاستلام — بدون مخاطرة",
  "🌿 كولاجين بحري 100% طبيعي — بدون مواد كيميائية",
  "🎁 اطلبي 3 علب — واحصلي على سيروم مجاناً",
  "🔥 اطلبي 4 علب — واحصلي على 2 سيروم مجاناً",
];

const RESULTS = [
  { ar: "بشرة مشرقة", sub: "في 3 أسابيع" },
  { ar: "شعر أكثف", sub: "بعد شهر واحد" },
  { ar: "أظافر قوية", sub: "في 15 يوم" },
  { ar: "راحة المفاصل", sub: "من الأسبوع الأول" },
];

const HeroSection = () => {
  const [tickerPos, setTickerPos] = useState(0);
  const [activeResult, setActiveResult] = useState(0);
  const [ctaPulse, setCtaPulse] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);

  /* ── Ticker RAF ── */
  useEffect(() => {
    const animate = () => {
      posRef.current += 0.4;
      const half = (tickerRef.current?.scrollWidth ?? 1200) / 2;
      if (posRef.current >= half) posRef.current = 0;
      setTickerPos(posRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── Result card cycle ── */
  useEffect(() => {
    const t = setInterval(() => setActiveResult((i) => (i + 1) % RESULTS.length), 2400);
    return () => clearInterval(t);
  }, []);

  /* ── CTA pulse ── */
  useEffect(() => {
    const t = setInterval(() => {
      setCtaPulse(true);
      setTimeout(() => setCtaPulse(false), 600);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const scrollToOrder = () => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section dir="rtl" className="relative w-full overflow-hidden" style={{ height: "100svh" }}>
      {/* ── 0. BACKGROUND WOMAN ── */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />

      {/* ── 1. CINEMATIC OVERLAY ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: [
            "linear-gradient(to bottom,",
            "rgba(5,2,0,0.90) 0%,",
            "rgba(5,2,0,0.38) 30%,",
            "rgba(5,2,0,0.25) 52%,",
            "rgba(5,2,0,0.72) 74%,",
            "rgba(5,2,0,0.97) 100%)",
          ].join(" "),
        }}
      />

      {/* ── 2. GOLD GLOW behind bottle ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          zIndex: 2,
          width: "55vw",
          maxWidth: "320px",
          height: "55vw",
          maxHeight: "320px",
          background:
            "radial-gradient(ellipse at center, rgba(201,151,42,0.52) 0%, rgba(201,151,42,0.16) 48%, transparent 72%)",
          transform: "translate(22%, 22%)",
        }}
      />

      {/* ── 3. BOTTLE — right, bottom, BEHIND text ── */}
      <img
        src="https://cdn.shopify.com/s/files/1/1002/0913/1888/files/f19f9ef9-f69f-4ed4-aa69-aba7cec4fec8.webp?v=1773633264"
        alt="Paravita Neo Collagen"
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        style={{
          zIndex: 3,
          /* ── SIZE: never taller than 58% of viewport ── */
          width: "42vw",
          maxWidth: "210px",
          height: "auto",
          maxHeight: "58vh",
          objectFit: "contain",
          objectPosition: "bottom right",
          /* push flush to bottom-right corner */
          marginBottom: 0,
          marginRight: 0,
          filter: "drop-shadow(0 0 28px rgba(201,151,42,0.75))" + " drop-shadow(0 14px 22px rgba(0,0,0,0.70))",
        }}
      />

      {/* ── 4. SCROLLING TRUST TICKER ── */}
      <div
        className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none"
        style={{
          zIndex: 10,
          height: "30px",
          display: "flex",
          alignItems: "center",
          background: "rgba(201,151,42,0.13)",
          borderBottom: "1px solid rgba(201,151,42,0.28)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div
          ref={tickerRef}
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            transform: `translateX(${tickerPos}px)`,
            willChange: "transform",
          }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#E8C460",
                padding: "0 24px",
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── 5. MAIN CONTENT — left column, z-20, max-w keeps it from bottle ── */}
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{
          zIndex: 20,
          /* top clears the ticker; bottom leaves thumb room for CTA */
          paddingTop: "52px",
          paddingBottom: "24px",
          /* right padding = bottle width + small gap so text never overlaps */
          paddingRight: "calc(42vw + 8px)",
          paddingLeft: "18px",
          maxWidth: "100%",
        }}
      >
        {/* ── TOP: badges + headline + proof ── */}
        <div>
          {/* Age-science urgency badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "rgba(192,57,43,0.20)",
              border: "1px solid rgba(192,57,43,0.48)",
              borderRadius: "20px",
              padding: "4px 11px",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#E74C3C",
                boxShadow: "0 0 6px #E74C3C",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "10.5px",
                fontWeight: 700,
                color: "#F1948A",
                fontFamily: "'Cairo', sans-serif",
                lineHeight: 1.3,
              }}
            >
              بعد 30 سنة، جسمك يفقد 1% كولاجين كل عام
            </span>
          </div>

          {/* Darija emotional hook */}
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#C8A96E",
              marginBottom: "5px",
              textShadow: "0 1px 8px rgba(0,0,0,1)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            واش عيّيتي تشوفي بشرتك تتغير؟
          </p>

          {/* POWER HEADLINE */}
          <h1
            style={{
              fontSize: "clamp(32px, 9.5vw, 46px)",
              fontWeight: 900,
              lineHeight: 1,
              color: "#E8C460",
              textShadow: "0 2px 28px rgba(0,0,0,1), 0 0 48px rgba(201,151,42,0.4)",
              fontFamily: "'Cairo', sans-serif",
              marginBottom: "3px",
            }}
          >
            بشرة مشرقة
          </h1>
          <h2
            style={{
              fontSize: "clamp(22px, 7vw, 36px)",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#FFFFFF",
              textShadow: "0 2px 24px rgba(0,0,0,1)",
              fontFamily: "'Cairo', sans-serif",
              marginBottom: "12px",
            }}
          >
            من أعماق البحر
          </h2>

          {/* Stars + count */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              marginBottom: "12px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#E8C460", fontSize: "13px", letterSpacing: "-1px" }}>⭐⭐⭐⭐⭐</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.78)",
                textShadow: "0 1px 6px rgba(0,0,0,0.9)",
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              +10,000 سيدة · نتائج موثقة
            </span>
          </div>

          {/* Animated result card */}
          <div
            style={{
              background: "rgba(201,151,42,0.13)",
              border: "1px solid rgba(201,151,42,0.38)",
              borderRadius: "12px",
              padding: "9px 12px",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              gap: "9px",
              minHeight: "50px",
            }}
          >
            <span style={{ fontSize: "16px", color: "#E8C460", flexShrink: 0 }}>✦</span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 800,
                  color: "#E8C460",
                  fontFamily: "'Cairo', sans-serif",
                  lineHeight: 1.2,
                }}
              >
                {RESULTS[activeResult].ar}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.60)",
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {RESULTS[activeResult].sub} — من تجارب زبوناتنا
              </div>
            </div>
            {/* Dot indicators */}
            <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
              {RESULTS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: i === activeResult ? "#E8C460" : "rgba(201,151,42,0.28)",
                    transition: "background 0.35s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM: trust pills + CTAs ── */}
        <div>
          {/* Trust pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "9px",
            }}
          >
            {[
              { e: "🚚", t: "توصيل مجاني" },
              { e: "💳", t: "الدفع عند الاستلام" },
            ].map(({ e, t }) => (
              <span
                key={t}
                style={{
                  fontSize: "10.5px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.17)",
                  color: "#fff",
                  backdropFilter: "blur(5px)",
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {e} {t}
              </span>
            ))}
          </div>

          {/* PRIMARY CTA */}
          <button
            onClick={scrollToOrder}
            style={{
              width: "100%",
              padding: "16px 20px",
              borderRadius: "14px",
              border: "none",
              background: "linear-gradient(135deg, #F0D060 0%, #C9972A 52%, #9A7218 100%)",
              color: "#1A1208",
              fontSize: "16px",
              fontWeight: 900,
              fontFamily: "'Cairo', sans-serif",
              cursor: "pointer",
              marginBottom: "8px",
              boxShadow: ctaPulse
                ? "0 0 0 6px rgba(201,151,42,0.32), 0 6px 28px rgba(201,151,42,0.72)"
                : "0 5px 22px rgba(201,151,42,0.50)",
              transform: ctaPulse ? "scale(1.016)" : "scale(1)",
              transition: "box-shadow 0.30s, transform 0.30s",
            }}
          >
            🛒 اطلبي الآن — ابتداءً من 199 درهم
          </button>

          {/* SECONDARY CTA */}
          <button
            onClick={scrollToOrder}
            style={{
              width: "100%",
              padding: "11px 20px",
              borderRadius: "14px",
              background: "transparent",
              border: "1.5px solid rgba(201,151,42,0.48)",
              color: "#E8C460",
              fontSize: "12px",
              fontWeight: 700,
              fontFamily: "'Cairo', sans-serif",
              cursor: "pointer",
              marginBottom: "7px",
            }}
          >
            🎁 3 علب = سيروم مجاناً | 4 علب = سيرومان — شوفي العروض
          </button>

          {/* Micro-copy */}
          <p
            style={{
              textAlign: "center",
              fontSize: "10px",
              color: "rgba(255,255,255,0.38)",
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
