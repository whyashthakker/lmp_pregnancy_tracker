'use client';

import { useState, useMemo } from 'react';
import { CountryData, BabyCostItem, formatCurrency } from '@/lib/baby-cost-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Baby, 
  Calculator, 
  Heart, 
  Hospital, 
  ShoppingCart, 
  TrendingUp,
  Info,
  PiggyBank,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Target,
  BookOpen,
  Star,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';

interface BabyCostCalculatorClientProps {
  countryData: CountryData;
}

interface ItemSelection {
  id: string;
  selected: boolean;
  customAmount?: number;
}

export default function BabyCostCalculatorClient({ countryData }: BabyCostCalculatorClientProps) {
  const [selections, setSelections] = useState<Record<string, ItemSelection>>({});
  const [budgetLevel, setBudgetLevel] = useState<'min' | 'max' | 'custom'>('min');
  const [showOnlyEssentials, setShowOnlyEssentials] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>('0-1 years');

  const allItems = useMemo(() => {
    const items: (BabyCostItem & { id: string })[] = [];
    Object.entries(countryData.categories).forEach(([categoryKey, categoryItems]) => {
      categoryItems.forEach((item, index) => {
        items.push({
          ...item,
          id: `${categoryKey}-${index}`
        });
      });
    });
    return items;
  }, [countryData]);

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesAge = !item.ageRange || item.ageRange === selectedAge || item.ageRange === '0-5 years';
      const matchesEssentials = showOnlyEssentials ? item.essential : true;
      return matchesAge && matchesEssentials;
    });
  }, [allItems, selectedAge, showOnlyEssentials]);

  const selectedItems = useMemo(() => {
    return filteredItems.filter(item => {
      const selection = selections[item.id];
      return selection && selection.selected;
    });
  }, [filteredItems, selections]);

  const totalCost = useMemo(() => {
    return selectedItems.reduce((total, item) => {
      const selection = selections[item.id];
      if (selection?.customAmount !== undefined) {
        return total + selection.customAmount;
      }
      
      switch (budgetLevel) {
        case 'min':
          return total + item.minCost;
        case 'max':
          return total + item.maxCost;
        default:
          return total + Math.round((item.minCost + item.maxCost) / 2);
      }
    }, 0);
  }, [selectedItems, budgetLevel, selections]);

  const currentAgeData = useMemo(() => {
    return countryData.ageBasedCosts.find(age => age.ageRange === selectedAge);
  }, [countryData.ageBasedCosts, selectedAge]);

  const toggleItem = (itemId: string) => {
    setSelections(prev => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        selected: !prev[itemId]?.selected,
      }
    }));
  };

  const selectAllEssentials = () => {
    const newSelections = { ...selections };
    filteredItems.forEach(item => {
      if (item.essential) {
        newSelections[item.id] = {
          ...newSelections[item.id],
          selected: true,
        };
      }
    });
    setSelections(newSelections);
  };

  const clearAll = () => {
    setSelections({});
  };

  const getItemCost = (item: BabyCostItem & { id: string }) => {
    const selection = selections[item.id];
    if (selection?.customAmount !== undefined) {
      return selection.customAmount;
    }
    
    switch (budgetLevel) {
      case 'min':
        return item.minCost;
      case 'max':
        return item.maxCost;
      default:
        return Math.round((item.minCost + item.maxCost) / 2);
    }
  };

  const getProgressPercentage = () => {
    if (!currentAgeData) return 0;
    return Math.min((totalCost / currentAgeData.totalMaxCost) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <span className="text-7xl drop-shadow-lg">{countryData.flag}</span>
              <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Cost of Having a Baby in {countryData.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            {countryData.description}
          </p>
          
          {/* Age Selector */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-purple-500" />
              <span className="font-semibold text-gray-700">Select Child Age Range</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {countryData.ageBasedCosts.map((ageData) => (
                <Button
                  key={ageData.ageRange}
                  variant={selectedAge === ageData.ageRange ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedAge(ageData.ageRange)}
                  className={`transition-all ${
                    selectedAge === ageData.ageRange 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
                      : 'hover:border-purple-300'
                  }`}
                >
                  {ageData.ageRange}
                </Button>
              ))}
            </div>
            {currentAgeData && (
              <p className="text-sm text-gray-600 mt-3 max-w-2xl mx-auto">
                {currentAgeData.description}
              </p>
            )}
          </div>

          {/* Age-Based Cost Range */}
          {currentAgeData && (
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>Expected range for {selectedAge}:</span>
              <Badge variant="outline" className="text-green-600 border-green-200 px-3 py-1">
                <DollarSign className="h-3 w-3 mr-1" />
                {formatCurrency(currentAgeData.totalMinCost, countryData.currency, countryData.locale)}
              </Badge>
              <span className="text-gray-400">to</span>
              <Badge variant="outline" className="text-blue-600 border-blue-200 px-3 py-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {formatCurrency(currentAgeData.totalMaxCost, countryData.currency, countryData.locale)}
              </Badge>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enhanced Calculator Controls */}
          <div className="lg:col-span-2 space-y-6">
            {/* Budget Level Selector */}
            <Card className="border-2 border-purple-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  Budget Planning Level
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs value={budgetLevel} onValueChange={(value) => setBudgetLevel(value as 'min' | 'max' | 'custom')}>
                  <TabsList className="grid w-full grid-cols-3 h-12">
                    <TabsTrigger value="min" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                      <PiggyBank className="h-4 w-4 mr-2" />
                      Essential
                    </TabsTrigger>
                    <TabsTrigger value="custom" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                      <Target className="h-4 w-4 mr-2" />
                      Balanced
                    </TabsTrigger>
                    <TabsTrigger value="max" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                      <Star className="h-4 w-4 mr-2" />
                      Premium
                    </TabsTrigger>
                  </TabsList>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {budgetLevel === 'min' && '💡 Essential budget focuses on must-have items and basic services for your baby\'s health and safety.'}
                      {budgetLevel === 'custom' && '⚖️ Balanced approach includes essential items plus some comfort and convenience features.'}
                      {budgetLevel === 'max' && '✨ Premium experience includes top-quality products, private services, and additional comfort options.'}
                    </p>
                  </div>
                </Tabs>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button onClick={selectAllEssentials} variant="outline" size="sm" className="border-green-200 hover:bg-green-50">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Select All Essentials
                  </Button>
                  <Button onClick={clearAll} variant="outline" size="sm" className="border-red-200 hover:bg-red-50">
                    Clear All
                  </Button>
                  <Button 
                    onClick={() => setShowOnlyEssentials(!showOnlyEssentials)} 
                    variant={showOnlyEssentials ? 'default' : 'outline'} 
                    size="sm"
                    className={showOnlyEssentials ? 'bg-orange-500 hover:bg-orange-600' : 'border-orange-200 hover:bg-orange-50'}
                  >
                    <AlertCircle className="h-4 w-4 mr-2" />
                    {showOnlyEssentials ? 'Show All Items' : 'Essentials Only'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Category Tabs */}
            <Card className="border-2 border-blue-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-blue-500" />
                  Select Items by Category
                  <Badge variant="secondary" className="ml-2">
                    {filteredItems.length} items for {selectedAge}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="prenatal" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 h-12 mb-6">
                    <TabsTrigger value="prenatal" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                      <Heart className="h-4 w-4 mr-1" />
                      Prenatal
                    </TabsTrigger>
                    <TabsTrigger value="delivery" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                      <Hospital className="h-4 w-4 mr-1" />
                      Delivery
                    </TabsTrigger>
                    <TabsTrigger value="essentials" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                      <Baby className="h-4 w-4 mr-1" />
                      Baby Care
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="prenatal" className="space-y-4 mt-6">
                    {countryData.categories.prenatal?.filter(item => 
                      (!item.ageRange || item.ageRange === selectedAge || item.ageRange === '0-5 years') &&
                      (showOnlyEssentials ? item.essential : true)
                    ).map((item, index) => {
                      const itemId = `prenatal-${index}`;
                      const isSelected = selections[itemId]?.selected || false;

                      return (
                        <div
                          key={itemId}
                          className={`group p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            isSelected 
                              ? 'border-pink-300 bg-gradient-to-r from-pink-50 to-rose-50 shadow-md' 
                              : 'border-gray-200 hover:border-pink-200 hover:bg-pink-25'
                          }`}
                          onClick={() => toggleItem(itemId)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full ${isSelected ? 'bg-pink-500' : 'bg-gray-100 group-hover:bg-pink-100'} transition-colors`}>
                                  <Heart className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-pink-500'}`} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800">{item.item}</h4>
                                  {item.essential && (
                                    <Badge variant="secondary" className="text-xs mt-1 bg-orange-100 text-orange-700">
                                      Essential
                                    </Badge>
                                  )}
                                  {item.ageRange && (
                                    <Badge variant="outline" className="text-xs mt-1 ml-2">
                                      {item.ageRange}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              {item.description && (
                                <p className="text-sm text-gray-600 mt-2 ml-12">{item.description}</p>
                              )}
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-bold text-pink-600 text-lg">
                                {formatCurrency(getItemCost({ ...item, id: itemId }), countryData.currency, countryData.locale)}
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatCurrency(item.minCost, countryData.currency, countryData.locale)} - {formatCurrency(item.maxCost, countryData.currency, countryData.locale)}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </TabsContent>

                  <TabsContent value="delivery" className="space-y-4 mt-6">
                    {countryData.categories.delivery?.filter(item => 
                      (!item.ageRange || item.ageRange === selectedAge || item.ageRange === '0-5 years') &&
                      (showOnlyEssentials ? item.essential : true)
                    ).map((item, index) => {
                      const itemId = `delivery-${index}`;
                      const isSelected = selections[itemId]?.selected || false;

                      return (
                        <div
                          key={itemId}
                          className={`group p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            isSelected 
                              ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-md' 
                              : 'border-gray-200 hover:border-blue-200 hover:bg-blue-25'
                          }`}
                          onClick={() => toggleItem(itemId)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full ${isSelected ? 'bg-blue-500' : 'bg-gray-100 group-hover:bg-blue-100'} transition-colors`}>
                                  <Hospital className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-blue-500'}`} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800">{item.item}</h4>
                                  {item.essential && (
                                    <Badge variant="secondary" className="text-xs mt-1 bg-orange-100 text-orange-700">
                                      Essential
                                    </Badge>
                                  )}
                                  {item.ageRange && (
                                    <Badge variant="outline" className="text-xs mt-1 ml-2">
                                      {item.ageRange}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              {item.description && (
                                <p className="text-sm text-gray-600 mt-2 ml-12">{item.description}</p>
                              )}
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-bold text-blue-600 text-lg">
                                {formatCurrency(getItemCost({ ...item, id: itemId }), countryData.currency, countryData.locale)}
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatCurrency(item.minCost, countryData.currency, countryData.locale)} - {formatCurrency(item.maxCost, countryData.currency, countryData.locale)}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </TabsContent>

                  <TabsContent value="essentials" className="space-y-4 mt-6">
                    {countryData.categories.essentials?.filter(item => 
                      (!item.ageRange || item.ageRange === selectedAge || item.ageRange === '0-5 years') &&
                      (showOnlyEssentials ? item.essential : true)
                    ).map((item, index) => {
                      const itemId = `essentials-${index}`;
                      const isSelected = selections[itemId]?.selected || false;

                      return (
                        <div
                          key={itemId}
                          className={`group p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            isSelected 
                              ? 'border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 shadow-md' 
                              : 'border-gray-200 hover:border-green-200 hover:bg-green-25'
                          }`}
                          onClick={() => toggleItem(itemId)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full ${isSelected ? 'bg-green-500' : 'bg-gray-100 group-hover:bg-green-100'} transition-colors`}>
                                  <Baby className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-green-500'}`} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800">{item.item}</h4>
                                  {item.essential && (
                                    <Badge variant="secondary" className="text-xs mt-1 bg-orange-100 text-orange-700">
                                      Essential
                                    </Badge>
                                  )}
                                  {item.ageRange && (
                                    <Badge variant="outline" className="text-xs mt-1 ml-2">
                                      {item.ageRange}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              {item.description && (
                                <p className="text-sm text-gray-600 mt-2 ml-12">{item.description}</p>
                              )}
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-bold text-green-600 text-lg">
                                {formatCurrency(getItemCost({ ...item, id: itemId }), countryData.currency, countryData.locale)}
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatCurrency(item.minCost, countryData.currency, countryData.locale)} - {formatCurrency(item.maxCost, countryData.currency, countryData.locale)}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Summary Panel */}
          <div className="space-y-6">
            <Card className="sticky top-6 border-2 border-green-100 shadow-xl">
              <CardHeader className="text-center bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="flex items-center justify-center gap-2">
                  <PiggyBank className="h-6 w-6 text-green-500" />
                  Cost Summary for {selectedAge}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {formatCurrency(totalCost, countryData.currency, countryData.locale)}
                  </div>
                  <p className="text-sm text-gray-600">
                    {selectedItems.length} items selected • {budgetLevel} budget level
                  </p>
                </div>

                {currentAgeData && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Progress vs Expected Range</span>
                      <span className="font-semibold">
                        {Math.round(getProgressPercentage())}%
                      </span>
                    </div>
                    <Progress 
                      value={getProgressPercentage()} 
                      className="h-3"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{formatCurrency(currentAgeData.totalMinCost, countryData.currency, countryData.locale)}</span>
                      <span>{formatCurrency(currentAgeData.totalMaxCost, countryData.currency, countryData.locale)}</span>
                    </div>
                  </div>
                )}

                {/* Category Breakdown */}
                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-semibold text-sm text-gray-700 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Breakdown by Category
                  </h4>
                  {Object.entries(countryData.categories).map(([categoryKey]) => {
                    const categoryTotal = selectedItems
                      .filter(item => item.id.startsWith(categoryKey))
                      .reduce((sum, item) => sum + getItemCost(item), 0);
                    
                    if (categoryTotal === 0) return null;

                    const percentage = totalCost > 0 ? (categoryTotal / totalCost) * 100 : 0;
                    const categoryColor = categoryKey === 'prenatal' ? 'text-pink-600' : 
                                        categoryKey === 'delivery' ? 'text-blue-600' : 'text-green-600';

                    return (
                      <div key={categoryKey} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span className="capitalize font-medium">{categoryKey}</span>
                          <Badge variant="outline" className="text-xs">
                            {percentage.toFixed(0)}%
                          </Badge>
                        </div>
                        <span className={`font-semibold ${categoryColor}`}>
                          {formatCurrency(categoryTotal, countryData.currency, countryData.locale)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Age-Based Comparison */}
                <div className="pt-4 border-t">
                  <h4 className="font-semibold text-sm text-gray-700 mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Cost Comparison by Age
                  </h4>
                  <div className="space-y-2">
                    {countryData.ageBasedCosts.map((ageData) => (
                      <div 
                        key={ageData.ageRange} 
                        className={`p-2 rounded-lg text-xs transition-all cursor-pointer ${
                          selectedAge === ageData.ageRange 
                            ? 'bg-purple-100 border border-purple-200' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedAge(ageData.ageRange)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{ageData.ageRange}</span>
                          <span className="text-gray-600">
                            {formatCurrency(ageData.totalMinCost, countryData.currency, countryData.locale)} - {formatCurrency(ageData.totalMaxCost, countryData.currency, countryData.locale)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div className="text-xs text-blue-700">
                        <p className="font-semibold mb-1">💡 Smart Planning Tip:</p>
                        <p>Costs vary significantly by age. Early years (0-2) typically have higher setup costs, while later years (3-5) focus more on education and development activities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 border-orange-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  Related Tools & Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-6">
                <Link href="/tools/due-date-calculator" className="block">
                  <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:border-blue-300">
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Due Date
                  </Button>
                </Link>
                <Link href="/tools/pregnancy-week-calculator" className="block">
                  <Button variant="outline" className="w-full justify-start hover:bg-green-50 hover:border-green-300">
                    <Clock className="h-4 w-4 mr-2" />
                    Track Pregnancy Week
                  </Button>
                </Link>
                <Link href="/tools/hospital-bag-checklist" className="block">
                  <Button variant="outline" className="w-full justify-start hover:bg-purple-50 hover:border-purple-300">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Hospital Bag Checklist
                  </Button>
                </Link>
                <Link href={`/blog/cost-of-having-baby-in-${countryData.slug}`} className="block">
                  <Button variant="outline" className="w-full justify-start hover:bg-pink-50 hover:border-pink-300">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read {countryData.name} Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Disclaimer */}
        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-yellow-200 shadow-lg">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-3 text-lg">📋 Important Planning Information</h3>
              <div className="text-sm text-yellow-700 leading-relaxed space-y-2">
                <p>
                  <strong>💰 Cost Estimates:</strong> These figures are for planning purposes and may vary significantly based on your location within {countryData.name}, healthcare choices, insurance coverage, and personal preferences.
                </p>
                <p>
                  <strong>📅 Age-Based Planning:</strong> Costs change dramatically as your child grows. Use our age selector to plan for different life stages and budget accordingly.
                </p>
                <p>
                  <strong>🏥 Healthcare Coverage:</strong> Always verify what your insurance or national healthcare system covers, as this can significantly impact your out-of-pocket expenses.
                </p>
                <p>
                  <strong>💡 Professional Guidance:</strong> Consult with healthcare providers, financial advisors, and local experts for personalized advice tailored to your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}