import { Metadata } from 'next';
import BabyNameGeneratorClient from './BabyNameGeneratorClient';

export const metadata: Metadata = {
  title: 'Baby Name Generator - Find Perfect Baby Names | Your Journey',
  description: 'Discover beautiful baby names with our smart name generator. Filter by origin, meaning, popularity, and style to find the perfect name for your baby.',
  keywords: 'baby name generator, baby names, unique baby names, popular baby names, name meanings, boy names, girl names',
  openGraph: {
    title: 'Baby Name Generator - Find Your Perfect Baby Name',
    description: 'Generate beautiful baby names based on your preferences. Find unique, popular, or meaningful names for your little one.',
    type: 'article',
  },
};

export default function BabyNameGenerator() {
  return <BabyNameGeneratorClient />;
}