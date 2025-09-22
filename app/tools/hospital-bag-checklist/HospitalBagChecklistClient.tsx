'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Briefcase, Baby, Heart, User, Star, CheckCircle, RotateCcw, Download } from 'lucide-react';

interface ChecklistItem {
  id: string;
  name: string;
  description?: string;
  category: 'essential' | 'helpful' | 'optional';
  priority: 'high' | 'medium' | 'low';
  when_to_pack: 'early' | 'last_minute' | 'labor';
}

interface BagSection {
  id: string;
  title: string;
  icon: any;
  description: string;
  items: ChecklistItem[];
}

const bagSections: BagSection[] = [
  {
    id: 'mom',
    title: 'For Mom',
    icon: Heart,
    description: 'Essentials for your comfort and recovery',
    items: [
      {
        id: 'mom-id',
        name: 'ID & Insurance Cards',
        description: 'Driver\'s license, insurance cards, hospital paperwork',
        category: 'essential',
        priority: 'high',
        when_to_pack: 'early'
      },
      {
        id: 'mom-birth-plan',
        name: 'Birth Plan (multiple copies)',
        description: 'Your preferences for labor and delivery',
        category: 'essential',
        priority: 'high',
        when_to_pack: 'early'
      },
      {
        id: 'mom-phone-charger',
        name: 'Phone & Charger',
        description: 'Long cord recommended for bedside use',
        category: 'essential',
        priority: 'high',
        when_to_pack: 'last_minute'
      },
      {
        id: 'mom-nursing-bras',
        name: 'Nursing Bras (2-3)',
        description: 'Comfortable, well-fitting nursing bras',
        category: 'essential',
        priority: 'high',
        when_to_pack: 'early'
      },
      {
        id: 'mom-nursing-pads',
        name: 'Nursing Pads',
        description: 'Disposable or reusable breast pads',
        category: 'essential',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'mom-comfortable-underwear',
        name: 'Comfortable Underwear',
        description: 'Disposable or old underwear you don\'t mind discarding',
        category: 'essential',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'mom-maternity-pads',
        name: 'Heavy-flow Maternity Pads',
        description: 'Extra-absorbent pads for postpartum bleeding',
        category: 'essential',
        priority: 'high',
        when_to_pack: 'early'
      },
      {
        id: 'mom-going-home-outfit',
        name: 'Going Home Outfit',
        description: 'Comfortable clothes in 6-month pregnancy size',
        category: 'essential',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'mom-toiletries',
        name: 'Personal Toiletries',
        description: 'Toothbrush, toothpaste, shampoo, soap, deodorant',
        category: 'essential',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'mom-hair-ties',
        name: 'Hair Ties & Headband',
        description: 'Keep hair out of face during labor',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'mom-flip-flops',
        name: 'Flip Flops or Slippers',
        description: 'Non-slip soles for walking during labor',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'mom-robe',
        name: 'Comfortable Robe',
        description: 'Easy to nurse in and move around',
        category: 'helpful',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'mom-snacks',
        name: 'Favorite Snacks',
        description: 'Energy bars, crackers for after delivery',
        category: 'helpful',
        priority: 'low',
        when_to_pack: 'last_minute'
      },
      {
        id: 'mom-nipple-cream',
        name: 'Nipple Cream',
        description: 'Lanolin or preferred nursing cream',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'mom-pillow',
        name: 'Your Own Pillow',
        description: 'In colored pillowcase to distinguish from hospital',
        category: 'optional',
        priority: 'low',
        when_to_pack: 'early'
      }
    ]
  },
  {
    id: 'baby',
    title: 'For Baby',
    icon: Baby,
    description: 'Everything your little one will need',
    items: [
      {
        id: 'baby-car-seat',
        name: 'Car Seat (installed)',
        description: 'Properly installed infant car seat - required to leave hospital',
        category: 'essential',
        priority: 'high',
        when_to_pack: 'early'
      },
      {
        id: 'baby-going-home-outfit',
        name: 'Going Home Outfit (2 sizes)',
        description: 'Newborn and 0-3 month sizes',
        category: 'essential',
        priority: 'high',
        when_to_pack: 'early'
      },
      {
        id: 'baby-diapers',
        name: 'Newborn Diapers',
        description: 'Hospital usually provides, but bring backup',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'baby-onesies',
        name: 'Onesies (2-3)',
        description: 'Short and long sleeve in newborn and 0-3 month',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'baby-sleepers',
        name: 'Sleep Gowns or Sleepers (2-3)',
        description: 'Easy diaper changes, 2 sizes',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'baby-socks',
        name: 'Baby Socks or Booties',
        description: 'Keep tiny feet warm',
        category: 'helpful',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'baby-hat',
        name: 'Baby Hat',
        description: 'Hospital usually provides, but nice to have your own',
        category: 'optional',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'baby-mittens',
        name: 'Baby Mittens',
        description: 'Prevent scratching delicate skin',
        category: 'helpful',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'baby-blanket',
        name: 'Special Blanket',
        description: 'For photos and going home',
        category: 'optional',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'baby-burp-cloths',
        name: 'Burp Cloths (2-3)',
        description: 'For feeding time',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      }
    ]
  },
  {
    id: 'partner',
    title: 'For Partner',
    icon: User,
    description: 'Support person essentials',
    items: [
      {
        id: 'partner-snacks',
        name: 'Snacks & Drinks',
        description: 'Non-perishable snacks, energy drinks',
        category: 'essential',
        priority: 'high',
        when_to_pack: 'last_minute'
      },
      {
        id: 'partner-phone-charger',
        name: 'Phone Charger',
        description: 'To keep family updated and capture moments',
        category: 'essential',
        priority: 'high',
        when_to_pack: 'last_minute'
      },
      {
        id: 'partner-change-clothes',
        name: 'Change of Clothes',
        description: 'Comfortable clothes for extended stay',
        category: 'essential',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'partner-toiletries',
        name: 'Personal Toiletries',
        description: 'Toothbrush, deodorant, contact case if needed',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'partner-pillow',
        name: 'Pillow & Blanket',
        description: 'For sleeping in uncomfortable hospital chair',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'partner-entertainment',
        name: 'Entertainment',
        description: 'Books, tablet, games for long labor',
        category: 'optional',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'partner-camera',
        name: 'Camera',
        description: 'If you prefer camera over phone photos',
        category: 'optional',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'partner-cash',
        name: 'Cash & Cards',
        description: 'For parking, vending machines, food',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'last_minute'
      }
    ]
  },
  {
    id: 'labor',
    title: 'Labor Comfort',
    icon: Star,
    description: 'Items to help during labor',
    items: [
      {
        id: 'labor-birthing-ball',
        name: 'Birthing Ball',
        description: 'Check if hospital provides or bring your own',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'labor-music',
        name: 'Music Playlist',
        description: 'Relaxing music on phone or portable speaker',
        category: 'helpful',
        priority: 'low',
        when_to_pack: 'last_minute'
      },
      {
        id: 'labor-essential-oils',
        name: 'Essential Oils',
        description: 'For aromatherapy (check hospital policy first)',
        category: 'optional',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'labor-massage-tools',
        name: 'Massage Tools',
        description: 'Tennis ball, massage oil for back labor',
        category: 'helpful',
        priority: 'medium',
        when_to_pack: 'early'
      },
      {
        id: 'labor-lip-balm',
        name: 'Lip Balm',
        description: 'Hospitals can be dry, lips get chapped',
        category: 'helpful',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'labor-eye-mask',
        name: 'Eye Mask',
        description: 'For rest between contractions',
        category: 'optional',
        priority: 'low',
        when_to_pack: 'early'
      },
      {
        id: 'labor-focal-point',
        name: 'Focal Point Item',
        description: 'Photo or object to focus on during contractions',
        category: 'optional',
        priority: 'low',
        when_to_pack: 'early'
      }
    ]
  }
];

