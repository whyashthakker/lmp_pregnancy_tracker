import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Common Pregnancy Questions Answered | Your Journey',
  description: 'Get answers to the most frequently asked pregnancy questions. Expert advice on pregnancy symptoms, safety concerns, nutrition, and more.',
  keywords: 'pregnancy questions, pregnancy FAQ, pregnancy concerns, pregnancy safety, pregnancy symptoms questions',
  openGraph: {
    title: 'Common Pregnancy Questions Answered | Your Journey',
    description: 'Expert answers to the most common pregnancy questions and concerns.',
    type: 'article',
  },
};

export default function CommonPregnancyQuestions() {
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
              Common Pregnancy Questions Answered
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Pregnancy brings many questions and concerns. Here are expert answers to the most frequently 
              asked questions from expectant mothers around the world.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Early Pregnancy Questions</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">How do I know if I'm really pregnant?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Early pregnancy signs include missed period, nausea, breast tenderness, fatigue, and frequent urination. 
                  Home pregnancy tests are 99% accurate when used correctly after a missed period.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Take a test with first morning urine for best accuracy</li>
                  <li>Wait until at least the first day of your missed period</li>
                  <li>Follow up with a healthcare provider for confirmation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Is it normal to have some bleeding in early pregnancy?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Light spotting or implantation bleeding around 6-12 days after conception is normal. However, 
                  heavy bleeding, cramping, or clots should be evaluated immediately.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-1">Normal:</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                      <li>Light pink or brown spotting</li>
                      <li>Lasts 1-3 days</li>
                      <li>No severe cramping</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-1">Concerning:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Heavy red bleeding</li>
                      <li>Severe cramping</li>
                      <li>Tissue passing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safety and Lifestyle Questions</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Can I exercise during pregnancy?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Yes! Regular exercise is beneficial for most pregnant women. Aim for 150 minutes of moderate exercise weekly.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-1">Safe Exercises:</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                      <li>Walking</li>
                      <li>Swimming</li>
                      <li>Prenatal yoga</li>
                      <li>Low-impact aerobics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-1">Avoid:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Contact sports</li>
                      <li>Activities with fall risk</li>
                      <li>Hot yoga</li>
                      <li>Scuba diving</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">What foods should I avoid during pregnancy?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Certain foods carry risks during pregnancy due to potential contamination or high mercury levels.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-700 mb-1">Avoid:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Raw or undercooked meats</li>
                      <li>Raw fish and shellfish</li>
                      <li>Unpasteurized dairy products</li>
                      <li>High-mercury fish</li>
                      <li>Raw or runny eggs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-1">Safe Alternatives:</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                      <li>Well-cooked meats</li>
                      <li>Cooked seafood</li>
                      <li>Pasteurized dairy</li>
                      <li>Low-mercury fish</li>
                      <li>Fully cooked eggs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Symptoms and Discomfort Questions</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">How can I manage morning sickness?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Morning sickness affects 70-80% of pregnant women and usually improves by the second trimester.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Natural Remedies:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Eat small, frequent meals</li>
                      <li>Try ginger tea or candies</li>
                      <li>Keep crackers by your bed</li>
                      <li>Stay hydrated</li>
                      <li>Get plenty of rest</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">When to Call Doctor:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Can't keep fluids down</li>
                      <li>Losing weight</li>
                      <li>Signs of dehydration</li>
                      <li>Vomiting blood</li>
                      <li>Severe symptoms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Is it normal to feel so tired?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Extreme fatigue is very common, especially in the first and third trimesters due to hormonal changes 
                  and increased energy demands.
                </p>
                <h4 className="font-medium text-gray-700 mb-1">Ways to Combat Fatigue:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Take short naps when possible</li>
                  <li>Go to bed earlier</li>
                  <li>Eat iron-rich foods</li>
                  <li>Stay hydrated</li>
                  <li>Do light exercise</li>
                  <li>Ask for help with tasks</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Medical and Health Questions</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">How often should I see my healthcare provider?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Regular prenatal care is essential for monitoring both maternal and fetal health.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-orange-700 mb-1">Weeks 4-28:</h4>
                    <p className="text-orange-600 text-sm">Every 4 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-1">Weeks 28-36:</h4>
                    <p className="text-orange-600 text-sm">Every 2 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-1">Weeks 36-40:</h4>
                    <p className="text-orange-600 text-sm">Every week</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">When should I call my doctor immediately?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Certain symptoms require immediate medical attention during pregnancy.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-700 mb-1">Emergency Signs:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Heavy bleeding</li>
                      <li>Severe abdominal pain</li>
                      <li>Persistent headache</li>
                      <li>Vision changes</li>
                      <li>High fever</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-1">Later Pregnancy:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 text-sm">
                      <li>Decreased fetal movement</li>
                      <li>Regular contractions before 37 weeks</li>
                      <li>Water breaking</li>
                      <li>Severe swelling</li>
                      <li>Breathing difficulties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Emotional and Mental Health Questions</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Is it normal to feel anxious about pregnancy?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Anxiety and worry are completely normal during pregnancy. Many women experience concerns about 
                  their baby's health, birth, and becoming a parent.
                </p>
                <h4 className="font-medium text-gray-700 mb-1">Coping Strategies:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Talk to your partner, friends, or family</li>
                  <li>Practice relaxation techniques</li>
                  <li>Join a pregnancy support group</li>
                  <li>Stay informed but avoid excessive googling</li>
                  <li>Consider counseling if anxiety is severe</li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Will my relationship change during pregnancy?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Pregnancy can bring couples closer together but may also create new stresses and challenges.
                </p>
                <h4 className="font-medium text-gray-700 mb-1">Tips for Relationship Health:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Communicate openly about your feelings</li>
                  <li>Include your partner in pregnancy journey</li>
                  <li>Make time for each other</li>
                  <li>Discuss parenting expectations</li>
                  <li>Seek counseling if needed</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="font-medium text-blue-800 mb-2">Remember</h3>
              <p className="text-blue-700">
                Every pregnancy is unique, and what's normal for one person may not be for another. 
                Always trust your instincts and don't hesitate to contact your healthcare provider 
                with any concerns, no matter how small they may seem.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}