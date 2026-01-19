// import React from 'react';
// import { 
//   Search, 
//   Home, 
//   MapPin, 
//   BedDouble, 
//   Bath, 
//   Maximize, 
//   Heart,
//   Building2,
//   Warehouse,
//   Palmtree,
//   Filter,
//   ArrowRight
// } from 'lucide-react';

// // --- Sub-Components ---

// const CategoryItem = ({ icon: Icon, label, active = false }: any) => (
//   <div className={`flex flex-col items-center gap-2 cursor-pointer group min-w-[80px]`}>
//     <div className={`p-4 rounded-2xl transition-all duration-300 ${active ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-500 group-hover:bg-slate-100'}`}>
//       <Icon size={24} />
//     </div>
//     <span className={`text-xs font-semibold ${active ? 'text-slate-900' : 'text-slate-500'}`}>{label}</span>
//   </div>
// );

// const PropertyCard = ({ image, price, title, location, beds, baths, sqft }: any) => (
//   <div className="group cursor-pointer">
//     <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-4">
//       <img 
//         src={image} 
//         alt={title} 
//         className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
//       />
//       <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-slate-900 hover:bg-white transition-colors">
//         <Heart size={18} />
//       </button>
//       <div className="absolute bottom-4 left-4">
//         <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl">
//           <span className="text-lg font-bold text-slate-900">{price}</span>
//           <span className="text-xs text-slate-500 font-medium">/mo</span>
//         </div>
//       </div>
//     </div>
//     <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{title}</h3>
//     <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
//       <MapPin size={14} />
//       <span>{location}</span>
//     </div>
//     <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl">
//       <div className="flex items-center gap-1.5 text-slate-600">
//         <BedDouble size={16} className="text-emerald-600" />
//         <span className="text-xs font-bold">{beds}</span>
//       </div>
//       <div className="flex items-center gap-1.5 text-slate-600">
//         <Bath size={16} className="text-emerald-600" />
//         <span className="text-xs font-bold">{baths}</span>
//       </div>
//       <div className="flex items-center gap-1.5 text-slate-600">
//         <Maximize size={16} className="text-emerald-600" />
//         <span className="text-xs font-bold">{sqft}</span>
//       </div>
//     </div>
//   </div>
// );

// // --- Main Page ---

// export default function FntInspiredLanding() {
//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
//       {/* Floating Navbar */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-slate-200/50 rounded-3xl px-6 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <div className="bg-slate-900 p-1.5 rounded-lg">
//             <Home className="text-white w-5 h-5" />
//           </div>
//           <span className="text-lg font-bold tracking-tighter">SwiftHome</span>
//         </div>
//         <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
//           <a href="#" className="text-slate-900">Discover</a>
//           <a href="#" className="hover:text-slate-900">Marketplace</a>
//           <a href="#" className="hover:text-slate-900">For Owners</a>
//         </div>
//         <button className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-sm font-bold hover:scale-105 transition-transform">
//           Sign In
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 px-6 max-w-7xl mx-auto">
//         <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden">
//           <img 
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
//             className="absolute inset-0 w-full h-full object-cover"
//             alt="Hero"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
//           <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-3xl px-6">
//             <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 tracking-tight">
//               Find your perfect stay.
//             </h1>
            
//             {/* Search Bar - Similar to FNT */}
//             <div className="bg-white p-2 rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center gap-2">
//               <div className="flex-1 flex items-center gap-3 px-6 py-3 border-r border-slate-100">
//                 <MapPin className="text-emerald-600" size={20} />
//                 <div className="flex flex-col">
//                   <span className="text-[10px] font-bold uppercase text-slate-400">Location</span>
//                   <input type="text" placeholder="Where are you going?" className="text-sm font-bold outline-none placeholder:text-slate-300 w-full" />
//                 </div>
//               </div>
//               <div className="flex-1 flex items-center gap-3 px-6 py-3">
//                 <Filter className="text-emerald-600" size={20} />
//                 <div className="flex flex-col">
//                   <span className="text-[10px] font-bold uppercase text-slate-400">Type</span>
//                   <select className="text-sm font-bold outline-none bg-transparent w-full">
//                     <option>Modern Villa</option>
//                     <option>Apartment</option>
//                     <option>Office</option>
//                   </select>
//                 </div>
//               </div>
//               <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white p-5 rounded-[24px] transition-all shadow-lg shadow-emerald-200">
//                 <Search size={24} strokeWidth={3} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-12 px-6 max-w-7xl mx-auto overflow-x-auto no-scrollbar">
//         <div className="flex items-center justify-center gap-8 md:gap-12 min-w-max">
//           <CategoryItem icon={Building2} label="Apartments" active />
//           <CategoryItem icon={Home} label="Villas" />
//           <CategoryItem icon={Palmtree} label="Resorts" />
//           <CategoryItem icon={Warehouse} label="Lofts" />
//           <CategoryItem icon={Building2} label="Offices" />
//           <CategoryItem icon={Home} label="Cabins" />
//         </div>
//       </section>

