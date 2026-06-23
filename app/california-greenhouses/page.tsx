'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import { Home, Compass, Layers, ChevronRight, HelpCircle, Thermometer } from 'lucide-react';
import { motion } from 'motion/react';

export default function CaliforniaGreenhousesPage() {
  const greenhouseMetrics = [
    { zone: 'Salinas CEA Glasshouse 4', system: 'Hydroponic Drip Grid', caConc: '180 - 240 ppm', phTarget: '5.8 - 6.2', turnoverRate: '2.5 L/day' },
    { zone: 'Ventura Fruit Hoop Yards', system: 'Automated Soil Injection', caConc: '310 - 360 ppm', phTarget: '6.4 - 6.8', turnoverRate: '4.8 L/day' },
    { zone: 'fresno poly-dome complex', system: 'NFT Run-to-Waste Grid', caConc: '200 - 250 ppm', phTarget: '6.0 - 6.3', turnoverRate: '1.9 L/day' },
    { zone: 'Siskiyou Organic Nursery', system: 'Sub-Irrigation Bed Caps', caConc: '150 - 180 ppm', phTarget: '5.5 - 5.9', turnoverRate: '3.1 L/day' }
  ];

  return (
    <LayoutWrapper>
      {/* Header section with theme background image overlay */}
      <section className="relative overflow-hidden py-16 bg-emerald-950 text-emerald-100 border-b border-emerald-900">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80"
            alt="California agricultural greenhouse background"
            fill
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover opacity-20 filter brightness-[0.4] saturate-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/60 text-emerald-350 text-xs font-mono rounded-full uppercase tracking-wider border border-emerald-800">
              <Home size={12} />
              <span>Controlled Environment Node [CEA-GNH]</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              CALIFORNIA GREENHOUSES: OPTIMIZATION SYSTEMS
            </h1>
            <p className="text-emerald-300 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              Dossier on greenhouse calibration standards, hydro-nutritional injection parameters, and automated crop canopy monitoring under the CalGro registry umbrella.
            </p>
          </div>
        </div>
      </section>

      {/* Main page body */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-stone-700 leading-relaxed text-sm">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-xl font-display font-bold text-stone-900 uppercase">
                  1. The Hydroponic Calcium Calibration Constraint
                </h2>
                <p>
                  Within modern controlled-environment agriculture (CEA) across the central Coast of California, plant development rates are tightly bound by greenhouse calibration algorithms. Unlike traditional open-field crop farming, greenhouse soils or coir substrates exhibit lower buffering capacities, meaning any nutrient variance instantly triggers developmental shocks.
                </p>
                <p>
                  To secure uniform growth, commercial growers rely on soluble Calcium (Ca²⁺) salts injected into automated irrigation pipelines. Precise control of the calcium-to-potassium ratios regulates leaf stomatal dilation under artificial micro-climates, drastically reducing root rot occurrences.
                </p>
              </div>

              {/* Greenhouse Analytics Grid */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase flex items-center gap-1.5 font-sans">
                  <Thermometer className="text-emerald-700" size={18} />
                  2. Dynamic Greenhouse Mineral Feed Standards
                </h3>
                <p className="text-xs text-stone-500">
                  Daily active mineral targets validated by local state laboratory sensor interfaces.
                </p>

                <div className="overflow-x-auto border border-stone-200 rounded-lg">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="bg-stone-100 border-b border-stone-200 text-stone-700">
                        <th className="p-3">Greenhouse Facility</th>
                        <th className="p-3">Hydration System</th>
                        <th className="p-3">Dissolved Ca²⁺</th>
                        <th className="p-3">pH Target</th>
                        <th className="p-3 text-emerald-800">Flow/Day</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {greenhouseMetrics.map((row, idx) => (
                        <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                          <td className="p-3 font-semibold text-stone-900">{row.zone}</td>
                          <td className="p-3 text-stone-800">{row.system}</td>
                          <td className="p-3 text-stone-600">{row.caConc}</td>
                          <td className="p-3 text-stone-600">{row.phTarget}</td>
                          <td className="p-3 font-semibold text-emerald-800">{row.turnoverRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Informative copy detailing how calgro.com applies */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase flex items-center gap-2">
                  <Layers className="text-amber-600" size={18} />
                  3. Competitive Market Alignment for Greenhouse Operators
                </h3>
                <p>
                  Greenhouse horticulture represents a multi-billion dollar capital industry focused heavily on automation and optimization. The phonetic root of the high-value 6-letter domain <strong className="text-stone-900 font-mono">calgro.com</strong> sits directly at the intersection of California, Calcium, and Greenhouse Growth.
                </p>
                <p>
                  Owning this domain gives operators, hydroponics equipment designers, or nutrients suppliers immediate brand authority. This semantic asset registers that relevancy profile to secure deep, meaningful links across search indexes.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Asset Broker Card */}
              <div className="bg-stone-900 text-stone-100 p-6 rounded-xl border border-stone-800 space-y-4 shadow-md">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#10b981] block">
                  SYSTEM OVERLAY: SECURE TRANSFER
                </span>
                <h3 className="text-lg font-display font-bold text-white uppercase leading-tight">
                  ACQUIRE THE PREMIUM DOMAIN CALGRO.COM
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Establish complete brand and authority ownership over CalGro instantly. Transact securely using the certified GoDaddy Broker Escrow framework.
                </p>

                <div className="space-y-3 pt-2">
                  <Link
                    href="https://www.godaddy.com/domainsearch/find?domainToCheck=calgro.com"
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold py-3 px-4 rounded-lg transition-colors border border-emerald-500 shadow"
                  >
                    Godaddy Broker Escrow <ChevronRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-stone-850 hover:bg-stone-800 text-stone-300 font-mono text-xs py-2 px-4 rounded-lg transition-colors border border-stone-800"
                  >
                    Escrow Admin Access
                  </Link>
                </div>
              </div>

              {/* Technical Help Sidebar */}
              <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-200/50 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-900 flex items-center gap-1">
                  <HelpCircle size={14} />
                  Registry Diagnostics
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Hydroponic greenhouse networks represent a massive, capital-intensive branch of agricultural systems science. Secure calgro.com to lock in search index authority.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
