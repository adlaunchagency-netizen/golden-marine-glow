import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-gold/20 py-10 bg-dark-bg">
    <div className="container text-center space-y-4">
      <p className="font-display text-xl font-semibold text-gold-light">Paravita Neo</p>

      <div className="flex items-center justify-center gap-2 font-body text-sm">
        <Link to="/privacy" className="text-gold-light/70 hover:text-gold-light transition-colors">سياسة الخصوصية</Link>
        <span className="text-gold-light/40">·</span>
        <Link to="/terms" className="text-gold-light/70 hover:text-gold-light transition-colors">شروط الاستخدام</Link>
        <span className="text-gold-light/40">·</span>
        <Link to="/returns" className="text-gold-light/70 hover:text-gold-light transition-colors">سياسة الإرجاع</Link>
      </div>

      <p className="font-body text-sm text-gold-light/60">
        للتواصل: adlaunchagency@gmail.com
      </p>

      <div className="divider-gold" />

      <p className="font-body text-xs text-muted-foreground">
        هذا المنتج مكمل غذائي وليس دواءً. النتائج تتفاوت من شخص لآخر ولا تمثل نتائج مضمونة.
      </p>

      <p className="font-body text-xs text-gold-light/40">
        © {new Date().getFullYear()} Paravita Neo. جميع الحقوق محفوظة.
      </p>
    </div>
  </footer>
);

export default Footer;
