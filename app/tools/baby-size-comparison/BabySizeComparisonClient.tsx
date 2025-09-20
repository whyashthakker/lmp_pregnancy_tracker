'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Baby, Ruler, Apple, Calendar } from 'lucide-react';

const babySizeData = {
  4: { size: 'Poppy seed', length: '0.04 in', weight: '< 0.04 oz', emoji: '🌰', development: 'Neural tube forms, heart begins to develop' },
  5: { size: 'Sesame seed', length: '0.05 in', weight: '< 0.04 oz', emoji: '🌱', development: 'Heart starts beating, basic brain structure forms' },
  6: { size: 'Lentil', length: '0.25 in', weight: '< 0.04 oz', emoji: '🌾', development: 'Limb buds appear, facial features begin forming' },
  7: { size: 'Blueberry', length: '0.51 in', weight: '< 0.04 oz', emoji: '🫐', development: 'Brain hemispheres develop, mouth and tongue form' },
  8: { size: 'Kidney bean', length: '0.63 in', weight: '0.04 oz', emoji: '🫘', development: 'All essential organs present, webbed fingers and toes' },
  9: { size: 'Grape', length: '0.90 in', weight: '0.07 oz', emoji: '🍇', development: 'Heart finishes dividing into chambers, genitals begin to form' },
  10: { size: 'Kumquat', length: '1.22 in', weight: '0.14 oz', emoji: '🍊', development: 'Vital organs functioning, bones and cartilage forming' },
  11: { size: 'Fig', length: '1.61 in', weight: '0.25 oz', emoji: '🍇', development: 'Hair follicles form, hands can open and close' },
  12: { size: 'Lime', length: '2.13 in', weight: '0.49 oz', emoji: '🍋', development: 'Reflexes develop, kidneys start producing urine' },
  13: { size: 'Peach', length: '2.91 in', weight: '0.81 oz', emoji: '🍑', development: 'Vocal cords form, baby can make sucking motions' },
  14: { size: 'Lemon', length: '3.42 in', weight: '1.52 oz', emoji: '🍋', development: 'Facial muscles develop, baby can make expressions' },
  15: { size: 'Apple', length: '3.98 in', weight: '2.47 oz', emoji: '🍎', development: 'Bones continue hardening, baby can move joints' },
  16: { size: 'Avocado', length: '4.57 in', weight: '3.53 oz', emoji: '🥑', development: 'Baby&apos;s sex can be determined, coordinated limb movements' },
  17: { size: 'Turnip', length: '5.12 in', weight: '4.94 oz', emoji: '🥬', development: 'Baby can hear, fat begins to form' },
  18: { size: 'Bell pepper', length: '5.59 in', weight: '6.70 oz', emoji: '🫑', development: 'Ears are in final position, you may feel movements' },
  19: { size: 'Tomato', length: '6.02 in', weight: '8.47 oz', emoji: '🍅', development: 'Brain develops areas for senses, hair grows on head' },
  20: { size: 'Banana', length: '6.46 in', weight: '10.58 oz', emoji: '🍌', development: 'Halfway point! Baby can swallow and taste' },
  21: { size: 'Carrot', length: '10.51 in', weight: '12.70 oz', emoji: '🥕', development: 'Rapid brain development, sleep-wake cycles establish' },
  22: { size: 'Spaghetti squash', length: '10.94 in', weight: '15.17 oz', emoji: '🥒', development: 'Lips and eyebrows more distinct, sense of touch develops' },
  23: { size: 'Large mango', length: '11.38 in', weight: '1.10 lbs', emoji: '🥭', development: 'Blood vessels in lungs develop, hearing improves' },
  24: { size: 'Corn', length: '11.81 in', weight: '1.32 lbs', emoji: '🌽', development: 'Face is fully formed, footprints and fingerprints set' },
  25: { size: 'Rutabaga', length: '13.62 in', weight: '1.46 lbs', emoji: '🥬', development: 'Air sacs in lungs form, baby responds to familiar sounds' },
  26: { size: 'Scallion bunch', length: '14.02 in', weight: '1.68 lbs', emoji: '🧅', development: 'Eyes can open and close, brain tissue increases' },
  27: { size: 'Cauliflower', length: '14.41 in', weight: '1.93 lbs', emoji: '🥬', development: 'Brain can control breathing, sense of smell develops' },
  28: { size: 'Eggplant', length: '14.80 in', weight: '2.22 lbs', emoji: '🍆', development: 'Eyes can focus, baby practices breathing movements' },
  29: { size: 'Butternut squash', length: '15.20 in', weight: '2.54 lbs', emoji: '🧅', development: 'Brain controls body temperature, bones harden' },
  30: { size: 'Cabbage', length: '15.71 in', weight: '2.91 lbs', emoji: '🥬', development: 'Red blood cells formed in bone marrow, lanugo sheds' },
  31: { size: 'Coconut', length: '16.18 in', weight: '3.31 lbs', emoji: '🥥', development: 'Major brain and nerve development, baby kicks strongly' },
  32: { size: 'Jicama', length: '16.69 in', weight: '3.75 lbs', emoji: '🥔', development: 'Bones continue hardening, fingernails reach fingertips' },
  33: { size: 'Pineapple', length: '17.20 in', weight: '4.23 lbs', emoji: '🍍', development: 'Baby&apos;s immune system develops, skull bones remain soft' },
  34: { size: 'Cantaloupe', length: '17.72 in', weight: '4.73 lbs', emoji: '🍈', development: 'Central nervous system matures, lungs continue developing' },
  35: { size: 'Honeydew melon', length: '18.19 in', weight: '5.25 lbs', emoji: '🍈', development: 'Baby gains weight rapidly, brain development accelerates' },
  36: { size: 'Papaya', length: '18.66 in', weight: '5.78 lbs', emoji: '🧡', development: 'Baby is considered early term, digestive system nearly mature' },
  37: { size: 'Winter melon', length: '19.13 in', weight: '6.30 lbs', emoji: '🍈', development: 'Baby is full-term, continues gaining weight' },
  38: { size: 'Leek', length: '19.61 in', weight: '6.80 lbs', emoji: '🧅', development: 'Organs are mature, baby may drop into pelvis' },
  39: { size: 'Mini watermelon', length: '20.09 in', weight: '7.25 lbs', emoji: '🍉', development: 'Baby&apos;s brain continues developing, ready for birth' },
  40: { size: 'Small pumpkin', length: '20.16 in', weight: '7.63 lbs', emoji: '🎃', development: 'Baby is ready to be born!' }
};

