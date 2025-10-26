import { Metadata } from 'next';
import PregnancyCalorieCalculatorClient from './PregnancyCalorieCalculatorClient';

export const metadata: Metadata = {
  title: 'Pregnancy Calorie Calculator: Daily Calorie Needs by Trimester | Nutrition Guide',
  description: 'Calculate your daily calorie needs during pregnancy by trimester. Get personalized nutrition recommendations based on your pre-pregnancy weight and activity level.',
  keywords: 'pregnancy calorie calculator, daily calories pregnant, pregnancy nutrition calculator, trimester calorie needs, pregnancy weight gain calories',
  openGraph: {
    title: 'Pregnancy Calorie Calculator: Daily Calorie Needs by Trimester',
    description: 'Calculate your personalized daily calorie needs during pregnancy with our free calculator.',
    type: 'website',
  },
};

export default function PregnancyCalorieCalculator() {
  return <PregnancyCalorieCalculatorClient />;
}