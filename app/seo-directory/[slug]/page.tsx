import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import LayoutWrapper from '@/components/LayoutWrapper';
import { seoPages } from '@/lib/seoData';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  ShieldCheck, 
  Settings, 
  Droplet, 
  Activity, 
  FileText,
  Share2,
  ExternalLink
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate Dynamic Metadata for SEO bots
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);
  
  if (!page) {
    return {
      title: 'Profile Not Found | CalGro Agronomic Registry',
    };
  }

  return {
    title: `${page.title} - CalGro Directory`,
    description: page.metaDescription,
    keywords: `${page.keyword}, calgro, cal-gro, caligrow, california growers, soil calcium, agronomical calibration, organic soil modifiers`,
    openGraph: {
      title: `${page.title} | CalGro Diagnostic Archive`,
      description: page.metaDescription,
      url: `https://www.calgro.com/seo-directory/${page.slug}`,
      siteName: 'CalGro Agronomic Registry',
      images: [
        {
          url: page.imageUrl,
          width: 800,
          height: 600,
          alt: page.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.metaDescription,
      images: [page.imageUrl],
    },
  };
}

// Generate static routes at build time so they compile instantly!
export async function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function SeoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  // Generate structured schema.org JSON-LD data
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': page.title,
    'description': page.metaDescription,
    'image': page.imageUrl,
    'category': page.category,
    'about': {
      '@type': 'Thing',
      'name': page.keyword,
      'description': `Agricultural applications and systems corresponding to ${page.keyword} within the state of California.`
    },
    'author': {
      '@type': 'Organization',
      'name': 'CalGro Scientific Registry Board',
      'url': 'https://www.calgro.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CalGro.com Archive Division',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://picsum.photos/seed/calgro_logo/200/200'
      }
    },
    'datePublished': '2026-01-15T08:00:00+08:00',
    'dateModified': '2026-06-20T12:00:00+08:00',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://www.calgro.com/seo-directory/${page.slug}`
    }
  };

  return (
    <LayoutWrapper>
      {/* Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="flex-1 bg-stone-900 text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb back navigation */}
          <Link
            href="/seo-directory"
            className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-emerald-400 transition-colors font-mono uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Agronomy Directory
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2.5 items-center mb-4">
              <span className="text-[10px] font-mono font-bold uppercase py-1 px-2.5 bg-emerald-950 text-emerald-400 border border-emerald-900/50 rounded">
                Topic Class: {page.category}
              </span>
              <span className="text-[10px] font-mono text-stone-500 uppercase flex items-center gap-1">
                <Calendar className="w-3 h-3 text-stone-600" /> Modified June 2026
              </span>
              <span className="text-[10px] font-mono text-stone-500 uppercase flex items-center gap-1">
                <User className="w-3 h-3 text-stone-600" /> Agronomic Board
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-white mb-6 leading-tight">
              {page.title}
            </h1>
            
            <p className="text-stone-400 text-sm md:text-base leading-relaxed italic border-l-2 border-emerald-500 pl-4 py-1">
              &quot;{page.metaDescription}&quot;
            </p>
          </div>

          {/* Featured Header Image */}
          <div className="relative h-[25rem] w-full rounded-xl overflow-hidden border border-stone-800 bg-stone-950 mb-10 shadow-2xl">
            <Image
              src={page.imageUrl}
              alt={page.title}
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 1200px) 100vw, 800px"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
              <div className="text-left">
                <span className="text-[9px] font-mono text-emerald-400 block tracking-wider uppercase font-semibold">
                  Primary Target Keyword
                </span>
                <span className="text-xs font-mono font-bold text-white bg-stone-900/90 border border-stone-800 px-2.5 py-1 rounded inline-block">
                  {page.keyword}
                </span>
              </div>
              <div className="bg-stone-900/90 border border-stone-800 px-3 py-1.5 rounded flex items-center gap-1.5 text-[10px] font-mono text-stone-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Reference
              </div>
            </div>
          </div>

          {/* Main Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content Column (Main content) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Scientific Introduction section */}
              <section className="bg-stone-950 border border-stone-850 p-6 sm:p-8 rounded-xl shadow-lg">
                <h2 className="text-lg font-display text-emerald-400 flex items-center gap-2 mb-4 font-semibold">
                  <FileText className="w-4 h-4 text-emerald-500" /> Agronomic Abstract
                </h2>
                <div className="text-xs sm:text-sm text-stone-300 leading-relaxed space-y-4">
                  <p>{page.scientificIntro}</p>
                </div>
              </section>

              {/* Advanced Chemistry/Methodology section */}
              <section className="bg-stone-950 border border-stone-850 p-6 sm:p-8 rounded-xl shadow-lg">
                <h2 className="text-lg font-display text-emerald-400 flex items-center gap-2 mb-4 font-semibold">
                  <Droplet className="w-4 h-4 text-emerald-500" /> Field Chemistry & Methodology
                </h2>
                <div className="text-xs sm:text-sm text-stone-300 leading-relaxed space-y-4">
                  <p>{page.methodology}</p>
                  <p className="p-3 bg-stone-900 rounded border border-stone-800 text-[11px] font-mono text-stone-400 leading-normal">
                    [METROLOGICAL NOTE]: Calibration parameter maps enforce strict baseline ratio profiles across exchange pathways. Under USDA rules, no chemical ligands showing molecular residues in edible skins are permitted.
                  </p>
                </div>
              </section>

              {/* Analytical Conclusion */}
              <section className="bg-stone-950 border border-stone-850 p-6 sm:p-8 rounded-xl shadow-lg">
                <h2 className="text-lg font-display text-emerald-400 flex items-center gap-2 mb-4 font-semibold">
                  <Activity className="w-4 h-4 text-emerald-500" /> Core Scientific Outcomes
                </h2>
                <div className="text-xs sm:text-sm text-stone-300 leading-relaxed space-y-4">
                  <p>{page.concludingSummary}</p>
                </div>
              </section>
            </div>

            {/* Right Metric Panel Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Calibration Constants Card */}
              <div className="bg-stone-950 border border-stone-850 p-5 rounded-xl shadow-lg">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-4 border-b border-stone-800 pb-3">
                  <Settings className="w-3.5 h-3.5 text-emerald-500" /> KEY PARAMETERS
                </div>
                
                <div className="space-y-4">
                  {page.keyMetrics.map((metric) => (
                    <div key={metric.label} className="bg-stone-900 border border-stone-850 p-3 rounded">
                      <span className="block text-[10px] font-mono text-stone-500 uppercase leading-snug">
                        {metric.label}
                      </span>
                      <span className="block text-sm font-sans font-medium text-stone-100 mt-1">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Escrow and domain transfer prompt */}
              <div className="bg-gradient-to-br from-emerald-950/20 to-stone-950 border border-emerald-900/30 p-5 rounded-xl text-center shadow-lg">
                <h3 className="font-display font-medium text-sm text-emerald-400 mb-2">
                  Acquire CalGro.com Domain Asset
                </h3>
                <p className="text-[11px] text-stone-400 leading-relaxed mb-4">
                  This educational registry is hosted on the premium domain <strong className="text-stone-300">CalGro.com</strong>, 
                  which is available for commercial or agricultural acquisition.
                </p>
                <a
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=calgro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-stone-950 font-mono text-xs font-bold py-2.5 px-4 rounded-lg transition-all"
                >
                  Verify on GoDaddy <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Informative Share Card */}
              <div className="bg-stone-950 border border-stone-850 p-5 rounded-xl text-center shadow-lg">
                <div className="text-stone-400 text-xs font-mono uppercase flex items-center justify-center gap-1.5 mb-3">
                  <Share2 className="w-3.5 h-3.5 text-stone-500" /> Reference Citation
                </div>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  This profile is published online as an agricultural research reference. You may share and copy extracts with proper attribution under educational guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Back navigation */}
          <div className="mt-12 pt-6 border-t border-stone-800 flex justify-between items-center">
            <Link
              href="/seo-directory"
              className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-emerald-400 transition-colors uppercase tracking-wider font-mono font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to directory
            </Link>
            
            <a
              href="https://feelize.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-stone-500 hover:text-emerald-400 transition-colors"
            >
              Constructed by Feelize
            </a>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
