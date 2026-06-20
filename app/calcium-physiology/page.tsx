'use client';

import React from 'react';
import Link from 'next/link';
import LayoutWrapper from '@/components/LayoutWrapper';
import { TrendingUp, Layers, HelpCircle, FileText, CheckCircle } from 'lucide-react';

export default function CalciumPhysiologyPage() {
  const physiologyData = [
    { cellComponent: 'Cell Wall Middle Lamella', calciumFunction: 'Calcium pectate binding, structural rigidity', concentrationTarget: '2.5% to 4.0% dry matter', researchSource: 'UC Davis Ag-Extension Bulletin #109' },
    { cellComponent: 'Plasma Membrane Junctions', calciumFunction: 'Regulation of potassium (K+) & sodium (Na+) influx', concentrationTarget: '0.5 to 1.5 mM/L cytosolic Ca²', researchSource: 'Botanical Journals v44, p285' },
    { cellComponent: 'Apical Bud Meristems', calciumFunction: 'Mitotic spindle organization, cell division rate', concentrationTarget: '800 ppm localized dry mass', researchSource: 'California Fruit Physiology Annals' },
    { cellComponent: 'Phloem Transport Channels', calciumFunction: 'Phloem sap turgor regulation during transpiration', concentrationTarget: '0.2 to 0.4 mM/L sap density', researchSource: 'International Cation Dynamics Database' }
  ];

  return (
    <LayoutWrapper>
      {/* Header */}
      <section className="py-12 bg-stone-900 border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-mono rounded-full uppercase tracking-wider border border-teal-500/20">
              <TrendingUp size={12} />
              <span>Physiological Node [PHYS-SCI]</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              CALCIUM BOTANICAL PHYSIOLOGY
            </h1>
            <p className="text-stone-400 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              Academic taxonomy tracking Calcium (Ca²⁺) organic signaling, cell-wall elongation regulation, middle lamella pectate stabilization, and structural root growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Page Area */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-6 text-stone-700 leading-relaxed text-sm">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-xl font-display font-bold text-stone-900 uppercase">
                  1. The Biology of Calcium pectin and Cell Elongation
                </h2>
                <p>
                  Calcium operates as an immobile structural nutrient in higher plants. Unlike nitrogen or potassium, which relocate easily from older chloroplasts to fresh shoots, calcium remains locked inside cell walls once absorbed. Hence, continuous root absorption of soluble calcium (optimized by <strong className="text-stone-900">Cal-Gro agricultural formulations</strong>) is required to sustain new tissue division and fruit development.
                </p>
                <p>
                  Inside cell walls, calcium molecules bind with acidic pectins to form <strong className="text-stone-900">calcium pectate</strong>. This substance functions like mortar between bricks in the middle lamella, preventing cell-wall collapse, cellular leakage, and fruit-split.
                </p>
              </div>

              {/* Data table profiling cell components and calcium concentrations */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase flex items-center gap-1.5">
                  <Layers className="text-stone-850" size={18} />
                  2. Calcium (Ca²⁺) Physiological Targets
                </h3>
                <p className="text-xs text-stone-550">
                  Chemical profiling index mapping cellular calcium structures, function parameters, and concentration requirements.
                </p>

                <div className="overflow-x-auto border border-stone-205 rounded-lg">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-250 text-stone-700">
                        <th className="p-3">Cellular Component</th>
                        <th className="p-3">Biological Function</th>
                        <th className="p-3">Optimum Concentration</th>
                        <th className="p-3">Research/Source Annotation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-605">
                      {physiologyData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-teal-50/20 transition-colors">
                          <td className="p-3 font-semibold text-stone-900">{row.cellComponent}</td>
                          <td className="p-3">{row.calciumFunction}</td>
                          <td className="p-3 font-bold text-teal-850">{row.concentrationTarget}</td>
                          <td className="p-3 text-stone-500">{row.researchSource}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Academic descriptions */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase">
                  3. Transpiration-Dependent Calcium Pulses
                </h3>
                <p>
                  Calcium transport is strictly passive, moving almost exclusively through the xylem alongside water transpiration currents. Under low humidity or micro-drip cycles, water movement slows. This drop-off occasionally triggers localized calcium deficiencies (like Blossom End Rot in tomato crops or Bitter Pit in apple orchards) even when soil calcium level grids are fully saturated.
                </p>
                <p>
                  Introducing micro-dosing systems (supported under <strong className="text-stone-900">CalGro standards</strong>) ensures constant fluid pressure in xylem columns, facilitating steady calcium absorption regardless of high afternoon temperatures.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-stone-900 text-stone-200 p-6 rounded-xl border border-stone-850 space-y-4 font-mono text-xs">
                <span className="text-[9px] font-mono text-emerald-400 block uppercase tracking-widest">PHYSIOLOGICAL DATA SPEC</span>
                <span className="text-stone-300 font-display text-sm uppercase block font-medium">Ion Dynamics</span>
                <ul className="space-y-3 text-stone-400">
                  <li className="flex justify-between">
                    <span>Cation form:</span>
                    <span className="text-stone-200">Ca²+ (divalent)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Xylem Transport:</span>
                    <span className="text-emerald-400">PASSIVE</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Phloem Mobility:</span>
                    <span className="text-rose-400">IMMOBILE</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cell Wall Binding:</span>
                    <span className="text-stone-200">Pectate meshes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center space-y-4">
                <FileText size={32} className="text-stone-400 mx-auto" />
                <h4 className="font-display font-semibold text-stone-900 text-xs uppercase tracking-wider">
                  academic authority indices
                </h4>
                <p className="text-xs text-stone-605 leading-relaxed">
                  Academic scientific indexes establish high PageRank keywords, making calgro.com highly attractive to biotech groups, agriculture supplement manufacturers, and academic developers. Review premium registration options on our brokerage deck.
                </p>
                <Link
                  href="/domain-asset"
                  className="block bg-stone-900 hover:bg-stone-800 text-stone-50 py-2 rounded text-xs font-mono font-bold uppercase transition-colors"
                >
                  Acquisition Escrow Info
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
