'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import VerifiedContact from '@/components/VerifiedContact';
import { ShieldCheck, Mail, ArrowLeft, Info, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  return (
    <LayoutWrapper>
      {/* Dynamic Header with Agricultural Overlay */}
      <section className="relative overflow-hidden py-16 bg-stone-950 text-stone-100 border-b border-stone-900">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80"
            alt="California fields backdrop"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/50 text-emerald-400 text-xs font-mono rounded-full uppercase tracking-wider border border-emerald-900/50">
              <ShieldCheck size={12} className="text-emerald-500" />
              <span>Secure Liaison Channel</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
              Verify Administrative Access
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
              Solve the simple human verification key below to view official contact options, GoDaddy Escrow administration channels, and directory coordination emails.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Card containing Verifier */}
      <section className="py-20 bg-stone-950 font-sans relative overflow-hidden border-t border-white/[0.03] flex-grow">
        {/* Giant watermark */}
        <div className="absolute bottom-10 right-4 lg:right-12 text-[140px] font-display font-black text-white/[0.01] uppercase select-none pointer-events-none tracking-widest leading-none">
          CG-ESCROW
        </div>

        <div className="max-w-xl mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-stone-400 hover:text-emerald-400 text-xs font-mono font-bold uppercase transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Index</span>
            </Link>
          </div>

          <div className="backdrop-blur-md bg-stone-900/10 rounded-2xl shadow-2xl border border-white/5 overflow-hidden relative">
            {/* Absolute watermark inside the card */}
            <div className="absolute right-4 bottom-4 text-[100px] font-mono font-black text-white/[0.015] select-none pointer-events-none uppercase leading-none">
              SEC
            </div>

            <div className="p-6 bg-stone-900/45 text-white flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-800/30 flex items-center justify-center">
                  <Mail className="text-emerald-400" size={16} />
                </div>
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-200">
                    Administrative Gateway
                  </h2>
                  <span className="text-[10px] font-mono text-stone-400 block uppercase">
                    Anti-Harvesting Protocol Active
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded uppercase">
                Lock status: secure
              </span>
            </div>

            <div className="p-6 space-y-6">
              {/* Massive GoDaddy Promotion Section */}
              <div className="p-5 bg-stone-900/30 border border-emerald-500/15 rounded-xl space-y-3 shadow-sm text-center">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 block uppercase font-bold">PREFERRED TRANSACT METHOD</span>
                <h3 className="font-display font-bold text-sm text-white uppercase">
                  Fastest Domain Acquisition
                </h3>
                <p className="text-[11px] text-stone-400 leading-relaxed max-w-md mx-auto">
                  You can immediately register ownership of <strong className="text-stone-200 font-mono">calgro.com</strong> through the GoDaddy Premium Domain program. Escrow is fully automated.
                </p>
                <a
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=calgro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-mono font-extrabold text-sm py-4 px-6 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md uppercase tracking-wider cursor-pointer"
                >
                  <ExternalLink size={15} className="mr-2 animate-bounce" /> Buy calgro.com on GoDaddy
                </a>
              </div>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-white/5"></div>
                <span className="flex-shrink mx-4 text-stone-500 text-[10px] font-mono uppercase tracking-widest">or non-brokered general liaison</span>
                <div className="flex-grow border-t border-white/5"></div>
              </div>

              <div className="p-4 bg-stone-950/40 border border-white/5 rounded-lg text-xs text-stone-300 space-y-2 leading-relaxed">
                <div className="flex items-center gap-2">
                  <Info className="text-emerald-400 font-semibold shrink-0" size={16} />
                  <strong className="font-mono text-[11px] uppercase tracking-wider text-white block">Liaison Escalation Method</strong>
                </div>
                <p>
                  To filter commercial spam bots, crawler scrapers, and automatic domain acquisition scripts, we maintain a secure arithmetic logic puzzle block below. Solving this simple equation will programmatically overlay direct administrative emails.
                </p>
              </div>

              <div className="p-1 bg-stone-950/80 rounded-xl border border-white/5">
                <VerifiedContact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
