import { Code2, Database, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Scraping Expertise",
    description: "Proficient in building robust scrapers that handle complex websites, dynamic content, and anti-bot mechanisms with ease."
  },
  {
    icon: Zap,
    title: "Automation & Efficiency",
    description: "Specialized in creating automated workflows that save time and reduce manual effort through intelligent data extraction."
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Experience in structuring, storing, and optimizing large datasets for analysis and business intelligence applications."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-transparent to-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming data challenges into elegant solutions
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Bio */}
          <div className="glass-card p-8 animate-fade-in">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate developer specializing in <span className="text-primary font-semibold">web scraping</span> and <span className="text-primary font-semibold">automation</span>. 
              My journey began with a fascination for how data flows across the web, and has evolved into expertise in extracting, 
              processing, and leveraging data at scale. I focus on building efficient, maintainable solutions that respect website 
              resources while delivering reliable results.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 space-y-4 hover:glow-border transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="glass-card p-8 animate-fade-in border-l-4 border-secondary">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Performance & Optimization
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every project I undertake emphasizes <span className="text-secondary font-semibold">performance optimization</span>, 
              ethical scraping practices, and robust error handling. I believe in writing clean, maintainable code that can 
              scale from prototype to production while respecting rate limits and website terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
