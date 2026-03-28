const Footer = () => (
  <footer className="border-t border-gold/20 py-10 bg-dark-bg">
    <div className="container text-center">
      <p className="font-display text-2xl font-semibold tracking-wide text-gold-light mb-3">PARAVITA</p>
      <p className="font-body text-xs text-gold-light/50 mb-6">
        Neo Collagen — كولاجين بحري طبيعي
      </p>
      <div className="divider-gold mb-6" />
      <p className="font-body text-xs text-gold-light/40">
        © {new Date().getFullYear()} Paravita. جميع الحقوق محفوظة.
      </p>
    </div>
  </footer>
);

export default Footer;
