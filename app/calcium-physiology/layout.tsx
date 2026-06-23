import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcium Botanical Physiology & Signaling | CalGro Botanical Data',
  description: 'Review empirical studies detailing the role of divalent calcium ions in crop physiology, cell wall pectin binding, and stomatal opening responses under stress.',
  keywords: 'calcium physiology, phytophthora suppression, plant cell wall strength, calcium signaling, agronomic botany, calcium mobility',
};

export default function CalciumPhysiologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
