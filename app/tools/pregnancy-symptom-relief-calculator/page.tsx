import { Metadata } from 'next';
import PregnancySymptomReliefCalculatorClient from './PregnancySymptomReliefCalculatorClient';

export const metadata: Metadata = {
  title: 'Pregnancy Symptom Relief Calculator: Safe Remedies & Solutions | Natural Pregnancy Relief',
  description: 'Get personalized safe remedies for common pregnancy symptoms. Find natural relief solutions for nausea, heartburn, back pain, and other pregnancy discomforts.',
  keywords: 'pregnancy symptom relief calculator, safe pregnancy remedies, natural pregnancy relief, pregnancy discomfort solutions, pregnancy symptoms treatment',
  openGraph: {
    title: 'Pregnancy Symptom Relief Calculator: Safe Remedies & Solutions',
    description: 'Find safe, personalized relief solutions for your pregnancy symptoms with our comprehensive calculator.',
    type: 'website',
  },
};

export default function PregnancySymptomReliefCalculator() {
  return <PregnancySymptomReliefCalculatorClient />;
}