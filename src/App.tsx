// import {
//   Menu,
//   Github,
//   Linkedin,
//   Mail,
//   ChevronDown,
//   ExternalLink,
//   Code2,
// } from "lucide-react";
// import { useState } from "react";
// import { Typewriter } from 'react-simple-typewriter'

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const projects = [
//     {
//       title: "Regalatop.cl",
//       description:
//         "Custom gifting platform for the Chilean market. Fullstack React + Supabase. I built the system logic, backend flows, and CI/CD integration.",
//       image:
//         "/assets/RT_logo_new.svg",
//       live: "https://regalatop.cl",
      
//     },
//     {
//       title: "PinoyPrideWorldwide.com",
//       description:
//         "Multilingual cultural showcase website, integrated CMS and deployment pipeline. Built with Vite, Tailwind, and static JSON routing.",
//       image: "/assets/ppw_withbg.png",
//       live: "https://pinoyprideworldwide.com",
     
//     },
//     {
//       title: "Emergency Response System (In Progress)",
//       description:
//         "AI-powered reporting system. Built mobile + web stack, image classification model, Firestore + Supabase integration, and real-time responder tracking.",
//       image:
//         "/assets/Pinasafe_logo1.png",
//       live: "https://pinasafe.netlify.app/",
      
//     },
//   ];

//   const techStacks = {
//     Frontend: ["React", "Tailwind CSS", "Vite", "Shadcn UI"],
//     Backend: ["Node.js", "Supabase", "Firebase", "GitHub API", "Laravel"],
//     DevOps: ["GitHub Actions", "Render", "Netlify", "Docker"],
//     Database: ["PostgreSQL", "MySQL", "Firestore", "RLS Policies"],
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
//       {/* Navigation */}
//       <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <Code2 className="w-8 h-8 text-indigo-600 mr-2" />
//               <div className="flex flex-col leading-tight">
//                 <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
//                   Gromyko Andrevich A. Urgel Jr
//                 </span>
//                 <span className="text-sm sm:text-base md:text-lg text-slate-700 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text dark:text-slate-300">
//                   Fullstack Web Developer
//                 </span>
//               </div>

//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#home" className="text-slate-600 hover:text-indigo-600">
//                 Home
//               </a>
//               <a
//                 href="#projects"
//                 className="text-slate-600 hover:text-indigo-600"
//               >
//                 Projects
//               </a>
//               <a href="#about" className="text-slate-600 hover:text-indigo-600">
//                 About
//               </a>
//               <a
//                 href="#contact"
//                 className="text-slate-600 hover:text-indigo-600"
//               >
//                 Contact
//               </a>
//             </div>
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-slate-600 hover:text-indigo-600"
//               >
//                 <Menu size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-slate-200">
//             <div className="px-4 py-2 space-y-2">
//               <a href="#home" className="block text-slate-600">
//                 Home
//               </a>
//               <a href="#projects" className="block text-slate-600">
//                 Projects
//               </a>
//               <a href="#about" className="block text-slate-600">
//                 About
//               </a>
//               <a href="#contact" className="block text-slate-600">
//                 Contact
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero */}
//       <section
//         id="home"
//         className="pt-25 pb-10 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-400 to-purple-200 "
//       >
//         {/* Profile Image */}
//         <div className="w-40 h-40 sm:w-58 sm:h-58 mx-auto mb-6">
//           <img
//             src="/assets/profile_photo.png" // Replace with your actual image path or external URL
//             alt="Gromyko Urgel"
//             className="w-full h-full object-cover rounded-full border-2 border-indigo-600 shadow-lg"
//           />
//         </div>
//         <div className="flex flex-col leading-tight mb-5 mx-auto">
//                 <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
//                   Gromyko Andrevich A. Urgel Jr
//                 </span>
//                 <span className="text-sm sm:text-base md:text-lg text-slate-700 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text dark:text-slate-300">
//                 <span className="font-semibold text-indigo-600">
//                   <Typewriter
//                     words={['Full Stack Web Developer', 'Support Engineer', 'IT Manager']}
//                     loop={0}
//                     cursor
//                     cursorStyle="_"
//                     typeSpeed={90}
//                     deleteSpeed={60}
//                     delaySpeed={1200}
//                   />
//                 </span>
//                 </span>
//         </div>


