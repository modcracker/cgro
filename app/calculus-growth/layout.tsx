import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculus of Botanical Growth | CalGro Mathematical Models',
  description: 'Examine differential calculus growth rate models and logistic curve functions mapping California crop yield rates with Cal-Gro nutrient application frequency.',
  keywords: 'calculus of growth, growth rate formulas, crop yield calculus, logistic density, differential equations agronomy, growth velocity',
};

export default function CalculusGrowthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
