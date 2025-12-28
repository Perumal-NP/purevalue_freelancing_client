import { Link } from "react-router-dom";
import { ArrowRight, Palette, Video, PenTool, Globe, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceVideo from "@/assets/service-video.jpg";
import serviceContent from "@/assets/service-content.jpg";
import serviceWebsite from "@/assets/service-website.jpg";
import serviceSocial from "@/assets/service-social.jpg";

const services = [
  {
    icon: Palette,
    title: "Personal Branding Strategy",
    description: "Define your unique positioning, voice, and visual identity that sets you apart.",
    link: "/services#branding",
    image: serviceBranding,
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional editing for Reels, YouTube, and promo content that captivates.",
    link: "/services#video",
    image: serviceVideo,
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Scroll-stopping content for Instagram, LinkedIn, and YouTube that converts.",
    link: "/services#content",
    image: serviceContent,
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Portfolio and business websites that showcase your value beautifully.",
    link: "/services#websites",
    image: serviceWebsite,
  },
   {
    icon: Handshake,
    title: "Social Media Management",
    description: "Strategic social media management to grow your brand, engage your audience, and drive real business results across all platforms.",
    link: "/services#websites",
    image: serviceSocial,
  },
  
  
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-pure">
        {/* Header */}
        <ScrollReveal className="max-w-2xl mb-16">
          <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Services Built for{" "}
            <span className="text-primary">Modern Creators</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            From strategy to execution, we handle every aspect of your personal brand 
            so you can focus on what you do best.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                to={service.link}
                className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg block h-full overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal className="text-center" delay={0.4}>
          <Button asChild size="lg">
            <Link to="/services">
              Explore All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesPreview;
