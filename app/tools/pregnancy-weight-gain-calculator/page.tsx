import { Metadata } from 'next';
import PregnancyWeightGainCalculatorClient from './PregnancyWeightGainCalculatorClient';

export const metadata: Metadata = {
  title: 'Pregnancy Weight Gain Calculator - Healthy Weight Tracking | Your Journey',
  description: 'Calculate healthy weight gain during pregnancy based on your BMI. Track your progress and get personalized recommendations for safe pregnancy weight management.',
  keywords: 'pregnancy weight gain calculator, healthy pregnancy weight, BMI pregnancy, pregnancy weight tracking, safe weight gain pregnancy',
  openGraph: {
    title: 'Pregnancy Weight Gain Calculator - Track Healthy Weight Gain',
    description: 'Monitor your pregnancy weight gain with our BMI-based calculator. Get personalized recommendations for healthy weight management.',
    type: 'article',
  },
};

export default function PregnancyWeightGainCalculator() {
  return <PregnancyWeightGainCalculatorClient />;
}