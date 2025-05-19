import {
  Menu,
  Github,
  Mail,
  ChevronDown,
  ExternalLink,
  Code2,
} from "lucide-react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from 'react-router-dom';


function Home() {

 const sectionIds = [
  { name: 'home', id: 'home' },
  { name: 'projects', id: 'projects' },
  { name: 'about', id: 'about' },
  { name: 'contact', id: 'contact' },
];



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  const offset = 200; // adjust based on your navbar height

  if (section) {
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });

    setActiveSection(id);
  }
};




const navigate = useNavigate();
const [formData, setFormData] = useState({ name: '', email: '', message: '' });

function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  setFormData({ ...formData, [e.target.name]: e.target.value });
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const data = new FormData();
  data.append('form-name', 'contact');
  data.append('name', formData.name);
  data.append('email', formData.email);
  data.append('message', formData.message);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data as any).toString(),
  })
    .then(() => navigate('/success'))
    .catch((error) => alert(error));
}
  const projects = [
    {
      title: "Regalatop.cl",
      description:
        "Custom gifting platform for the Chilean market. Fullstack with VueJs for the frontend and Laravel at the backend. I built the system logic, backend flows, and CI/CD integration.",
      image: "/assets/RT_logo_new.svg",
      live: "https://regalatop.cl",
    },
    {
      title: "PinoyPrideWorldwide.com",
      description:
        "Multilingual cultural showcase website, integrated CMS and deployment pipeline. Built with Vite, Bootstrap, and static JSON routing.",
      image: "/assets/ppw_withbg.png",
      live: "https://pinoyprideworldwide.com",
    },
    {
      title: "Emergency Response System (In Progress)",
      description:
        "AI-powered reporting system. Built mobile + web stack, image classification model, Firestore + Supabase integration, and real-time responder tracking.",
      image: "/assets/Pinasafe_logo1.png",
      live: "https://pinasafe.netlify.app/",
    },
  ];

  const techStacks = {
    Frontend: ["React", "Tailwind CSS", "Vite", "Shadcn UI", "Vue", "Vanilla"],
    Backend: ["Node.js", "Supabase", "Firebase", "GitHub API", "Laravel", "Express", "FastAPI"],
    DevOps: ["GitHub Actions", "Render", "Netlify", "Docker"],
    Database: ["PostgreSQL", "MySQL", "Firestore", "RLS Policies", "Supabase"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Code2 className="w-8 h-8 text-indigo-600 mr-2" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  Gromyko Andrevich A. Urgel Jr
                </span>
                <span className="text-sm sm:text-base text-slate-700">
                  Fullstack Web Developer
                </span>
              </div>
            </div>
           <div className="hidden md:flex space-x-8">
            {sectionIds.map((link) => (
                <a
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                href={`#${link.name}`}
                className={`text-slate-600 hover:text-indigo-600 transition ${
                    activeSection === link.id ? "font-bold text-indigo-600" : ""
                }`}
                >
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </a>
            ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="text-slate-600" />
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-2 space-y-2">
                {sectionIds.map((link) => (
                <a
                    key={link.id}
                    href={`#${link.name}`}
                    onClick={() => scrollToSection(link.id)}
                    className={`block text-slate-600 ${
                    activeSection === link.id ? "font-semibold text-indigo-600" : ""
                    }`}
                >
                    {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </a>
                ))}
            </div>
            </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className=" pt-32 pb-10 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-100 to-purple-100"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
          <img
            src="/assets/profile_photo.png"
            alt="Gromyko Urgel"
            className="rounded-full object-cover w-full h-full border-4 border-indigo-600 shadow-md"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
          Gromyko Andrevich A. Urgel Jr
        </h1>
        <p className="text-lg sm:text-xl text-indigo-600 font-semibold mb-4">
          <Typewriter
            words={[
              "Full Stack Web Developer",
              "Support Engineer",
              "IT Manager",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        <span className="inline-block px-4 py-1.5 rounded-full bg-green-500 text-white text-sm font-medium mb-6">
          Available for hire
        </span>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-4">
          Fullstack developer experienced in{" "}
          <span className="font-semibold text-indigo-600">
            <Typewriter
              words={[
                "React",
                "Node.js",
                "Laravel",
                "Supabase",
                "real-time systems",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </span>
        </p>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8">
          I build scalable, resilient software that delivers real-world impact
          across web and mobile.
        </p>

        {/* <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
          >
            <Github size={18} className="inline mr-2" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="px-5 py-2 border border-slate-300 text-slate-800 rounded-lg hover:border-slate-400 transition"
          >
            <Linkedin size={18} className="inline mr-2" />
            LinkedIn
          </a>
        </div> */}

        <div className="animate-bounce mt-5 mb-5">
          <ChevronDown className="text-slate-400 mx-auto" />
        </div>
        <a
        href="/assets/Urgel_Gromyko_Andrevich_CV.pdf"
        download
        className="text-indigo-600  text-sm  inline-block px-5 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-500 transition transform hover:scale-105 duration-300"
      >
        📄 My Resume
      </a>
      </section>
      {/* Projects Section */}
<section id="projects" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
      Real products. Built for real users — from e-commerce platforms to AI-powered tools.
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <div
        key={index}
        className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow hover:shadow-lg transition-all"
      >
        <div className="aspect-video bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
          <p className="text-slate-600 mt-2 mb-4 text-sm">{project.description}</p>
          <a
            href={project.live}
            target="_blank"
            className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition"
          >
            <ExternalLink size={14} />
            View Site
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

<section id="about" className=" py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
      I’m a results-driven fullstack developer with 3+ years of hands-on experience in software development
      and over 7 years in IT and tech support roles across various industries.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
    <div className="space-y-6 text-slate-600">
      <p>
        I’ve worked as a Fullstack Developer at <strong>Web Fuel Agency</strong>, delivering custom websites for clients
        across Latin America. I also served as IT Manager at <strong>Pinoy Pride Worldwide</strong>, where I managed infrastructure,
        tools, and a team of engineers supporting digital operations.
      </p>

      <p>
        I specialize in building scalable systems using React, Node.js, Laravel, Supabase, and PostgreSQL. I’ve implemented
        CI/CD pipelines with GitHub Actions, containerized apps using Docker, and deployed projects to Netlify and Render.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>🚀 Launched <strong>Regalatop.cl</strong> — a personalized gift platform used daily in Chile</li>
        <li>🧠 Built a real-time <strong>Emergency Response System</strong> with AI and GPS tracking</li>
        <li>🔧 Automated server monitoring and backups for internal tools</li>
        <li>🌍 Developed multilingual CMS-backed websites with Git workflows</li>
        <li>💡 Maintained 99.99% uptime across live client projects</li>
      </ul>

      <p>
      I’m passionate about building software that performs under real-world conditions that can handle high traffic, tight deadlines, and limited budgets without breaking. 
      I believe in practical engineering, clean code, and shipping with purpose.
      </p>

     
    </div>

    <div className="grid grid-cols-2 gap-4">
      {Object.entries(techStacks).map(([category, items]) => (
        <div
          key={category}
          className="bg-white border border-slate-200 rounded-lg p-6"
        >
          <h3 className="font-semibold text-slate-900 mb-3">{category}</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {items.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


<section id="contact" className=" py-20 bg-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
      Have a project in mind or just want to connect? Let’s make it happen.
    </p>
  </div>

    <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6"
    >
      {/* Netlify hidden inputs */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg"
      />

      <textarea
        name="message"
        placeholder="Your message"
        rows={4}
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Send Message
      </button>
    </form>
</section>

<footer className="bg-slate-900 text-white py-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
    <p className="text-slate-400 text-lg mx-auto">© 2024 Gromyko Urgel. All rights reserved.</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a
        href="https://github.com/njaglobal"
        className="text-slate-400 hover:text-white"
        target="_blank"
      >
        <Github size={20} />
      </a>
      
      <a
        href="mailto:andrieurgel@gmail.com"
        className="text-slate-400 hover:text-white"
      >
        <Mail size={20} />
      </a>
    </div>
  </div>
</footer>

</div>
   );
 }

 export default Home;

