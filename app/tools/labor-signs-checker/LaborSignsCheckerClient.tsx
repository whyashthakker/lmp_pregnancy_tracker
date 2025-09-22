'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Clock, AlertTriangle, Phone, CheckCircle, Baby, Heart, ArrowRight, RotateCcw } from 'lucide-react';

interface LaborSign {
  id: string;
  question: string;
  description: string;
  points: number;
  category: 'contractions' | 'physical' | 'emotional' | 'emergency';
  urgency: 'low' | 'medium' | 'high' | 'emergency';
}

const laborSigns: LaborSign[] = [
  // CONTRACTIONS
  {
    id: 'regular-contractions',
    question: 'Are you having regular contractions that are getting stronger and closer together?',
    description: 'True labor contractions follow the 5-1-1 rule: 5 minutes apart, lasting 1 minute, for 1 hour',
    points: 25,
    category: 'contractions',
    urgency: 'high'
  },
  {
    id: 'painful-contractions',
    question: 'Are your contractions so strong you can\'t talk through them?',
    description: 'Unable to continue conversation during peak of contraction',
    points: 20,
    category: 'contractions',
    urgency: 'high'
  },
  {
    id: 'contractions-hour',
    question: 'Have you been having contractions for more than an hour?',
    description: 'Consistent pattern lasting over an hour indicates active labor may be starting',
    points: 15,
    category: 'contractions',
    urgency: 'medium'
  },
  
  // PHYSICAL SIGNS
  {
    id: 'water-broke',
    question: 'Has your water broken (sudden gush or continuous leak of fluid)?',
    description: 'Rupture of membranes - clear, odorless fluid that you cannot control',
    points: 30,
    category: 'physical',
    urgency: 'emergency'
  },
  {
    id: 'bloody-show',
    question: 'Have you lost your mucus plug or seen bloody show?',
    description: 'Thick mucus with pink/brown blood - can happen days before or during early labor',
    points: 10,
    category: 'physical',
    urgency: 'low'
  },
  {
    id: 'back-pain',
    question: 'Do you have intense, constant lower back pain?',
    description: 'Persistent back pain that doesn\'t improve with position changes',
    points: 15,
    category: 'physical',
    urgency: 'medium'
  },
  {
    id: 'pelvic-pressure',
    question: 'Do you feel intense pressure in your pelvis or rectum?',
    description: 'Feeling like baby is pressing down or urge to have bowel movement',
    points: 20,
    category: 'physical',
    urgency: 'high'
  },
  {
    id: 'nausea-vomiting',
    question: 'Are you experiencing nausea, vomiting, or diarrhea?',
    description: 'Body\'s natural way of clearing out before labor',
    points: 5,
    category: 'physical',
    urgency: 'low'
  },
  
  // EMOTIONAL/BEHAVIORAL
  {
    id: 'nesting-extreme',
    question: 'Do you have an urgent need to clean/organize everything?',
    description: 'Sudden burst of energy and desire to prepare nest',
    points: 5,
    category: 'emotional',
    urgency: 'low'
  },
  {
    id: 'restless-anxious',
    question: 'Are you feeling unusually restless, anxious, or excited?',
    description: 'Emotional changes as body prepares for labor',
    points: 3,
    category: 'emotional',
    urgency: 'low'
  },
  
  // EMERGENCY SIGNS
  {
    id: 'bleeding-heavy',
    question: 'Are you experiencing heavy vaginal bleeding (more than bloody show)?',
    description: 'Heavy bleeding like a period or more - not normal during labor',
    points: 50,
    category: 'emergency',
    urgency: 'emergency'
  },
  {
    id: 'baby-movement-decreased',
    question: 'Has your baby\'s movement decreased significantly?',
    description: 'Noticeable decrease in baby\'s normal movement pattern',
    points: 50,
    category: 'emergency',
    urgency: 'emergency'
  },
  {
    id: 'severe-headache',
    question: 'Do you have a severe headache with vision changes?',
    description: 'Could indicate preeclampsia - requires immediate attention',
    points: 50,
    category: 'emergency',
    urgency: 'emergency'
  }
];

