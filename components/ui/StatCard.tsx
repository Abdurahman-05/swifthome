"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  growth: number;
  isPositive?: boolean;
}

export const StatCard = ({ label, value, growth, isPositive = true }: StatCardProps) => {
  return (
    <div className="bg-white border border-slate-100 rounded-[32px] p-6 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-metadata mb-4">{label}</p>
      <div className="flex items-end justify-between">
        <h3 className="font-sora font-extrabold text-3xl text-slate-950">{value}</h3>
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
          isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
        }`}>
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {isPositive ? "+" : "-"}{growth}%
        </div>
      </div>
      
      {/* Progress Bar (Decorative) */}
      <div className="mt-6 h-1 w-full bg-slate-50 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${isPositive ? "bg-emerald-500" : "bg-rose-500"}`}
          style={{ width: `${60 + Math.random() * 30}%` }}
        />
      </div>
    </div>
  );
};
