'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Heart, Crown, Star, Globe, Sparkles, Baby } from 'lucide-react';

interface NameData {
  name: string;
  gender: 'boy' | 'girl' | 'unisex';
  origin: string;
  meaning: string;
  popularity: 'very-popular' | 'popular' | 'uncommon' | 'rare';
  variants?: string[];
  nicknames?: string[];
  famousBearers?: string[];
  keywords: string[];
}

const nameDatabase: NameData[] = [
  // POPULAR GIRLS
  {
    name: 'Emma',
    gender: 'girl',
    origin: 'Germanic',
    meaning: 'Universal, whole, complete',
    popularity: 'very-popular',
    variants: ['Ema', 'Emmy', 'Emmie'],
    nicknames: ['Em', 'Emmy'],
    famousBearers: ['Emma Watson', 'Emma Stone'],
    keywords: ['emma', 'em', 'emmy']
  },
  {
    name: 'Olivia',
    gender: 'girl',
    origin: 'Latin',
    meaning: 'Olive tree, symbol of peace',
    popularity: 'very-popular',
    variants: ['Alivia', 'Olivie'],
    nicknames: ['Liv', 'Livvy', 'Ollie'],
    famousBearers: ['Olivia Wilde', 'Olivia Newton-John'],
    keywords: ['olivia', 'liv', 'livvy', 'ollie']
  },
  {
    name: 'Sophia',
    gender: 'girl',
    origin: 'Greek',
    meaning: 'Wisdom, knowledge',
    popularity: 'very-popular',
    variants: ['Sofia', 'Sophie'],
    nicknames: ['Soph', 'Sophie'],
    famousBearers: ['Sophia Loren', 'Sophie Turner'],
    keywords: ['sophia', 'sofia', 'sophie', 'soph']
  },
  {
    name: 'Charlotte',
    gender: 'girl',
    origin: 'French',
    meaning: 'Free woman, petite',
    popularity: 'very-popular',
    variants: ['Charlotta', 'Carlotta'],
    nicknames: ['Charlie', 'Lottie', 'Char'],
    famousBearers: ['Charlotte Brontë', 'Princess Charlotte'],
    keywords: ['charlotte', 'charlie', 'lottie', 'char']
  },
  {
    name: 'Amelia',
    gender: 'girl',
    origin: 'Germanic',
    meaning: 'Industrious, striving, work',
    popularity: 'very-popular',
    variants: ['Emilia', 'Amelie'],
    nicknames: ['Amy', 'Mia', 'Millie'],
    famousBearers: ['Amelia Earhart', 'Amelia Pond'],
    keywords: ['amelia', 'amy', 'mia', 'millie']
  },
  
  // POPULAR BOYS
  {
    name: 'Liam',
    gender: 'boy',
    origin: 'Irish',
    meaning: 'Strong-willed warrior and protector',
    popularity: 'very-popular',
    variants: ['William'],
    nicknames: ['Li'],
    famousBearers: ['Liam Neeson', 'Liam Hemsworth'],
    keywords: ['liam', 'li', 'william']
  },
  {
    name: 'Noah',
    gender: 'boy',
    origin: 'Hebrew',
    meaning: 'Rest, comfort, peace',
    popularity: 'very-popular',
    variants: ['Noe'],
    nicknames: ['No'],
    famousBearers: ['Noah Webster', 'Noah Centineo'],
    keywords: ['noah', 'noe']
  },
  {
    name: 'Oliver',
    gender: 'boy',
    origin: 'Latin',
    meaning: 'Olive tree, peaceful',
    popularity: 'very-popular',
    variants: ['Olivier'],
    nicknames: ['Ollie', 'Oli'],
    famousBearers: ['Oliver Twist', 'Oliver Stone'],
    keywords: ['oliver', 'ollie', 'oli', 'olivier']
  },
  {
    name: 'James',
    gender: 'boy',
    origin: 'Hebrew',
    meaning: 'Supplanter, one who follows',
    popularity: 'very-popular',
    variants: ['Jacob', 'Santiago'],
    nicknames: ['Jim', 'Jimmy', 'Jamie'],
    famousBearers: ['James Bond', 'James Dean'],
    keywords: ['james', 'jim', 'jimmy', 'jamie']
  },
  {
    name: 'Benjamin',
    gender: 'boy',
    origin: 'Hebrew',
    meaning: 'Son of the right hand, favored son',
    popularity: 'very-popular',
    variants: ['Binyamin'],
    nicknames: ['Ben', 'Benji', 'Benny'],
    famousBearers: ['Benjamin Franklin', 'Ben Affleck'],
    keywords: ['benjamin', 'ben', 'benji', 'benny']
  },
  
  // UNIQUE/UNCOMMON NAMES
  {
    name: 'Aurora',
    gender: 'girl',
    origin: 'Latin',
    meaning: 'Dawn, goddess of the dawn',
    popularity: 'popular',
    variants: ['Aurore'],
    nicknames: ['Rory', 'Aura'],
    famousBearers: ['Princess Aurora (Sleeping Beauty)'],
    keywords: ['aurora', 'rory', 'aura', 'aurore']
  },
  {
    name: 'Luna',
    gender: 'girl',
    origin: 'Latin',
    meaning: 'Moon, lunar goddess',
    popularity: 'popular',
    variants: ['Lune'],
    nicknames: ['Lu', 'Lulu'],
    famousBearers: ['Luna Lovegood'],
    keywords: ['luna', 'lu', 'lulu', 'lune']
  },
  {
    name: 'Atlas',
    gender: 'boy',
    origin: 'Greek',
    meaning: 'To bear, endure, titan who held up the heavens',
    popularity: 'uncommon',
    nicknames: ['At'],
    famousBearers: ['Atlas (Greek mythology)'],
    keywords: ['atlas', 'at']
  },
  {
    name: 'Phoenix',
    gender: 'unisex',
    origin: 'Greek',
    meaning: 'Rising bird, deep red color',
    popularity: 'uncommon',
    nicknames: ['Nix'],
    famousBearers: ['Phoenix (mythological bird)'],
    keywords: ['phoenix', 'nix']
  },
  {
    name: 'Sage',
    gender: 'unisex',
    origin: 'Latin',
    meaning: 'Wise one, herb',
    popularity: 'uncommon',
    famousBearers: ['Sage Kotsenburg'],
    keywords: ['sage']
  },
  
  // INTERNATIONAL NAMES
  {
    name: 'Aria',
    gender: 'girl',
    origin: 'Italian/Persian',
    meaning: 'Air, lioness, noble',
    popularity: 'popular',
    variants: ['Arya'],
    nicknames: ['Ari'],
    famousBearers: ['Aria Montgomery', 'Arya Stark'],
    keywords: ['aria', 'arya', 'ari']
  },
  {
    name: 'Kai',
    gender: 'unisex',
    origin: 'Hawaiian/Japanese',
    meaning: 'Ocean, forgiveness, food',
    popularity: 'popular',
    famousBearers: ['Kai Greene'],
    keywords: ['kai']
  },
  {
    name: 'Mateo',
    gender: 'boy',
    origin: 'Spanish',
    meaning: 'Gift of God',
    popularity: 'popular',
    variants: ['Matthew', 'Matteo'],
    nicknames: ['Matt', 'Teo'],
    famousBearers: ['Mateo Kovačić'],
    keywords: ['mateo', 'matteo', 'matthew', 'matt', 'teo']
  },
  {
    name: 'Zara',
    gender: 'girl',
    origin: 'Arabic/Hebrew',
    meaning: 'Blooming flower, princess',
    popularity: 'popular',
    famousBearers: ['Zara Phillips', 'Zara Larsson'],
    keywords: ['zara']
  },
  {
    name: 'Enzo',
    gender: 'boy',
    origin: 'Italian',
    meaning: 'Ruler of the household',
    popularity: 'popular',
    famousBearers: ['Enzo Ferrari'],
    keywords: ['enzo']
  }
];

