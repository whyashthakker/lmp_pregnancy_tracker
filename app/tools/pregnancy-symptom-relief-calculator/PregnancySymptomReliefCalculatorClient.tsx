'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft, Heart, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface ReliefResult {
  symptom: string;
  trimester: string;
  safeRemedies: Array<{ remedy: string; description: string; category: string }>;
  avoidRemedies: Array<{ remedy: string; reason: string }>;
  whenToCallDoctor: string[];
  lifestyle: string[];
}

export default function PregnancySymptomReliefCalculatorClient() {
  const [weeks, setWeeks] = useState('');
  const [primarySymptom, setPrimarySymptom] = useState('');
  const [severity, setSeverity] = useState('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<ReliefResult | null>(null);


  const symptomRemedies = {
    nausea: {
      safe: [
        { remedy: 'Ginger tea or supplements', description: '1g daily, shown to reduce nausea', category: 'Natural' },
        { remedy: 'Vitamin B6 supplements', description: '10-25mg three times daily', category: 'Supplement' },
        { remedy: 'Small, frequent meals', description: 'Every 2-3 hours, avoid empty stomach', category: 'Dietary' },
        { remedy: 'Crackers before getting up', description: 'Keep by bedside for morning sickness', category: 'Dietary' },
        { remedy: 'Peppermint aromatherapy', description: 'Inhale essential oil or tea', category: 'Natural' },
        { remedy: 'Acupressure wristbands', description: 'P6 pressure point stimulation', category: 'Natural' }
      ],
      avoid: [
        { remedy: 'Large meals', reason: 'Can worsen nausea and vomiting' },
        { remedy: 'Spicy or fatty foods', reason: 'May trigger or intensify symptoms' },
        { remedy: 'Strong odors', reason: 'Can trigger nausea episodes' }
      ],
      callDoctor: [
        'Vomiting more than 3 times per day',
        'Unable to keep fluids down for 24+ hours',
        'Weight loss of more than 5% of pre-pregnancy weight',
        'Signs of dehydration (dizziness, dark urine)',
        'Blood in vomit'
      ],
      lifestyle: [
        'Get plenty of rest',
        'Stay hydrated with small sips',
        'Avoid triggers (odors, foods)',
        'Open windows for fresh air',
        'Wear loose, comfortable clothing'
      ]
    },
    heartburn: {
      safe: [
        { remedy: 'Calcium carbonate antacids', description: 'Tums, Rolaids - follow package directions', category: 'Medication' },
        { remedy: 'Sleep with head elevated', description: '6-8 inch elevation of head of bed', category: 'Positioning' },
        { remedy: 'Small, frequent meals', description: 'Avoid large meals that trigger reflux', category: 'Dietary' },
        { remedy: 'Avoid trigger foods', description: 'Spicy, fatty, acidic, chocolate, caffeine', category: 'Dietary' },
        { remedy: 'Chew gum after meals', description: 'Sugar-free gum increases saliva production', category: 'Natural' },
        { remedy: 'Papaya enzymes', description: 'Natural digestive aid, chewable tablets', category: 'Natural' }
      ],
      avoid: [
        { remedy: 'Aspirin or ibuprofen', reason: 'Not safe during pregnancy' },
        { remedy: 'Lying down after eating', reason: 'Increases acid reflux' },
        { remedy: 'Tight clothing', reason: 'Puts pressure on stomach' }
      ],
      callDoctor: [
        'Severe chest pain',
        'Difficulty swallowing',
        'Persistent vomiting',
        'Antacids don\'t provide relief',
        'Symptoms interfere with eating or sleeping'
      ],
      lifestyle: [
        'Eat slowly and chew thoroughly',
        'Stay upright for 3 hours after eating',
        'Wear loose-fitting clothes',
        'Drink fluids between meals, not during',
        'Manage stress levels'
      ]
    },
    back_pain: {
      safe: [
        { remedy: 'Prenatal massage', description: 'Licensed therapist experienced with pregnancy', category: 'Physical' },
        { remedy: 'Warm compress', description: '15-20 minutes, avoid hot temperatures', category: 'Physical' },
        { remedy: 'Prenatal yoga', description: 'Gentle stretches designed for pregnancy', category: 'Exercise' },
        { remedy: 'Maternity support belt', description: 'Provides lower back and belly support', category: 'Support' },
        { remedy: 'Swimming or water exercises', description: 'Low impact, supports body weight', category: 'Exercise' },
        { remedy: 'Proper posture', description: 'Sit straight, use lumbar support', category: 'Positioning' }
      ],
      avoid: [
        { remedy: 'Hot tubs or saunas', reason: 'Risk of overheating and dehydration' },
        { remedy: 'Pain medications without approval', reason: 'Many are not safe during pregnancy' },
        { remedy: 'Sleeping on back', reason: 'Can worsen pain and reduce blood flow' }
      ],
      callDoctor: [
        'Severe, constant pain',
        'Pain radiating down legs',
        'Numbness or tingling in legs',
        'Pain with fever',
        'Pain that interferes with daily activities'
      ],
      lifestyle: [
        'Sleep on your side with pillow between knees',
        'Wear low-heeled, supportive shoes',
        'Lift with your legs, not your back',
        'Take frequent breaks from sitting/standing',
        'Apply ice for acute injuries'
      ]
    },
    constipation: {
      safe: [
        { remedy: 'Increase fiber intake', description: '25-35g daily from fruits, vegetables, whole grains', category: 'Dietary' },
        { remedy: 'Drink plenty of water', description: '8-10 glasses daily, add prune juice', category: 'Dietary' },
        { remedy: 'Regular exercise', description: 'Walking 20-30 minutes daily', category: 'Exercise' },
        { remedy: 'Prunes or prune juice', description: 'Natural laxative effect', category: 'Natural' },
        { remedy: 'Psyllium husk', description: 'Natural fiber supplement, increase gradually', category: 'Supplement' },
        { remedy: 'Stool softeners', description: 'Docusate sodium (Colace) if approved by doctor', category: 'Medication' }
      ],
      avoid: [
        { remedy: 'Stimulant laxatives', reason: 'Can cause cramping and contractions' },
        { remedy: 'Mineral oil', reason: 'Can interfere with nutrient absorption' },
        { remedy: 'Excessive straining', reason: 'Can worsen hemorrhoids' }
      ],
      callDoctor: [
        'No bowel movement for more than 3 days',
        'Severe abdominal pain',
        'Blood in stool',
        'Persistent nausea and vomiting',
        'Symptoms don\'t improve with dietary changes'
      ],
      lifestyle: [
        'Establish regular bathroom routine',
        'Don\'t delay when you feel the urge',
        'Use a footstool while on toilet',
        'Take your prenatal vitamin with food',
        'Reduce iron supplements if they worsen symptoms'
      ]
    },
    leg_cramps: {
      safe: [
        { remedy: 'Calf stretches', description: 'Gentle stretching before bed and during cramps', category: 'Exercise' },
        { remedy: 'Magnesium supplements', description: '200-400mg daily, consult doctor first', category: 'Supplement' },
        { remedy: 'Warm bath before bed', description: 'Relaxes muscles, improves circulation', category: 'Physical' },
        { remedy: 'Compression stockings', description: 'Improves circulation, wear during day', category: 'Support' },
        { remedy: 'Massage', description: 'Gentle massage of calf muscles', category: 'Physical' },
        { remedy: 'Stay hydrated', description: 'Dehydration can trigger muscle cramps', category: 'Dietary' }
      ],
      avoid: [
        { remedy: 'Pointing toes during stretches', reason: 'Can trigger cramps' },
        { remedy: 'Standing for long periods', reason: 'Can worsen circulation problems' },
        { remedy: 'Tight shoes or socks', reason: 'Restricts blood flow' }
      ],
      callDoctor: [
        'Severe pain that doesn\'t resolve',
        'Swelling, redness, or warmth in leg',
        'Persistent cramping',
        'Signs of blood clot (one-sided swelling)',
        'Cramps interfering with sleep regularly'
      ],
      lifestyle: [
        'Elevate legs when resting',
        'Wear comfortable, supportive shoes',
        'Avoid crossing legs when sitting',
        'Get regular, gentle exercise',
        'Sleep on your side to improve circulation'
      ]
    }
  };

  const getSymptomRemedies = (symptom: string) => {
    return symptomRemedies[symptom as keyof typeof symptomRemedies] || symptomRemedies.nausea;
  };

  const calculateReliefPlan = () => {
    if (!weeks || !primarySymptom) return;

    const weekNum = parseInt(weeks);
    let trimester = '';
    
    if (weekNum <= 12) trimester = 'First Trimester';
    else if (weekNum <= 26) trimester = 'Second Trimester';
    else trimester = 'Third Trimester';

    const remedyData = getSymptomRemedies(primarySymptom);
    
    setResult({
      symptom: primarySymptom.replace('_', ' ').toUpperCase(),
      trimester,
      safeRemedies: remedyData.safe,
      avoidRemedies: remedyData.avoid,
      whenToCallDoctor: remedyData.callDoctor,
      lifestyle: remedyData.lifestyle
    });
  };

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    if (checked) {
      setSymptoms([...symptoms, symptom]);
    } else {
      setSymptoms(symptoms.filter(s => s !== symptom));
    }
  };

  const reset = () => {
    setWeeks('');
    setPrimarySymptom('');
    setSeverity('');
    setSymptoms([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full">
              <Calculator className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Pregnancy Symptom Relief Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get personalized, safe relief recommendations for common pregnancy symptoms based on your trimester and specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-600" />
                Symptom Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weeks">Pregnancy Week</Label>
                  <Input
                    id="weeks"
                    type="number"
                    placeholder="e.g., 20"
                    value={weeks}
                    onChange={(e) => setWeeks(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="severity">Symptom Severity</Label>
                  <Select value={severity} onValueChange={setSeverity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">Mild (manageable, occasional)</SelectItem>
                      <SelectItem value="moderate">Moderate (bothersome, frequent)</SelectItem>
                      <SelectItem value="severe">Severe (interferes with daily life)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="symptom">Primary Symptom</Label>
                <Select value={primarySymptom} onValueChange={setPrimarySymptom}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select main symptom" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nausea">Nausea/Morning Sickness</SelectItem>
                    <SelectItem value="heartburn">Heartburn/Indigestion</SelectItem>
                    <SelectItem value="back_pain">Back Pain</SelectItem>
                    <SelectItem value="leg_cramps">Leg Cramps</SelectItem>
                    <SelectItem value="constipation">Constipation</SelectItem>
                    <SelectItem value="hemorrhoids">Hemorrhoids</SelectItem>
                    <SelectItem value="swelling">Swelling/Edema</SelectItem>
                    <SelectItem value="headaches">Headaches</SelectItem>
                    <SelectItem value="fatigue">Fatigue</SelectItem>
                    <SelectItem value="insomnia">Insomnia/Sleep Issues</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Other Symptoms (Optional)</Label>
                <div className="grid grid-cols-2 gap-3">
                  {['headaches', 'fatigue', 'swelling', 'insomnia'].map((symptom) => (
                    <div key={symptom} className="flex items-center space-x-2">
                      <Checkbox
                        id={symptom}
                        checked={symptoms.includes(symptom)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                      />
                      <Label htmlFor={symptom} className="text-sm capitalize">
                        {symptom.replace('_', ' ')}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={calculateReliefPlan} className="flex-1 bg-green-600 hover:bg-green-700">
                  Get Relief Plan
                </Button>
                <Button onClick={reset} variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card className="shadow-xl border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Relief Plan for {result.symptom}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600 mb-1">{result.trimester}</div>
                  <div className="text-sm text-gray-600">Personalized recommendations</div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Safe Remedies
                  </h4>
                  <div className="space-y-3">
                    {result.safeRemedies.map((remedy, index) => (
                      <div key={index} className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-start justify-between mb-1">
                          <h5 className="font-semibold text-green-700">{remedy.remedy}</h5>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            {remedy.category}
                          </span>
                        </div>
                        <p className="text-sm text-green-600">{remedy.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    Avoid These
                  </h4>
                  <div className="space-y-2">
                    {result.avoidRemedies.map((avoid, index) => (
                      <div key={index} className="p-3 bg-red-50 rounded-lg">
                        <h5 className="font-semibold text-red-700 mb-1">{avoid.remedy}</h5>
                        <p className="text-sm text-red-600">{avoid.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    Call Your Doctor If:
                  </h4>
                  <ul className="space-y-1">
                    {result.whenToCallDoctor.map((warning, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                        {warning}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-blue-600" />
                    Lifestyle Tips
                  </h4>
                  <ul className="space-y-1">
                    {result.lifestyle.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="mt-8 border-teal-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-teal-600" />
              Common Pregnancy Symptoms by Trimester
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-teal-600 mb-3">First Trimester</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Morning sickness/nausea</li>
                  <li>• Fatigue and exhaustion</li>
                  <li>• Breast tenderness</li>
                  <li>• Frequent urination</li>
                  <li>• Food aversions</li>
                  <li>• Mood changes</li>
                  <li>• Mild cramping</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-600 mb-3">Second Trimester</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Heartburn and indigestion</li>
                  <li>• Round ligament pain</li>
                  <li>• Constipation</li>
                  <li>• Nasal congestion</li>
                  <li>• Skin changes</li>
                  <li>• Increased appetite</li>
                  <li>• Back pain begins</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-600 mb-3">Third Trimester</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Increased back pain</li>
                  <li>• Leg cramps</li>
                  <li>• Swelling (edema)</li>
                  <li>• Shortness of breath</li>
                  <li>• Insomnia</li>
                  <li>• Hemorrhoids</li>
                  <li>• Braxton Hicks contractions</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">Important Safety Reminders:</h5>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Always consult your healthcare provider before starting new treatments</li>
                <li>• Some natural remedies can interact with medications</li>
                <li>• Trust your instincts - if something doesn't feel right, call your doctor</li>
                <li>• Every pregnancy is different - what works for others may not work for you</li>
                <li>• Severe or persistent symptoms always warrant medical attention</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Track Your Symptoms</h3>
            <p className="text-lg mb-6 opacity-90">
              Monitor your pregnancy symptoms and get professional guidance with our tracking tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools/pregnancy-symptom-checker"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Symptom Checker
              </Link>
              <Link 
                href="/blog/pregnancy-emergency-warning-signs-when-call-doctor"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Warning Signs Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}