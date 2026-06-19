import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Moon, Sun, Mail, Phone, MapPin, ExternalLink, Code2, Server, Layout, Database, Cpu, Layers } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-[#0f172a] text-slate-300' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Background Particles Simulation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-[#0b1121]' : 'bg-slate-50'}`}></div>
        {/* We would typically use react-tsparticles here, but we'll use a CSS gradient overlay for the starry effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 ${isDarkMode ? 'bg-[#0b1121]/90 backdrop-blur-md border-b border-white/5' : 'bg-white/90 backdrop-blur-md border-b border-slate-200'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`font-bold text-2xl tracking-widest ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            SHOUVIK
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'About', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`transition-colors hover:text-cyan-400 ${activeSection === item.toLowerCase() ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : ''}`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/iamshouvik" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.4-3.6 5.3 5.3 0 0 0-.1-3.5s-1.1-.35-3.5 1.3a11.5 11.5 0 0 0-6 0C8.1 3.65 7 4 7 4a5.3 5.3 0 0 0-.1 3.5 5.2 5.2 0 0 0-1.4 3.6c0 5.76 3.35 6.78 6.5 7.16a4.8 4.8 0 0 0-1 3.04V22"></path><path d="M9 19c-4.3 1.4-5.3-2-8-3"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/shouvik-sarkar-838129129/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-slate-200 hover:bg-slate-300'}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl flex-1"
            >
            <motion.div variants={fadeIn} className="text-cyan-400 font-semibold tracking-widest text-sm mb-6 uppercase">
              Welcome
            </motion.div>
            
            <motion.h1 variants={fadeIn} className={`text-5xl md:text-7xl font-bold tracking-tight mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              SHOUVIK<br/>SARKAR
            </motion.h1>
            
            <motion.div variants={fadeIn} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 rounded-full"></motion.div>
            
            <motion.div variants={fadeIn} className="text-xl md:text-2xl mb-6">
              I'm a <span className="text-cyan-400 font-semibold">Senior Technical SME & Senior Product Specialist</span>
            </motion.div>
            
            <motion.p variants={fadeIn} className="text-lg opacity-80 leading-relaxed mb-10 max-w-2xl">
              Senior Technical SME and Senior Product Specialist with 7.5+ years of backend development experience (Java/Spring Boot) and deep domain expertise in Retirement Income Solutions (RIS). Certified in Insurance and Annuities with a proven track record of architecting solutions for MetLife's RIS ecosystem.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/Shouvik_Sarkar_CV_Updated.pdf" 
                download
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-3 rounded text-sm font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
              >
                DOWNLOAD RESUME <Download size={18} />
              </a>
            </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <img src="/profile.jpeg" alt="Shouvik Sarkar" className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 scale-[1.05]"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold tracking-widest uppercase mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>About</h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className={`rounded-xl overflow-hidden border ${isDarkMode ? 'border-white/10' : 'border-slate-200'} aspect-square bg-slate-800 relative`}>
                {/* Placeholder for Profile Image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  <img src="/profile.jpeg" alt="Shouvik Sarkar" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Shouvik Sarkar</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8 text-sm">
                <div className="flex items-center gap-2"><span className="text-cyan-400">›</span> <strong>Location:</strong> Kolkata, West Bengal, India</div>
                <div className="flex items-center gap-2"><span className="text-cyan-400">›</span> <strong>Degree:</strong> B.Tech</div>
                <div className="flex items-center gap-2"><span className="text-cyan-400">›</span> <strong>Phone:</strong> +91 9748955535, 7980071184</div>
                <div className="flex items-center gap-2"><span className="text-cyan-400">›</span> <strong>Experience:</strong> 7.5+ Years</div>
                <div className="flex items-center gap-2"><span className="text-cyan-400">›</span> <strong>Email:</strong> iamshouviksarkar@gmail.com</div>
              </div>
              
              <div className="space-y-4 opacity-80 mb-8">
                <p>
                  Senior Product Specialist and Java Full Stack Engineer with 7.5+ years of experience, specializing in the Java ecosystem — Spring Boot, Microservices — with a deep domain focus on Retirement Income Solutions (RIS) for MetLife.
                </p>
                <p>
                  My work includes engineering complex PL/SQL bulk processing routines that achieved a 98% efficiency gain for critical enterprise payment systems, managing over $53.5 Billion in lifetime payments across 1.37M annuitants.
                </p>
              </div>

              <a 
                href="/Shouvik_Sarkar_CV.pdf" 
                download
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2 transition-all w-max shadow-lg shadow-cyan-500/20"
              >
                RESUME <Download size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold tracking-widest uppercase mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Technical Skills</h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="opacity-80 max-w-2xl mx-auto">
              Comprehensive expertise in modern software development technologies, frameworks, and tools that enable me to build robust, scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200 shadow-sm'} relative overflow-hidden`}>
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-blue-500 rounded-t"></div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-slate-100'}`}>
                <Code2 className="text-blue-400" />
              </div>
              <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java 8', 'JavaScript', 'SQL', 'PL/SQL'].map(skill => (
                  <span key={skill} className={`px-3 py-1.5 rounded text-xs font-medium border ${isDarkMode ? 'bg-[#0f172a] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200 shadow-sm'} relative overflow-hidden`}>
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-green-500 rounded-t"></div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-slate-100'}`}>
                <Server className="text-green-400" />
              </div>
              <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Spring', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'JUnit', 'RESTful APIs'].map(skill => (
                  <span key={skill} className={`px-3 py-1.5 rounded text-xs font-medium border ${isDarkMode ? 'bg-[#0f172a] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200 shadow-sm'} relative overflow-hidden`}>
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-yellow-400 rounded-t"></div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-slate-100'}`}>
                <Layout className="text-yellow-400" />
              </div>
              <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Frontend & UI</h3>
              <div className="flex flex-wrap gap-2">
                {['ReactJS', 'HTML', 'CSS', 'Tailwind CSS', 'Angular', 'JavaScript'].map(skill => (
                  <span key={skill} className={`px-3 py-1.5 rounded text-xs font-medium border ${isDarkMode ? 'bg-[#0f172a] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200 shadow-sm'} relative overflow-hidden`}>
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-emerald-500 rounded-t"></div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-slate-100'}`}>
                <Database className="text-emerald-400" />
              </div>
              <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['Oracle SQL', 'MS SQL Server', 'MongoDB'].map(skill => (
                  <span key={skill} className={`px-3 py-1.5 rounded text-xs font-medium border ${isDarkMode ? 'bg-[#0f172a] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200 shadow-sm'} relative overflow-hidden`}>
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-purple-500 rounded-t"></div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-slate-100'}`}>
                <Cpu className="text-purple-400" />
              </div>
              <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Domain Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {['LOMA 281', 'LOMA 291', 'LOMA 302', 'SRI 111'].map(skill => (
                  <span key={skill} className={`px-3 py-1.5 rounded text-xs font-medium border ${isDarkMode ? 'bg-[#0f172a] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200 shadow-sm'} relative overflow-hidden`}>
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-cyan-400 rounded-t"></div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-slate-100'}`}>
                <Layers className="text-cyan-400" />
              </div>
              <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Technologies/Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['Microservices', 'OOPs Concept', 'Agile SAFe', 'Liquibase'].map(skill => (
                  <span key={skill} className={`px-3 py-1.5 rounded text-xs font-medium border ${isDarkMode ? 'bg-[#0f172a] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold tracking-widest uppercase mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Contact</h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="opacity-80 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, discussions and many more. I'm always interested in connecting with fellow developers and exploring new projects.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-4">
              <div className={`p-6 rounded-xl flex items-center gap-4 ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200 shadow-sm'}`}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0f172a] text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Location</h4>
                  <p className="text-sm opacity-80">Kolkata, West Bengal, India</p>
                </div>
              </div>
              
              <div className={`p-6 rounded-xl flex items-center gap-4 ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200 shadow-sm'}`}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0f172a] text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Email</h4>
                  <p className="text-sm opacity-80">iamshouviksarkar@gmail.com</p>
                </div>
              </div>
              
              <div className={`p-6 rounded-xl flex items-center gap-4 ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200 shadow-sm'}`}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0f172a] text-cyan-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Call</h4>
                  <p className="text-sm opacity-80">+91 9748955535, 7980071184</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200'}`}>
                    <input type="text" placeholder="Your Name" className={`w-full bg-transparent outline-none ${isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900'}`} />
                  </div>
                  <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200'}`}>
                    <input type="email" placeholder="Your Email" className={`w-full bg-transparent outline-none ${isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900'}`} />
                  </div>
                </div>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200'}`}>
                  <input type="text" placeholder="Subject" className={`w-full bg-transparent outline-none ${isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900'}`} />
                </div>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#151f32] border border-white/5' : 'bg-white border border-slate-200'}`}>
                  <textarea placeholder="Message" rows="6" className={`w-full bg-transparent outline-none resize-none ${isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900'}`}></textarea>
                </div>
                <div className="text-right mt-6">
                  <button type="button" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-3 rounded text-sm font-bold tracking-wider transition-all shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2">
                    SEND MESSAGE <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
