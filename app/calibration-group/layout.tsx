import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calibration Metrology & NIST Laboratory Standards | CalGro Calibration',
  description: 'Technical metrology reports and standards calibration archives for soil testing laboratories. Learn about standard limits for high accuracy spectral analysis.',
  keywords: 'calibration group, metrology standards, NIST soil analysis, atomic absorption calibration, agricultural lab testing',
};

export default function CalibrationGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
