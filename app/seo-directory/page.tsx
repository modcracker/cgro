'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import { seoPages, SeoPageData } from '@/lib/seoData';
import { motion } from 'motion/react';
import { BookOpen, Search, Filter, Tag, ArrowRight, Layers } from 'lucide-react';

export default function SeoDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Agronomic Formulations', 'Regional Operations', 'Crop Specific Guides', 'Organic Standards', 'Technology & Calibration'];

  const filteredPages = seoPages.filter((page) => {
    const matchesSearch = 
      page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.keyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.scientificIntro.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || page.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <LayoutWrapper>
      <div className="flex-1 bg-stone-900 text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/50 border border-emerald-900/50 px-3 py-1.5 rounded-full mb-4 inline-block">
              Agronomy Articles
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">
              CalGro Agronomy Directory
            </h1>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed">
              Explore scientific profiles, soil calibration profiles, and crop guidelines detailing 
              <strong className="text-stone-300"> California growing</strong>, <strong className="text-stone-300">Cal-Gro formulations</strong>, 
              and <strong className="text-stone-300">Caligrow diagnostics</strong>.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 md:p-8 mb-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Search input */}
              <div className="relative lg:col-span-4">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search semantic keywords, agronomy, soil..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 text-white rounded-lg pl-10 pr-4 py-2.5 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-stone-600"
                />
              </div>

              {/* Category tabs */}
              <div className="lg:col-span-8 flex flex-wrap gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1.5 rounded text-xs transition-all duration-200 cursor-pointer ${
                      activeCategory === category
                        ? 'bg-emerald-500 text-stone-950 font-bold border border-emerald-400 shadow-lg shadow-emerald-500/10'
                        : 'bg-stone-900 text-stone-400 border border-stone-800 hover:text-stone-200 hover:border-stone-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Directory Count Indicator */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-800/80">
            <div className="text-xs font-mono text-stone-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Showing <span className="text-stone-100 font-bold font-sans text-sm">{filteredPages.length}</span> soil & crop profiles
            </div>
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="text-xs hover:text-emerald-400 text-stone-500 font-mono transition-colors underline decoration-dotted"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Grid Layout of pages */}
          {filteredPages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPages.map((page, index) => (
                <motion.div
                  key={page.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
                  className="group bg-stone-950 hover:bg-stone-900 border border-stone-850 hover:border-emerald-500/40 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-emerald-950/10"
                >
                  <div>
                    {/* Visual Seed Header */}
                    <div className="relative h-44 w-full bg-stone-900 overflow-hidden">
                      <Image
                        src={page.imageUrl}
                        alt={page.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-stone-950/90 border border-stone-800 text-stone-300 font-mono text-[9px] px-2 py-1 rounded shadow-lg">
                        {page.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-3 h-3 text-emerald-400" />
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                          Keyword: {page.keyword}
                        </span>
                      </div>
                      <h3 className="font-display font-medium text-base text-stone-100 group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
                        {page.title}
                      </h3>
                      <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed mb-4">
                        {page.scientificIntro}
                      </p>
                    </div>
                  </div>

                  {/* Metadata and Link CTA */}
                  <div className="p-5 pt-0 border-t border-stone-900/50 flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono text-stone-500 uppercase">
                      REVISION: 2026
                    </span>
                    <Link
                      href={`/seo-directory/${page.slug}`}
                      className="text-xs text-emerald-400 group-hover:text-emerald-300 font-mono font-bold flex items-center gap-1 transition-colors group-hover:underline"
                    >
                      Read Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-stone-950 rounded-2xl border border-stone-800">
              <BookOpen className="w-12 h-12 text-stone-700 mx-auto mb-4" />
              <h3 className="font-display font-medium text-lg text-white mb-2">No Matching Profiles</h3>
              <p className="text-stone-500 text-xs">
                We couldn&apos;t find any directory listings matching &quot;{searchTerm}&quot; in category &quot;{activeCategory}&quot;.
              </p>
            </div>
          )}
        </div>
      </div>
    </LayoutWrapper>
  );
}
