import { Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm">Mehul Jalondhara</span>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Mehul Jalondhara — Built with{" "}
              <span className="text-primary">💻</span> and{" "}
              <span className="text-secondary">Automation</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 text-sm">
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
