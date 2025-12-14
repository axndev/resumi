import React, { useState } from "react"
import {
  LayoutTemplate,
  PencilLine,
  Download,
  ChevronDown,
  ArrowRight,
} from "lucide-react"

const steps = [
  {
    id: 1,
    icon: LayoutTemplate,
    title: "Choose a resume template",
    description:
      "Select from modern, ATS-friendly resume templates made for students, developers, and freelancers.",
  },
  {
    id: 2,
    icon: PencilLine,
    title: "Fill in your details",
    description:
      "Add your experience, skills, education, and projects with a live preview as you type.",
  },
  {
    id: 3,
    icon: Download,
    title: "Download & apply",
    description:
      "Export your resume as a clean PDF and start applying confidently.",
  },
]

export default function HowItWorks() {
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          {/* LEFT */}
          <div className="md:w-1/3">
            <div className="md:sticky md:top-24 space-y-5">
              <h2 className="text-3xl font-semibold">
                How it works
              </h2>
              <p className="text-gray-600">
               Create a professional, ATS-friendly resume in just a few simple steps and start applying with confidence.

              </p>

              {/* Icon Button CTA */}
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full border border-gray-200 px-5 py-2 text-sm font-medium transition hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
              >
                Start building
                <span className="flex size-7 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-white/20">
                  <ArrowRight className="size-4" />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-2/3 space-y-4">
            {steps.map((step) => {
              const Icon = step.icon
              const isOpen = openId === step.id

              return (
                <div
                  key={step.id}
                  className={`group rounded-xl border bg-white transition-all ${
                    isOpen
                      ? "border-[var(--primary)] shadow-lg"
                      : "border-gray-200 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => toggle(step.id)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon Bubble */}
                      <div
                        className={`flex size-10 items-center justify-center rounded-xl transition ${
                          isOpen
                            ? "bg-[var(--primary)] text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        <Icon className="size-5" />
                      </div>

                      <span className="font-medium">
                        {step.id}. {step.title}
                      </span>
                    </div>

                    <ChevronDown
                      className={`size-4 transition-transform ${
                        isOpen ? "rotate-180 text-[var(--primary)]" : ""
                      }`}
                    />
                  </button>

                  {/* Animated Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 hidden"
                    }`}
                  >
                    <div className="overflow-hidden px-20 pb-6 text-gray-600">
                      {step.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
