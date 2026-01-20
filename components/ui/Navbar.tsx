"use client";

import React from "react";
import Link from "next/link";
import { Search, Menu, User, House } from "lucide-react";

interface NavbarProps {
  variant?: "default" | "search";
}

export const Navbar = ({ variant = "default" }: NavbarProps) => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-white/70 backdrop-blur-2xl border border-white/40 shadow-xl rounded-[48px] px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <House size={20} />
          </div>
          <span className="font-sora font-bold text-xl tracking-tight text-slate-950">
            SwiftHome
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/search" className="text-slate-900 font-medium hover:text-emerald-600 transition-colors">
            Marketplace
          </Link>
          <Link href="/agent/1" className="text-slate-900 font-medium hover:text-emerald-600 transition-colors">
            Agents
          </Link>
          <Link href="/dashboard" className="text-slate-900 font-medium hover:text-emerald-600 transition-colors">
            Dashboard
          </Link>
        </div>

        {/* Action Pills */}
        <div className="flex items-center gap-3">
          {variant === "search" ? (
            <div className="hidden lg:flex items-center bg-slate-50 border border-slate-100 rounded-full px-4 py-2 gap-3 w-64 shadow-inner">
              <Search size={16} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Search properties..." 
                className="bg-transparent border-none outline-none text-sm w-full text-slate-900 placeholder:text-slate-400"
              />
            </div>
          ) : (
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-100 text-slate-900 hover:bg-white transition-colors">
              <Search size={18} />
            </button>
          )}
          
          <button className="flex items-center gap-2 bg-slate-950 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors">
            <User size={18} />
            <span className="hidden sm:inline font-medium text-sm">Sign In</span>
          </button>
          
          <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-100 text-slate-900">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
