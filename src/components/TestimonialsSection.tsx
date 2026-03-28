import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { name: "فاطمة م. — الدار البيضاء", text: "والله غير من أول أسبوع بشرتي ولات كتلمع! صاحباتي سولوني شنو دايرة 😍", rating: 5 },
  { name: "سارة ل. — الرباط", text: "الشعر ديالي كان كيطيح بزاف، من بعد Neo Collagen ولا قوي ومتين. شكراً Paravita!", rating: 5 },
  { name: "مريم ب. — مراكش", text: "الأظافر ديالي كانو كيتكسرو ديما، دابا ولاو صلبين. المنتج ممتاز وبلا ريحة.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-champagne">
    <div className="container">
      <AnimatedSection className="text-center mb-14">
        <p className="font-body text-sm tracking-wider text-gold-dark font-medium mb-3">آراء الزبونات</p>
        <h2 className="font-body text-3xl md:text-4xl font-bold text-foreground mb-4">
          شنو <span className="text-gold-gradient">كيقولو</span> الزبونات ديالنا
        </h2>
        <div className="divider-gold mt-6" />
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15} className="bg-background p-6 rounded-xl border border-border">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
            <p className="font-body text-base font-bold text-foreground">{t.name}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
