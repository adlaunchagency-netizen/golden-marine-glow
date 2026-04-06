const HeroSection = () => {
  const scrollToOrder = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", { content_name: "Paravita Neo Collagen", content_category: "Hero CTA" });
    }
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full" dir="rtl" style={{ background: "#F8FAFB" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }} className="md:flex-row">
        {/* Left column — text */}
        <div style={{ padding: "28px 20px 24px", flex: 1 }}>
          {/* Stars */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
            <span style={{ color: "#F59E0B", fontSize: 14, letterSpacing: 1 }}>★★★★★</span>
            <span style={{ fontSize: 12, color: "var(--soft-text)" }}>4.9/5</span>
            <span style={{ fontSize: 12, color: "var(--soft-text)" }}>(892 تقييم)</span>
            <span style={{ width: 6, height: 6, background: "#0D9488", borderRadius: "50%", display: "inline-block" }} />
            <span style={{ fontSize: 12, color: "#0D9488", fontWeight: 600 }}>مُتحقق</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#1E293B", lineHeight: 1.45, marginBottom: 14 }}>
            الحل النهائي لتساقط الشعر بعد الولادة<br />
            <span style={{ color: "#0D9488", borderBottom: "2.5px solid #0D9488", paddingBottom: 1 }}>
              استرجعي كثافة شعرك في 15 يوماً
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{ fontSize: "14px", color: "var(--soft-text)", lineHeight: 1.6, marginBottom: 16 }}>
            مكمل غذائي طبيعي من الكولاجين البحري —{" "}
            <strong style={{ color: "#1E293B" }}>مُصاغ خصيصاً للأمهات بعد الولادة</strong>
          </p>

          {/* Social proof avatars */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              {["ف", "س", "ن", "ا"].map((letter, i) => (
                <div
                  key={i}
                  style={{
                    width: 28, height: 28, borderRadius: "50%", border: "2px solid #F8FAFB",
                    background: ["#99F6E4", "#A7F3D0", "#BAE6FD", "#C7D2FE"][i],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 800, color: "#1E293B", marginLeft: i < 3 ? -7 : 0,
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "var(--soft-text)", lineHeight: 1.4 }}>
              <strong style={{ color: "#1E293B" }}>انضمت 47 أم جديدة</strong> من المغرب<br />
              خلال الـ 24 ساعة الأخيرة
            </div>
          </div>

          {/* Guarantee strip */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            background: "rgba(13,148,136,0.06)", border: "1px solid rgba(13,148,136,0.18)",
            borderRadius: "50px", padding: "7px 14px", marginBottom: 16, fontSize: "12.5px",
            fontWeight: 600, color: "#0D9488",
          }}>
            ✅ ضمان استرداد المال خلال 30 يوماً إذا لم تلاحظي فرقاً
          </div>

          {/* CTA button */}
          <button
            onClick={scrollToOrder}
            style={{
              width: "100%", background: "#0D9488",
              color: "#fff", border: "none", borderRadius: "50px", padding: "17px 24px",
              fontSize: "17px", fontWeight: 800, cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center", gap: 8,
              boxShadow: "0 8px 28px rgba(13,148,136,0.35)", marginBottom: 12,
              fontFamily: "inherit", letterSpacing: "0.02em",
            }}
          >
            🛒 اطلبي الآن — الدفع عند الاستلام
          </button>

          {/* Safety badges */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
            <span style={{
              background: "#0D9488", color: "#fff", borderRadius: 50,
              padding: "5px 14px", fontSize: 12, fontWeight: 700,
            }}>
              ✓ آمن للمرضعات
            </span>
            <span style={{
              background: "#0D9488", color: "#fff", borderRadius: 50,
              padding: "5px 14px", fontSize: 12, fontWeight: 700,
            }}>
              ✓ معتمد ONSSA
            </span>
          </div>

          {/* COD trust row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--soft-text)", flexWrap: "wrap", rowGap: 4 }}>
            <span style={{ padding: "0 8px" }}>🔒 بدون دفع مسبق</span>
            <span style={{ color: "rgba(0,0,0,0.15)" }}>·</span>
            <span style={{ padding: "0 8px" }}>📦 توصيل سريع</span>
            <span style={{ color: "rgba(0,0,0,0.15)" }}>·</span>
            <span style={{ padding: "0 8px" }}>↩️ إرجاع مجاني</span>
          </div>
        </div>

        {/* Right column — image + video placeholder */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0, overflow: "visible" }}>
          <img
            src="/hero-doctor.webp"
            srcSet="/hero-doctor.webp 480w, /hero-doctor-lg.webp 720w"
            sizes="(min-width: 768px) 50vw, 100vw"
            alt="صيدلانية تعرض كولاجين بارافيتا البحري"
            fetchPriority="high"
            loading="eager"
            decoding="auto"
            width={512}
            height={640}
            style={{ width: "100%", display: "block", objectFit: "contain", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
