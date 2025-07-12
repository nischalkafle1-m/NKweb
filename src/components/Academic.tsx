
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Academic = () => {
  const education = [
    {
      degree: "Bachelor's Degree",
      field: "Not Started",
      school: "",
      location: "City, Country",
      period: "2025 - 2029",
      description: ""
    },
    {
      degree: "+2 ",
      field: "Science Stream",
      school: "Shree Panchayat Secondary School",
      location: "Pathari,Morang, Nepal", 
      period: "2023 - 2025",
      description: "Mathematics, Physics, Chemistry"
    }
  ];

  return (
    <section id="academic" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Academic Background</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational journey that laid the foundation for my data science aspirations
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">{edu.field}</p>
                  <p className="text-foreground font-medium mb-2">{edu.school}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
