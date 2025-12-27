import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sarah Chen",
    category: "Life Coach",
    description: "Complete brand transformation including strategy, content, and website design.",
    tags: ["Branding", "Website", "Content"],
    metrics: "300% increase in client inquiries",
  },
  {
    id: 2,
    title: "Marcus Johnson",
    category: "Real Estate Agent",
    description: "Video content strategy and production for YouTube and Instagram.",
    tags: ["Video", "Content", "Strategy"],
    metrics: "1M+ views in 6 months",
  },
  {
    id: 3,
    title: "Elena Rodriguez",
    category: "Boutique Owner",
    description: "Personal brand positioning and social media content creation.",
    tags: ["Branding", "Content", "Social"],
    metrics: "50K followers gained",
  },
  {
    id: 4,
    title: "David Park",
    category: "Business Coach",
    description: "Website redesign and lead generation funnel optimization.",
    tags: ["Website", "Strategy"],
    metrics: "200% increase in conversions",
  },
  {
    id: 5,
    title: "Lisa Thompson",
    category: "Fitness Influencer",
    description: "Content strategy and video editing for YouTube channel growth.",
    tags: ["Video", "Content", "YouTube"],
    metrics: "100K subscribers reached",
  },
  {
    id: 6,
    title: "James Wilson",
    category: "Financial Advisor",
    description: "LinkedIn thought leadership and personal branding strategy.",
    tags: ["Branding", "Content", "LinkedIn"],
    metrics: "10x engagement rate",
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-pure">
          <div className="max-w-4xl">
            <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4 opacity-0 animate-fade-up">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
              Brands We've{" "}
              <span className="text-primary">Elevated</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              Real results from real founders and creators who chose to build with value.
              Here's a glimpse of the transformations we've created.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-12">
        <div className="container-pure">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/5 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center">
                      <span className="text-primary font-display font-bold text-3xl">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        {project.category}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <p className="text-muted-foreground font-body text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <p className="text-primary font-display font-semibold text-sm">
                    {project.metrics}
                  </p>
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
            Ready to Be Our <span className="text-primary">Next Success Story?</span>
          </h2>
          <p className="text-lg text-background/70 font-body mb-10 max-w-2xl mx-auto">
            Join the founders and creators who've transformed their personal brands with Pure Value.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Start Your Transformation
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
