
import { BookOpen, Code, Brain, Target } from "lucide-react";

const Projects = () => {
  const learningPath = [
    {
      id: 1,
      title: "Data Science Fundamentals",
      description: "Currently learning Python programming, statistics, and data manipulation with pandas and numpy.",
      icon: Brain,
      status: "Learning",
      technologies: ["Python", "Pandas", "NumPy", "Statistics"],
      progress: 5
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      description: "Exploring supervised and unsupervised learning algorithms, working through practical examples.",
      icon: Target,
      status: "In Progress",
      technologies: ["Scikit-learn", "Matplotlib", "Seaborn"],
      progress: 2
    },
    {
      id: 3,
      title: "Web Development Skills",
      description: "Building responsive websites and learning modern web technologies to create data dashboards.",
      icon: Code,
      status: "Practicing",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      progress: 2
    },
    {
      id: 4,
      title: "Portfolio Projects",
      description: "Planning exciting data science projects to showcase my growing skills and knowledge.",
      icon: BookOpen,
      status: "Planning",
      technologies: ["Data Visualization", "APIs", "Databases"],
      progress: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Learning": return "text-neon-cyan border-neon-cyan/50";
      case "In Progress": return "text-neon-magenta border-neon-magenta/50";
      case "Practicing": return "text-accent border-accent/50";
      case "Planning": return "text-muted-foreground border-muted/50";
      default: return "text-neon-cyan border-neon-cyan/50";
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neon-magenta glow-magenta mb-4">
            My Learning Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full glow-magenta"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Currently building my foundation in data science and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {learningPath.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className="group bg-card/50 rounded-lg p-6 border border-neon-cyan/30 hover-glow-cyan transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-neon-cyan">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-neon-cyan group-hover:text-neon-magenta transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full border ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm text-neon-cyan">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-muted/30 rounded-full text-muted-foreground border border-neon-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Projects Section */}
        <div className="text-center mt-16">
          <div className="bg-card/30 rounded-lg p-8 border border-neon-magenta/30">
            <h3 className="text-2xl font-bold text-neon-magenta mb-4">Coming Soon</h3>
            <p className="text-muted-foreground mb-4">
              Exciting projects are in development! Follow my journey as I apply my learning to create meaningful data science solutions.
            </p>
            <div className="flex justify-center">
              <div className="px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-neon-cyan/30 rounded-lg">
                <span className="text-neon-cyan">Stay tuned for updates!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
