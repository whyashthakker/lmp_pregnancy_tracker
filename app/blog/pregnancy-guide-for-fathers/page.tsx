import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Complete Pregnancy Guide for Fathers and Partners | Your Journey',
  description: 'Essential guide for expectant fathers and partners. Learn how to support your pregnant partner, prepare for fatherhood, and understand pregnancy from a partner perspective.',
  keywords: 'pregnancy guide for fathers, expectant father, partner pregnancy support, preparing for fatherhood, pregnancy partner guide',
  openGraph: {
    title: 'Complete Pregnancy Guide for Fathers and Partners | Your Journey',
    description: 'Essential guide for expectant fathers and partners during pregnancy.',
    type: 'article',
  },
};

export default function PregnancyGuideForFathers() {
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
              Complete Pregnancy Guide for Fathers & Partners
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Pregnancy is a journey for both partners. This comprehensive guide helps expectant fathers and partners 
              understand their role, provide support, and prepare for the amazing journey ahead.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Your Role as a Partner</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Your Support Makes a Difference</h3>
              <p className="text-gray-700 mb-4">
                Research shows that partners who are actively involved during pregnancy contribute to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Reduced maternal stress and anxiety</li>
                <li>Better pregnancy outcomes</li>
                <li>Stronger family bonds</li>
                <li>Improved postpartum mental health</li>
                <li>Better preparation for parenthood</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supporting Your Partner Through Each Trimester</h2>
            
            <div className="space-y-8 mb-8">
              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">First Trimester (Weeks 1-12)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">What She's Experiencing</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Morning sickness and nausea</li>
                      <li>Extreme fatigue</li>
                      <li>Mood swings</li>
                      <li>Breast tenderness</li>
                      <li>Food aversions and cravings</li>
                      <li>Anxiety about pregnancy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">How You Can Help</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Take over household chores</li>
                      <li>Prepare easy, bland meals</li>
                      <li>Be patient with mood changes</li>
                      <li>Attend prenatal appointments</li>
                      <li>Learn about pregnancy together</li>
                      <li>Offer emotional support and reassurance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Second Trimester (Weeks 13-26)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">What She's Experiencing</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Increased energy levels</li>
                      <li>Growing belly and body changes</li>
                      <li>First baby movements</li>
                      <li>Better mood and appetite</li>
                      <li>Need for new maternity clothes</li>
                      <li>Planning and nesting instincts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">How You Can Help</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Go shopping for maternity clothes</li>
                      <li>Start planning the nursery together</li>
                      <li>Attend the anatomy scan</li>
                      <li>Begin discussing baby names</li>
                      <li>Take pregnancy photos</li>
                      <li>Research baby gear and essentials</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Third Trimester (Weeks 27-40)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">What She's Experiencing</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Physical discomfort and fatigue</li>
                      <li>Difficulty sleeping</li>
                      <li>Braxton Hicks contractions</li>
                      <li>Anxiety about labor and delivery</li>
                      <li>Nesting behavior intensifies</li>
                      <li>Emotional preparation for baby</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">How You Can Help</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Help with physical comfort measures</li>
                      <li>Attend childbirth classes together</li>
                      <li>Finish nursery preparations</li>
                      <li>Pack hospital bags</li>
                      <li>Practice labor breathing techniques</li>
                      <li>Be on standby for labor signs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Practical Ways to Show Support</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-4">Emotional Support</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Listen without trying to "fix" everything</li>
                  <li>• Validate her feelings and experiences</li>
                  <li>• Be patient with mood swings</li>
                  <li>• Offer encouragement and reassurance</li>
                  <li>• Show excitement about the baby</li>
                  <li>• Communicate your own feelings openly</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-4">Physical Support</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Help with household chores</li>
                  <li>• Massage her feet and back</li>
                  <li>• Carry heavy items</li>
                  <li>• Prepare healthy meals</li>
                  <li>• Drive to appointments</li>
                  <li>• Help her get comfortable</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preparing for Fatherhood</h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Educate Yourself</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Read pregnancy and parenting books</li>
                  <li>Attend prenatal classes and tours</li>
                  <li>Learn about newborn care basics</li>
                  <li>Understand the stages of labor</li>
                  <li>Research feeding options (breastfeeding/formula)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Financial Preparation</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Review health insurance coverage</li>
                  <li>Start or increase emergency savings</li>
                  <li>Budget for baby-related expenses</li>
                  <li>Consider life insurance needs</li>
                  <li>Plan for maternity/paternity leave</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Practical Preparations</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Install car seat correctly</li>
                  <li>Childproof your home</li>
                  <li>Learn basic baby care skills</li>
                  <li>Prepare the nursery</li>
                  <li>Stock up on baby essentials</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Managing Your Own Emotions</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h3 className="font-medium text-yellow-800 mb-3">It's Normal to Feel</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                  <li>Excited and anxious at the same time</li>
                  <li>Worried about being a good father</li>
                  <li>Concerned about financial responsibilities</li>
                  <li>Uncertain about the changes ahead</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                  <li>Protective of your partner and baby</li>
                  <li>Overwhelmed by all the information</li>
                  <li>Left out during pregnancy sometimes</li>
                  <li>Questioning your readiness</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Communication Tips</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Effective Communication</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Share your fears and excitement openly</li>
                  <li>Ask questions about her experience</li>
                  <li>Discuss parenting philosophies early</li>
                  <li>Make decisions together</li>
                  <li>Express your needs and concerns</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-3">What to Avoid</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Dismissing her concerns as "hormones"</li>
                  <li>Making decisions without consulting her</li>
                  <li>Comparing her to other pregnant women</li>
                  <li>Complaining about pregnancy inconveniences</li>
                  <li>Taking mood swings personally</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="font-medium text-blue-800 mb-2">Remember</h3>
              <p className="text-blue-700">
                Your journey to fatherhood starts now, not when the baby is born. By being present, supportive, 
                and engaged throughout pregnancy, you're already becoming the father your child needs. 
                Trust yourself, communicate openly, and enjoy this incredible journey together.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}