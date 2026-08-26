import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("all");

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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl text-blue-600 tracking-tight">
            Alex.BA
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600 transition">
              Expertise
            </a>
            <a href="#projects" className="hover:text-blue-600 transition">
              Case Studies
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition shadow-sm"
          >
            Let's Connect
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Business Analyst & Data Strategist
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-3xl">
          Bridging the gap between{" "}
          <span className="text-blue-600">complex data</span> and actionable
          business strategy.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
          I transform messy operational bottlenecks into streamlined workflows,
          clear insights, and measurable ROI through rigorous data analysis and
          stakeholder collaboration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="bg-blue-600 text-white font-medium px-6 py-3 rounded-xl text-center hover:bg-blue-700 transition shadow-md"
          >
            Explore Case Studies
          </a>
          <a
            href="#contact"
            className="bg-white border border-slate-300 text-slate-700 font-medium px-6 py-3 rounded-xl text-center hover:bg-slate-50 transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Core Competencies / Skills Section */}
      <section id="skills" className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Core Competencies & Toolkit
            </h2>
            <p className="text-slate-600">
              The methodologies and technologies I use to drive business
              transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold mb-4">
                01
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Data & Analytics
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced SQL querying, data cleaning, time-series forecasting,
                and building high-impact dashboards in Tableau & Power BI.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold mb-4">
                02
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Process Engineering
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                BPMN process mapping, gap analysis, requirements elicitation,
                user stories definition, and acceptance criteria layout.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold mb-4">
                03
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Project Management
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Agile & Scrum frameworks, cross-functional stakeholder
                facilitation, risk mitigation, and UAT coordination using Jira &
                Confluence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Featured Case Studies
            </h2>
            <p className="text-slate-600">
              Real business challenges solved through structured analysis.
            </p>
          </div>
          {/* Filter Buttons */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === "all" ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("data analysis")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === "data analysis" ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
            >
              Data Analysis
            </button>
            <button
              onClick={() => setActiveTab("process engineering")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === "process engineering" ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
            >
              Process & Workflow
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 mb-4 text-emerald-800 text-xs font-medium">
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition">
                  View Full Report →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Discuss Opportunities
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Whether you're looking for an analyst to streamline your operations
            or dive deep into data workflows, I'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:her.email@example.com"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Get in Touch via Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-slate-700 text-slate-200 font-medium px-6 py-3 rounded-xl hover:bg-slate-700 transition"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-xs">
        <p>© {new Date().getFullYear()} • Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
