import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "هل المنتج آمن أثناء الرضاعة الطبيعية؟",
    a: "نعم، تركيبة بارافيتا خالية من المواد الضارة وآمنة للمرضعات. ننصح باستشارة طبيبك في حال وجود حالة طبية خاصة.",
  },
  {
    q: "في كم من الوقت تظهر النتائج؟",
    a: "تلاحظ أغلب العملاء فرقاً واضحاً خلال 15–30 يوماً من الاستخدام اليومي المنتظم.",
  },
  {
    q: "ما الفرق بين الكولاجين العادي وكولاجين بارافيتا؟",
    a: "بارافيتا يعتمد على ببتيدات صغيرة (أقل من 1000 Da) تُمتص بنسبة 95% مقارنة بالكولاجين العادي الذي يُمتص بنسبة منخفضة.",
  },
  {
    q: "كيف يتم التوصيل والدفع؟",
    a: "التوصيل لجميع مدن المغرب في 24–48 ساعة. الدفع عند الاستلام فقط — لا حاجة لبطاقة بنكية.",
  },
  {
    q: "ماذا لو لم يعجبني المنتج؟",
    a: "نضمن استرداد المال الكامل خلال 30 يوماً إذا لم تلاحظي أي فرق.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-2xl">
        <AnimatedSection className="text-center mb-14">
          <p className="font-body text-sm tracking-wider font-medium mb-3" style={{ color: "#0D9488" }}>أسئلة شائعة</p>
          <h2 className="font-body text-3xl md:text-4xl font-bold text-foreground mb-4">
            كل شي محتاجة <span className="text-gold-gradient">تعرفيه</span>
          </h2>
          <div className="divider-gold mt-6" />
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border border-border rounded-xl overflow-hidden bg-card">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-right font-body font-semibold text-foreground hover:bg-accent/30 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className="shrink-0 ml-3 transition-transform duration-200"
                      style={{ color: "#0D9488", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                      size={20}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="px-5 pb-5 font-body text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
