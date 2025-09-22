'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertTriangle, Search, Apple, Coffee, Fish, Utensils } from 'lucide-react';

interface Food {
  name: string;
  category: 'safe' | 'avoid' | 'limit' | 'caution';
  reason?: string;
  details?: string;
  alternatives?: string[];
  keywords: string[];
}

const foods: Food[] = [
  // SAFE FOODS
  {
    name: 'Cooked Salmon',
    category: 'safe',
    reason: 'Low mercury fish, high in omega-3s',
    details: 'Excellent source of protein and DHA for baby\'s brain development',
    keywords: ['salmon', 'cooked salmon', 'fish']
  },
  {
    name: 'Greek Yogurt',
    category: 'safe',
    reason: 'Pasteurized dairy, high protein and calcium',
    details: 'Great source of probiotics and nutrients',
    keywords: ['yogurt', 'greek yogurt', 'dairy']
  },
  {
    name: 'Spinach (cooked)',
    category: 'safe',
    reason: 'High in folate and iron when cooked',
    details: 'Cooking reduces risk of foodborne illness',
    keywords: ['spinach', 'cooked spinach', 'leafy greens']
  },
  {
    name: 'Bananas',
    category: 'safe',
    reason: 'Natural source of potassium and energy',
    details: 'Help with morning sickness and provide steady energy',
    keywords: ['banana', 'bananas', 'fruit']
  },
  {
    name: 'Eggs (well-cooked)',
    category: 'safe',
    reason: 'Complete protein when fully cooked',
    details: 'Cook until both yolk and white are firm',
    keywords: ['eggs', 'cooked eggs', 'hard boiled eggs']
  },
  {
    name: 'Avocado',
    category: 'safe',
    reason: 'Healthy fats and folate',
    details: 'Great source of nutrients for baby\'s development',
    keywords: ['avocado', 'avocados', 'healthy fats']
  },
  {
    name: 'Sweet Potatoes',
    category: 'safe',
    reason: 'High in beta-carotene and fiber',
    details: 'Excellent source of vitamin A for baby\'s development',
    keywords: ['sweet potato', 'sweet potatoes', 'potato']
  },
  {
    name: 'Chicken (well-cooked)',
    category: 'safe',
    reason: 'Lean protein when properly cooked',
    details: 'Cook to internal temperature of 165°F',
    keywords: ['chicken', 'cooked chicken', 'poultry']
  },
  
  // AVOID FOODS
  {
    name: 'Raw Fish/Sushi',
    category: 'avoid',
    reason: 'Risk of bacterial infection and parasites',
    details: 'Can cause foodborne illness harmful to baby',
    alternatives: ['Cooked sushi rolls', 'Smoked salmon', 'Cooked fish'],
    keywords: ['sushi', 'raw fish', 'sashimi', 'poke']
  },
  {
    name: 'Unpasteurized Cheese',
    category: 'avoid',
    reason: 'Risk of Listeria infection',
    details: 'Can cause miscarriage or severe illness',
    alternatives: ['Pasteurized cheeses', 'Hard cheeses', 'Processed cheeses'],
    keywords: ['unpasteurized cheese', 'soft cheese', 'brie', 'camembert', 'blue cheese', 'feta']
  },
  {
    name: 'Raw Eggs',
    category: 'avoid',
    reason: 'Risk of Salmonella infection',
    details: 'Found in homemade mayonnaise, cookie dough, etc.',
    alternatives: ['Pasteurized eggs', 'Well-cooked eggs'],
    keywords: ['raw eggs', 'cookie dough', 'homemade mayonnaise', 'caesar dressing']
  },
  {
    name: 'Deli Meats (cold)',
    category: 'avoid',
    reason: 'Risk of Listeria infection',
    details: 'Safe if heated until steaming hot',
    alternatives: ['Heated deli meats', 'Freshly cooked meats'],
    keywords: ['deli meat', 'lunch meat', 'cold cuts', 'turkey sandwich', 'ham']
  },
  {
    name: 'Raw Sprouts',
    category: 'avoid',
    reason: 'High risk of bacterial contamination',
    details: 'Bacteria can be present in seeds before sprouting',
    alternatives: ['Cooked sprouts', 'Other fresh vegetables'],
    keywords: ['sprouts', 'alfalfa sprouts', 'bean sprouts', 'raw sprouts']
  },
  
  // LIMIT FOODS
  {
    name: 'Coffee',
    category: 'limit',
    reason: 'Limit caffeine to 200mg per day',
    details: 'About 1-2 cups of coffee daily is considered safe',
    keywords: ['coffee', 'caffeine', 'espresso', 'latte']
  },
  {
    name: 'Tuna',
    category: 'limit',
    reason: 'Contains mercury - limit to 6oz per week',
    details: 'Choose light tuna over albacore (white) tuna',
    alternatives: ['Low-mercury fish like salmon', 'Sardines', 'Anchovies'],
    keywords: ['tuna', 'canned tuna', 'albacore tuna', 'tuna steak']
  },
  {
    name: 'Tea (caffeinated)',
    category: 'limit',
    reason: 'Contains caffeine - count toward daily limit',
    details: 'Herbal teas (pregnancy-safe) are better options',
    keywords: ['tea', 'black tea', 'green tea', 'caffeinated tea']
  },
  
  // CAUTION FOODS
  {
    name: 'Honey',
    category: 'caution',
    reason: 'Safe for mom, but avoid giving to baby under 1 year',
    details: 'No risk during pregnancy, just future reference',
    keywords: ['honey', 'raw honey', 'manuka honey']
  },
  {
    name: 'Papaya (ripe)',
    category: 'caution',
    reason: 'Ripe papaya is safe, unripe should be avoided',
    details: 'Unripe papaya contains enzymes that may trigger contractions',
    keywords: ['papaya', 'ripe papaya', 'unripe papaya']
  },
  {
    name: 'Pineapple',
    category: 'caution',
    reason: 'Safe in normal amounts, contains bromelain',
    details: 'Large amounts may theoretically cause uterine contractions',
    keywords: ['pineapple', 'fresh pineapple', 'pineapple juice']
  },
  {
    name: 'Herbal Teas',
    category: 'caution',
    reason: 'Some herbs may not be safe during pregnancy',
    details: 'Stick to pregnancy-safe teas like ginger or raspberry leaf',
    alternatives: ['Ginger tea', 'Raspberry leaf tea', 'Peppermint tea'],
    keywords: ['herbal tea', 'chamomile tea', 'herbal teas', 'pregnancy tea']
  }
];

