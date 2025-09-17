import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Baby, Shield, Users } from 'lucide-react';
import { Navigation } from '@/components/ui/navigation';

export const metadata: Metadata = {
  title: 'About Us - Pregnancy Tracker',
  description: 'Learn about our mission to support expecting mothers with simple, intuitive pregnancy tracking tools and helpful resources.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            About Pregnancy Tracker
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We believe every pregnancy journey deserves simple, beautiful tools 
            to track precious moments and milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-pink-500" />
              <h2 className="text-2xl font-light text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide expecting mothers and their partners with an intuitive, 
              stress-free way to track their pregnancy journey. We focus on what 
              matters most: celebrating each week, understanding your baby&apos;s 
              development, and creating lasting memories.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-light text-gray-800">Privacy First</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your pregnancy data is stored locally on your device. We don&apos;t 
              collect, store, or share your personal information. Your journey 
              remains private and secure, exactly as it should be.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Baby className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-light text-gray-800">Simple Tracking</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We&apos;ve eliminated complex medical jargon and overwhelming features. 
              Instead, we focus on clear, helpful information about your baby&apos;s 
              growth, weekly insights, and simple symptom tracking.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-light text-gray-800">Partner Inclusive</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Pregnancy is a journey for both parents. Our tracker includes 
              helpful tips for partners, making it easy for both of you to 
              stay informed and connected throughout the pregnancy.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-light text-gray-800 mb-4">
            Built with Love
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Every feature in Pregnancy Tracker has been thoughtfully designed 
            with expecting families in mind. We understand that pregnancy can 
            be overwhelming, so we&apos;ve made tracking your journey as simple 
            and beautiful as possible.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            Start Your Journey
            <Heart className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}