import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Download,
  BarChart3,
  Workflow,
  Users,
  ExternalLink,
  Mail,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // Initialize AOS scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Toggle dark class on root html/body
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
    },
    {
      title: "CRM Requirements & Workflow Migration",
      category: "Process Engineering",
      impact: "Streamlined sales pipeline, saving the team 5 hours per week.",
      tools: ["Jira", "Confluence", "Lucidchart", "Agile"],
      description:
        "Gathered cross-functional business requirements, mapped out current-state vs. future-state BPMN workflows, and managed user acceptance testing (UAT) for a major CRM rollout.",
    },
    {
      title: "FinTech Transaction Fraud Detection Model",
      category: "Data Analysis",
      impact: "Improved anomaly detection accuracy by 22% prior to deployment.",
      tools: ["Python", "Pandas", "Power BI"],
      description:
        "Performed exploratory data analysis on transaction logs, cleaned data pipelines, and translated statistical findings into actionable risk-mitigation strategies for stakeholders.",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeTab));

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-emerald-50/30 text-slate-800"} font-sans selection:bg-emerald-500 selection:text-white`}
    >
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-emerald-100"}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl text-emerald-600 dark:text-emerald-400 tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            BA.Portfolio
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#about"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Expertise
            </a>
            <a
              href="#projects"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Contact
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition ${darkMode ? "bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700" : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-emerald-700 transition shadow-sm shadow-emerald-600/20"
            >
              Let's Connect
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden border-b px-6 py-4 flex flex-col space-y-3 transition-colors ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
          >
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-emerald-500 font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-emerald-500 font-medium"
            >
              Expertise
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-emerald-500 font-medium"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-emerald-500 font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col items-start"
      >
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-emerald-200 dark:border-emerald-800/50"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Business Analyst & Data Strategist
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight"
        >
          Bridging the gap between{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            complex data
          </span>{" "}
          and actionable business growth.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
        >
          I transform operational bottlenecks into streamlined workflows, clear
          insights, and measurable ROI through rigorous data analysis, process
          mapping, and stakeholder collaboration.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="bg-emerald-600 text-white font-medium px-6 py-3.5 rounded-2xl text-center hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 group"
          >
            Explore Case Studies{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className={`border font-medium px-6 py-3.5 rounded-2xl text-center transition flex items-center justify-center gap-2 ${darkMode ? "border-slate-700 text-slate-200 hover:bg-slate-900" : "border-slate-300 text-slate-700 hover:bg-white"}`}
          >
            <Download size={18} /> Download CV
          </a>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section
        id="skills"
        className={`py-24 border-y transition-colors duration-300 ${darkMode ? "bg-slate-900/50 border-slate-800" : "bg-white border-emerald-100"}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            data-aos="fade-up"
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Core Competencies & Toolkit
            </h2>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              The methodologies and technologies I use to drive structural
              business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? "bg-slate-900 border-slate-800 shadow-xl" : "bg-emerald-50/20 border-emerald-100 shadow-sm"}`}
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 font-bold">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Data & Analytics</h3>
              <p
                className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Advanced SQL querying, data cleaning, time-series forecasting,
                and building high-impact executive dashboards in Tableau & Power
                BI.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? "bg-slate-900 border-slate-800 shadow-xl" : "bg-emerald-50/20 border-emerald-100 shadow-sm"}`}
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 font-bold">
                <Workflow size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Process Engineering</h3>
              <p
                className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                BPMN process mapping, gap analysis, requirements elicitation,
                user stories definition, and clear acceptance criteria layouts.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? "bg-slate-900 border-slate-800 shadow-xl" : "bg-emerald-50/20 border-emerald-100 shadow-sm"}`}
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 font-bold">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p
                className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Agile & Scrum frameworks, cross-functional stakeholder
                facilitation, risk mitigation, and UAT coordination using Jira &
                Confluence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Case Studies</h2>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Real business challenges solved through structured analysis.
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "all" ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : darkMode ? "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800" : "bg-white border border-emerald-100 text-slate-600 hover:bg-emerald-50"}`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("data analysis")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "data analysis" ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : darkMode ? "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800" : "bg-white border border-emerald-100 text-slate-600 hover:bg-emerald-50"}`}
            >
              Data Analysis
            </button>
            <button
              onClick={() => setActiveTab("process engineering")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "process engineering" ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : darkMode ? "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800" : "bg-white border border-emerald-100 text-slate-600 hover:bg-emerald-50"}`}
            >
              Process & Workflow
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`rounded-3xl border p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${darkMode ? "bg-slate-900 border-slate-800 shadow-lg" : "bg-white border-emerald-100/80 shadow-sm"}`}
            >
              <div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 px-3 py-1 rounded-lg inline-block mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p
                  className={`text-sm mb-6 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  {project.description}
                </p>

                <div
                  className={`border rounded-2xl p-3.5 mb-6 text-xs font-medium ${darkMode ? "bg-emerald-950/30 border-emerald-900/50 text-emerald-300" : "bg-emerald-50/60 border-emerald-100 text-emerald-900"}`}
                >
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium ${darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-2xl text-sm font-medium transition flex items-center justify-center gap-2 ${darkMode ? "bg-slate-800 text-white hover:bg-emerald-600" : "bg-slate-900 text-white hover:bg-emerald-700"}`}
                >
                  View Full Report <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-24 transition-colors duration-300 ${darkMode ? "bg-slate-900 border-t border-slate-800" : "bg-emerald-900 text-white"}`}
      >
        <div data-aos="fade-up" className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Discuss Opportunities
          </h2>
          <p
            className={`max-w-xl mx-auto mb-8 text-sm md:text-base ${darkMode ? "text-slate-400" : "text-emerald-100"}`}
          >
            Whether you're looking for an analyst to streamline complex
            workflows, optimize data pipelines, or drive strategic projects,
            let's connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:her.email@example.com"
              className={`font-medium px-6 py-3.5 rounded-2xl transition flex items-center justify-center gap-2 ${darkMode ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-white text-emerald-900 hover:bg-emerald-50"}`}
            >
              <Mail size={18} /> Get in Touch via Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium px-6 py-3.5 rounded-2xl transition flex items-center justify-center gap-2 ${darkMode ? "bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-emerald-800/80 border border-emerald-700 text-white hover:bg-emerald-800"}`}
            >
              {/* Built-in LinkedIn SVG Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 text-center text-xs transition-colors border-t ${darkMode ? "bg-slate-950 border-slate-900 text-slate-500" : "bg-emerald-950 border-emerald-900 text-emerald-400/60"}`}
      >
        <p>
          © {new Date().getFullYear()} • Built with React, Tailwind CSS & Smooth
          Animations.
        </p>
      </footer>
    </div>
  );
}
