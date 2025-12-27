import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const steps = [
  {
    letter: "P",
    word: "Position",
    description: "Define where you stand in your market and what makes you irreplaceable.",
  },
  {
    letter: "U",
    word: "Understand",
    description: "Deep dive into your audience, their pain points, and what they truly need.",
  },
  {
    letter: "R",
    word: "Refine",
    description: "Polish your message, visuals, and content until everything aligns perfectly.",
  },
  {
    letter: "E",
    word: "Elevate",
    description: "Launch and scale your brand with systems that grow with you.",
  },
];

const PureFramework = () => {
  return (
    <section className="section-padding">
      <div className="container-pure">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            The <span className="text-primary">PURE</span> Framework
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            A proven methodology that transforms personal brands from forgettable to unforgettable.
          </p>
        </ScrollReveal>

        {/* Framework Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.letter}>
              <div className="relative group h-full">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                
                <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 z-10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>

                  {/* Letter */}
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <span className="text-4xl font-display font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {step.letter}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                    {step.word}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PureFramework;
