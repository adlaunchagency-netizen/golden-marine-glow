import offerSingle from "@/assets/offer-single.webp";
import offerThree from "@/assets/offer-three.webp";
import offerFour from "@/assets/offer-four.webp";

interface OfferProps {
  onSelectOffer: (label: string, price: number, qty: number) => void;
}

const offers = [
  {
    id: 1, image: offerSingle, imageAlt: "علبة كولاجين PARAVITA", imageClass: "single" as const,
    name: "علبة واحدة", desc: "كولاجين مارين — 60 كبسولة\nشهر كامل من النتائج",
    price: 199, oldPrice: 249, savingText: "وفري 50 درهم", qty: 1,
    label: "1 علبة كولاجين — 199 درهم", gift: null, popular: false, hot: false,
    ctaText: "🛒 اطلبي هذا العرض", ctaStyle: "outline" as const,
    bannerText: null, bannerStyle: null, savingColor: "green" as const, descGift: null,
    offerValue: "1-box-199",
  },
  {
    id: 2, image: offerThree, imageAlt: "3 علب كولاجين + سيروم هدية", imageClass: "three" as const,
    name: "3 علب كولاجين", desc: "3 أشهر — نتيجة مضمونة وأدوم",
    descGift: "سيروم Neo Collagen مجاناً 🎁",
    price: 299, oldPrice: 597, savingText: "وفري 298 درهم 🔥", qty: 3,
    label: "3 علب كولاجين + سيروم مجاني — 299 درهم",
    gift: { icon: "🎁", title: "هدية مجانية مضمونة:", desc: "سيروم Neo Collagen PARAVITA", note: "قيمته 150 درهم — مجاناً مع طلبك" },
    popular: true, hot: false, ctaText: "🎁 اطلبي مع الهدية المجانية", ctaStyle: "gold" as const,
    bannerText: "⭐ الأكثر مبيعاً — الأفضل قيمة", bannerStyle: "gold" as const, savingColor: "red" as const,
    offerValue: "3-boxes-299",
  },
  {
    id: 3, image: offerFour, imageAlt: "4 علب كولاجين + سيرومين هدية", imageClass: "four" as const,
    name: "4 علب كولاجين", desc: "4 أشهر — تحول كامل مضمون",
    descGift: "سيرومين Neo Collagen مجاناً 🎁🎁",
    price: 399, oldPrice: 896, savingText: "وفري 497 درهم 🔥🔥", qty: 4,
    label: "4 علب كولاجين + سيرومين مجانيين — 399 درهم",
    gift: { icon: "🎁🎁", title: "هديتين مجانيتين:", desc: "2× سيروم Neo Collagen PARAVITA", note: "قيمتهما 300 درهم — مجاناً مع طلبك" },
    popular: false, hot: true, ctaText: "🔥 اطلبي أقوى العروض", ctaStyle: "red" as const,
    bannerText: "🔥 أقوى عرض — 4 علب + سيرومين مجاناً", bannerStyle: "red" as const, savingColor: "red" as const,
    offerValue: "4-boxes-399",
  },
];

