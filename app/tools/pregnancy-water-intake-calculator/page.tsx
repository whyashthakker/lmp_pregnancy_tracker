import { Metadata } from 'next';
import PregnancyWaterIntakeCalculatorClient from './PregnancyWaterIntakeCalculatorClient';

export const metadata: Metadata = {
  title: 'Pregnancy Water Intake Calculator: Daily Hydration Needs | Pregnancy Hydration Guide',
  description: 'Calculate your daily water needs during pregnancy and breastfeeding. Get personalized hydration recommendations based on weight, activity, and trimester.',
  keywords: 'pregnancy water intake calculator, hydration during pregnancy, daily water needs pregnant, pregnancy hydration calculator, how much water pregnancy',
  openGraph: {
    title: 'Pregnancy Water Intake Calculator: Daily Hydration Needs',
    description: 'Calculate your personalized daily water intake needs during pregnancy with our free calculator.',
    type: 'website',
  },
};

export default function PregnancyWaterIntakeCalculator() {
  return <PregnancyWaterIntakeCalculatorClient />;
}