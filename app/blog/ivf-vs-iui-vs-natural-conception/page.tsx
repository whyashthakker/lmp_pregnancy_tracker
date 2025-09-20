import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IVF vs IUI vs Natural Conception: Complete Comparison Guide | Your Journey',
  description: 'Compare IVF, IUI, and natural conception methods. Learn about success rates, costs, procedures, and which fertility treatment might be right for you.',
  keywords: 'IVF vs IUI, fertility treatments, natural conception, assisted reproductive technology, infertility treatment, conception methods, fertility success rates',
  openGraph: {
    title: 'IVF vs IUI vs Natural Conception: Which Is Right for You?',
    description: 'Comprehensive guide comparing fertility treatment options and natural conception methods.',
    type: 'article',
  },
};

export default function IVFvsIUIvsNaturalConception() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-700 font-medium mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              IVF vs IUI vs Natural Conception: A Complete Guide
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Understanding your conception options is crucial when planning to start a family. This comprehensive guide 
              compares In Vitro Fertilization (IVF), Intrauterine Insemination (IUI), and natural conception to help 
              you make informed decisions about your fertility journey.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Understanding the Three Approaches</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <h3 className="text-xl font-medium text-green-800 mb-3">Natural Conception</h3>
                <p className="text-green-700 text-sm">
                  Conception occurs naturally through intercourse during the fertile window, without medical intervention.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-medium text-blue-800 mb-3">IUI (Intrauterine Insemination)</h3>
                <p className="text-blue-700 text-sm">
                  Sperm is directly placed into the uterus during ovulation to increase chances of fertilization.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <h3 className="text-xl font-medium text-purple-800 mb-3">IVF (In Vitro Fertilization)</h3>
                <p className="text-purple-700 text-sm">
                  Eggs and sperm are combined in a laboratory, and resulting embryos are transferred to the uterus.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Natural Conception</h2>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <h3 className="font-medium text-green-800 mb-3">How It Works</h3>
              <ul className="list-disc list-inside space-y-2 text-green-700">
                <li>Sperm travels through the cervix, uterus, and fallopian tubes</li>
                <li>Fertilization occurs in the fallopian tube</li>
                <li>Fertilized egg (embryo) travels to the uterus for implantation</li>
                <li>Timing around ovulation is crucial for success</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">✅ Advantages</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>No medical intervention required</li>
                  <li>No cost for procedures or medications</li>
                  <li>No physical stress from treatments</li>
                  <li>Can be attempted multiple times naturally</li>
                  <li>Most natural approach to conception</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-3">❌ Considerations</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>May take 6-12 months or longer</li>
                  <li>Not possible with certain fertility issues</li>
                  <li>Success rates decline with age</li>
                  <li>Requires regular ovulation and healthy sperm</li>
                  <li>No medical oversight of the process</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-medium text-gray-800 mb-3">Success Rates (Natural Conception)</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-sm text-gray-600">Under 35, within 1 year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">75%</div>
                  <div className="text-sm text-gray-600">35-39, within 1 year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">50%</div>
                  <div className="text-sm text-gray-600">40-42, within 1 year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">20%</div>
                  <div className="text-sm text-gray-600">Over 42, within 1 year</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">IUI (Intrauterine Insemination)</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="font-medium text-blue-800 mb-3">The IUI Process</h3>
              <div className="space-y-3 text-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Ovulation Monitoring</h4>
                    <p className="text-sm">Track ovulation through ultrasounds and hormone testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Sperm Preparation</h4>
                    <p className="text-sm">Sperm is collected and "washed" to concentrate healthy sperm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Insemination</h4>
                    <p className="text-sm">Prepared sperm is inserted directly into the uterus via a thin catheter</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <h4 className="font-medium">Wait and Test</h4>
                    <p className="text-sm">Wait about two weeks, then take a pregnancy test</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">✅ Best For</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Mild male factor infertility</li>
                  <li>Cervical mucus problems</li>
                  <li>Ovulation disorders (with medication)</li>
                  <li>Unexplained infertility</li>
                  <li>Using donor sperm</li>
                  <li>Same-sex female couples</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-3">❌ Not Recommended For</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Blocked fallopian tubes</li>
                  <li>Severe male factor infertility</li>
                  <li>Severe endometriosis</li>
                  <li>Poor egg quality</li>
                  <li>Multiple failed IUI attempts</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-medium text-gray-800 mb-3">IUI Success Rates & Costs</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Success Rates per Cycle</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>Under 35: 10-20%</li>
                    <li>35-39: 10-15%</li>
                    <li>40-42: 5-10%</li>
                    <li>Over 42: 2-5%</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Typical Costs</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>IUI procedure: $300-$1,000</li>
                    <li>Fertility medications: $50-$500</li>
                    <li>Monitoring: $200-$500</li>
                    <li>Total per cycle: $500-$2,000</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">IVF (In Vitro Fertilization)</h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
              <h3 className="font-medium text-purple-800 mb-3">The IVF Process</h3>
              <div className="space-y-3 text-purple-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Ovarian Stimulation</h4>
                    <p className="text-sm">Hormone medications stimulate ovaries to produce multiple eggs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Egg Retrieval</h4>
                    <p className="text-sm">Eggs are collected from ovaries using ultrasound-guided needle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Fertilization</h4>
                    <p className="text-sm">Eggs and sperm are combined in laboratory for fertilization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <h4 className="font-medium">Embryo Development</h4>
                    <p className="text-sm">Embryos are cultured in lab for 3-5 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                  <div>
                    <h4 className="font-medium">Embryo Transfer</h4>
                    <p className="text-sm">Best quality embryo(s) transferred to uterus</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">✅ Best For</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Blocked or damaged fallopian tubes</li>
                  <li>Severe male factor infertility</li>
                  <li>Ovulation disorders</li>
                  <li>Endometriosis</li>
                  <li>Unexplained infertility</li>
                  <li>Genetic disorders (with PGT)</li>
                  <li>Failed IUI cycles</li>
                  <li>Advanced maternal age</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-3">⚠️ Considerations</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>More invasive procedure</li>
                  <li>Higher cost</li>
                  <li>More intensive medication regimen</li>
                  <li>Risk of multiple pregnancies</li>
                  <li>Ovarian hyperstimulation syndrome (rare)</li>
                  <li>Emotional and physical stress</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-medium text-gray-800 mb-3">IVF Success Rates & Costs</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Live Birth Rates per Cycle</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>Under 35: 40-50%</li>
                    <li>35-37: 30-40%</li>
                    <li>38-40: 20-30%</li>
                    <li>41-42: 10-15%</li>
                    <li>Over 42: 3-5%</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Typical Costs</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>IVF cycle: $12,000-$17,000</li>
                    <li>Medications: $3,000-$5,000</li>
                    <li>Additional procedures: $1,000-$3,000</li>
                    <li>Total per cycle: $15,000-$25,000</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Side-by-Side Comparison</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">Factor</th>
                    <th className="border border-gray-300 p-3 text-center">Natural</th>
                    <th className="border border-gray-300 p-3 text-center">IUI</th>
                    <th className="border border-gray-300 p-3 text-center">IVF</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Invasiveness</td>
                    <td className="border border-gray-300 p-3 text-center">None</td>
                    <td className="border border-gray-300 p-3 text-center">Minimal</td>
                    <td className="border border-gray-300 p-3 text-center">Moderate</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Time per cycle</td>
                    <td className="border border-gray-300 p-3 text-center">1 month</td>
                    <td className="border border-gray-300 p-3 text-center">2-3 weeks</td>
                    <td className="border border-gray-300 p-3 text-center">4-6 weeks</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Cost per cycle</td>
                    <td className="border border-gray-300 p-3 text-center">$0</td>
                    <td className="border border-gray-300 p-3 text-center">$500-$2,000</td>
                    <td className="border border-gray-300 p-3 text-center">$15,000-$25,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Success rate (under 35)</td>
                    <td className="border border-gray-300 p-3 text-center">20% per month</td>
                    <td className="border border-gray-300 p-3 text-center">10-20% per cycle</td>
                    <td className="border border-gray-300 p-3 text-center">40-50% per cycle</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Multiple pregnancy risk</td>
                    <td className="border border-gray-300 p-3 text-center">1-2%</td>
                    <td className="border border-gray-300 p-3 text-center">5-10%</td>
                    <td className="border border-gray-300 p-3 text-center">20-30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Making the Right Choice</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-medium text-green-800 mb-3">Start with Natural</h3>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Under 35 with no known fertility issues</li>
                  <li>• Regular menstrual cycles</li>
                  <li>• Healthy lifestyle</li>
                  <li>• No time pressure</li>
                  <li>• Trying for less than 6-12 months</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-medium text-blue-800 mb-3">Consider IUI</h3>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• Mild fertility issues</li>
                  <li>• Natural conception hasn't worked</li>
                  <li>• Using donor sperm</li>
                  <li>• Cervical or ovulation problems</li>
                  <li>• Want less invasive treatment first</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-medium text-purple-800 mb-3">Choose IVF</h3>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li>• Severe fertility issues</li>
                  <li>• Multiple failed IUI cycles</li>
                  <li>• Advanced maternal age</li>
                  <li>• Genetic concerns</li>
                  <li>• Time-sensitive situation</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h3 className="font-medium text-yellow-800 mb-2">Important Considerations</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Age is the most important factor affecting success rates</li>
                <li>• Many couples try multiple methods in progression</li>
                <li>• Insurance coverage varies significantly</li>
                <li>• Emotional support is crucial throughout the journey</li>
                <li>• Success may take multiple cycles regardless of method</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Emotional and Lifestyle Factors</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Emotional Preparation</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                  <li>Fertility journeys can be emotionally challenging</li>
                  <li>Consider counseling or support groups</li>
                  <li>Communicate openly with your partner</li>
                  <li>Set realistic expectations</li>
                  <li>Plan for potential setbacks</li>
                  <li>Focus on what you can control</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Lifestyle Optimization</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                  <li>Maintain healthy weight</li>
                  <li>Eat a balanced, nutritious diet</li>
                  <li>Exercise regularly but moderately</li>
                  <li>Limit alcohol and eliminate smoking</li>
                  <li>Manage stress levels</li>
                  <li>Take prenatal vitamins</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="font-medium text-blue-800 mb-2">Next Steps</h3>
              <p className="text-blue-700 text-sm mb-3">
                The path to parenthood is unique for every couple. Whether you choose natural conception, IUI, or IVF, 
                the most important thing is to work with qualified healthcare providers who can guide you based on your 
                specific situation.
              </p>
              <p className="text-blue-700 text-sm">
                <strong>Remember:</strong> There's no "right" or "wrong" way to conceive. The best approach is the one 
                that works for your body, your situation, and your family's needs.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}