'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Sprout, 
  MapPin, 
  Calculator, 
  ShoppingBag, 
  Cpu, 
  ExternalLink,
  ChevronRight,
  ChevronDown,
  TrendingUp,
  Mail,
  Shield,
  HelpCircle,
  Menu,
  X,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Index Portal', path: '/', icon: Sprout },
    { name: 'Agronomy', path: '/agronomy', icon: Sprout },
    { name: 'California Growers', path: '/california-growers', icon: MapPin },
    { name: 'Calculus & Growth', path: '/calculus-growth', icon: Calculator },
    { name: 'Grocery Supply', path: '/grocers', icon: ShoppingBag },
    { name: 'Calibration Metrology', path: '/calibration-group', icon: Cpu },
    { name: 'Calcium Biology', path: '/calcium-physiology', icon: TrendingUp },
    { name: 'Agronomy Directory', path: '/seo-directory', icon: BookOpen },
    { name: 'Asset Transfer', path: '/domain-asset', icon: Shield },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic SEO & Domain status bar modeled after subhauler/jalh */}
      <div className="bg-stone-900 text-stone-300 py-2.5 px-4 text-xs font-mono border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-stone-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>DOMAIN ORG_NODE: <strong className="text-emerald-400 font-semibold">calgro.com</strong></span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="hidden md:inline">INDEXING RATIO: <span className="text-stone-200">HIGH-AUTHORITY</span></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-400">ACQUISITION BROKERAGE AVAILABLE</span>
            <a 
              href="https://www.godaddy.com/domainsearch/find?domainToCheck=calgro.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-bold underline decoration-dotted"
            >
              Verify GoDaddy Registry <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 transition-transform group-hover:scale-105">
                  <Sprout size={16} />
                </div>
                <span className="font-display font-black tracking-wider text-white text-base uppercase">
                  CAL<span className="text-emerald-500">GRO</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg text-xs font-mono tracking-tight transition-all duration-200 ${
                  pathname === '/'
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 font-bold'
                    : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Overview
              </Link>

              {/* Sectors Dropdown Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setSectorsDropdownOpen(true)}
                onMouseLeave={() => setSectorsDropdownOpen(false)}
              >
                <button
                  onClick={() => setSectorsDropdownOpen(!sectorsDropdownOpen)}
                  className={`px-3 py-2 rounded-lg text-xs font-mono tracking-tight transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                    sectorsDropdownOpen || ['/agronomy', '/california-growers', '/calculus-growth', '/grocers', '/calibration-group', '/calcium-physiology'].includes(pathname)
                      ? 'bg-emerald-950/40 text-emerald-400 font-bold border border-emerald-800/20'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Sectors</span>
                  <ChevronDown size={12} className={`transition-transform duration-200 ${sectorsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Items */}
                <AnimatePresence>
                  {sectorsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-64 rounded-xl bg-stone-900/95 border border-white/5 backdrop-blur-md shadow-2xl z-50 p-2 space-y-1"
                    >
                      {[
                        { name: 'Soil Agronomy', path: '/agronomy', desc: 'Amendment formulations & metrics' },
                        { name: 'California Growers', path: '/california-growers', desc: 'West Coast grower union' },
                        { name: 'Calculus of Growth', path: '/calculus-growth', desc: 'Mathematical curves & limits' },
                        { name: 'Grocery Distribution', path: '/grocers', desc: 'Supply corridor analytics' },
                        { name: 'Calibration Metrology', path: '/calibration-group', desc: 'ISO scientific benchmarks' },
                        { name: 'Calcium Biology', path: '/calcium-physiology', desc: 'Molecular botanical signaling' },
                      ].map((subItem) => {
                        const isSubActive = pathname === subItem.path;
                        return (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            onClick={() => setSectorsDropdownOpen(false)}
                            className={`block p-2 rounded-lg text-left transition-all duration-150 ${
                              isSubActive
                                ? 'bg-emerald-950/60 text-emerald-400 font-semibold border border-emerald-800/30'
                                : 'text-stone-300 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <span className="text-xs font-mono block">{subItem.name}</span>
                            <span className="text-[10px] text-stone-500 font-sans block leading-none mt-0.5 group-hover:text-stone-400">{subItem.desc}</span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/seo-directory"
                className={`px-3 py-2 rounded-lg text-xs font-mono tracking-tight transition-all duration-200 ${
                  pathname === '/seo-directory'
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 font-bold'
                    : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Directory Index
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/domain-asset"
                className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-tight transition-all shadow-md flex items-center gap-1.5"
              >
                Acquire Domain <ChevronRight size={14} />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-stone-300 hover:text-white p-2 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-white/5 bg-stone-950/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-mono ${
                        isActive 
                          ? 'bg-emerald-950/60 text-emerald-400 font-bold border border-emerald-800/25' 
                          : 'text-stone-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon size={16} />
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-4 px-3 border-t border-white/5">
                  <Link
                    href="/domain-asset"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-emerald-500 text-stone-950 p-2.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 shadow-md animate-pulse"
                  >
                    Acquire Domain calgro.com <ExternalLink size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer with color, spacious grid, and fixed mobile alignment */}
      <footer className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-300 pt-16 pb-12 overflow-hidden font-sans border-t-2 border-t-emerald-500/20">
        {/* Colorful ambient accents to remove the monochrome feel */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none select-none"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl pointer-events-none select-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-stone-800/80">
            
            {/* Left side: Info & Links (spans 7 cols on tablet, 8 on desktop to avoid stacking) */}
            <div className="col-span-1 md:col-span-7 lg:col-span-8 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 block uppercase font-bold">
                  CALGRO DIRECTORY INFORMATION
                </span>
                <h3 className="text-white font-display font-black text-lg uppercase tracking-wide">
                  CAL<span className="text-emerald-500">_</span>GRO <span className="text-stone-400 font-normal">TECHNICAL INDEX</span>
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed max-w-2xl">
                  An informational directory cataloging the agronomic, biological, and analytical applications of the CalGro name—detailing soil calcium amendments, crop growth modeling, calibration metrology standards, and domain asset inquiries.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-stone-500 block uppercase">DIRECTORY INDEX</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-xs font-mono">
                    <li>
                      <Link href="/agronomy" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                        <span className="text-stone-600 group-hover:text-emerald-500 transition-colors">&gt;</span> Soil Agronomy
                      </Link>
                    </li>
                    <li>
                      <Link href="/california-growers" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                        <span className="text-stone-600 group-hover:text-emerald-500 transition-colors">&gt;</span> Organic Growers
                      </Link>
                    </li>
                    <li>
                      <Link href="/calculus-growth" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                        <span className="text-stone-600 group-hover:text-emerald-500 transition-colors">&gt;</span> Calculus Models
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-directory" className="text-stone-350 hover:text-emerald-400 font-semibold transition-colors flex items-center gap-1.5 group">
                        <span className="text-emerald-500 group-hover:scale-110 transition-transform">&gt;</span> Agronomy Directory
                      </Link>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-xs font-mono">
                    <li>
                      <Link href="/grocers" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                        <span className="text-stone-600 group-hover:text-emerald-500 transition-colors">&gt;</span> California Grocers
                      </Link>
                    </li>
                    <li>
                      <Link href="/calibration-group" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                        <span className="text-stone-600 group-hover:text-emerald-500 transition-colors">&gt;</span> Metrology Lab
                      </Link>
                    </li>
                    <li>
                      <Link href="/calcium-physiology" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                        <span className="text-stone-600 group-hover:text-emerald-500 transition-colors">&gt;</span> Calcium Biology
                      </Link>
                    </li>
                    <li>
                      <Link href="/domain-asset" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                        <span className="text-stone-600 group-hover:text-emerald-500 transition-colors">&gt;</span> Asset Transfer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side: Secure Contact CTA (spans 5 cols on tablet, 4 on desktop) */}
            <div className="col-span-1 md:col-span-5 lg:col-span-4 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 block mb-1 uppercase font-bold text-center md:text-left">SECURE ACQUISITION & CHANNEL</span>
              <div className="bg-stone-900/40 p-5 rounded-xl border border-stone-800/80 space-y-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-stone-200">
                  <Shield size={16} className="text-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">GoDaddy Registry Escrow</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
                  The premium domain asset <strong className="text-stone-200">calgro.com</strong> is listed for purchase. Buy or bid securely through GoDaddy Escrow.
                </p>
                
                {/* 2x Size Prominent GoDaddy Button */}
                <a
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=calgro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-mono font-extrabold text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/10 cursor-pointer uppercase tracking-wider"
                >
                  <ExternalLink size={15} /> Buy on GoDaddy Tracker
                </a>

                <div className="border-t border-stone-800/85 pt-3">
                  <p className="text-[10px] text-stone-500 leading-normal mb-2">
                    For general administrative questions or custom proposals:
                  </p>
                  {/* Smaller footprint contact button (half thickness, e.g. py-1.5 text-[10px]) */}
                  <Link
                    href="/contact"
                    className="w-full bg-stone-950 hover:bg-stone-900 border border-stone-850 hover:border-stone-850 text-stone-400 hover:text-stone-200 font-mono font-bold text-[10px] py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <Mail size={12} /> Open Contact Gateway
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bottom Bar with Balanced UX */}
          <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[11px] font-mono text-stone-500">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 text-center sm:text-left">
              <span>&copy; {currentYear} <span className="text-emerald-400">CalGro Technical Index</span>. All Rights Reserved. Not associated with other agricultural entities.</span>
              <div className="flex items-center justify-center gap-2">
                <span className="hidden sm:inline text-stone-800">|</span>
                <Link 
                  href="/sitemap.xml" 
                  className="text-stone-400 hover:text-emerald-400 visited:text-stone-400 active:text-stone-400 transition-colors underline decoration-dotted px-1"
                >
                  Sitemap
                </Link>
                <span className="text-stone-800">|</span>
                <Link 
                  href="/robots.txt" 
                  className="text-stone-400 hover:text-emerald-400 visited:text-stone-400 active:text-stone-400 transition-colors underline decoration-dotted px-1"
                >
                  Robots
                </Link>
              </div>
            </div>
            
            {/* Elegant Feelize Promo and Link */}
            <div className="text-stone-500 bg-stone-950/60 py-1.5 px-3 rounded border border-stone-800/80 flex items-center justify-center gap-2 flex-wrap text-center lg:text-right max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <span className="text-[10px]">Designed and developed with</span>
              <a 
                href="https://feelize.com/start" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-300 hover:text-emerald-400 font-bold transition-all hover:underline flex items-center gap-0.5 text-[10px]"
              >
                Feelize <ExternalLink size={9} className="inline text-stone-500" />
              </a>
              <span className="text-stone-800">|</span>
              <span className="text-[10px] text-stone-400">Agricultural Information &amp; Directories</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
