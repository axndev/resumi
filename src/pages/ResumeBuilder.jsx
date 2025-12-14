import React, { useState, useEffect, useRef } from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import {
  User,
  Briefcase,
  FileText,
  GraduationCap,
  FolderGit2,
  Plus,
  Trash2,
  ArrowRight,
} from "lucide-react"
import { useAuth } from "@clerk/clerk-react"

const steps = [
  { id: 1, title: "Personal", icon: User },
  { id: 2, title: "Niche", icon: Briefcase },
  { id: 3, title: "Summary", icon: FileText },
  { id: 4, title: "Education", icon: GraduationCap },
  { id: 5, title: "Projects", icon: FolderGit2 },
]

export default function ResumeBuilder() {
  const { userId } = useAuth()
  const [step, setStep] = useState(1)

  const [data, setData] = useState({
    name: "",
    title: "",
    email: "",
    linkedin: "",
    niche: "",
    summary: "",
    education: [{ school: "", degree: "", year: "" }],
    projects: [{ name: "", desc: "" }],
  })

  const previewRef = useRef()

  useEffect(() => {
    if (!userId) return
    const saved = localStorage.getItem(`resume-${userId}`)
    if (saved) setData(JSON.parse(saved))
  }, [userId])

  const update = (key, value) =>
    setData((prev) => ({ ...prev, [key]: value }))

  const handleSave = () => {
    if (!userId) return alert("User not signed in")
    localStorage.setItem(`resume-${userId}`, JSON.stringify(data))
    alert("Resume saved!")
  }


const handleDownloadPDF = async () => {
  if (!previewRef.current) return

  const element = previewRef.current

  // Convert HTML to canvas
  const canvas = await html2canvas(element, {
    scale: 2,          // higher scale = better resolution
    useCORS: true,     // for external images if any
    allowTaint: true,
  })

  const imgData = canvas.toDataURL("image/png")

  const pdf = new jsPDF("p", "mm", "a4")
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
  pdf.save(`${data.name || "resume"}.pdf`)
}


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [step])

  return (
    <div className="min-h-screen bg-gray-50 py-10 pt-30">
      <div className="mx-auto grid gap-8 px-6 md:grid-cols-[1.2fr_0.8fr] max-w-6xl">
        {/* LEFT */}
        <div className="space-y-6">
          {/* STEPS */}
          <div className="flex flex-wrap gap-3">
            {steps.map((s) => {
              const Icon = s.icon
              const active = step === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => setStep(s.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    active
                      ? "bg-[var(--primary)] text-white"
                      : "bg-white border border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {s.title}
                </button>
              )
            })}
          </div>

          {/* FORM */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-6">
            {step === 1 && (
              <>
                <Input
                  label="Full Name"
                  value={data.name}
                  onChange={(v) => update("name", v)}
                />
                <Input
                  label="Professional Title"
                  value={data.title}
                  onChange={(v) => update("title", v)}
                />
                <Input
                  label="Email"
                  value={data.email}
                  onChange={(v) => update("email", v)}
                />
                <Input
                  label="LinkedIn / Portfolio"
                  value={data.linkedin}
                  onChange={(v) => update("linkedin", v)}
                />
              </>
            )}

            {step === 2 && (
              <Input
                label="Your Niche (e.g. Frontend Developer)"
                value={data.niche}
                onChange={(v) => update("niche", v)}
              />
            )}

            {step === 3 && (
              <Textarea
                label="Professional Summary"
                value={data.summary}
                onChange={(v) => update("summary", v)}
              />
            )}

            {step === 4 && (
              <Repeatable
                items={data.education}
                onAdd={() =>
                  update("education", [
                    ...data.education,
                    { school: "", degree: "", year: "" },
                  ])
                }
                onRemove={(i) =>
                  update(
                    "education",
                    data.education.filter((_, idx) => idx !== i)
                  )
                }
                onChange={(updated) => update("education", updated)}
                render={(item, updateItem) => (
                  <>
                    <Input
                      label="School"
                      value={item.school}
                      onChange={(v) => updateItem("school", v)}
                    />
                    <Input
                      label="Degree"
                      value={item.degree}
                      onChange={(v) => updateItem("degree", v)}
                    />
                    <Input
                      label="Year"
                      value={item.year}
                      onChange={(v) => updateItem("year", v)}
                    />
                  </>
                )}
              />
            )}

            {step === 5 && (
              <Repeatable
                items={data.projects}
                onAdd={() =>
                  update("projects", [...data.projects, { name: "", desc: "" }])
                }
                onRemove={(i) =>
                  update(
                    "projects",
                    data.projects.filter((_, idx) => idx !== i)
                  )
                }
                onChange={(updated) => update("projects", updated)}
                render={(item, updateItem) => (
                  <>
                    <Input
                      label="Project Name"
                      value={item.name}
                      onChange={(v) => updateItem("name", v)}
                    />
                    <Textarea
                      label="Description"
                      value={item.desc}
                      onChange={(v) => updateItem("desc", v)}
                    />
                  </>
                )}
              />
            )}

            {/* NEXT / SAVE / DOWNLOAD */}
            <div className="flex gap-4">
              {step < steps.length && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="flex items-center gap-2 rounded-lg bg-black px-5 py-2 text-white"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}

              <button
                onClick={handleSave}
                type="button"
                className="rounded-lg border border-gray-300 px-5 py-2 hover:bg-gray-100"
              >
                Save
              </button>

              <button
                onClick={handleDownloadPDF}
                type="button"
                className="rounded-lg border border-gray-300 px-5 py-2 hover:bg-gray-100"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT — PREVIEW */}
        <div
          ref={previewRef}
          className="sticky top-10 h-fit rounded-xl border border-gray-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold">{data.name || "Your Name"}</h2>
          <p className="text-sm text-gray-500">{data.title}</p>

          <div className="mt-4 text-sm">
            <p>{data.email}</p>
            <p>{data.linkedin}</p>
          </div>

          <Section title="Summary">{data.summary}</Section>

          <Section title="Education">
            {data.education.map((e, i) => (
              <p key={i} className="text-sm">
                {e.degree} — {e.school} ({e.year})
              </p>
            ))}
          </Section>

          <Section title="Projects">
            {data.projects.map((p, i) => (
              <div key={i}>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </Section>
        </div>
      </div>
    </div>
  )
}

/* ---------- SMALL COMPONENTS ---------- */
const Input = ({ label, value, onChange }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 h-10 w-full rounded-md border border-gray-200 px-3 outline-none focus:ring-2"
    />
  </div>
)

const Textarea = ({ label, value, onChange }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2"
      rows={4}
    />
  </div>
)

const Repeatable = ({ items, onAdd, onRemove, onChange, render }) => (
  <div className="space-y-4">
    {items.map((item, i) => (
      <div key={i} className="rounded-lg border border-gray-200 p-4 space-y-3">
        {render(item, (key, value) => {
          const updated = items.map((it, idx) =>
            idx === i ? { ...it, [key]: value } : it
          )
          onChange(updated)
        })}

        {items.length > 1 && (
          <button
            onClick={() => onRemove(i)}
            className="flex items-center gap-1 text-sm text-red-500"
          >
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        )}
      </div>
    ))}

    <button
      onClick={onAdd}
      className="flex items-center gap-2 text-sm text-[var(--primary)]"
    >
      <Plus className="h-4 w-4" />
      Add More
    </button>
  </div>
)

const Section = ({ title, children }) =>
  children ? (
    <div className="mt-6">
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  ) : null
