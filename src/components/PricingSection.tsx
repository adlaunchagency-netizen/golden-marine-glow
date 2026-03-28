import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import bundle1 from "@/assets/bundle-1.png";
import bundle3 from "@/assets/bundle-3.png";
import bundle4 from "@/assets/bundle-4.png";

const tiers = [
  {
    id: 1,
    name: "عرض المجربة",
    subtitle: "Starter Pack",
    boxes: "1 علبة",
    price: 199,
    offerValue: "1-box-199",
    features: ["كولاجين بحري 10,000mg", "شهر كامل", "توصيل مجاني"],
    featured: false,
    badge: null,
    image: bundle1,
  },
  {
    id: 2,
    name: "الأكثر طلباً",
    subtitle: "Best Value",
    boxes: "3 علب + سيروم هدية",
    price: 299,
    offerValue: "3-boxes-299",
    features: ["كولاجين بحري 10,000mg", "3 أشهر", "سيروم كولاجين مجاناً", "توصيل مجاني"],
    featured: true,
    badge: "⭐ توفير 62%",
    image: bundle3,
  },
  {
    id: 3,
    name: "عرض العائلة",
    subtitle: "Family Pack",
    boxes: "4 علب + 2 سيروم هدية",
    price: 399,
    offerValue: "4-boxes-399",
    features: ["كولاجين بحري 10,000mg", "4 أشهر", "2 سيروم كولاجين مجاناً", "توصيل مجاني", "أفضل قيمة"],
    featured: false,
    badge: "💎 توفير 66%",
    image: bundle4,
  },
];

const handleSelectOffer = (offerValue: string) => {
  window.dispatchEvent(new CustomEvent("select-offer", { detail: offerValue }));
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
};

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28 bg-dark-bg">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-body text-sm tracking-wider text-gold-light/70 font-medium mb-3">عروض خاصة</p>
        <h2 className="font-body text-3xl md:text-4xl font-bold text-champagne mb-4">
          اختاري <span className="text-gold-gradient">العرض ديالك</span>
        </h2>
        <div className="divider-gold mt-6" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`relative rounded-2xl p-6 md:p-8 border flex flex-col overflow-hidden ${
              tier.featured
                ? "border-gold bg-gold/10 md:scale-[1.03] shadow-[0_0_40px_-10px_hsl(var(--gold)/0.3)]"
                : "border-gold/20 bg-dark-bg"
            }`}
          >
            {/* Badge */}
            {tier.badge && (
              <div className="absolute -top-0 left-0 right-0 flex justify-center z-10">
                <span className="bg-gold-gradient text-dark-bg text-xs font-bold px-5 py-1.5 rounded-b-lg whitespace-nowrap">
                  {tier.badge}
                </span>
              </div>
            )}

            {/* "Most Popular" ribbon for featured */}
            {tier.featured && (
              <div className="absolute top-5 -right-8 z-20 rotate-[-45deg]">
                <div className="bg-gold-gradient text-dark-bg text-[10px] font-bold px-8 py-1 shadow-lg">
                  الأكثر طلباً ⭐
                </div>
              </div>
            )}

            {/* Product image */}
            <div className="flex justify-center mb-5 mt-6">
              <img
                src={tier.image}
                alt={tier.name}
                loading="lazy"
                width={300}
                height={300}
                className="w-40 h-40 object-contain rounded-xl"
                style={{
                  filter: "drop-shadow(0 4px 20px rgba(212,175,55,0.2))",
                }}
              />
            </div>

            <h3 className="font-body text-lg font-bold text-champagne mb-0.5 text-center">{tier.name}</h3>
            <p className="font-body text-xs text-gold-light/50 mb-1 text-center">{tier.subtitle}</p>
            <p className="font-body text-sm text-gold-light/60 mb-4 text-center">{tier.boxes}</p>

            <div className="mb-6 text-center">
              <span className="font-body text-4xl font-extrabold text-gold-light">{tier.price}</span>
              <span className="font-body text-base text-gold-light/60 mr-1">درهم</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-champagne/80">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSelectOffer(tier.offerValue)}
              className={`block w-full text-center font-body text-base font-bold py-4 rounded-xl min-h-[56px] transition-opacity hover:opacity-90 cursor-pointer ${
                tier.featured
                  ? "bg-gold-gradient text-dark-bg"
                  : "border-2 border-gold text-gold-light hover:bg-gold/10"
              }`}
            >
              اطلبي الآن
            </button>

            <p className="text-center text-xs text-gold-light/50 mt-3">
              🚚 توصيل مجاني | 💳 الدفع عند الاستلام
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
