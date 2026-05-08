import { useState } from 'react';
import { User, Globe, Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#quote' },
    { name: 'Products', href: '#showcase' },
    { name: 'Machinery', href: '#showcase' },
    { name: 'Contact us', href: '#quote' }
  ];

  return (
    <header className={`w-full border-b shadow-sm relative z-[100] transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`}>

      {/* 1. Top Bar (Utility bar) */}
      <div className={`hidden lg:flex justify-end items-center px-12 py-1.5 border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/60 border-slate-900 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
        <div className="flex items-center gap-6 text-xs font-semibold">
          <a href="#register" className={`flex items-center gap-1.5 transition-colors ${isDarkMode ? 'hover:text-amber-500' : 'hover:text-blue-600'}`}>
            <User size={13} />
            Sign in / Register
          </a>
          <span className="text-slate-300">|</span>
          <a href="#global" className={`flex items-center gap-1.5 transition-colors ${isDarkMode ? 'hover:text-amber-500' : 'hover:text-blue-600'}`}>
            <Globe size={13} />
            SSEW Global Network
          </a>
        </div>
      </div>

      {/* 2. Main Header (Logo, Brand & Menu) */}
      <div className="w-full pl-2 pr-6 py-1.5 flex items-center justify-between">

        {/* Brand Logo & Name */}
        <div className="flex items-center gap-1">
          <div className="h-20 w-20 flex items-center justify-center p-0.5 hover:scale-110 transition-all duration-300 cursor-pointer shrink-0">
            <svg className="h-full w-full filter drop-shadow-[0_2px_8px_rgba(217,119,6,0.15)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="30%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#fbbf24" />
                  <stop offset="80%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#92400e" />
                </linearGradient>
              </defs>

              <g fill="url(#goldGrad)">
                {/* Center Tine (Pointed Blade) */}
                <path d="M50,4 L54,28 L51,30 L51,44 L49,44 L49,30 L46,28 Z" />

                {/* Left Curved Tine */}
                <path d="M49,36 C41,35 32.5,30 36,15 C37,11 41,11 41,13 C41,15 38.5,17 38.5,21 C38.5,28 45.5,32 49,32 Z" />

                {/* Right Curved Tine */}
                <path d="M51,36 C59,35 67.5,30 64,15 C63,11 59,11 59,13 C59,15 61.5,17 61.5,21 C61.5,28 54.5,32 51,32 Z" />

                {/* Connecting Base */}
                <path d="M45,42 L55,42 L53.5,45 L46.5,45 Z" />

                {/* Tripundra (Forehead Marks) */}
                {/* Top bar */}
                <rect x="23" y="52" width="54" height="4.5" rx="2.25" />
                {/* Middle bar */}
                <rect x="17" y="60" width="66" height="4.5" rx="2.25" />
                {/* Bottom bar */}
                <rect x="23" y="68" width="54" height="4.5" rx="2.25" />

                {/* Central Eye / Oval */}
                <ellipse cx="50" cy="62.25" rx="6.5" ry="11" fill="none" stroke="url(#goldGrad)" strokeWidth="3.5" />
                {/* Red Tilak Bindu */}
                <circle cx="50" cy="62.25" r="4" fill="#dc2626" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tight leading-none select-none flex items-center">
              <span className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>SHIV</span>&nbsp;
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">SHAKTI</span>
            </span>
            <span className="text-xs font-black tracking-wide-02 text-red-600 uppercase mt-0.5 select-none">
              Engineering Works
            </span>
          </div>
        </div>

        {/* Right Side Desktop Navigation Links & Controls */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`whitespace-nowrap px-3 xl:px-4 py-2 text-xs xl:text-sm font-black uppercase tracking-wider transition-all hover:scale-105 ${isDarkMode ? 'text-slate-300 hover:text-amber-500' : 'text-slate-700 hover:text-blue-600'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme Mode Toggle Button (Enlarged and Prominent) */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`h-11 w-11 border transition-all flex items-center justify-center hover:scale-110 shrink-0 rounded-2xl shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-800 text-amber-500 hover:bg-slate-800/80 shadow-amber-500/5' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={20} className="text-amber-500 animate-pulse" /> : <Moon size={20} className="text-slate-700" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${isDarkMode ? 'hover:bg-slate-900 text-slate-200' : 'hover:bg-slate-50 text-slate-700'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* 4. Highly Responsive Interactive Mobile Menu Drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[88px] z-[90] lg:hidden transition-all duration-300 border-t flex flex-col p-6 space-y-6 overflow-y-auto ${isDarkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'} ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}
      >
        <div className="space-y-3">
          {menuItems.map((item) => (
            <div key={item.name} className={`border-b pb-3 ${isDarkMode ? 'border-slate-900' : 'border-slate-100'}`}>
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-left text-sm font-black uppercase tracking-wider transition-colors ${isDarkMode ? 'text-slate-200 hover:text-amber-500' : 'text-slate-800 hover:text-blue-600'}`}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Utility Links */}
        <div className={`pt-4 border-t flex flex-col gap-3 ${isDarkMode ? 'border-slate-900' : 'border-slate-100'}`}>
          <a href="#register" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-2 text-sm font-bold transition-colors ${isDarkMode ? 'text-slate-300 hover:text-amber-500' : 'text-slate-600 hover:text-blue-600'}`}>
            <User size={16} />
            Sign in / Register
          </a>
          <a href="#global" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-2 text-sm font-bold transition-colors ${isDarkMode ? 'text-slate-300 hover:text-amber-500' : 'text-slate-600 hover:text-blue-600'}`}>
            <Globe size={16} />
            SSEW Global Network
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
