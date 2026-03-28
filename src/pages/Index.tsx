import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <BenefitsSection />
    <PricingSection />
    <TestimonialsSection />
    <OrderForm />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
