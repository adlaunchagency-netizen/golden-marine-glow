import { useState } from "react";

// Inline SVGs to avoid importing lucide-react (161KB) in the critical path
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-[32px] left-0 right-0 z-[55] bg-dark-bg/95 backdrop-blur-md border-b border-gold/20">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-gold-light">
          PARAVITA
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "المزايا", href: "#benefits" },
            { label: "العروض", href: "#pricing" },
            { label: "آراء الزبونات", href: "#testimonials" },
            { label: "اطلبي الآن", href: "#order" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-gold-light/80 hover:text-gold-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              if (typeof window !== "undefined" && window.fbq) {
                window.fbq("track", "AddToCart");
              }
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="bg-gold-gradient text-dark-bg font-body text-sm font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            اطلبي الآن
          </button>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gold-light" aria-label="Menu">
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-bg border-b border-gold/20 overflow-hidden">
          <nav className="flex flex-col items-center gap-6 py-8">
            {[
              { label: "المزايا", href: "#benefits" },
              { label: "العروض", href: "#pricing" },
              { label: "آراء الزبونات", href: "#testimonials" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-base font-medium text-gold-light/80"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("track", "AddToCart");
                }
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="bg-gold-gradient text-dark-bg font-body text-base font-bold px-8 py-3 rounded-lg"
            >
              اطلبي الآن
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
