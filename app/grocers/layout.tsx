import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'West Coast Grocer Distribution & Logistics | CalGro Freight Lanes',
  description: 'Logistics analytics mapping agricultural supply corridors, premium organic grocery chains, and fresh produce storage metrics across the Pacific freight corridors.',
  keywords: 'grocers, West Coast grocers, organic grocery logistics, food supply chain, refrigerated cargo routes, cold storage transportation',
};

export default function GrocersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
