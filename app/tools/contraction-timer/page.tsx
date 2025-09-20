import { Metadata } from 'next';
import ContractionTimerClient from './ContractionTimerClient';

export const metadata: Metadata = {
  title: 'Contraction Timer - Track Labor Contractions | Your Journey',
  description: 'Time your labor contractions with our easy-to-use contraction timer. Track frequency, duration, and know when to head to the hospital.',
  keywords: 'contraction timer, labor timer, contraction tracker, when to go to hospital, labor contractions, pregnancy labor',
  openGraph: {
    title: 'Contraction Timer - Track Your Labor Progress',
    description: 'Easy-to-use contraction timer to track your labor progress and know when it\'s time to head to the hospital.',
    type: 'article',
  },
};

export default function ContractionTimer() {
  return <ContractionTimerClient />;
}