import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Postpartum Depression vs. Just Exhausted: How to Tell the Difference",
  description: "Learn the key differences between normal new parent exhaustion and postpartum depression. Understand symptoms, when to seek help, and what treatment options are available.",
  keywords: [
    "postpartum depression",
    "postpartum depression symptoms",
    "baby blues vs postpartum depression",
    "new parent exhaustion",
    "postpartum mental health",
    "when to seek help postpartum",
    "postpartum depression signs",
    "maternal mental health",
    "postpartum anxiety",
    "perinatal depression"
  ],
  openGraph: {
    title: "Postpartum Depression vs. Just Exhausted: How to Tell the Difference",
    description: "Learn the key differences between normal new parent exhaustion and postpartum depression. Understand symptoms and when to seek help.",
    type: "article",
    publishedTime: "2025-10-24T00:00:00Z",
  },
  alternates: {
    canonical: "/blog/postpartum-depression-vs-just-exhausted-how-tell",
  },
};

export default function PostpartumDepressionVsExhaustionPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Postpartum Depression vs. Just Exhausted: How to Tell the Difference",
    "description": "Learn the key differences between normal new parent exhaustion and postpartum depression. Understand symptoms and when to seek help.",
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
      "@id": "https://www.egspect.com/blog/postpartum-depression-vs-just-exhausted-how-tell"
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
                    Mental Health
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Postpartum Depression vs. Just Exhausted: How to Tell the Difference
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Every new parent is tired, but how do you know if what you&apos;re experiencing goes beyond normal exhaustion? Understanding the signs can help you get the support you need.
                  </p>
                  <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
                    <span>Published on October 24, 2025</span>
                    <span className="mx-2">•</span>
                    <span>9 min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Note</h3>
                    <p className="text-blue-800">
                      If you&apos;re questioning whether your feelings are normal, that&apos;s already a good reason to talk to a healthcare provider. Postpartum depression is treatable, and seeking help is a sign of strength, not weakness.
                    </p>
                  </div>

                  <h2>The Gray Area of New Parent Mental Health</h2>
                  
                  <p>
                    You&apos;re running on 3 hours of sleep, haven&apos;t showered in days, and feel like you&apos;re barely keeping your head above water. But is this just normal new parent exhaustion, or could it be something more serious like postpartum depression?
                  </p>

                  <p>
                    This distinction matters because while exhaustion is temporary and improves with rest and support, postpartum depression requires professional treatment to resolve. Understanding the difference can help you get the right kind of help.
                  </p>

                  <h2>Understanding the Spectrum</h2>

                  <h3>Baby Blues (Days 3-14)</h3>
                  <p>
                    Up to 80% of new parents experience &quot;baby blues&quot; - mood swings, crying spells, anxiety, and difficulty sleeping that typically peaks around day 5 and resolves within two weeks.
                  </p>

                  <h3>Normal New Parent Exhaustion</h3>
                  <p>
                    This is the expected tiredness from disrupted sleep, life changes, and learning to care for a baby. You might feel overwhelmed but still experience moments of joy and connection with your baby.
                  </p>

                  <h3>Postpartum Depression</h3>
                  <p>
                    A serious mood disorder that affects 1 in 8 new parents. It involves persistent feelings of sadness, anxiety, and exhaustion that interfere with daily functioning and don&apos;t improve with rest.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">⏰ Timeline Matters</h4>
                    <p className="text-yellow-700">
                      <strong>Baby blues:</strong> Start within days of birth, peak around day 5, resolve by 2 weeks<br/>
                      <strong>Postpartum depression:</strong> Can start anytime in the first year, often 2-8 weeks postpartum, persists without treatment
                    </p>
                  </div>

                  <h2>Key Differences: Exhaustion vs. Depression</h2>

                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Aspect</th>
                          <th className="border border-gray-300 p-3 text-left">Normal Exhaustion</th>
                          <th className="border border-gray-300 p-3 text-left">Postpartum Depression</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Duration</td>
                          <td className="border border-gray-300 p-3">Improves with rest and time</td>
                          <td className="border border-gray-300 p-3">Persists for weeks/months</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Mood</td>
                          <td className="border border-gray-300 p-3">Up and down, but joy is possible</td>
                          <td className="border border-gray-300 p-3">Persistently low, hopeless</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Energy</td>
                          <td className="border border-gray-300 p-3">Tired but motivated when rested</td>
                          <td className="border border-gray-300 p-3">Depleted even with rest</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Bonding</td>
                          <td className="border border-gray-300 p-3">Develops over time</td>
                          <td className="border border-gray-300 p-3">Difficulty connecting with baby</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Functioning</td>
                          <td className="border border-gray-300 p-3">Can complete necessary tasks</td>
                          <td className="border border-gray-300 p-3">Struggles with basic self-care</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>Warning Signs of Postpartum Depression</h2>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-red-800 mb-3">🚩 Seek Help Immediately If You Experience:</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• Thoughts of harming yourself or your baby</li>
                      <li>• Inability to care for your baby or yourself</li>
                      <li>• Severe anxiety or panic attacks</li>
                      <li>• Paranoia or hearing/seeing things that aren&apos;t there</li>
                      <li>• Feeling disconnected from reality</li>
                    </ul>
                  </div>

                  <h3>Common Postpartum Depression Symptoms:</h3>
                  <ul>
                    <li><strong>Emotional:</strong> Persistent sadness, hopelessness, guilt, shame, feeling like a bad mother</li>
                    <li><strong>Physical:</strong> Fatigue that doesn&apos;t improve with rest, changes in appetite, headaches</li>
                    <li><strong>Cognitive:</strong> Difficulty concentrating, making decisions, remembering things</li>
                    <li><strong>Behavioral:</strong> Withdrawing from family/friends, lack of interest in activities, difficulty bonding</li>
                    <li><strong>Sleep:</strong> Insomnia (even when baby sleeps) or sleeping too much</li>
                  </ul>

                  <h2>The &quot;Good Enough&quot; Test</h2>

                  <p>
                    Ask yourself: &quot;Am I able to be a good enough parent most of the time?&quot; If exhaustion is your main issue, you&apos;ll likely answer yes - you&apos;re tired but managing. If postpartum depression is present, you might feel like you&apos;re failing your baby or that they&apos;d be better off without you.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-green-800 mb-3">✅ Self-Assessment Questions</h4>
                    <ul className="text-green-700 space-y-2">
                      <li>• Do I have moments of joy or satisfaction with my baby?</li>
                      <li>• Can I sleep when given the opportunity?</li>
                      <li>• Do I feel hopeful that things will get easier?</li>
                      <li>• Am I able to ask for and accept help?</li>
                      <li>• Do I feel like myself most of the time?</li>
                    </ul>
                    <p className="text-green-700 mt-3 text-sm">If you answered &quot;no&quot; to most of these, consider talking to a healthcare provider.</p>
                  </div>

                  <h2>Risk Factors for Postpartum Depression</h2>

                  <p>
                    Anyone can develop postpartum depression, but certain factors increase risk:
                  </p>

                  <ul>
                    <li>Previous history of depression or anxiety</li>
                    <li>Hormonal changes and imbalances</li>
                    <li>Lack of social support</li>
                    <li>Relationship problems</li>
                    <li>Financial stress</li>
                    <li>Unplanned pregnancy or mixed feelings about pregnancy</li>
                    <li>Complications during pregnancy or delivery</li>
                    <li>Difficulty breastfeeding</li>
                    <li>Sleep deprivation</li>
                  </ul>

                  <h2>When and How to Seek Help</h2>

                  <h3>Don&apos;t Wait for It to Get Worse</h3>
                  <p>
                    If you&apos;re questioning whether your feelings are normal, that&apos;s reason enough to reach out. Early intervention leads to better outcomes for both you and your baby.
                  </p>

                  <h3>Who to Contact:</h3>
                  <ul>
                    <li><strong>Your OB/GYN or primary care provider</strong> - Often the first point of contact</li>
                    <li><strong>Your baby&apos;s pediatrician</strong> - They&apos;re trained to screen for maternal depression</li>
                    <li><strong>Mental health professional</strong> - Therapists specializing in perinatal mental health</li>
                    <li><strong>Postpartum Support International</strong> - 1-800-944-4773 for resources and referrals</li>
                  </ul>

                  <h3>Treatment Options</h3>
                  <p>
                    Postpartum depression is highly treatable. Options include:
                  </p>
                  <ul>
                    <li><strong>Therapy:</strong> Cognitive behavioral therapy, interpersonal therapy</li>
                    <li><strong>Medication:</strong> Antidepressants (many are safe during breastfeeding)</li>
                    <li><strong>Support groups:</strong> Connecting with other parents experiencing similar challenges</li>
                    <li><strong>Lifestyle changes:</strong> Exercise, nutrition, sleep hygiene, social support</li>
                  </ul>

                  <h2>Supporting Your Recovery</h2>

                  <h3>Be Patient with Yourself</h3>
                  <p>
                    Recovery from postpartum depression takes time. Some people feel better within weeks, while others need several months of treatment. This doesn&apos;t reflect your strength or worthiness as a parent.
                  </p>

                  <h3>Build Your Support Network</h3>
                  <p>
                    Identify trusted family members, friends, or professionals who can provide practical and emotional support. Don&apos;t try to handle everything alone.
                  </p>

                  <h3>Focus on Small Steps</h3>
                  <p>
                    Set realistic daily goals. Some days, success might just be taking a shower, eating a meal, or spending a few minutes outside.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg my-8">
                    <h4 className="font-semibold text-blue-800 mb-3">Remember</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• Postpartum depression is a medical condition, not a personal failing</li>
                      <li>• Treatment is available and effective</li>
                      <li>• You&apos;re not alone - 1 in 8 new parents experience this</li>
                      <li>• Seeking help makes you a better parent, not a worse one</li>
                      <li>• With proper treatment, you will feel like yourself again</li>
                      <li>• Your baby needs you healthy and well</li>
                    </ul>
                  </div>

                  <h2>Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <Link href="/blog/new-parent-anxiety-catastrophic-thinking-help" className="block p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
                      <h3 className="font-semibold text-pink-600 mb-2">New Parent Anxiety</h3>
                      <p className="text-gray-600 text-sm">Understanding and managing catastrophic thinking in new parenthood</p>
                    </Link>
                    <Link href="/blog/its-ok-to-hate-newborn-stage-reddit-truth" className="block p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                      <h3 className="font-semibold text-blue-600 mb-2">It&apos;s OK to Hate the Newborn Stage</h3>
                      <p className="text-gray-600 text-sm">Honest truth about struggling with early parenthood</p>
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