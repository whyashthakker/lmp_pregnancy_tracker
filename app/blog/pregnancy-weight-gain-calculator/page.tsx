import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pregnancy Weight Gain Calculator | Your Journey',
  description: 'Calculate healthy weight gain during pregnancy with our comprehensive calculator. Learn about recommended weight gain by trimester and BMI.',
  keywords: 'pregnancy weight gain calculator, healthy pregnancy weight, BMI pregnancy, weight gain by trimester',
  openGraph: {
    title: 'Pregnancy Weight Gain Calculator | Your Journey',
    description: 'Calculate healthy weight gain during pregnancy with our comprehensive calculator.',
    type: 'article',
  },
};

export default function PregnancyWeightGainCalculator() {
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
              Pregnancy Weight Gain Calculator
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Understanding healthy weight gain during pregnancy is crucial for both maternal and fetal health. 
              Use our calculator to determine your recommended weight gain based on your pre-pregnancy BMI.
            </p>
          </header>

          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Weight Gain Recommendations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Underweight (BMI &lt; 18.5)</h3>
                  <p className="text-gray-600">28-40 lbs total weight gain</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Normal Weight (BMI 18.5-24.9)</h3>
                  <p className="text-gray-600">25-35 lbs total weight gain</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Overweight (BMI 25-29.9)</h3>
                  <p className="text-gray-600">15-25 lbs total weight gain</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Obese (BMI ≥ 30)</h3>
                  <p className="text-gray-600">11-20 lbs total weight gain</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Weight Gain by Trimester</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">1</span>
                <div>
                  <strong>First Trimester:</strong> 1-4.5 lbs total (slow, steady gain)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">2</span>
                <div>
                  <strong>Second Trimester:</strong> 1 lb per week on average
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">3</span>
                <div>
                  <strong>Third Trimester:</strong> 1 lb per week on average
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Factors Affecting Weight Gain</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Multiple Pregnancy</h3>
                <p className="text-gray-600">Twins or multiples require higher weight gain (37-54 lbs for twins)</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Age and Activity Level</h3>
                <p className="text-gray-600">Younger mothers and those with higher activity levels may need more calories</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Important:</strong> These are general guidelines. Always consult with your healthcare provider 
                for personalized recommendations based on your individual health status and pregnancy circumstances.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Healthy Weight Gain Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Eat nutrient-dense foods rather than empty calories</li>
              <li>Include protein, healthy fats, and complex carbohydrates</li>
              <li>Stay hydrated with plenty of water</li>
              <li>Engage in regular, moderate exercise (with doctor approval)</li>
              <li>Monitor weight gain weekly, not daily</li>
              <li>Don't diet during pregnancy - focus on healthy eating</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}