"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Input = ({ label, icon, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-metadata px-1">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        <input
          {...props}
          className={`w-full bg-slate-50 border border-slate-100 shadow-inner rounded-2xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
            icon ? "pl-11" : ""
          }`}
        />
      </div>
    </div>
  );
};

export const TextArea = ({ label, ...props }: { label?: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-metadata px-1">{label}</label>}
      <textarea
        {...props}
        className="w-full bg-slate-50 border border-slate-100 shadow-inner rounded-2xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all min-h-[120px]"
      />
    </div>
  );
};
