import React, { useEffect, useState } from "react";
import { useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isSignedIn, user } = useUser(); // live user state

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed -top-3 z-50 w-full px-2">
      <nav
        className={`mx-auto mt-2 transition-all border-gray-200 duration-300 ${
          isScrolled
            ? "max-w-4xl rounded-b-2xl border bg-white/70 backdrop-blur-lg shadow-md"
            : "max-w-6xl pt-2"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-[var(--primary)]">
            <img src="https://jioresume.com/logo.svg" className="w-32" alt="" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden gap-8 text-sm -ml-16 md:flex">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-slate-900 transition hover:text-[var(--primary)]"
                >
                  {item.name}
                </a>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary)] transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden gap-3 md:flex items-center">
            {!isSignedIn ? (
              <>
                <Link
                  to="/login"
                  className="rounded-full border border-gray-200 px-4 py-1.5 text-sm transition hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className="rounded-full bg-[var(--primary)] px-4 py-1.5 text-sm text-white transition hover:opacity-90"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <UserButton />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden border-t border-gray-200 px-6 pb-6 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-5 pt-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-gray-600 hover:text-[var(--primary)] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-3">
            {!isSignedIn ? (
              <>
                <Link
                  to="/login"
                  className="w-full rounded-full border border-gray-200 py-2 text-sm transition hover:bg-gray-100 block text-center"
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className="w-full rounded-full bg-[var(--primary)] py-2 text-sm text-white transition hover:opacity-90 block text-center"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <UserButton />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
