import { motion } from "framer-motion";
import heroBottle from "@/assets/neo-collagen-hero.png";
import heroWoman from "@/assets/hero-woman.png";

const floatingAnimation = {
  y: [0, -3, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-bg">
      {/* Mobile: Woman as full background with dark overlay */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWoman})` }}
      >
        <div className="absolute inset-0 bg-dark-bg/70" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.08),transparent_70%)]" />

      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center md:text-right order-2 md:order-1"
        >
          <p
            className="font-body text-sm tracking-wider text-gold-light/70 mb-4 font-medium"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
          >
            كولاجين بحري طبيعي 100%
          </p>
          <h1
            className="font-body text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] text-champagne mb-6"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
          >
            بشرة مشرقة
            <br />
            <span className="text-gold-gradient">من أعماق البحر</span>
          </h1>
          <p
            className="font-body text-base md:text-lg text-gold-light/60 max-w-md mx-auto md:mx-0 md:mr-0 mb-6 leading-relaxed"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
          >
            Neo Collagen من Paravita — ببتيدات الكولاجين البحري اللي غادي تعطيك بشرة صافية، شعر قوي، وأظافر متينة.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 text-sm text-gold-light/70">
            <span>🚚 توصيل مجاني</span>
            <span>💳 الدفع عند الاستلام</span>
            <span>🌿 100% طبيعي</span>
          </div>

          <a
            href="#order"
            className="bg-gold-gradient text-dark-bg font-body text-base font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center justify-center w-full sm:w-auto min-h-[56px]"
          >
            اطلبي الآن — ابتداءً من 199 درهم
          </a>
        </motion.div>

        {/* Hero visual: Woman + Floating Bottle — desktop only for woman, bottle always visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center order-1 md:order-2 relative"
        >
          {/* Golden glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 sm:w-64 md:w-72 lg:w-80 aspect-square rounded-full bg-gold/15 blur-3xl" />
          </div>

          {/* Woman image — desktop only */}
          <div className="relative z-10 hidden md:flex items-end justify-center">
            <img
              src={heroWoman}
              alt="بشرة مشرقة مع Neo Collagen"
              width={768}
              height={1024}
              className="w-44 sm:w-52 md:w-60 lg:w-68 object-contain opacity-90"
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>

          {/* Floating bottle — positioned absolute bottom-right, overlaps next section slightly */}
          <motion.img
            src={heroBottle}
            alt="Paravita Neo Collagen"
            width={800}
            height={1024}
            animate={floatingAnimation}
            className="absolute -bottom-8 left-0 md:left-auto md:-left-8 w-28 sm:w-32 md:w-36 lg:w-40 object-contain z-20"
            style={{
              filter: "drop-shadow(0 0 30px rgba(212, 175, 55, 0.3))",
              background: "transparent",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default HeroSection;
