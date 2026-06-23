import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'California Growers Cooperative | Organic Soil Nutrition Standards',
  description: 'Access the regional union registries and guidelines published by the California Growers Cooperative. Standard soil schedules for organic farming in California.',
  keywords: 'california growers, growers cooperative, West Coast organic farming, CCOF soil rules, crop nourishment guidelines',
};

export default function CaliforniaGrowersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
