import heroBackground from "@/assets/hero-woman.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const bottleUrl =
    "https://cdn.shopify.com/s/files/1/1002/0913/1888/files/f19f9ef9-f69f-4ed4-aa69-aba7cec4fec8.webp?v=1773633264";

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background woman photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroBackground}')` }}
      />

      {/* Layered dark gradient overlay — darker at top and bottom, lighter in middle so face shows */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Golden radial glow — bottom-right behind bottle */}
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,151,42,0.45) 0%, rgba(201,151,42,0.15) 45%, transparent 70%)",
          transform: "translate(20%, 20%)",
        }}
      />

      {/* Bottle — absolutely positioned bottom-right, no wrapper div, transparent bg */}
      <img
        src={bottleUrl}
        alt="Paravita Neo Collagen"
        className="absolute bottom-0 right-0 w-36 sm:w-44 object-contain pointer-events-none"
        style={{
          filter: "drop-shadow(0 0 30px rgba(212,175,55,0.3))",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          zIndex: 10,
        }}
      />

      {/* Main content — left side, full height */}
      <div
        className="relative z-20 flex flex-col justify-center min-h-screen px-6 pt-20 pb-32"
        dir="rtl"
      >
        {/* Urgency ribbon */}
        <span
          className="inline-block self-start text-xs font-bold px-4 py-1.5 rounded-full mb-4"
          style={{
            background: "linear-gradient(135deg, #C9972A, #E8C460)",
            color: "#1A1208",
          }}
        >
          🔥 عرض محدود — الكمية توشك على النفاد
        </span>

        {/* Pain-point hook */}
        <p
          className="text-base font-bold text-white/90 mb-3 max-w-xs"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
        >
          واش عيّيتي من تساقط الشعر والبشرة اللي فقدات نضارتها؟
        </p>

        {/* Hero headline */}
        <h1
          className="text-5xl font-black leading-tight mb-1"
          style={{
            color: "#E8C460",
            textShadow: "0 2px 16px rgba(0,0,0,0.9), 0 0 40px rgba(201,151,42,0.3)",
          }}
        >
          بشرة مشرقة
        </h1>
        <h2
          className="text-4xl font-black text-white leading-tight mb-5"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
        >
          من أعماق البحر
        </h2>

        {/* Sub-copy — Fusha authority */}
        <p
          className="text-sm text-white/85 leading-relaxed mb-5 max-w-xs"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.95)" }}
        >
          كولاجين بحري مركّز بفيتامين C — يُغذي بشرتك، يُقوي شعرك، ويُصلب أظافرك من الداخل.
        </p>

        {/* Social proof line */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-sm" style={{ color: "#E8C460" }}>
            ⭐⭐⭐⭐⭐
          </span>
          <span
            className="text-xs text-white/70"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
          >
            +10,000 سيدة مغربية وثقوا في نيو كولاجين
          </span>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { icon: "🚚", label: "توصيل مجاني" },
            { icon: "💳", label: "الدفع عند الاستلام" },
            { icon: "🌿", label: "100% طبيعي" },
          ].map((item) => (
            <span
              key={item.label}
              className="text-xs font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
            >
              {item.icon} {item.label}
            </span>
          ))}
        </div>

        {/* Primary CTA */}
        <button
          onClick={() =>
            document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full py-5 rounded-2xl text-lg font-black mb-3 active:scale-95 transition-transform"
          style={{
            background: "linear-gradient(135deg, #E8C460 0%, #C9972A 50%, #A07820 100%)",
            color: "#1A1208",
            boxShadow: "0 6px 28px rgba(201,151,42,0.55), 0 2px 8px rgba(0,0,0,0.4)",
            fontFamily: "'Cairo', sans-serif",
          }}
        >
          🛒 اطلبي الآن — ابتداءً من 199 درهم
        </button>

        {/* Secondary CTA */}
        <button
          onClick={() =>
            document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full py-3 rounded-2xl text-sm font-bold mb-4"
          style={{
            background: "transparent",
            border: "1.5px solid rgba(201,151,42,0.6)",
            color: "#E8C460",
          }}
        >
          🎁 شوفي العروض الخاصة — سيروم هدية مجاناً
        </button>

        {/* Micro-copy trust */}
        <p
          className="text-center text-[11px] text-white/50 mb-8"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
        >
          🔒 بياناتك آمنة · الدفع فقط عند الاستلام · توصيل 24-48 ساعة
        </p>

        {/* Result teaser */}
        <div className="rounded-2xl p-4 border border-white/10 bg-white/5 backdrop-blur-sm max-w-xs">
          <p
            className="text-sm font-bold mb-2"
            style={{ color: "#E8C460", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
          >
            شنو تلاحظي بعد أسابيع قليلة؟
          </p>
          <div className="flex flex-col gap-1">
            {[
              "✓ بشرة أكثر إشراقاً",
              "✓ شعر أقوى وأكثف",
              "✓ أظافر لا تنكسر",
              "✓ راحة في المفاصل",
            ].map((r) => (
              <span key={r} className="text-xs text-white/80">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
