import React from 'react';
import { 
  Search, Home, MapPin, LayoutGrid, Map as MapIcon, 
  ChevronDown, BedDouble, Bath, Maximize, Heart, Filter 
} from 'lucide-react';

// Using your exact PropertyCard formula
const PropertyCard = ({ image, price, title, location, beds, baths, sqft }: any) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
      <img src={image} alt={title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-slate-900 hover:bg-emerald-500 hover:text-white transition-all">
        <Heart size={18} />
      </button>
      <div className="absolute bottom-4 left-4">
        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
          <span className="text-xl font-black text-slate-900">{price}</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold ml-1">/ mo</span>
        </div>
      </div>
    </div>
    <div className="px-1">
      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">{title}</h3>
      <div className="flex items-center gap-1 text-slate-400 text-xs font-medium mb-4">
        <MapPin size={12} className="text-emerald-500" />
        <span>{location}</span>
      </div>
      <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700">
        <div className="flex items-center gap-1.5"><BedDouble size={16} className="text-slate-400" /><span className="text-xs font-bold">{beds} bds</span></div>
        <div className="h-4 w-[1px] bg-slate-200" />
        <div className="flex items-center gap-1.5"><Bath size={16} className="text-slate-400" /><span className="text-xs font-bold">{baths} ba</span></div>
        <div className="h-4 w-[1px] bg-slate-200" />
        <div className="flex items-center gap-1.5"><Maximize size={16} className="text-slate-400" /><span className="text-xs font-bold">{sqft} sqft</span></div>
      </div>
    </div>
  </div>
);

export default function SearchPage() {
  const propertyData = [
    { image: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848799/pexels-andreea-ch-371539-1060950_j2txml.jpg", price: "$6,100", title: "White Sands Manor", location: "Beverly Hills, CA", beds: 5, baths: 4, sqft: "4,200" },
    { image: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848798/pexels-viktoriia-kondratiuk-458099300-17174766_d54nd0.jpg", price: "$4,250", title: "The Glass Pavilion", location: "Malibu, CA", beds: 4, baths: 3, sqft: "2,850" },
    { image: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848815/pexels-ali-ramazan-ciftci-82252581-14246458_qaa4yk.jpg", price: "$5,200", title: "Obsidian Modern", location: "Seattle, WA", beds: 4, baths: 4, sqft: "3,100" },
    { image: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848805/pexels-curtis-adams-1694007-10628388_td3fto.jpg", price: "$2,950", title: "The Azure Residence", location: "Scottsdale, AZ", beds: 3, baths: 3, sqft: "1,950" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* FIXED NAVBAR: Compact Centered Search Pill */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-xl rounded-[32px] px-6 py-3 flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 p-1.5 rounded-lg shadow-lg shadow-slate-200">
            <Home className="text-white w-4 h-4" />
          </div>
          <span className="text-sm font-black tracking-tighter uppercase hidden lg:block">SwiftHome</span>
        </div>

        {/* Center: COMPACT SEARCH PILL (Fixed width to avoid stretching) */}
        <div className="flex items-center bg-slate-50 border border-slate-100 rounded-full px-2 py-1 shadow-inner max-w-md w-full mx-4">
          <div className="flex items-center gap-2 px-4 py-2 border-r border-slate-200 flex-1 min-w-0">
            <MapPin size={14} className="text-emerald-500 shrink-0" />
            <input type="text" placeholder="Beverly Hills" className="bg-transparent text-xs font-bold outline-none w-full truncate" />
          </div>
          <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 whitespace-nowrap hidden sm:block">
            Any Price
          </button>
          <button className="bg-emerald-500 text-white p-2.5 rounded-full hover:bg-slate-900 transition-all shrink-0 ml-1">
            <Search size={14} strokeWidth={3} />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button className="text-[11px] font-bold text-slate-500 hover:text-slate-900 uppercase tracking-widest hidden md:block">Login</button>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-[11px] font-bold shadow-lg shadow-slate-200">
            List House
          </button>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-7xl mx-auto pb-20">
        <div className="flex items-end justify-between mb-12">
          <h1 className="text-3xl font-bold tracking-tighter">Results in Beverly Hills <span className="text-slate-400 ml-2">(24)</span></h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold text-slate-500 hover:text-slate-900">
            <Filter size={14} /> Filter
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {propertyData.map((prop, index) => <PropertyCard key={index} {...prop} />)}
          {propertyData.map((prop, index) => <PropertyCard key={`rep-${index}`} {...prop} />)}
        </div>
      </main>
    </div>
  );
}