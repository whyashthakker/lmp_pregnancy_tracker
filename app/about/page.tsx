import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Baby, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - egspect.com',
  description: 'Learn about egspect.com - a learning project by goyashy exploring pregnancy tracking tools and helpful resources for expecting families.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            About egspect.com
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A learning and exploration project by <a href="https://goyashy.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-medium">goyashy</a>, 
            focusing on pregnancy tracking tools and resources for expecting families.
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
            A Learning Journey ❤️
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            egspect.com represents my exploration and learning in building helpful digital experiences. 
            As a new father and AI instructor with 12+ years in tech, this project combines my passion 
            for creating useful tools with the lived experience of the pregnancy journey.
          </p>
          <p className="text-gray-500 text-sm mb-6 max-w-xl mx-auto">
            This app showcases my dedication to learning new technologies and building 
            meaningful products that solve real problems for expecting families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Start Your Journey
              <Heart className="w-4 h-4" />
            </Link>
            <a 
              href="https://goyashy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-all"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}