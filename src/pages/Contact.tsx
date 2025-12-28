import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    business: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_gyj14ha",
        "template_p5idtf6",
        formRef.current!,
        {
          publicKey: "arlocAM4sfiwrAgCV",
        }
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone:"",
        business: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-pure max-w-4xl">
          <p className="text-primary font-medium text-sm uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Build Your Brand <span className="text-primary">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Book a free brand audit and discover how we can help you grow.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-12">
        <div className="container-pure grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-card border rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Book Your Free Brand Audit
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                
              </div>
                 <Input
                  name="phone"
                  type="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              <Input
                name="business"
                placeholder="Your Business / Industry"
                value={formData.business}
                onChange={handleChange}
                required
              />

              <Textarea
                name="message"
                placeholder="Tell us about your brand goals"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>Build My Brand <ArrowRight /></>}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <ContactItem icon={<Mail />} title="Email" value="hello@purevalue.agency" />
            <ContactItem icon={<Phone />} title="Phone" value="+1 (234) 567-890" />
            <ContactItem
              icon={<MapPin />}
              title="Location"
              value="Remote-first · Worldwide"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ContactItem = ({
  icon,
  title,
  value,
}: {
  icon: JSX.Element;
  title: string;
  value: string;
}) => (
  <div className="flex gap-4 items-start">
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-muted-foreground">{value}</p>
    </div>
  </div>
);

export default Contact;
