'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Phone, Clock, Search, Heart } from 'lucide-react';

interface Symptom {
  id: string;
  name: string;
  category: 'common' | 'concerning' | 'emergency';
  trimester: 'any' | 'first' | 'second' | 'third' | 'postpartum';
  description: string;
  when_normal: string;
  when_concerning: string;
  action: string;
  related_symptoms?: string[];
}

const symptoms: Symptom[] = [
  {
    id: 'nausea',
    name: 'Nausea & Morning Sickness',
    category: 'common',
    trimester: 'first',
    description: 'Feeling sick to your stomach, with or without vomiting',
    when_normal: 'Mild to moderate nausea, especially in first trimester (weeks 6-12). Usually improves by 16 weeks.',
    when_concerning: 'Severe vomiting (hyperemesis), unable to keep food/fluids down, weight loss, dehydration signs',
    action: 'Contact provider if you cannot keep fluids down for 24+ hours or lose significant weight',
    related_symptoms: ['fatigue', 'food_aversions', 'vomiting']
  },
  {
    id: 'bleeding',
    name: 'Vaginal Bleeding',
    category: 'emergency',
    trimester: 'any',
    description: 'Any vaginal bleeding during pregnancy',
    when_normal: 'Very light spotting (implantation bleeding) around 6-12 days after conception. Light spotting after intercourse.',
    when_concerning: 'Any bleeding heavier than light spotting, bleeding with cramping, bright red bleeding',
    action: 'Contact provider immediately for any bleeding. Call emergency services for heavy bleeding with pain.',
    related_symptoms: ['cramping', 'pain', 'clotting']
  },
  {
    id: 'cramping',
    name: 'Abdominal Cramping',
    category: 'concerning',
    trimester: 'any',
    description: 'Pain or cramping in lower abdomen',
    when_normal: 'Mild, occasional cramping as uterus grows. Round ligament pain during second trimester.',
    when_concerning: 'Severe cramping, cramping with bleeding, rhythmic contractions before 37 weeks',
    action: 'Monitor intensity and frequency. Contact provider for severe or persistent cramping.',
    related_symptoms: ['bleeding', 'back_pain', 'contractions']
  },
  {
    id: 'breast_changes',
    name: 'Breast Changes & Tenderness',
    category: 'common',
    trimester: 'any',
    description: 'Breast tenderness, swelling, or changes in appearance',
    when_normal: 'Tender, swollen breasts. Darkening areolas. Visible veins. Size increase throughout pregnancy.',
    when_concerning: 'Sudden severe pain, red streaks, warm areas, hard lumps that don\'t move',
    action: 'Normal breast changes are expected. Report any concerning lumps or signs of infection.',
    related_symptoms: ['nipple_discharge', 'swelling']
  },
  {
    id: 'fatigue',
    name: 'Extreme Tiredness',
    category: 'common',
    trimester: 'any',
    description: 'Feeling unusually tired or exhausted',
    when_normal: 'Significant fatigue in first and third trimesters. Need for more sleep and rest.',
    when_concerning: 'Sudden onset severe fatigue, fatigue with dizziness/fainting, unable to function daily',
    action: 'Rest when possible. Contact provider if fatigue is severe or accompanied by other symptoms.',
    related_symptoms: ['dizziness', 'nausea', 'headaches']
  },
  {
    id: 'frequent_urination',
    name: 'Frequent Urination',
    category: 'common',
    trimester: 'any',
    description: 'Needing to urinate more often than usual',
    when_normal: 'Increased frequency, especially first and third trimesters. Clear or pale yellow urine.',
    when_concerning: 'Painful urination, burning sensation, blood in urine, fever with urination',
    action: 'Normal increase expected. Contact provider for pain, burning, or signs of infection.',
    related_symptoms: ['pelvic_pressure', 'burning_urination']
  },
  {
    id: 'headaches',
    name: 'Headaches',
    category: 'concerning',
    trimester: 'any',
    description: 'Head pain or pressure',
    when_normal: 'Mild, occasional headaches due to hormonal changes, especially first trimester.',
    when_concerning: 'Severe headaches, sudden onset severe headache, headache with vision changes/swelling',
    action: 'Contact provider for severe, persistent, or sudden onset headaches, especially after 20 weeks.',
    related_symptoms: ['vision_changes', 'swelling', 'high_blood_pressure']
  },
  {
    id: 'swelling',
    name: 'Swelling (Edema)',
    category: 'concerning',
    trimester: 'third',
    description: 'Swelling in hands, feet, face, or legs',
    when_normal: 'Mild swelling in feet and ankles, especially end of day or after standing.',
    when_concerning: 'Sudden severe swelling, swelling in face/hands, swelling with headache/vision changes',
    action: 'Contact provider immediately for sudden or severe swelling, especially face and hands.',
    related_symptoms: ['headaches', 'vision_changes', 'high_blood_pressure']
  },
  {
    id: 'contractions',
    name: 'Contractions',
    category: 'concerning',
    trimester: 'third',
    description: 'Tightening of uterine muscles',
    when_normal: 'Irregular Braxton Hicks contractions after 20 weeks. Irregular, don\'t increase in intensity.',
    when_concerning: 'Regular contractions before 37 weeks, contractions every 5 minutes for 1 hour',
    action: 'Time contractions. Contact provider for regular pattern before 37 weeks or 5-1-1 rule at term.',
    related_symptoms: ['back_pain', 'pelvic_pressure', 'bleeding']
  },
  {
    id: 'decreased_movement',
    name: 'Decreased Baby Movement',
    category: 'emergency',
    trimester: 'second',
    description: 'Less fetal movement than usual after 20 weeks',
    when_normal: 'Gradual increase in movement 16-25 weeks. Regular pattern by 28 weeks.',
    when_concerning: 'Sudden decrease in movement, no movement for several hours after 28 weeks',
    action: 'Contact provider immediately if you notice significant decrease in baby\'s movement pattern.',
    related_symptoms: ['bleeding', 'cramping']
  }
];

