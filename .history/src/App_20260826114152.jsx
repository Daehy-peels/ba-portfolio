import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, ArrowRight, Download, 
  BarChart3, Workflow, Users, ExternalLink, Mail, Sparkles 
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Initialize AOS scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Toggle dark class on root html/body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Supply Chain & Inventory Optimization",
      category: "Data Analysis",
      impact: "Reduced excess stock by 18% and cut fulfillment delays by 3 days.",
      tools: ["SQL", "Tableau", "Excel"],
      description: "Analyzed 2+ years of warehouse logistics data to identify bottlenecks, redesign safety stock thresholds, and build an executive-facing dashboard for real-time tracking."
    },
    {
      title: "CRM Requirements & Workflow Migration",
      category: "Process Engineering",
      impact: "Streamlined sales pipeline, saving the team 5 hours per week.",
      tools: ["Jira", "Confluence", "Lucidchart", "Agile"],
      description: "Gathered cross-functional business requirements, mapped out current-state vs. future-state BPMN workflows, and managed user acceptance testing (UAT) for a major CRM rollout."
    },
    {
      title: "FinTech Transaction Fraud Detection Model",
      category: "Data Analysis",
      impact: "Improved anomaly detection accuracy by 22% prior to deployment.",
      tools: ["Python", "Pandas", "Power BI"],
      description: "Performed exploratory data analysis on transaction logs, cleaned data pipelines, and translated statistical findings into actionable risk-mitigation strategies for stakeholders."
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeTab));

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 text-slate-800'} font-sans selection:bg-emerald-500 selection:text-white`}>
      
      {/* Navigation Bar with Glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${darkMode ? 'bg-slate-900/70 border-slate-800/80' : 'bg-white/70 border-emerald-100/60'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#about" className="font-extrabold text-xl tracking-tight flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <Sparkles size={18} />
            </div>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              BA.Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {['About', 'Expertise', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase() === 'projects' ? 'projects' : item.toLowerCase()}`}
                className="relative py-1 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Action Elements */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-2xl border transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-yellow-400 hover:bg-slate-700' : 'bg-emerald-50/80 border-emerald-200 text-emerald-700 hover:bg-emerald-100'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a 
              href="#contact" 
              className="hidden sm:inline-flex bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2.5 rounded-2xl text-sm font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
            >
              Let's Connect
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-6 py-6 flex flex-col space-y-4 backdrop-blur-2xl transition-all ${darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-500 font-medium">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-500 font-medium">Expertise</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-500 font-medium">Case Studies</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-500 font-medium">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-48 md:pb-32 flex flex-col items-start relative">
        {/* Subtle glowing ambient backdrop orb */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-6 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          Business Analyst & Data Strategist
        </div>
        
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-[1.1]">
          Bridging the gap between <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">complex data</span> and strategic impact.
        </h1>
        
        <p data-aos="fade-up" data-aos-delay="200" className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          I transform operational roadblocks into streamlined workflows, crystal-clear insights, and measurable ROI through rigorous requirements engineering and predictive analysis.
        </p>

        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#projects" 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium px-8 py-4 rounded-2xl text-center hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 flex items-center justify-center gap-3 group hover:-translate-y-1"
          >
            Explore Case Studies <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className={`border font-medium px-8 py-4 rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md hover:-translate-y-1 ${darkMode ? 'border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800' : 'border-slate-300/80 bg-white/50 text-slate-700 hover:bg-white shadow-sm'}`}
          >
            <Download size={18} /> Download CV
          </a>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section id="skills" className={`py-28 border-y transition-colors duration-500 relative ${darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white/60 border-emerald-100/60 backdrop-blur-md'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Core Competencies & Toolkit</h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>The professional frameworks and modern technologies I use to architect solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <BarChart3 size={24} />, title: "Data & Analytics", desc: "Advanced SQL querying, data cleaning, time-series forecasting, and building high-impact executive dashboards in Tableau & Power BI." },
              { icon: <Workflow size={24} />, title: "Process Engineering", desc: "BPMN process mapping, gap analysis, requirements elicitation, user stories definition, and clear acceptance criteria structures." },
              { icon: <Users size={24} />, title: "Project Management", desc: "Agile & Scrum methodologies, cross-functional stakeholder facilitation, risk mitigation, and UAT coordination using Jira & Confluence." }
            ].map((skill, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className={`group p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden ${darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/50 shadow-xl' : 'bg-white border-emerald-100 hover:border-emerald-300 shadow-sm'}`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-14 h-14 bg-gradient-to-tr from-emerald-100 to-teal-50 dark:from-emerald-950 dark:to-teal-900/40 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{skill.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Featured Case Studies</h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Real-world business transformation challenges solved through data.</p>
          </div>
          
          {/* Filters */}
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2">
            {['All', 'Data Analysis', 'Process Engineering'].map((tab) => {
              const val = tab.toLowerCase().includes('all') ? 'all' : tab.toLowerCase();
              const isActive = activeTab === val;
              return (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(val)} 
                  className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25 scale-105' : darkMode ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800' : 'bg-white border border-emerald-100 text-slate-600 hover:bg-emerald-50'}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              className={`group rounded-3xl border p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden ${darkMode ? 'bg-slate-900/90 border-slate-800 hover:border-emerald-500/50 shadow-lg' : 'bg-white border-emerald-100/80 hover:border-emerald-300 shadow-sm'}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 px-3.5 py-1.5 rounded-xl inline-block mb-4 shadow-sm">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                
                <div className={`border rounded-2xl p-4 mb-6 text-xs font-medium transition-colors ${darkMode ? 'bg-emerald-950/30 border-emerald-900/50 text-emerald-300' : 'bg-emerald-50/60 border-emerald-100 text-emerald-900'}`}>
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((tool, tIdx) => (
                    <span key={tIdx} className={`text-xs px-3 py-1 rounded-xl font-medium ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                      {tool}
                    </span>
                  ))}
                </div>
                
                <button className={`w-full py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg ${darkMode ? 'bg-slate-800 text-white hover:bg-emerald-600' : 'bg-slate-900 text-white hover:bg-emerald-700'}`}>
                  View Full Report <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-28 transition-colors duration-500 relative overflow-hidden ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-gradient-to-br from-emerald-900 via-emerald-950 to-teal-950 text-white'}`}>
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>

        <div data-aos="fade-up" className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Let's Discuss Opportunities</h2>
          <p className={`max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-emerald-100/90'}`}>
            Whether you're looking for an analyst to streamline complex workflows, optimize data pipelines, or drive strategic product rollouts, let's connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:her.email@example.com" 
              className={`font-medium px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 ${darkMode ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/30' : 'bg-white text-emerald-950 hover:bg-emerald-50 shadow-black/10'}`}
            >
              <Mail size={18} /> Get in Touch via Email
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`font-medium px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md hover:-translate-y-1 ${darkMode ? 'bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700' : 'bg-emerald-800/40 border border-emerald-600/50 text-white hover:bg-emerald-800/60'}`}
            >
              {/* LinkedIn SVG Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center text-xs transition-colors border-t ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-slate-950 border-slate-900 text-emerald-400/60'}`}>
        <p>© {new Date().getFullYear()} • Built with React, Tailwind CSS, AOS & Smooth Animations.</p>
      </footer>
    </div>
  );
}