const interpretResults = (score: number, emergencySelected: boolean) => {
  if (emergencySelected) {
    return {
      level: 'emergency',
      title: 'Seek Emergency Care Immediately',
      message: 'Call 911 or go to the emergency room right away. You have emergency warning signs that require immediate medical attention.',
      action: 'Call 911 Now',
      color: 'red',
      icon: Phone
    };
  }
  
  if (score >= 40) {
    return {
      level: 'active-labor',
      title: 'You May Be in Active Labor',
      message: 'Based on your symptoms, you may be in active labor. Head to the hospital or birthing center now, especially if you\'re full-term (37+ weeks).',
      action: 'Go to Hospital',
      color: 'red',
      icon: AlertTriangle
    };
  }
  
  if (score >= 20) {
    return {
      level: 'early-labor',
      title: 'Possible Early Labor',
      message: 'You may be in early labor. Call your healthcare provider for guidance. If you\'re full-term, prepare to head to the hospital soon.',
      action: 'Call Healthcare Provider',
      color: 'yellow',
      icon: Clock
    };
  }
  
  if (score >= 10) {
    return {
      level: 'pre-labor',
      title: 'Pre-Labor Signs',
      message: 'You\'re showing some signs that labor may start soon. Monitor your symptoms and rest when possible. Contact your provider if symptoms intensify.',
      action: 'Monitor Symptoms',
      color: 'blue',
      icon: CheckCircle
    };
  }
  
  return {
    level: 'not-labor',
    title: 'Probably Not Labor Yet',
    message: 'Based on your symptoms, you\'re likely not in labor yet. Continue normal activities and watch for stronger signs. Contact your provider if you have concerns.',
    action: 'Continue Monitoring',
    color: 'green',
    icon: CheckCircle
  };
};

const categoryInfo = {
  contractions: { title: 'Contraction Patterns', icon: Clock },
  physical: { title: 'Physical Signs', icon: Baby },
  emotional: { title: 'Emotional Changes', icon: Heart },
  emergency: { title: 'Emergency Warning Signs', icon: AlertTriangle }
};

