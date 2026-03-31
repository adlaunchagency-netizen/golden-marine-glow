import AnimatedSection from "./AnimatedSection";
import benefitSkin from "@/assets/benefit-glowing-skin.jpg";
import benefitHydration from "@/assets/benefit-hydration.jpg";
import benefitHairNails from "@/assets/benefit-hair-nails.jpg";
import benefitNatural from "@/assets/benefit-natural-clean.png";

const benefits = [
  { img: benefitSkin, title: "بشرة مشرقة ونضرة", desc: "يحفز إنتاج الكولاجين الطبيعي ويعيد النضارة والإشراق لبشرتك.", isProduct: false },
  { img: benefitHydration, title: "ترطيب عميق", desc: "ببتيدات بحرية عالية الامتصاص تغذي البشرة من الداخل.", isProduct: false },
  { img: benefitHairNails, title: "شعر وأظافر أقوى", desc: "يقوي بصيلات الشعر والأظافر ويحميها من التكسر.", isProduct: false },
  { img: benefitNatural, title: "طبيعي 100%", desc: "مستخلص من أسماك برية، بدون مواد كيميائية أو حافظات.", isProduct: true },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 md:py-28 bg-champagne">
    <div className="container">
      <AnimatedSection className="text-center mb-14">
        <p className="font-body text-sm tracking-wider text-gold-dark font-medium mb-3">علاش Neo Collagen؟</p>
        <h2 className="font-body text-3xl md:text-4xl font-bold text-foreground mb-4">
          فوائد <span className="text-gold-gradient">Paravita Neo</span>
        </h2>
        <div className="divider-gold mt-6" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <AnimatedSection key={b.title} delay={i * 0.1} className="text-center group bg-background p-6 rounded-xl border border-border hover:border-gold/40 transition-colors">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center bg-white transition-colors" style={{ border: "1px solid rgba(201,151,42,0.5)" }}>
              <img src={b.img} alt={b.title} width={80} height={80} loading="lazy" decoding="async" className={b.isProduct ? "h-[95%] w-auto object-contain" : "w-full h-full object-cover"} />
            </div>
            <h3 className="font-body text-lg font-bold text-foreground mb-2">{b.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
