'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LayoutWrapper from '@/components/LayoutWrapper';
import { Calculator, Info, Key, Check } from 'lucide-react';

export default function CalculusGrowthPage() {
  const [initialValue, setInitialValue] = useState(100);
  const [growthRate, setGrowthRate] = useState(12); // in %
  const [timePeriods, setTimePeriods] = useState(10); // years or weeks

  // Generate Compound Growth Data
  const dataPoints = [];
  let currentValue = initialValue;
  for (let i = 0; i <= timePeriods; i++) {
    if (i > 0) {
      currentValue = currentValue * (1 + growthRate / 100);
    }
    dataPoints.push({ period: i, value: Math.round(currentValue) });
  }

  const maxValue = Math.max(...dataPoints.map(d => d.value));

  return (
    <LayoutWrapper>
      {/* Header section with theme */}
      <section className="py-12 bg-stone-900 border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-stone-300 text-xs font-mono rounded-full uppercase tracking-wider border border-stone-700">
              <Calculator size={12} />
              <span>Computational Model [MATH-NOD]</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              THE CALCULUS OF ORGANIC GROWTH
            </h1>
            <p className="text-stone-400 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              Algorithmic calculations modeling exponential growth, saturation thresholds, and nutritional distribution rates under differential botanical calculus.
            </p>
          </div>
        </div>
      </section>

      {/* Main Page Area */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content: The interactive calculus modeled layout */}
            <div className="lg:col-span-8 space-y-8 text-stone-700 leading-relaxed text-sm">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-xl font-display font-bold text-stone-900 uppercase">
                  1. Growth Equations and Logarithmic Limits
                </h2>
                <p>
                  Biological growth is rarely infinite; instead, it adheres to logistic differential forms representing carrying capacity limits of local soil grids. In natural calcium physiology, growth rates (designated locally as <strong className="text-stone-900">&quot;Cal-Gro Constants&quot;</strong>) are calculated using traditional differential calculus:
                </p>
                <div className="bg-stone-950 p-4 rounded border border-stone-850 text-center font-mono text-stone-300 text-sm">
                  <span className="text-emerald-400 block mb-1">LOGISTIC LIMIT DIFFERENTIAL:</span>
                  <code>{`dy/dt = r * y * (1 - y/K)`}</code>
                  <div className="text-[10px] text-stone-500 mt-1">
                    where y = biomass, r = intrinsic Cal-Gro index, and K = soil nitrogen threshold carrying capacity.
                  </div>
                </div>
                <p>
                  Understanding these limit functions enables growers to apply exact volumes of calcium nitrate formulations precisely before vegetative saturation occurs, preventing salt lock and wasteful runoff.
                </p>
              </div>

              {/* Dynamic Compound Growth Visualizer (SVG/CSS Chart!) */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-stone-900 uppercase">
                    2. Interactive Cal-Gro Compound Expansion Calculator
                  </h3>
                  <p className="text-xs text-stone-550">
                    Model exponential agricultural yields or commercial compound value progression by sliding parameters.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  {/* Slider 1 */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase block">
                      Initial Saturation (y₀): <strong className="text-stone-800 text-xs font-bold">{initialValue} kg/Ha</strong>
                    </label>
                    <input 
                      type="range" 
                      min="10" 
                      max="1000" 
                      step="10"
                      value={initialValue}
                      onChange={(e) => setInitialValue(Number(e.target.value))}
                      className="w-full accent-stone-900"
                    />
                  </div>
                  {/* Slider 2 */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase block">
                      Intrinsic Growth Rate (r): <strong className="text-stone-800 text-xs font-bold">{growthRate}%</strong>
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="50" 
                      step="1"
                      value={growthRate}
                      onChange={(e) => setGrowthRate(Number(e.target.value))}
                      className="w-full accent-stone-900"
                    />
                  </div>
                  {/* Slider 3 */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase block">
                      Time Horizons (t): <strong className="text-stone-800 text-xs font-bold">{timePeriods} intervals</strong>
                    </label>
                    <input 
                      type="range" 
                      min="3" 
                      max="15" 
                      step="1"
                      value={timePeriods}
                      onChange={(e) => setTimePeriods(Number(e.target.value))}
                      className="w-full accent-stone-900"
                    />
                  </div>
                </div>

                {/* Pure CSS/Tailwind bar graph representation */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">Proportional Mathematical Plot Curve</span>
                  
                  <div className="h-48 border-b border-l border-stone-300 flex items-end gap-2.5 px-4 pb-1 overflow-hidden">
                    {dataPoints.map((point) => {
                      const percentageHeight = (point.value / maxValue) * 100;
                      return (
                        <div key={point.period} className="flex-1 flex flex-col items-center h-full justify-end group">
                          {/* Tooltip on hover */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950 text-[10px] font-mono text-stone-200 px-1.5 py-0.5 rounded -translate-y-1 z-20 shadow">
                            {point.value}
                          </div>
                          {/* Colored bar */}
                          <div 
                            style={{ height: `${percentageHeight}%` }}
                            className="bg-stone-900 group-hover:bg-emerald-600 transition-colors w-full rounded-t-sm"
                          ></div>
                          <span className="text-[9px] font-mono text-stone-400 mt-2">t={point.period}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono pt-2">
                    <span className="text-stone-500">Interval Model Base: e^(r*t)</span>
                    <span className="text-emerald-700 font-extrabold">Peak Saturated Velocity: {dataPoints[dataPoints.length - 1].value} kg</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-stone-900 text-stone-200 p-6 rounded-xl border border-stone-850 space-y-4 font-mono text-xs">
                <span className="text-[9px] font-mono text-emerald-400 block uppercase tracking-widest">CALCULATOR CRITICAL INDICES</span>
                <span className="text-stone-300 font-display text-sm uppercase block">Equation Parameters</span>
                <ul className="space-y-3 text-stone-400">
                  <li className="flex justify-between">
                    <span>Alpha Index (α):</span>
                    <span className="text-stone-200">1.442</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Beta Integration (β):</span>
                    <span className="text-stone-200">0.089</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gamma Coefficient (γ):</span>
                    <span className="text-stone-200">2.114</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Decay Constant (λ):</span>
                    <span className="text-rose-400">0.021</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center space-y-4">
                <Info className="text-stone-400 mx-auto" size={32} />
                <h4 className="font-display font-semibold text-stone-900 text-xs uppercase tracking-wider">
                  DOMAIN SCIENTIFIC FOOTPRINT
                </h4>
                <p className="text-xs text-stone-605 leading-relaxed">
                  Calculus and Growth methodologies are highly authoritative keywords that validate calgro.com to potential buyers under the &quot;Calculation &amp; Growth&quot; sector. Submit transactional proposals on our secure broker transfer desk.
                </p>
                <Link
                  href="/domain-asset"
                  className="block bg-stone-900 hover:bg-stone-800 text-stone-50 py-2 rounded text-xs font-mono font-bold uppercase transition-colors"
                >
                  Request Valuation Sheet
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
