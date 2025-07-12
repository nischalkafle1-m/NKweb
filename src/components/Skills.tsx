import { Code, Database, Brain, BarChart3, Globe, GitBranch } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      name: "Python",
      level: 10,
      description: "Data analysis, machine learning, automation",
      color: "cyan"
    },
    {
      icon: Globe,
      name: "HTML/CSS",
      level: 5,
      description: "Responsive design, modern layouts",
      color: "magenta"
    },
    {
      icon: Brain,
      name: "AI & ML",
      level: 3,
      description: "Neural networks, deep learning fundamentals",
      color: "green"
    },
    {
      icon: BarChart3,
      name: "Data Science",
      level: 3,
      description: "Statistical analysis, visualization, insights",
      color: "cyan"
    },
    {
      icon: Database,
      name: "Databases",
      level: 0,
      description: "SQL, data modeling, optimization",
      color: "magenta"
    },
    {
      icon: GitBranch,
      name: "Version Control",
      level: 0,
      description: "Git, GitHub, collaborative development",
      color: "green"
    }
  ];

  const getGlowClass = (color: string) => {
    switch (color) {
      case "cyan": return "hover-glow-cyan border-neon-cyan/30";
      case "magenta": return "hover-glow-magenta border-neon-magenta/30";
      case "green": return "hover-glow-green border-neon-green/30";
      default: return "hover-glow-cyan border-neon-cyan/30";
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case "cyan": return "text-neon-cyan";
      case "magenta": return "text-neon-magenta";
      case "green": return "text-neon-green";
      default: return "text-neon-cyan";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neon-cyan glow-cyan mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-cyan"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Continuously expanding my technical arsenal to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`bg-card/50 p-6 rounded-lg border transition-all duration-500 ${getGlowClass(skill.color)} hover:scale-105`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`w-8 h-8 ${getTextColor(skill.color)} mr-3`} />
                <h3 className={`text-xl font-semibold ${getTextColor(skill.color)}`}>
                  {skill.name}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {skill.description}
              </p>

              {/* Skill Level Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className={getTextColor(skill.color)}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r transition-all duration-1000 ease-out ${
                      skill.color === 'cyan' ? 'from-primary to-primary/70' :
                      skill.color === 'magenta' ? 'from-secondary to-secondary/70' :
                      'from-accent to-accent/70'
                    }`}
                    style={{ 
                      width: `${skill.level}%`,
                      boxShadow: `0 0 10px ${
                        skill.color === 'cyan' ? 'hsl(var(--primary) / 0.5)' :
                        skill.color === 'magenta' ? 'hsl(var(--secondary) / 0.5)' :
                        'hsl(var(--accent) / 0.5)'
                      }`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-neon-magenta mb-6">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "AI and ML", "Web Development", "Data Science"].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-primary rounded-full text-sm font-medium border border-neon-cyan/30 glow-cyan animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;