//       {/* Property Grid */}
//       <section className="py-12 px-6 max-w-7xl mx-auto">
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h2 className="text-3xl font-bold tracking-tight">Featured Listings</h2>
//             <p className="text-slate-500 font-medium">Hand-picked properties just for you.</p>
//           </div>
//           <button className="flex items-center gap-2 font-bold text-slate-900 group">
//             View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           <PropertyCard 
//             image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"
//             price="$3,200"
//             title="Skyline Penthouse"
//             location="Downtown, New York"
//             beds="3" baths="2" sqft="1,240"
//           />
//           <PropertyCard 
//             image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
//             price="$5,500"
//             title="Oceanfront Villa"
//             location="Malibu, California"
//             beds="5" baths="4" sqft="3,800"
//           />
//           <PropertyCard 
//             image="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=800"
//             price="$2,100"
//             title="Minimalist Cabin"
//             location="Aspen, Colorado"
//             beds="2" baths="1" sqft="950"
//           />
//           <PropertyCard 
//             image="https://images.unsplash.com/photo-1600607687940-47a04b629753?auto=format&fit=crop&q=80&w=800"
//             price="$4,000"
//             title="Industrial Loft"
//             location="Berlin, Germany"
//             beds="2" baths="2" sqft="1,500"
//           />
//         </div>
//       </section>

//       {/* Banner / CTA Section */}
//       <section className="px-6 py-12 max-w-7xl mx-auto">
//         <div className="bg-slate-900 rounded-[40px] p-12 relative overflow-hidden flex flex-col items-center text-center">
//           <div className="relative z-10">
//             <h2 className="text-4xl font-bold text-white mb-6">List your property today.</h2>
//             <p className="text-slate-400 max-w-md mb-10 mx-auto">Earn more by listing your home on the most trusted rental platform in the world.</p>
//             <button className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all">
//               Become a Host
//             </button>
//           </div>
//           {/* Subtle glow background */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full"></div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React from 'react';
import { 
  Search, 
  Home, 
  MapPin, 
  BedDouble, 
  Bath, 
  Maximize, 
  Heart,
  Building2,
  Warehouse,
  Palmtree,
  Filter,
  ArrowRight
} from 'lucide-react';

// --- Sub-Components ---

const CategoryItem = ({ icon: Icon, label, active = false }: any) => (
  <div className={`flex flex-col items-center gap-2 cursor-pointer group min-w-[80px]`}>
    <div className={`p-4 rounded-2xl transition-all duration-300 ${active ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-500 group-hover:bg-slate-100'}`}>
      <Icon size={24} />
    </div>
    <span className={`text-xs font-semibold ${active ? 'text-slate-900' : 'text-slate-500'}`}>{label}</span>
  </div>
);

const PropertyCard = ({ image, price, title, location, beds, baths, sqft }: any) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-slate-900 hover:bg-emerald-500 hover:text-white transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
        <Heart size={18} />
      </button>
      
      <div className="absolute bottom-4 left-4">
        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
          <span className="text-xl font-black text-slate-900">{price}</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold ml-1">/ Month</span>
        </div>
      </div>
    </div>
    
    <div className="px-1">
      <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-emerald-600 transition-colors">{title}</h3>
      <div className="flex items-center gap-1 text-slate-400 text-xs font-medium mb-4">
        <MapPin size={12} className="text-emerald-500" />
        <span>{location}</span>
      </div>
      
      <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-1.5">
          <BedDouble size={16} className="text-slate-400" />
          <span className="text-xs font-bold text-slate-700">{beds} bds</span>
        </div>
        <div className="h-4 w-[1px] bg-slate-200" />
        <div className="flex items-center gap-1.5">
          <Bath size={16} className="text-slate-400" />
          <span className="text-xs font-bold text-slate-700">{baths} ba</span>
        </div>
        <div className="h-4 w-[1px] bg-slate-200" />
        <div className="flex items-center gap-1.5">
          <Maximize size={16} className="text-slate-400" />
          <span className="text-xs font-bold text-slate-700">{sqft} sqft</span>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Page ---

