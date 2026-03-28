const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background — woman photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/neo-collagen-hero.png')" }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Golden glow behind bottle — bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,151,42,0.45) 0%, rgba(201,151,42,0.15) 45%, transparent 70%)",
          transform: "translate(20%, 20%)",
        }}
      />

      {/* Bottle image — floats over everything, bottom-right */}
      <img
        src="/src/assets/neo-collagen-product.png"
        alt="Paravita Neo Collagen"
        className="absolute bottom-0 right-0 w-40 object-contain pointer-events-none"
        style={{
          filter: "drop-shadow(0 0 24px rgba(201,151,42,0.6))",
          zIndex: 10,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-6 pt-24 pb-48" dir="rtl">
        {/* Badge */}
        <span className="inline-block self-start bg-[#C9972A] text-[#1A1208] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
          كولاجين بحري طبيعي 100%
        </span>

        {/* Headlines */}
        <h1
          className="text-5xl font-black text-[#E8C460] leading-tight mb-2"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9), 0 0 40px rgba(201,151,42,0.3)" }}
        >
          بشرة مشرقة
        </h1>
        <h2
          className="text-4xl font-black text-white leading-tight mb-6"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
        >
          من أعماق البحر
        </h2>

        {/* Subtext */}
        <p
          className="text-sm text-white/85 leading-relaxed mb-8 max-w-xs"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.95)" }}
        >
          Neo Collagen من Paravita — بببتيدات الكولاجين البحري الذي يعطيك بشرة صافية، شعر قوي، وأظافر متينة.
        </p>

        {/* Trust pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["🚚 توصيل مجاني", "💳 الدفع عند الاستلام", "🌿 100% طبيعي"].map((item) => (
            <span
              key={item}
              className="text-xs font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          className="w-full py-5 rounded-2xl text-lg font-black text-[#1A1208]"
          style={{
            background: "linear-gradient(135deg, #E8C460, #C9972A, #A07820)",
            boxShadow: "0 4px 24px rgba(201,151,42,0.5)",
          }}
        >
          اطلبي الآن — ابتداءً من 199 درهم
        </button>

        {/* Micro-copy below CTA */}
        <p className="text-center text-xs text-white/60 mt-3">🔒 بياناتك آمنة · التوصيل 24-48 ساعة</p>
      </div>
    </section>
  );
};

export default Hero;
