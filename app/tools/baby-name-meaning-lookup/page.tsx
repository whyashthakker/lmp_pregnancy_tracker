import { Metadata } from 'next';
import BabyNameMeaningLookupClient from './BabyNameMeaningLookupClient';

export const metadata: Metadata = {
  title: 'Baby Name Meaning Lookup - Discover Name Origins & Meanings | Free Tool',
  description: 'Look up baby name meanings, origins, and popularity. Search thousands of names to find the perfect meaning for your baby boy or girl.',
  keywords: 'baby name meanings, name origins, what does name mean, baby name lookup, name meaning finder, baby name search',
  openGraph: {
    title: 'Baby Name Meaning Lookup - Find Perfect Name Meanings',
    description: 'Discover the meaning and origin of baby names with our comprehensive lookup tool.',
    type: 'article',
  },
};

export default function BabyNameMeaningLookup() {
  return <BabyNameMeaningLookupClient />;
}