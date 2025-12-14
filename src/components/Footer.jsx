import React from 'react'
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from 'lucide-react'

const links = [
  {
    group: 'Product',
    items: ['Features', 'Customers', 'Pricing', 'Help', 'About'],
  },
  {
    group: 'Company',
    items: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-white pt-20">
      {/* divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* MIDDLE */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* BRAND + SOCIAL */}
          <div className="space-y-5 ">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                ResumeCraft
              </h3>
              <p className="mt-2 max-w-xs text-sm text-gray-500">
                No design skills needed, just powerful tools to create resumes recruiters actually notice.
              </p>
            </div>

            <div className="flex gap-4 text-gray-400">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="transition hover:text-black"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-8 ">
            {links.map((section) => (
              <div key={section.group} className="space-y-3 text-sm">
                <h4 className="font-medium text-gray-900">
                  {section.group}
                </h4>

                {section.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-500 transition hover:text-black"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* NEWSLETTER (replaced Legal) */}
          <form className="space-y-3 text-sm">
            <label className="block font-medium text-gray-900">
              Newsletter
            </label>
            <p className="text-gray-500">
              Subscribe to our newsletter to get the latest news and updates.
            </p>
            <div className="flex items-center gap-2">

              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 w-full rounded-md border border-gray-200 px-3 outline-none transition focus:ring-2 focus:ring-gray-200"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-12 items-center justify-center rounded-md bg-(--primary) text-white transition hover:bg-gray-900 active:scale-95"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* BOTTOM */}
      
      <div className=" relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm">
          <span className="text-gray-500">
            © {new Date().getFullYear()} ResumeCraft. All rights reserved.
          </span>

          {/* LEGAL LINKS */}
          <div className="flex flex-wrap gap-4 text-gray-500">
            {['License', 'Privacy', 'Cookies', 'Security'].map((item) => (
              <a
                key={item}
                href="#"
                className="transition hover:text-black"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
