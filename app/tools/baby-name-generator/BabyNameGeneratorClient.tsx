'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, RefreshCw, Star, Baby } from 'lucide-react';

const boyNames = {
  popular: ['Liam', 'Noah', 'Oliver', 'Elijah', 'James', 'William', 'Benjamin', 'Lucas', 'Henry', 'Alexander'],
  unique: ['Zephyr', 'Atlas', 'Orion', 'Phoenix', 'Sage', 'River', 'Jasper', 'Felix', 'Silas', 'Caspian'],
  traditional: ['Michael', 'David', 'John', 'Robert', 'Christopher', 'Matthew', 'Anthony', 'Mark', 'Steven', 'Paul'],
  nature: ['River', 'Forest', 'Stone', 'Clay', 'Reed', 'Ocean', 'Sky', 'Bear', 'Fox', 'Wolf'],
  strong: ['Alexander', 'Maximus', 'Victor', 'Leo', 'Gabriel', 'Raphael', 'Dominic', 'Sebastian', 'Xavier', 'Nicholas']
};

const girlNames = {
  popular: ['Olivia', 'Emma', 'Charlotte', 'Amelia', 'Ava', 'Sophia', 'Isabella', 'Mia', 'Luna', 'Harper'],
  unique: ['Aurora', 'Seraphina', 'Ophelia', 'Isadora', 'Celeste', 'Juniper', 'Clementine', 'Persephone', 'Aria', 'Nova'],
  traditional: ['Elizabeth', 'Mary', 'Catherine', 'Margaret', 'Anne', 'Grace', 'Rose', 'Claire', 'Jane', 'Victoria'],
  nature: ['Rose', 'Lily', 'Ivy', 'Violet', 'Iris', 'Poppy', 'Sage', 'River', 'Luna', 'Dawn'],
  elegant: ['Anastasia', 'Evangeline', 'Genevieve', 'Arabella', 'Penelope', 'Josephine', 'Vivienne', 'Gabrielle', 'Isabelle', 'Juliette']
};

const nameOrigins = {
  english: { boys: ['William', 'James', 'Henry', 'Edward', 'George'], girls: ['Elizabeth', 'Charlotte', 'Emma', 'Grace', 'Alice'] },
  spanish: { boys: ['Diego', 'Santiago', 'Carlos', 'Miguel', 'Adrian'], girls: ['Sofia', 'Isabella', 'Camila', 'Valentina', 'Lucia'] },
  italian: { boys: ['Leonardo', 'Matteo', 'Marco', 'Francesco', 'Lorenzo'], girls: ['Giulia', 'Francesca', 'Chiara', 'Alessia', 'Aurora'] },
  french: { boys: ['Louis', 'Gabriel', 'Raphael', 'Antoine', 'Hugo'], girls: ['Emma', 'Louise', 'Alice', 'Chloe', 'Manon'] },
  greek: { boys: ['Alexander', 'Nicholas', 'Theodore', 'Sebastian', 'Demetrius'], girls: ['Sophia', 'Penelope', 'Chloe', 'Zoe', 'Athena'] }
};

const nameMeanings = [
  { name: 'Sophia', meaning: 'Wisdom', origin: 'Greek' },
  { name: 'Liam', meaning: 'Strong-willed warrior', origin: 'Irish' },
  { name: 'Aurora', meaning: 'Dawn', origin: 'Latin' },
  { name: 'Felix', meaning: 'Happy, fortunate', origin: 'Latin' },
  { name: 'Luna', meaning: 'Moon', origin: 'Latin' },
  { name: 'Oliver', meaning: 'Olive tree', origin: 'Latin' },
  { name: 'Amelia', meaning: 'Industrious', origin: 'Germanic' },
  { name: 'Leo', meaning: 'Lion', origin: 'Latin' }
];

