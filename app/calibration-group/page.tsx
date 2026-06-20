'use client';

import React from 'react';
import Link from 'next/link';
import LayoutWrapper from '@/components/LayoutWrapper';
import { Cpu, Settings, CheckSquare, RefreshCw, Layers } from 'lucide-react';

export default function CalibrationGroupPage() {
  const calibrators = [
    { instrument: 'A-901 High-Pressure Liquid Chromatograph', variableMeasured: 'Water Calcium Purity (PPM)', standardBaseline: 'NIST Standard SRM-3109', toleranceSec: '&plusmn; 0.05 PPM', calibrationCycle: '180 days', status: 'VERIFIED' },
    { instrument: 'CG-Soil-Probe Soil Cation Analyzer', variableMeasured: 'Base Saturation % (Ca/Mg/K)', standardBaseline: 'ASTM Method D-4972', toleranceSec: '&plusmn; 0.12 % Cation', calibrationCycle: '90 days', status: 'VERIFIED' },
    { instrument: 'Bio-Flow Root Osmometer Grid v3', variableMeasured: 'Botanical Osmotic Pressure', standardBaseline: 'ISO-17025 Reference Standard', toleranceSec: '&plusmn; 0.01 Osm/kg', calibrationCycle: '120 days', status: 'RE-VERIFY' },
    { instrument: 'Micro-Spray Drip Pulse flowmeter', variableMeasured: 'Total Nitrogen flow output', standardBaseline: 'ANSI Precision standards', toleranceSec: '&plusmn; 0.04 mL/sec', calibrationCycle: '360 days', status: 'VERIFIED' }
  ];

  return (
    <LayoutWrapper>
      {/* Article Header with deep metrology theme */}
      <section className="py-12 bg-stone-900 border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-mono rounded-full uppercase tracking-wider border border-purple-500/20">
              <Cpu size={12} />
              <span>Metrology Calibration Node [CAL-SYS]</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              CALIBRATION SYSTEMS &amp; STANDARDS
            </h1>
            <p className="text-stone-400 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              Industrial standards directory indexing laboratory equipment configurations, NIST-traceable calcium sensor baselines, and quality check parameters for agricultural testing networks.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-6 text-stone-700 leading-relaxed text-sm">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-xl font-display font-bold text-stone-900 uppercase">
                  1. Calibration of Calcium Bio-Sensors
                </h2>
                <p>
                  Because automated agricultural testing loops rely heavily on robotic probes, defining exact baselines (known broadly as <strong className="text-stone-900">Calibration Standards</strong>) is critical to protect crop investment values. Even minor deviations in local calcium sensor calibrations can result in nitrogen over-treatment or localized crop rot.
                </p>
                <p>
                  Under <strong className="text-stone-900">Cal-Gro Calibration Guidelines</strong>, active laboratories implement NIST-traceable calibration loops. Our registry maps standard operating intervals and tolerance thresholds for these measuring devices.
                </p>
              </div>

              {/* Data table profiling calibrators */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase flex items-center gap-1.5">
                  <Settings className="text-stone-850" size={18} />
                  2. Indexed Equipment Calibration standards
                </h3>
                <p className="text-xs text-stone-550">
                  Cross-referenced from California Metrology Labs. Compliance audits verified on real-time sensors.
                </p>

                <div className="overflow-x-auto border border-stone-205 rounded-lg">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-250 text-stone-700">
                        <th className="p-3">Laboratory Instrument</th>
                        <th className="p-3">Reference Baseline</th>
                        <th className="p-3">Acceptable Tolerance</th>
                        <th className="p-3">Req. Interval</th>
                        <th className="p-3">Audit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-605">
                      {calibrators.map((row, idx) => (
                        <tr key={idx} className="hover:bg-purple-50/20 transition-colors">
                          <td className="p-3 font-semibold text-stone-900">{row.instrument}</td>
                          <td className="p-3">{row.standardBaseline}</td>
                          <td className="p-3" dangerouslySetInnerHTML={{ __html: row.toleranceSec }}></td>
                          <td className="p-3 text-stone-500">{row.calibrationCycle}</td>
                          <td className="p-3">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              row.status === 'VERIFIED' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                            }`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Technical description block */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-medium text-stone-900 uppercase">
                  3. ISO-17025 Conformity &amp; Domain Authority
                </h3>
                <p>
                  Industrial calibration services represent massive B2B markets. Maintaining deep metrology vocabulary on <strong className="text-stone-900">calgro.com</strong> establishes a high-value landing page for metrology corporations, test facilities, or buyers seeking short domain titles to launch technical sub-divisions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded">
                    <span className="font-mono text-purple-900 text-xs font-bold block mb-1">Cation Sensor Standards</span>
                    <p className="text-[11px] text-purple-800 leading-relaxed">
                      NIST-SRM-3109 standards isolate pure calcium levels with extreme accuracy, preventing baseline drifts that cause nutritional calculation errors.
                    </p>
                  </div>
                  <div className="p-4 bg-stone-100 border border-stone-200 rounded">
                    <span className="font-mono text-stone-900 text-xs font-bold block mb-1">Standard Calibration Loops</span>
                    <p className="text-[11px] text-stone-700 leading-relaxed">
                      Mandated 90-day intervals are essential under field conditions to counter temperature swings and sensor oxidation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-stone-900 text-stone-200 p-6 rounded-xl border border-stone-850 space-y-4 font-mono text-xs">
                <span className="text-[9px] font-mono text-emerald-400 block uppercase tracking-widest">METROLOGICAL COMPLIANCE</span>
                <span className="text-stone-300 font-display text-sm uppercase block">Precision Auditing</span>
                <ul className="space-y-3 text-stone-400">
                  <li className="flex justify-between">
                    <span>NIST Traceability:</span>
                    <span className="text-stone-200">YES</span>
                  </li>
                  <li className="flex justify-between">
                    <span>ANSI Compliance:</span>
                    <span className="text-stone-200">YES</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Calibration Ratio:</span>
                    <span className="text-stone-200">10:1 standard</span>
                  </li>
                  <li className="flex justify-between">
                    <span>U.S. Metrology Org:</span>
                    <span className="text-emerald-400">INDEXED</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center space-y-4">
                <RefreshCw size={32} className="text-stone-400 mx-auto" />
                <h4 className="font-display font-semibold text-stone-900 text-xs uppercase tracking-wider">
                  metrology corporate value
                </h4>
                <p className="text-xs text-stone-605 leading-relaxed">
                  Precision metrology and Calibration groups trade heavily on clean corporate domain names. Learn how calgro.com fits your research organization by reviewing our domain transfer specifications.
                </p>
                <Link
                  href="/domain-asset"
                  className="block bg-stone-900 hover:bg-stone-800 text-stone-50 py-2 rounded text-xs font-mono font-bold uppercase transition-colors"
                >
                  Domain Acquisition Data
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
