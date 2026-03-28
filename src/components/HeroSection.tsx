import { motion } from "framer-motion";
import heroProduct from "@/assets/hero-product.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
    <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center md:text-left order-2 md:order-1"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Premium Marine Collagen
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground mb-6">
          Radiance
          <br />
          <span className="text-gold-gradient font-medium italic">from the Sea</span>
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0 mb-8 font-light leading-relaxed">
          Wild-caught, sustainably sourced Type I & III marine collagen peptides for luminous skin, stronger hair, and ageless vitality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#shop"
            className="bg-gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-opacity inline-block text-center"
          >
            Discover
          </a>
          <a
            href="#about"
            className="border border-gold text-foreground font-body text-sm tracking-widest uppercase px-10 py-4 hover:bg-accent transition-colors inline-block text-center"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex justify-center order-1 md:order-2"
      >
        <img
          src={heroProduct}
          alt="Océane Marine Collagen bottle"
          width={800}
          height={1024}
          className="w-64 sm:w-72 md:w-80 lg:w-96 drop-shadow-2xl"
        />
      </motion.div>
    </div>

    {/* Decorative gold line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
  </section>
);

export default HeroSection;
