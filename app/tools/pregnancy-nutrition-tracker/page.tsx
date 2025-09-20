import { Metadata } from 'next';
import PregnancyNutritionTrackerClient from './PregnancyNutritionTrackerClient';

export const metadata: Metadata = {
  title: 'Pregnancy Nutrition Tracker - Daily Nutrient Guide | Your Journey',
  description: 'Track essential nutrients during pregnancy. Monitor your daily intake of folate, iron, calcium, and protein to ensure healthy baby development.',
  keywords: 'pregnancy nutrition tracker, prenatal nutrition, pregnancy diet, folic acid, iron, calcium, protein pregnancy, healthy pregnancy eating',
  openGraph: {
    title: 'Pregnancy Nutrition Tracker - Eat Right for Baby',
    description: 'Track your daily nutrition intake during pregnancy with our comprehensive nutrient tracker.',
    type: 'article',
  },
};

export default function PregnancyNutritionTracker() {
  return <PregnancyNutritionTrackerClient />;
}