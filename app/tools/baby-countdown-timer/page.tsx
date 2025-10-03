import { Metadata } from 'next';
import BabyCountdownTimerClient from './BabyCountdownTimerClient';

export const metadata: Metadata = {
  title: 'Baby Countdown Timer | LMP Pregnancy Tracker',
  description: 'Count down to your baby\'s arrival with our beautiful, celebratory pregnancy countdown timer. Track days, hours, and minutes until your due date.',
  keywords: 'baby countdown, pregnancy timer, due date countdown, baby arrival timer, pregnancy milestone countdown',
};

export default function BabyCountdownTimerPage() {
  return <BabyCountdownTimerClient />;
}