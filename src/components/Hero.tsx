
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Aspiring Data Scientist", "Tech Enthusiast", "Continuous Learner"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30 flex items-center justify-center">
            <div className="text-6xl text-muted-foreground">
              <img src="/nischal.png" alt="Nischal Kafle" className="w-39 h-40 object-cover rounded-full" />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Nischal Kafle
        </h1>
        
        {/* Highlighted Animated Role */}
        <div className="text-xl md:text-2xl mb-8 h-8 flex items-center justify-center">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold shadow-md transition-all duration-500">
            {roles[currentRole]}
          </span>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Passionate about transforming data into insights and building innovative solutions 
          that shape the future of technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Learn About Me
          </button>
          <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors">
            Download CV
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/1.8 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ChevronDown className="text-muted-foreground hover:text-primary transition-colors" size={32} />
      </div>
    </section>
  );
};

export default Hero;
