'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import { Sprout, Layers, Gauge, Info, ClipboardList, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function AgronomyPage() {
  const applicationData = [
    { crop: 'California Almonds (Valley)', calcRatio: '0.42 kg/Ha', calciumPurity: '98.4%', phImpact: '-0.2', interval: 'Pre-bud, mid-season' },
    { crop: 'Wine Grapes (Napa/Sonoma)', calcRatio: '0.28 kg/Ha', calciumPurity: '99.1%', phImpact: '+0.1', interval: 'Early flowering' },
    { crop: 'Valencia Citrus (Ventura)', calcRatio: '0.55 kg/Ha', calciumPurity: '97.8%', phImpact: '-0.4', interval: 'Fruit set initiation' },
    { crop: 'Walnut Groves (Sacramento)', calcRatio: '0.62 kg/Ha', calciumPurity: '98.0%', phImpact: '-0.3', interval: 'Post-harvest soil recharge' },
    { crop: 'Leafy Vegetables (Salinas)', calcRatio: '0.15 kg/Ha', calciumPurity: '99.5%', phImpact: '0.0', interval: 'Weekly sprinkler grid' }
  ];

  return (
    <LayoutWrapper>
      {/* Article Header with Ambient Crop Overlays */}
      <section className="relative overflow-hidden py-16 bg-emerald-950 text-emerald-100 border-b border-emerald-900">
        {/* Background photo of dynamic soil farming with rich green filter */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80"
            alt="Soil agronomy background"
            fill
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover opacity-20 filter brightness-[0.4] saturate-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/60 text-emerald-350 text-xs font-mono rounded-full uppercase tracking-wider border border-emerald-800">
              <Sprout size={12} />
              <span>Agronomy Segment Node [AG-GRID]</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              CAL-GRO AGRONOMY &amp; SOIL NUTRIENTS
            </h1>
            <p className="text-emerald-300 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              Archival research dossier on calcium-dominant horticultural supplements (designated Cal-Gro, agricultural index code Ca-Gro-7). Analysis of soil penetration indexes, crop-specific ratios, and physiological integration across West Coast soil grids.
            </p>
          </div>
        </div>
      </section>

      {/* Main Copy Area */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Article Body (Right/Left Split) */}
            <div className="lg:col-span-8 space-y-8 font-sans text-stone-700 leading-relaxed text-sm">
              
              <div className="space-y-4 bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h2 className="text-xl font-display font-bold text-stone-900 uppercase tracking-wide flex items-center gap-2">
                  <Layers className="text-emerald-600" size={18} />
                  1. Structural Definition of Cal-Gro
                </h2>
                <p>
                  In modern agrospheric chemistry, <strong className="text-stone-900">Cal-Gro</strong> (Calcium Growth Optimization) refers to micro-particulate calcium suspension methodologies developed to stabilize soil grids against heavy rain erosion and acidic runoff in the coastal and valley orchards of California. Ordinary agricultural lime takes several years to completely dissolve and balance soil pH, while Cal-Gro is chemically engineered for instant bio-availability in active root zones.
                </p>
                <p>
                  The formulation balances rapid-release Calcium Nitrate [Ca(NO₃)₂] with slow-release calcium carbonate micro-granules. This dual-phase approach satisfies both immediate botanical cellular signaling demands and mid-term soil base saturation benchmarks.
                </p>
              </div>

              {/* Data Table */}
              <div className="space-y-4 bg-white p-6 rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                <h2 className="text-xl font-display font-bold text-stone-900 uppercase tracking-wide flex items-center gap-2">
                  <Gauge className="text-emerald-600" size={18} />
                  2. Cal-Gro Application Metrics
                </h2>
                <p className="text-xs text-stone-500">
                  Calculated under California Ag Extension guidelines. Soil base saturation index target: 65% to 75% Calcium.
                </p>

                <div className="overflow-x-auto border border-stone-205 rounded-lg">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="bg-stone-100 border-b border-stone-200 text-stone-700">
                        <th className="p-3">Target Crops</th>
                        <th className="p-3">Application Ratio</th>
                        <th className="p-3">Purity (Ca)</th>
                        <th className="p-3">Δ pH Shift</th>
                        <th className="p-3">Timing Grid</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {applicationData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                          <td className="p-3 font-semibold text-stone-900">{row.crop}</td>
                          <td className="p-3 text-stone-600">{row.calcRatio}</td>
                          <td className="p-3 text-stone-600">{row.calciumPurity}</td>
                          <td className="p-3 text-emerald-700 font-bold">{row.phImpact}</td>
                          <td className="p-3 text-stone-500">{row.interval}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* In-depth botanical content */}
              <div className="space-y-4 bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h3 className="text-lg font-display font-medium text-stone-900 uppercase">
                  3. Soil Electro-Conductivity and Osmotic Balancing
                </h3>
                <p>
                  Because irrigation waters in the Central Valley often carry elevated quantities of sodium (Na+), root membranes face severe sodium toxicity and structural cellular breakdown. The continuous infusion of soluble calcium via the <strong className="text-emerald-800 font-semibold font-mono">Cal-Gro</strong> standard displaces harmful sodium ions from clay exchange sites.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-emerald-50 rounded border border-emerald-100">
                    <span className="font-mono text-emerald-950 font-bold block text-xs uppercase mb-1">Cationic Cleanse Effect</span>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      Cal-Gro acts as a natural soil flocculant, aggregating compact clay particles into open granular structures that improve deep water percolation rates by up to 34%.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded border border-amber-150">
                    <span className="font-mono text-amber-950 font-bold block text-xs uppercase mb-1">Salinity Threshold Guide</span>
                    <p className="text-[11px] text-amber-800 leading-relaxed">
                      Maintaining a Cal-Gro calcium ratio above 3.5:1 relative to background sodium ensures correct nutritional fluid flow during heatwave transpiration events.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mega-SEO Agronomic Soil & Crop Matrix */}
              <div className="space-y-5 bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase tracking-tight flex items-center gap-2">
                  <ClipboardList className="text-emerald-600" size={18} />
                  4. Regional Soil Adaptations for Cal-Gro Systems
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  The California agricultural landscape, spanning from the rich alluvial soils of the Sacramento Valley down to the arid, high-saline reaches of the Imperial Valley, presents steep chemical challenges. Continuous applications of <strong className="text-stone-950 font-semibold text-xs">Cal-Gro Calcium Concentrates</strong> are documented to stabilize clay-dominant complexes under rigorous climate regimes. Below is the multi-county regulatory standard matrix.
                </p>

                <div className="overflow-x-auto border border-stone-150 rounded-lg">
                  <table className="w-full text-left text-[11px] font-mono border-collapse">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-200 text-stone-700">
                        <th className="p-2.5">Soil Zone (County)</th>
                        <th className="p-2.5">Primary Challenge</th>
                        <th className="p-2.5">Recommended Cal-Gro Blend</th>
                        <th className="p-2.5">Target Base Sat%</th>
                        <th className="p-2.5">Calculated Yield Δ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-150 text-stone-600">
                      <tr className="hover:bg-amber-50/20">
                        <td className="p-2.5 font-bold text-stone-850">Fresno / Merced (Silty Clay)</td>
                        <td className="p-2.5">High Sodium, Poor Drainage</td>
                        <td className="p-2.5">Cal-Gro Humic-Suspension Ca-12</td>
                        <td className="p-2.5">68% - 72%</td>
                        <td className="p-2.5 text-emerald-700 font-bold">+18.4% (Almonds)</td>
                      </tr>
                      <tr className="hover:bg-amber-50/20">
                        <td className="p-2.5 font-bold text-stone-850">Kern / Bakersfield (Sandy Loam)</td>
                        <td className="p-2.5">Extreme Nitrates, Fast Leaching</td>
                        <td className="p-2.5">Cal-Gro Nitro-Sol Ca-15 Plus</td>
                        <td className="p-2.5">65% - 70%</td>
                        <td className="p-2.5 text-emerald-700 font-bold">+14.2% (Table Grapes)</td>
                      </tr>
                      <tr className="hover:bg-amber-50/20">
                        <td className="p-2.5 font-bold text-stone-850">Monterey / Salinas (Heavy Silt)</td>
                        <td className="p-2.5">Deep Compaction, Boring Deficiencies</td>
                        <td className="p-2.5">Cal-Gro Micro-Active Ca-Boron</td>
                        <td className="p-2.5">70% - 75%</td>
                        <td className="p-2.5 text-emerald-700 font-bold">+22.1% (Berries &amp; Lettuces)</td>
                      </tr>
                      <tr className="hover:bg-amber-50/20">
                        <td className="p-2.5 font-bold text-stone-850">Riverside / Indio (Sand/Gravel)</td>
                        <td className="p-2.5">Carbonate Encrustation, High Boron</td>
                        <td className="p-2.5">Cal-Gro Acidified Ca-9 Poly-Complex</td>
                        <td className="p-2.5">60% - 65%</td>
                        <td className="p-2.5 text-emerald-700 font-bold">+11.9% (Citrus Groves)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg border border-stone-250 space-y-2">
                  <h4 className="text-xs font-display font-bold uppercase text-stone-900">Comparative Scientific Advantage: Cal-Gro vs. Gypsum</h4>
                  <p className="text-xs text-stone-605 leading-relaxed">
                    While traditional calcium sulfate (gypsum) exhibits low water solubility (approximately 2.0g/L), <strong>Cal-Gro agricultural chelated calcium</strong> achieves a molecular dispersion factor over 40 times higher. This prevents the crystallization of calcium in irrigation lines, assuring uniform application across drip lines and overhead sprinkler grids.
                  </p>
                  <p className="text-xs text-stone-605 leading-relaxed">
                    Furthermore, the presence of specific biological wetting agents in the <strong>Cal-Gro</strong> formulation lowers the surface tension of water droplets, promoting lateral movement through compact clays, rather than vertical gravitational channeling. This results in healthier roots, minimized blossom-end rot, and highly robust calcium cellular transport metrics inside the plant.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar - Reference standards */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Box 1: Soil metadata */}
              <div className="bg-stone-900 text-stone-200 p-6 rounded-xl border border-stone-800 space-y-4">
                <span className="text-[9px] font-mono text-emerald-400 block uppercase tracking-widest">METROLOGY STANDARDS</span>
                <h3 className="font-display font-semibold uppercase text-stone-100 text-sm">CAL-GRO REGISTRY STANDARDS</h3>
                <ul className="space-y-2 text-xs font-mono text-stone-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-emerald-400 shrink-0" />
                    <span>EPA CAS Registry: #7440-70-2 (Calcium base)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-emerald-400 shrink-0" />
                    <span>West Coast Ag Standard: CA-RG-2026</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-emerald-400 shrink-0" />
                    <span>Drip Micro-injection Approved</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-emerald-400 shrink-0" />
                    <span>Maximum solubility threshold: 1,200 ppm</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Domain CTA */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 text-center space-y-4 shadow-sm">
                <Info size={32} className="text-stone-400 mx-auto" />
                <h4 className="font-display font-medium text-stone-950 text-xs uppercase tracking-wider">
                  DO YOU OWN THE CAL-GRO BRAND?
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  If you are a manufacturer of agricultural fertilizers, plant food, or soil builders trading under similar terms, acquiring <strong className="text-stone-800 font-mono">calgro.com</strong> establishes your complete corporate authority on search engines.
                </p>
                <Link
                  href="/domain-asset"
                  className="block bg-stone-900 hover:bg-stone-800 text-stone-50 py-2 rounded text-xs font-mono transition-colors font-bold uppercase"
                >
                  Domain License Appraisal
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