export default function LaborSignsCheckerClient() {
  const [selectedSigns, setSelectedSigns] = useState<Set<string>>(new Set());
  const [showResults, setShowResults] = useState(false);

  const toggleSign = (signId: string) => {
    const newSelected = new Set(selectedSigns);
    if (newSelected.has(signId)) {
      newSelected.delete(signId);
    } else {
      newSelected.add(signId);
    }
    setSelectedSigns(newSelected);
  };

  const calculateScore = () => {
    return Array.from(selectedSigns).reduce((total, signId) => {
      const sign = laborSigns.find(s => s.id === signId);
      return total + (sign?.points || 0);
    }, 0);
  };

  const hasEmergencySign = () => {
    return Array.from(selectedSigns).some(signId => {
      const sign = laborSigns.find(s => s.id === signId);
      return sign?.category === 'emergency';
    });
  };

  const checkSigns = () => {
    setShowResults(true);
  };

  const reset = () => {
    setSelectedSigns(new Set());
    setShowResults(false);
  };

  const score = calculateScore();
  const emergencySelected = hasEmergencySign();
  const result = interpretResults(score, emergencySelected);

  const groupedSigns = laborSigns.reduce((groups, sign) => {
    if (!groups[sign.category]) {
      groups[sign.category] = [];
    }
    groups[sign.category].push(sign);
    return groups;
  }, {} as Record<string, LaborSign[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Am I in Labor? Signs Checker
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Answer questions about your symptoms to get guidance on whether you might be in labor 
            and when to contact your healthcare provider or head to the hospital.
          </p>
        </div>

        {/* Important Disclaimer */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Important Medical Disclaimer</h3>
              <p className="text-red-700 text-sm">
                This tool provides general guidance only and is NOT a substitute for professional medical advice. 
                Every pregnancy is different. When in doubt, always contact your healthcare provider immediately. 
                For true emergencies, call 911.
              </p>
            </div>
          </div>
        </div>

        {showResults ? (
          /* Results Display */
          <div className="space-y-8">
            <Card className={`border-2 ${
              result.color === 'red' ? 'border-red-300 bg-red-50' :
              result.color === 'yellow' ? 'border-yellow-300 bg-yellow-50' :
              result.color === 'blue' ? 'border-blue-300 bg-blue-50' :
              'border-green-300 bg-green-50'
            }`}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  result.color === 'red' ? 'bg-red-500' :
                  result.color === 'yellow' ? 'bg-yellow-500' :
                  result.color === 'blue' ? 'bg-blue-500' :
                  'bg-green-500'
                }`}>
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className={`text-2xl mb-4 ${
                  result.color === 'red' ? 'text-red-800' :
                  result.color === 'yellow' ? 'text-yellow-800' :
                  result.color === 'blue' ? 'text-blue-800' :
                  'text-green-800'
                }`}>
                  {result.title}
                </CardTitle>
                <div className="flex justify-center gap-4 mb-4">
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    Score: {score} points
                  </Badge>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    {selectedSigns.size} symptoms
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className={`text-lg mb-6 ${
                  result.color === 'red' ? 'text-red-700' :
                  result.color === 'yellow' ? 'text-yellow-700' :
                  result.color === 'blue' ? 'text-blue-700' :
                  'text-green-700'
                }`}>
                  {result.message}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {result.level === 'emergency' && (
                    <a 
                      href="tel:911"
                      className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      📞 Call 911
                    </a>
                  )}
                  {result.level === 'active-labor' && (
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                      🏥 Go to Hospital
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    onClick={reset}
                    className="px-8 py-3"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Check Again
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Selected Symptoms Summary */}
            {selectedSigns.size > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Selected Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Array.from(selectedSigns).map(signId => {
                      const sign = laborSigns.find(s => s.id === signId);
                      if (!sign) return null;
                      
                      return (
                        <div key={signId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-800">{sign.question}</span>
                          <Badge variant="outline">{sign.points} pts</Badge>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Additional Guidance */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Additional Guidance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">If This is Your First Baby:</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Labor typically takes longer</li>
                    <li>• You may have more time to get to hospital</li>
                    <li>• False alarms are common and normal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">If You&apos;ve Had Babies Before:</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Labor may progress more quickly</li>
                    <li>• Head to hospital sooner</li>
                    <li>• Trust your experience and instincts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Questionnaire */
          <div className="space-y-8">
            {Object.entries(groupedSigns).map(([category, signs]) => {
              const categoryData = categoryInfo[category as keyof typeof categoryInfo];
              const IconComponent = categoryData.icon;
              
              return (
                <Card key={category} className={category === 'emergency' ? 'border-red-200 bg-red-50' : ''}>
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-3 ${
                      category === 'emergency' ? 'text-red-800' : 'text-gray-800'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                      {categoryData.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {signs.map((sign) => (
                      <div key={sign.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <Checkbox
                              checked={selectedSigns.has(sign.id)}
                              onCheckedChange={() => toggleSign(sign.id)}
                              className={category === 'emergency' ? 'data-[state=checked]:bg-red-600' : ''}
                            />
                          </div>
                          <div className="flex-1">
                            <label className="font-medium text-gray-800 cursor-pointer block mb-2">
                              {sign.question}
                            </label>
                            <p className="text-sm text-gray-600">{sign.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {sign.points} points
                              </Badge>
                              {sign.urgency === 'emergency' && (
                                <Badge variant="outline" className="text-xs text-red-700 border-red-300">
                                  Emergency
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}

            {/* Check Button */}
            <div className="text-center">
              <Button 
                onClick={checkSigns}
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-4 text-lg"
                disabled={selectedSigns.size === 0}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Check My Symptoms ({selectedSigns.size} selected)
              </Button>
            </div>
          </div>
        )}

        {/* Quick Reference */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Reference: 5-1-1 Rule</h3>
          <div className="text-center bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold text-pink-600">5</div>
                <div className="text-sm text-gray-600">Minutes Apart</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">1</div>
                <div className="text-sm text-gray-600">Minute Long</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">1</div>
                <div className="text-sm text-gray-600">Hour Duration</div>
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm">
              When contractions are 5 minutes apart, lasting 1 minute each, for 1 hour - head to the hospital!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl p-8 text-white">
          <Baby className="w-12 h-12 mx-auto mb-4 text-pink-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Trust Your Instincts
          </h2>
          <p className="text-pink-100 mb-6 leading-relaxed">
            You know your body best. This tool provides guidance, but always trust your instincts 
            and contact your healthcare provider when you have concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/contraction-timer"
              className="inline-block bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              Contraction Timer
            </Link>
            <Link 
              href="/tools/hospital-bag-checklist"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              Hospital Bag Checklist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}