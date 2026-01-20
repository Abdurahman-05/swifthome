"use client";

import React from "react";
import Image from "next/image";
import { Heart, Bed, Bath, Move, MapPin } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  category: string;
}

export const PropertyCard = ({
  image,
  price,
  address,
  beds,
  baths,
  sqft,
  category,
}: PropertyCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-4">
        <Image
          src={image}
          alt={address}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Price Badge */}
        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
          <span className="font-sora font-bold text-slate-950">{price}</span>
        </div>

        {/* Heart Icon */}
        <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 hover:text-rose-500 transition-colors shadow-sm">
          <Heart size={18} />
        </button>

        {/* Category Overlay */}
        <div className="absolute bottom-5 left-5">
          <span className="text-metadata bg-slate-950/20 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20">
            {category}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="px-2">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-sora font-bold text-lg text-slate-950 leading-tight mb-1 truncate">
              {address.split(',')[0]}
            </h3>
            <div className="flex items-center gap-1 text-slate-500">
              <MapPin size={14} className="text-emerald-500" />
              <span className="text-sm font-medium">{address}</span>
            </div>
          </div>
        </div>

        {/* Spec Bar */}
        <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between border border-slate-100">
          <div className="flex items-center gap-2">
            <Bed size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-slate-900">{beds}</span>
            <span className="text-metadata">Beds</span>
          </div>
          <div className="w-px h-4 bg-slate-200" />
          <div className="flex items-center gap-2">
            <Bath size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-slate-900">{baths}</span>
            <span className="text-metadata">Baths</span>
          </div>
          <div className="w-px h-4 bg-slate-200" />
          <div className="flex items-center gap-2">
            <Move size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-slate-900">{sqft}</span>
            <span className="text-metadata">Sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};
