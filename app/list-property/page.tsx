"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Input, TextArea } from "@/components/ui/Input";
import { 
  Building2, 
  MapPin, 
  Image as ImageIcon, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  DollarSign,
  Bed,
  Bath,
  Move,
  Plus
} from "lucide-react";

const STEPS = ["Basic Details", "Location", "Media", "Premium Features"];

export default function ListPropertyPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24 px-6">
      <Navbar variant="search" />

      <div className="container mx-auto max-w-4xl">
        {/* Stepper Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-sora font-extrabold text-slate-950 mb-8 text-center">List Your Property</h1>
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />
            {STEPS.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 font-bold ${
                  i < currentStep ? "bg-emerald-500 border-emerald-500 text-white" :
                  i === currentStep ? "bg-white border-emerald-500 text-emerald-500 shadow-lg shadow-emerald-500/20" :
                  "bg-white border-slate-200 text-slate-400"
                }`}>
                  {i < currentStep ? <CheckCircle2 size={18} /> : i + 1}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${
                  i === currentStep ? "text-slate-950" : "text-slate-400"
                }`}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-xl shadow-slate-200/50">
          {currentStep === 0 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="Property Title" placeholder="e.g. Modern Glass Mansion" />
                <div className="space-y-2">
                  <label className="text-metadata px-1">Property Category</label>
                  <select className="w-full bg-slate-50 border border-slate-100 shadow-inner rounded-2xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer">
                    <option>Luxe Mansions</option>
                    <option>Coastal Retreats</option>
                    <option>Modern Villas</option>
                    <option>Mountain Escapes</option>
                  </select>
                </div>
              </div>
              <TextArea label="Description" placeholder="Tell us about the property's unique features..." />
              <div className="grid grid-cols-3 gap-6">
                <Input label="Beds" type="number" icon={<Bed size={16} />} defaultValue={0} />
                <Input label="Baths" type="number" icon={<Bath size={16} />} defaultValue={0} />
                <Input label="Sqft" type="number" icon={<Move size={16} />} defaultValue={0} />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <Input label="Full Address" placeholder="123 Luxury Way, Beverly Hills, CA" icon={<MapPin size={18} />} />
              <div className="grid grid-cols-2 gap-8">
                <Input label="City" placeholder="Beverly Hills" />
                <Input label="Zip Code" placeholder="90210" />
              </div>
              <div className="aspect-video w-full bg-slate-100 rounded-[32px] flex flex-col items-center justify-center border-2 border-dashed border-slate-200 text-slate-400 gap-4">
                <MapPin size={32} />
                <p className="font-medium text-sm">Property map location preview will appear here</p>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[4/5] bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center text-slate-400 gap-4 group cursor-pointer hover:border-emerald-500 transition-colors">
                  <ImageIcon size={48} className="group-hover:text-emerald-500 transition-colors" />
                  <div className="text-center">
                    <p className="font-bold text-slate-950">Upload Main Exterior</p>
                    <p className="text-xs">Drag & drop or click to browse</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-300 hover:border-emerald-200 transition-colors cursor-pointer">
                      <Plus size={24} />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400 text-center font-medium">Support JPG, PNG, WEBP (Max 10MB per image)</p>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <Input label="Proposed Asking Price" placeholder="e.g. 4,250,000" icon={<DollarSign size={18} />} />
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Smart Home System",
                  "Swimming Pool",
                  "Home Theater",
                  "Wine Cellar",
                  "Garage (3+ Cars)",
                  "Garden / Backyard",
                  "Security System",
                  "Solar Panels"
                ].map((tag) => (
                  <label key={tag} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors group">
                    <input type="checkbox" className="w-5 h-5 rounded-lg accent-emerald-500" />
                    <span className="font-bold text-slate-900 text-sm">{tag}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
            <button 
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 font-bold px-6 py-3 rounded-2xl transition-all ${
                currentStep === 0 ? "opacity-0 pointer-events-none" : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <ArrowLeft size={18} />
              Previous Step
            </button>
            
            <button 
              onClick={nextStep}
              className="bg-slate-950 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-950/20 group"
            >
              {currentStep === STEPS.length - 1 ? "Publish Listing" : "Continue"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-400 text-xs font-medium">
          Draft automatically saved at 11:24 PM • <button className="text-emerald-600 font-bold hover:underline">Clear all Fields</button>
        </p>
      </div>
    </main>
  );
}
