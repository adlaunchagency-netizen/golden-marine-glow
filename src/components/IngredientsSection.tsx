import AnimatedSection from "./AnimatedSection";
import oceanTexture from "@/assets/ocean-texture.jpg";

const stats = [
  { value: "10,000mg", label: "Pure Collagen per Serving" },
  { value: "95%", label: "Bioavailability Rate" },
  { value: "Type I & III", label: "Marine Peptides" },
  { value: "0", label: "Artificial Additives" },
];

const IngredientsSection = () => (
  <section id="ingredients" className="relative py-24 md:py-32 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{ backgroundImage: `url(${oceanTexture})` }}
    />
    <div className="container relative z-10">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">The Science</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
          Purity You Can <span className="italic text-gold-gradient">Trust</span>
        </h2>
        <div className="divider-gold mt-6" />
      </AnimatedSection>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1} className="text-center p-6 md:p-8 bg-card/80 backdrop-blur-sm border border-border rounded-sm">
            <p className="font-display text-3xl md:text-4xl font-semibold text-gold-gradient mb-2">{s.value}</p>
            <p className="font-body text-xs md:text-sm text-muted-foreground tracking-wide uppercase">{s.label}</p>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3} className="mt-16 max-w-2xl mx-auto text-center">
        <p className="font-body text-muted-foreground leading-relaxed font-light">
          Our collagen is enzymatically hydrolyzed into low-molecular-weight peptides (≤3000 Daltons) for maximum absorption. Sourced exclusively from wild-caught deep-sea fish in the pristine waters of the North Atlantic, then third-party tested for purity and potency.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default IngredientsSection;
