import React, { useEffect, useState } from "react";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";

export default function Header() {
  const { signOut } = useClerk()
  const { user, isLoaded } = useUser()
  if (!isLoaded) return null

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 py-4 pb-5">
        <Logo />

        <div className="flex items-center gap-4">
          <p className="hidden sm:block text-sm text-slate-600">
            Welcome,{" "}
            <span className="font-medium text-slate-900">
              {user.firstName}
            </span>
          </p>

          <UserButton />
        </div>
      </nav>
    </header>
  )
}