export default function BabySizeComparisonClient() {
  const [currentWeek, setCurrentWeek] = useState('20');
  
  const weekData = babySizeData[parseInt(currentWeek) as keyof typeof babySizeData];
  const trimester = parseInt(currentWeek) <= 13 ? 1 : parseInt(currentWeek) <= 26 ? 2 : 3;

  const getTrimesterInfo = (trimester: number) => {
    switch (trimester) {
      case 1:
        return { name: 'First Trimester', color: 'from-green-400 to-green-600', weeks: '1-13 weeks' };
      case 2:
        return { name: 'Second Trimester', color: 'from-blue-400 to-blue-600', weeks: '14-26 weeks' };
      case 3:
        return { name: 'Third Trimester', color: 'from-purple-400 to-purple-600', weeks: '27-40 weeks' };
      default:
        return { name: 'Pregnancy', color: 'from-pink-400 to-pink-600', weeks: '' };
    }
  };

  const getWeekRanges = () => {
    const weeks = Object.keys(babySizeData).map(Number).sort((a, b) => a - b);
    const ranges = [];
    
    for (let i = 0; i < weeks.length; i += 4) {
      ranges.push(weeks.slice(i, i + 4));
    }
    
    return ranges;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-orange-600 hover:text-orange-700 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Apple className="h-12 w-12 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Baby Size Comparison
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Track your baby&apos;s amazing growth journey week by week. See how your little one compares 
            to fruits and vegetables at every stage of pregnancy.
          </p>
        </div>

        {/* Week Selector */}
        <Card className="shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Select Your Pregnancy Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="week-input" className="text-base font-medium">
                  Current week of pregnancy
                </Label>
                <Input
                  id="week-input"
                  type="number"
                  min="4"
                  max="40"
                  value={currentWeek}
                  onChange={(e) => setCurrentWeek(e.target.value)}
                  className="mt-2 max-w-32"
                />
              </div>
              
              <div>
                <Label className="text-base font-medium mb-3 block">Quick Week Selection:</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {getWeekRanges().map((range, index) => (
                    <div key={index} className="space-y-1">
                      {range.map((week) => (
                        <button
                          key={week}
                          onClick={() => setCurrentWeek(week.toString())}
                          className={`w-full p-2 text-sm rounded border transition-colors ${
                            parseInt(currentWeek) === week
                              ? 'bg-orange-500 text-white border-orange-500'
                              : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50'
                          }`}
                        >
                          Week {week}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Week Display */}
        {weekData && (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Size Comparison */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5" />
                  Week {currentWeek} - Your Baby&apos;s Size
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="text-8xl mb-4">{weekData.emoji}</div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-orange-600">{weekData.size}</h3>
                  <Badge className={`bg-gradient-to-r ${getTrimesterInfo(trimester).color} text-white border-0`}>
                    {getTrimesterInfo(trimester).name}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Ruler className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-xl font-bold text-blue-600">{weekData.length}</div>
                    <div className="text-sm text-gray-600">Length</div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Baby className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-xl font-bold text-green-600">{weekData.weight}</div>
                    <div className="text-sm text-gray-600">Weight</div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-left">
                  <h4 className="font-medium text-yellow-800 mb-2">This Week&apos;s Development</h4>
                  <p className="text-sm text-yellow-700">{weekData.development}</p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Growth Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {Object.entries(babySizeData)
                    .filter(([week]) => {
                      const weekNum = parseInt(week);
                      const currentWeekNum = parseInt(currentWeek);
                      return weekNum >= Math.max(4, currentWeekNum - 3) && 
                             weekNum <= Math.min(40, currentWeekNum + 3);
                    })
                    .map(([week, data]) => (
                      <div
                        key={week}
                        className={`flex items-center gap-4 p-3 rounded-lg border transition-colors ${
                          parseInt(week) === parseInt(currentWeek)
                            ? 'bg-orange-100 border-orange-300'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="text-2xl">{data.emoji}</div>
                        <div className="flex-1">
                          <div className="font-medium">Week {week}</div>
                          <div className="text-sm text-gray-600">{data.size}</div>
                          <div className="text-xs text-gray-500">{data.length} • {data.weight}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Trimester Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((trimesterNum) => {
            const info = getTrimesterInfo(trimesterNum);
            const isCurrentTrimester = trimester === trimesterNum;
            
            return (
              <Card key={trimesterNum} className={`${isCurrentTrimester ? 'ring-2 ring-orange-300' : ''}`}>
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <span className="text-white font-bold">{trimesterNum}</span>
                  </div>
                  <CardTitle className="text-lg">{info.name}</CardTitle>
                  <p className="text-sm text-gray-600">{info.weeks}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {trimesterNum === 1 && (
                      <>
                        <div className="text-sm">🌱 <strong>Weeks 4-8:</strong> Poppy seed → Kidney bean</div>
                        <div className="text-sm">🫐 <strong>Weeks 9-13:</strong> Grape → Peach</div>
                        <div className="text-xs text-gray-600 mt-2">Major organ development and formation</div>
                      </>
                    )}
                    {trimesterNum === 2 && (
                      <>
                        <div className="text-sm">🍋 <strong>Weeks 14-18:</strong> Lemon → Bell pepper</div>
                        <div className="text-sm">🍌 <strong>Weeks 19-26:</strong> Tomato → Scallion</div>
                        <div className="text-xs text-gray-600 mt-2">Rapid growth and movement begins</div>
                      </>
                    )}
                    {trimesterNum === 3 && (
                      <>
                        <div className="text-sm">🥬 <strong>Weeks 27-32:</strong> Cauliflower → Jicama</div>
                        <div className="text-sm">🍍 <strong>Weeks 33-40:</strong> Pineapple → Pumpkin</div>
                        <div className="text-xs text-gray-600 mt-2">Final preparations for birth</div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Fun Facts */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Amazing Growth Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Incredible Growth</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-600">
                      Your baby grows from the size of a poppy seed to a small pumpkin in just 36 weeks!
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-600">
                      By week 20, your baby is about halfway to their birth weight
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-600">
                      In the third trimester, your baby gains about ½ pound per week
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Development Milestones</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-600">
                      Heart starts beating around week 5-6
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-600">
                      First movements felt around weeks 16-24
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-600">
                      Eyes can open and close by week 26
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Tools */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Related Pregnancy Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/pregnancy-week-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Week Calculator</h3>
                  <p className="text-sm text-gray-600">Find out how many weeks pregnant you are</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/due-date-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Baby className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Due Date Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate your estimated delivery date</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/kick-counter" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Ruler className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Kick Counter</h3>
                  <p className="text-sm text-gray-600">Track your baby&apos;s movements</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}