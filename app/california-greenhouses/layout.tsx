import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'California High-Tech Greenhouse Cultivation & Soil Metrics',
  description: 'Technical standards and nutrient logs for controlled environment greenhouse facilities in California. Review hydration formulas, optimal calcium compounds, and ventilation indices.',
  keywords: 'california greenhouses, cal-gro hydroponics, greenhouse calcium injection, automated growing climate, CEA soil sensors, greenhouse calibration',
};

export default function CaliforniaGreenhousesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
