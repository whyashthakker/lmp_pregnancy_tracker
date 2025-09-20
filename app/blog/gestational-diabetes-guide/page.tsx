import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestational Diabetes: Complete Guide for Expectant Mothers | Your Journey',
  description: 'Comprehensive guide to gestational diabetes during pregnancy. Learn about symptoms, testing, management, and protecting your baby\'s health.',
  keywords: 'gestational diabetes, pregnancy diabetes, glucose test pregnancy, diabetes during pregnancy, pregnancy complications',
  openGraph: {
    title: 'Gestational Diabetes: Complete Guide for Expectant Mothers | Your Journey',
    description: 'Complete guide to understanding and managing gestational diabetes during pregnancy.',
    type: 'article',
  },
};

export default function GestationalDiabetesGuide() {
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
              Gestational Diabetes: Complete Guide
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Gestational diabetes affects 6-9% of pregnancies. Understanding this condition helps ensure 
              the best possible outcome for both mother and baby through proper management and monitoring.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Gestational Diabetes?</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-4">
                Gestational diabetes is a type of diabetes that develops during pregnancy when your body 
                cannot produce enough insulin to meet the increased needs of pregnancy, resulting in 
                high blood sugar levels.
              </p>
              <h3 className="font-medium text-gray-800 mb-2">Key Facts:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Usually develops between 20-24 weeks of pregnancy</li>
                <li>Often has no symptoms</li>
                <li>Usually resolves after delivery</li>
                <li>Increases risk of type 2 diabetes later in life</li>
                <li>Can be managed effectively with proper care</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Risk Factors</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">Higher Risk Factors</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Age 25 or older</li>
                  <li>• Overweight before pregnancy (BMI over 25)</li>
                  <li>• Family history of diabetes</li>
                  <li>• Previous gestational diabetes</li>
                  <li>• Previous large baby (over 9 lbs)</li>
                  <li>• PCOS (Polycystic Ovary Syndrome)</li>
                  <li>• Certain ethnicities (Hispanic, African American, Native American, Asian)</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">Lower Risk Factors</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Under age 25</li>
                  <li>• Normal pre-pregnancy weight</li>
                  <li>• No family history of diabetes</li>
                  <li>• No previous gestational diabetes</li>
                  <li>• Caucasian ethnicity</li>
                  <li>• No history of glucose intolerance</li>
                  <li>• Previous babies normal weight</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testing and Diagnosis</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Glucose Challenge Test (24-28 weeks)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">The Process:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Drink glucose solution (50g)</li>
                      <li>Wait 1 hour</li>
                      <li>Blood test to check glucose level</li>
                      <li>No fasting required</li>
                      <li>Can eat normally before test</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Results:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Normal: Less than 140 mg/dL</li>
                      <li>Borderline: 140-199 mg/dL</li>
                      <li>High: 200 mg/dL or higher</li>
                      <li>High results need follow-up testing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Glucose Tolerance Test (Follow-up)</h3>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-2">3-Hour Test Process:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600 text-sm">
                    <li>Fast for 8-12 hours before test</li>
                    <li>Baseline blood draw (fasting glucose)</li>
                    <li>Drink glucose solution (100g)</li>
                    <li>Blood draws at 1, 2, and 3 hours</li>
                    <li>Diagnosed if 2+ values are elevated</li>
                  </ol>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Managing Gestational Diabetes</h2>
            
            <div className="space-y-8 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Dietary Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Foods to Emphasize:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Complex carbohydrates (whole grains)</li>
                      <li>Lean proteins</li>
                      <li>Non-starchy vegetables</li>
                      <li>Healthy fats (nuts, avocado)</li>
                      <li>High-fiber foods</li>
                      <li>Small, frequent meals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Foods to Limit:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Simple sugars and sweets</li>
                      <li>Refined carbohydrates</li>
                      <li>Sugary drinks</li>
                      <li>Large portions</li>
                      <li>High-glycemic foods</li>
                      <li>Processed foods</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Blood Sugar Monitoring</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Testing Schedule:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Fasting (upon waking)</li>
                      <li>1 hour after each meal</li>
                      <li>Sometimes before meals</li>
                      <li>Bedtime (if recommended)</li>
                      <li>Daily logging required</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Target Levels:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Fasting: 60-95 mg/dL</li>
                      <li>1 hour after meals: less than 140 mg/dL</li>
                      <li>2 hours after meals: less than 120 mg/dL</li>
                      <li>Bedtime: 60-99 mg/dL</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Exercise Guidelines</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Regular exercise helps control blood sugar levels and is safe for most women with gestational diabetes.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Recommended Activities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Walking after meals</li>
                      <li>Swimming</li>
                      <li>Prenatal yoga</li>
                      <li>Stationary cycling</li>
                      <li>Low-impact aerobics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Exercise Guidelines:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>30 minutes most days</li>
                      <li>Moderate intensity</li>
                      <li>Check blood sugar before/after</li>
                      <li>Stay hydrated</li>
                      <li>Stop if feeling unwell</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">When Medication is Needed</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="font-medium text-yellow-800 mb-3">Insulin Treatment</h3>
              <p className="text-yellow-700 text-sm mb-3">
                If diet and exercise don&apos;t adequately control blood sugar levels, insulin may be prescribed. 
                Insulin is safe during pregnancy and doesn&apos;t cross the placenta.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-yellow-700 mb-1">When Insulin is Needed:</h4>
                  <ul className="list-disc list-inside space-y-1 text-yellow-600 text-sm">
                    <li>Blood sugars consistently above target</li>
                    <li>Diet and exercise not effective</li>
                    <li>Baby showing signs of excess growth</li>
                    <li>Polyhydramnios (excess amniotic fluid)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-700 mb-1">Types of Insulin:</h4>
                  <ul className="list-disc list-inside space-y-1 text-yellow-600 text-sm">
                    <li>Rapid-acting (before meals)</li>
                    <li>Long-acting (once or twice daily)</li>
                    <li>Combination therapy</li>
                    <li>Dosing adjusted based on levels</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Potential Complications</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">For Baby</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Macrosomia (large baby over 9 lbs)</li>
                  <li>• Birth injuries from difficult delivery</li>
                  <li>• Low blood sugar after birth</li>
                  <li>• Breathing problems</li>
                  <li>• Increased risk of obesity later</li>
                  <li>• Higher risk of type 2 diabetes</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">For Mother</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• High blood pressure</li>
                  <li>• Preeclampsia</li>
                  <li>• Increased risk of C-section</li>
                  <li>• Type 2 diabetes later in life</li>
                  <li>• Gestational diabetes in future pregnancies</li>
                  <li>• Polyhydramnios (too much amniotic fluid)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Labor, Delivery, and Beyond</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">During Labor and Delivery</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Blood sugar monitoring continues</li>
                  <li>• May need IV insulin during labor</li>
                  <li>• Possible induction if baby is large</li>
                  <li>• C-section may be recommended</li>
                  <li>• Baby&apos;s blood sugar checked after birth</li>
                  <li>• Immediate skin-to-skin contact encouraged</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">After Delivery</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Blood sugars usually return to normal immediately</li>
                  <li>• Glucose test at 6-12 weeks postpartum</li>
                  <li>• Annual diabetes screening recommended</li>
                  <li>• Breastfeeding is encouraged and safe</li>
                  <li>• Healthy lifestyle important long-term</li>
                  <li>• Future pregnancy planning important</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h3 className="font-medium text-green-800 mb-2">The Good News</h3>
              <p className="text-green-700">
                With proper management, women with gestational diabetes can have healthy pregnancies and healthy babies. 
                The key is early detection, careful monitoring, and working closely with your healthcare team to maintain 
                good blood sugar control throughout pregnancy.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}