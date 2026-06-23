import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soil Calcium Solutions for Citrus & Avocado Groves | Cal-Gro Tech',
  description: 'Technical dossier on calcium fertilization protocols for California citrus and avocado groves. Analyze cellular structure, rind quality, and root protection methodologies.',
  keywords: 'calcium groves, cal gro citrus, avocado calcium deficiency, orchard soil calibration, calcium soil amendments, fruit rind stability',
};

export default function CalciumGrovesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
