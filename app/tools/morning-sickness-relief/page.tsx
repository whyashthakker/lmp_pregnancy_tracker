import { Metadata } from 'next';
import MorningSicknessReliefClient from './MorningSicknessReliefClient';

export const metadata: Metadata = {
  title: 'Morning Sickness Relief Finder - Natural Remedies & Tips | Free Tool',
  description: 'Find personalized morning sickness relief based on your symptoms. Natural remedies, foods, and tips to help with pregnancy nausea and vomiting.',
  keywords: 'morning sickness relief, pregnancy nausea remedies, natural morning sickness treatment, pregnancy vomiting help, first trimester nausea',
  openGraph: {
    title: 'Morning Sickness Relief Finder - Feel Better Fast',
    description: 'Get personalized relief recommendations for morning sickness based on your specific symptoms.',
    type: 'article',
  },
};

export default function MorningSicknessRelief() {
  return <MorningSicknessReliefClient />;
}