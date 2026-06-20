'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import { ShoppingBag, TrendingUp, Compass, Anchor, ShieldCheck } from 'lucide-react';

export default function GrocersPage() {
  const freightLanes = [
    { origin: 'Central Valley Central (Fresno Hub)', destination: 'Los Angeles Port Logistics', weightRating: '80,000 lbs max', transportType: 'Reefer Intermodal', delayRisk: 'Low' },
    { origin: 'Salinas Packing Facility 2', destination: 'San Francisco Retail Hubs', weightRating: '64,000 lbs avg', transportType: 'Dry Van Fleet', delayRisk: 'Minimal' },
    { origin: 'Bakersfield Almond Warehouses', destination: 'Oakland Export Terminal', weightRating: '74,000 lbs max', transportType: 'Container Grid', delayRisk: 'Moderate' },
    { origin: 'Ventura Fruit Processing Yard', destination: 'San Diego Regional Depot', weightRating: '45,000 lbs avg', transportType: 'Reefer Freight', delayRisk: 'Low' }
  ];

  return (
    <LayoutWrapper>
      {/* Header section with theme background image overlay */}
      <section className="relative overflow-hidden py-16 bg-stone-950 text-stone-100 border-b border-stone-900">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
            alt="California grocery logistics produce background"
            fill
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover opacity-20 filter brightness-[0.4] saturate-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900/60 text-stone-300 text-xs font-mono rounded-full uppercase tracking-wider border border-stone-800">
              <ShoppingBag size={12} />
              <span>Logistics Quad [GRO-CORR]</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              CALIFORNIA GROCERS &amp; DISTRIBUTORS
            </h1>
            <p className="text-stone-400 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              Tracking network logistics, freight corridors, and delivery corridors for regional grocery distributors, independent food safety cooperatives, and supermarkets under the term CalGro.
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
                  1. California Independent Grocery Corridors
                </h2>
                <p>
                  To preserve nutritional density and prevent bacterial decay across California&apos;s premium horticultural output, large agricultural chains (such as <strong className="text-stone-900">California Grocers Association</strong> members and independent food retailers) maintain real-time freight metrics. Rapid transportation from field to retail layout requires precise cold-chain logs.
                </p>
                <p>
                  The <strong className="text-stone-900">CalGro</strong> logistics index details routing benchmarks and weight restrictions for heavy freight trucks hauling high-solubility calcium-treated fruits and greens along Interstate 5 and Highway 99 corridors.
                </p>
              </div>

              {/* Freight data layout */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase flex items-center gap-1.5">
                  <Compass className="text-stone-800" size={18} />
                  2. Registered Cal-Grocery Freight Corridors
                </h3>
                <p className="text-xs text-stone-500">
                  Calculated using average weekly vehicle dispatch intervals and regulatory weight boundaries.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {freightLanes.map((lane, idx) => (
                    <div key={idx} className="p-4 bg-stone-55 border border-stone-200 rounded-lg flex flex-col justify-between hover:border-emerald-600 transition-colors">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono text-stone-400">CORRIDOR AGENT #{idx+10}</span>
                        <h4 className="font-display font-medium text-stone-900 text-sm">{lane.origin}</h4>
                        <span className="text-xs font-mono text-stone-500">&rarr; {lane.destination}</span>
                      </div>
                      <div className="pt-3 border-t border-stone-200/50 mt-3 flex justify-between text-[11px] font-mono text-stone-600">
                        <span>{lane.weightRating}</span>
                        <span className="text-emerald-700 font-bold">{lane.transportType}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informative copy detailing CGA, and how calgro.com applies */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase">
                  3. Competitive Market Alignment for Premium Grocers
                </h3>
                <p>
                  Because &quot;Cal&quot; (California) and &quot;Gro&quot; (Grocers / Grocery) are incredibly high-volume search parameters, owning the domain <strong className="text-emerald-800 font-semibold font-mono">calgro.com</strong> represents a critical competitive moat for regional delivery companies, wholesalers, and fresh-market startups. By indexation on our map, the asset establishes real commercial intent.
                </p>
                <div className="p-4 bg-amber-50 rounded border border-amber-100 flex items-start gap-3">
                  <ShieldCheck className="text-amber-800 shrink-0 mt-0.5" size={18} />
                  <span className="text-xs text-amber-900 leading-relaxed font-mono">
                    <strong>Broker Note:</strong> There are over 6,000 independent grocery points in California recording more than $24B in collective annual sales. Secure calgro.com to secure immediate territorial domain search advantage.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-stone-900 text-stone-200 p-6 rounded-xl border border-stone-855 space-y-4 font-mono text-xs">
                <span className="text-[9px] font-mono text-emerald-400 block uppercase tracking-widest">LOGISTICS AUDITING</span>
                <span className="text-stone-300 font-display font-medium text-sm uppercase block">DISTRIBUTOR METRICS</span>
                <ul className="space-y-3 text-stone-400">
                  <li className="flex justify-between">
                    <span>Reefer Utilization:</span>
                    <span className="text-stone-200">94.2%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Average Haul Time:</span>
                    <span className="text-stone-200">5.4 hrs</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weight Compliance:</span>
                    <span className="text-stone-200">99.8%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cold-Chain Stability:</span>
                    <span className="text-stone-200">99.1%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center space-y-3.5">
                <TrendingUp size={32} className="text-zinc-400 mx-auto" />
                <h4 className="font-display font-semibold text-stone-900 text-xs uppercase tracking-wider">
                  COMMERCIAL SEARCH VALUE
                </h4>
                <p className="text-xs text-stone-605 leading-relaxed">
                  Grocery distribution represents a highly dense capital market. This platform validates calgro.com as a top keyword asset. For transactional routing, submit offers on our registrar registry portal.
                </p>
                <Link
                  href="/domain-asset"
                  className="block bg-stone-900 hover:bg-stone-800 text-stone-50 py-2 rounded text-xs font-mono font-bold uppercase transition-colors"
                >
                  Registrar Escrow Portal
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
