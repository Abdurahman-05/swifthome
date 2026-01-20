"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Mail, Lock, ArrowRight, Github, Chrome, House } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="h-screen max-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center p-8 lg:p-12 bg-white overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
              <House size={18} />
            </div>
            <span className="font-sora font-extrabold text-xl text-slate-950">SwiftHome</span>
          </Link>
          
          <div className="mb-6">
            <h1 className="text-3xl font-sora font-extrabold text-slate-950 mb-2">Welcome Back</h1>
            <p className="text-slate-500 font-medium text-sm">Log in to manage your properties and saved listings.</p>
          </div>

          <form className="space-y-4">
            <Input 
              label="Email Address" 
              placeholder="name@example.com" 
              type="email" 
              icon={<Mail size={18} />}
            />
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <label className="text-metadata">Password</label>
                <Link href="#" className="text-xs font-bold text-emerald-600 hover:underline">Forgot password?</Link>
              </div>
              <Input 
                placeholder="••••••••" 
                type="password" 
                icon={<Lock size={18} />}
              />
            </div>

            <button className="w-full bg-slate-950 text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-950/20 group">
              Sign In
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <span className="relative bg-white px-4 text-metadata">Or continue with</span>
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
            Don't have an account?{" "}
            <Link href="/signup" className="text-emerald-600 font-bold hover:underline">Create an account</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block relative bg-slate-950 overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Interior" 
          fill 
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        <div className="absolute bottom-24 left-24 right-24 pointer-events-none">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-12 rounded-[48px]">
            <h2 className="text-4xl font-sora font-extrabold text-white mb-6 leading-tight">
              Access the most exclusive listings in the world.
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-white/80 font-medium italic">Join 24,000+ elite homeowners</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}