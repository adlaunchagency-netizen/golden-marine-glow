import { Droplets, Sparkles, Heart, Leaf } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { icon: Sparkles, title: "Radiant Skin", desc: "Boost elasticity and hydration for a youthful, dewy glow from within." },
  { icon: Droplets, title: "Deep Hydration", desc: "Bioavailable peptides that penetrate deep for lasting moisture." },
  { icon: Heart, title: "Joint Support", desc: "Strengthen cartilage and support flexible, pain-free movement." },
  { icon: Leaf, title: "Sustainably Sourced", desc: "Wild-caught from pristine Nordic waters, never farmed." },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-24 md:py-32 bg-cream">
    <div className="container">
      <AnimatedSection className="text-center mb-16 md:mb-20">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Why Océane</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
          Nature's Most Potent <span className="italic text-gold-gradient">Elixir</span>
        </h2>
        <div className="divider-gold mt-6" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <AnimatedSection key={b.title} delay={i * 0.1} className="text-center group">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent flex items-center justify-center group-hover:bg-gold-light/20 transition-colors">
              <b.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display text-xl font-medium text-foreground mb-2">{b.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">{b.desc}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
