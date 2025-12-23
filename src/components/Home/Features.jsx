import { Bot, MonitorSmartphone, ScrollText } from "lucide-react"
import React, { useState } from "react"




export default function Features() {
  const features = [
    {
      title: "AI-Powered Resume Builder",
      desc: "Generate professional resumes in minutes with intelligent suggestions and formatting guidance.",
      icon: (<Bot className="w-6 " />),
    },
    {
      title: "ATS-Friendly Templates",
      desc: "Use ready-made templates that pass applicant tracking systems and highlight your skills effectively.",
      icon: (<ScrollText className="w-6 " />),
    },
    {
      title: "Mobile & Desktop Ready",
      desc: "Build and download resumes seamlessly on any device, anytime, without compatibility issues.",
      icon: (<MonitorSmartphone className="w-6 " />),
    },
  ]

  return (
    <div id="features" className="max-w-6xl mx-auto py-16 pb-0">

      <div className="text-left mt-6">
        <h2 className="md:text-5xl text-3xl font-semibold">Powerful Features</h2>
        <p className="text-gray-700 md:mt-5 mt-2 max-w-md">Everything you need to create, customize, and deliver professional resumes, easily and efficiently.</p>
      </div>
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {features.map((item, i) => (
          <div
            key={i}
            className="group rounded-xl border border-slate-200 bg-white p-6
             transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center
                  rounded-lg bg-(--primary)/10 text-(--primary)">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </div>

        ))}
      </div>
      <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

    </div>
  )
}
