import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Secondary gradient orb */}
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
        
        {/* Floating accent shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-32 left-16 w-48 h-48 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-2xl animate-float animation-delay-300" />
      </div>

      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient" />

      <div className="container-pure relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-primary font-display font-medium text-sm uppercase tracking-widest opacity-0 animate-fade-up">
                Personal Branding Agency
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-foreground opacity-0 animate-fade-up animation-delay-100">
                We Don't Add Noise —{" "}
                <span className="text-primary">We Build Value.</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl opacity-0 animate-fade-up animation-delay-200">
                Strategic personal branding for coaches, entrepreneurs, and creators 
                who are ready to stand out and scale with clarity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
              <Button variant="hero" asChild className="animate-glow">
                <Link to="/contact">
                  Build Your Brand
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/work">
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 opacity-0 animate-fade-up animation-delay-400">
              <p className="text-sm text-muted-foreground font-body mb-4">
                Trusted by founders and creators worldwide
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Brands Built</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-foreground">3M+</p>
                  <p className="text-sm text-muted-foreground">Views Generated</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Client Retention</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element with floating animation */}
          <div className="relative hidden lg:block opacity-0 animate-fade-in animation-delay-200">
            <div className="relative aspect-square max-w-lg mx-auto animate-float">
              {/* Abstract Brand Visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl transform rotate-3 animate-pulse-slow" />
              <div className="absolute inset-4 bg-card rounded-2xl shadow-xl overflow-hidden border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 bg-primary rounded-2xl mx-auto flex items-center justify-center shadow-lg animate-glow">
                      <span className="text-primary-foreground font-display font-bold text-3xl">P</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-background font-display font-semibold text-xl">PURE</p>
                      <div className="flex justify-center gap-2">
                        {["Position", "Understand", "Refine", "Elevate"].map((word, i) => (
                          <span key={word} className="text-background/60 text-xs font-body">
                            {word}{i < 3 && " •"}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-display font-medium text-sm shadow-lg animate-bounce">
                Start Today
              </div>
              
              {/* Additional floating accent */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-xl opacity-60 blur-sm animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
