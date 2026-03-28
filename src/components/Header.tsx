import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Benefits", "Ingredients", "Testimonials"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
          OCÉANE
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#shop"
            className="bg-gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase px-6 py-2.5 hover:opacity-90 transition-opacity"
          >
            Shop Now
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground"
                >
                  {link}
                </a>
              ))}
              <a href="#shop" className="bg-gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-3">
                Shop Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
