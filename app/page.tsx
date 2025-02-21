import PregnancyTracker from '@/components/ui/tracker-app';
import { Baby } from 'lucide-react';
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
    title: 'Egspect - Smart Pregnancy Companion',
    description: 'Track your pregnancy journey with precision and care. Professional medical monitoring meets modern technology.',
    site: '@egspect',
  },
  authors: [{ name: 'Egspect Team' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.egspect.com'
  }
};

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Baby className="w-10 h-10 text-indigo-600" />
            <h1 className="font-pixel text-4xl text-indigo-600 tracking-tight">
              egspect
            </h1>
          </div>
          <p className="text-indigo-400 text-lg font-light">
            Smart pregnancy tracking for modern parents
          </p>
        </div>
        <PregnancyTracker />
      </div>
    </main>
  );
}