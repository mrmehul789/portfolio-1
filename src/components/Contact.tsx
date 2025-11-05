import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/mrmehul789",
    color: "text-foreground hover:text-primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehul-jalondhara-550a45282",
    color: "text-foreground hover:text-primary"
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/Mrhacker789",
    color: "text-foreground hover:text-primary"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:mehula519@gmail.com",
    color: "text-foreground hover:text-primary"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-card/30 to-transparent">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss your web scraping and automation needs
          </p>
        </div>

        {/* Contact Card */}
        <div className="glass-card p-8 md:p-12 text-center space-y-8 animate-fade-in glow-border">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to collaborate?
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Whether you need a custom scraper, automation solution, or data extraction service, 
              I'm here to help bring your project to life.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="group"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Button size="lg" variant="default" asChild>
              <a href="mailto:mehula519@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </Button>
          </div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
            <span className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
            <span className="text-sm font-medium text-secondary">Available for projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
