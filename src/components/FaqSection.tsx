import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "واش Paravita Neo مناسب ليا؟",
    a: "Paravita Neo مناسب للنساء اللي بغاو يحافظو على صحة بشرتهم وشعرهم. ننصحك تتشاوري مع طبيبتك قبل الاستعمال إلا كنتي حامل أو مرضعة.",
  },
  {
    q: "كيفاش ناخد المنتج؟",
    a: "خدي الجرعة اليومية الموصى بها مع الماء، باش تحصلي على أفضل النتائج.",
  },
  {
    q: "واش كاين إمكانية الإرجاع؟",
    a: "إيه، كاين سياسة إرجاع. تواصلي معانا خلال 7 أيام من الاستلام عبر واتساب أو البريد الإلكتروني.",
  },
  {
    q: "فين غادي نشوف النتائج؟",
    a: "النتائج تتفاوت من شخص لآخر حسب طبيعة البشرة والروتين اليومي. بعض الزبونات لاحظن فرقاً بعد أسابيع من الاستخدام المنتظم.",
  },
  {
    q: "كيفاش يتم التوصيل؟",
    a: "التوصيل متوفر في جميع أنحاء المغرب. الدفع عند الاستلام — ما كاينش أي دفع مسبق.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-2xl">
        <AnimatedSection className="text-center mb-14">
          <p className="font-body text-sm tracking-wider text-gold-dark font-medium mb-3">أسئلة شائعة</p>
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
                      style={{ color: "hsl(var(--gold))", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
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
