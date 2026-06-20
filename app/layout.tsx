import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CalGro | Core Domain Asset & Multi-Sector Semantic Registry in California',
  description: 'The definitive digital authority registry, soil metrology parameters, and agricultural systems database for the term CalGro. Review acquisition values, licensing archives, and system indexes for calgro.com.',
  keywords: 'calgro, cal gro, calgro.com, california growers, calcium growth, agricultural metrology, california organic grocers, calibration algorithms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-stone-50 text-stone-900 antialiased selection:bg-emerald-200 selection:text-emerald-950 min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
