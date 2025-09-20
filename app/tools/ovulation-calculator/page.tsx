import { Metadata } from 'next';
import OvulationCalculatorClient from './OvulationCalculatorClient';

export const metadata: Metadata = {
  title: 'Ovulation Calculator - Track Your Fertile Window | Your Journey',
  description: 'Calculate your ovulation date and fertile window to optimize conception chances. Track your menstrual cycle and find the best days to try for pregnancy.',
  keywords: 'ovulation calculator, fertile window, ovulation tracker, conception calculator, fertility calendar, trying to conceive',
  openGraph: {
    title: 'Free Ovulation Calculator - Find Your Fertile Days',
    description: 'Calculate your ovulation date and fertile window to maximize your chances of conception.',
    type: 'article',
  },
};

export default function OvulationCalculator() {
  return <OvulationCalculatorClient />;
}