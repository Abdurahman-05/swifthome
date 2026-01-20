"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Mail, Lock, User, ArrowRight, Github, Chrome, House, ShieldCheck } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="h-screen max-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Visual Side */}
      <div className="hidden lg:block relative bg-slate-950 overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
          alt="Luxury Exterior" 
          fill 
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        <div className="absolute bottom-24 left-24 right-24 pointer-events-none">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[32px]">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-white font-sora font-extrabold text-xl mb-2">Verified Only</h4>
              <p className="text-white/60 text-sm leading-relaxed">No bots, no fake listings. Just real opportunities.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[32px]">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-white font-sora font-extrabold text-xl mb-2">AI Valuation</h4>
              <p className="text-white/60 text-sm leading-relaxed">Know the true value of any property instantly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex items-center justify-center p-8 lg:p-12 bg-white overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
              <House size={18} />
            </div>
            <span className="font-sora font-extrabold text-xl text-slate-950">SwiftHome</span>
          </Link>
          
          <div className="mb-6">
            <h1 className="text-3xl font-sora font-extrabold text-slate-950 mb-2">Create Account</h1>
            <p className="text-slate-500 font-medium text-sm">Join the premier real estate community.</p>
          </div>

          <form className="space-y-4">
            <Input 
              label="Full Name" 
              placeholder="John Doe" 
              type="text" 
              icon={<User size={18} />}
            />
            <Input 
              label="Email Address" 
              placeholder="name@example.com" 
              type="email" 
              icon={<Mail size={18} />}
            />
            <Input 
              label="Password"
              placeholder="••••••••" 
              type="password" 
              icon={<Lock size={18} />}
            />

            <div className="flex items-start gap-3 px-1">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded accent-emerald-500" id="terms" />
              <label htmlFor="terms" className="text-xs text-slate-500 font-medium leading-relaxed">
                By creating an account, you agree to our <Link href="#" className="font-bold text-slate-950">Terms of Service</Link> and <Link href="#" className="font-bold text-slate-950">Privacy Policy</Link>.
              </label>
            </div>

            <button className="w-full bg-slate-950 text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-950/20 group">
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <span className="relative bg-white px-4 text-metadata">Or sign up with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-white border border-slate-100 py-3.5 rounded-2xl font-bold text-slate-900 hover:bg-slate-50 transition-all">
                <Chrome size={18} />
                Google
              </button>
              <button className="flex items-center justify-center gap-3 bg-white border border-slate-100 py-3.5 rounded-2xl font-bold text-slate-900 hover:bg-slate-50 transition-all">
                <Github size={18} />
                GitHub
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm font-medium text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-600 font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </main>
  );
}