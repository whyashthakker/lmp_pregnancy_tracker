import PregnancyTracker from '@/components/pregnancy-tracker';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Egspect | Smart Pregnancy Tracking & Medical Monitoring',
  description: 'Egspect your journey with confidence. Professional pregnancy tracking with comprehensive medical monitoring, milestone tracking, and personalized insights for your unique path to parenthood.',
  keywords: 'Egspect, pregnancy tracker, medical monitoring, prenatal care, fetal development, pregnancy milestones, pregnancy timeline, baby development, pregnancy companion, egspect.com',
  openGraph: {
    title: 'Egspect - Smart Pregnancy Tracking',
    description: 'Join the modern way to track your pregnancy. From first heartbeat to first hello, Egspect provides professional medical tracking with smart insights.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Egspect',
    url: 'https://egspect.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Egspect - Smart Pregnancy Tracking',
    description: 'Professional pregnancy tracking with medical monitoring and personalized insights.',
    creator: '@egspect',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PregnancyTracker />
    </main>
  );
}