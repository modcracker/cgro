'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import { MapPin, Search, Award, CheckCircle, ShieldAlert } from 'lucide-react';

export default function CaliforniaGrowersPage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const registeredGrowers = [
    { name: 'Sutter Creek Organic Almonds', county: 'Sutter County', crop: 'Almonds, Walnuts, Pistachios', organicCert: 'USDA & CCOF #SU-941', status: 'ACTIVE' },
    { name: 'Gomez Premium Citrus Orchards', county: 'Ventura County', crop: 'Lemons, Valencias, Pomelos', organicCert: 'USDA & CCOF #VE-285', status: 'ACTIVE' },
    { name: 'Napa Soil Growers Collective', county: 'Napa County', crop: 'Wine Grapes (Cabernet, Merlot)', organicCert: 'CCOF Bio-Dynamic #NP-380', status: 'ACTIVE' },
    { name: 'Salinas Valley Greens & Herbs', county: 'Monterey County', crop: 'Romaine, Cilantro, Bok Choy, Spinach', organicCert: 'USDA Organic #MO-112', status: 'ACTIVE' },
    { name: 'San Joaquin Fruit Packers Node 4', county: 'Kern County', crop: 'Pistachios, Peaches, Plums', organicCert: 'CCOF Certified #KE-009', status: 'ACTIVE' },
    { name: 'Sonoma Coast Sustainable Vineyards', county: 'Sonoma County', crop: 'Pinot Noir Grapes, Chardonnay', organicCert: 'CCOF Bio-Dynamic #SO-883', status: 'ACTIVE' },
    { name: 'Central Coast Berry Ranchers', county: 'Santa Cruz County', crop: 'Strawberries, Blackberries, Raspberries', organicCert: 'USDA Organic #SC-440', status: 'ACTIVE' },
    { name: 'Imperial Valley Alfalfa Spiders', county: 'Imperial County', crop: 'Alfalfa, Sudangrass', organicCert: 'USDA Cert #IM-551', status: 'ACTIVE' },
    { name: 'San Joaquin Organics & Berries', county: 'Fresno County', crop: 'Organic Blueberries, Grapes', organicCert: 'CCOF Reg #FR-029', status: 'ACTIVE' },
    { name: 'Sacramento Delta Vineyards & Orchards', county: 'Sacramento County', crop: 'Pears, Chenin Blanc Grapes', organicCert: 'CCOF Bio #SA-394', status: 'ACTIVE' },
    { name: 'Coachella Valley Date Growers', county: 'Riverside County', crop: 'Medjool Dates, Grapefruit', organicCert: 'USDA Organic #RI-801', status: 'ACTIVE' },
    { name: 'Chico Walnut Groves Alliance', county: 'Butte County', crop: 'Walnuts, Pecans', organicCert: 'USDA #BU-003', status: 'ACTIVE' },
    { name: 'Modesto Foothill Apricots', county: 'Stanislaus County', crop: 'Apricots, Nectarines', organicCert: 'CCOF #ST-119', status: 'ACTIVE' }
  ];

  const filteredGrowers = registeredGrowers.filter(grower => {
    const q = searchQuery.toLowerCase();
    return (
      grower.name.toLowerCase().includes(q) ||
      grower.county.toLowerCase().includes(q) ||
      grower.crop.toLowerCase().includes(q)
    );
  });

  return (
    <LayoutWrapper>
      {/* Header section with theme background image overlay */}
      <section className="relative overflow-hidden py-16 bg-stone-950 text-stone-100 border-b border-stone-900">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80"
            alt="California organic vineyards background"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-450 text-xs font-mono rounded-full uppercase tracking-wider border border-amber-500/20">
              <MapPin size={12} />
              <span>California Regional Nodes [GROW-NET]</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              CALIFORNIA ORGANIC GROWERS REGISTRY
            </h1>
            <p className="text-stone-400 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              Global directory indexing active agricultural enterprises, orchards, viticulture clusters, and organic greenhouses operating within the state of California under sustainable calcium soil grid standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Hand: Directory */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-lg font-display font-bold text-stone-900 uppercase">
                      Indexed &quot;Cal-Growers&quot; State Database
                    </h2>
                    <p className="text-xs text-stone-500">
                      Cross-referenced registry mapping grower networks adopting calcium-enhanced sustainable agronomy guidelines.
                    </p>
                  </div>
                  <div className="relative w-full md:w-64">
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search county or crop..." 
                      className="w-full bg-stone-50 text-xs font-mono p-2.5 pl-8 rounded border border-stone-300 focus:outline-none"
                    />
                    <Search className="absolute left-2.5 top-3 text-stone-400" size={13} />
                  </div>
                </div>

                <div className="divide-y divide-stone-100 border border-stone-150 rounded-lg overflow-hidden">
                  {filteredGrowers.length > 0 ? (
                    filteredGrowers.map((grower, idx) => (
                      <div key={idx} className="p-4 hover:bg-stone-50/80 transition-colors flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-display font-medium text-stone-900 text-sm">{grower.name}</span>
                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 text-[10px] font-mono rounded">
                              {grower.status}
                            </span>
                          </div>
                          <p className="text-xs text-stone-600 font-mono">
                            County: <strong className="text-stone-800">{grower.county}</strong> | Main Harvest: <strong className="text-stone-800">{grower.crop}</strong>
                          </p>
                        </div>
                        <div className="text-right sm:text-right text-[11px] font-mono text-stone-500">
                          <span>Cert ID: {grower.organicCert}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-xs text-stone-400 font-mono">
                      No growers found matching &quot;{searchQuery}&quot;. Search keywords like Fresno, Sonoma, Grapes, Almonds.
                    </div>
                  )}
                </div>
              </div>

              {/* Informational content to build thick SEO authority text */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4 font-sans text-stone-700 leading-relaxed text-sm">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase flex items-center gap-1.5">
                  <Award className="text-amber-500" size={18} />
                  Registry Integration Requirements
                </h3>
                <p>
                  To secure verification within the California Organic Growers Directory under the <strong className="text-stone-900">CalGro</strong> term, individual orchard owners must supply historical soil test panels establishing sufficient cation balance. Specifically, calcium levels must populate at least 65% of the soil exchange mesh (the optimal crop target for California&apos;s warm weather cycles).
                </p>
                <p>
                  Integrating these organic grower data points on <strong className="text-stone-900">calgro.com</strong> allows search engines to associate this domain directly with high-value California farming queries. Competitors, aggregators, or agricultural co-ops trade constantly on these domain variables.
                </p>
              </div>

            </div>

            {/* Right Hand Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-stone-900 text-stone-200 p-6 rounded-xl border border-stone-850 space-y-4">
                <span className="text-[9px] font-mono text-amber-400 block uppercase tracking-widest">CCOF COMPLIANCE STATUS</span>
                <span className="text-xs font-mono text-stone-400 block">
                  California certified organic farmers represent over $10.4B in annual premium agricultural output. Brand protection for calgro.com represents essential market alignment.
                </span>
                <div className="p-3 bg-stone-950 rounded border border-stone-800 space-y-2 text-xs">
                  <div className="flex justify-between font-mono">
                    <span className="text-stone-500">CCOF Registered Groups:</span>
                    <span className="text-stone-300 font-bold">14,480+</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-stone-500">Average Domain Appraisal:</span>
                    <span className="text-amber-400 font-bold">$12,000 - $18,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center space-y-4">
                <ShieldAlert className="text-amber-500 mx-auto" size={32} />
                <h4 className="font-display font-medium text-stone-950 text-xs uppercase tracking-wider">
                  Is Your Association Registered?
                </h4>
                <p className="text-xs text-stone-605 leading-relaxed">
                  CalGro represents an irreplaceable brand element. Secure calgro.com before competitors trigger trademark blockages. Discussions open directly on the escrow contact panel.
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
