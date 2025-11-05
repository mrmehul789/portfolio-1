import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Tech workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center">
        <div className="animate-fade-in space-y-6">
          {/* Accent Text */}
          <div className="inline-block">
            <span className="text-secondary text-sm md:text-base font-mono tracking-wider">
              &lt;developer /&gt;
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold">
            <span className="glow-text">Mehul Jalondhara</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold">
            Automation Enthusiast & Web Scraping Expert
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building intelligent tools to extract and automate data efficiently.
            Transforming raw web data into actionable insights with precision and speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