export default function BabyNameGeneratorClient() {
  const [gender, setGender] = useState<'boy' | 'girl' | 'both'>('both');
  const [style, setStyle] = useState<'popular' | 'unique' | 'traditional' | 'nature' | 'strong' | 'elegant'>('popular');
  const [origin, setOrigin] = useState<string>('any');
  const [generatedNames, setGeneratedNames] = useState<Array<{name: string, meaning?: string, origin?: string}>>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const generateNames = () => {
    const names: Array<{name: string, meaning?: string, origin?: string}> = [];
    
    // Generate 6-8 names based on criteria
    const count = 6;
    
    if (origin !== 'any' && nameOrigins[origin as keyof typeof nameOrigins]) {
      const originNames = nameOrigins[origin as keyof typeof nameOrigins];
      if (gender === 'boy' || gender === 'both') {
        originNames.boys.slice(0, Math.ceil(count/2)).forEach(name => {
          const meaningInfo = nameMeanings.find(n => n.name === name);
          names.push({
            name,
            meaning: meaningInfo?.meaning,
            origin: meaningInfo?.origin || origin
          });
        });
      }
      if (gender === 'girl' || gender === 'both') {
        originNames.girls.slice(0, Math.ceil(count/2)).forEach(name => {
          const meaningInfo = nameMeanings.find(n => n.name === name);
          names.push({
            name,
            meaning: meaningInfo?.meaning,
            origin: meaningInfo?.origin || origin
          });
        });
      }
    } else {
      // Use style-based generation
      if (gender === 'boy' || gender === 'both') {
        const styleKey = style === 'elegant' ? 'unique' : style;
        boyNames[styleKey as keyof typeof boyNames].slice(0, Math.ceil(count/2)).forEach(name => {
          const meaningInfo = nameMeanings.find(n => n.name === name);
          names.push({
            name,
            meaning: meaningInfo?.meaning,
            origin: meaningInfo?.origin
          });
        });
      }
      if (gender === 'girl' || gender === 'both') {
        girlNames[style as keyof typeof girlNames].slice(0, Math.ceil(count/2)).forEach(name => {
          const meaningInfo = nameMeanings.find(n => n.name === name);
          names.push({
            name,
            meaning: meaningInfo?.meaning,
            origin: meaningInfo?.origin
          });
        });
      }
    }
    
    // Shuffle the names
    for (let i = names.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [names[i], names[j]] = [names[j], names[i]];
    }
    
    setGeneratedNames(names.slice(0, count));
  };

  const toggleFavorite = (name: string) => {
    setFavorites(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-pink-600 hover:text-pink-700 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-12 w-12 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Baby Name Generator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the perfect name for your little one. Filter by style, origin, and gender to find names 
            that resonate with your heart and family values.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Generator Settings */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5" />
                Name Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">Baby&apos;s Gender</Label>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant={gender === 'boy' ? 'default' : 'outline'}
                    onClick={() => setGender('boy')}
                    className="h-auto py-3"
                  >
                    Boy
                  </Button>
                  <Button
                    variant={gender === 'girl' ? 'default' : 'outline'}
                    onClick={() => setGender('girl')}
                    className="h-auto py-3"
                  >
                    Girl
                  </Button>
                  <Button
                    variant={gender === 'both' ? 'default' : 'outline'}
                    onClick={() => setGender('both')}
                    className="h-auto py-3"
                  >
                    Both
                  </Button>
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Name Style</Label>
                <div className="grid grid-cols-2 gap-3">
                  {['popular', 'unique', 'traditional', 'nature', 'strong', 'elegant'].map((styleOption) => (
                    <Button
                      key={styleOption}
                      variant={style === styleOption ? 'default' : 'outline'}
                      onClick={() => setStyle(styleOption as 'popular' | 'unique' | 'traditional' | 'nature' | 'strong' | 'elegant')}
                      className="h-auto py-2 capitalize"
                    >
                      {styleOption}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Origin/Culture</Label>
                <div className="grid grid-cols-2 gap-3">
                  {['any', 'english', 'spanish', 'italian', 'french', 'greek'].map((originOption) => (
                    <Button
                      key={originOption}
                      variant={origin === originOption ? 'default' : 'outline'}
                      onClick={() => setOrigin(originOption)}
                      className="h-auto py-2 capitalize"
                    >
                      {originOption === 'any' ? 'Any Origin' : originOption}
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={generateNames} 
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Names
              </Button>
            </CardContent>
          </Card>

          {/* Generated Names */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-between">
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Generated Names
                </span>
                {generatedNames.length > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={generateNames}
                  >
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Refresh
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {generatedNames.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Set your preferences and click &quot;Generate Names&quot; to discover beautiful names for your baby!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {generatedNames.map((nameInfo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-gray-800">{nameInfo.name}</h3>
                          {nameInfo.origin && (
                            <Badge variant="secondary" className="text-xs">
                              {nameInfo.origin}
                            </Badge>
                          )}
                        </div>
                        {nameInfo.meaning && (
                          <p className="text-sm text-gray-600 mt-1">{nameInfo.meaning}</p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(nameInfo.name)}
                        className={`ml-3 ${favorites.includes(nameInfo.name) ? 'text-red-500' : 'text-gray-400'}`}
                      >
                        <Heart className={`h-5 w-5 ${favorites.includes(nameInfo.name) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Favorites */}
        {favorites.length > 0 && (
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Your Favorite Names ({favorites.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {favorites.map((name) => (
                    <Badge
                      key={name}
                      variant="secondary"
                      className="text-sm py-2 px-3 bg-red-50 text-red-700 border-red-200"
                    >
                      {name}
                      <button
                        onClick={() => toggleFavorite(name)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Name Tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Choosing the Perfect Name</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Consider how the name sounds with your last name
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Think about potential nicknames and initials
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Consider the name&apos;s meaning and cultural significance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Check if the name has special family connections
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Naming Trends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Nature Names</h4>
                  <p className="text-sm text-gray-600">River, Luna, Forest, Sage</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Vintage Revival</h4>
                  <p className="text-sm text-gray-600">Eleanor, Theodore, Hazel, Felix</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Unisex Names</h4>
                  <p className="text-sm text-gray-600">Avery, Riley, Jordan, Taylor</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">International</h4>
                  <p className="text-sm text-gray-600">Aria, Kai, Nova, Zara</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">More Pregnancy Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/baby-gender-predictor" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Baby className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Gender Predictor</h3>
                  <p className="text-sm text-gray-600">Fun predictions for baby&apos;s gender</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/due-date-calculator" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Due Date Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate your estimated delivery date</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/baby-size-comparison" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-3" />
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