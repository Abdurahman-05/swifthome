"use client";

import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { StatCard } from "@/components/ui/StatCard";
import { 
  BarChart3, 
  Users, 
  Home, 
  ArrowUpRight, 
  Plus, 
  MoreHorizontal, 
  LayoutDashboard,
  Settings,
  Bell,
  Search,
  CheckCircle2,
  Clock
} from "lucide-react";
import Image from "next/image";

const LEADS = [
  { id: 1, name: "Sarah Jenkins", email: "sarah.j@example.com", property: "Modern Glass Mansion", date: "2 hours ago", status: "New" },
  { id: 2, name: "Mark Thompson", email: "m.thompson@example.com", property: "Ocean View Malibu", date: "5 hours ago", status: "Contacted" },
  { id: 3, name: "Emily Davis", email: "emily.d@example.com", property: "Skyline Way Villa", date: "Yesterday", status: "Qualified" },
  { id: 4, name: "James Wilson", email: "j.wilson@example.com", property: "Modern Glass Mansion", date: "2 days ago", status: "Closed" },
  { id: 5, name: "Olivia Brown", email: "olivia.b@example.com", property: "Evergreen Terrace", date: "3 days ago", status: "Contacted" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-slate-100 flex-col p-8 sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
            <Home size={18} />
          </div>
          <span className="font-sora font-extrabold text-xl text-slate-950">SwiftHome</span>
        </div>

        <nav className="space-y-2 flex-1">
          {[
            { label: "Dashboard", icon: LayoutDashboard, active: true },
            { label: "Properties", icon: Home, active: false },
            { label: "Inbox", icon: Bell, active: false },
            { label: "Analytics", icon: BarChart3, active: false },
            { label: "Settings", icon: Settings, active: false },
          ].map((item) => (
            <button key={item.label} className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
              item.active ? "bg-emerald-50 text-emerald-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            }`}>
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto bg-slate-950 rounded-2xl p-6 text-white relative overflow-hidden">
          <p className="text-xs font-bold text-white/60 mb-2 uppercase tracking-widest">Support Plan</p>
          <h4 className="font-sora font-bold mb-4">You're on Pro Plan</h4>
          <button className="w-full bg-emerald-500 text-white py-2 rounded-xl text-xs font-bold hover:bg-emerald-600 transition-all">
            Upgrade Now
          </button>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-full max-w-md shadow-inner">
            <Search size={18} className="text-slate-400" />
            <input type="text" placeholder="Search analytics or leads..." className="bg-transparent border-none outline-none text-sm w-full text-slate-900" />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white" />
            </button>
            <div className="w-px h-6 bg-slate-100 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-950">Alexander Knight</p>
                <p className="text-[10px] text-metadata text-emerald-600 font-bold">Premier Agent</p>
              </div>
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-100">
                <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Profile" width={40} height={40} className="object-cover" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-sora font-extrabold text-slate-950 mb-1">Owner's Overview</h1>
              <p className="text-slate-500 font-medium">Here's what's happening with your properties today.</p>
            </div>
            <button className="bg-emerald-500 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
              <Plus size={20} />
              Add New Property
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            <StatCard label="Total Revenue" value="$842,500" growth={12.5} />
            <StatCard label="Active Listings" value="34" growth={4.2} />
            <StatCard label="New Leads" value="128" growth={24.8} />
            <StatCard label="Avg. Response" value="14m 20s" growth={8.1} isPositive={false} />
          </div>

          {/* Table Section */}
          <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-sora font-extrabold text-slate-950 text-xl">Recent Incoming Leads</h3>
              <button className="text-metadata text-emerald-600 font-bold hover:underline">View All Leads</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-8 py-4 text-metadata">Client Name</th>
                    <th className="px-8 py-4 text-metadata">Inquiry Property</th>
                    <th className="px-8 py-4 text-metadata">Date Received</th>
                    <th className="px-8 py-4 text-metadata">Current Status</th>
                    <th className="px-8 py-4 text-metadata"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {LEADS.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
                            {lead.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-bold text-slate-950 text-sm">{lead.name}</p>
                            <p className="text-xs text-slate-500 font-medium">{lead.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <p className="text-sm font-bold text-slate-900">{lead.property}</p>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Clock size={14} />
                          <span className="text-xs font-medium">{lead.date}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          lead.status === "New" ? "bg-blue-50 text-blue-600" :
                          lead.status === "Contacted" ? "bg-amber-50 text-amber-600" :
                          lead.status === "Qualified" ? "bg-emerald-50 text-emerald-600" :
                          "bg-slate-100 text-slate-600"
                        }`}>
                          {lead.status === "Qualified" && <CheckCircle2 size={10} />}
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}