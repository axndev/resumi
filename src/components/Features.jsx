import React from "react"

const features = [
  {
    title: "Lightning Fast",
    desc: "Build a professional resume in minutes with live preview and instant updates.",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Smart Sections",
    desc: "Experience, projects, skills, and education — perfectly structured.",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "ATS Friendly",
    desc: "Optimized layouts that pass applicant tracking systems.",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
      </svg>
    ),
  },
  {
    title: "Fully Customizable",
    desc: "Fonts, spacing, colors, and sections — your resume, your style.",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M12 20h9" />
        <path d="M16.5 3.5l4 4L7 21H3v-4z" />
      </svg>
    ),
  },
  {
    title: "Export Ready",
    desc: "Download print-ready PDFs with one click.",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
    ),
  },
  {
    title: "Built for Everyone",
    desc: "Students, developers, and freelancers — one tool for all.",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
        <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
        <path d="M3 12v5l9 4.5 9-4.5v-5" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 border-y border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.3),transparent)] blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.25),transparent)] blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.2),transparent)] blur-2xl"></div>
      </div>
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        {/* Heading */}
        <div className="mx-auto max-w-xl text-center space-y-4">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Everything you need to build a great resume
          </h2>
          <p className="text-gray-600">
            A modern resume builder designed to help you stand out and get hired.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-4xl divide-x divide-y border border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="p-10 space-y-3 border-gray-200 hover:bg-(--primary)/5 hover:backdrop-blur-lg">
              <div className="flex items-center gap-2 text-sm font-medium">
                {feature.icon}
                {feature.title}
              </div>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
