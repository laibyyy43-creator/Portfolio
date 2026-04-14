'use client';

export default function Home() {
  const portfolioData = {
    name: "Laiba",
    title: "Web Developer",
    email: "laibyyy43@gmail.com",
    phone: "03378230596",
    about: "Passionate web developer who loves exploring new technologies and building beautiful, functional websites. Currently pursuing BS Computer Science from Virtual University.",
    skills: ["HTML", "CSS", "JavaScript", "SQL", "React", "Laravel"],
    projects: [
      {
        title: "The Digital Tasbeeh Counter",
        description: "A React-based application to count Tasbeeh with a clean and intuitive interface.",
        tech: ["React", "JavaScript", "CSS"],
        github: "https://github.com/laibyyy43-creator/package.json.git"
      },
      {
        title: "The Food Blog",
        description: "A visually appealing HTML/CSS card design showcasing spicy biryani as a food blog highlight.",
        tech: ["HTML", "CSS"],
        github: "https://github.com/laibyyy43-creator/index.html"
      },
      {
        title: "The Traffic Warden",
        description: "A Bootstrap-based challan form interface for issuing traffic fines and managing records.",
        tech: ["Bootstrap", "CSS"],
        github: "https://github.com/laibyyy43-creator/trafic.html"
      }
    ],
    education: [
      {
        degree: "BS Computer Science",
        institution: "Virtual University",
        status: "Continuing"
      },
      {
        degree: "Hafiz-e-Quran",
        institution: "Islamic Education"
      }
    ],
    social: {
      github: "https://github.com/laibyyy43-creator",
      email: "laibyyy43@gmail.com"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {portfolioData.name}
          </h1>
          <ul className="hidden md:flex gap-8">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{portfolioData.name}</span>
          </h1>
          <p className="text-2xl text-slate-300">{portfolioData.title}</p>
          <p className="text-lg text-slate-400 max-w-2xl">{portfolioData.about}</p>
          <div className="flex gap-4 pt-4">
            <a href={`mailto:${portfolioData.social.email}`} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
              Get in Touch
            </a>
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-700">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
        <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur">
          <p className="text-slate-300 leading-relaxed">{portfolioData.about}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-700">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6 text-center hover:from-slate-700 hover:to-slate-600 transition transform hover:scale-105">
              <p className="font-semibold text-lg">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-700">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Projects</h2>
        <div className="space-y-6">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur border border-slate-700 hover:border-blue-500 transition">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-700">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Education</h2>
        <div className="space-y-4">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur border border-slate-700">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-slate-400">{edu.institution}</p>
              {edu.status && <p className="text-blue-400 text-sm mt-2">{edu.status}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-700">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Get In Touch</h2>
        <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur border border-slate-700">
          <p className="text-slate-300 mb-6">Feel free to reach out to me!</p>
          <div className="space-y-4">
            <p className="text-lg">
              📧 Email: <a href={`mailto:${portfolioData.email}`} className="text-blue-400 hover:text-blue-300">{portfolioData.email}</a>
            </p>
            <p className="text-lg">
              📱 Phone: <a href={`tel:${portfolioData.phone}`} className="text-blue-400 hover:text-blue-300">{portfolioData.phone}</a>
            </p>
            <p className="text-lg">
              💻 GitHub: <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">@laibyyy43-creator</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 text-center text-slate-400">
        <p>&copy; 2026 {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
