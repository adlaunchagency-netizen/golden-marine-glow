import { useEffect, useState, useRef } from "react";

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

const BOTTLE_URL =
  "https://cdn.shopify.com/s/files/1/1002/0913/1888/files/" + "f19f9ef9-f69f-4ed4-aa69-aba7cec4fec8.webp?v=1773633264";

/* ── TOKEN PALETTE — inspired from old LP warm champagne ── */
const C = {
  gold: "#B8860B",
  goldLight: "#D4AF37",
  goldBright: "#E8C460",
  champagne: "#F5E6C0",
  champagnePale: "#FDF6E3",
  dark: "#1A1208",
  darkWarm: "#2D1E04",
  muted: "#6B4E1A",
  redBadge: "#8B1A0A",
  redText: "#C0392B",
  white: "#FFFFFF",
};

const HeroSection = () => {
  const [tickerPos, setTickerPos] = useState(0);
  const [activeResult, setActiveResult] = useState(0);
  const [ctaPulse, setCtaPulse] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);

  /* ── ticker RAF ── */
  useEffect(() => {
    const run = () => {
      posRef.current += 0.42;
      const half = (tickerRef.current?.scrollWidth ?? 1400) / 2;
      if (posRef.current >= half) posRef.current = 0;
      setTickerPos(posRef.current);
      rafRef.current = requestAnimationFrame(run);
    };
    rafRef.current = requestAnimationFrame(run);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── result cycling ── */
  useEffect(() => {
    const t = setInterval(() => setActiveResult((i) => (i + 1) % RESULTS.length), 2400);
    return () => clearInterval(t);
  }, []);

  /* ── CTA heartbeat ── */
  useEffect(() => {
    const t = setInterval(() => {
      setCtaPulse(true);
      setTimeout(() => setCtaPulse(false), 550);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const scrollToOrder = () => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section dir="rtl" className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* ══════════════════════════════════════════
          LAYER 0 — WARM CHAMPAGNE BACKGROUND
          Matches old LP's golden warmth.
          Woman photo sits on top as object-cover.
          No dark overlay needed — light bg = face visible.
      ══════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          /* warm champagne-to-gold gradient — exact old LP feel */
          background: "linear-gradient(145deg," + "#FDF0CC 0%," + "#F5E0A0 30%," + "#E8C860 65%," + "#C9A030 100%)",
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 1 — WOMAN PHOTO
          Covers right 60% only, fades left edge.
          This mimics the old LP where woman face
          fills the right while text lives on left.
      ══════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          /* woman occupies right 65% of screen */
          right: 0,
          width: "65%",
          zIndex: 1,
          backgroundImage: "url('/assets/neo-collagen-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          /* fade her left edge into the champagne bg seamlessly */
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 28%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 28%)",
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 2 — SUBTLE BOTTOM FADE
          Darkens only the very bottom so CTAs
          stay readable regardless of photo.
      ══════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "38%",
          zIndex: 2,
          background:
            "linear-gradient(to top," + "rgba(26,12,2,0.72) 0%," + "rgba(26,12,2,0.28) 55%," + "transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 3 — GOLD RADIAL GLOW (behind bottle)
      ══════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 3,
          width: "55vw",
          maxWidth: "280px",
          height: "55vw",
          maxHeight: "280px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center," +
            "rgba(201,151,42,0.45) 0%," +
            "rgba(201,151,42,0.14) 50%," +
            "transparent 72%)",
          transform: "translate(-25%, 25%)",
          pointerEvents: "none",
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 4 — BOTTLE
          Bottom-LEFT — mirrors old LP where products
          sit in the lower portion, woman on right.
          z-3 keeps it behind text (z-20).
      ══════════════════════════════════════════ */}
      <img
        src={BOTTLE_URL}
        alt="Paravita Neo Collagen"
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 4,
          width: "36vw",
          maxWidth: "180px",
          height: "auto",
          maxHeight: "55vh",
          objectFit: "contain",
          objectPosition: "bottom left",
          background: "transparent",
          pointerEvents: "none",
          userSelect: "none",
          filter: "drop-shadow(0 0 24px rgba(201,151,42,0.70))" + " drop-shadow(0 10px 18px rgba(0,0,0,0.35))",
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 5 — SCROLLING TICKER (top strip)
          Dark gold on champagne — readable on light bg.
      ══════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: "30px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          background: "rgba(26,12,2,0.82)",
          borderBottom: `1px solid ${C.goldLight}`,
          pointerEvents: "none",
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
                color: C.goldBright,
                padding: "0 22px",
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          LAYER 6 — ALL TEXT + CTAs
          z-20 — always above bottle and photo.
          RIGHT side of screen (RTL = text on right).
          paddingLeft pushes text away from bottle zone.
      ══════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "44px",
          paddingBottom: "20px",
          /* text lives in RIGHT portion — safe from bottle on left */
          paddingLeft: "calc(36vw + 12px)",
          paddingRight: "14px",
        }}
      >
        {/* ── TOP BLOCK ── */}
        <div>
          {/* Science urgency badge — dark text on champagne */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "rgba(139,26,10,0.12)",
              border: `1px solid rgba(192,57,43,0.45)`,
              borderRadius: "20px",
              padding: "4px 12px",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: C.redText,
                boxShadow: `0 0 5px ${C.redText}`,
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                color: C.redText,
                fontFamily: "'Cairo', sans-serif",
                lineHeight: 1.3,
              }}
            >
              بعد 30 سنة، جسمك يفقد 1% كولاجين كل عام
            </span>
          </div>

          {/* Darija hook — dark warm */}
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: C.darkWarm,
              marginBottom: "5px",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            واش عيّيتي تشوفي بشرتك تتغير؟
          </p>

          {/* H1 — dark gold like old LP */}
          <h1
            style={{
              fontSize: "clamp(30px, 9vw, 46px)",
              fontWeight: 900,
              lineHeight: 0.95,
              color: C.dark,
              fontFamily: "'Cairo', sans-serif",
              marginBottom: "3px",
              /* subtle text shadow for depth on champagne */
              textShadow: "0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            بشرة مشرقة
          </h1>

          {/* H2 — gold accent like old LP */}
          <h2
            style={{
              fontSize: "clamp(20px, 6.5vw, 34px)",
              fontWeight: 900,
              lineHeight: 1.15,
              color: C.gold,
              fontFamily: "'Cairo', sans-serif",
              marginBottom: "12px",
            }}
          >
            من أعماق البحر
          </h2>

          {/* Stars */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "11px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: C.goldLight, fontSize: "13px", letterSpacing: "-1px" }}>⭐⭐⭐⭐⭐</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: C.darkWarm,
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              +10,000 سيدة · نتائج موثقة
            </span>
          </div>

          {/* Animated result card — champagne card on gold bg */}
          <div
            style={{
              background: "rgba(255,255,255,0.55)",
              border: `1px solid rgba(184,134,11,0.35)`,
              borderRadius: "12px",
              padding: "9px 12px",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              gap: "9px",
              minHeight: "50px",
            }}
          >
            <span style={{ fontSize: "15px", color: C.gold, flexShrink: 0 }}>✦</span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 800,
                  color: C.dark,
                  fontFamily: "'Cairo', sans-serif",
                  lineHeight: 1.2,
                }}
              >
                {RESULTS[activeResult].ar}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: C.muted,
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {RESULTS[activeResult].sub} — من تجارب زبوناتنا
              </div>
            </div>
            <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
              {RESULTS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: i === activeResult ? C.gold : "rgba(184,134,11,0.25)",
                    transition: "background 0.35s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BLOCK — Trust + CTAs ── */}
        <div>
          {/* Trust pills — dark on semi-transparent white */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "9px" }}>
            {[
              { e: "🚚", t: "توصيل مجاني" },
              { e: "💳", t: "الدفع عند الاستلام" },
            ].map(({ e, t }) => (
              <span
                key={t}
                style={{
                  fontSize: "10.5px",
                  fontWeight: 700,
                  padding: "5px 10px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.65)",
                  border: `1px solid rgba(184,134,11,0.40)`,
                  color: C.darkWarm,
                  backdropFilter: "blur(4px)",
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {e} {t}
              </span>
            ))}
          </div>

          {/* PRIMARY CTA — same gold gradient, now pops against champagne */}
          <button
            onClick={scrollToOrder}
            style={{
              width: "100%",
              padding: "17px 20px",
              borderRadius: "14px",
              border: "none",
              background: "linear-gradient(135deg,#1A1208 0%,#2D1E04 100%)",
              color: C.goldBright,
              fontSize: "16px",
              fontWeight: 900,
              fontFamily: "'Cairo', sans-serif",
              cursor: "pointer",
              marginBottom: "8px",
              boxShadow: ctaPulse
                ? `0 0 0 7px rgba(184,134,11,0.28),0 6px 28px rgba(26,12,2,0.55)`
                : `0 5px 22px rgba(26,12,2,0.40)`,
              transform: ctaPulse ? "scale(1.018)" : "scale(1)",
              transition: "box-shadow 0.28s, transform 0.28s",
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
              background: "rgba(255,255,255,0.50)",
              border: `1.5px solid rgba(184,134,11,0.55)`,
              color: C.dark,
              fontSize: "12px",
              fontWeight: 700,
              fontFamily: "'Cairo', sans-serif",
              cursor: "pointer",
              marginBottom: "7px",
              backdropFilter: "blur(4px)",
            }}
          >
            🎁 3 علب = سيروم مجاناً | 4 علب = سيرومان — شوفي العروض
          </button>

          {/* Micro-copy */}
          <p
            style={{
              textAlign: "center",
              fontSize: "10px",
              color: "rgba(255,255,255,0.75)",
              fontFamily: "'Cairo', sans-serif",
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
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
