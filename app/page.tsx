'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import { 
  Sprout, 
  MapPin, 
  Calculator, 
  ShoppingBag, 
  Cpu, 
  TrendingUp, 
  Shield, 
  Award, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import heroBg from '@/src/assets/images/calgro_hero_precision_fields_1781969376874.jpg';

export default function HomePage() {
  const sectors = [
    {
      id: 'agronomy',
      title: 'Agricultural Agronomy',
      initials: 'AGR',
      desc: 'Formulation data grids for Cal-Gro calcium-based agricultural enhancers and plant nutrients. Soil ph adjustment parameters and crop health guidelines.',
      stats: 'Acr-Index: 0.94 | Keywords: "Cal-Gro fertilizer", "Calcium plant nutrition"',
      link: '/agronomy',
      icon: Sprout,
      color: 'border-emerald-500/30 hover:border-emerald-500',
      bgImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'growers',
      title: 'California Growers',
      initials: 'GWR',
      desc: 'Collective registry of organic orchards, almond ranches, viticulture networks, and sustainable growers in the Central Valley and coastlines.',
      stats: 'Geo-Nodes: 1,480+ | Keywords: "California organic grow", "CalGrowers registry"',
      link: '/california-growers',
      icon: MapPin,
      color: 'border-amber-500/30 hover:border-amber-500',
      bgImage: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'grocers',
      title: 'Grocers & Distribution',
      initials: 'LOG',
      desc: 'Logistics models and freight corridors for California local grocery delivery networks, food safety audits, and grocer distribution supply chains.',
      stats: 'Chain Nodes: 430+ | Keywords: "California grocers guild", "Cal grocery freight"',
      link: '/grocers',
      icon: ShoppingBag,
      color: 'border-blue-500/30 hover:border-blue-500',
      bgImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'calculus',
      title: 'Calculus of Growth',
      initials: 'CAL',
      desc: 'Computational models of exponential growth, geometrical limits, resource calculators, and algorithmic expansion constraints for the "Cal-Gro" metric.',
      stats: 'F-Equations: 24 | Keywords: "calculus growth curves", "resource growth algorithms"',
      link: '/calculus-growth',
      icon: Calculator,
      color: 'border-rose-500/30 hover:border-rose-500',
      bgImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'calibration',
      title: 'Calibration Metrology',
      initials: 'MET',
      desc: 'Metrology standard benchmarks, precision laboratory equipment calibration standards, and scientific measuring systems for commercial plant development.',
      stats: 'Standards: ISO-17025 compliant | Keywords: "precision calibration gro", "instrumentation labs"',
      link: '/calibration-group',
      icon: Cpu,
      color: 'border-purple-500/30 hover:border-purple-500',
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'physiology',
      title: 'Calcium Botany Physiology',
      initials: 'PHY',
      desc: 'Molecular biological database tracking calcium signaling (Ca), cell wall elongation dynamics, and botanical development under laboratory standards.',
      stats: 'Citations: 230+ | Keywords: "calcium signaling botanical", "cell cell elongation calcium"',
      link: '/calcium-physiology',
      icon: TrendingUp,
      color: 'border-teal-500/30 hover:border-teal-500',
      bgImage: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <LayoutWrapper>
      {/* 1. Hero / Domain Asset Overview Card with Ambient Agricultural Backdrop */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-stone-950 text-stone-100 border-b border-stone-900">
        {/* Background Image with dual-gradient overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={heroBg}
            alt="California precision agricultural landscape with metrology overlay"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover opacity-95 brightness-[0.75] saturate-[1.1] transition-opacity duration-500"
          />
          {/* Subtle clean gradients to gently anchor content and prevent any header/footer color clashing */}
          <div className="absolute inset-0 bg-stone-950/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/25"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hand: Domain Asset Info - floating cleanly with high-end typography */}
            <div className="lg:col-span-7 space-y-8 py-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/70 backdrop-blur-sm text-emerald-400 text-xs font-mono font-bold rounded-full border border-emerald-800/40">
                <Shield size={12} className="text-emerald-500" />
                <span>PREMIUM DIGITAL ESTATE HOLDING</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-none uppercase">
                CALGRO<span className="text-emerald-500">.COM</span>
              </h2>
              <p className="text-stone-100 text-base sm:text-lg leading-relaxed font-sans max-w-2xl drop-shadow">
                You have reached the central directory, soil metrology portal, and California grower registry for the ultra-premium domain asset <strong className="text-white select-all font-mono py-0.5 px-1.5 bg-stone-950/90 rounded border border-stone-850">calgro.com</strong>. This platform catalogues and links diverse industrial, agricultural, and technological interpretations of &quot;Cal-Gro&quot; to build high-authority organic indexing surface area.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=calgro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all transform hover:scale-[1.02] shadow-xl flex items-center gap-2 cursor-pointer"
                >
                  Acquire This Domain <ArrowRight size={14} />
                </a>
                <Link
                  href="#directory"
                  className="bg-stone-950/80 backdrop-blur-sm border border-stone-800 hover:border-stone-600 text-stone-200 px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  Explore Research Quadrants <ChevronRight size={14} />
                </Link>
              </div>

              {/* Authority signals */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-800/40 max-w-2xl">
                <div>
                  <span className="text-[10px] font-mono text-stone-300 block uppercase tracking-wider">TLD Extension</span>
                  <span className="text-sm font-mono font-bold text-stone-100 drop-shadow">.COM (G-Class)</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-300 block uppercase tracking-wider">Commercial Intent</span>
                  <span className="text-sm font-mono font-bold text-amber-400 animate-pulse drop-shadow">VERY HIGH (Agri)</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-300 block uppercase tracking-wider">Registrar Status</span>
                  <span className="text-sm font-mono font-bold text-emerald-400 drop-shadow">GODADDY BUYER ESCROW</span>
                </div>
              </div>
            </div>

            {/* Right Hand: Interactive Valuation Display (Frosted Glass UI) */}
            <div className="lg:col-span-5">
              <div className="backdrop-blur-md bg-stone-950/45 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">DOMAIN APPRAISAL INSIGHT</span>
                  <h3 className="font-display font-medium text-lg text-white uppercase tracking-tight">GoDaddy Valuation Data</h3>
                </div>

                {/* Glass metrics stack */}
                <div className="divide-y divide-white/5 border-t border-b border-white/5 py-2">
                  <div className="flex justify-between items-center py-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-stone-300 block uppercase tracking-wider">OFFICIAL VALUATION</span>
                      <p className="text-3xl sm:text-4xl font-mono text-emerald-400 font-extrabold tracking-tight">$88,888 <span className="text-sm text-stone-400 font-normal">USD</span></p>
                    </div>
                    <Award className="text-emerald-400 animate-pulse" size={28} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div>
                      <span className="text-[10px] font-mono text-stone-300 block uppercase tracking-wider mb-1">MONTHLY SEARCH VOL</span>
                      <span className="text-xs font-mono font-bold text-amber-400 uppercase">HIGH KEYWORD INTENT</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-stone-300 block uppercase tracking-wider mb-1">BRANDABILITY SCORE</span>
                      <span className="text-xs font-mono font-bold text-white uppercase">98% (A+ RATING)</span>
                    </div>
                  </div>
                </div>

                {/* Call To Actions */}
                <div className="space-y-4">
                  <a
                    href="https://www.godaddy.com/domainsearch/find?domainToCheck=calgro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-mono text-xs font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-xl uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                  >
                    Acquire via GoDaddy Broker <ArrowRight size={14} />
                  </a>

                  {/* Clean verification desk */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-stone-400 block uppercase tracking-widest">SECURE VERIFICATION DESK</span>
                    <Link
                      href="/contact"
                      className="w-full text-center bg-stone-900/40 hover:bg-stone-900/80 border border-white/10 hover:border-white/20 text-stone-300 font-mono text-[10px] font-semibold py-2 px-3 rounded-lg block uppercase tracking-wider transition-colors"
                    >
                      Resolve Human Verification Key &gt;
                    </Link>
                    <p className="text-[9px] text-stone-400 leading-normal">
                      *Official registry listing. Administrator communication details unlock automatically upon completing secure clearance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Semantic SEO Registry Intro Panel */}
      <section className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden border-t border-white/[0.03]">
        {/* Subtle decorative grid background for high-tech look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Large watermark font in the background */}
        <div className="absolute top-10 right-4 lg:right-20 text-[120px] sm:text-[160px] font-display font-black text-white/[0.01] uppercase select-none pointer-events-none tracking-widest leading-none">
          CG-TAXONOMY
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase block font-semibold">WEST COAST SEMANTIC DENSITY MAP</span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white uppercase tracking-tight leading-none">
              CALGRO DIAGRAMMATIC REGISTRIES
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed font-sans max-w-2xl">
              Search engines reward dense, original, highly-specialized context structures. This directory maps definitions of CalGro, covering organic soil indicators, calculus growth formulas, grocery logistics lanes, and physiological calibration layers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="directory">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div 
                  key={sector.id} 
                  className="group relative overflow-hidden backdrop-blur-md bg-stone-900/10 hover:bg-stone-900/20 border border-white/5 rounded-2xl p-8 transition-all duration-500 ease-out flex flex-col justify-between shadow-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.03)] min-h-[300px]"
                >
                  {/* Subtle, elegant background image hover effect */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 ease-out select-none pointer-events-none">
                    <Image
                      src={sector.bgImage}
                      alt={`${sector.title} backdrop`}
                      fill
                      sizes="(max-w-7xl) 33vw, 100vw"
                      referrerPolicy="no-referrer"
                      className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale saturate-0"
                    />
                  </div>

                  {/* Gigantic initials on the right-hand side of card */}
                  <div className="absolute right-4 top-4 text-[95px] font-mono font-black text-white/[0.02] group-hover:text-emerald-500/[0.04] transition-colors duration-500 select-none pointer-events-none uppercase leading-none">
                    {sector.initials}
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-stone-900/60 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-500/40">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-medium text-white group-hover:text-emerald-400 text-lg uppercase tracking-wide transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed group-hover:text-stone-300 transition-colors">
                      {sector.desc}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-white/5 relative z-10 space-y-3 font-mono">
                    <span className="text-[9px] text-stone-500 block uppercase tracking-wider group-hover:text-stone-400 transition-colors">
                      {sector.stats}
                    </span>
                    <Link
                      href={sector.link}
                      className="text-xs font-bold text-white hover:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-all"
                    >
                      Browse registry details &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Strategic Domain Value FAQ */}
      <section className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden border-t border-white/[0.03]">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/[0.015] rounded-full blur-3xl pointer-events-none select-none"></div>
        
        {/* Large watermark text on the left hand behind text */}
        <div className="absolute top-1/4 left-4 lg:left-12 text-[140px] sm:text-[180px] font-display font-black text-white/[0.01] uppercase select-none pointer-events-none tracking-widest leading-none">
          CG-Q&amp;A
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-left mb-16 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase block font-semibold">ACQUISITION INSIGHTS</span>
            <h2 className="text-3xl font-display font-medium text-white uppercase tracking-tight leading-none">
              CALGRO.COM VALUE COMPASS
            </h2>
            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Key benchmarks for potential buyers, California organizations, and registrar bidding agencies exploring direct purchase of calgro.com.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="backdrop-blur-md bg-stone-900/10 border border-white/5 hover:border-white/10 p-8 rounded-2xl space-y-3 transition-colors">
              <h3 className="font-display font-bold text-white text-sm uppercase tracking-wide">
                Why build a semantic directory for calgro.com?
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                By index-linking actual California Soil databases, Calcium Agronomy protocols, and Calibration metrology records, the domain calgro.com gains contextual relevance, establishing high search authority.
              </p>
            </div>

            <div className="backdrop-blur-md bg-stone-900/10 border border-white/5 hover:border-white/10 p-8 rounded-2xl space-y-3 transition-colors">
              <h3 className="font-display font-bold text-white text-sm uppercase tracking-wide">
                How does escrow transfer work?
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                All transactions are routed through GoDaddy Premium Domain Brokerage. Escrow holding secures correct DNS transfer to buyers immediately upon funding clearance, protecting both parties.
              </p>
            </div>

            <div className="backdrop-blur-md bg-stone-900/10 border border-white/5 hover:border-white/10 p-8 rounded-2xl space-y-3 transition-colors">
              <h3 className="font-display font-bold text-white text-sm uppercase tracking-wide">
                Will the registry catalog remain on the domain?
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                Upon purchase of the domain asset on GoDaddy, the buyer obtains full global rights to either delete, host alternative business layouts, or retain this high-value semantic directory mapping calgro.com.
              </p>
            </div>

            <div className="backdrop-blur-md bg-stone-900/10 border border-white/5 hover:border-white/10 p-8 rounded-2xl space-y-3 transition-colors">
              <h3 className="font-display font-bold text-white text-sm uppercase tracking-wide">
                How do I submit an offer?
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                Direct registrar communications can be routed through GoDaddy Premium Domain Brokerage for <strong>CalGro.com</strong>, or by connecting through our secure client inquiry page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
