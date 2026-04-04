import { lazy, Suspense, useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const HeroTestimonialCarousel = lazy(() => import("@/components/HeroTestimonialCarousel"));
const TestimonialTicker = lazy(() => import("@/components/TestimonialTicker"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const OfferSection = lazy(() => import("@/components/OfferSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const OrderForm = lazy(() => import("@/components/OrderForm"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const bar = document.getElementById("sticky-cta-bar");
      if (!bar) return;
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.transform = pct > 25 ? "translateY(0)" : "translateY(100%)";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", { content_name: "Paravita Neo Collagen", content_category: "Sticky CTA" });
    }
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectOffer = (label: string, price: number, qty: number) => {
    // Map to existing offer values used by OrderForm
    const valueMap: Record<number, string> = { 1: "1-box-199", 3: "3-boxes-299", 4: "4-boxes-399" };
    const offerValue = valueMap[qty] || "1-box-199";
    window.dispatchEvent(new CustomEvent("select-offer", { detail: offerValue }));
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", {
        content_name: "Paravita Neo Collagen",
        value: price,
        currency: "MAD",
      });
    }
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <Suspense fallback={null}><TestimonialsSection /></Suspense>
      <Suspense fallback={null}><HeroTestimonialCarousel /></Suspense>
      <Suspense fallback={null}><TestimonialTicker /></Suspense>
      <Suspense fallback={null}><BenefitsSection /></Suspense>
      <Suspense fallback={null}><OfferSection onSelectOffer={handleSelectOffer} /></Suspense>
      <Suspense fallback={null}><OrderForm /></Suspense>
      <Suspense fallback={null}><FaqSection /></Suspense>
      <Suspense fallback={null}><Footer /></Suspense>
      <Suspense fallback={null}><WhatsAppButton /></Suspense>

      {/* Sticky CTA bar */}
      <div
        id="sticky-cta-bar"
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          background: "var(--gold-dark-hex)", padding: "12px 18px 20px",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.2)", zIndex: 9999,
          transform: "translateY(100%)", transition: "transform 0.35s cubic-bezier(0.34,1.3,0.64,1)",
        }}
      >
        <button
          onClick={scrollToOrder}
          style={{
            width: "100%", background: "#fff", color: "var(--gold-dark-hex)",
            border: "none", borderRadius: "50px", padding: 13,
            fontSize: "15px", fontWeight: 800, fontFamily: "inherit", cursor: "pointer",
          }}
        >
          🛒 اطلبي الآن — الدفع عند الاستلام
        </button>
        <div style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
          بدون دفع مسبق · ضمان استرجاع 30 يوم
        </div>
      </div>
    </div>
  );
};

export default Index;
