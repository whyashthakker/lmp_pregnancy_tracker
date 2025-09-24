import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getCountryBySlug, formatCurrency } from '@/lib/baby-cost-data';
import { 
  ArrowRight, 
  Calculator, 
  Heart, 
  Hospital, 
  Baby, 
  PiggyBank, 
  TrendingUp,
  Calendar,
  Users,
  MapPin,
  Stethoscope,
  GraduationCap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Guide: Cost of Having a Baby in India 🇮🇳 - 2025 Breakdown',
  description: 'Comprehensive guide to baby costs in India from pregnancy to age 5. Detailed breakdown of prenatal care, delivery expenses, and child-rearing costs with local insights and age-based planning.',
  keywords: [
    'baby cost India',
    'pregnancy expenses India',
    'delivery cost India',
    'child expenses India',
    'maternity cost India',
    'prenatal care cost India',
    'hospital delivery cost India',
    'baby budget India',
    'child care costs India',
    'pregnancy budget planning India'
  ],
  openGraph: {
    title: 'Complete Guide: Cost of Having a Baby in India 🇮🇳',
    description: 'Everything you need to know about baby costs in India - from pregnancy to school age with detailed breakdowns and planning tips.',
    type: 'article',
  },
};

export default function IndiaGuidePage() {
  const countryData = getCountryBySlug('india');
  
  if (!countryData) {
    return <div>Country data not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-6xl">{countryData.flag}</span>
            <div className="p-3 bg-gradient-to-r from-orange-500 to-green-500 rounded-full">
              <PiggyBank className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-green-600 bg-clip-text text-transparent mb-6">
            Complete Guide: Cost of Having a Baby in India
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Everything you need to know about pregnancy, delivery, and child-rearing costs in India. From prenatal care to your child&apos;s fifth birthday - plan your budget with confidence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              India Specific
            </Badge>
            <Badge className="bg-green-100 text-green-700 px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              0-5 Years Planning
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
              <Calculator className="h-4 w-4 mr-2" />
              Interactive Calculator
            </Badge>
          </div>

          <Link href="/tools/cost-of-having-a-baby/india">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600">
              <Calculator className="h-5 w-5 mr-2" />
              Try Interactive Calculator
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Quick Overview */}
        <Card className="mb-12 border-2 border-orange-100">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-green-50">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="h-6 w-6 text-orange-500" />
              Quick Cost Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {formatCurrency(countryData.totalMinCost, countryData.currency, countryData.locale)}
                </div>
                <p className="text-green-700 font-semibold">Essential Budget</p>
                <p className="text-sm text-green-600 mt-1">Basic needs &amp; government hospitals</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatCurrency(countryData.totalMaxCost, countryData.currency, countryData.locale)}
                </div>
                <p className="text-blue-700 font-semibold">Premium Budget</p>
                <p className="text-sm text-blue-600 mt-1">Private hospitals &amp; premium care</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-700 text-center">
                <strong>💡 Note:</strong> These estimates cover pregnancy, delivery, and child expenses from birth to age 5. Costs vary significantly by city, hospital choice, and personal preferences.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Age-Based Cost Breakdown */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Cost by Age Range</h2>
          <div className="grid gap-4">
            {countryData.ageBasedCosts.map((ageData, index) => (
              <Card key={ageData.ageRange} className={`border-l-4 ${
                index === 0 ? 'border-l-red-500' :
                index === 1 ? 'border-l-orange-500' :
                index === 2 ? 'border-l-yellow-500' :
                index === 3 ? 'border-l-green-500' : 'border-l-blue-500'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-gray-500" />
                        <h3 className="text-xl font-bold text-gray-800">{ageData.ageRange}</h3>
                      </div>
                      <p className="text-gray-600">{ageData.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-800">
                        {formatCurrency(ageData.totalMinCost, countryData.currency, countryData.locale)} - {formatCurrency(ageData.totalMaxCost, countryData.currency, countryData.locale)}
                      </div>
                      <p className="text-sm text-gray-500">Annual estimate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Detailed Cost Breakdown</h2>
          
          {/* Prenatal Care */}
          <Card className="mb-8 border-2 border-pink-100">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-red-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-pink-500" />
                Prenatal Care Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {countryData.categories.prenatal.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-pink-25 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.item}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      {item.essential && (
                        <Badge variant="secondary" className="mt-2 text-xs bg-orange-100 text-orange-700">
                          Essential
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-pink-600">
                        {formatCurrency(item.minCost, countryData.currency, countryData.locale)} - {formatCurrency(item.maxCost, countryData.currency, countryData.locale)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Delivery Costs */}
          <Card className="mb-8 border-2 border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Hospital className="h-6 w-6 text-blue-500" />
                Delivery &amp; Hospital Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {countryData.categories.delivery.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-25 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.item}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      {item.essential && (
                        <Badge variant="secondary" className="mt-2 text-xs bg-orange-100 text-orange-700">
                          Essential
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">
                        {formatCurrency(item.minCost, countryData.currency, countryData.locale)} - {formatCurrency(item.maxCost, countryData.currency, countryData.locale)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Baby Essentials */}
          <Card className="mb-8 border-2 border-green-100">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Baby className="h-6 w-6 text-green-500" />
                Baby &amp; Child Essentials
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {countryData.categories.essentials.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-green-25 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.item}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      <div className="flex gap-2 mt-2">
                        {item.essential && (
                          <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                            Essential
                          </Badge>
                        )}
                        {item.ageRange && (
                          <Badge variant="outline" className="text-xs">
                            {item.ageRange}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">
                        {formatCurrency(item.minCost, countryData.currency, countryData.locale)} - {formatCurrency(item.maxCost, countryData.currency, countryData.locale)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* India-Specific Tips */}
        <Card className="mb-12 border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Stethoscope className="h-6 w-6 text-orange-500" />
              India-Specific Planning Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <Hospital className="h-5 w-5 text-blue-500" />
                  Healthcare Options
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Government hospitals: Most affordable but longer wait times</li>
                  <li>• Private hospitals: Higher cost but better facilities and shorter wait</li>
                  <li>• Health insurance: ESIS, corporate insurance can reduce costs significantly</li>
                  <li>• City differences: Metro cities cost 2-3x more than tier-2 cities</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-purple-500" />
                  Education Planning
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Nursery admission: Start planning from age 2</li>
                  <li>• School fees vary dramatically by city and school type</li>
                  <li>• Private schools: ₹50,000-₹2,00,000+ annually</li>
                  <li>• Extra-curricular activities add ₹20,000-₹50,000 annually</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regional Variations */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <MapPin className="h-6 w-6 text-purple-500" />
              Regional Cost Variations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Metro Cities</h4>
                <p className="text-sm text-red-700 mb-2">Mumbai, Delhi, Bangalore, Chennai</p>
                <div className="text-lg font-bold text-red-600">150-200% of base cost</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Tier-1 Cities</h4>
                <p className="text-sm text-yellow-700 mb-2">Pune, Hyderabad, Kolkata, Ahmedabad</p>
                <div className="text-lg font-bold text-yellow-600">100-130% of base cost</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Tier-2/3 Cities</h4>
                <p className="text-sm text-green-700 mb-2">Smaller cities and towns</p>
                <div className="text-lg font-bold text-green-600">70-90% of base cost</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Government Benefits */}
        <Card className="mb-12 border-2 border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-green-500" />
              Government Benefits &amp; Schemes
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Maternity Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Maternity Benefit Act:</strong> 26 weeks paid leave</li>
                  <li>• <strong>Janani Suraksha Yojana:</strong> Cash assistance for institutional delivery</li>
                  <li>• <strong>Pradhan Mantri Matru Vandana Yojana:</strong> ₹5,000 for first child</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Child Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Sukanya Samriddhi Yojana:</strong> Savings scheme for girl child</li>
                  <li>• <strong>Tax Benefits:</strong> Section 80C deductions for education</li>
                  <li>• <strong>Vaccination:</strong> Free immunization at government centers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Budget?</h2>
          <p className="text-xl mb-6 opacity-90">
            Use our interactive calculator to customize costs based on your preferences and get a personalized estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools/cost-of-having-a-baby/india">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Calculator className="h-5 w-5 mr-2" />
                Start Calculating
              </Button>
            </Link>
            <Link href="/tools/due-date-calculator">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Calendar className="h-5 w-5 mr-2" />
                Calculate Due Date
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Related Articles &amp; Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/pregnancy-week-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-800 mb-2">Pregnancy Week Calculator</h4>
                <p className="text-sm text-gray-600">Track your pregnancy progress week by week</p>
              </Link>
              <Link href="/tools/hospital-bag-checklist" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-800 mb-2">Hospital Bag Checklist</h4>
                <p className="text-sm text-gray-600">Essential items for labor and delivery</p>
              </Link>
              <Link href="/blog/pregnancy-nutrition-essentials" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-800 mb-2">Pregnancy Nutrition Guide</h4>
                <p className="text-sm text-gray-600">Essential nutrients for a healthy pregnancy</p>
              </Link>
              <Link href="/tools/baby-name-generator" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-800 mb-2">Baby Name Generator</h4>
                <p className="text-sm text-gray-600">Find the perfect name for your baby</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}