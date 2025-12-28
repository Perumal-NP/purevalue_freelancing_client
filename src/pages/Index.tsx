import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PureFramework from "@/components/sections/PureFramework";
//import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PureFramework />
      <ServicesPreview />
      
      
      <CTASection />
    </Layout>
  );
};

export default Index;
