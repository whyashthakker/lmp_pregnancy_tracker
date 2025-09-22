import { Metadata } from 'next';
import LaborSignsCheckerClient from './LaborSignsCheckerClient';

export const metadata: Metadata = {
  title: 'Labor Signs Checker - Am I in Labor? | Free Tool',
  description: 'Interactive labor signs checker to help you determine if you\'re in labor. Step-by-step guide with expert guidance on when to go to the hospital.',
  keywords: 'am I in labor, labor signs checker, signs of labor, when to go to hospital, labor symptoms, early labor signs',
  openGraph: {
    title: 'Labor Signs Checker - Am I in Labor?',
    description: 'Get guidance on labor signs and when to head to the hospital with our interactive checker.',
    type: 'article',
  },
};

export default function LaborSignsChecker() {
  return <LaborSignsCheckerClient />;
}