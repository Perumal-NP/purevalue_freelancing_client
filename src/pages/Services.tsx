import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Video, PenTool, Globe, Check, Handshake } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceVideo from "@/assets/service-video.jpg";
import serviceContent from "@/assets/service-content.jpg";
import serviceWebsite from "@/assets/service-website.jpg";
import serviceSocial from "@/assets/service-social.jpg";

const services = [
  {
    id: "branding",
    icon: Palette,
    title: "Personal Branding Strategy",
    description: "Define your unique positioning, voice, and visual identity that sets you apart from the noise.",
    image: serviceBranding,
    features: [
      "Brand positioning & messaging framework",
      "Target audience research & personas",
      "Visual identity guidelines",
      "Content strategy roadmap",
      "Competitive analysis",
    ],
   
  },
  {
    id: "video",
    icon: Video,
    title: "Video Editing",
    description: "Professional editing for Reels, YouTube, and promotional content that captivates and converts.",
    image: serviceVideo,
    features: [
      "Short-form content (Reels, TikTok, Shorts)",
      "Long-form YouTube editing",
      "Promotional videos & ads",
      "Motion graphics & animations",
      "Thumbnail design",
    ],
 
  },
  {
    id: "content",
    icon: PenTool,
    title: "Content Creation",
    description: "Scroll-stopping content for Instagram, LinkedIn, and YouTube that builds authority and converts followers.",
    image: serviceContent,
    features: [
      "Content calendar & planning",
      "Instagram carousels & graphics",
      "LinkedIn thought leadership posts",
      "YouTube scripts & concepts",
      "Caption writing & hashtag strategy",
    ],
   
  },
  {
    id: "websites",
    icon: Globe,
    title: "Website Design",
    description: "Portfolio and business websites that showcase your value beautifully and convert visitors into clients.",
    image: serviceWebsite,
    features: [
      "Custom portfolio websites",
      "Business landing pages",
      "Mobile-responsive design",
      "SEO optimization",
      "Analytics setup & tracking",
    ],
  
  },
    {
    id: "social",
    icon: Handshake,
    title: "Social Media Management",
    description: "Strategic social media management to grow your brand, engage your audience, and drive real business results across all platforms.",
    image: serviceSocial,
    features: [
      "High-quality posts & reels",
      "Platform-specific strategies",
      "Audience engagement & growth",
      "Monthly performance reports",
      "Brand consistency & visual alignment",
    ],
  
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-pure">
          <div className="max-w-4xl">
            <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4 opacity-0 animate-fade-up">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
              Everything You Need to{" "}
              <span className="text-primary">Build Your Brand</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              From strategy to execution, we handle every aspect of your personal brand 
              so you can focus on what you do best — serving your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding pt-12">
        <div className="container-pure space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground font-body mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground font-body">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-6">
                  <p className="text-xl font-display font-semibold text-primary">
                    
                  </p>
                  <Button asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Visual with Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-3xl overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-pure text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Not Sure Where to <span className="text-primary">Start?</span>
          </h2>
          <p className="text-lg text-background/70 font-body mb-10 max-w-2xl mx-auto">
            Book a free brand audit and we'll help you identify exactly what your brand needs to grow.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Book a Free Brand Audit
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
