import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Partners Can Help During Labor and Delivery | Your Journey',
  description: 'Essential guide for partners on how to provide support during labor and delivery. Learn practical tips, what to expect, and how to be the best birth partner.',
  keywords: 'labor support partner, birth partner guide, labor coaching, delivery room support, partner during childbirth',
  openGraph: {
    title: 'How Partners Can Help During Labor and Delivery | Your Journey',
    description: 'Essential guide for partners on providing support during labor and delivery.',
    type: 'article',
  },
};

export default function PartnersHelpDuringLabor() {
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
              How Partners Can Help During Labor & Delivery
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Labor and delivery is a team effort. Learn how to be an effective birth partner, provide meaningful support, 
              and help create a positive birth experience for both you and your partner.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preparing for Your Role as Birth Partner</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Before Labor Begins</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Learn Together</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Attend childbirth classes</li>
                    <li>Practice breathing techniques</li>
                    <li>Learn comfort measures</li>
                    <li>Understand stages of labor</li>
                    <li>Tour the delivery facility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Plan Ahead</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Discuss birth preferences</li>
                    <li>Know pain relief options</li>
                    <li>Understand medical procedures</li>
                    <li>Plan for different scenarios</li>
                    <li>Pack hospital bags early</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supporting Through Early Labor</h2>
            
            <div className="border-l-4 border-pink-400 pl-6 mb-8">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Signs Labor is Starting</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">What to Watch For</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Regular contractions</li>
                    <li>Water breaking</li>
                    <li>Bloody show</li>
                    <li>Lower back pain</li>
                    <li>Nausea or diarrhea</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">How to Help</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Time contractions together</li>
                    <li>Help her stay calm</li>
                    <li>Prepare for hospital trip</li>
                    <li>Contact healthcare provider</li>
                    <li>Encourage rest and nutrition</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Active Labor Support Techniques</h2>
            
            <div className="space-y-8 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Physical Comfort Measures</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Positioning Support</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Help her change positions frequently</li>
                      <li>Support her during walking</li>
                      <li>Assist with birthing ball use</li>
                      <li>Help her find comfortable positions</li>
                      <li>Provide pillows and props</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Pain Relief Techniques</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Apply counter-pressure to back</li>
                      <li>Offer ice packs or heat pads</li>
                      <li>Provide gentle massage</li>
                      <li>Help with shower or bath</li>
                      <li>Use aromatherapy if desired</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Emotional Support</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Encouragement</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Offer constant verbal encouragement</li>
                      <li>Remind her she's doing great</li>
                      <li>Help her focus on one contraction at a time</li>
                      <li>Celebrate progress milestones</li>
                      <li>Remind her of her strength</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Presence and Touch</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Maintain eye contact during contractions</li>
                      <li>Hold her hand or provide touch</li>
                      <li>Stay close and present</li>
                      <li>Breathe together</li>
                      <li>Be her anchor during intense moments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Communication and Advocacy</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">With Your Partner</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Ask what she needs in the moment</li>
                  <li>• Respect her wishes and preferences</li>
                  <li>• Help her communicate with staff</li>
                  <li>• Translate medical information if needed</li>
                  <li>• Support her decisions</li>
                  <li>• Stay positive and calm</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-800 mb-3">With Medical Staff</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Ask questions when unclear</li>
                  <li>• Advocate for her birth preferences</li>
                  <li>• Request time to discuss decisions</li>
                  <li>• Ensure informed consent</li>
                  <li>• Be respectful but assertive</li>
                  <li>• Keep birth plan accessible</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">During Different Stages of Labor</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Transition Phase (8-10cm)</h3>
                <p className="text-gray-600 text-sm mb-3">This is often the most intense phase. She may feel overwhelmed, nauseous, or say she "can't do this."</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">What to Expect</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Very strong, frequent contractions</li>
                      <li>She may feel overwhelmed</li>
                      <li>Possible nausea or shaking</li>
                      <li>Difficulty concentrating</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">How to Help</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Remind her this phase is temporary</li>
                      <li>Help her breathe through contractions</li>
                      <li>Provide ice chips or lip balm</li>
                      <li>Be extra encouraging</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Pushing and Delivery</h3>
                <p className="text-gray-600 text-sm mb-3">The final stage where your baby will be born. Energy levels may surge.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Support During Pushing</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Help her get into effective position</li>
                      <li>Count with her during pushes</li>
                      <li>Wipe her face with cool cloth</li>
                      <li>Tell her when you see the baby</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">At the Moment of Birth</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Be ready with words of celebration</li>
                      <li>Cut the cord if desired</li>
                      <li>Take photos if appropriate</li>
                      <li>Share the joy of the moment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Bring and Keep Handy</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Comfort Items</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Massage oil or lotion</li>
                  <li>Music playlist</li>
                  <li>Essential oils (if allowed)</li>
                  <li>Her favorite snacks</li>
                  <li>Camera or phone for photos</li>
                  <li>Comfortable clothes for going home</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Practical Essentials</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Birth plan copies</li>
                  <li>Insurance cards and ID</li>
                  <li>Phone chargers</li>
                  <li>Snacks for yourself</li>
                  <li>Change of clothes</li>
                  <li>Contact list for announcements</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <h3 className="font-medium text-red-800 mb-2">Things to Avoid</h3>
              <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                <li>Don't take her behavior during labor personally</li>
                <li>Avoid saying "just relax" or "calm down"</li>
                <li>Don't compare her labor to others</li>
                <li>Avoid making decisions without consulting her</li>
                <li>Don't leave her side unless she asks</li>
                <li>Avoid being on your phone excessively</li>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="font-medium text-blue-800 mb-2">Remember</h3>
              <p className="text-blue-700">
                Your presence, support, and love are the most important things you can offer. Every woman's labor is different, 
                so stay flexible and responsive to her needs. Trust in her strength and your ability to support her through 
                this incredible journey of bringing your baby into the world.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}