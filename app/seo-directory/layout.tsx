import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CalGro Scientific Agronomy Directory & Articles Index',
  description: 'Search hundreds of localized crop reports, soil moisture calibrations, calcium formulation indices, and organic certification guides for California growers.',
  keywords: 'agronomy directory, calgro database, soil study search, California crop metrics, organic farming research',
};

export default function SeoDirectoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
