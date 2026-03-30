import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-[32px] left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b border-gold/20">
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
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg border-b border-gold/20 overflow-hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
