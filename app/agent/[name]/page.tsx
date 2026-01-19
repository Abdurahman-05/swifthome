import React from 'react';
import { 
  CheckCircle2, Star, Mail, Phone, Calendar, 
  MapPin, Home as HomeIcon, ChevronRight 
} from 'lucide-react';

export default function AgentProfile() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      {/* Top Banner Area */}
      <div className="h-64 bg-slate-50 w-full border-b border-slate-100" />
      
      <main className="max-w-6xl mx-auto px-6 -mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Profile Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-100 rounded-[40px] p-8 shadow-xl shadow-slate-200/50 sticky top-10">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                  className="rounded-3xl w-full h-full object-cover shadow-lg"
                  alt="Agent"
                />
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg">
                  <CheckCircle2 size={16} />
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold tracking-tighter">Alexander Sterling</h1>
                <p className="text-emerald-500 font-bold text-xs uppercase tracking-widest mt-1">Certified Luxury Partner</p>
                
                <div className="flex items-center justify-center gap-1 mt-4 text-amber-500">
                  <Star size={14} fill="currentColor" />
                  <span className="text-sm font-bold text-slate-900">4.96</span>
                  <span className="text-slate-400 text-sm font-medium ml-1">(142 reviews)</span>
                </div>
              </div>

              <div className="space-y-4 border-t border-slate-100 pt-8">
                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2">
                  <Mail size={16} /> Message Agent
                </button>
                <button className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all border border-slate-100 flex items-center justify-center gap-2">
                  <Phone size={16} /> Call Now
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Listings</p>
                  <p className="text-lg font-bold">24</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Joined</p>
                  <p className="text-lg font-bold">2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Agent Content */}
          <div className="lg:col-span-8 pt-24">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">About Alexander</h2>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                Alexander Sterling has over 12 years of experience specializing in the 
                Beverly Hills and Malibu rental markets. Known for his "client-first" 
                philosophy, he has helped hundreds of professionals find their 
                ideal architectural sanctuaries.
              </p>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-y border-slate-100 py-10">
               <div className="flex items-center gap-4">
                  <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600"><HomeIcon size={24} /></div>
                  <div><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sold</p><p className="text-xl font-bold">$140M+</p></div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600"><MapPin size={24} /></div>
                  <div><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Area</p><p className="text-xl font-bold">CA, USA</p></div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600"><Calendar size={24} /></div>
                  <div><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Response Time</p><p className="text-xl font-bold">&lt; 1 hr</p></div>
               </div>
            </div>

            {/* Agent's Listings */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Active Listings</h2>
              <button className="text-[11px] font-black text-emerald-500 uppercase tracking-widest hover:underline">View all</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Simplified Listing Card */}
               {[1, 2].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-video rounded-[32px] overflow-hidden mb-4 shadow-md">
                      <img src={`https://res.cloudinary.com/djjasfjpr/image/upload/v1768848799/pexels-andreea-ch-371539-1060950_j2txml.jpg`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Listing" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">Modern Terrace Villa</h4>
                        <p className="text-xs text-slate-400 font-bold">$5,200 /mo</p>
                      </div>
                      <div className="p-2 bg-slate-50 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
               ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}