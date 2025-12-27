import { Link } from "react-router-dom";
import { ArrowRight, Palette, Video, PenTool, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const services = [
  {
    icon: Palette,
    title: "Personal Branding Strategy",
    description: "Define your unique positioning, voice, and visual identity that sets you apart.",
    link: "/services#branding",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional editing for Reels, YouTube, and promo content that captivates.",
    link: "/services#video",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Scroll-stopping content for Instagram, LinkedIn, and YouTube that converts.",
    link: "/services#content",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Portfolio and business websites that showcase your value beautifully.",
    link: "/services#websites",
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
                className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg block h-full"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
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
