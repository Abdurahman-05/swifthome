import React from 'react';
import { 
  ChevronLeft, 
  Share, 
  Heart, 
  Star, 
  MapPin, 
  BedDouble, 
  Bath, 
  Maximize, 
  CheckCircle2, 
  Calendar,
  ShieldCheck,
  User,
  Coffee,
  Wifi,
  Wind
} from 'lucide-react';

const Amenity = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-4 py-4 border-b border-slate-50 group hover:bg-slate-50/50 transition-colors px-2 rounded-xl">
    <div className="text-emerald-500 bg-emerald-50 p-2 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-all">
      <Icon size={18} />
    </div>
    <span className="text-slate-600 font-semibold text-sm">{text}</span>
  </div>
);

export default function PropertyDetail() {
  // Gallery Logic: Exterior followed by your new Interior links
  const gallery = [
    {
      url: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848799/pexels-andreea-ch-371539-1060950_j2txml.jpg",
      label: "Exterior"
    },
    {
      url: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768850391/pexels-curtis-adams-1694007-3555619_smaqzk.jpg",
      label: "Living Space"
    },
    {
      url: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768850019/pexels-athenea-codjambassis-rossitto-472760075-26571197_untw22.jpg",
      label: "Master Suite"
    },
    {
      url: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768850656/pexels-andrew-5860599_cmrcfe.jpg",
      label: "Designer Kitchen"
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Premium Top Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-[0.2em] hover:text-emerald-600 transition-colors">
            <ChevronLeft size={18} strokeWidth={3} /> Back to Gallery
          </button>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-all">
              <Share size={16} /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-all">
              <Heart size={16} /> Save
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Gallery Section */}
      <section className="px-6 max-w-7xl mx-auto mt-8 mb-16">
        <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[700px]">
          {/* Main Large Exterior Image */}
          <div className="col-span-12 lg:col-span-8 row-span-2 rounded-[40px] overflow-hidden shadow-2xl relative group">
            <img src={gallery[0].url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Main Exterior" />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Main Entrance</span>
            </div>
          </div>

          {/* Interior Vertical Stack */}
          <div className="hidden lg:block lg:col-span-4 row-span-1 rounded-[40px] overflow-hidden shadow-lg relative group">
            <img src={gallery[1].url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Interior 1" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
          </div>

          <div className="hidden lg:grid lg:col-span-4 row-span-1 grid-cols-2 gap-4">
            <div className="rounded-[32px] overflow-hidden shadow-lg group">
              <img src={gallery[2].url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Interior 2" />
            </div>
            <div className="rounded-[32px] overflow-hidden shadow-lg relative group cursor-pointer">
              <img src={gallery[3].url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Interior 3" />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black text-xs uppercase tracking-widest">+ 15 More</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Layout */}
      <main className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Detail Body */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full">
              <Star size={14} className="text-amber-500 fill-amber-500" />
              <span className="text-xs font-black text-amber-700 tracking-tighter">4.9 Rare Find</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest underline underline-offset-4 cursor-pointer">Beverly Hills, CA</span>
          </div>

          <h1 className="text-6xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">White Sands <br /> Modern Manor</h1>
          
          <div className="flex flex-wrap gap-10 py-10 border-y border-slate-100 mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl"><BedDouble className="text-slate-900" size={24} /></div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rooms</p>
                <p className="text-lg font-bold">5 Bedrooms</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl"><Bath className="text-slate-900" size={24} /></div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Baths</p>
                <p className="text-lg font-bold">4.5 Baths</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl"><Maximize className="text-slate-900" size={24} /></div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Area</p>
                <p className="text-lg font-bold">4,200 sqft</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">The Space</h3>
            <p className="text-slate-500 leading-relaxed text-xl font-medium">
              Experience unparalleled sophistication in this fully-automated smart home. 
              The grand entrance leads to a double-height living room featuring 
              the specific <span className="text-slate-900 font-bold italic underline decoration-emerald-400 underline-offset-4">curated interiors</span> shown in the gallery. 
              From the Italian-marble kitchen to the private pool terrace, every inch 
              of this residence screams luxury.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">World-Class Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <Amenity icon={Wifi} text="Ultra-fast Fiber Internet" />
              <Amenity icon={Coffee} text="Designer Espresso Bar" />
              <Amenity icon={Wind} text="Central Climate Control" />
              <Amenity icon={ShieldCheck} text="24/7 Concierge Service" />
            </div>
          </div>
        </div>

        {/* Sticky Booking Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-slate-900 rounded-[48px] p-10 text-white shadow-2xl shadow-slate-300">
            <div className="flex items-start justify-between mb-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Price per month</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tighter">$6,100</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg">
                <span className="text-[10px] font-bold">Tax Inc.</span>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="bg-white/5 border border-white/10 p-5 rounded-3xl flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Duration</p>
                  <p className="font-bold text-sm">12 Months (Minimum)</p>
                </div>
                <Calendar size={18} className="text-emerald-400" />
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-3xl flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Occupants</p>
                  <p className="font-bold text-sm">Up to 6 Residents</p>
                </div>
                <User size={18} className="text-emerald-400" />
              </div>
            </div>

            <button className="w-full bg-emerald-500 text-slate-900 py-6 rounded-3xl font-black text-sm hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-emerald-500/20 uppercase tracking-[0.2em]">
              Apply to Rent
            </button>

            <p className="text-[10px] text-slate-500 text-center mt-8 font-bold uppercase tracking-widest leading-relaxed">
              * Verification required by landlord <br /> before viewing schedule.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}