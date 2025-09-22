import { Metadata } from 'next';
import PregnancySymptomCheckerClient from './PregnancySymptomCheckerClient';

export const metadata: Metadata = {
  title: 'Pregnancy Symptom Checker - Is This Normal? | Free Tool',
  description: 'Quick pregnancy symptom checker to help you understand if your symptoms are normal or need medical attention. Get instant guidance on common pregnancy concerns.',
  keywords: 'pregnancy symptom checker, is this normal pregnancy, pregnancy symptoms, pregnancy concerns, pregnancy health check',
  openGraph: {
    title: 'Pregnancy Symptom Checker - Is This Normal?',
    description: 'Get instant guidance on pregnancy symptoms and when to contact your healthcare provider.',
    type: 'article',
  },
};

export default function PregnancySymptomChecker() {
  return <PregnancySymptomCheckerClient />;
}