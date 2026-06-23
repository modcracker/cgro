import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cal-Gro Agronomy & Soil Nutrients | California Soil Standards',
  description: 'Technical research dossier of soil penetration indexes, crop-specific ratios, and calibration metrics for Cal-Gro. Review California soil base saturation targets and soil chemistry parameters.',
  keywords: 'cal-gro agronomy, calcium soil, soil pH, base saturation, calcium growth optimization, California orchards',
};

export default function AgronomyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
