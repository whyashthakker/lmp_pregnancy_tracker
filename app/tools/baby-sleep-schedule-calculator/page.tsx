import { Metadata } from 'next';
import BabySleepScheduleCalculatorClient from './BabySleepScheduleCalculatorClient';

export const metadata: Metadata = {
  title: 'Baby Sleep Schedule Calculator: Age-Based Sleep Times & Nap Guide | Infant Sleep Patterns',
  description: 'Calculate optimal sleep schedule for your baby by age. Get personalized bedtime, wake times, and nap schedules based on your baby\'s development stage.',
  keywords: 'baby sleep schedule calculator, infant sleep times, newborn sleep schedule, baby nap schedule, sleep schedule by age, baby bedtime calculator',
  openGraph: {
    title: 'Baby Sleep Schedule Calculator: Age-Based Sleep Times & Nap Guide',
    description: 'Create the perfect sleep schedule for your baby with our age-based calculator.',
    type: 'website',
  },
};

export default function BabySleepScheduleCalculator() {
  return <BabySleepScheduleCalculatorClient />;
}