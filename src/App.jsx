import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { ArrowRight, ChevronLeft, ChevronRight, Settings, ShieldCheck, Cpu, Phone, Mail, MapPin, Award } from 'lucide-react';
import './App.css';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('products'); // 'products' or 'machines'
  const [openFaq, setOpenFaq] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Product Data
  const products = [
    {
      id: 1,
      image: '/products/crane-rope-drum-9-.webp',
      title: 'Crane Rope Drum Assembly',
      category: 'Heavy Duty Lifting',
      desc: 'Precision-grooved crane rope drums engineered for heavy industrial lifting and cranes. Designed for optimal wire rope nesting.',
      specs: ['Material: High-Grade Carbon Steel', 'Groove Profile: Custom Machined Helical', 'Diameter: Up to 1200mm', 'Certification: ISO 9001:2015 Approved']
    },
    {
      id: 2,
      image: '/products/Hydraulic-Cylinder-Piston-Rods.jpg',
      title: 'Hydraulic Cylinder & Piston Rods',
      category: 'Fluid Power Components',
      desc: 'High-tensile chrome-plated hydraulic pistons and cylinders manufactured to withstand extreme pressure and rigorous continuous operation.',
      specs: ['Plating: Hard Chrome Plated (25-50 microns)', 'Tolerance: ISO f7 Fitting', 'Pressure: Up to 350 Bar', 'Application: Construction & Marine']
    },
    {
      id: 3,
      image: '/products/wire-rope-drum-assembly.jpg',
      title: 'Precision Wire Rope Drum',
      category: 'Winches & Hoists',
      desc: 'Heavy-duty steel wire rope drums with perfect groove spacing to maximize wire rope lifespan and prevent overlap friction.',
      specs: ['Nesting: Double Helix Grooving', 'Tensile Strength: 450 MPa', 'Dynamic Balanced: Yes', 'Finish: Anti-Corrosive Epoxy Coated']
    },
    {
      id: 4,
      image: '/products/Drum_3.jpg',
      title: 'Heavy Duty Custom Industrial Drum',
      category: 'Power Transmission',
      desc: 'Heavy industrial drums custom-grooved to meet individual client blueprints for winches, hoists, and material handling systems.',
      specs: ['Customization: Made to Blueprint', 'Max Length: 3200mm', 'Heat Treatment: Stress Relieved', 'Groove Pitch: Precise CNC Finished']
    },
    {
      id: 5,
      image: '/products/images (1).jpg',
      title: 'High-Precision Cylindrical Shafts',
      category: 'Mechanical Drives',
      desc: 'Superior quality cylindrical drives and shafts turned and ground on advanced lathe systems to extreme tolerances.',
      specs: ['Precision Grind: Ra 0.4 roughness', 'Max Weight: 2.5 Tons', 'Alloy: EN8, EN19, EN24, SS304/316', 'Testing: Ultrasonic Flaw Detected']
    },
    {
      id: 6,
      image: '/products/extra-04130878.jpg',
      title: 'Precision Industrial Gears & Drives',
      category: 'Gear Assemblies',
      desc: 'Custom-cut spur, helical, and bevel gear wheels crafted using advanced milling machines for seamless mechanical power transmission.',
      specs: ['Module: Up to 12 Mod', 'Material: Case Hardened Steel', 'Tooth Profile: Ground Grounded', 'Efficiency: 98.5% Power Rate']
    }
  ];

  // Machines Data
  const machines = [
    {
      id: 1,
      image: '/machines/cnc.png',
      title: 'CNC Turning Center',
      category: 'Precision Machining',
      desc: 'High-speed automated computer numerical control turning centers for manufacturing highly complex industrial components with extreme dimensional accuracy.',
      specs: ['Control: Fanuc / Siemens Multi-Axis', 'Precision: ±0.005mm Tolerance', 'Capacity: Up to 500mm Turning Dia', 'Ideal for: Mass Production Cylindrical Parts']
    },
    {
      id: 2,
      image: '/machines/lathe.png',
      title: 'Heavy Duty Lathe Machine',
      category: 'Conventional Turning',
      desc: 'Massive conventional and semi-automated lathes capable of handling extremely large and heavy cylindrical industrial shafts and drums.',
      specs: ['Bed Length: Up to 4000mm', 'Weight Limit: Handles up to 5 Tons', 'Machining Speed: Stepless Variable', 'Applications: Large Drum & Shaft Boring']
    },
    {
      id: 3,
      image: '/machines/milling.png',
      title: 'Industrial Milling Machine',
      category: 'Shaping & Slotting',
      desc: 'Advanced multi-axis milling systems used to slice, slot, and groove heavy steel alloys into precise industrial gear profiles and keyways.',
      specs: ['Spindle Taper: ISO 50 Power', 'Table Size: 1600mm x 500mm', 'Movement: Automatic 3-Axis Travel', 'Best for: Gear Teeth Cutting & Keyway Slots']
    },
    {
      id: 4,
      image: '/machines/vmc.png',
      title: 'Vertical Machining Center (VMC)',
      category: 'Advanced 3D Milling',
      desc: 'State-of-the-art VMC milling setups providing high-precision structural drilling, boring, and profiling for heavy machinery plates.',
      specs: ['Spindle Speed: 10,000 RPM', 'Tool Changer: 24-Pocket ATC', 'Accuracy: 3-Micron Positioning', 'Best for: Complex Molds & Precision Castings']
    }
  ];

  // Auto Slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % products.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className={`min-h-screen flex flex-col selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Absolute Gradient Elements matching Gold/Crimson theme */}
      <div className="absolute top-[10%] right-0 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px] -z-0 pointer-events-none"></div>
      <div className="absolute top-[40%] left-0 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[140px] -z-0 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] -z-0 pointer-events-none"></div>

      {/* 1. Header/Navbar */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* 2. Professional Hero Image Slider Section */}
      <section className={`relative w-full border-b transition-colors duration-300 py-12 md:py-20 z-10 overflow-hidden ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
        <div className="max-w-[1650px] mx-auto px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <Award size={14} className="text-amber-500" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-amber-500">Industry Leader Since 1995</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-none uppercase">
              Heavy Duty <br />
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Industrial</span> <br />
              Engineering
            </h1>
            
            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium">
              We specialize in custom manufacturing high-precision hoist rope drums, hydraulic pistons, gears, and structural assemblies for critical industrial operations worldwide.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#quote" className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/15">
                Request Quick Quote
                <ArrowRight size={14} />
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300">
                Explore Portfolio
              </a>
            </div>

            {/* Proudly Made in India Trust Badge Card */}
            <div className={`flex items-center gap-4 p-4 rounded-2xl max-w-md transition-colors duration-300 ${isDarkMode ? 'bg-slate-950/40 border border-slate-800/60' : 'bg-slate-100 border border-slate-200'}`}>
              <img src="/made_in_india.png" alt="Proudly Made in India" className="h-14 w-14 object-cover rounded-xl border border-amber-500/20 shadow-md shadow-amber-500/5" />
              <div>
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Proudly Manufactured In India</p>
                <p className={`text-xs font-semibold mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Supporting domestic material infrastructure & self-reliance.</p>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Slider */}
          <div className="lg:col-span-7 relative group">
            {/* Slider Frame Card */}
            <div className="relative w-full aspect-[16/10] bg-slate-950 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl">
              {products.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                >
                  {/* Real Product Image with Hover Zoom */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  {/* Info Overlay at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-2 md:space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">{item.category}</span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">{item.title}</h3>
                    <p className="text-xs text-slate-300 max-w-xl font-medium leading-relaxed hidden md:block">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* Slider Manual Arrows */}
              <button onClick={handlePrevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-colors shadow-lg">
                <ChevronLeft size={18} />
              </button>
              <button onClick={handleNextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-colors shadow-lg">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Slider Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4 z-20 relative">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide ? 'w-8 bg-amber-500' : 'w-2 bg-slate-700 hover:bg-slate-500'}`}
                ></button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Dynamic Category Tabs & Professional Showcase Grid */}
      <section id="showcase" className="py-20 max-w-[1650px] mx-auto px-8 xl:px-12 z-10 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-amber-500"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Corporate Showroom</span>
            <span className="h-[2px] w-6 bg-amber-500"></span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-black tracking-tight uppercase ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>Our Industrial Portfolio</h2>
          <p className={`text-sm font-semibold leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Discover our high-precision manufacturing outputs and state-of-the-art machinery capabilities, engineered to meet the absolute highest heavy-duty standards.
          </p>

          {/* Clean Segmented Tab Control */}
          <div className={`inline-flex p-1 rounded-2xl gap-1 mt-4 border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'products' ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md' : `${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'}`}`}
            >
              Manufactured Products ({products.length})
            </button>
            <button
              onClick={() => setActiveTab('machines')}
              className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'machines' ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md' : `${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'}`}`}
            >
              In-House Machine Plant ({machines.length})
            </button>
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'products' ? (
            // Product Showcase Cards
            products.map((item) => (
              <div
                key={item.id}
                className={`group flex flex-col border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 ${isDarkMode ? 'bg-slate-900/50 hover:bg-slate-900 border-slate-800/80 hover:border-amber-500/20' : 'bg-white border-slate-200 text-slate-900 hover:border-amber-500/30 shadow-sm'}`}
              >
                {/* Product Image Box */}
                <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/90 border border-slate-800 rounded-lg px-2.5 py-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-amber-500">{item.category}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className={`text-lg font-black uppercase tracking-tight group-hover:text-amber-500 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs font-semibold leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Specs List */}
                  <div className={`rounded-xl p-4 border space-y-1.5 ${isDarkMode ? 'bg-slate-950/60 border-slate-800/40 text-slate-300' : 'bg-slate-50 border-slate-100 text-slate-700'}`}>
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wide">
                        <span className="h-1.5 w-1.5 bg-amber-500 rounded-full shrink-0"></span>
                        {spec}
                      </div>
                    ))}
                  </div>

                  {/* Get Quote Action */}
                  <a href="#quote" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/5 group-hover:bg-amber-500 group-hover:text-slate-950 border border-white/5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300">
                    Get Blueprint Pricing
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))
          ) : (
            // Machines Showcase Cards
            machines.map((item) => (
              <div
                key={item.id}
                className={`group flex flex-col border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 ${isDarkMode ? 'bg-slate-900/50 hover:bg-slate-900 border-slate-800/80 hover:border-amber-500/20' : 'bg-white border-slate-200 text-slate-900 hover:border-amber-500/30 shadow-sm'}`}
              >
                {/* Machine Image Box */}
                <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/90 border border-slate-800 rounded-lg px-2.5 py-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-amber-500">{item.category}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className={`text-lg font-black uppercase tracking-tight group-hover:text-amber-500 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs font-semibold leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Specs List */}
                  <div className={`rounded-xl p-4 border space-y-1.5 ${isDarkMode ? 'bg-slate-950/60 border-slate-800/40 text-slate-300' : 'bg-slate-50 border-slate-100 text-slate-700'}`}>
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wide">
                        <span className="h-1.5 w-1.5 bg-red-600 rounded-full shrink-0"></span>
                        {spec}
                      </div>
                    ))}
                  </div>

                  {/* Machine Specifications Action */}
                  <a href="#quote" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/5 group-hover:bg-amber-500 group-hover:text-slate-950 border border-white/5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300">
                    Inquire Machining Rate
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 4. Contact & Quote Request Form section */}
      <section id="quote" className={`py-20 border-t z-10 relative transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-150'}`}>
        <div className="max-w-[1650px] mx-auto px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-amber-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Contact Desk</span>
            </div>
            
            <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>Let's Discuss Your Project Blueprint</h2>
            <p className={`text-sm font-semibold leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Have customized dimensional drawings, tolerances, or steel grade specifications? Submit your details or visit our workshop to finalize your order.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 pt-4">
              <div className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors duration-300 ${isDarkMode ? 'bg-slate-950/50 border-slate-800/60' : 'bg-slate-50 border-slate-200'}`}>
                <div className="h-10 w-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl">
                  <Phone size={18} />
                </div>
                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Call Workshop Direct</p>
                  <p className={`text-sm font-black mt-0.5 ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>8983590409 / 8108525883</p>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors duration-300 ${isDarkMode ? 'bg-slate-950/50 border-slate-800/60' : 'bg-slate-50 border-slate-200'}`}>
                <div className="h-10 w-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl">
                  <Mail size={18} />
                </div>
                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Email Engineering Team</p>
                  <p className={`text-sm font-black mt-0.5 ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>shivshaktiengineeringworks78@gmail.com</p>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors duration-300 ${isDarkMode ? 'bg-slate-950/50 border-slate-800/60' : 'bg-slate-50 border-slate-200'}`}>
                <div className="h-10 w-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Industrial Unit Location</p>
                  <p className={`text-sm font-black mt-0.5 leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>
                    GALA NO.4, KOPARKAR INDUSTRIAL ESTATE, OPP BMC HOSPITAL, SUBHAS NAGAR, NAHUR (W)
                  </p>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors duration-300 ${isDarkMode ? 'bg-slate-950/50 border-slate-800/60' : 'bg-slate-50 border-slate-200'}`}>
                <div className="h-10 w-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl">
                  <span className="text-[10px] font-black">GST</span>
                </div>
                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>GSTIN Registration</p>
                  <p className="text-sm font-black text-amber-500 mt-0.5 font-mono">27ABEPY0019N1ZB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Quote Card Form */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl relative">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3.5 rounded-xl text-sm font-semibold transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Company Name</label>
                  <input type="text" placeholder="Steel Works Corp" className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3.5 rounded-xl text-sm font-semibold transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address *</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3.5 rounded-xl text-sm font-semibold transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number *</label>
                  <input type="tel" placeholder="+91-0000000000" className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3.5 rounded-xl text-sm font-semibold transition-all" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Product / Machining Interest *</label>
                <select className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3.5 rounded-xl text-sm font-semibold text-slate-400 transition-all" required>
                  <option value="">Choose Category</option>
                  <option value="drum-assembly">Crane Rope Drum Assembly</option>
                  <option value="cylinder">Hydraulic Cylinder & Rods</option>
                  <option value="custom">Custom Milling & Gear Cutting</option>
                  <option value="mass-production">Mass CNC Turning Production</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Blueprint Notes & Tolerances</label>
                <textarea rows="4" placeholder="Enter dimensional tolerances, material grade (e.g., EN8, SS316), and quantities required..." className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3.5 rounded-xl text-sm font-semibold transition-all"></textarea>
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/15">
                Submit Engineering Brief
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 5. Why Choose Us (Our Key Strengths) Section */}
      <section className="py-20 max-w-[1650px] mx-auto px-8 xl:px-12 z-10 relative">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-amber-500"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Our Core Pillars</span>
            <span className="h-[2px] w-6 bg-amber-500"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">Why Partner With Us?</h2>
          <p className="text-slate-400 text-sm font-medium leading-relaxed">
            We combine decades of machining experience, advanced automated technology, and strict quality control to deliver flawless engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className={`p-8 border rounded-3xl space-y-4 hover:border-amber-500/40 hover:shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`}>
            <div className="h-12 w-12 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-2xl">
              <Settings size={22} className="animate-spin-slow" />
            </div>
            <h3 className={`text-lg font-black uppercase tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>Precision Machining</h3>
            <p className={`text-xs font-semibold leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Achieving micron-level tolerances down to ±0.005mm using our high-end vertical machining centers (VMC) and CNC grinders.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`p-8 border rounded-3xl space-y-4 hover:border-amber-500/40 hover:shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`}>
            <div className="h-12 w-12 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-2xl">
              <ShieldCheck size={22} />
            </div>
            <h3 className={`text-lg font-black uppercase tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>Certified Quality</h3>
            <p className={`text-xs font-semibold leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Every single product undergoes rigorous ultrasonic flaw detection, hard-chrome thickness testing, and structural load analysis.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`p-8 border rounded-3xl space-y-4 hover:border-amber-500/40 hover:shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`}>
            <div className="h-12 w-12 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-2xl">
              <Cpu size={22} />
            </div>
            <h3 className={`text-lg font-black uppercase tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>Accredited Materials</h3>
            <p className={`text-xs font-semibold leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Forged with premium carbon steel and specialized alloys (EN8, EN19, EN24, SS304/316) sourced from ISO-certified foundries.
            </p>
          </div>

          {/* Card 4 */}
          <div className={`p-8 border rounded-3xl space-y-4 hover:border-amber-500/40 hover:shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'}`}>
            <div className="h-12 w-12 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-2xl">
              <Award size={22} />
            </div>
            <h3 className={`text-lg font-black uppercase tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>Decades of Trust</h3>
            <p className={`text-xs font-semibold leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Serving major industrial cranes, winches, power transmission units, and material-handling corporations for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Interactive FAQ Accordion Section */}
      <section className={`py-20 border-t z-10 relative transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/40 border-slate-900' : 'bg-slate-100 border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-amber-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">FAQ Desk</span>
              <span className="h-[2px] w-6 bg-amber-500"></span>
            </div>
            <h2 className={`text-3xl font-black uppercase tracking-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>Frequently Asked Questions</h2>
            <p className={`text-sm font-semibold leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Have questions about our custom fabrication procedures, material testing, or delivery schedules? Find answers below.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {[
              {
                q: "Do you manufacture custom products according to client blueprints or drawings?",
                a: "Yes, absolutely! Over 80% of our production is completely customized. We machine rope drums, hydraulic cylinders, shafts, and gear assemblies exactly according to your provided dimensional blueprints, tolerances, and technical drawings."
              },
              {
                q: "What grades of steel and raw materials do you utilize?",
                a: "We work with certified, high-grade steel alloys including Carbon Steel, EN8, EN19, EN24, SS304, and SS316. All materials are sourced from accredited vendors, and mill test reports can be furnished upon request."
              },
              {
                q: "Are your crane rope drums dynamically balanced?",
                a: "Yes, definitely. To guarantee safe crane operations and minimize cable wear, all helical grooved winch and crane rope drums undergo state-of-the-art dynamic balancing tests on our heavy-duty lathe networks."
              },
              {
                q: "What is your typical production lead time?",
                a: "Standard custom machining orders are completed within 7 to 20 working days depending on dimensional complexity and raw material availability. Rapid-turnaround options are available for emergency machine breakdowns."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-sm md:text-base font-black text-white uppercase tracking-tight">{faq.q}</span>
                  <span className={`h-6 w-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-amber-500 transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-40 border-t border-slate-900' : 'max-h-0'}`}
                >
                  <div className="p-6 text-xs md:text-sm font-semibold text-slate-400 leading-relaxed bg-slate-950">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Sleek Industrial Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 z-10 relative text-slate-500 text-center text-xs">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <p className="font-black text-slate-300 uppercase tracking-[0.25em] text-sm">Shiv Shakti Engineering Works</p>
          
          <div className="text-[11px] font-semibold text-slate-400 space-y-2 max-w-2xl mx-auto leading-relaxed">
            <p>GALA NO.4, KOPARKAR INDUSTRIAL ESTATE, OPP BMC HOSPITAL, SUBHAS NAGAR, NAHUR (W)</p>
            <p className="font-mono text-amber-500/80">GSTIN: 27ABEPY0019N1ZB</p>
            <p>Email: shivshaktiengineeringworks78@gmail.com | Phone: 8983590409 / 8108525883</p>
          </div>

          <div className="w-16 h-[1px] bg-slate-800 mx-auto"></div>

          <p className="font-medium text-[10px] text-slate-600">
            © {new Date().getFullYear()} Shiv Shakti Engineering Works. All Rights Reserved. Manufactured with pride in India to global engineering standards.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
