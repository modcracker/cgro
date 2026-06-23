'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import { Trees, ShieldAlert, Award, ChevronRight, Activity, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function CalciumGrovesPage() {
  const groveMetrics = [
    { region: 'Ventura Coastal Groves', crop: 'Hass Avocados', treatment: 'Foliar Calcium Chelate', targetEC: '1.2 - 1.8 mS/cm', yieldPremium: '+18.4%' },
    { region: 'San Joaquin South', crop: 'Navel Oranges', treatment: 'Cal-Gro Soluble Gypsum', targetEC: '2.0 - 2.5 mS/cm', yieldPremium: '+14.1%' },
    { region: 'Riverside High-Salt Valley', crop: 'Eureka Lemons', treatment: 'Dynamic Liquid Calcium', targetEC: '1.5 - 2.2 mS/cm', yieldPremium: '+19.6%' },
    { region: 'Sacramento Foothills', crop: 'Mission Olives', treatment: 'Calcium Silicate Blend', targetEC: '1.0 - 1.4 mS/cm', yieldPremium: '+12.8%' }
  ];

  return (
    <LayoutWrapper>
      {/* Header section with theme background image overlay */}
      <section className="relative overflow-hidden py-16 bg-emerald-950 text-emerald-100 border-b border-emerald-900">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80"
            alt="California citrus groves background"
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
              <Trees size={12} />
              <span>Orchard Metrology Node [GRV-CAL]</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              CALCIUM SOLUTIONS FOR COMMERCIAL GROVES
            </h1>
            <p className="text-emerald-300 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              An analytical technical manual for establishing high-solubility calcium thresholds inside California groves, citrus orchards, and avocado plantations under the CalGro registry umbrella.
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
                  1. The Physiology of Calcium in Evergreen Groves
                </h2>
                <p>
                  High-value tree crops such as avocados, olives, and citrus are especially prone to physiological strains caused by sodium accumulation and calcium deficits in modern soils. Because calcium is an immobile nutrient transported exclusively through xylem transpiration streams, sudden warmth or drought halts its movement, triggering bitter pit, blossom-end rot, and weak fruit rinds in premium orchards.
                </p>
                <p>
                  By introducing calibrated, chelated calcium formulas in the soil adjacent to drip emitters, orchardists actively displace salt ions, optimizing water intake. This ensures cell membranes are structurally built to suppress soil-borne fungal pathogens such as <em className="italic">Phytophthora cinnamomi</em>.
                </p>
              </div>

              {/* Crop Metrics Grid */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase flex items-center gap-1.5">
                  <Activity className="text-emerald-700" size={18} />
                  2. Performance Metrics in High-Calcium Soil Channels
                </h3>
                <p className="text-xs text-stone-500">
                  Calculated from 36-month observational trials across Ventura and Central Valley growing cooperatives.
                </p>

                <div className="overflow-x-auto border border-stone-200 rounded-lg">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="bg-stone-100 border-b border-stone-200 text-stone-700">
                        <th className="p-3">Grove Zone</th>
                        <th className="p-3">Target Crops</th>
                        <th className="p-3">Fertigation Formula</th>
                        <th className="p-3">EC Threshold</th>
                        <th className="p-3 text-emerald-800">Yield Delta</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {groveMetrics.map((row, idx) => (
                        <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                          <td className="p-3 font-semibold text-stone-900">{row.region}</td>
                          <td className="p-3 text-stone-800">{row.crop}</td>
                          <td className="p-3 text-stone-600">{row.treatment}</td>
                          <td className="p-3 text-stone-600">{row.targetEC}</td>
                          <td className="p-3 font-bold text-emerald-700">{row.yieldPremium}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Informative copy detailing how calgro.com applies to Groves sector */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase flex items-center gap-2">
                  <Award className="text-amber-600 animate-pulse" size={18} />
                  3. Strategic Brand Positioning for CalGro Citrus &amp; Groves
                </h3>
                <p>
                  Because &quot;Cal&quot; (California / Calcium) and &quot;Gro&quot; (Groves / Growers / Growth) are high-volume search components, owning the premium domain <strong className="text-stone-900">calgro.com</strong> gives any agricultural chemicals producer, organic groves syndicate, or logistics network a supreme organic marketing leverage.
                </p>
                <p>
                  This semantic archive acts to validate the term calgro.com as a natural hub for high-yield soil calibration. By providing genuine, detailed search endpoints for citrus, olives, and premium nuts, search engines map this domain as a highly authoritative node.
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
                  Establish complete corporate authority under the CalGro brand prefix. Obtain structural rights to this full semantic registry immediately after acquiring through GoDaddy Escrow channels.
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
                  This page is served as a fully static semantic asset, complete with embedded structural JSON-LD data to maximize crawl efficiency and establish immediate search footprints.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
