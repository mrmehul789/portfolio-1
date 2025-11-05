const technologies = [
  { name: "Python", category: "Core Language" },
  { name: "Selenium", category: "Browser Automation" },
  { name: "Playwright", category: "Browser Automation" },
  { name: "BeautifulSoup", category: "HTML Parsing" },
  { name: "Scrapy", category: "Framework" },
  { name: "Requests", category: "HTTP Client" },
  { name: "FastAPI", category: "Backend Framework" },
  { name: "Flask", category: "Backend Framework" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Caching" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Version Control" },
  { name: "Pandas", category: "Data Processing" },
  { name: "Celery", category: "Task Queue" },
  { name: "Jupyter", category: "Development" }
];

const categories = ["Core Language", "Browser Automation", "HTML Parsing", "Framework", "Backend Framework", "Database", "Caching", "DevOps", "Version Control", "Data Processing", "Task Queue", "Development"];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build powerful automation solutions
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center space-y-3 hover:glow-border transition-all duration-300 group animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {tech.name.substring(0, 2)}
                </span>
              </div>
              
              {/* Tech Name */}
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
              
              {/* Category */}
              <p className="text-xs text-muted-foreground">
                {tech.category}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 glass-card p-8 text-center animate-fade-in">
          <p className="text-muted-foreground leading-relaxed">
            Constantly exploring new tools and frameworks to stay at the forefront of 
            <span className="text-primary font-semibold"> web scraping</span> and 
            <span className="text-secondary font-semibold"> automation technology</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
