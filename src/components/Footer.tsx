const Footer = () => (
  <footer className="border-t border-border py-12 bg-card">
    <div className="container text-center">
      <p className="font-display text-2xl font-semibold tracking-wide text-foreground mb-4">OCÉANE</p>
      <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-6">
        Premium Marine Collagen
      </p>
      <div className="divider-gold mb-6" />
      <div className="flex justify-center gap-8 mb-8">
        {["Privacy", "Terms", "Contact"].map((link) => (
          <a key={link} href="#" className="font-body text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
            {link}
          </a>
        ))}
      </div>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Océane. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
