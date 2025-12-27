import { Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const testimonials = [
  {
    quote: "Pure Value transformed my online presence. Within 3 months, I went from invisible to industry leader in my space.",
    author: "Sarah Chen",
    role: "Life Coach",
    rating: 5,
  },
  {
    quote: "The strategy they developed was exactly what I needed. My content finally feels authentic and attracts the right clients.",
    author: "Marcus Johnson",
    role: "Real Estate Agent",
    rating: 5,
  },
  {
    quote: "Working with Pure Value was a game-changer. They understand personal branding at a level I've never seen before.",
    author: "Elena Rodriguez",
    role: "Boutique Owner",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-pure">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Brands We've <span className="text-primary">Elevated</span>
          </h2>
          <p className="text-lg text-background/70 font-body">
            Real results from real founders who chose to build with value.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8 hover:bg-background/10 transition-all duration-300 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-background font-body text-lg leading-relaxed mb-8 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-display font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-background">
                      {testimonial.author}
                    </p>
                    <p className="text-background/60 font-body text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
