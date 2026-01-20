"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { ArrowRight, Star, ShieldCheck, Sparkles, Building2, Palmtree, Mountain, Waves } from "lucide-react";

const CATEGORIES = [
  { id: 1, label: "Luxe Mansions", icon: Building2 },
  { id: 2, label: "Coastal Retreats", icon: Waves },
  { id: 3, label: "Modern Villas", icon: Sparkles },
  { id: 4, label: "Mountain Escapes", icon: Mountain },
  { id: 5, label: "Tropical Oasis", icon: Palmtree },
];

const PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    price: "$4,250,000",
    address: "742 Evergreen Terrace, Beverly Hills, CA",
    beds: 5,
    baths: 6,
    sqft: 5400,
    category: "Luxe Mansions"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    price: "$2,890,000",
    address: "120 Ocean View Dr, Malibu, CA",
    beds: 4,
    baths: 3,
    sqft: 3200,
    category: "Coastal Retreats"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    price: "$3,150,000",
    address: "888 Skyline Way, Aspen, CO",
    beds: 6,
    baths: 5,
    sqft: 4800,
    category: "Mountain Escapes"
  }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center pt-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-metadata bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full border border-emerald-100 font-bold">
                Premium Real Estate
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-sora font-extrabold text-slate-950 leading-[1.1] mb-8">
              Find Your <span className="text-emerald-500">Dream</span> Space with SwiftHome.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Experience the future of real estate browsing. High-contrast, 
              curated, and optimized for the modern homeowner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/search" 
                className="bg-slate-950 text-white px-8 py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl group"
              >
                Browse Marketplace
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/list-property" 
                className="bg-white text-slate-950 border border-slate-200 px-8 py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
              >
                List Your Property
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block h-[600px] w-full rounded-[48px] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Home"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl p-6 rounded-[32px] shadow-lg border border-white/40 max-w-[280px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <Star fill="white" size={20} />
                </div>
                <div>
                  <h4 className="font-sora font-bold text-slate-950">4.9/5 Rating</h4>
                  <p className="text-xs text-slate-500 font-medium">Over 2,000 Verified Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-200/20 blur-[120px] rounded-full -z-10" />
      </section>

      {/* Categories Bar */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-sora font-bold text-slate-950">Explore by Category</h2>
            <Link href="/search" className="text-emerald-600 font-bold flex items-center gap-1 hover:underline">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                className="flex-shrink-0 flex items-center gap-3 bg-slate-50 border border-slate-100 px-8 py-4 rounded-[24px] hover:bg-white hover:shadow-lg hover:border-emerald-100 transition-all group"
              >
                <cat.icon size={20} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                <span className="font-bold text-slate-900">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-sora font-bold text-slate-950">Featured Properties</h2>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-50 transition-colors">
                <ArrowRight size={20} className="rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-950 cursor-pointer hover:bg-slate-50 transition-colors">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="container mx-auto bg-slate-950 rounded-[48px] p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-white mb-8">
              The Gold Standard in Property Management.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-sora font-extrabold text-white text-lg mb-2">Verified Listings</h4>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    Every property on SwiftHome undergoes a rigorous 50-point inspection process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-sora font-extrabold text-white text-lg mb-2">Smart Valuation</h4>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    Our AI-driven engine provides the most accurate market pricing in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/10 skew-x-12 translate-x-1/2" />
        </div>
      </section>

      <footer className="bg-slate-50 py-12 px-6 border-t border-slate-100">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">
              <Building2 size={16} />
            </div>
            <span className="font-sora font-bold text-lg text-slate-950">SwiftHome</span>
          </div>
          <p className="text-slate-500 text-sm mb-8 font-medium">© 2026 SwiftHome SaaS. All rights reserved.</p>
          <div className="flex justify-center gap-8">
            <Link href="#" className="text-metadata hover:text-emerald-500">Privacy Policy</Link>
            <Link href="#" className="text-metadata hover:text-emerald-500">Terms of Service</Link>
            <Link href="#" className="text-metadata hover:text-emerald-500">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}