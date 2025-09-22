import { Metadata } from 'next';
import PregnancySafeFoodsClient from './PregnancySafeFoodsClient';

export const metadata: Metadata = {
  title: 'Pregnancy Safe Foods Checker - What Can I Eat While Pregnant? | Free Tool',
  description: 'Quick pregnancy food safety checker. Search thousands of foods to see if they\'re safe during pregnancy. Get instant answers about what you can and cannot eat.',
  keywords: 'pregnancy safe foods, what can I eat pregnant, pregnancy food safety, foods to avoid pregnancy, pregnancy diet checker',
  openGraph: {
    title: 'Pregnancy Safe Foods Checker - Eat Safely',
    description: 'Instant answers about food safety during pregnancy. Search any food to know if it\'s safe to eat.',
    type: 'article',
  },
};

export default function PregnancySafeFoods() {
  return <PregnancySafeFoodsClient />;
}