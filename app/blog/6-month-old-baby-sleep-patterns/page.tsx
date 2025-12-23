import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "6 Month Old Baby Sleep Patterns: Solid Sleep & Starting Solids",
  description: "Complete guide to 6 month old baby sleep patterns, 2-nap schedules, sleeping through the night, and how starting solids affects sleep.",
  keywords: [
    "6 month old baby sleep",
    "6 month old sleep patterns",
    "baby sleep schedule 6 months",
    "6 month old wake windows",
    "sleeping through night 6 months",
    "6 month old 2 naps",
    "starting solids affect sleep",
    "6 month sleep regression",
    "baby sleep training 6 months",
    "6 month old bedtime routine"
  ],
  openGraph: {
    title: "6 Month Old Baby Sleep Patterns: Solid Sleep & Starting Solids",
    description: "Everything about 6 month old sleep patterns, 2-nap schedules, and how starting solids impacts sleep.",
    type: "article",
    publishedTime: "2025-12-21T00:00:00Z",
  },
  alternates: {
    canonical: "/blog/6-month-old-baby-sleep-patterns",
  },
};

export default function SixMonthOldBabySleepPatternsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "6 Month Old Baby Sleep Patterns: Solid Sleep & Starting Solids",
    "description": "Everything about 6 month old sleep patterns, 2-nap schedules, and how starting solids impacts sleep.",
    "author": {
      "@type": "Organization",
      "name": "egspect.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "egspect.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.egspect.com/baby.svg"
      }
    },
    "datePublished": "2025-12-21T00:00:00Z",
    "dateModified": "2025-12-21T00:00:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.egspect.com/blog/6-month-old-baby-sleep-patterns"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 sm:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
                    6 Month Old Sleep
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    6 Month Old Sleep: Solid Patterns & Starting Solids
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Achieving longer night stretches, mastering 2-nap schedules, and navigating how solid foods impact sleep.
                  </p>
                  <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
                    <span>Published on December 21, 2025</span>
                    <span className="mx-2">•</span>
                    <span>12 min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">The 6-Month Milestone</h3>
                    <p className="text-green-800">
                      Many babies achieve their longest sleep stretches yet (8-12 hours), settle into predictable 2-nap schedules, and begin exploring solid foods. This is often when families feel they've truly "figured out" sleep.
                    </p>
                  </div>

                  <h2>What Makes 6 Months Special for Sleep</h2>
                  
                  <p>
                    At 6 months, your baby has likely mastered the art of sleep. The chaotic early months are behind you, the 4-month regression is resolved, and you're now seeing the benefits of mature sleep cycles combined with stronger self-soothing abilities.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg my-6">
                    <h3 className="font-semibold text-blue-800 mb-3">🎉 6-Month Sleep Achievements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
                      <div>
                        <h4 className="font-semibold mb-2">Sleep Mastery</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Consistent 8-12 hour night stretches</li>
                          <li>• Reliable 2-nap schedule</li>
                          <li>• Strong self-soothing skills</li>
                          <li>• Can sleep through minor disruptions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Physical Development</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Sitting up independently</li>
                          <li>• Rolling in all directions</li>
                          <li>• Beginning to crawl or scoot</li>
                          <li>• Ready for solid foods</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2>Typical 6 Month Old Sleep Patterns</h2>
                  
                  <div className="bg-purple-50 p-6 rounded-lg my-6">
                    <h3 className="font-semibold text-purple-800 mb-3">📊 What's Normal at 6 Months</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-700">
                      <div>
                        <h4 className="font-semibold mb-2">Sleep Duration</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Total: 11-14 hours per day</li>
                          <li>• Night stretch: 8-12 hours common</li>
                          <li>• Night wakings: 0-1 times</li>
                          <li>• Wake windows: 2-3 hours</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Schedule Structure</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 2 main naps (morning & afternoon)</li>
                          <li>• Optional third catnap fading</li>
                          <li>• Consistent bedtime (7-8pm typical)</li>
                          <li>• Predictable wake-up time</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2>The Established 2-Nap Schedule</h2>
                  
                  <p>
                    By 6 months, most babies have successfully transitioned to a solid 2-nap schedule. This pattern typically lasts until 12-18 months, making it one of the most stable sleep phases.
                  </p>

                  <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-indigo-800 mb-3">📅 Classic 6-Month Schedule</h4>
                    <p className="text-indigo-700 text-sm mb-4">
                      This schedule works for most 6-month-olds with minor adjustments for individual needs:
                    </p>
                    
                    <div className="text-indigo-700 text-sm space-y-2">
                      <div className="grid grid-cols-4 gap-2 font-semibold border-b pb-2">
                        <span>Time</span>
                        <span>Activity</span>
                        <span>Wake Window</span>
                        <span>Notes</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>6:30 AM</span>
                        <span>Wake & milk</span>
                        <span>-</span>
                        <span>Start day with light</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>7:00 AM</span>
                        <span>Breakfast (solids)</span>
                        <span>-</span>
                        <span>If doing baby-led weaning</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>8:30 AM</span>
                        <span>Nap 1</span>
                        <span>2 hours</span>
                        <span>1-2 hours typical</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>10:30 AM</span>
                        <span>Wake & milk</span>
                        <span>-</span>
                        <span>Playtime/activities</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>12:00 PM</span>
                        <span>Lunch (solids)</span>
                        <span>-</span>
                        <span>Exploring new foods</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>1:00 PM</span>
                        <span>Nap 2</span>
                        <span>2.5 hours</span>
                        <span>Longest nap (1.5-2.5 hours)</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>3:30 PM</span>
                        <span>Wake & milk</span>
                        <span>-</span>
                        <span>Active play period</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>5:30 PM</span>
                        <span>Dinner (solids)</span>
                        <span>-</span>
                        <span>Family dinner time</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>7:00 PM</span>
                        <span>Bedtime routine</span>
                        <span>3.5 hours</span>
                        <span>Bath, milk, stories</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span>7:30 PM</span>
                        <span>Night sleep</span>
                        <span>-</span>
                        <span>8-12 hour stretch</span>
                      </div>
                    </div>
                  </div>

                  <h2>How Starting Solids Affects Sleep</h2>
                  
                  <p>
                    Around 6 months, most babies begin exploring solid foods. This milestone can significantly impact sleep patterns, usually in positive ways.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg my-6">
                    <h3 className="font-semibold text-green-800 mb-3">🥄 Positive Sleep Changes from Solids</h3>
                    <ul className="text-green-700 space-y-2">
                      <li>• <strong>Longer satiety:</strong> Solid foods may help baby stay full longer</li>
                      <li>• <strong>Reduced night wakings:</strong> Less need for nutrition during sleep</li>
                      <li>• <strong>Stronger circadian rhythms:</strong> Regular meal times support sleep-wake cycles</li>
                      <li>• <strong>Iron supplementation:</strong> Better iron levels can improve sleep quality</li>
                      <li>• <strong>Developmental satisfaction:</strong> Meeting feeding milestones reduces fussiness</li>
                    </ul>
                  </div>

                  <h3>Potential Temporary Sleep Disruptions</h3>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">⚠️ Watch Out For</h4>
                    <ul className="text-yellow-700 space-y-2">
                      <li>• <strong>Digestive adjustment:</strong> New foods may cause gas or tummy upset</li>
                      <li>• <strong>Constipation:</strong> Common when starting solids, can affect sleep</li>
                      <li>• <strong>Allergic reactions:</strong> Food sensitivities may cause nighttime discomfort</li>
                      <li>• <strong>Overstimulation:</strong> Too much food exploration close to bedtime</li>
                      <li>• <strong>Schedule disruption:</strong> Meal times affecting nap timing</li>
                    </ul>
                  </div>

                  <h2>Real Parent Experiences at 6 Months</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg my-6">
                    <h3 className="font-semibold text-gray-800 mb-4">What Parents Love About 6 Months</h3>
                    <div className="space-y-4">
                      <blockquote className="text-gray-700 italic border-l-4 border-gray-300 pl-4">
                        &ldquo;Six months was when I finally felt like we had a 'normal' baby. She was sleeping 11 hours straight and taking two solid naps. I could actually plan my day around her schedule.&rdquo; - Sarah, mom of 1
                      </blockquote>
                      <blockquote className="text-gray-700 italic border-l-4 border-gray-300 pl-4">
                        &ldquo;Starting solids definitely helped with his sleep. Once we introduced cereals and fruits, he went from waking once a night to sleeping through consistently.&rdquo; - Marcus, dad of 2
                      </blockquote>
                      <blockquote className="text-gray-700 italic border-l-4 border-gray-300 pl-4">
                        &ldquo;I loved that at 6 months, she would actually stay asleep if the doorbell rang or the dog barked. She'd learned to sleep through normal household noises.&rdquo; - Jessica, mom of 3
                      </blockquote>
                      <blockquote className="text-gray-700 italic border-l-4 border-gray-300 pl-4">
                        &ldquo;The 2-nap schedule was a game-changer. I knew exactly when I had time to get things done, and he was so much happier with the consistent routine.&rdquo; - David, dad of 1
                      </blockquote>
                    </div>
                  </div>

                  <h2>Optimizing Sleep with Solid Foods</h2>
                  
                  <h3>Timing Meals for Better Sleep</h3>
                  <div className="bg-blue-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-blue-800 mb-3">⏰ Meal Timing Guidelines</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• <strong>Morning:</strong> Solids after first nap or with breakfast</li>
                      <li>• <strong>Lunch:</strong> 1-2 hours before afternoon nap</li>
                      <li>• <strong>Dinner:</strong> 2+ hours before bedtime</li>
                      <li>• <strong>Avoid:</strong> Large solid meals right before sleep</li>
                      <li>• <strong>Milk feeds:</strong> Still important, especially before bed</li>
                    </ul>
                  </div>

                  <h3>Foods That May Support Sleep</h3>
                  <ul>
                    <li><strong>Iron-rich foods:</strong> Fortified cereals, pureed meats</li>
                    <li><strong>Complex carbohydrates:</strong> Oatmeal, sweet potatoes</li>
                    <li><strong>Magnesium sources:</strong> Avocado, banana</li>
                    <li><strong>Calcium-rich options:</strong> Yogurt, cheese (if dairy-tolerant)</li>
                  </ul>

                  <h2>Common 6 Month Sleep Challenges</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-3">🤸 New Mobility Disruption</h4>
                      <p className="text-red-700 text-sm mb-2">Sitting up, rolling, or crawling in the crib</p>
                      <p className="text-red-600 text-xs"><strong>Solution:</strong> Practice skills during wake time, lower crib mattress</p>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-3">👶 Early Separation Anxiety</h4>
                      <p className="text-orange-700 text-sm mb-2">Beginning to protest when left alone</p>
                      <p className="text-orange-600 text-xs"><strong>Try:</strong> Consistent routines, comfort objects, brief check-ins</p>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-3">🍽️ Food-Related Sleep Issues</h4>
                      <p className="text-purple-700 text-sm mb-2">Gas, constipation, or food sensitivities</p>
                      <p className="text-purple-600 text-xs"><strong>Check:</strong> Timing of solids, fiber intake, potential allergens</p>
                    </div>
                    
                    <div className="bg-pink-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-3">⏰ Schedule Rigidity Issues</h4>
                      <p className="text-pink-700 text-sm mb-2">Difficulty with schedule changes or travel</p>
                      <p className="text-pink-600 text-xs"><strong>Practice:</strong> Occasional flexibility, portable routines</p>
                    </div>
                  </div>

                  <h2>Building Strong Sleep Foundations</h2>
                  
                  <h3>Perfecting the Bedtime Routine</h3>
                  <div className="bg-green-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-green-800 mb-3">🌙 Enhanced 6-Month Bedtime Routine</h4>
                    <div className="text-green-700 text-sm space-y-2">
                      <div><strong>6:30 PM:</strong> Bath time (calming lavender bath)</div>
                      <div><strong>6:45 PM:</strong> Diaper, pajamas, sleep sack</div>
                      <div><strong>6:50 PM:</strong> Dimmed lights, final milk feed</div>
                      <div><strong>7:10 PM:</strong> Quiet story or song</div>
                      <div><strong>7:20 PM:</strong> Brief cuddles, into crib awake</div>
                      <div><strong>7:30 PM:</strong> Lights out, white noise on</div>
                    </div>
                  </div>

                  <h3>Supporting Independent Sleep</h3>
                  <div className="bg-blue-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-blue-800 mb-3">🎯 Independence Skills</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• <strong>Self-settling:</strong> Can fall asleep without parental presence</li>
                      <li>• <strong>Night reconnection:</strong> Links sleep cycles independently</li>
                      <li>• <strong>Position changes:</strong> Finds comfortable sleep positions alone</li>
                      <li>• <strong>Comfort objects:</strong> Uses lovey or pacifier for self-soothing</li>
                      <li>• <strong>Environmental adaptation:</strong> Sleeps through normal household noise</li>
                    </ul>
                  </div>

                  <h2>The 6-Month Sleep Regression Myth</h2>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg my-6">
                    <h3 className="font-semibold text-yellow-800 mb-3">🤔 Is There a 6-Month Regression?</h3>
                    <p className="text-yellow-700 mb-3">
                      Unlike the well-documented 4-month changes, there isn't a major sleep regression at 6 months. However, some babies may experience temporary disruptions due to:
                    </p>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• Growth spurts increasing hunger</li>
                      <li>• New mobility skills affecting sleep positions</li>
                      <li>• Introduction of solid foods causing digestive changes</li>
                      <li>• Early separation anxiety development</li>
                      <li>• Teething discomfort beginning</li>
                    </ul>
                  </div>

                  <h2>Preparing for Future Changes</h2>
                  
                  <h3>What's Coming in Months 7-9</h3>
                  <div className="bg-purple-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-purple-800 mb-3">🔮 Upcoming Developments</h4>
                    <ul className="text-purple-700 space-y-2">
                      <li>• <strong>Increased mobility:</strong> Crawling, pulling to stand</li>
                      <li>• <strong>Separation anxiety peaks:</strong> Around 8-10 months</li>
                      <li>• <strong>Teething intensifies:</strong> More teeth coming through</li>
                      <li>• <strong>Cognitive leaps:</strong> Understanding object permanence</li>
                      <li>• <strong>Schedule consistency:</strong> 2-nap pattern remains stable</li>
                    </ul>
                  </div>

                  <h2>Troubleshooting Common Issues</h2>
                  
                  <h3>When Baby Won't Sleep Through</h3>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-red-800 mb-3">If Still Waking at Night:</h4>
                    <ul className="text-red-700 space-y-2">
                      <li>• <strong>Check nutrition:</strong> Getting enough calories during the day?</li>
                      <li>• <strong>Evaluate schedule:</strong> Appropriate wake windows and nap timing?</li>
                      <li>• <strong>Review sleep environment:</strong> Dark, quiet, comfortable temperature?</li>
                      <li>• <strong>Consider sleep training:</strong> If not already done, 6 months is ideal</li>
                      <li>• <strong>Rule out issues:</strong> Teething, illness, growth spurt</li>
                    </ul>
                  </div>

                  <h3>Nap Resistance Solutions</h3>
                  <ul>
                    <li><strong>Check wake windows:</strong> May need to be extended to 2.5-3 hours</li>
                    <li><strong>Consistent nap routine:</strong> Abbreviated version of bedtime routine</li>
                    <li><strong>Environmental optimization:</strong> Dark room, white noise</li>
                    <li><strong>Activity level:</strong> Ensure enough physical activity between naps</li>
                  </ul>

                  <h2>When to Seek Professional Help</h2>
                  
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-red-800 mb-3">Contact Pediatrician If:</h4>
                    <ul className="text-red-700 space-y-2">
                      <li>• Baby consistently sleeps less than 10 hours in 24-hour period</li>
                      <li>• Extreme difficulty with solid food introduction affecting sleep</li>
                      <li>• Signs of sleep apnea or breathing difficulties</li>
                      <li>• Persistent constipation or digestive issues from solids</li>
                      <li>• Baby seems chronically overtired despite adequate sleep opportunities</li>
                      <li>• Concerns about growth or development alongside sleep issues</li>
                    </ul>
                  </div>

                  <h2>Making the Most of This Sweet Spot</h2>
                  
                  <div className="bg-green-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-green-800 mb-3">🌟 Enjoy This Phase</h4>
                    <ul className="text-green-700 space-y-2">
                      <li>• <strong>Consistent schedule:</strong> Take advantage of predictability</li>
                      <li>• <strong>Personal time:</strong> Use naps for self-care or household tasks</li>
                      <li>• <strong>Social activities:</strong> Plan outings around the 2-nap schedule</li>
                      <li>• <strong>Sleep confidence:</strong> Trust your baby's established patterns</li>
                      <li>• <strong>Prepare for changes:</strong> Know that mobility may temporarily disrupt sleep</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg my-8">
                    <h3 className="font-semibold text-gray-800 mb-4">Sleep Tools for 6 Month Olds</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/tools/baby-sleep-schedule-calculator" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                        <h4 className="font-semibold text-indigo-600">Sleep Schedule Calculator</h4>
                        <p className="text-sm text-gray-600">Perfect 2-nap timing</p>
                      </Link>
                      <Link href="/tools/baby-feeding-schedule-calculator" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                        <h4 className="font-semibold text-indigo-600">Feeding Schedule Calculator</h4>
                        <p className="text-sm text-gray-600">Balance solids and milk feeds</p>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg my-8">
                    <h3 className="font-semibold text-indigo-800 mb-4">Key Takeaways for 6 Month Old Sleep</h3>
                    <ul className="text-indigo-700 space-y-2">
                      <li>• This is often the most predictable and satisfying sleep phase</li>
                      <li>• 8-12 hour night stretches are common and achievable</li>
                      <li>• Solid 2-nap schedule provides structure for families</li>
                      <li>• Starting solids usually improves sleep quality</li>
                      <li>• Strong sleep skills support handling upcoming changes</li>
                      <li>• New mobility may temporarily disrupt sleep</li>
                      <li>• Most families feel very confident about sleep at this stage</li>
                    </ul>
                  </div>

                  <h2>Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <Link href="/blog/5-month-old-baby-sleep-patterns" className="block p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors">
                      <h3 className="font-semibold text-purple-600 mb-2">5 Month Old Sleep Patterns</h3>
                      <p className="text-gray-600 text-sm">How you got here</p>
                    </Link>
                    <Link href="/blog/7-month-old-baby-sleep-patterns" className="block p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-200 hover:border-indigo-300 transition-colors">
                      <h3 className="font-semibold text-indigo-600 mb-2">7 Month Old Sleep Patterns</h3>
                      <p className="text-gray-600 text-sm">What comes next</p>
                    </Link>
                    <Link href="/blog/complete-newborn-care-guide" className="block p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors">
                      <h3 className="font-semibold text-green-600 mb-2">Starting Solids Guide</h3>
                      <p className="text-gray-600 text-sm">Feeding and sleep coordination</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}