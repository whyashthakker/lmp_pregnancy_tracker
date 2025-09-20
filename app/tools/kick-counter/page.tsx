import { Metadata } from 'next';
import KickCounterClient from './KickCounterClient';

export const metadata: Metadata = {
  title: 'Kick Counter - Track Baby Movement During Pregnancy | Your Journey',
  description: 'Monitor your baby\'s movements with our kick counter. Track kicks, rolls, and movements to ensure your baby is healthy and active.',
  keywords: 'kick counter, baby movement tracker, fetal movement, baby kicks, pregnancy monitoring, fetal activity',
  openGraph: {
    title: 'Kick Counter - Track Your Baby\'s Movements',
    description: 'Easy-to-use kick counter to monitor your baby\'s movements and ensure healthy fetal activity.',
    type: 'article',
  },
};

export default function KickCounter() {
  return <KickCounterClient />;
}