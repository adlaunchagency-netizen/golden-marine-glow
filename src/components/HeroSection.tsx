const HeroSection = () => {
  const scrollToOrder = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", { content_name: "Paravita Neo Collagen", content_category: "Hero CTA" });
    }
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full" dir="rtl" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* Spacer for fixed header */}
      <div style={{ height: 64 }} />
      {/* Hero image with floating badges */}
      <div style={{ position: "relative", width: "100%", height: "460px", overflow: "hidden", marginTop: 0, paddingTop: 0 }}>
        <img
          src="/hero-new.webp"
          alt="امرأة مغربية تستخدم كولاجين باراڤيتا"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          width={390}
          height={460}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "110px",
            background: "linear-gradient(to bottom, transparent, var(--cream))", pointerEvents: "none",
          }}
        />
        {/* Halal badge */}
        <div
          style={{
            position: "absolute", top: 14, right: 14, background: "rgba(255,255,255,0.92)",
            borderRadius: "50px", padding: "6px 12px 6px 8px", display: "flex", alignItems: "center",
            gap: 6, boxShadow: "0 4px 14px rgba(0,0,0,0.10)", border: "1px solid rgba(201,168,76,0.3)",
            fontSize: "11px", fontWeight: 700, color: "#2C1A0E",
          }}
        >
          <div style={{ width: 22, height: 22, background: "#FAF3E0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🌿</div>
          حلال · طبيعي 100%
        </div>
        {/* Guarantee badge */}
        <div
          style={{
            position: "absolute", bottom: 28, left: 14, background: "rgba(255,255,255,0.93)",
            borderRadius: "12px", padding: "8px 12px", border: "1px solid rgba(201,168,76,0.25)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
          }}
        >
          <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--green-trust)", marginBottom: 2 }}>✅ نتيجة مضمونة</div>
          <div style={{ fontSize: "10px", color: "var(--soft-text)" }}>خلال 30 يوم أو المال يرجع</div>
        </div>
      </div>

      {/* Hero content */}
      <div style={{ background: "var(--cream)", padding: "6px 18px 28px" }}>
        {/* Stars */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 11 }}>
          <span style={{ color: "var(--gold-hex)", fontSize: 14, letterSpacing: 1 }}>★★★★★</span>
          <span style={{ fontSize: 12, color: "var(--soft-text)" }}>4.9/5</span>
          <span style={{ fontSize: 12, color: "var(--soft-text)" }}>(892 تقييم)</span>
          <span style={{ width: 6, height: 6, background: "var(--green-trust)", borderRadius: "50%", display: "inline-block" }} />
          <span style={{ fontSize: 12, color: "var(--green-trust)", fontWeight: 600 }}>مُتحقق</span>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: "21px", fontWeight: 900, color: "var(--brown-text)", lineHeight: 1.38, marginBottom: 11 }}>
          الكولاجين الطبيعي الذي تستخدمه<br />
          أكثر من{" "}
          <span style={{ color: "var(--gold-dark-hex)", borderBottom: "2.5px solid var(--gold-hex)", paddingBottom: 1 }}>
            10,000 مغربية
          </span>
          <br />فوق 30 سنة
        </h1>

        {/* Subheadline */}
        <p style={{ fontSize: "14px", color: "var(--soft-text)", lineHeight: 1.55, marginBottom: 14 }}>
          بشرة أكثر نضارة وشباباً —{" "}
          <strong style={{ color: "var(--brown-text)" }}>نتائج مرئية خلال 30 يوم</strong>
          {" "}أو المال يرجع لك كاملاً 💯
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)", margin: "4px 0 14px" }} />

        {/* 3 proof stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
          {[
            { icon: "💧", num: "+38%", label: "ترطيب البشرة" },
            { icon: "✨", num: "30 يوم", label: "نتيجة أولى" },
            { icon: "🇲🇦", num: "10K+", label: "زبونة مغربية" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 12, padding: "9px 6px", textAlign: "center" }}>
              <div style={{ fontSize: 18, marginBottom: 3 }}>{item.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--brown-text)", marginBottom: 1 }}>{item.num}</div>
              <div style={{ fontSize: 10, color: "var(--soft-text)", lineHeight: 1.3 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Social proof avatars */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            {["ف", "س", "ن", "ا"].map((letter, i) => (
              <div
                key={i}
                style={{
                  width: 28, height: 28, borderRadius: "50%", border: "2px solid var(--cream)",
                  background: ["#F5DEB3", "#FFE4B5", "#FFDEAD", "#F0E68C"][i],
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 800, color: "#2C1A0E", marginLeft: i < 3 ? -7 : 0,
                }}
              >
                {letter}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "var(--soft-text)", lineHeight: 1.4 }}>
            <strong style={{ color: "var(--brown-text)" }}>انضمت 47 زبونة جديدة</strong> من المغرب<br />
            خلال الـ 24 ساعة الأخيرة
          </div>
        </div>

        {/* Guarantee strip */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          background: "rgba(45,122,79,0.06)", border: "1px solid rgba(45,122,79,0.18)",
          borderRadius: "50px", padding: "7px 14px", marginBottom: 16, fontSize: "12.5px",
          fontWeight: 600, color: "var(--green-trust)",
        }}>
          ✅ ضمان استرجاع المال الكامل — 30 يوم
        </div>

        {/* CTA button */}
        <button
          onClick={scrollToOrder}
          style={{
            width: "100%", background: "linear-gradient(135deg,#7A5A0A 0%,#C9A84C 50%,#E8C96A 100%)",
            color: "#fff", border: "none", borderRadius: "50px", padding: "17px 24px",
            fontSize: "17px", fontWeight: 800, cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", gap: 8,
            boxShadow: "0 8px 28px rgba(139,105,20,0.38)", marginBottom: 12,
            fontFamily: "inherit", letterSpacing: "0.02em",
          }}
        >
          🛒 اطلبي الآن — الدفع عند الاستلام
        </button>

        {/* COD trust row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--soft-text)", flexWrap: "wrap", rowGap: 4 }}>
          <span style={{ padding: "0 8px" }}>🔒 بدون دفع مسبق</span>
          <span style={{ color: "rgba(0,0,0,0.15)" }}>·</span>
          <span style={{ padding: "0 8px" }}>📦 توصيل سريع</span>
          <span style={{ color: "rgba(0,0,0,0.15)" }}>·</span>
          <span style={{ padding: "0 8px" }}>↩️ إرجاع مجاني</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
