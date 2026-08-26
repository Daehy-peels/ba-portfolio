import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  Download,
  BarChart3,
  Workflow,
  Users,
  Mail,
  Sparkles,
  Code2,
  Layers,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Supply Chain & Inventory Optimization",
      category: "Data Analysis",
      impact:
        "Reduced excess stock by 18% and cut fulfillment delays by 3 days.",
      tools: ["SQL", "Tableau", "Excel"],
      description:
        "Analyzed 2+ years of warehouse logistics data to identify bottlenecks, redesign safety stock thresholds, and build an executive-facing dashboard for real-time tracking.",
      featured: true,
    },
    {
      title: "CRM Requirements & Workflow Migration",
      category: "Process Engineering",
      impact: "Streamlined sales pipeline, saving the team 5 hours per week.",
      tools: ["Jira", "Confluence", "Lucidchart", "Agile"],
      description:
        "Gathered cross-functional business requirements, mapped out current-state vs. future-state BPMN workflows, and managed user acceptance testing (UAT) for a major CRM rollout.",
      featured: false,
    },
    {
      title: "FinTech Transaction Fraud Detection Model",
      category: "Data Analysis",
      impact: "Improved anomaly detection accuracy by 22% prior to deployment.",
      tools: ["Python", "Pandas", "Power BI"],
      description:
        "Performed exploratory data analysis on transaction logs, cleaned data pipelines, and translated statistical findings into actionable risk-mitigation strategies for stakeholders.",
      featured: false,
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeTab));

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${darkMode ? "bg-[#070b14] text-slate-100" : "bg-[#f8fafc] text-slate-900"} font-['Plus_Jakarta_Sans',sans-serif] selection:bg-emerald-500 selection:text-white`}
    >
      {/* Floating Dynamic Island Navbar */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`w-full max-w-4xl rounded-full border px-6 py-3 flex items-center justify-between backdrop-blur-2xl transition-all duration-500 shadow-2xl ${darkMode ? "bg-slate-900/80 border-slate-800/80 shadow-black/40" : "bg-white/80 border-slate-200/80 shadow-emerald-950/5"}`}
        >
          <a
            href="#about"
            className="font-['Outfit'] font-bold text-lg tracking-tight flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-600/30 group-hover:rotate-12 transition-transform duration-300">
              <Sparkles size={14} />
            </div>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Portfolio.
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 text-sm font-medium">
            {["About", "Expertise", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === "projects" ? "projects" : item.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${darkMode ? "text-slate-300 hover:text-white hover:bg-slate-800/60" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 hover:scale-105 ${darkMode ? "bg-slate-800 border-slate-700 text-amber-400" : "bg-slate-100 border-slate-200 text-slate-700"}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-md shadow-emerald-600/20 hover:scale-105"
            >
              Let's Talk
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-x-4 top-24 z-40 rounded-3xl border p-6 flex flex-col space-y-3 backdrop-blur-3xl shadow-2xl md:hidden transition-all ${darkMode ? "bg-slate-900/95 border-slate-800 text-white" : "bg-white/95 border-slate-200 text-slate-900"}`}
        >
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 px-4 rounded-xl hover:bg-emerald-500/10 font-medium"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 px-4 rounded-xl hover:bg-emerald-500/10 font-medium"
          >
            Expertise
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 px-4 rounded-xl hover:bg-emerald-500/10 font-medium"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-medium text-center"
          >
            Let's Talk
          </a>
        </div>
      )}

      {/* Hero Section - Bento-Inspired Aesthetic Layout */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Large Bento Box */}
          <div
            data-aos="fade-up"
            className={`lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] border relative overflow-hidden transition-all duration-500 ${darkMode ? "bg-gradient-to-br from-slate-900/90 via-slate-900/40 to-emerald-950/20 border-slate-800/80" : "bg-gradient-to-br from-white via-white to-emerald-50/40 border-slate-200/80 shadow-xl shadow-slate-200/50"}`}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Business Analyst & Data Strategist
            </div>

            <h1 className="font-['Outfit'] text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.08]">
              Turning{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
                complex data
              </span>{" "}
              into clear business velocity.
            </h1>

            <p
              className={`text-base md:text-lg mb-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              I architect seamless workflows, bridge technical requirements with
              stakeholders, and extract high-impact insights that accelerate
              enterprise growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/30 flex items-center gap-2 group hover:-translate-y-0.5 text-sm"
              >
                Explore Works{" "}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className={`border font-semibold px-7 py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 text-sm ${darkMode ? "border-slate-700 bg-slate-800/50 text-slate-200 hover:bg-slate-800" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </div>

          {/* Right Side Stats/Highlights Bento Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div
              className={`p-7 rounded-[2rem] border transition-all duration-300 hover:scale-[1.02] ${darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200/80 shadow-lg shadow-slate-200/40"}`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">
                  <BarChart3 size={22} />
                </div>
                <div>
                  <h3 className="font-['Outfit'] font-bold text-lg">
                    Data-Driven Impact
                  </h3>
                  <p
                    className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Analytics & Modeling
                  </p>
                </div>
              </div>
              <p
                className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                Specializing in forecasting, operational dashboards, and
                database metrics optimization.
              </p>
            </div>

            <div
              className={`p-7 rounded-[2rem] border transition-all duration-300 hover:scale-[1.02] ${darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200/80 shadow-lg shadow-slate-200/40"}`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 font-bold">
                  <Workflow size={22} />
                </div>
                <div>
                  <h3 className="font-['Outfit'] font-bold text-lg">
                    Process Excellence
                  </h3>
                  <p
                    className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                  >
                    BPMN & Agile Workflows
                  </p>
                </div>
              </div>
              <p
                className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                Bridging engineering teams and business stakeholders through
                meticulous requirement gathering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise / Core Skills Section */}
      <section
        id="skills"
        className={`py-24 border-y transition-colors duration-500 ${darkMode ? "bg-slate-900/30 border-slate-800/60" : "bg-slate-100/50 border-slate-200/60"}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            data-aos="fade-up"
            className="text-center max-w-xl mx-auto mb-16"
          >
            <h2 className="font-['Outfit'] text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
              Core Competencies
            </h2>
            <p
              className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              The methods and toolkits utilized to deliver scalable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <BarChart3 size={20} />,
                title: "Data & Analytics",
                desc: "Advanced SQL querying, data cleaning, time-series forecasting, and building high-impact executive dashboards in Tableau & Power BI.",
              },
              {
                icon: <Workflow size={20} />,
                title: "Process Engineering",
                desc: "BPMN process mapping, gap analysis, requirements elicitation, user stories definition, and clear acceptance criteria structures.",
              },
              {
                icon: <Users size={20} />,
                title: "Project Management",
                desc: "Agile & Scrum methodologies, cross-functional stakeholder facilitation, risk mitigation, and UAT coordination using Jira & Confluence.",
              },
            ].map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden ${darkMode ? "bg-slate-900/80 border-slate-800 hover:border-emerald-500/40" : "bg-white border-slate-200/80 hover:border-emerald-400/50 shadow-sm"}`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-['Outfit'] font-bold text-xl mb-3">
                  {skill.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects / Case Studies */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
              Featured Case Studies
            </h2>
            <p
              className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Real-world projects solved through structured engineering and
              data.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2">
            {["All", "Data Analysis", "Process Engineering"].map((tab) => {
              const val = tab.toLowerCase().includes("all")
                ? "all"
                : tab.toLowerCase();
              const isActive = activeTab === val;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(val)}
                  className={`px-4.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${isActive ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30" : darkMode ? "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className={`group rounded-[2.2rem] border p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden ${darkMode ? "bg-slate-900/90 border-slate-800 hover:border-emerald-500/40" : "bg-white border-slate-200/80 hover:border-emerald-400/50 shadow-sm"}`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <h3 className="font-['Outfit'] font-bold text-xl mb-3 group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-6 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  {project.description}
                </p>

                <div
                  className={`border rounded-2xl p-3.5 mb-6 text-xs font-medium ${darkMode ? "bg-emerald-950/20 border-emerald-900/40 text-emerald-300" : "bg-emerald-50/60 border-emerald-100 text-emerald-900"}`}
                >
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[11px] px-2.5 py-1 rounded-lg font-medium ${darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${darkMode ? "bg-slate-800 text-white hover:bg-emerald-600" : "bg-slate-900 text-white hover:bg-emerald-700"}`}
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Contact Section */}
      <section
        id="contact"
        className={`py-24 transition-colors duration-500 relative overflow-hidden ${darkMode ? "bg-[#04070e] border-t border-slate-800/80" : "bg-slate-900 text-white"}`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Let's Build Something Impactful
          </h2>
          <p
            className={`text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-300"}`}
          >
            Looking for a strategist to streamline your processes, analyze
            critical data pipelines, or drive successful project rollouts? Let's
            talk.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:her.email@example.com"
              className="bg-emerald-600 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2.5 hover:-translate-y-0.5 text-sm"
            >
              <Mail size={16} /> Send an Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-2xl hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-0.5 text-sm backdrop-blur-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs border-t border-slate-800/60 bg-[#04070e] text-slate-500">
        <p>
          © {new Date().getFullYear()} • Engineered for performance & modern
          aesthetics.
        </p>
      </footer>
    </div>
  );
}
