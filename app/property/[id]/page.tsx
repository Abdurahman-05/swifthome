"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { Bed, Bath, Move, MapPin, Heart, Share2, ShieldCheck, Mail, Phone, Calendar } from "lucide-react";

const GALLERY = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
];

export default function PropertyDetailPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-24">
      <Navbar variant="search" />

      {/* Header Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-metadata bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100 font-bold">
                  Exclusive Listing
                </span>
                <span className="text-metadata bg-slate-900 text-white px-3 py-1 rounded-full font-bold">
                  For Sale
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-sora font-extrabold text-slate-950 mb-3">Modern Glass Mansion</h1>
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <MapPin size={18} className="text-emerald-500" />
                <span>742 Evergreen Terrace, Beverly Hills, CA 90210</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-5 py-3 rounded-2xl font-bold text-slate-900 hover:bg-white transition-all">
                <Share2 size={18} />
                Share
              </button>
              <button className="flex items-center gap-2 bg-white border border-slate-100 px-5 py-3 rounded-2xl font-bold text-slate-900 hover:text-rose-500 transition-all shadow-sm">
                <Heart size={18} />
                Save Listing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Masonry Flow */}
      <section className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative rounded-[32px] overflow-hidden group">
              <Image src={GALLERY[0]} alt="Exterior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
            <div className="md:col-span-1 relative rounded-[32px] overflow-hidden group">
              <Image src={GALLERY[1]} alt="Living Area" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="md:col-span-1 relative rounded-[32px] overflow-hidden group">
              <Image src={GALLERY[2]} alt="Kitchen" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="md:col-span-2 relative rounded-[32px] overflow-hidden group">
              <Image src={GALLERY[3]} alt="Master Bedroom" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-slate-950 shadow-lg">
                View All 24 Photos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Sidebar */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-12 mb-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-metadata">Price</p>
                <h3 className="text-2xl font-sora font-extrabold text-slate-950">$4,250,000</h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-metadata">Bedrooms</p>
                <div className="flex items-center gap-2">
                  <Bed className="text-emerald-500" size={20} />
                  <h3 className="text-2xl font-sora font-extrabold text-slate-950">5</h3>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-metadata">Bathrooms</p>
                <div className="flex items-center gap-2">
                  <Bath className="text-emerald-500" size={20} />
                  <h3 className="text-2xl font-sora font-extrabold text-slate-950">6</h3>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-metadata">Square Feet</p>
                <div className="flex items-center gap-2">
                  <Move className="text-emerald-500" size={20} />
                  <h3 className="text-2xl font-sora font-extrabold text-slate-950">5,400</h3>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-sora font-extrabold text-slate-950 mb-6">About this Property</h2>
              <p className="text-slate-600 leading-relaxed font-medium mb-6">
                Redefine luxury living in this stunning architectural masterpiece located in the heart of Beverly Hills. 
                Designed with a seamless flow between indoor and outdoor spaces, this residence features floor-to-ceiling 
                glass walls that offer breathtaking views of the lush California landscape.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                The master suite is a sanctuary of comfort, boasting a private balcony, a spa-like bathroom, and a custom 
                walk-in closet. Outside, the zero-edge infinity pool and meticulously landscaped gardens create a private 
                oasis perfect for both relaxation and grand entertaining.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-sora font-extrabold text-slate-950 mb-8">Premium Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Smart Home Automation",
                  "Private Wine Cellar",
                  "Chef's Kitchen with Wolf Appliances",
                  "Infinity Pool & Spa",
                  "Home Theater Room",
                  "Three-Car Showroom Garage"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white border border-slate-100 p-5 rounded-2xl">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="font-bold text-slate-900">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Agent */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white border border-slate-100 rounded-[32px] p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500">
                  <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Agent" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-sora font-extrabold text-slate-950 text-xl">Alexander Knight</h4>
                  <p className="text-metadata text-emerald-600 font-bold">Premier Agent</p>
                  <div className="flex gap-0.5 mt-1 text-amber-400">
                    <Calendar size={14} fill="currentColor" />
                    <Calendar size={14} fill="currentColor" />
                    <Calendar size={14} fill="currentColor" />
                    <Calendar size={14} fill="currentColor" />
                    <Calendar size={14} fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button className="w-full bg-slate-950 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-lg">
                  <Calendar size={20} />
                  Book a Viewing
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-slate-50 border border-slate-100 py-4 rounded-2xl font-bold text-slate-900 flex items-center justify-center gap-2 hover:bg-white transition-all">
                    <Mail size={18} className="text-emerald-500" />
                    Email
                  </button>
                  <button className="bg-slate-50 border border-slate-100 py-4 rounded-2xl font-bold text-slate-900 flex items-center justify-center gap-2 hover:bg-white transition-all">
                    <Phone size={18} className="text-emerald-500" />
                    Call
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400 font-medium italic">
                  Average response time: <span className="text-slate-900 font-bold">15 minutes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}