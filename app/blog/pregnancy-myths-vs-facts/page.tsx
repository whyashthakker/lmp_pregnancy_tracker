import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pregnancy Myths vs Facts: What to Really Believe | Your Journey',
  description: 'Separate pregnancy myths from facts with evidence-based information. Get the truth about common pregnancy beliefs and old wives tales.',
  keywords: 'pregnancy myths, pregnancy facts, pregnancy misconceptions, pregnancy old wives tales, pregnancy truth',
  openGraph: {
    title: 'Pregnancy Myths vs Facts: What to Really Believe | Your Journey',
    description: 'Evidence-based facts to help separate pregnancy myths from reality.',
    type: 'article',
  },
};

export default function PregnancyMythsVsFacts() {
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
              Pregnancy Myths vs Facts: What to Really Believe
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Pregnancy comes with countless pieces of advice, old wives&apos; tales, and misconceptions. 
              Let&apos;s separate fact from fiction with evidence-based information.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Diet and Nutrition Myths</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;You&apos;re eating for two, so you need to double your calories&quot;</p>
                  <p className="text-red-600 text-sm">This leads to excessive weight gain and potential complications.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">You only need about 300 extra calories per day</p>
                  <p className="text-green-600 text-sm">Focus on nutrient-dense foods rather than quantity. Quality matters more than quantity.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;Coffee is completely off-limits during pregnancy&quot;</p>
                  <p className="text-red-600 text-sm">This creates unnecessary stress for coffee-loving mothers.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Up to 200mg of caffeine per day is considered safe</p>
                  <p className="text-green-600 text-sm">That&apos;s about one 12oz cup of coffee. Moderation is key.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;Spicy food will harm the baby or cause early labor&quot;</p>
                  <p className="text-red-600 text-sm">This prevents women from enjoying foods they love.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Spicy food is safe during pregnancy</p>
                  <p className="text-green-600 text-sm">It may cause heartburn for some, but it won&apos;t harm your baby or induce labor.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exercise and Activity Myths</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;Pregnant women should avoid all exercise&quot;</p>
                  <p className="text-red-600 text-sm">This leads to poor fitness and can complicate pregnancy.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Regular exercise is beneficial for most pregnancies</p>
                  <p className="text-green-600 text-sm">150 minutes of moderate exercise weekly is recommended for healthy pregnancies.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;Raising your arms above your head will wrap the umbilical cord around the baby&apos;s neck&quot;</p>
                  <p className="text-red-600 text-sm">This has no scientific basis whatsoever.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Arm position has no effect on umbilical cord placement</p>
                  <p className="text-green-600 text-sm">The baby moves independently in the amniotic fluid. Your movements don&apos;t control cord position.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Baby Development and Gender Myths</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;The shape of your belly determines the baby&apos;s gender&quot;</p>
                  <p className="text-red-600 text-sm">High/low, round/pointed - none of these predict gender.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Belly shape depends on your body type and baby&apos;s position</p>
                  <p className="text-green-600 text-sm">Only ultrasound or genetic testing can accurately determine gender.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;Heartburn means your baby will have lots of hair&quot;</p>
                  <p className="text-red-600 text-sm">While one study found a correlation, it&apos;s not a reliable predictor.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Heartburn is caused by hormones and your growing uterus</p>
                  <p className="text-green-600 text-sm">Rising progesterone relaxes the valve between stomach and esophagus.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;If you don&apos;t have morning sickness, something is wrong&quot;</p>
                  <p className="text-red-600 text-sm">This causes unnecessary anxiety for women who feel well.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">About 25% of women never experience morning sickness</p>
                  <p className="text-green-600 text-sm">This is completely normal and doesn&apos;t indicate any problems with the pregnancy.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Labor and Delivery Myths</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;Your water breaking means you need to rush to the hospital immediately&quot;</p>
                  <p className="text-red-600 text-sm">This creates panic when calm assessment is needed.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">You usually have time unless labor is already active</p>
                  <p className="text-green-600 text-sm">Call your provider, note the time and fluid color, but don&apos;t panic.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;First babies are always late&quot;</p>
                  <p className="text-red-600 text-sm">This sets unrealistic expectations for due dates.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Only 5% of babies are born on their due date</p>
                  <p className="text-green-600 text-sm">Most babies arrive within 2 weeks before or after the due date.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;Natural remedies can reliably induce labor&quot;</p>
                  <p className="text-red-600 text-sm">Castor oil, spicy food, and walking don&apos;t actually start labor.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Labor begins when your baby and body are ready</p>
                  <p className="text-green-600 text-sm">Medical induction is the only proven way to start labor before it begins naturally.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appearance and Body Changes Myths</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;Pregnancy makes you glow - you&apos;ll look beautiful all the time&quot;</p>
                  <p className="text-red-600 text-sm">This creates unrealistic expectations about appearance.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Pregnancy affects everyone differently</p>
                  <p className="text-green-600 text-sm">Some have clearer skin, others get acne. Both are normal responses to hormonal changes.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-lg font-medium text-red-800 mb-2">❌ MYTH</h3>
                  <p className="text-red-700 font-medium mb-2">&quot;You can&apos;t dye your hair during pregnancy&quot;</p>
                  <p className="text-red-600 text-sm">This myth causes stress for women who want to maintain their appearance.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-medium text-green-800 mb-2">✅ FACT</h3>
                  <p className="text-green-700 font-medium mb-2">Hair dye is generally safe after the first trimester</p>
                  <p className="text-green-600 text-sm">Very little chemical is absorbed through the scalp. Most doctors approve after 12 weeks.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Do These Myths Persist?</h2>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Cultural traditions:</strong> Passed down through generations without scientific review</li>
                <li>• <strong>Anxiety and uncertainty:</strong> People seek simple explanations for complex processes</li>
                <li>• <strong>Coincidental correlations:</strong> Random events that happened to align with beliefs</li>
                <li>• <strong>Social media misinformation:</strong> Myths spread faster than facts online</li>
                <li>• <strong>Desire for control:</strong> Believing myths can make people feel they have more influence over outcomes</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="font-medium text-blue-800 mb-2">Trust Evidence-Based Information</h3>
              <p className="text-blue-700 mb-3">
                When in doubt, always consult with your healthcare provider rather than relying on myths, 
                old wives&apos; tales, or unverified online sources.
              </p>
              <p className="text-blue-700 text-sm">
                <strong>Reliable sources include:</strong> Your OB/GYN, midwife, medical organizations like ACOG, 
                peer-reviewed medical journals, and established pregnancy health websites.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}