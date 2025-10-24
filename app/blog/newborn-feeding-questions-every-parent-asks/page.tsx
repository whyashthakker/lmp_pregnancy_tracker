import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newborn Feeding Questions Every Parent Asks (and Reddit Can&apos;t Agree On)",
  description: "Real answers to common newborn feeding questions from on-demand vs scheduled feeding to how often to feed your baby. Evidence-based guidance for new parents.",
  keywords: [
    "newborn feeding",
    "baby feeding schedule",
    "on-demand feeding",
    "scheduled feeding",
    "how often to feed newborn",
    "baby feeding questions",
    "breastfeeding schedule",
    "formula feeding schedule",
    "newborn feeding problems",
    "feeding frequency"
  ],
  openGraph: {
    title: "Newborn Feeding Questions Every Parent Asks (and Reddit Can&apos;t Agree On)",
    description: "Real answers to common newborn feeding questions from on-demand vs scheduled feeding to how often to feed your baby.",
    type: "article",
    publishedTime: "2025-10-24T00:00:00Z",
  },
  alternates: {
    canonical: "/blog/newborn-feeding-questions-every-parent-asks",
  },
};

export default function NewbornFeedingQuestionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Newborn Feeding Questions Every Parent Asks (and Reddit Can&apos;t Agree On)",
    "description": "Real answers to common newborn feeding questions from on-demand vs scheduled feeding to how often to feed your baby.",
    "author": {
      "@type": "Organization",
      "name": "egspect.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "egspect.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.egspect.com/baby.svg"
      }
    },
    "datePublished": "2025-10-24T00:00:00Z",
    "dateModified": "2025-10-24T00:00:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.egspect.com/blog/newborn-feeding-questions-every-parent-asks"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 sm:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-800 text-sm font-medium mb-4">
                    Newborn Care
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Newborn Feeding Questions Every Parent Asks (and Reddit Can&apos;t Agree On)
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    From on-demand vs scheduled feeding to how often to feed your baby - we tackle the most confusing newborn feeding questions with evidence-based answers.
                  </p>
                  <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
                    <span>Published on October 24, 2025</span>
                    <span className="mx-2">•</span>
                    <span>8 min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Answer</h3>
                    <p className="text-blue-800">
                      Most newborns need to feed every 2-3 hours (8-12 times per day). Both on-demand and scheduled feeding can work - choose what feels right for your family. Watch for hunger cues and wet diapers as signs your baby is getting enough.
                    </p>
                  </div>

                  <h2>The Great Feeding Debate: On-Demand vs Scheduled</h2>
                  
                  <p>
                    Walk into any parenting forum, and you&apos;ll find heated debates about newborn feeding schedules. Some parents swear by feeding on-demand (responsive feeding), while others prefer structured schedules. The truth? Both approaches can work beautifully - it&apos;s about finding what suits your baby and family.
                  </p>

                  <h3>On-Demand Feeding: The Natural Approach</h3>
                  
                  <p>
                    <strong>What it is:</strong> Following your baby&apos;s hunger cues and feeding whenever they show signs of wanting to eat.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-green-800 mb-3">Hunger Cues to Watch For:</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Rooting (turning head and opening mouth when cheek is touched)</li>
                      <li>• Sucking motions or sounds</li>
                      <li>• Hand-to-mouth movements</li>
                      <li>• Smacking lips</li>
                      <li>• Increased alertness and activity</li>
                      <li>• Fussiness (crying is a late hunger cue)</li>
                    </ul>
                  </div>

                  <p>
                    <strong>Benefits:</strong> Helps establish milk supply, reduces stress for both baby and parent, and naturally adjusts to your baby&apos;s changing needs.
                  </p>

                  <p>
                    <strong>Challenges:</strong> Can feel unpredictable, especially in the early weeks when babies may want to cluster feed.
                  </p>

                  <h3>Scheduled Feeding: The Structured Approach</h3>
                  
                  <p>
                    <strong>What it is:</strong> Feeding your baby at set intervals, typically every 2-3 hours.
                  </p>

                  <p>
                    <strong>Benefits:</strong> Provides predictability, can help with planning, and some parents find it reduces anxiety about whether baby is eating enough.
                  </p>

                  <p>
                    <strong>Challenges:</strong> May not always align with baby&apos;s natural rhythms, and rigid schedules can interfere with milk supply establishment in breastfeeding.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">💡 Pro Tip: The Hybrid Approach</h4>
                    <p className="text-yellow-700">
                      Many successful parents use a flexible schedule - aiming for feeds every 2-3 hours but watching for hunger cues in between. This gives structure while remaining responsive to baby&apos;s needs.
                    </p>
                  </div>

                  <h2>Key Takeaways</h2>
                  <div className="bg-blue-50 p-6 rounded-lg my-8">
                    <ul className="text-blue-700 space-y-2">
                      <li>• Both on-demand and scheduled feeding can work - choose what fits your family</li>
                      <li>• Newborns typically need 8-12 feeds per day in the early weeks</li>
                      <li>• Watch for hunger cues rather than just the clock</li>
                      <li>• It&apos;s hard to overfeed a breastfed baby; formula babies need portion awareness</li>
                      <li>• Wet diapers and weight gain are better indicators than feeding frequency</li>
                      <li>• Trust your instincts, but don&apos;t hesitate to seek professional help</li>
                    </ul>
                  </div>

                  <h2>Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <Link href="/blog/formula-vs-breastfeeding-guide" className="block p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
                      <h3 className="font-semibold text-pink-600 mb-2">Formula vs Breastfeeding Guide</h3>
                      <p className="text-gray-600 text-sm">Complete comparison of feeding options for new parents</p>
                    </Link>
                    <Link href="/blog/complete-newborn-care-guide" className="block p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                      <h3 className="font-semibold text-blue-600 mb-2">Complete Newborn Care Guide</h3>
                      <p className="text-gray-600 text-sm">Everything you need to know about caring for your newborn</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}