const trimesterLabels = {
  any: 'Any Time',
  first: 'First Trimester',
  second: 'Second Trimester', 
  third: 'Third Trimester',
  postpartum: 'Postpartum'
};

const categoryIcons = {
  common: CheckCircle,
  concerning: AlertTriangle,
  emergency: Phone
};

const categoryColors = {
  common: {
    bg: 'bg-green-50',
    text: 'text-green-800',
    border: 'border-green-200',
    icon: 'text-green-600'
  },
  concerning: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-800', 
    border: 'border-yellow-200',
    icon: 'text-yellow-600'
  },
  emergency: {
    bg: 'bg-red-50',
    text: 'text-red-800',
    border: 'border-red-200',
    icon: 'text-red-600'
  }
};

export default function PregnancySymptomCheckerClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTrimester, setSelectedTrimester] = useState<string>('all');

  const filteredSymptoms = symptoms.filter(symptom => {
    const matchesSearch = symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         symptom.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || symptom.category === selectedCategory;
    const matchesTrimester = selectedTrimester === 'all' || 
                           symptom.trimester === 'any' || 
                           symptom.trimester === selectedTrimester;
    
    return matchesSearch && matchesCategory && matchesTrimester;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Pregnancy Symptom Checker
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Quick guidance on pregnancy symptoms. Get instant information about whether 
            your symptoms are normal or when to contact your healthcare provider.
          </p>
        </div>

        {/* Important Disclaimer */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Important Medical Disclaimer</h3>
              <p className="text-red-700 text-sm">
                This tool provides general information only and is NOT a substitute for professional medical advice. 
                Always consult your healthcare provider for proper diagnosis and treatment. 
                For emergencies, call 911 or go to the nearest emergency room immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Symptoms
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g., nausea, headache, cramping..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="common">Common & Normal</option>
                <option value="concerning">Needs Attention</option>
                <option value="emergency">Emergency</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trimester
              </label>
              <select
                value={selectedTrimester}
                onChange={(e) => setSelectedTrimester(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Trimesters</option>
                <option value="first">First Trimester</option>
                <option value="second">Second Trimester</option>
                <option value="third">Third Trimester</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-green-700 border-green-300">
              <CheckCircle className="w-3 h-3 mr-1" />
              Common & Normal
            </Badge>
            <Badge variant="outline" className="text-yellow-700 border-yellow-300">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Needs Monitoring
            </Badge>
            <Badge variant="outline" className="text-red-700 border-red-300">
              <Phone className="w-3 h-3 mr-1" />
              Contact Provider
            </Badge>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredSymptoms.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No symptoms found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            filteredSymptoms.map((symptom) => {
              const IconComponent = categoryIcons[symptom.category];
              const colors = categoryColors[symptom.category];
              
              return (
                <Card key={symptom.id} className={`${colors.bg} ${colors.border} border-2`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-full bg-white`}>
                          <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                        </div>
                        <div>
                          <CardTitle className={`text-xl ${colors.text}`}>
                            {symptom.name}
                          </CardTitle>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {trimesterLabels[symptom.trimester]}
                            </Badge>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${colors.text} ${colors.border}`}
                            >
                              {symptom.category === 'common' ? 'Usually Normal' : 
                               symptom.category === 'concerning' ? 'Monitor Closely' : 
                               'Contact Provider'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Description:</h4>
                      <p className="text-gray-700">{symptom.description}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          When It's Normal:
                        </h4>
                        <p className="text-gray-700 text-sm">{symptom.when_normal}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          When to Be Concerned:
                        </h4>
                        <p className="text-gray-700 text-sm">{symptom.when_concerning}</p>
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-lg border ${colors.border} bg-white`}>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Recommended Action:
                      </h4>
                      <p className="text-gray-700 text-sm">{symptom.action}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Quick Emergency Guide */}
        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Call 911 or Go to Emergency Room Immediately If You Experience:
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Heavy vaginal bleeding (soaking a pad per hour)',
              'Severe abdominal pain with bleeding',
              'Signs of preeclampsia (severe headache, vision changes, upper abdominal pain)',
              'No fetal movement for several hours after 28 weeks',
              'Severe persistent vomiting with dehydration',
              'High fever (over 101°F) with chills',
              'Sudden gush of fluid before 37 weeks',
              'Thoughts of harming yourself or your baby'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
          <Heart className="w-12 h-12 mx-auto mb-4 text-blue-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Trust Your Instincts
          </h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            You know your body best. When in doubt, always contact your healthcare provider. 
            It's better to be safe and ask questions than to worry in silence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/contraction-timer"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contraction Timer
            </Link>
            <Link 
              href="/blog/pregnancy-warning-signs"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Warning Signs Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}