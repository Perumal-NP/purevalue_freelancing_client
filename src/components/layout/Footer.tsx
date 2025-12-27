import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-pure section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <ScrollReveal className="lg:col-span-1" delay={0}>
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">P</span>
              </div>
              <span className="font-display font-semibold text-xl">
                Pure<span className="text-primary">Value</span>
              </span>
            </Link>
            <p className="text-background/70 font-body text-base leading-relaxed">
              We don't add noise — we build value. Elevating personal brands through strategy, content, and design.
            </p>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal delay={0.1}>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-background/50">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Work", "Contact"].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors duration-300 font-body"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal delay={0.2}>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-background/50">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Personal Branding Strategy",
                "Video Editing",
                "Content Creation",
                "Website Design",
              ].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to="/services"
                    className="text-background/70 hover:text-primary transition-colors duration-300 font-body"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.3}>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-background/50">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@purevalue.agency"
                  className="text-background/70 hover:text-primary transition-colors duration-300 font-body"
                >
                  hello@purevalue.agency
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors duration-300 font-body flex items-center gap-1"
                >
                  Instagram <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors duration-300 font-body flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 font-body text-sm">
              © {new Date().getFullYear()} Pure Value. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/contact"
                className="text-background/50 hover:text-primary transition-colors duration-300 font-body text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="text-background/50 hover:text-primary transition-colors duration-300 font-body text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
