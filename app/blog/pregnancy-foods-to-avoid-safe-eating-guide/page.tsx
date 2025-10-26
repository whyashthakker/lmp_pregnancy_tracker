import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, AlertTriangle, Check, X, Apple, Fish } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Pregnancy Food Safety: Complete Guide to Foods to Avoid & Safe Eating | What to Eat During Pregnancy',
  description: 'Comprehensive guide to pregnancy food safety. Learn which foods to avoid during pregnancy, safe alternatives, and nutrition guidelines for each trimester.',
  keywords: 'pregnancy foods to avoid, safe foods during pregnancy, what to eat when pregnant, pregnancy nutrition guide, pregnancy food safety, foods not to eat while pregnant',
  openGraph: {
    title: 'Pregnancy Food Safety: Complete Guide to Foods to Avoid & Safe Eating',
    description: 'Essential pregnancy nutrition guide covering foods to avoid, safe alternatives, and trimester-specific eating guidelines.',
    type: 'article',
  },
};

export default function PregnancyFoodSafetyGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-green-100">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                Nutrition & Safety Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pregnancy Food Safety: Complete Guide to Foods to Avoid & Safe Eating
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Essential nutrition guidelines for expectant mothers, including foods to avoid, safe alternatives, and healthy eating recommendations for each trimester.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>Updated October 26, 2025</span>
              <span>•</span>
              <span>20 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Quick Reference: Foods to Avoid During Pregnancy
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">High-Risk Foods:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Raw/undercooked seafood, meat, eggs</li>
                      <li>• High-mercury fish</li>
                      <li>• Unpasteurized dairy products</li>
                      <li>• Deli meats (unless heated)</li>
                      <li>• Alcohol</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Limit These:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Caffeine (limit to 200mg/day)</li>
                      <li>• High-sodium processed foods</li>
                      <li>• Added sugars</li>
                      <li>• Certain herbal teas</li>
                      <li>• Large fish (shark, king mackerel)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <X className="w-6 h-6 text-red-600" />
              Foods to Completely Avoid During Pregnancy
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Raw or Undercooked Proteins</h3>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fish className="w-5 h-5 text-blue-600" />
                  Seafood & Fish
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Avoid:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Raw sushi, sashimi, oysters, clams</li>
                      <li>Smoked salmon, lox (unless cooked)</li>
                      <li>Ceviche or other raw fish preparations</li>
                      <li>High-mercury fish: shark, swordfish, king mackerel, tilefish</li>
                      <li>Raw or undercooked shellfish</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Safe Alternatives:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Fully cooked fish and seafood</li>
                      <li>Vegetarian sushi rolls</li>
                      <li>Low-mercury fish: salmon, sardines, anchovies</li>
                      <li>Canned light tuna (limit to 6 oz/week)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Meat & Poultry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Avoid:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Raw or rare meat (steaks, burgers, lamb)</li>
                      <li>Cold deli meats, lunch meats, hot dogs (unless heated to steaming)</li>
                      <li>Pâtés and meat spreads</li>
                      <li>Undercooked poultry</li>
                      <li>Raw or soft-cooked eggs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Safe Alternatives:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Well-done meat (internal temp 160°F+)</li>
                      <li>Heated deli meats until steaming</li>
                      <li>Fully cooked poultry (165°F internal temp)</li>
                      <li>Hard-boiled or fully cooked eggs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Unpasteurized Dairy Products</h3>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Avoid:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Soft cheeses (brie, camembert, feta, blue cheese)</li>
                      <li>Raw milk and products made from raw milk</li>
                      <li>Unpasteurized juice</li>
                      <li>Fresh-made ice cream from raw eggs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Safe Alternatives:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Pasteurized milk and dairy products</li>
                      <li>Hard cheeses (cheddar, swiss, mozzarella)</li>
                      <li>Pasteurized juice</li>
                      <li>Commercial ice cream</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Alcohol</h3>
            
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-red-800 mb-3">Complete Alcohol Avoidance</h4>
                <p className="mb-3">
                  No amount of alcohol is considered safe during pregnancy. Alcohol can cause:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fetal Alcohol Spectrum Disorders (FASD)</li>
                  <li>Birth defects</li>
                  <li>Intellectual disabilities</li>
                  <li>Growth problems</li>
                </ul>
                <p className="mt-3 font-semibold">
                  Safe alternatives: Sparkling water with fruit, mocktails, herbal teas (pregnancy-safe varieties)
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              Foods to Limit During Pregnancy
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Caffeine</h3>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Recommended Limit: 200mg per day</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Caffeine Content Guide:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• 8 oz coffee: 95mg</li>
                      <li>• 8 oz black tea: 47mg</li>
                      <li>• 12 oz cola: 34mg</li>
                      <li>• 1 oz dark chocolate: 12mg</li>
                      <li>• 8 oz green tea: 28mg</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Safe Alternatives:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Decaffeinated coffee/tea</li>
                      <li>• Herbal teas (pregnancy-safe)</li>
                      <li>• Fruit-infused water</li>
                      <li>• Milk-based drinks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-4">2. High-Mercury Fish</h3>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <p className="mb-3">Limit to 2-3 servings per week of low-mercury fish:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Best Choices (2-3 servings/week):</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Salmon</li>
                      <li>• Sardines</li>
                      <li>• Anchovies</li>
                      <li>• Herring</li>
                      <li>• Pollock</li>
                      <li>• Catfish</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-600 mb-2">Good Choices (1 serving/week):</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Canned light tuna</li>
                      <li>• Mahi-mahi</li>
                      <li>• Snapper</li>
                      <li>• Cod</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Apple className="w-6 h-6 text-green-600" />
              Essential Nutrients for Each Trimester
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-pink-600">First Trimester</CardTitle>
                </CardHeader>
                <CardContent>
                  <h5 className="font-semibold mb-2">Key Nutrients:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Folic Acid:</strong> 400-800mcg</li>
                    <li>• <strong>Iron:</strong> 27mg</li>
                    <li>• <strong>Calcium:</strong> 1000mg</li>
                    <li>• <strong>Vitamin D:</strong> 600 IU</li>
                  </ul>
                  <h5 className="font-semibold mt-4 mb-2">Focus Foods:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Leafy greens</li>
                    <li>• Fortified cereals</li>
                    <li>• Citrus fruits</li>
                    <li>• Lean proteins</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">Second Trimester</CardTitle>
                </CardHeader>
                <CardContent>
                  <h5 className="font-semibold mb-2">Additional Needs:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Extra 340 calories/day</li>
                    <li>• <strong>Protein:</strong> 71g</li>
                    <li>• <strong>DHA:</strong> 200-300mg</li>
                    <li>• Increased fiber</li>
                  </ul>
                  <h5 className="font-semibold mt-4 mb-2">Focus Foods:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Fatty fish</li>
                    <li>• Eggs</li>
                    <li>• Whole grains</li>
                    <li>• Nuts and seeds</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">Third Trimester</CardTitle>
                </CardHeader>
                <CardContent>
                  <h5 className="font-semibold mb-2">Peak Requirements:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Extra 450 calories/day</li>
                    <li>• <strong>Choline:</strong> 450mg</li>
                    <li>• <strong>Fiber:</strong> 28-34g</li>
                    <li>• Adequate hydration</li>
                  </ul>
                  <h5 className="font-semibold mt-4 mb-2">Focus Foods:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Eggs</li>
                    <li>• Lean meats</li>
                    <li>• Fruits & vegetables</li>
                    <li>• Healthy fats</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Safe Food Preparation Guidelines</h2>
            
            <Card className="mb-6 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Food Safety Best Practices:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Cooking Temperatures:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Beef, pork, lamb: 145°F + 3 min rest</li>
                      <li>• Ground meats: 160°F</li>
                      <li>• Poultry: 165°F</li>
                      <li>• Fish: 145°F</li>
                      <li>• Eggs: Cook until firm</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Kitchen Safety:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Wash hands frequently</li>
                      <li>• Separate raw and cooked foods</li>
                      <li>• Refrigerate promptly (within 2 hours)</li>
                      <li>• Use separate cutting boards</li>
                      <li>• Reheat leftovers to 165°F</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Healthy Pregnancy Meal Planning</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Sample Daily Meal Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Breakfast:</h5>
                    <p className="text-sm text-gray-600">Fortified cereal with milk and berries, orange juice</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Snack:</h5>
                    <p className="text-sm text-gray-600">Greek yogurt with nuts</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Lunch:</h5>
                    <p className="text-sm text-gray-600">Grilled chicken salad with spinach, quinoa, and avocado</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Snack:</h5>
                    <p className="text-sm text-gray-600">Apple slices with peanut butter</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Dinner:</h5>
                    <p className="text-sm text-gray-600">Baked salmon, sweet potato, steamed broccoli</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Food Safety Questions</h2>
            
            <div className="space-y-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">Q: Can I eat sushi during pregnancy?</h5>
                  <p className="text-sm text-gray-600">A: Avoid raw sushi. Choose cooked options like California rolls, tempura rolls, or vegetarian sushi.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">Q: Is it safe to eat lunch meat?</h5>
                  <p className="text-sm text-gray-600">A: Only if heated until steaming hot (165°F). Cold deli meats may contain listeria.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">Q: How much fish can I eat?</h5>
                  <p className="text-sm text-gray-600">A: 2-3 servings (8-12 oz) per week of low-mercury fish like salmon, sardines, and anchovies.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">Q: Can I have caffeine?</h5>
                  <p className="text-sm text-gray-600">A: Yes, limit to 200mg per day (about one 8 oz cup of coffee).</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Key Takeaways for Pregnancy Nutrition
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Avoid raw/undercooked proteins, unpasteurized dairy, and alcohol completely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Limit caffeine to 200mg daily and choose low-mercury fish</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Focus on nutrient-dense foods and proper food preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Take prenatal vitamins to fill nutritional gaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>When in doubt, consult your healthcare provider</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </article>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Quick Food Safety Answers?</h3>
          <p className="text-lg mb-6 opacity-90">
            Use our interactive safe foods checker for instant guidance on what's safe to eat during pregnancy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/pregnancy-safe-foods"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Check Food Safety
            </Link>
            <Link 
              href="/tools/pregnancy-nutrition-tracker"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Track Nutrition
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}