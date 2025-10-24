import { Metadata } from 'next'
import { Baby, Droplets, Shield, AlertTriangle, Heart, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Baby Skin Peeling in Newborns: Normal Process, Care Tips & When to Worry | Pregnancy Tracker',
  description: 'Complete guide to newborn skin peeling - why it happens, how long it lasts, proper care techniques, and when to contact your pediatrician. Normal vs concerning signs explained.',
  keywords: 'newborn skin peeling, baby skin flaking, infant skin care, peeling skin newborn, dry baby skin, newborn skin conditions, baby skin shedding, vernix removal, newborn dermatology, infant skincare routine',
  openGraph: {
    title: 'Baby Skin Peeling in Newborns: Normal Development & Care Guide',
    description: 'Learn why newborn skin peeling is normal, how to care for peeling skin, and when to seek medical advice. Complete newborn skincare guide.',
    type: 'article',
  },
}

export default function BabySkinPeelingNewborns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-8 py-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Baby className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">Baby Skin Peeling in Newborns</h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Understanding normal newborn skin peeling, proper care techniques, and when to seek medical advice
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-pink-50 p-6 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-pink-800">1-3 Weeks</div>
                  <div className="text-pink-600">Normal peeling duration</div>
                </div>
                <div className="bg-rose-50 p-6 rounded-lg text-center">
                  <Droplets className="h-8 w-8 text-rose-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-rose-800">95% Normal</div>
                  <div className="text-rose-600">Of newborn peeling</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-orange-800">Gentle Care</div>
                  <div className="text-orange-600">Key to healthy skin</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                  <div className="flex items-start">
                    <Heart className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Reassuring Fact</h3>
                      <p className="text-green-700">
                        Skin peeling in newborns is completely normal and occurs in 95% of babies. It&apos;s a natural transition as your baby adapts to life outside the womb.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Do Newborns&apos; Skin Peel?</h2>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">The Science Behind Peeling</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">In the Womb:</h4>
                      <ul className="list-disc list-inside text-blue-600 space-y-1">
                        <li>Baby is surrounded by amniotic fluid</li>
                        <li>Skin is protected by vernix caseosa (waxy coating)</li>
                        <li>Skin develops multiple layers for protection</li>
                        <li>No exposure to air or environmental factors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">After Birth:</h4>
                      <ul className="list-disc list-inside text-blue-600 space-y-1">
                        <li>Sudden exposure to air and lower humidity</li>
                        <li>Vernix is gradually removed or absorbed</li>
                        <li>Top layer of skin naturally sheds</li>
                        <li>Skin adapts to new environment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Normal vs Concerning Peeling</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-3">Normal Peeling ✓</h3>
                    <ul className="list-disc list-inside text-green-700 space-y-2">
                      <li><strong>Timing:</strong> Starts 1-3 days after birth</li>
                      <li><strong>Duration:</strong> 1-3 weeks typically</li>
                      <li><strong>Appearance:</strong> Thin, flaky skin like paper</li>
                      <li><strong>Location:</strong> Hands, feet, ankles, wrists</li>
                      <li><strong>Skin underneath:</strong> Pink and healthy</li>
                      <li><strong>Baby&apos;s comfort:</strong> No pain or discomfort</li>
                      <li><strong>Pattern:</strong> Gradual, not rapid</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3">Concerning Signs ⚠️</h3>
                    <ul className="list-disc list-inside text-red-700 space-y-2">
                      <li><strong>Redness:</strong> Inflamed or angry red skin</li>
                      <li><strong>Raw areas:</strong> Open wounds or bleeding</li>
                      <li><strong>Thick scaling:</strong> Heavy, thick flakes</li>
                      <li><strong>Widespread:</strong> Covering large body areas</li>
                      <li><strong>Persistent:</strong> Continuing beyond 4 weeks</li>
                      <li><strong>Baby distress:</strong> Crying when touched</li>
                      <li><strong>Other symptoms:</strong> Fever, lethargy, feeding issues</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Timeline of Normal Skin Peeling</h2>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Time After Birth</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What to Expect</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Care Needed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">First 24-48 hours</td>
                        <td className="border border-gray-300 px-4 py-3">Vernix may still be present, skin appears wrinkled</td>
                        <td className="border border-gray-300 px-4 py-3">Gentle cleaning, no scrubbing</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Day 2-5</td>
                        <td className="border border-gray-300 px-4 py-3">First signs of peeling, usually on hands and feet</td>
                        <td className="border border-gray-300 px-4 py-3">Let it peel naturally, light moisturizing</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Week 1-2</td>
                        <td className="border border-gray-300 px-4 py-3">Peak peeling period, may extend to arms and legs</td>
                        <td className="border border-gray-300 px-4 py-3">Gentle baths, fragrance-free moisturizer</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Week 3-4</td>
                        <td className="border border-gray-300 px-4 py-3">Peeling slows down, new skin appears smooth</td>
                        <td className="border border-gray-300 px-4 py-3">Continue gentle care routine</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">After 1 month</td>
                        <td className="border border-gray-300 px-4 py-3">Peeling should be minimal or stopped</td>
                        <td className="border border-gray-300 px-4 py-3">Maintain moisturizing routine</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Proper Care for Peeling Skin</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Daily Care Routine</h3>
                    <ol className="list-decimal list-inside text-blue-700 space-y-2">
                      <li><strong>Gentle cleansing:</strong> Use warm water and mild, fragrance-free baby cleanser</li>
                      <li><strong>Pat dry:</strong> Gently pat skin dry with soft towel, don&apos;t rub</li>
                      <li><strong>Allow natural peeling:</strong> Never pull or pick at peeling skin</li>
                      <li><strong>Moisturize:</strong> Apply fragrance-free baby lotion to damp skin</li>
                      <li><strong>Monitor temperature:</strong> Check <a href="/blog/ideal-newborn-temperature-guide" className="text-blue-600 underline hover:text-blue-800">baby&apos;s temperature</a> regularly</li>
                      <li><strong>Dress appropriately:</strong> Use soft, breathable fabrics</li>
                    </ol>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">Bathing Guidelines</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Do:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Use lukewarm water (98-100°F)</li>
                          <li>Limit baths to 5-10 minutes</li>
                          <li>Use minimal, gentle baby soap</li>
                          <li>Support baby&apos;s head and neck</li>
                          <li>Have towels ready for immediate drying</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Don&apos;t:</h4>
                        <ul className="list-disc list-inside text-purple-600 space-y-1">
                          <li>Use hot water or long baths</li>
                          <li>Scrub or use rough washcloths</li>
                          <li>Add bubble bath or fragranced products</li>
                          <li>Leave baby unattended</li>
                          <li>Rush the drying process</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-3">Recommended Products</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Safe Ingredients:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Ceramides</li>
                          <li>Hyaluronic acid</li>
                          <li>Glycerin</li>
                          <li>Petrolatum</li>
                          <li>Dimethicone</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Avoid:</h4>
                        <ul className="list-disc list-inside text-green-600 space-y-1">
                          <li>Fragrances and perfumes</li>
                          <li>Alcohol-based products</li>
                          <li>Essential oils</li>
                          <li>Retinoids or acids</li>
                          <li>Harsh preservatives</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Special Considerations</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-yellow-800 mb-3">Premature Babies</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li><strong>More delicate skin:</strong> Extremely thin and fragile</li>
                      <li><strong>Extended peeling:</strong> May continue longer than full-term babies</li>
                      <li><strong>Extra gentle care:</strong> Even more careful handling required</li>
                      <li><strong>Medical monitoring:</strong> NICU team will guide care</li>
                      <li><strong>Specialized products:</strong> May need prescription moisturizers</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-orange-800 mb-3">Post-Term Babies (42+ weeks)</h3>
                    <ul className="list-disc list-inside text-orange-700 space-y-2">
                      <li><strong>More pronounced peeling:</strong> Often more extensive than term babies</li>
                      <li><strong>Longer duration:</strong> May take 3-4 weeks to complete</li>
                      <li><strong>Thicker skin flakes:</strong> Larger pieces may peel off</li>
                      <li><strong>Normal process:</strong> Still completely normal despite extent</li>
                      <li><strong>Extra moisturizing:</strong> May benefit from more frequent application</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-pink-800 mb-3">Environmental Factors</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-2">Helpful Conditions:</h4>
                        <ul className="list-disc list-inside text-pink-600 space-y-1">
                          <li>Humidity 30-50%</li>
                          <li>Room temperature 68-72°F</li>
                          <li>Good air circulation</li>
                          <li>Clean environment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-700 mb-2">Avoid:</h4>
                        <ul className="list-disc list-inside text-pink-600 space-y-1">
                          <li>Very dry air (use humidifier)</li>
                          <li>Overheating</li>
                          <li>Direct sun exposure</li>
                          <li>Harsh chemicals or cleaners</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Myths and Facts</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-bold text-red-800 mb-3">Myths ❌</h3>
                        <ul className="list-disc list-inside text-red-700 space-y-2">
                        <li>&quot;Peeling means the baby is dehydrated&quot;</li>
                        <li>&quot;You should peel off loose skin faster&quot;</li>
                        <li>&quot;Lotion will make peeling worse&quot;</li>
                        <li>&quot;Peeling skin means poor prenatal care&quot;</li>
                        <li>&quot;Only dry climates cause peeling&quot;</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-green-800 mb-3">Facts ✓</h3>
                        <ul className="list-disc list-inside text-green-700 space-y-2">
                          <li>Peeling is normal adaptation to air</li>
                          <li>Letting skin peel naturally is best</li>
                          <li>Gentle moisturizing helps comfort</li>
                          <li>Peeling happens regardless of prenatal care</li>
                          <li>All climates see newborn peeling</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">When to Call Your Pediatrician</h3>
                      <ul className="list-disc list-inside text-red-700 space-y-1">
                        <li>Excessive redness or inflammation around peeling areas</li>
                        <li>Signs of infection: pus, red streaks, foul odor</li>
                        <li>Baby shows signs of pain when skin is touched</li>
                        <li>Peeling accompanied by fever or illness symptoms</li>
                        <li>Raw, bleeding areas under peeling skin</li>
                        <li>Peeling continues beyond 4-6 weeks</li>
                        <li>Thick, scaly patches that don&apos;t improve</li>
                        <li>You&apos;re concerned about any aspect of the peeling</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Long-Term Skin Health</h2>

                <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-indigo-800 mb-3">Building Healthy Habits</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">First Month:</h4>
                      <ul className="list-disc list-inside text-indigo-600 space-y-1">
                        <li>Establish gentle cleaning routine</li>
                        <li>Use fragrance-free products consistently</li>
                        <li>Monitor skin&apos;s response to products</li>
                        <li>Take photos to track progress</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">Ongoing Care:</h4>
                      <ul className="list-disc list-inside text-indigo-600 space-y-1">
                        <li>Continue gentle moisturizing routine</li>
                        <li>Watch for skin sensitivity patterns</li>
                        <li>Maintain appropriate room humidity</li>
                        <li>Protect from sun exposure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Is it okay if my baby&apos;s skin is still peeling after 3 weeks?</h3>
                    <p className="text-gray-700">Yes, some babies may have peeling that continues for up to 4-6 weeks, especially post-term babies. As long as the skin underneath looks healthy and pink, and there are no signs of infection or irritation, this is typically normal.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Should I be concerned if the peeling seems to be getting worse?</h3>
                    <p className="text-gray-700">Normal peeling may seem to worsen before it improves, especially during the peak period (week 1-2). However, if you notice redness, rawness, or signs of infection, contact your pediatrician.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Can I use coconut oil or other natural oils?</h3>
                    <p className="text-gray-700">While natural oils like coconut oil are generally safe, fragrance-free commercial baby moisturizers are often better formulated for newborn skin. Always test a small area first and consult your pediatrician if unsure.</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-800 mb-3">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-purple-700 space-y-1">
                      <li><a href="/blog/umbilical-cord-care-guide" className="text-purple-600 underline hover:text-purple-800">Umbilical cord care basics</a></li>
                      <li><a href="/blog/ideal-newborn-temperature-guide" className="text-purple-600 underline hover:text-purple-800">Monitoring baby&apos;s temperature</a></li>
                      <li><a href="/blog/baby-massage-after-delivery" className="text-purple-600 underline hover:text-purple-800">Gentle massage techniques</a></li>
                    </ul>
                    <ul className="list-disc list-inside text-purple-700 space-y-1">
                      <li><a href="/blog/newborn-hiccups-guide" className="text-purple-600 underline hover:text-purple-800">Understanding newborn hiccups</a></li>
                      <li><a href="/blog/baby-crying-sound-guidebook" className="text-purple-600 underline hover:text-purple-800">Baby crying and comfort</a></li>
                      <li><a href="/blog/types-of-swaddling-styles" className="text-purple-600 underline hover:text-purple-800">Safe swaddling for comfort</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}