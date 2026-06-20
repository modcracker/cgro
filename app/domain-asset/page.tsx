'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LayoutWrapper from '@/components/LayoutWrapper';
import { ShieldAlert, CreditCard, RefreshCw, Send, CheckCircle2, ShieldCheck, Mail, Info } from 'lucide-react';

export default function DomainAssetPage() {
  const [bidValue, setBidValue] = useState('88888');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [proposedUse, setProposedUse] = useState('agriculture');
  const [submitted, setSubmitted] = useState(false);

  const calculateFees = () => {
    const val = Number(bidValue) || 4500;
    const godaddyBrokerFee = Math.round(val * 0.15); // 15% standard GoDaddy fee
    const escrowHoldFee = Math.round(val * 0.03 + 50); // escrow.com fee
    const sellerNet = Math.round(val - godaddyBrokerFee - escrowHoldFee);
    return { broker: godaddyBrokerFee, escrow: escrowHoldFee, net: sellerNet };
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerEmail.trim() || !bidValue) return;
    setSubmitted(true);
  };

  const fees = calculateFees();

  return (
    <LayoutWrapper>
      {/* Header section with theme */}
      <section className="py-12 bg-stone-900 border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-850 text-stone-300 text-xs font-mono rounded-full uppercase tracking-wider border border-stone-800">
              <ShieldCheck size={12} className="text-emerald-500" />
              <span>ESCROW PORTAL</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              CALGRO.COM DOMAIN TRANSFER
            </h1>
            <p className="text-stone-400 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              Official appraisal guidelines, GoDaddy broker fees calculator, and direct proposal submission for the premium domain calgro.com.
            </p>
          </div>
        </div>
      </section>

      {/* Main Page Area */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Appraisal Details and Escrow Flow */}
            <div className="lg:col-span-7 space-y-8 text-stone-700 leading-relaxed text-sm">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-lg font-display font-bold text-stone-900 uppercase">
                  1. Premium Asset Appraisal Breakdown
                </h2>
                <p>
                  In global domain trading markets, single-word dictionary terms and high-frequency phonemes combined under the legendary &quot;.com&quot; TLD are highly sought after. <strong className="text-stone-900">calgro.com</strong> represents a superb 6-letter phonetic composite pairing the critical geo-qualifier &quot;Cal&quot; (representing the state of California, or Calcium) with the active dynamic segment &quot;Gro&quot; (denoting Growers, Grocers, or Growth Calibration).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-stone-50 rounded border border-stone-200 text-center space-y-1">
                    <span className="text-[10px] font-mono text-stone-400 uppercase block">Phonetic Length</span>
                    <strong className="text-base text-stone-900 block font-display">6 Letters</strong>
                    <span className="text-[9px] text-emerald-700 font-mono block">Ultra-Rare Tier</span>
                  </div>
                  <div className="p-4 bg-stone-50 rounded border border-stone-200 text-center space-y-1">
                    <span className="text-[10px] font-mono text-stone-400 uppercase block">Search Volume Density</span>
                    <strong className="text-base text-stone-900 block font-display">Multi-Sector</strong>
                    <span className="text-[9px] text-emerald-700 font-mono block">Agri/Retail/Calc</span>
                  </div>
                  <div className="p-4 bg-stone-50 rounded border border-stone-200 text-center space-y-1">
                    <span className="text-[10px] font-mono text-stone-400 uppercase block">Registry Listed Price</span>
                    <strong className="text-base text-stone-900 block font-display">$88,888</strong>
                    <span className="text-[9px] text-emerald-700 font-mono block">Official Premium Listing</span>
                  </div>
                </div>
              </div>

              {/* Secure Transfer protocol steps */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-lg font-display font-bold text-stone-900 uppercase flex items-center gap-1.5">
                  <RefreshCw className="text-indigo-600" size={18} />
                  2. Secure Transfer &amp; Escrow Timeline
                </h3>
                <p className="text-xs text-stone-550">
                  Following GoDaddy standard push routing or Escrow.com holding accounts to guarantee legal safety for both parties.
                </p>

                <div className="space-y-4 relative border-l-2 border-stone-100 pl-5 ml-2.5">
                  <div className="relative">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-stone-900"></div>
                    <h4 className="font-display font-semibold text-stone-950 text-xs uppercase">Step 1: Term Agreement</h4>
                    <p className="text-xs text-stone-605 mt-1 leading-normal">
                      The buyer confirms the purchase bid through the brokerage or directly with the administrator. If approved, the administrator sets up the transactional link under a locked GoDaddy push schedule.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-stone-900"></div>
                    <h4 className="font-display font-semibold text-stone-950 text-xs uppercase">Step 2: Escrow Hold</h4>
                    <p className="text-xs text-stone-605 mt-1 leading-normal">
                      The buyer submits the agreed dollar value to the independent escrow custodian (Escrow.com, licensed GoDaddy Escrow). The payment is verified and held securely in trust.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-stone-900"></div>
                    <h4 className="font-display font-semibold text-stone-950 text-xs uppercase">Step 3: Auth Code &amp; Push Exchange</h4>
                    <p className="text-xs text-stone-605 mt-1 leading-normal">
                      The current registry holder generates the EPP Auth-Code and coordinates the immediate domain push to the buyer&apos;s registrar account.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <h4 className="font-display font-semibold text-stone-950 text-xs uppercase">Step 4: Release &amp; Complete</h4>
                    <p className="text-xs text-stone-605 mt-1 leading-normal">
                      Upon confirmation of DNS lock and WHOIS records update, the custodian releases the held funds to the registrant. Real-time index mapping completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Appraisal Calculator and Submission form */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-6">
                <div>
                  <h3 className="font-display font-bold text-stone-950 text-sm uppercase">Broker Appraisal Calculator</h3>
                  <p className="text-[11px] text-stone-500 leading-tight">
                    Model final GoDaddy payout parameters after subtracting standard commission and escrow hold fees.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase block">
                      Proposed Acquisition Bid Value ($ USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-stone-400 text-xs font-mono font-bold">$</span>
                      <input 
                        type="number" 
                        value={bidValue}
                        min="4500"
                        max="250000"
                        step="500"
                        onChange={(e) => setBidValue(e.target.value)}
                        className="w-full bg-stone-50 text-stone-800 text-xs font-mono p-3 pl-8 rounded border border-stone-300 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs font-mono space-y-2.5">
                    <div className="flex justify-between text-stone-500">
                      <span>Standard GoDaddy Fee (15%):</span>
                      <span>-${fees.broker} USD</span>
                    </div>
                    <div className="flex justify-between text-stone-500">
                      <span>Escrow Custody Fee (est):</span>
                      <span>-${fees.escrow} USD</span>
                    </div>
                    <div className="pt-2 border-t border-stone-200 flex justify-between text-stone-900 font-bold">
                      <span>Net Registrant Yield:</span>
                      <span className="text-emerald-700">${fees.net} USD</span>
                    </div>
                  </div>
                </div>

                {/* Proposal Submission form */}
                <form onSubmit={handleProposalSubmit} className="space-y-4 pt-3 border-t border-stone-200/60">
                  <span className="text-[10px] font-mono font-bold text-stone-950 uppercase tracking-widest block">Submit Transaction Proposal</span>
                  
                  {submitted ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-emerald-600" size={16} />
                        <span className="font-bold">Proposal Prepared</span>
                      </div>
                      <p className="leading-relaxed">
                        Please complete the simple verification math below to retrieve our contact information, and send an email outlining your entity name and proposal of ${bidValue} USD.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-mono text-stone-550 block">Your Corporate Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={buyerEmail}
                          onChange={(e) => setBuyerEmail(e.target.value)}
                          placeholder="e.g. acquisitions@brandname.com"
                          className="w-full bg-stone-50 text-stone-800 text-xs font-mono p-2.5 rounded border border-stone-300 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-mono text-stone-550 block">Proposed Corporate Intended Use</label>
                        <select 
                          value={proposedUse}
                          onChange={(e) => setProposedUse(e.target.value)}
                          className="w-full bg-stone-50 text-stone-800 text-xs font-mono p-2.5 rounded border border-stone-300 focus:outline-none"
                        >
                          <option value="agriculture">West Coast Agriculture/Fertilizers</option>
                          <option value="delivery">California Grocery Retail Food Chain</option>
                          <option value="calculus">Calculus / Calculation Tech Studio</option>
                          <option value="calibration">Metrology / Calibration device lab</option>
                          <option value="other">Trademark Defense / Portfolio Invest</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-stone-900 hover:bg-stone-800 text-stone-50 font-mono font-bold text-xs py-2.5 rounded flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <Send size={12} />
                        <span>Prepare Proposal Email</span>
                      </button>
                    </>
                  )}
                </form>

                <div className="space-y-4">
                  {/* Huge 2x GoDaddy button */}
                  <div className="border-t border-stone-200/80 pt-4 mt-2">
                    <span className="text-[10px] font-mono text-emerald-600 block uppercase font-bold text-center tracking-wider mb-2">OFFICIAL ACQUISITION CHANNEL:</span>
                    <a
                      href="https://www.godaddy.com/domainsearch/find?domainToCheck=calgro.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center block bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-mono text-sm font-extrabold py-5 px-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg uppercase tracking-wider cursor-pointer"
                    >
                      Buy calgro.com on GoDaddy
                    </a>
                  </div>

                  <div className="border-t border-stone-200/80 pt-3">
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-[11px] text-stone-600 flex items-start gap-2 leading-relaxed">
                      <Info className="text-stone-500 break-words shrink-0 mt-0.5" size={14} />
                      <span>
                        <strong>Direct Escrow Contact:</strong> Rather buy without brokerage? Coordinate directly through our liaison after solving our human-screen puzzles.
                      </span>
                    </div>
                    {/* Small layout contact link */}
                    <Link
                      href="/contact"
                      className="w-full text-center bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-300 font-mono text-[10px] font-bold py-1.5 rounded-lg block uppercase tracking-wider transition-colors"
                    >
                      Locate Verification Gateway &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
