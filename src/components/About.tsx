
import { Code, BookOpen, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey and aspirations in data science
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Photo Placeholder */}
          <div className="order-2 md:order-1">
            <div className="w-80 h-85 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center">
              <div className="text-8xl text-muted-foreground">
                <img src="/nischal.png" alt="Nischal Kafle" className="w-full h-full object-cover" />

              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hi, I'm Nischal Kafle 
                an aspiring data scientist with a passion for uncovering insights from data and 
                building innovative solutions that make a difference.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently diving deep into the world of data science, I'm learning Python, 
                statistics, machine learning, and data visualization. My goal is to become 
                proficient in transforming raw data into actionable insights.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code className="text-primary" size={20} />
                <span className="text-foreground">Learning Python, SQL, and Machine Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="text-primary" size={20} />
                <span className="text-foreground">Continuous learner and tech enthusiast</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-primary" size={20} />
                <span className="text-foreground">Goal: Becoming a professional Data Scientist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
