import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { name: "Isabelle M.", text: "After 4 weeks my skin has a glow I haven't seen in years. Absolutely transformative.", rating: 5 },
  { name: "Charlotte L.", text: "The taste is so clean — no fishy aftertaste at all. I add it to my morning matcha ritual.", rating: 5 },
  { name: "Sophia R.", text: "My nails stopped breaking and my hair stylist noticed the difference before I did.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 md:py-32 bg-cream">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
          Loved by <span className="italic text-gold-gradient">Thousands</span>
        </h2>
        <div className="divider-gold mt-6" />
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15} className="bg-background p-8 border border-border rounded-sm">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-body text-muted-foreground leading-relaxed font-light italic mb-6">"{t.text}"</p>
            <p className="font-display text-lg font-medium text-foreground">{t.name}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