//         <span className="inline-block px-4 py-1.5 rounded-full bg-green-500 text-white text-sm font-medium mb-8">
//           Available for hire
//         </span>

//         <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
//           Full-stack developer with experience in{' '}
//           <span className="font-semibold text-indigo-600">
//             <Typewriter
//               words={['React', 'Node.js', 'Laravel', 'Supabase', 'real-time systems', 'clean APIs']}
//               loop={0}
//               cursor
//               cursorStyle="_"
//               typeSpeed={60}
//               deleteSpeed={40}
//               delaySpeed={1200}
//             />
//           </span>
//         </p>

//         <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed mt-4 mb-12">
//           I build scalable, resilient software that delivers real-world impact across web and mobile.
//         </p>

//         <div className="flex justify-center space-x-6 mb-12">
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
//           >
//             <Github size={20} />
//             GitHub
//           </a>
//           <a
//             href="https://linkedin.com/in/yourusername"
//             target="_blank"
//             className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-lg hover:border-slate-300"
//           >
//             <Linkedin size={20} />
//             LinkedIn
//           </a>
//         </div>

//         <div className="animate-bounce">
//           <ChevronDown className="mx-auto text-slate-400" size={24} />
//         </div>
//       </section>


//       {/* Projects */}
//       <section
//         id="projects"
//         className="py-10 px-4 sm:px-6 lg:px-8 bg-white"
//       >
//         <div className="max-w-7xl mx-auto text-center mb-16">
//           <h2 className="text-3xl font-bold text-slate-900 mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Real apps built for real use. From production e-commerce to AI SaaS.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//             >
//               <div className="aspect-video bg-slate-100">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-fill w-full h-full  group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-slate-900">
//                   {project.title}
//                 </h3>
//                 <p className="text-slate-600 my-4">{project.description}</p>
//                 <div className="flex items-center gap-4 text-sm">
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800"
//                   >
//                     <ExternalLink size={16} /> View Site
//                   </a>
                  
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About Me */}
//       <section id="about" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center mb-16">
//           <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             I’m a results-driven fullstack web developer and IT professional with over 3 years of hands-on experience building scalable, production-ready systems and over 7 years in technical support roles across telecom, healthcare, and publishing industries.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           <div className="space-y-6">
//           <p className="text-slate-600 leading-relaxed">
//             I worked as a Fullstack Developer at <strong>Web Fuel Agency</strong>, where I delivered custom websites tailored to client specifications using modern frontend and backend technologies. Prior to that, I served as IT Manager at <strong>Pinoy Pride Worldwide</strong>, where I was responsible for managing internal systems, maintaining critical server infrastructure, and leading a cross-functional team of engineers to support company-wide digital operations.
//           </p>

//           <p className="text-slate-600 leading-relaxed">
//   I architect and build fullstack applications using modern tools like React, Node.js, Supabase, Firebase, and PostgreSQL. I’ve also integrated custom CI/CD pipelines using GitHub Actions, worked with Docker, and deployed applications to platforms like Netlify and Render.
// </p>

// <p className="text-slate-600 leading-relaxed">
//   Recent achievements include:
// </p>
// <ul className="list-disc pl-6 text-slate-600 space-y-2">
//   <li>✅ Successfully launched <strong>Regalatop.cl</strong>, a personalized gifting platform used daily across Chile</li>
//   <li>✅ Engineered a real-time <strong>Emergency Response System</strong> featuring AI image classification and responder tracking</li>
//   <li>✅ Built internal tools to automate server monitoring, backups, and log analysis for a regional business network</li>
//   <li>✅ Led development on multilingual, mobile-optimized websites with CMS integration and Git-based versioning</li>
//   <li>✅ Maintained 99.99% uptime across multiple client projects by combining smart alerting, performance audits, and refactoring</li>
// </ul>

