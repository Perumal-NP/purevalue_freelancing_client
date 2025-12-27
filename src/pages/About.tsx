import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";
import { ArrowRight, Target, Eye, Sparkles, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description: "We strip away the noise to reveal what truly matters — your unique value.",
  },
  {
    icon: Eye,
    title: "Strategy Before Aesthetics",
    description: "Beautiful design means nothing without purpose. We always start with why.",
  },
  {
    icon: Sparkles,
    title: "Quality Over Quantity",
    description: "One piece of content that converts beats a hundred that don't.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description: "We build brands that compound over time, not quick fixes that fade.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-pure">
          <div className="max-w-4xl">
            <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4 opacity-0 animate-fade-up">
              About Pure Value
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
              We Build Brands That{" "}
              <span className="text-primary">Mean Something</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              Pure Value is a personal branding agency for founders and creators 
              who refuse to blend in. We combine strategic thinking with creative 
              execution to build brands that attract, convert, and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary/30">
        <div className="container-pure">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4">
                Our Philosophy
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                We Don't Add Noise — We Build Value
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  In a world drowning in content, most personal brands are just 
                  contributing to the noise. They post without purpose, design 
                  without direction, and wonder why growth feels impossible.
                </p>
                <p>
                  We believe in a different approach. Every piece of content, 
                  every visual element, every word you put out should serve one 
                  purpose: building genuine value for your audience.
                </p>
                <p>
                  That's why we developed the PURE framework — Position, Understand, 
                  Refine, Elevate. It's our proven methodology for transforming 
                  personal brands from forgettable to unforgettable.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl p-8">
                <div className="h-full bg-card rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-24 h-24 bg-primary rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-primary-foreground font-display font-bold text-4xl">P</span>
                    </div>
                    <div>
                      <p className="font-display font-bold text-2xl text-foreground mb-2">PURE</p>
                      <p className="text-muted-foreground font-body text-sm">
                        Position • Understand • Refine • Elevate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-pure">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-pure text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Work with <span className="text-primary">Pure Value?</span>
          </h2>
          <p className="text-lg text-background/70 font-body mb-10 max-w-2xl mx-auto">
            Let's discuss how we can transform your personal brand into something truly valuable.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Start the Conversation
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
         <FloatingWhatsApp />
    </Layout>
    
  );
};

export default About;
