
import { useState } from "react";
import { Home, User, Code, FolderOpen, Mail, GraduationCap, Menu, X } from "lucide-react";

const neonBlue = "#00FFFF"; // neon cyan/blue color

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "academic", label: "Academic", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-card border border-border rounded-lg p-2 hover:bg-accent transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-black">
              <span className="text-white font-bold text-lg">NK</span>
            </div>
            <span className="text-lg font-semibold">Nischal Kafle</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={
                  activeSection === item.id
                    ? { backgroundColor: neonBlue, color: "#000" }
                    : {}
                }
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors hover:bg-cyan-300`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}

            {/* Blog Link */}
            <a
              href="https://nischalkafle-blog.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors hover:bg-cyan-300 text-white"
              style={{ backgroundColor: "#111", marginTop: "1rem" }}
            >
              <FolderOpen size={18} />
              <span>Blog</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