export default function OfferSection({ onSelectOffer }: OfferProps) {
  return (
    <section id="pricing" dir="rtl" style={{ background: "#FDFAF4", paddingBottom: 32 }}>
      {/* Section header */}
      <div style={{ textAlign: "center", padding: "24px 18px 18px" }}>
        <div style={{ display: "inline-block", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: 20, padding: "4px 16px", fontSize: 11, fontWeight: 700, color: "#8B6914", letterSpacing: "0.06em", marginBottom: 10 }}>
          🛒 اختاري عرضك
        </div>
        <div style={{ fontSize: 19, fontWeight: 900, color: "#1E1208", lineHeight: 1.3, marginBottom: 5 }}>
          الدفع عند الاستلام<br />لجميع مدن المغرب 🇲🇦
        </div>
        <div style={{ fontSize: 12.5, color: "#7A5C45" }}>
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
              border: `2px solid ${offer.hot ? "#e8192c" : offer.popular ? "#C9A84C" : "#f0e8d8"}`,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            {/* Banner */}
            {offer.bannerText && (
              <div style={{
                padding: "7px 14px", fontSize: 11, fontWeight: 800, textAlign: "center", letterSpacing: "0.04em",
                background: offer.bannerStyle === "red" ? "linear-gradient(135deg,#c41020,#e8192c)" : "linear-gradient(135deg,#8B6914,#C9A84C)",
                color: "#fff",
              }}>
                {offer.bannerText}
              </div>
            )}

            {/* Product image */}
            <div style={{
              width: "100%", background: offer.hot ? "linear-gradient(160deg,#fff9ef,#fff3e0)" : "#FDFAF4",
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
                  <div style={{ fontSize: 16, fontWeight: 900, color: "#1E1208", lineHeight: 1.2, marginBottom: 3 }}>
                    {offer.name}
                  </div>
                  <div style={{ fontSize: 11.5, color: "#7A5C45", lineHeight: 1.4, whiteSpace: "pre-line" }}>
                    {offer.desc}
                    {offer.descGift && (<><br /><b style={{ color: "#e8192c" }}>{offer.descGift}</b></>)}
                  </div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 4, borderRadius: 20, padding: "3px 10px",
                    fontSize: 10.5, fontWeight: 700, marginTop: 6,
                    background: offer.savingColor === "red" ? "rgba(232,25,44,0.08)" : "rgba(45,122,79,0.08)",
                    border: `1px solid ${offer.savingColor === "red" ? "rgba(232,25,44,0.2)" : "rgba(45,122,79,0.2)"}`,
                    color: offer.savingColor === "red" ? "#e8192c" : "#2D7A4F",
                  }}>
                    {offer.savingText}
                  </div>
                </div>
                <div style={{ textAlign: "left", flexShrink: 0 }}>
                  <div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1, color: offer.hot || offer.popular ? "#e8192c" : "#8B6914" }}>
                    {offer.price}
                  </div>
                  <div style={{ fontSize: 12, color: "#7A5C45", marginTop: 1 }}>درهم</div>
                  <div style={{ fontSize: 12, color: "#bbb", textDecoration: "line-through", marginTop: 2 }}>{offer.oldPrice} درهم</div>
                </div>
              </div>

              {/* Gift box */}
              {offer.gift && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(232,25,44,0.04)", border: "1px solid rgba(232,25,44,0.18)",
                  borderRadius: 12, padding: "9px 12px", margin: "10px 0",
                }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>{offer.gift.icon}</div>
                  <div style={{ fontSize: 12, color: "#1E1208", lineHeight: 1.45 }}>
                    <b style={{ color: "#e8192c" }}>{offer.gift.title}</b> {offer.gift.desc}<br />
                    <span style={{ fontSize: 10.5, color: "#7A5C45" }}>{offer.gift.note}</span>
                  </div>
                </div>
              )}

              {/* Perks */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "10px 0 12px" }}>
                {["توصيل مجاني", "دفع عند الاستلام", "ضمان 30 يوم", ...(offer.gift ? [offer.id === 3 ? "سيرومين مجانيين" : "سيروم مجاني"] : [])].map((p, i) => (
                  <span key={i} style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "#7A5C45" }}>
                    <span style={{ color: "#2D7A4F", fontWeight: 800 }}>✓</span> {p}
                  </span>
                ))}
              </div>

              {/* CTA button */}
              <button
                onClick={() => onSelectOffer(offer.label, offer.price, offer.qty)}
                style={{
                  width: "100%", border: offer.ctaStyle === "outline" ? "2px solid #C9A84C" : "none",
                  borderRadius: 50, padding: 15, fontSize: 15.5, fontWeight: 800, fontFamily: "inherit",
                  cursor: "pointer", letterSpacing: "0.02em",
                  background: offer.ctaStyle === "gold" ? "linear-gradient(135deg,#7A5A0A,#C9A84C,#E8C96A)"
                    : offer.ctaStyle === "red" ? "linear-gradient(135deg,#b01020,#e8192c,#ff4040)" : "#fff",
                  color: offer.ctaStyle === "outline" ? "#8B6914" : "#fff",
                  boxShadow: offer.ctaStyle === "gold" ? "0 6px 20px rgba(139,105,20,0.32)"
                    : offer.ctaStyle === "red" ? "0 6px 20px rgba(232,25,44,0.28)" : "none",
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