export default function HospitalBagChecklistClient() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [selectedTiming, setSelectedTiming] = useState<string>('all');
  const [showCompleted, setShowCompleted] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('hospital-bag-checklist');
    if (saved) {
      setCheckedItems(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save to localStorage when checkedItems changes
  useEffect(() => {
    localStorage.setItem('hospital-bag-checklist', JSON.stringify(Array.from(checkedItems)));
  }, [checkedItems]);

  const toggleItem = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const clearAll = () => {
    setCheckedItems(new Set());
  };

  const getTotalStats = () => {
    const allItems = bagSections.flatMap(section => section.items);
    const total = allItems.length;
    const completed = allItems.filter(item => checkedItems.has(item.id)).length;
    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  const filterItems = (items: ChecklistItem[]) => {
    return items.filter(item => {
      const priorityMatch = selectedPriority === 'all' || item.priority === selectedPriority;
      const timingMatch = selectedTiming === 'all' || item.when_to_pack === selectedTiming;
      const completedMatch = showCompleted || !checkedItems.has(item.id);
      
      return priorityMatch && timingMatch && completedMatch;
    });
  };

  const stats = getTotalStats();

  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200'
  };

  const timingLabels = {
    early: 'Pack Early (36+ weeks)',
    last_minute: 'Pack When Labor Starts',
    labor: 'During Labor'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Hospital Bag Checklist
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Never forget essential items for your hospital stay. Interactive checklist 
            for mom, baby, partner, and labor comfort items.
          </p>
        </div>

        {/* Progress & Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{stats.completed}</div>
                <div className="text-sm text-gray-600">Packed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-600">{stats.total}</div>
                <div className="text-sm text-gray-600">Total Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{stats.percentage}%</div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Priorities</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
              
              <select
                value={selectedTiming}
                onChange={(e) => setSelectedTiming(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Timing</option>
                <option value="early">Pack Early</option>
                <option value="last_minute">Last Minute</option>
                <option value="labor">During Labor</option>
              </select>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCompleted(!showCompleted)}
                className="whitespace-nowrap"
              >
                {showCompleted ? 'Hide' : 'Show'} Completed
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={clearAll}
                className="whitespace-nowrap"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
          </div>
          
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${stats.percentage}%` }}
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {bagSections.map((section) => {
            const IconComponent = section.icon;
            const filteredItems = filterItems(section.items);
            const sectionStats = {
              total: section.items.length,
              completed: section.items.filter(item => checkedItems.has(item.id)).length
            };
            
            if (filteredItems.length === 0) return null;
            
            return (
              <Card key={section.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-white shadow-md">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-800">{section.title}</CardTitle>
                        <p className="text-gray-600">{section.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-purple-600">
                        {sectionStats.completed}/{sectionStats.total}
                      </div>
                      <div className="text-sm text-gray-600">items packed</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {filteredItems.map((item) => {
                      const isChecked = checkedItems.has(item.id);
                      
                      return (
                        <div 
                          key={item.id}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                            isChecked 
                              ? 'bg-green-50 border-green-200' 
                              : 'bg-white border-gray-200 hover:border-purple-300'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className="mt-1">
                              <Checkbox
                                checked={isChecked}
                                onCheckedChange={() => toggleItem(item.id)}
                                className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                              />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h4 className={`font-semibold mb-1 ${
                                    isChecked ? 'text-green-800 line-through' : 'text-gray-800'
                                  }`}>
                                    {item.name}
                                  </h4>
                                  {item.description && (
                                    <p className={`text-sm ${
                                      isChecked ? 'text-green-600' : 'text-gray-600'
                                    }`}>
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                  <Badge 
                                    variant="outline" 
                                    className={`text-xs ${priorityColors[item.priority]}`}
                                  >
                                    {item.priority} priority
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {timingLabels[item.when_to_pack]}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Packing Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Pack your bag by 36 weeks - babies can come early!',
              'Make copies of important documents',
              'Keep the bag in an easily accessible place',
              'Pack comfortable, loose-fitting clothes',
              'Bring items that smell like home for comfort',
              'Pack snacks that don\'t require refrigeration',
              'Bring a long phone charger (6ft minimum)',
              'Consider packing a separate bag for your partner'
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-blue-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-purple-100" />
          <h2 className="text-2xl font-semibold mb-4">
            You're Almost Ready!
          </h2>
          <p className="text-purple-100 mb-6 leading-relaxed">
            Having everything packed and ready will give you peace of mind when labor starts. 
            Don't stress about forgetting something - the hospital has most essentials covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/contraction-timer"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Contraction Timer
            </Link>
            <Link 
              href="/blog/third-trimester-symptoms"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Third Trimester Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}