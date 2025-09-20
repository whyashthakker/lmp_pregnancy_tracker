import { Metadata } from 'next';
import BabySizeComparisonClient from './BabySizeComparisonClient';

export const metadata: Metadata = {
  title: 'Baby Size by Week - Pregnancy Size Comparison Chart | Your Journey',
  description: 'Track your baby\'s growth week by week with fruit and vegetable size comparisons. See how big your baby is at every stage of pregnancy.',
  keywords: 'baby size by week, pregnancy size comparison, baby growth chart, fetus size, baby development by week, pregnancy milestones',
  openGraph: {
    title: 'Baby Size Comparison - How Big Is My Baby This Week?',
    description: 'See how your baby grows week by week with fun size comparisons to fruits and everyday objects.',
    type: 'article',
  },
};

export default function BabySizeComparison() {
  return <BabySizeComparisonClient />;
}