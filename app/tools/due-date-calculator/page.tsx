import { Metadata } from 'next';
import DueDateCalculatorClient from './DueDateCalculatorClient';

export const metadata: Metadata = {
  title: 'Pregnancy Due Date Calculator - Accurate EDD Calculator | Your Journey',
  description: 'Calculate your baby\'s due date with our accurate pregnancy calculator. Get your estimated delivery date (EDD) based on your last menstrual period or conception date.',
  keywords: 'due date calculator, pregnancy calculator, EDD calculator, estimated delivery date, pregnancy due date, when is my baby due',
  openGraph: {
    title: 'Free Pregnancy Due Date Calculator - When Is My Baby Due?',
    description: 'Calculate your pregnancy due date instantly. Get accurate estimated delivery date based on LMP or conception date.',
    type: 'article',
  },
};

export default function DueDateCalculator() {
  return <DueDateCalculatorClient />;
}