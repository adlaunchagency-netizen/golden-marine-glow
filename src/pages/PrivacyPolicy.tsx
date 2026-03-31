import { Link } from "react-router-dom";

const sections = [
  {
    title: "ما المعلومات التي نجمعها؟",
    body: "نجمع الاسم ورقم الهاتف فقط عند تقديم الطلب، بهدف معالجة الطلبات والتوصيل.",
  },
  {
    title: "كيف نستخدم معلوماتك؟",
    body: "تُستخدم المعلومات حصراً لتنفيذ طلبك وإيصال المنتج إليك. لا نبيع أي بيانات لأطراف ثالثة.",
  },
  {
    title: "هل معلوماتك آمنة؟",
    body: "نعم. نحرص على حماية بياناتك ولا نشاركها مع أي جهة خارجية باستثناء شركة التوصيل.",
  },
  {
    title: "التواصل معنا",
    body: "لأي استفسار متعلق ببياناتك، تواصلي معنا على: adlaunchagency@gmail.com",
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background py-12">
    <div className="container max-w-2xl">
      <Link to="/" className="font-body text-sm text-gold-dark hover:text-gold transition-colors mb-8 inline-block">
        ← العودة للرئيسية
      </Link>

      <h1 className="font-body text-3xl md:text-4xl font-bold text-foreground mb-10">سياسة الخصوصية</h1>

      <div className="space-y-8">
        {sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-body text-xl font-semibold text-foreground mb-3">{s.title}</h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