export default function FntInspiredLanding() {
  const propertyData = [
    {
      image: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848798/pexels-viktoriia-kondratiuk-458099300-17174766_d54nd0.jpg",
      price: "$4,250",
      title: "The Glass Pavilion",
      location: "Beverly Hills, CA",
      beds: "4", baths: "3", sqft: "2,850"
    },
    {
      image: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848798/pexels-vinixhc-27173878_pvxqkg.jpg",
      price: "$3,800",
      title: "Minimalist Stone Villa",
      location: "Austin, TX",
      beds: "3", baths: "2", sqft: "2,100"
    },
    {
      image: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848799/pexels-andreea-ch-371539-1060950_j2txml.jpg",
      price: "$6,100",
      title: "White Sands Manor",
      location: "Miami, FL",
      beds: "5", baths: "4", sqft: "4,200"
    },
    {
      image: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848805/pexels-curtis-adams-1694007-10628388_td3fto.jpg",
      price: "$2,950",
      title: "The Azure Residence",
      location: "Scottsdale, AZ",
      beds: "3", baths: "3", sqft: "1,950"
    },
    {
      image: "https://res.cloudinary.com/djjasfjpr/image/upload/v1768848815/pexels-ali-ramazan-ciftci-82252581-14246458_qaa4yk.jpg",
      price: "$5,200",
      title: "Obsidian Modern",
      location: "Seattle, WA",
      beds: "4", baths: "4", sqft: "3,100"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] rounded-[32px] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="bg-emerald-500 p-2 rounded-xl shadow-lg shadow-emerald-200">
            <Home className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">SwiftHome</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold text-slate-500 uppercase tracking-widest">
          <a href="#" className="text-slate-900 underline underline-offset-8">Discover</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Marketplace</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Host a Home</a>
        </div>
        <button className="bg-slate-900 text-white px-7 py-3 rounded-2xl text-[13px] font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 hover:shadow-emerald-200 hover:-translate-y-0.5">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="relative h-[640px] w-full rounded-[48px] overflow-hidden shadow-2xl">
          <img 
            src={propertyData[2].image} 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Luxury House"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 text-center">
            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 border border-white/20">
              Premium Property Marketplace
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter leading-[0.9]">
              Find your space <br /> to breathe.
            </h1>
            
            {/* Search Bar - High Contrast */}
            <div className="bg-white p-3 rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center gap-2 border border-slate-100">
              <div className="flex-1 flex items-center gap-4 px-6 py-4 border-r border-slate-100 group">
                <MapPin className="text-emerald-500 group-hover:scale-110 transition-transform" size={22} />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Location</span>
                  <input type="text" placeholder="Where do you want to live?" className="text-sm font-bold outline-none placeholder:text-slate-300 w-full bg-transparent" />
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 px-6 py-4 group">
                <Filter className="text-emerald-500 group-hover:scale-110 transition-transform" size={22} />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Budget</span>
                  <select className="text-sm font-bold outline-none bg-transparent w-full appearance-none cursor-pointer">
                    <option>$2,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10k +</option>
                  </select>
                </div>
              </div>
              <button className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 rounded-[24px] font-black text-sm hover:bg-emerald-500 transition-all flex items-center gap-3">
                SEARCH <Search size={18} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em] mb-3 block">Marketplace</span>
            <h2 className="text-4xl font-bold tracking-tighter text-slate-900">Recommended for you</h2>
          </div>
          <button className="flex items-center gap-3 font-bold text-[13px] uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors group">
            Discover all properties <div className="p-2 bg-slate-50 rounded-full group-hover:bg-emerald-50"><ArrowRight size={16} /></div>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {propertyData.map((prop, index) => (
            <PropertyCard key={index} {...prop} />
          ))}
          {/* Reusing some images for grid variety */}
          <PropertyCard 
            {...propertyData[0]} 
            title="The Emerald Suite" 
            location="San Francisco, CA" 
            price="$4,900" 
          />
          <PropertyCard 
            {...propertyData[1]} 
            title="Sands Point Loft" 
            location="Malibu, CA" 
            price="$7,200" 
          />
        </div>
      </section>
    </div>
  );
}