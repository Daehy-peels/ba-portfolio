import React, { useEffect, useState } from "react";
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
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  BriefcaseBusiness,
  Heart,
  MapPin,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setMobileMenuOpen(false);
      }
    };

    const handleBodyOverflow = () => {
      document.body.style.overflow = selectedProject ? "hidden" : "";
    };

    window.addEventListener("keydown", handleEscape);
    handleBodyOverflow();

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      id: 1,
      title: "Supply Chain & Inventory Optimization",
      category: "Data Analysis",
      type: "Independent Case Study",
      impact:
        "Reduced excess stock by 18% and cut fulfillment delays by 3 days.",
      tools: ["SQL", "Tableau", "Excel"],
      description:
        "Analyzed 2+ years of warehouse logistics data to identify bottlenecks, redesign safety stock thresholds, and build an executive-facing dashboard for real-time tracking.",
      featured: true,
      outcomes: [
        "Identified inventory bottlenecks",
        "Redesigned safety stock thresholds",
        "Created an executive dashboard",
        "Improved visibility into warehouse performance",
      ],
    },
    {
      id: 2,
      title: "CRM Requirements & Workflow Migration",
      category: "Process Engineering",
      type: "Business Process Case Study",
      impact:
        "Streamlined the sales pipeline, saving the team approximately 5 hours per week.",
      tools: ["Jira", "Confluence", "Lucidchart", "Agile"],
      description:
        "Gathered cross-functional business requirements, mapped current-state and future-state BPMN workflows, and coordinated user acceptance testing for a CRM rollout.",
      featured: false,
      outcomes: [
        "Gathered stakeholder requirements",
        "Mapped current-state workflows",
        "Designed future-state processes",
        "Supported UAT coordination",
      ],
    },
    {
      id: 3,
      title: "FinTech Transaction Fraud Detection Model",
      category: "Data Analysis",
      type: "Data Analytics Case Study",
      impact:
        "Improved anomaly detection accuracy by 22% during the analysis phase.",
      tools: ["Python", "Pandas", "Power BI"],
      description:
        "Performed exploratory data analysis on transaction logs, cleaned data pipelines, and translated statistical findings into actionable risk-mitigation recommendations.",
      featured: false,
      outcomes: [
        "Performed exploratory data analysis",
        "Cleaned transaction datasets",
        "Identified suspicious patterns",
        "Translated findings into business recommendations",
      ],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <>
      <style>{`
        @keyframes floatSoft {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -12px, 0);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(8px, 10px, 0) rotate(6deg);
          }
        }

        @keyframes softPulse {
          0%, 100% {
            opacity: 0.45;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.08);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-140%);
          }
          100% {
            transform: translateX(140%);
          }
        }

        @keyframes blobMove {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(18px, -14px) scale(1.05);
          }
        }

        .float-soft {
          animation: floatSoft 6s ease-in-out infinite;
        }

        .float-reverse {
          animation: floatReverse 7s ease-in-out infinite;
        }

        .soft-pulse {
          animation: softPulse 4s ease-in-out infinite;
        }

        .blob-move {
          animation: blobMove 8s ease-in-out infinite;
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 42%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: translateX(-140%);
          pointer-events: none;
        }

        .shine-effect:hover::after {
          animation: shimmer 1s ease;
        }

        .pretty-shadow {
          box-shadow:
            0 24px 70px rgba(34, 197, 94, 0.07),
            0 10px 28px rgba(15, 23, 42, 0.05);
        }

        .dark .pretty-shadow {
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.25),
            0 10px 35px rgba(16, 185, 129, 0.04);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

        ::selection {
          background: #86efac;
          color: #14532d;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div
        className={`min-h-screen overflow-x-hidden font-['DM_Sans',sans-serif] transition-colors duration-700 ${
          darkMode
            ? "bg-[#06100a] text-slate-100"
            : "bg-[#fbfdf9] text-slate-900"
        }`}
      >
        {/* Decorative background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div
            className={`soft-pulse absolute -left-40 top-20 h-80 w-80 rounded-full blur-3xl ${
              darkMode ? "bg-emerald-900/25" : "bg-emerald-200/40"
            }`}
          />

          <div
            className={`blob-move absolute -right-32 top-[32%] h-96 w-96 rounded-full blur-3xl ${
              darkMode ? "bg-teal-900/20" : "bg-teal-100/55"
            }`}
          />

          <div
            className={`absolute bottom-0 left-[38%] h-80 w-80 rounded-full blur-3xl ${
              darkMode ? "bg-lime-950/20" : "bg-lime-100/35"
            }`}
          />
        </div>

        {/* ========================= NAVBAR ========================= */}
        <header className="fixed left-0 right-0 top-4 z-50 px-3 sm:px-5">
          <nav
            className={`mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-2xl transition-all duration-500 sm:px-6 ${
              darkMode
                ? "border-emerald-900/40 bg-slate-950/80 shadow-2xl shadow-black/30"
                : "border-emerald-100/80 bg-white/80 shadow-xl shadow-emerald-950/5"
            }`}
          >
            {/* Logo */}
            <a
              href="#about"
              className="group flex min-w-0 items-center gap-2.5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-green-500 to-teal-400 text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Sparkles size={15} />
              </div>

              <span className="hidden whitespace-nowrap font-['Outfit',sans-serif] text-base font-bold tracking-tight xs:block sm:text-lg">
                Her
                <span className="text-emerald-500">Portfolio</span>
                <span className="text-emerald-400">.</span>
              </span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    darkMode
                      ? "text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-300"
                      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {item.label}

                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-6" />
                </a>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                aria-label="Toggle theme"
                className={`group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "border-slate-700 bg-slate-900 text-yellow-300 hover:border-yellow-500/40"
                    : "border-emerald-100 bg-white text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50"
                }`}
              >
                {darkMode ? (
                  <Sun
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={17}
                    className="transition-transform duration-300 group-hover:-rotate-12"
                  />
                )}
              </button>

              <div className="hidden h-6 w-px bg-slate-300/60 dark:bg-slate-700 sm:block" />

              <a
                href="#contact"
                className="hidden shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30 sm:inline-flex"
              >
                Let's Talk
              </a>

              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:hidden ${
                  darkMode
                    ? "border-slate-700 bg-slate-900 text-slate-200"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </header>

        {/* ========================= MOBILE MENU ========================= */}
        <div
          className={`fixed inset-x-3 top-[76px] z-40 rounded-[2rem] border p-3 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          } ${
            darkMode
              ? "border-emerald-900/40 bg-slate-950/95 text-white"
              : "border-emerald-100 bg-white/95 text-slate-900"
          }`}
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  darkMode
                    ? "hover:bg-emerald-500/10 hover:text-emerald-300"
                    : "hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                {item.label}
                <ChevronRight size={16} />
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* ========================= HERO ========================= */}
        <section
          id="about"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28"
        >
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Hero content */}
            <div
              data-aos="fade-up"
              className={`relative overflow-hidden rounded-[2.5rem] border p-7 sm:p-10 lg:col-span-7 lg:p-14 ${
                darkMode
                  ? "border-emerald-900/40 bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/30"
                  : "border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/70"
              } pretty-shadow`}
            >
              <div className="float-soft pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[22px] border-emerald-300/10" />

              <div className="float-reverse pointer-events-none absolute bottom-8 right-8 hidden text-emerald-300/20 sm:block">
                <Sparkles size={72} />
              </div>

              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] ${
                  darkMode
                    ? "border-emerald-700/30 bg-emerald-500/10 text-emerald-300"
                    : "border-emerald-200 bg-emerald-50 text-emerald-700"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Business Analyst & Data Strategist
              </div>

              <h1 className="relative z-10 mb-6 font-['Outfit',sans-serif] text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Turning{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400 bg-clip-text text-transparent">
                  ideas & data
                </span>{" "}
                into meaningful business results.
              </h1>

              <p
                className={`relative z-10 mb-8 max-w-2xl text-base leading-relaxed sm:text-lg ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                I connect business needs with practical solutions through data
                analysis, process improvement, requirements gathering, and
                thoughtful stakeholder collaboration.
              </p>

              <div className="relative z-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="shine-effect group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/30"
                >
                  Explore My Work
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-slate-700 bg-slate-900/70 text-slate-200 hover:border-emerald-600/40 hover:bg-slate-800"
                      : "border-emerald-100 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
                  }`}
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium">
                <span
                  className={`inline-flex items-center gap-1.5 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  <MapPin size={14} className="text-emerald-500" />
                  Yangon, Myanmar
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  <BriefcaseBusiness size={14} className="text-emerald-500" />
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Hero cards */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-col gap-5 lg:col-span-5"
            >
              <div
                className={`group rounded-[2rem] border p-6 transition-all duration-500 hover:-translate-y-1.5 ${
                  darkMode
                    ? "border-slate-800 bg-slate-900/80"
                    : "border-emerald-100/80 bg-white"
                } pretty-shadow`}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <BarChart3 size={22} />
                  </div>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Analytics
                  </span>
                </div>

                <h3 className="mb-2 font-['Outfit',sans-serif] text-xl font-bold">
                  Data-Driven Thinking
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Turning raw information into dashboards, insights, and
                  decisions that are easier for stakeholders to act on.
                </p>
              </div>

              <div
                className={`group rounded-[2rem] border p-6 transition-all duration-500 hover:-translate-y-1.5 ${
                  darkMode
                    ? "border-slate-800 bg-slate-900/80"
                    : "border-emerald-100/80 bg-white"
                } pretty-shadow`}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-500 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110">
                    <Workflow size={22} />
                  </div>

                  <span className="rounded-full bg-teal-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    Process
                  </span>
                </div>

                <h3 className="mb-2 font-['Outfit',sans-serif] text-xl font-bold">
                  Business & Technology Bridge
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Connecting stakeholders, developers, and business goals
                  through clear requirements and well-structured workflows.
                </p>
              </div>

              <div
                className={`relative overflow-hidden rounded-[2rem] border p-6 ${
                  darkMode
                    ? "border-emerald-900/30 bg-gradient-to-r from-emerald-950/40 to-teal-950/20"
                    : "border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50"
                }`}
              >
                <div className="absolute right-4 top-4 text-emerald-500/15">
                  <Heart size={54} fill="currentColor" />
                </div>

                <p
                  className={`relative z-10 max-w-md text-sm font-medium leading-relaxed ${
                    darkMode ? "text-emerald-100" : "text-emerald-900"
                  }`}
                >
                  "Good analysis doesn't just explain what happened — it helps
                  people understand what to do next."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= SKILLS ========================= */}
        <section
          id="skills"
          className={`scroll-mt-24 border-y py-24 transition-colors duration-500 ${
            darkMode
              ? "border-slate-800/60 bg-slate-900/30"
              : "border-emerald-100/60 bg-emerald-50/30"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              data-aos="fade-up"
              className="mx-auto mb-14 max-w-2xl text-center"
            >
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
                What I Do
              </span>

              <h2 className="mb-4 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight sm:text-4xl">
                Core Competencies
              </h2>

              <p
                className={`text-sm leading-relaxed sm:text-base ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Combining analytical thinking, business understanding, and
                communication to solve practical problems.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: <BarChart3 size={20} />,
                  title: "Data & Analytics",
                  label: "Insights",
                  desc: "SQL querying, data cleaning, forecasting, reporting, dashboards, Tableau, Power BI, and Excel-based analysis.",
                },
                {
                  icon: <Workflow size={20} />,
                  title: "Business Analysis",
                  label: "Processes",
                  desc: "Requirements elicitation, BPMN process mapping, gap analysis, user stories, acceptance criteria, and process optimization.",
                },
                {
                  icon: <Users size={20} />,
                  title: "Project & Stakeholders",
                  label: "Collaboration",
                  desc: "Agile & Scrum practices, stakeholder communication, UAT coordination, risk tracking, and cross-functional collaboration.",
                },
              ].map((skill, index) => (
                <div
                  key={skill.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`group relative overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 hover:-translate-y-2 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/80 hover:border-emerald-500/40"
                      : "border-emerald-100/80 bg-white hover:border-emerald-300"
                  } pretty-shadow`}
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/5 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                        {skill.icon}
                      </div>

                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {skill.label}
                      </span>
                    </div>

                    <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold">
                      {skill.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================= PROJECTS ========================= */}
        <section
          id="projects"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div
            data-aos="fade-up"
            className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
                Selected Work
              </span>

              <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight sm:text-4xl">
                Featured Case Studies
              </h2>

              <p
                className={`mt-3 max-w-xl text-sm leading-relaxed sm:text-base ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Examples of analytical, process, and business problems
                approached through structured thinking.
              </p>
            </div>

            {/* FIXED RESPONSIVE FILTERS */}
            <div
              className={`w-full rounded-2xl p-1.5 lg:w-auto ${
                darkMode ? "bg-slate-900/80" : "bg-emerald-50/80"
              }`}
            >
              <div className="flex flex-wrap gap-2">
                {["all", "Data Analysis", "Process Engineering"].map((tab) => {
                  const isActive = activeTab === tab;

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        inline-flex
                        min-h-[42px]
                        items-center
                        justify-center
                        rounded-xl
                        px-4
                        py-2.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.09em]
                        transition-all
                        duration-300
                        sm:px-5
                        ${
                          isActive
                            ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/20"
                            : darkMode
                              ? "border border-slate-800 bg-slate-950 text-slate-400 hover:border-emerald-700/40 hover:bg-slate-900 hover:text-emerald-300"
                              : "border border-emerald-100 bg-white text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                        }
                      `}
                    >
                      {tab === "all" ? "All" : tab}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group flex flex-col overflow-hidden rounded-[2.2rem] border transition-all duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? "border-slate-800 bg-slate-900/90 hover:border-emerald-500/40"
                    : "border-emerald-100/80 bg-white hover:border-emerald-300"
                } pretty-shadow`}
              >
                {/* Card top */}
                <div className="relative overflow-hidden p-7 pb-0">
                  <div className="absolute right-5 top-5 h-24 w-24 rounded-full bg-emerald-400/5 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                        <Sparkles size={11} />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-['Outfit',sans-serif] text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-emerald-500 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Impact */}
                <div className="px-7 pt-6">
                  <div
                    className={`rounded-2xl border p-4 ${
                      darkMode
                        ? "border-emerald-900/40 bg-emerald-950/20 text-emerald-200"
                        : "border-emerald-100 bg-emerald-50/70 text-emerald-900"
                    }`}
                  >
                    <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={14} />
                      Impact
                    </div>

                    <p className="text-xs font-medium leading-relaxed sm:text-sm">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Tools */}
                <div className="px-7 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`rounded-lg px-2.5 py-1.5 text-[10px] font-semibold ${
                          darkMode
                            ? "bg-slate-800 text-slate-300"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto p-7">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`group/button flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      darkMode
                        ? "bg-slate-800 text-white hover:bg-emerald-600"
                        : "bg-slate-900 text-white hover:bg-emerald-600"
                    }`}
                  >
                    View Case Study
                    <ExternalLink
                      size={14}
                      className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div
              className={`rounded-[2rem] border p-12 text-center ${
                darkMode
                  ? "border-slate-800 bg-slate-900"
                  : "border-emerald-100 bg-white"
              }`}
            >
              <p className="text-sm text-slate-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </section>

        {/* ========================= CONTACT ========================= */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-slate-800 bg-[#020a05] py-24 text-white"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

          <div
            data-aos="fade-up"
            className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300">
              <Mail size={13} />
              Let's Connect
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight sm:text-5xl">
              Let's build something{" "}
              <span className="text-emerald-400">meaningful.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Looking for someone who can understand the business problem,
              organize the details, and turn them into practical solutions? I'd
              love to hear from you.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:her.email@example.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-2xl hover:shadow-emerald-600/30"
              >
                <Mail size={16} />
                Send an Email
              </a>

              <a
                href="https://www.linkedin.com/in/her-username/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-7 py-4 text-sm font-bold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-slate-800"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ========================= FOOTER ========================= */}
        <footer className="border-t border-slate-800 bg-[#020603] px-4 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Her Portfolio. All rights reserved.
            </p>

            <p className="flex items-center gap-1 text-xs text-slate-500">
              Crafted with
              <Heart size={12} className="fill-emerald-500 text-emerald-500" />
              and a little green magic.
            </p>
          </div>
        </footer>

        {/* ========================= CASE STUDY MODAL ========================= */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              onClick={(event) => event.stopPropagation()}
              className={`relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border p-6 shadow-2xl sm:p-8 ${
                darkMode
                  ? "border-slate-800 bg-slate-950"
                  : "border-emerald-100 bg-white"
              }`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study"
                className={`absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  darkMode
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <X size={17} />
              </button>

              <div className="pr-10">
                <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {selectedProject.category}
                </span>

                <h3
                  id="case-study-title"
                  className="mt-4 font-['Outfit',sans-serif] text-2xl font-extrabold sm:text-3xl"
                >
                  {selectedProject.title}
                </h3>

                <p
                  className={`mt-2 text-xs font-medium ${
                    darkMode ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  {selectedProject.type}
                </p>

                <p
                  className={`mt-6 text-sm leading-relaxed sm:text-base ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {selectedProject.description}
                </p>

                <div
                  className={`mt-6 rounded-2xl border p-5 ${
                    darkMode
                      ? "border-emerald-900/40 bg-emerald-950/20"
                      : "border-emerald-100 bg-emerald-50"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Key Impact
                  </p>

                  <p
                    className={`mt-2 text-sm font-semibold ${
                      darkMode ? "text-emerald-100" : "text-emerald-950"
                    }`}
                  >
                    {selectedProject.impact}
                  </p>
                </div>

                <div className="mt-7">
                  <h4 className="font-['Outfit',sans-serif] text-lg font-bold">
                    Key Contributions
                  </h4>

                  <div className="mt-4 space-y-3">
                    {selectedProject.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className={`flex items-start gap-3 rounded-xl p-3 ${
                          darkMode ? "bg-slate-900" : "bg-slate-50"
                        }`}
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-emerald-500"
                        />

                        <span
                          className={`text-sm ${
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <h4 className="font-['Outfit',sans-serif] text-lg font-bold">
                    Tools Used
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`rounded-xl px-3 py-2 text-xs font-semibold ${
                          darkMode
                            ? "bg-slate-800 text-slate-300"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-500"
              >
                Close Case Study
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