// <p className="text-slate-600 leading-relaxed">
//   I’m passionate about building software that performs under real-world conditions that can handle high traffic, tight deadlines, and limited budgets without breaking. I believe in practical engineering, clean code, and shipping with purpose.
// </p>
//             <a
//               href="/assets/Urgel_Gromyko_Andrevich_CV.pdf"
//               download
//               className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 text-sm"
//             >
//               Download My Resume (PDF)
//             </a>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {Object.entries(techStacks).map(([category, techs]) => (
//               <div
//                 key={category}
//                 className="bg-white p-6 rounded-lg border border-slate-200"
//               >
//                 <h3 className="font-semibold text-slate-900 mb-3">
//                   {category}
//                 </h3>
//                 <ul className="space-y-2 text-sm text-slate-600">
//                   {techs.map((tech) => (
//                     <li key={tech}>{tech}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section
//         id="contact"
//         className="py-20 bg-white px-4 sm:px-6 lg:px-8"
//       >
//         <div className="max-w-7xl mx-auto text-center mb-16">
//           <h2 className="text-3xl font-bold text-slate-900 mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Interested in working together? Let's chat.
//           </p>
//         </div>
//         <div className="max-w-xl mx-auto">
//           <form className="space-y-6">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <textarea
//               placeholder="Message"
//               rows={4}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-white py-12">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
//           <p className="text-slate-400">© 2024 Gromyko Urgel. All rights reserved.</p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="https://github.com/yourusername" target="_blank" className="text-slate-400 hover:text-white">
//               <Github size={20} />
//             </a>
//             <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-slate-400 hover:text-white">
//               <Linkedin size={20} />
//             </a>
//             <a href="mailto:andrieurgel@gmail.com" className="text-slate-400 hover:text-white">
//               <Mail size={20} />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

import {
  Menu,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Code2,
} from "lucide-react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Regalatop.cl",
      description:
        "Custom gifting platform for the Chilean market. Fullstack React + Supabase. I built the system logic, backend flows, and CI/CD integration.",
      image: "/assets/RT_logo_new.svg",
      live: "https://regalatop.cl",
    },
    {
      title: "PinoyPrideWorldwide.com",
      description:
        "Multilingual cultural showcase website, integrated CMS and deployment pipeline. Built with Vite, Tailwind, and static JSON routing.",
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
    Frontend: ["React", "Tailwind CSS", "Vite", "Shadcn UI"],
    Backend: ["Node.js", "Supabase", "Firebase", "GitHub API", "Laravel"],
    DevOps: ["GitHub Actions", "Render", "Netlify", "Docker"],
    Database: ["PostgreSQL", "MySQL", "Firestore", "RLS Policies"],
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
              {["home", "projects", "about", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-slate-600 hover:text-indigo-600 transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
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
              {["home", "projects", "about", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="block text-slate-600"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-100 to-purple-100"
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
<section id="projects" className="py-10 bg-white px-4 sm:px-6 lg:px-8">
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

<section id="about" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
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


<section id="contact" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
      Have a project in mind or just want to connect? Let’s make it happen.
    </p>
  </div>

    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      netlify-honeypot="bot-field"
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
        className="w-full px-4 py-3 border border-slate-300 rounded-lg"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg"
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={4}
        required
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
    <p className="text-slate-400 text-sm">© 2024 Gromyko Urgel. All rights reserved.</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a
        href="https://github.com/yourusername"
        className="text-slate-400 hover:text-white"
        target="_blank"
      >
        <Github size={20} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        className="text-slate-400 hover:text-white"
        target="_blank"
      >
        <Linkedin size={20} />
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

 export default App;

