import { motion } from "framer-motion";
import { useShopifyProduct } from "@/hooks/useShopifyProduct";
import fallbackImage from "@/assets/neo-collagen-product.png";

const HeroSection = () => {
  const { data: product, isLoading } = useShopifyProduct("collagen");

  const productImage = product?.images?.edges?.[0]?.node?.url || fallbackImage;
  const price = product?.priceRange?.minVariantPrice?.amount
    ? Math.round(parseFloat(product.priceRange.minVariantPrice.amount))
    : 199;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-bg">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(40_68%_47%/0.08),transparent_70%)]" />
      
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center md:text-right order-2 md:order-1"
        >
          <p className="font-body text-sm tracking-wider text-gold-light/70 mb-4 font-medium">
            كولاجين بحري طبيعي 100%
          </p>
          <h1 className="font-body text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] text-champagne mb-6">
            بشرة مشرقة
            <br />
            <span className="text-gold-gradient">من أعماق البحر</span>
          </h1>
          <p className="font-body text-base md:text-lg text-gold-light/60 max-w-md mx-auto md:mx-0 md:mr-0 mb-6 leading-relaxed">
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
            اطلبي الآن — ابتداءً من {price} درهم
          </a>
        </motion.div>

        {/* Product image from Shopify */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center order-1 md:order-2"
        >
          {isLoading ? (
            <div className="w-56 sm:w-64 md:w-72 lg:w-80 aspect-square bg-gold/5 rounded-2xl animate-pulse" />
          ) : (
            <img
              src={productImage}
              alt={product?.title || "Paravita Neo Collagen"}
              width={800}
              height={1024}
              className="w-56 sm:w-64 md:w-72 lg:w-80 drop-shadow-[0_20px_60px_rgba(201,151,42,0.3)] object-contain"
            />
          )}
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default HeroSection;
