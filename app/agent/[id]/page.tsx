"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Star, ShieldCheck, Mail, Phone, Calendar, MapPin, Award, UserCheck, MessageSquare } from "lucide-react";

const AGENT_PROPERTIES = [
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
  }
];

export default function AgentProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24">
      <Navbar variant="search" />

      {/* Profile Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="container mx-auto">
          <div className="bg-white rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start relative z-10">
              {/* Image & Badge */}
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-[32px] overflow-hidden border-4 border-emerald-500 shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                    alt="Alexander Knight" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-2xl font-bold flex items-center gap-2 shadow-lg whitespace-nowrap">
                  <ShieldCheck size={18} />
                  Top 1% Agent
                </div>
              </div>

              {/* Bio Details */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
                  <h1 className="text-4xl md:text-5xl font-sora font-extrabold text-slate-950">Alexander Knight</h1>
                  <div className="flex items-center justify-center lg:justify-start gap-1 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full border border-amber-100 font-bold text-sm">
                    <Star size={14} fill="currentColor" />
                    4.9/5 Rating (120+ Reviews)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-3xl">
                  <div className="flex items-center gap-3 text-slate-600 font-medium">
                    <MapPin size={18} className="text-emerald-500" />
                    <span>Beverly Hills, California</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 font-medium">
                    <UserCheck size={18} className="text-emerald-500" />
                    <span>12 Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 font-medium">
                    <Award size={18} className="text-emerald-500" />
                    <span>$500M+ Total Sales</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed font-medium mb-10 max-w-4xl">
                  Specializing in ultra-luxury estates across the West Coast, Alexander brings 
                  unparalleled market expertise and a white-glove approach to every transaction. 
                  Known for his discretion and negotiation prowess, he represents the world's 
                  most discerning buyers and sellers.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl">
                    <Calendar size={20} />
                    Schedule Consultation
                  </button>
                  <div className="flex gap-3">
                    <button className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 font-bold hover:bg-white transition-all shadow-sm">
                      <Mail size={22} className="text-emerald-500" />
                    </button>
                    <button className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 font-bold hover:bg-white transition-all shadow-sm">
                      <Phone size={22} className="text-emerald-500" />
                    </button>
                    <button className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold hover:bg-white transition-all shadow-sm">
                      <MessageSquare size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50/50 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Listings", value: "24" },
              { label: "Sold (last year)", value: "48" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "Days on Market", value: "12" }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-8 text-center shadow-sm">
                <h3 className="text-4xl font-sora font-extrabold text-slate-950 mb-2">{stat.value}</h3>
                <p className="text-metadata text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent's Listings */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12 px-2">
            <h2 className="text-3xl font-sora font-extrabold text-slate-950">Active Listings</h2>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-950 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm cursor-pointer hover:bg-slate-50 transition-all">
              Filter by Status <Star size={14} className="text-slate-400" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AGENT_PROPERTIES.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
            <div className="bg-slate-100/50 border-2 border-dashed border-slate-300 rounded-[32px] flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:border-emerald-500 transition-colors">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Star size={24} />
              </div>
              <h4 className="font-sora font-bold text-slate-900 mb-2">Exclusive Preview</h4>
              <p className="text-sm text-slate-500 font-medium">Unlock 12 off-market listings currently in preparation.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
