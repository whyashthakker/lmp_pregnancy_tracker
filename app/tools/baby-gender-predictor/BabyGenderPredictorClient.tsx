'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Baby, Heart, Sparkles, Calendar, Users } from 'lucide-react';

export default function BabyGenderPredictorClient() {
  const [birthDate, setBirthDate] = useState('');
  const [conceptionDate, setConceptionDate] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [morningMorningSickness, setMorningSickness] = useState<'yes' | 'no' | ''>('');
  const [cravings, setCravings] = useState<'sweet' | 'salty' | 'both' | ''>('');
  const [skinChanges, setSkinChanges] = useState<'acne' | 'glow' | 'no-change' | ''>('');
  const [results, setResults] = useState<{
    chineseCalendar: 'boy' | 'girl';
    heartRate: 'boy' | 'girl';
    symptoms: 'boy' | 'girl';
    overall: 'boy' | 'girl';
    confidence: number;
  } | null>(null);

  const calculateAge = (birthDate: string, conceptionDate: string) => {
    const birth = new Date(birthDate);
    const conception = new Date(conceptionDate);
    
    let age = conception.getFullYear() - birth.getFullYear();
    const monthDiff = conception.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && conception.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const chineseCalendarPredict = (motherAge: number, conceptionMonth: number) => {
    // Simplified Chinese Gender Calendar logic
    const calendar = [
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // Age 18
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // Age 19
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // Age 20
      // ... more rows would be here in a full implementation
    ];
    
    // Simplified logic - in reality, this would be a full lookup table
    const ageIndex = (motherAge - 18) % 3;
    const monthIndex = conceptionMonth - 1;
    
    if (ageIndex >= 0 && ageIndex < 3 && monthIndex >= 0 && monthIndex < 12) {
      return calendar[ageIndex][monthIndex] === 1 ? 'boy' : 'girl';
    }
    
    // Fallback based on age and month
    return (motherAge + conceptionMonth) % 2 === 0 ? 'girl' : 'boy';
  };

  const predictGender = () => {
    if (!birthDate || !conceptionDate) return;

    const motherAge = calculateAge(birthDate, conceptionDate);
    const conceptionMonth = new Date(conceptionDate).getMonth() + 1;
    
    // Chinese Calendar Prediction
    const chineseResult = chineseCalendarPredict(motherAge, conceptionMonth);
    
    // Heart Rate Prediction (old wives' tale)
    let heartRateResult: 'boy' | 'girl' = 'boy';
    if (heartRate) {
      const rate = parseInt(heartRate);
      heartRateResult = rate > 140 ? 'girl' : 'boy';
    }
    
    // Symptoms-based prediction
    let symptomsScore = 0;
    
    // Morning sickness (more common with girls)
    if (morningMorningSickness === 'yes') symptomsScore += 1;
    
    // Cravings (sweet = girl, salty = boy)
    if (cravings === 'sweet') symptomsScore += 1;
    else if (cravings === 'salty') symptomsScore -= 1;
    
    // Skin changes (acne = girl, glow = boy)
    if (skinChanges === 'acne') symptomsScore += 1;
    else if (skinChanges === 'glow') symptomsScore -= 1;
    
    const symptomsResult: 'boy' | 'girl' = symptomsScore > 0 ? 'girl' : 'boy';
    
    // Overall prediction (majority rule)
    const predictions = [chineseResult, heartRateResult, symptomsResult];
    const boyCount = predictions.filter(p => p === 'boy').length;
    const girlCount = predictions.filter(p => p === 'girl').length;
    
    const overall = boyCount > girlCount ? 'boy' : 'girl';
    const confidence = Math.max(boyCount, girlCount) / predictions.length * 100;

    setResults({
      chineseCalendar: chineseResult,
      heartRate: heartRateResult,
      symptoms: symptomsResult,
      overall,
      confidence: Math.round(confidence)
    });
  };

  const getGenderColor = (gender: 'boy' | 'girl') => {
    return gender === 'boy' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-pink-100 text-pink-800 border-pink-200';
  };

  const getGenderIcon = (gender: 'boy' | 'girl') => {
    return gender === 'boy' ? '👶🏻' : '👶🏻';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-purple-600 hover:text-purple-700 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Baby className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Baby Gender Predictor
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have fun predicting your baby&apos;s gender using traditional methods like the Chinese Gender Calendar, 
            heart rate theory, and pregnancy symptoms. Remember, these are just for entertainment!
          </p>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg inline-block">
            <p className="text-sm text-yellow-800">
              🎉 <strong>For Entertainment Only:</strong> These predictions are based on folklore and should not be considered medical advice.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Gender Prediction Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="birth-date" className="text-base font-medium">
                  Your birth date
                </Label>
                <Input
                  id="birth-date"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Needed for Chinese Gender Calendar calculation
                </p>
              </div>

              <div>
                <Label htmlFor="conception-date" className="text-base font-medium">
                  Estimated conception date
                </Label>
                <Input
                  id="conception-date"
                  type="date"
                  value={conceptionDate}
                  onChange={(e) => setConceptionDate(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Or use 2 weeks after your last period started
                </p>
              </div>

              <div>
                <Label htmlFor="heart-rate" className="text-base font-medium">
                  Baby&apos;s heart rate (BPM) - Optional
                </Label>
                <Input
                  id="heart-rate"
                  type="number"
                  min="120"
                  max="180"
                  value={heartRate}
                  onChange={(e) => setHeartRate(e.target.value)}
                  placeholder="e.g. 150"
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  From your recent ultrasound (if available)
                </p>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Do you have morning sickness?</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={morningMorningSickness === 'yes' ? 'default' : 'outline'}
                    onClick={() => setMorningSickness('yes')}
                  >
                    Yes
                  </Button>
                  <Button
                    variant={morningMorningSickness === 'no' ? 'default' : 'outline'}
                    onClick={() => setMorningSickness('no')}
                  >
                    No
                  </Button>
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">What do you crave most?</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={cravings === 'sweet' ? 'default' : 'outline'}
                    onClick={() => setCravings('sweet')}
                    className="text-sm"
                  >
                    Sweet Foods
                  </Button>
                  <Button
                    variant={cravings === 'salty' ? 'default' : 'outline'}
                    onClick={() => setCravings('salty')}
                    className="text-sm"
                  >
                    Salty Foods
                  </Button>
                  <Button
                    variant={cravings === 'both' ? 'default' : 'outline'}
                    onClick={() => setCravings('both')}
                    className="text-sm"
                  >
                    Both
                  </Button>
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">How is your skin?</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={skinChanges === 'acne' ? 'default' : 'outline'}
                    onClick={() => setSkinChanges('acne')}
                    className="text-sm"
                  >
                    More Acne
                  </Button>
                  <Button
                    variant={skinChanges === 'glow' ? 'default' : 'outline'}
                    onClick={() => setSkinChanges('glow')}
                    className="text-sm"
                  >
                    Glowing
                  </Button>
                  <Button
                    variant={skinChanges === 'no-change' ? 'default' : 'outline'}
                    onClick={() => setSkinChanges('no-change')}
                    className="text-sm"
                  >
                    No Change
                  </Button>
                </div>
              </div>

              <Button 
                onClick={predictGender} 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                disabled={!birthDate || !conceptionDate}
              >
                <Heart className="h-4 w-4 mr-2" />
                Predict Baby&apos;s Gender
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {results && (
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5" />
                  Gender Predictions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                  <div className="text-4xl mb-2">{getGenderIcon(results.overall)}</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2 capitalize">
                    It&apos;s a {results.overall}!
                  </div>
                  <div className="text-gray-600">Overall Prediction</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {results.confidence}% confidence based on traditional methods
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">Prediction Breakdown:</h4>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">Chinese Gender Calendar</div>
                      <div className="text-sm text-gray-600">Based on mother&apos;s age and conception month</div>
                    </div>
                    <Badge className={`${getGenderColor(results.chineseCalendar)} border capitalize`}>
                      {results.chineseCalendar}
                    </Badge>
                  </div>

                  {heartRate && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-800">Heart Rate Theory</div>
                        <div className="text-sm text-gray-600">Over 140 BPM = girl, under = boy</div>
                      </div>
                      <Badge className={`${getGenderColor(results.heartRate)} border capitalize`}>
                        {results.heartRate}
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">Pregnancy Symptoms</div>
                      <div className="text-sm text-gray-600">Based on cravings, sickness, and skin</div>
                    </div>
                    <Badge className={`${getGenderColor(results.symptoms)} border capitalize`}>
                      {results.symptoms}
                    </Badge>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h4 className="font-medium text-blue-800 mb-2">Remember</h4>
                  <p className="text-sm text-blue-700">
                    These predictions are based on traditional folklore and old wives&apos; tales. 
                    The most accurate way to determine your baby&apos;s gender is through ultrasound or genetic testing.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Educational Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Popular Gender Prediction Methods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Chinese Gender Calendar</h4>
                  <p className="text-sm text-gray-600">
                    Ancient Chinese chart based on mother&apos;s age and conception month. Claims 90% accuracy but not scientifically proven.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Heart Rate Theory</h4>
                  <p className="text-sm text-gray-600">
                    Suggests girls have faster heart rates (&gt;140 BPM) and boys have slower rates. Not supported by medical evidence.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Ramzi Theory</h4>
                  <p className="text-sm text-gray-600">
                    Claims placenta position in early ultrasounds can predict gender. Limited scientific backing.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Ring Test</h4>
                  <p className="text-sm text-gray-600">
                    Swinging a ring over the belly to predict gender based on movement patterns. Pure folklore.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accurate Gender Determination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Ultrasound (18-20 weeks)</h4>
                  <p className="text-sm text-gray-600">
                    Most common method with 95-99% accuracy. Gender can sometimes be determined as early as 15 weeks.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">NIPT (10 weeks)</h4>
                  <p className="text-sm text-gray-600">
                    Non-invasive prenatal testing through blood test. 99% accurate for detecting Y chromosome.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">CVS (10-13 weeks)</h4>
                  <p className="text-sm text-gray-600">
                    Chorionic villus sampling. Invasive test primarily for genetic conditions but can determine gender.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Amniocentesis (15-20 weeks)</h4>
                  <p className="text-sm text-gray-600">
                    Invasive genetic test that can determine gender with 100% accuracy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">More Pregnancy Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/baby-name-generator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Baby Name Generator</h3>
                  <p className="text-sm text-gray-600">Find the perfect name for your little one</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/due-date-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Due Date Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate your estimated delivery date</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/baby-size-comparison" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Baby className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Baby Size Guide</h3>
                  <p className="text-sm text-gray-600">See how big your baby is each week</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}