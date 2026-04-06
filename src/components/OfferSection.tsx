import offerSingle from "@/assets/offer-single.webp";
import offerThree from "@/assets/offer-three.webp";
import offerFour from "@/assets/offer-four.webp";

interface OfferProps {
  onSelectOffer: (label: string, price: number, qty: number) => void;
}

const offers = [
  {
    id: 1, image: offerSingle, imageAlt: "علبة كولاجين PARAVITA", imageClass: "single" as const,
    name: "علبة واحدة", desc: "كولاجين بحري — 60 كبسولة\nشهر كامل من النتائج",
    price: 199, oldPrice: 249, savingText: "وفري 50 درهم", qty: 1,
    label: "1 علبة كولاجين — 199 درهم", gift: null, popular: false, hot: false,
    ctaText: "🛒 اطلبي هذا العرض", ctaStyle: "outline" as const,
    bannerText: null, bannerStyle: null, savingColor: "green" as const, descGift: null,
    offerValue: "1-box-199", showStock: false,
  },
  {
    id: 2, image: offerThree, imageAlt: "باك الأمومة — 3 علب + سيروم", imageClass: "three" as const,
    name: "باك الأمومة", desc: "3 علب كولاجين — 3 أشهر",
    descGift: "سيروم فيتامين C مجاني 🍊",
    price: 299, oldPrice: 597, savingText: "وفري 298 درهم 🔥", qty: 3,
    label: "باك الأمومة 3 علب + سيروم — 299 درهم",
    gift: { icon: "🍊", title: "هدية مجانية:", desc: "سيروم فيتامين C", note: "قيمته 150 درهم — مجاناً مع طلبك" },
    popular: true, hot: false, ctaText: "🎁 اطلبي باك الأمومة", ctaStyle: "teal" as const,
    bannerText: "⭐ الأكثر مبيعاً للأمهات", bannerStyle: "teal" as const, savingColor: "red" as const,
    offerValue: "3-boxes-299", showStock: true,
  },
  {
    id: 3, image: offerFour, imageAlt: "باك المكثف — 4 علب + سيرومين", imageClass: "four" as const,
    name: "باك المكثف", desc: "4 علب كولاجين — تحول كامل",
    descGift: "سيرومين فيتامين C مجاناً 🍊🍊",
    price: 399, oldPrice: 896, savingText: "وفري 497 درهم 🔥🔥", qty: 4,
    label: "باك المكثف 4 علب + سيرومين — 399 درهم",
    gift: { icon: "🍊🍊", title: "هديتين مجانيتين:", desc: "2× سيروم فيتامين C", note: "قيمتهما 300 درهم — مجاناً مع طلبك" },
    popular: false, hot: true, ctaText: "🔥 اطلبي أقوى العروض", ctaStyle: "dark" as const,
    bannerText: "🔥 أقوى عرض — 4 علب + سيرومين مجاناً", bannerStyle: "dark" as const, savingColor: "red" as const,
    offerValue: "4-boxes-399", showStock: false,
  },
];

