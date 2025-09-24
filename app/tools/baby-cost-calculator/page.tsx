import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getAllCountries, formatCurrency, getPopularCountries } from '@/lib/baby-cost-data';
import { Calculator, PiggyBank, Globe, TrendingUp, Star, Calendar, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Baby Cost Calculator by Country - Free Pregnancy Tools',
  description: 'Calculate the cost of having a baby in 18+ countries including India, USA, UK, Australia, China, Sweden and more. Free calculator with local currency support, age-based calculations, and detailed cost breakdown.',
  keywords: [
    'baby cost calculator',
    'cost of having a baby',
    'pregnancy cost calculator', 
    'maternity expenses',
    'newborn budget calculator',
    'baby budget planner',
    'pregnancy financial planning',
    'baby cost by country',
    'international baby costs',
    'pregnancy expenses calculator',
    'age-based child costs',
    'child expenses by age'
  ],
  openGraph: {
    title: 'Baby Cost Calculator by Country',
    description: 'Calculate baby costs in 18+ countries with local currency support and age-based planning. Free pregnancy financial planning tool.',
    type: 'website',
  },
};

export default function BabyCostCalculatorPage() {
  const countries = getAllCountries();
  const popular = getPopularCountries();
  const others = countries.filter(country => !popular.some(p => p.slug === country.slug));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg">
                <PiggyBank className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                <Calculator className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Baby Cost Calculator by Country
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Plan your pregnancy budget with our comprehensive cost calculators. Get detailed breakdowns for prenatal care, delivery, and age-based child expenses from 0-5 years in your country.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-green-600 border-green-200 px-4 py-2 text-base">
              <Globe className="h-4 w-4 mr-2" />
              {countries.length} Countries
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-200 px-4 py-2 text-base">
              <DollarSign className="h-4 w-4 mr-2" />
              Local Currency
            </Badge>
            <Badge variant="outline" className="text-purple-600 border-purple-200 px-4 py-2 text-base">
              <Calendar className="h-4 w-4 mr-2" />
              Age-Based Planning
            </Badge>
          </div>
        </div>

        {/* Popular Countries */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-800">Most Popular Countries</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popular.map((country) => (
              <Link key={country.slug} href={`/tools/cost-of-having-a-baby/${country.slug}`} className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-2 border-yellow-200 bg-gradient-to-br from-white via-yellow-25 to-yellow-50">
                  <CardHeader className="text-center pb-4">
                    <div className="text-5xl mb-4">{country.flag}</div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                      {country.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 font-medium">Budget Range:</span>
                        <span className="font-semibold text-green-600">
                          {formatCurrency(country.totalMinCost, country.currency, country.locale)}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-gray-500">to</span>
                        <span className="font-semibold text-blue-600 ml-2">
                          {formatCurrency(country.totalMaxCost, country.currency, country.locale)}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Badge variant="secondary" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {country.ageBasedCosts.length} age ranges
                      </Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-3 group-hover:bg-green-50 group-hover:border-green-300 group-hover:text-green-700"
                    >
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculate Costs
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* All Countries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">All Available Countries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {others.map((country) => (
              <Link key={country.slug} href={`/tools/cost-of-having-a-baby/${country.slug}`} className="block group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-102">
                  <CardHeader className="text-center pb-3">
                    <div className="text-4xl mb-2">{country.flag}</div>
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {country.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="text-sm text-gray-600">
                      {formatCurrency(country.totalMinCost, country.currency, country.locale)} - {formatCurrency(country.totalMaxCost, country.currency, country.locale)}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      0-5 years planning
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-blue-50 group-hover:border-blue-300"
                    >
                      <Calculator className="h-4 w-4 mr-2" />
                      View Calculator
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Use Our Baby Cost Calculator?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{countries.length} Countries</h3>
              <p className="text-sm text-gray-600">Comprehensive cost data for major countries worldwide with age-based planning and local insights.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Local Currency</h3>
              <p className="text-sm text-gray-600">All costs displayed in local currency with proper formatting and real exchange rates.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Age-Based Planning</h3>
              <p className="text-sm text-gray-600">Interactive calculator with age-based costs from 0-5 years and budget planning options.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Smart Breakdown</h3>
              <p className="text-sm text-gray-600">Categorized costs for prenatal care, delivery, and child expenses by age range.</p>
            </div>
          </div>
        </div>

        {/* What&apos;s Included Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">What&apos;s Included in Our Calculators?</h2>
            <p className="text-xl opacity-90">Comprehensive cost breakdown for your complete parenting journey from pregnancy to school age</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-semibold mb-3 text-lg">Prenatal Care</h3>
              <ul className="text-sm opacity-90 space-y-2">
                <li>• Regular checkups & consultations</li>
                <li>• Ultrasound scans & imaging</li>
                <li>• Blood tests & screening</li>
                <li>• Prenatal vitamins & supplements</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚑</span>
              </div>
              <h3 className="font-semibold mb-3 text-lg">Delivery Costs</h3>
              <ul className="text-sm opacity-90 space-y-2">
                <li>• Hospital delivery options</li>
                <li>• C-section procedures (if needed)</li>
                <li>• Hospital stay & accommodation</li>
                <li>• Professional medical fees</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="font-semibold mb-3 text-lg">Child Expenses (0-5 years)</h3>
              <ul className="text-sm opacity-90 space-y-2">
                <li>• Baby clothing by age range</li>
                <li>• Diapers & feeding supplies</li>
                <li>• Childcare & education costs</li>
                <li>• Healthcare & development needs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Age-Based Planning Highlight */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 mb-16 border-2 border-orange-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-8 w-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-orange-800">Age-Based Cost Planning</h2>
            </div>
            <p className="text-lg text-orange-700 mb-6 max-w-3xl mx-auto">
              Our calculators break down costs by age ranges to help you plan financially as your child grows. Each age period has different needs and associated costs.
            </p>
            <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {['0-1 years', '1-2 years', '2-3 years', '3-4 years', '4-5 years'].map((age) => (
                <div key={age} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-orange-800 text-sm">{age}</div>
                  <div className="text-xs text-orange-600 mt-1">
                    {age === '0-1 years' && 'Setup & Medical'}
                    {age === '1-2 years' && 'Toddler Essentials'}
                    {age === '2-3 years' && 'Early Learning'}
                    {age === '3-4 years' && 'Pre-school'}
                    {age === '4-5 years' && 'School Prep'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Planning Your Baby Budget Today</h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose your country to get started with personalized, age-based cost estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools/cost-of-having-a-baby/india">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg px-8 py-3">
                <span className="mr-2 text-xl">🇮🇳</span>
                Calculate for India
              </Button>
            </Link>
            <Link href="/tools/cost-of-having-a-baby/united-states">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <span className="mr-2 text-xl">🇺🇸</span>
                Calculate for USA
              </Button>
            </Link>
            <Link href="/tools/cost-of-having-a-baby/china">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <span className="mr-2 text-xl">🇨🇳</span>
                Calculate for China
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}