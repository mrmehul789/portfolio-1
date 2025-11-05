import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import myntraProject from "@/assets/myntra-project.jpg";
import neweggProject from "@/assets/newegg-project.jpg";

const projects = [
  {
    title: "Myntra Scraper",
    description: "A comprehensive web scraping solution that extracts product details, prices, and customer reviews from Myntra's e-commerce platform. Built with Python, this tool efficiently navigates through product catalogs and gathers structured data for analysis and monitoring.",
    image: myntraProject,
    tags: ["Python", "Selenium", "BeautifulSoup", "Data Extraction"],
    features: [
      "Product metadata extraction",
      "Price monitoring",
      "Coupon Intelligence System",
      "Automated data updates"
    ],
    demoLink: "/demo/myntra"
  },
  {
    title: "Newegg Scraper",
    description: "An advanced e-commerce automation tool designed for Newegg's platform. Collects product metadata, stock availability, pricing trends, and technical specifications. Optimized for large-scale data collection with intelligent rate limiting and error handling. Built for reliability and clarity.",
    image: neweggProject,
    tags: ["Python", "Playwright", "FastAPI", "PostgreSQL"],
    features: [
      "Comprehensive Product Insights",
      "Advanced Rating Analysis",
      "Full Review Harvesting",
      "Real-Time Data Sync"
    ],
    demoLink: "/demo/newegg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing real-world web scraping solutions built for efficiency and scalability
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300 animate-fade-in h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed min-h-[96px] md:min-h-[112px]">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-2 mt-auto">
                  <Link to={project.demoLink}>
                    <Button variant="default" size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Try Live Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
