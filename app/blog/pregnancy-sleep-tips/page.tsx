import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pregnancy Sleep Tips and Positions | Your Journey',
  description: 'Get better sleep during pregnancy with our comprehensive guide on safe sleeping positions, common sleep problems, and practical solutions.',
  keywords: 'pregnancy sleep positions, pregnancy insomnia, sleep during pregnancy, pregnancy sleep problems, safe sleeping while pregnant',
  openGraph: {
    title: 'Pregnancy Sleep Tips and Positions | Your Journey',
    description: 'Get better sleep during pregnancy with safe sleeping positions and practical tips.',
    type: 'article',
  },
};

export default function PregnancySleepTips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="text-pink-600 hover:text-pink-700 font-medium mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Pregnancy Sleep Tips and Safe Positions
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Quality sleep is essential during pregnancy for both maternal health and fetal development. 
              Learn about safe sleeping positions, common sleep challenges, and effective solutions.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safe Sleeping Positions</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-medium text-green-800 mb-3">✓ Recommended: Left Side</h3>
                <p className="text-green-700 mb-3">The best position for you and your baby:</p>
                <ul className="list-disc list-inside space-y-1 text-green-700">
                  <li>Improves blood flow to the placenta</li>
                  <li>Reduces pressure on blood vessels</li>
                  <li>Helps kidney function</li>
                  <li>May reduce swelling in ankles and feet</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-medium text-yellow-800 mb-3">⚠️ Acceptable: Right Side</h3>
                <p className="text-yellow-700 mb-3">Generally safe but not optimal:</p>
                <ul className="list-disc list-inside space-y-1 text-yellow-700">
                  <li>Better than back sleeping</li>
                  <li>Switch between sides during night</li>
                  <li>Use pillows for support</li>
                  <li>Listen to your body&apos;s comfort</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-medium text-red-800 mb-3">✗ Avoid After First Trimester</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-red-700 mb-2">Back Sleeping</h4>
                  <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                    <li>Can compress major blood vessels</li>
                    <li>May reduce blood flow to baby</li>
                    <li>Can cause dizziness or nausea</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-700 mb-2">Stomach Sleeping</h4>
                  <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                    <li>Becomes uncomfortable as belly grows</li>
                    <li>May put pressure on uterus</li>
                    <li>Generally not harmful in early pregnancy</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Sleep Problems by Trimester</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">First Trimester</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Common Issues:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Frequent urination</li>
                      <li>Nausea and morning sickness</li>
                      <li>Breast tenderness</li>
                      <li>Increased fatigue</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Solutions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Reduce fluids before bedtime</li>
                      <li>Keep crackers by bedside</li>
                      <li>Use supportive bras</li>
                      <li>Take naps when needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Second Trimester</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Common Issues:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Growing belly discomfort</li>
                      <li>Leg cramps</li>
                      <li>Heartburn</li>
                      <li>Vivid dreams</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Solutions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Use pregnancy pillows</li>
                      <li>Stretch before bed</li>
                      <li>Avoid spicy foods</li>
                      <li>Practice relaxation techniques</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Third Trimester</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Common Issues:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Difficulty finding comfortable position</li>
                      <li>Frequent bathroom trips</li>
                      <li>Shortness of breath</li>
                      <li>Baby movements at night</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Solutions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Multiple pillow support system</li>
                      <li>Elevate upper body slightly</li>
                      <li>Empty bladder before sleep</li>
                      <li>Gentle movement to calm baby</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sleep Aids and Tools</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">Pregnancy Pillows</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Wedge pillows for belly support</li>
                  <li>• Full-body pregnancy pillows</li>
                  <li>• Between-the-knees pillows</li>
                  <li>• Adjustable support pillows</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">Sleep Environment</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Cool, dark room</li>
                  <li>• Comfortable mattress</li>
                  <li>• White noise machine</li>
                  <li>• Blackout curtains</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">Relaxation Techniques</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Deep breathing exercises</li>
                  <li>• Progressive muscle relaxation</li>
                  <li>• Prenatal meditation</li>
                  <li>• Gentle stretching</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sleep Hygiene Tips</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Do&apos;s</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Maintain regular sleep schedule</li>
                  <li>Create relaxing bedtime routine</li>
                  <li>Exercise earlier in the day</li>
                  <li>Use bedroom only for sleep</li>
                  <li>Keep a sleep diary</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Don&apos;ts</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Avoid caffeine late in day</li>
                  <li>Don&apos;t eat large meals before bed</li>
                  <li>Limit screen time before sleep</li>
                  <li>Avoid intense exercise at night</li>
                  <li>Don&apos;t force sleep if not tired</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-800">
                <strong>When to Contact Your Healthcare Provider:</strong> If you experience persistent insomnia, 
                loud snoring, sleep apnea symptoms, or restless leg syndrome, discuss these issues with your doctor 
                for appropriate treatment options.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}