export default function OfferSection({ onSelectOffer }: OfferProps) {
  return (
    <section id="pricing" dir="rtl" style={{ background: "#F8FAFB", paddingBottom: 32 }}>
      {/* Section header */}
      <div style={{ textAlign: "center", padding: "24px 18px 18px" }}>
        <div style={{ display: "inline-block", background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.25)", borderRadius: 20, padding: "4px 16px", fontSize: 11, fontWeight: 700, color: "#0D9488", letterSpacing: "0.06em", marginBottom: 10 }}>
          🛒 اختاري عرضك
        </div>
        <div style={{ fontSize: 19, fontWeight: 900, color: "#1E293B", lineHeight: 1.3, marginBottom: 5 }}>
          الدفع عند الاستلام<br />لجميع مدن المغرب 🇲🇦
        </div>
        <div style={{ fontSize: 12.5, color: "#64748B" }}>
          توصيل سريع خلال 24–48 ساعة · ضمان 30 يوم
        </div>
      </div>

      {/* Cards */}
      <div style={{ padding: "0 14px 8px", display: "flex", flexDirection: "column", gap: 14 }}>
        {offers.map((offer) => (
          <div
            key={offer.id}
            style={{
              background: "#fff", borderRadius: 20, overflow: "hidden",
              border: `2px solid ${offer.hot ? "#1E293B" : offer.popular ? "#0D9488" : "#E2E8F0"}`,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            {/* Banner */}
            {offer.bannerText && (
              <div style={{
                padding: "7px 14px", fontSize: 11, fontWeight: 800, textAlign: "center", letterSpacing: "0.04em",
                background: offer.bannerStyle === "dark" ? "#1E293B" : "#0D9488",
                color: "#fff",
              }}>
                {offer.bannerText}
              </div>
            )}

            {/* Product image */}
            <div style={{
              width: "100%", background: "#F8FAFB",
              display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 12px 8px",
            }}>
              <img
                src={offer.image} alt={offer.imageAlt} loading="lazy" decoding="async"
                style={{
                  width: "100%", maxHeight: offer.imageClass === "single" ? 160 : 200,
                  maxWidth: offer.imageClass === "single" ? 160 : "100%", objectFit: "contain", display: "block",
                }}
              />
            </div>

            {/* Card body */}
            <div style={{ padding: "14px 16px 16px" }}>
              {/* Name + price row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: "#1E293B", lineHeight: 1.2, marginBottom: 3 }}>
                    {offer.name}
                  </div>
                  <div style={{ fontSize: 11.5, color: "#64748B", lineHeight: 1.4, whiteSpace: "pre-line" }}>
                    {offer.desc}
                    {offer.descGift && (<><br /><b style={{ color: "#0D9488" }}>{offer.descGift}</b></>)}
                  </div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 4, borderRadius: 20, padding: "3px 10px",
                    fontSize: 10.5, fontWeight: 700, marginTop: 6,
                    background: offer.savingColor === "red" ? "rgba(232,25,44,0.08)" : "rgba(13,148,136,0.08)",
                    border: `1px solid ${offer.savingColor === "red" ? "rgba(232,25,44,0.2)" : "rgba(13,148,136,0.2)"}`,
                    color: offer.savingColor === "red" ? "#e8192c" : "#0D9488",
                  }}>
                    {offer.savingText}
                  </div>
                </div>
                <div style={{ textAlign: "left", flexShrink: 0 }}>
                  <div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1, color: offer.popular ? "#0D9488" : offer.hot ? "#1E293B" : "#0D9488" }}>
                    {offer.price}
                  </div>
                  <div style={{ fontSize: 12, color: "#64748B", marginTop: 1 }}>درهم</div>
                  <div style={{ fontSize: 12, color: "#bbb", textDecoration: "line-through", marginTop: 2 }}>{offer.oldPrice} درهم</div>
                </div>
              </div>

              {/* Gift box */}
              {offer.gift && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(13,148,136,0.04)", border: "1px solid rgba(13,148,136,0.18)",
                  borderRadius: 12, padding: "9px 12px", margin: "10px 0",
                }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>{offer.gift.icon}</div>
                  <div style={{ fontSize: 12, color: "#1E293B", lineHeight: 1.45 }}>
                    <b style={{ color: "#0D9488" }}>{offer.gift.title}</b> {offer.gift.desc}<br />
                    <span style={{ fontSize: 10.5, color: "#64748B" }}>{offer.gift.note}</span>
                  </div>
                </div>
              )}

              {/* Stock urgency bar — Card 2 only */}
              {offer.showStock && (
                <div style={{ margin: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#E24B4A" }}>المخزون المتبقي: 23 وحدة فقط</span>
                  </div>
                  <div style={{ width: "100%", height: 6, background: "#E2E8F0", borderRadius: 10, overflow: "hidden" }}>
                    <div style={{ width: "85%", height: "100%", background: "#0D9488", borderRadius: 10 }} />
                  </div>
                </div>
              )}

              {/* Perks */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "10px 0 12px" }}>
                {["توصيل مجاني", "دفع عند الاستلام", "ضمان 30 يوم", ...(offer.gift ? [offer.id === 3 ? "سيرومين مجانيين" : "سيروم مجاني"] : [])].map((p, i) => (
                  <span key={i} style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "#64748B" }}>
                    <span style={{ color: "#0D9488", fontWeight: 800 }}>✓</span> {p}
                  </span>
                ))}
              </div>

              {/* CTA button */}
              <button
                onClick={() => onSelectOffer(offer.label, offer.price, offer.qty)}
                style={{
                  width: "100%", border: offer.ctaStyle === "outline" ? "2px solid #0D9488" : "none",
                  borderRadius: 50, padding: 15, fontSize: 15.5, fontWeight: 800, fontFamily: "inherit",
                  cursor: "pointer", letterSpacing: "0.02em",
                  background: offer.ctaStyle === "teal" ? "#0D9488"
                    : offer.ctaStyle === "dark" ? "#1E293B" : "#fff",
                  color: offer.ctaStyle === "outline" ? "#0D9488" : "#fff",
                  boxShadow: offer.ctaStyle === "teal" ? "0 6px 20px rgba(13,148,136,0.32)"
                    : offer.ctaStyle === "dark" ? "0 6px 20px rgba(30,41,59,0.28)" : "none",
                }}
              >
                {offer.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
