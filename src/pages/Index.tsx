import { lazy, Suspense } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const OrderForm = lazy(() => import("@/components/OrderForm"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => (
  <div className="min-h-screen">
    <AnnouncementBar />
    <Header />
    <HeroSection />
    <Suspense fallback={null}>
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <OrderForm />
      <Footer />
      <WhatsAppButton />
    </Suspense>
  </div>
);

export default Index;
