import { Metadata } from 'next';
import PregnancyWeekCalculatorClient from './PregnancyWeekCalculatorClient';

export const metadata: Metadata = {
  title: 'Pregnancy Week Calculator - How Many Weeks Pregnant Am I? | Your Journey',
  description: 'Calculate exactly how many weeks and days pregnant you are. Get detailed information about your current pregnancy week, baby development, and trimester.',
  keywords: 'pregnancy week calculator, how many weeks pregnant, pregnancy weeks, gestational age calculator, pregnancy timeline',
  openGraph: {
    title: 'Pregnancy Week Calculator - How Many Weeks Pregnant Am I?',
    description: 'Find out exactly how many weeks pregnant you are with our detailed pregnancy week calculator.',
    type: 'article',
  },
};

export default function PregnancyWeekCalculator() {
  return <PregnancyWeekCalculatorClient />;
}