import { motion } from "framer-motion";
import heroProduct from "@/assets/hero-product.png";

const CTASection = () => (
  <section id="shop" className="py-24 md:py-32 relative overflow-hidden">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img src={heroProduct} alt="Océane Marine Collagen" loading="lazy" width={800} height={1024} className="w-48 md:w-64 drop-shadow-2xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center md:text-left"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Limited Edition</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
          Begin Your <span className="italic text-gold-gradient">Ritual</span>
        </h2>
        <p className="font-body text-muted-foreground font-light mb-2">30-Day Supply · 10,000mg per serving</p>
        <p className="font-display text-3xl font-semibold text-foreground mb-8">$89</p>
        <a
          href="#"
          className="bg-gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase px-12 py-4 hover:opacity-90 transition-opacity inline-block"
        >
          Add to Cart
        </a>
        <p className="font-body text-xs text-muted-foreground mt-4 tracking-wide">Free shipping · 30-day guarantee</p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
