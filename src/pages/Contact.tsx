import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", business: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-pure">
          <div className="max-w-4xl">
            <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4 opacity-0 animate-fade-up">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
              Let's Build Your Brand{" "}
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              Ready to transform your personal brand? Book a free brand audit 
              and discover how we can help you stand out and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding pt-12">
        <div className="container-pure">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
              <h2 className="font-display font-semibold text-2xl text-foreground mb-6">
                Book Your Free Brand Audit
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-body font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-body font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-body font-medium text-foreground mb-2"
                  >
                    Your Business / Industry
                  </label>
                  <Input
                    id="business"
                    name="business"
                    type="text"
                    required
                    placeholder="e.g., Life Coach, Real Estate, Fitness"
                    value={formData.business}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-body font-medium text-foreground mb-2"
                  >
                    Tell Us About Your Brand Goals
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="What are you looking to achieve with your personal brand?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Build My Brand
                      <ArrowRight size={18} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-semibold text-2xl text-foreground mb-6">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground mb-1">
                        Email Us
                      </p>
                      <a
                        href="mailto:hello@purevalue.agency"
                        className="text-muted-foreground hover:text-primary transition-colors font-body"
                      >
                        hello@purevalue.agency
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground mb-1">
                        Call Us
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary transition-colors font-body"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground mb-1">
                        Location
                      </p>
                      <p className="text-muted-foreground font-body">
                        Remote-first agency<br />
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-secondary/50 rounded-2xl p-8">
                <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-body font-medium text-foreground mb-1">
                      How long does a typical project take?
                    </p>
                    <p className="text-sm text-muted-foreground font-body">
                      Most branding projects take 4-6 weeks. Content packages run monthly.
                    </p>
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground mb-1">
                      Do you work with clients internationally?
                    </p>
                    <p className="text-sm text-muted-foreground font-body">
                      Yes! We're a remote-first agency serving clients across all timezones.
                    </p>
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground mb-1">
                      What's included in the free brand audit?
                    </p>
                    <p className="text-sm text-muted-foreground font-body">
                      A 30-minute call to review your current brand and identify opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