const categoryInfo = {
  safe: {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    label: 'Safe to Eat',
    description: 'These foods are generally safe and healthy during pregnancy'
  },
  avoid: {
    icon: XCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    label: 'Avoid',
    description: 'These foods should be avoided due to safety risks'
  },
  limit: {
    icon: AlertTriangle,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    label: 'Limit Intake',
    description: 'These foods are okay in moderation but should be limited'
  },
  caution: {
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    label: 'Use Caution',
    description: 'These foods require special consideration or preparation'
  }
};

export default function PregnancySafeFoodsClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFoods = useMemo(() => {
    return foods.filter(food => {
      const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           food.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getFoodIcon = (name: string) => {
    if (name.toLowerCase().includes('fish') || name.toLowerCase().includes('salmon') || name.toLowerCase().includes('tuna')) {
      return Fish;
    } else if (name.toLowerCase().includes('coffee') || name.toLowerCase().includes('tea')) {
      return Coffee;
    } else if (name.toLowerCase().includes('fruit') || name.toLowerCase().includes('banana') || name.toLowerCase().includes('apple')) {
      return Apple;
    } else {
      return Utensils;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
            <Apple className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Pregnancy Safe Foods Checker
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Quickly check if foods are safe to eat during pregnancy. Get instant answers 
            about what you can enjoy and what to avoid for a healthy pregnancy.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Medical Disclaimer</h3>
              <p className="text-blue-700 text-sm">
                This tool provides general guidance only. Always consult your healthcare provider 
                for personalized advice about your diet during pregnancy, especially if you have 
                specific health conditions or dietary restrictions.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Foods
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g., sushi, coffee, cheese, salmon..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="safe">Safe to Eat</option>
                <option value="avoid">Foods to Avoid</option>
                <option value="limit">Limit Intake</option>
                <option value="caution">Use Caution</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {Object.entries(categoryInfo).map(([key, info]) => {
              const IconComponent = info.icon;
              return (
                <Badge key={key} variant="outline" className={`${info.color} border-current`}>
                  <IconComponent className="w-3 h-3 mr-1" />
                  {info.label}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {filteredFoods.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No foods found</h3>
              <p className="text-gray-500">Try searching for a different food or adjusting your filters.</p>
              <p className="text-sm text-gray-400 mt-2">
                Popular searches: sushi, coffee, cheese, deli meat, fish, eggs
              </p>
            </div>
          ) : (
            filteredFoods.map((food, index) => {
              const categoryData = categoryInfo[food.category];
              const IconComponent = categoryData.icon;
              const FoodIcon = getFoodIcon(food.name);
              
              return (
                <Card key={index} className={`${categoryData.bgColor} ${categoryData.borderColor} border-2`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-white shadow-sm">
                        <FoodIcon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl text-gray-800 mb-2">
                              {food.name}
                            </CardTitle>
                            <div className="flex items-center gap-2">
                              <IconComponent className={`w-5 h-5 ${categoryData.color}`} />
                              <Badge variant="outline" className={`${categoryData.color} border-current`}>
                                {categoryData.label}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {food.reason && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Reason:</h4>
                        <p className="text-gray-700">{food.reason}</p>
                      </div>
                    )}
                    
                    {food.details && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Details:</h4>
                        <p className="text-gray-700">{food.details}</p>
                      </div>
                    )}
                    
                    {food.alternatives && (
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Safe Alternatives:</h4>
                        <div className="flex flex-wrap gap-2">
                          {food.alternatives.map((alt, altIndex) => (
                            <Badge key={altIndex} variant="outline" className="text-green-700 border-green-300">
                              {alt}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Quick Tips */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Food Safety Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Safe Preparation Tips
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Cook meats to proper internal temperatures</li>
                <li>• Wash all fruits and vegetables thoroughly</li>
                <li>• Choose pasteurized dairy products</li>
                <li>• Reheat deli meats until steaming hot</li>
                <li>• Store foods at proper temperatures</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                General Avoidance Rules
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Avoid raw or undercooked meats/eggs</li>
                <li>• Skip unpasteurized dairy products</li>
                <li>• Limit high-mercury fish</li>
                <li>• Avoid alcohol completely</li>
                <li>• Limit caffeine to 200mg daily</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
          <Apple className="w-12 h-12 mx-auto mb-4 text-green-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Eat Well for Two
          </h2>
          <p className="text-green-100 mb-6 leading-relaxed">
            Making informed food choices helps ensure you and your baby get the nutrition 
            you need for a healthy pregnancy. When in doubt, ask your healthcare provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/pregnancy-nutrition-tracker"
              className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Nutrition Tracker
            </Link>
            <Link 
              href="/blog/pregnancy-nutrition-essentials"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Nutrition Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}