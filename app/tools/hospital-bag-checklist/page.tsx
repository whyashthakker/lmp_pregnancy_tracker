import { Metadata } from 'next';
import HospitalBagChecklistClient from './HospitalBagChecklistClient';

export const metadata: Metadata = {
  title: 'Hospital Bag Checklist - What to Pack for Labor & Delivery | Free Tool',
  description: 'Complete hospital bag checklist for labor and delivery. Interactive packing guide with essentials for mom, baby, and partner. Never forget important items.',
  keywords: 'hospital bag checklist, labor bag packing list, delivery bag essentials, what to pack for hospital birth, maternity hospital bag',
  openGraph: {
    title: 'Hospital Bag Checklist - Pack Like a Pro',
    description: 'Interactive checklist to ensure you pack everything needed for your hospital stay during labor and delivery.',
    type: 'article',
  },
};

export default function HospitalBagChecklist() {
  return <HospitalBagChecklistClient />;
}