"use client";

import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Filter, SlidersHorizontal, Map as MapIcon, ChevronDown } from "lucide-react";

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
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    price: "$1,850,000",
    address: "45 Villa Ave, Scottsdale, AZ",
    beds: 3,
    baths: 3,
    sqft: 2800,
    category: "Modern Villas"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    price: "$5,500,000",
    address: "10 Bel Air Rd, Los Angeles, CA",
    beds: 7,
    baths: 8,
    sqft: 8200,
    category: "Luxe Mansions"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop",
    price: "$980,000",
    address: "22 Forest Ln, Portland, OR",
    beds: 2,
    baths: 2,
    sqft: 1500,
    category: "Forest Retreats"
  }
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-12">
      <Navbar variant="search" />

      {/* Filter Bar */}
      <section className="px-6 md:px-12 lg:px-24 mb-8">
        <div className="container mx-auto">
          <div className="bg-white rounded-[24px] border border-slate-100 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-slate-900 font-bold text-sm cursor-pointer hover:bg-white transition-all">
                Price Range <ChevronDown size={16} className="text-slate-400" />
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-slate-900 font-bold text-sm cursor-pointer hover:bg-white transition-all">
                Property Type <ChevronDown size={16} className="text-slate-400" />
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-slate-900 font-bold text-sm cursor-pointer hover:bg-white transition-all">
                Bedrooms <ChevronDown size={16} className="text-slate-400" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                <MapIcon size={18} />
                Show Map
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-100 text-slate-900 hover:bg-slate-50 transition-all">
                <SlidersHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8 px-2">
            <div>
              <h2 className="text-2xl font-sora font-extrabold text-slate-950">Available Properties</h2>
              <p className="text-metadata text-slate-500">Showing 24 results in Los Angeles</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 bg-white px-4 py-2 rounded-xl border border-slate-100">
              Sort by: <span className="text-emerald-500">Recommended</span>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PROPERTIES.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
            {PROPERTIES.map((prop) => (
              <PropertyCard key={`second-${prop.id}`} {...prop} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-950 font-bold hover:bg-slate-100 transition-all">1</button>
            <button className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white font-bold">2</button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-950 font-bold hover:bg-slate-100 transition-all">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-950 font-bold hover:bg-slate-100 transition-all">8</button>
          </div>
        </div>
      </section>
    </main>
  );
}