import { useState } from "react";

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-[55]" style={{ background: "#1E293B", borderBottom: "1px solid rgba(13,148,136,0.2)" }}>
      <div className="container flex items-center justify-between h-14 md:h-16">
        <a href="#" className="font-display text-xl md:text-2xl font-semibold tracking-wide" style={{ color: "#14B8A6" }}>
          PARAVITA
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "المزايا", href: "#benefits" },
              { label: "العروض", href: "#pricing" },
              { label: "آراء الزبونات", href: "#testimonials" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
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
              className="font-body text-sm font-bold px-6 py-2.5 rounded-lg transition-opacity hover:opacity-90"
              style={{ background: "#0D9488", color: "#fff" }}
            >
              اطلبي الآن
            </button>
          </nav>

          {/* WhatsApp icon - always visible */}
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-green rounded-full flex items-center justify-center"
            style={{ width: 38, height: 38, background: "rgba(37,211,102,0.15)" }}
            aria-label="واتساب"
          >
            <WhatsAppIcon />
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: "#14B8A6" }} aria-label="Menu">
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden overflow-hidden" style={{ background: "#1E293B", borderBottom: "1px solid rgba(13,148,136,0.2)" }}>
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
                className="font-body text-base font-medium"
                style={{ color: "rgba(255,255,255,0.7)" }}
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
              className="font-body text-base font-bold px-8 py-3 rounded-lg"
              style={{ background: "#0D9488", color: "#fff" }}
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