const popularityInfo = {
  'very-popular': {
    label: 'Very Popular',
    color: 'bg-red-100 text-red-800 border-red-200',
    description: 'Top 20 names, very common'
  },
  'popular': {
    label: 'Popular',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    description: 'Well-known but not overwhelming'
  },
  'uncommon': {
    label: 'Uncommon',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Distinctive and unique'
  },
  'rare': {
    label: 'Rare',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Very unique and special'
  }
};

const genderIcons = {
  boy: '👦',
  girl: '👧',
  unisex: '👶'
};

export default function BabyNameMeaningLookupClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');

  const filteredNames = useMemo(() => {
    return nameDatabase.filter(name => {
      const matchesSearch = name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           name.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           name.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesGender = selectedGender === 'all' || name.gender === selectedGender;
      const matchesOrigin = selectedOrigin === 'all' || name.origin === selectedOrigin;
      
      return matchesSearch && matchesGender && matchesOrigin;
    });
  }, [searchTerm, selectedGender, selectedOrigin]);

  const origins = Array.from(new Set(nameDatabase.map(name => name.origin))).sort();

  const getNameIcon = (name: string) => {
    if (name.toLowerCase().includes('star') || name.toLowerCase().includes('celestial')) {
      return Star;
    } else if (name.toLowerCase().includes('royal') || name.toLowerCase().includes('king') || name.toLowerCase().includes('queen')) {
      return Crown;
    } else if (name.toLowerCase().includes('love') || name.toLowerCase().includes('heart')) {
      return Heart;
    } else {
      return Sparkles;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Baby Name Meaning Lookup
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover the beautiful meanings and origins behind baby names. 
            Search our database to find the perfect name with a meaning that speaks to your heart.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Names or Meanings
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g., Emma, wisdom, ocean, strength..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Genders</option>
                <option value="boy">Boy Names</option>
                <option value="girl">Girl Names</option>
                <option value="unisex">Unisex Names</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Origin
              </label>
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Origins</option>
                {origins.map(origin => (
                  <option key={origin} value={origin}>{origin}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            Showing {filteredNames.length} of {nameDatabase.length} names
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNames.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No names found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
              <p className="text-sm text-gray-400 mt-2">
                Popular searches: Emma, wisdom, strength, ocean, royal
              </p>
            </div>
          ) : (
            filteredNames.map((name, index) => {
              const NameIcon = getNameIcon(name.meaning);
              const popularityData = popularityInfo[name.popularity];
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-purple-100">
                          <NameIcon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-800">
                            {name.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-2xl">{genderIcons[name.gender]}</span>
                            <Badge variant="outline" className="text-xs">
                              {name.gender === 'unisex' ? 'Unisex' : name.gender === 'boy' ? 'Boy' : 'Girl'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className={`text-xs ${popularityData.color}`}>
                        {popularityData.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Origin & Meaning
                      </h4>
                      <p className="text-gray-600 text-sm mb-1"><strong>{name.origin}</strong></p>
                      <p className="text-gray-700">{name.meaning}</p>
                    </div>
                    
                    {name.variants && name.variants.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Variants:</h4>
                        <div className="flex flex-wrap gap-1">
                          {name.variants.map((variant, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {variant}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {name.nicknames && name.nicknames.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Nicknames:</h4>
                        <div className="flex flex-wrap gap-1">
                          {name.nicknames.map((nickname, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs text-blue-700 border-blue-300">
                              {nickname}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {name.famousBearers && name.famousBearers.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Famous Bearers:
                        </h4>
                        <p className="text-xs text-gray-600">{name.famousBearers.join(', ')}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Popular Categories */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Browse by Popular Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { category: 'Nature', examples: 'Luna, River, Aurora', icon: '🌿' },
              { category: 'Virtues', examples: 'Grace, Faith, Hope', icon: '✨' },
              { category: 'Royal', examples: 'Charlotte, James, Victoria', icon: '👑' },
              { category: 'International', examples: 'Aria, Kai, Mateo', icon: '🌍' }
            ].map((cat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">{cat.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">{cat.category}</h4>
                <p className="text-xs text-gray-600">{cat.examples}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Name Trends */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 Name Selection Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Consider the Meaning</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Choose meanings that resonate with your values</li>
                <li>• Consider how the meaning might inspire your child</li>
                <li>• Think about cultural significance to your family</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Practical Considerations</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• How does it sound with your last name?</li>
                <li>• Are there good nickname options?</li>
                <li>• Is it easy to spell and pronounce?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
          <Baby className="w-12 h-12 mx-auto mb-4 text-purple-100" />
          <h2 className="text-2xl font-semibold mb-4">
            Found the Perfect Name?
          </h2>
          <p className="text-purple-100 mb-6 leading-relaxed">
            Explore more tools to help you prepare for your little one&apos;s arrival. 
            From tracking your pregnancy to preparing for labor, we&apos;re here to support your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/baby-name-generator"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Name Generator
            </Link>
            <Link 
              href="/tools/due-date-calculator"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Due Date Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}