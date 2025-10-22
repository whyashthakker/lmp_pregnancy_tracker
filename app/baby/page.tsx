import { Metadata } from 'next';
import Link from 'next/link';
import BabyTrackingClient from './BabyTrackingClient';
import { 
  Baby, 
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Baby Health Tracker - Daily Tracking for Feeding, Sleep & Development | EGSpect',
  description: 'Track your baby&apos;s daily activities with our interactive tracker. Monitor feeding, wet diapers, sleep patterns, and tummy time with progress indicators. Free baby health tracking tool.',
  keywords: 'baby tracker, baby health tracking, infant feeding tracker, baby sleep tracker, diaper tracker, tummy time tracker, baby development monitor',
  openGraph: {
    title: 'Baby Health Tracker - Daily Activity Tracking',
    description: 'Interactive baby tracker for monitoring daily feeding, sleep, and development activities with progress indicators.',
    type: 'website',
  },
};





export default function BabyHealthTracking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full">
              <Baby className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Baby Health Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Track your baby&apos;s daily activities with our interactive tool. Monitor feeding, sleep, diapers, and development progress.
          </p>
        </div>

        {/* Baby Tracking Tool */}
        <div className="mb-16">
          <BabyTrackingClient />
        </div>

        {/* Warning Signs */}
        <div className="bg-red-50/80 border-2 border-red-200 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-red-800 mb-4">
                When to Seek Immediate Medical Attention
              </h2>
              <p className="text-red-700 mb-4">
                Contact your pediatrician immediately or call emergency services if your baby shows any of these warning signs:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Difficulty breathing or rapid breathing',
              'High fever (100.4°F/38°C in babies under 3 months)',
              'Persistent vomiting or inability to keep fluids down',
              'Signs of dehydration (dry mouth, no tears, fewer wet diapers)',
              'Extreme lethargy or difficulty waking up',
              'Severe or persistent crying that cannot be consoled',
              'Rash with fever or signs of infection',
              'Any significant changes in eating, sleeping, or behavior patterns'
            ].map((sign, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-red-800 font-medium">{sign}</span>
              </div>
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <Baby className="w-12 h-12 mx-auto mb-4 text-blue-100" />
          <h2 className="text-3xl font-bold mb-4">Start Tracking Your Baby&apos;s Health</h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of parents monitoring their baby&apos;s development with our comprehensive tracking tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/due-date-calculator"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Calculate Due Date
            </Link>
            <Link 
              href="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Health Guides
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Related Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog/pregnancy-warning-signs" className="text-blue-600 hover:text-blue-700 font-medium">
              Pregnancy Warning Signs
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/pregnancy-medical-checkups" className="text-blue-600 hover:text-blue-700 font-medium">
              Medical Checkups Guide
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog/pregnancy-nutrition-essentials" className="text-blue-600 hover:text-blue-700 font-medium">
              Nutrition Essentials
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/tools" className="text-blue-600 hover:text-blue-700 font-medium">
              Pregnancy Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}