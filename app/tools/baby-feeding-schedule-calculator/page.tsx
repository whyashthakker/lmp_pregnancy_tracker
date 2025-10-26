import { Metadata } from 'next';
import BabyFeedingScheduleCalculatorClient from './BabyFeedingScheduleCalculatorClient';

export const metadata: Metadata = {
  title: 'Baby Feeding Schedule Calculator: Personalized Feeding Times by Age | Newborn Feeding Guide',
  description: 'Calculate your baby\'s feeding schedule based on age, weight, and feeding method. Get personalized timing recommendations for breast and bottle feeding.',
  keywords: 'baby feeding schedule calculator, newborn feeding times, infant feeding schedule, baby feeding frequency, breastfeeding schedule, bottle feeding schedule',
  openGraph: {
    title: 'Baby Feeding Schedule Calculator: Personalized Feeding Times by Age',
    description: 'Create a personalized feeding schedule for your baby with our free calculator.',
    type: 'website',
  },
};

export default function BabyFeedingScheduleCalculator() {
  return <BabyFeedingScheduleCalculatorClient />;
}