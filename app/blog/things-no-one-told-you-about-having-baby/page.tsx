import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Things No One Told You About Having a Baby (That They Should Have)",
  description: "The brutal truths about parenthood that pregnancy books skip. Real parent experiences about postpartum recovery, newborn care, and the shocking realities of new parent life.",
  keywords: [
    "things no one tells you about babies",
    "postpartum reality",
    "newborn truth",
    "honest parenting",
    "what to expect postpartum",
    "new parent shock",
    "baby reality check",
    "postpartum recovery truth",
    "parenting surprises",
    "first time parent"
  ],
  openGraph: {
    title: "Things No One Told You About Having a Baby (That They Should Have)",
    description: "The brutal truths about parenthood that pregnancy books skip. Real parent experiences about the shocking realities of new parent life.",
    type: "article",
    publishedTime: "2025-10-24T00:00:00Z",
  },
  alternates: {
    canonical: "/blog/things-no-one-told-you-about-having-baby",
  },
};

export default function ThingsNoOneToldYouPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Things No One Told You About Having a Baby (That They Should Have)",
    "description": "The brutal truths about parenthood that pregnancy books skip. Real parent experiences about the shocking realities of new parent life.",
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
      "@id": "https://www.egspect.com/blog/things-no-one-told-you-about-having-baby"
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
                    Reality Check
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Things No One Told You About Having a Baby (That They Should Have)
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    The pregnancy books covered the basics, but they left out some pretty important details. Here&apos;s what real parents wish they&apos;d known before bringing baby home.
                  </p>
                  <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
                    <span>Published on October 24, 2025</span>
                    <span className="mx-2">•</span>
                    <span>10 min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Fair Warning</h3>
                    <p className="text-blue-800">
                      This article contains brutally honest truths about parenthood. If you&apos;re currently pregnant and prefer to maintain some illusions, maybe bookmark this for later. For everyone else - welcome to reality.
                    </p>
                  </div>

                  <h2>About Your Recovery (The Real Version)</h2>

                  <h3>You&apos;ll Bleed for Weeks</h3>
                  <p>
                    Nobody adequately prepares you for lochia - the postpartum bleeding that can last 4-6 weeks. You&apos;ll go through industrial-strength pads like nobody&apos;s business, and just when you think it&apos;s over, it comes back. Even C-section moms experience this.
                  </p>

                  <h3>Everything Will Hurt</h3>
                  <p>
                    Not just your obvious parts. Your back hurts from hunching over to feed/change baby. Your arms ache from constant holding. Your neck is stiff from looking down. Your legs are sore from walking the halls at 3 AM. Motherhood is surprisingly physical.
                  </p>

                  <h3>You Might Not Feel &quot;Yourself&quot; for Months</h3>
                  <p>
                    Recovery isn&apos;t just physical. Your brain feels foggy, your emotions are all over the place, and you might feel like you&apos;re living someone else&apos;s life. This is normal, but it&apos;s longer and more intense than most people admit.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">💡 What They Don&apos;t Tell You About C-Sections</h4>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• Getting in and out of bed requires strategic planning</li>
                      <li>• Sneezing and coughing are genuinely terrifying</li>
                      <li>• You&apos;ll need help with basic tasks for weeks</li>
                      <li>• The numbness around your incision can last months</li>
                      <li>• You might feel disconnected from your lower body</li>
                    </ul>
                  </div>

                  <h2>About Your Baby (Plot Twists)</h2>

                  <h3>Newborns Are Surprisingly Noisy</h3>
                  <p>
                    They grunt, wheeze, sniffle, and make random sounds constantly. You&apos;ll spend the first few weeks convinced something is wrong, but most newborns sound like tiny congested old men. It&apos;s normal.
                  </p>

                  <h3>They&apos;re Also Surprisingly Strong</h3>
                  <p>
                    That tiny baby can scratch their face bloody with those razor-sharp nails, head-butt you during feeding, and surprisingly difficult to hold when they&apos;re squirming. Don&apos;t feel bad about struggling to control a 7-pound human.
                  </p>

                  <h3>The Crying Has No Logic</h3>
                  <p>
                    Sometimes babies cry for no discoverable reason. You&apos;ll check every box - fed, changed, burped, held, rocked - and they&apos;ll still cry. This doesn&apos;t mean you&apos;re failing. Sometimes babies just cry.
                  </p>

                  <h3>They Might Not Look Like You Expected</h3>
                  <p>
                    Newborns can be cone-headed, covered in vernix, have crossed eyes, or look like tiny aliens. Some are covered in hair, others are completely bald. Most look nothing like the Gerber baby. This is all normal.
                  </p>

                  <h2>About Feeding (The Messy Reality)</h2>

                  <h3>Breastfeeding Might Be Harder Than Labor</h3>
                  <p>
                    Despite being &quot;natural,&quot; breastfeeding can be excruciatingly difficult. Your nipples might crack and bleed. You might get mastitis or clogged ducts. Some babies have trouble latching. Having backup formula isn&apos;t giving up - it&apos;s being prepared.
                  </p>

                  <h3>Formula Feeding Has Its Own Challenges</h3>
                  <p>
                    You&apos;ll wash approximately 47 bottles per day. You&apos;ll panic about water temperature and mixing ratios. You might face judgment from other parents. Every feeding method has its struggles.
                  </p>

                  <h3>Babies Eat Constantly</h3>
                  <p>
                    &quot;Every 2-3 hours&quot; sounds manageable until you realize it&apos;s measured from the START of one feeding to the START of the next. If feeding takes 45 minutes, you have maybe an hour before starting again.
                  </p>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-red-800 mb-3">🚨 Things That Might Shock You</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• Newborn poop can be every color of the rainbow</li>
                      <li>• They can projectile vomit with shocking force</li>
                      <li>• Boy babies can pee directly into their own faces</li>
                      <li>• Diaper blowouts will reach impossible places</li>
                      <li>• You&apos;ll get peed, pooped, and vomited on regularly</li>
                    </ul>
                  </div>

                  <h2>About Sleep (Ha!)</h2>

                  <h3>&quot;Sleep When the Baby Sleeps&quot; is Terrible Advice</h3>
                  <p>
                    This assumes you can fall asleep instantly and that you don&apos;t need to eat, shower, use the bathroom, or maintain basic household functions. Sometimes you need to just sit quietly and exist.
                  </p>

                  <h3>Sleep Deprivation is Genuinely Dangerous</h3>
                  <p>
                    You&apos;ll make mistakes you normally wouldn&apos;t make. You might put the milk in the cabinet and cereal in the fridge. You might forget words or struggle to complete simple tasks. This isn&apos;t weakness - it&apos;s your brain protecting itself.
                  </p>

                  <h3>Your Sleep Will Never Be the Same</h3>
                  <p>
                    Even when your child eventually sleeps through the night, you&apos;ll wake up automatically listening for crying. Parent ears are permanently tuned to baby sounds.
                  </p>

                  <h2>About Your Relationship</h2>

                  <h3>You Might Resent Your Partner</h3>
                  <p>
                    If you&apos;re the primary caregiver, you might feel angry that your partner gets to leave for work or sleep longer. If you&apos;re the working partner, you might feel shut out or criticized. This is normal relationship strain, not a relationship crisis.
                  </p>

                  <h3>You&apos;ll Have New Things to Fight About</h3>
                  <p>
                    Who&apos;s more tired, who does more baby care, how to handle crying, sleep training, feeding choices. You&apos;ll discover you have strong opinions about things you never knew existed.
                  </p>

                  <h3>Physical Intimacy Takes Time</h3>
                  <p>
                    Beyond the medical clearance period, you might not feel ready for physical closeness. Between exhaustion, hormones, and body changes, this is completely normal and nothing to rush.
                  </p>

                  <h2>About Your Identity</h2>

                  <h3>You Might Mourn Your Old Life</h3>
                  <p>
                    It&apos;s possible to love your baby deeply while also missing your freedom, sleep, and spontaneity. These feelings can coexist, and neither cancels out the other.
                  </p>

                  <h3>Your Priorities Will Shift Dramatically</h3>
                  <p>
                    Things that seemed important before might feel trivial now. Your sense of what constitutes an accomplishment will change completely. Getting dressed might be the day&apos;s biggest victory.
                  </p>

                  <h3>You&apos;ll Worry About Everything</h3>
                  <p>
                    Every rash, every strange noise, every feeding will make you question if something&apos;s wrong. You&apos;ll Google symptoms at 2 AM and convince yourself your baby has rare diseases. This anxiety is normal but exhausting.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-green-800 mb-3">✅ Things That Actually Help</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Accept help when offered (and ask for it when you need it)</li>
                      <li>• Lower your standards for everything except baby safety</li>
                      <li>• Connect with other new parents for reality checks</li>
                      <li>• Take breaks from social media comparisons</li>
                      <li>• Remember that &quot;just surviving&quot; some days is enough</li>
                      <li>• Trust that it does get easier (really)</li>
                    </ul>
                  </div>

                  <h2>The Silver Lining</h2>

                  <p>
                    Despite all these challenges, most parents eventually find their rhythm. You&apos;ll develop superhuman abilities to function on minimal sleep. You&apos;ll become an expert at reading your baby&apos;s cues. You&apos;ll discover strength you didn&apos;t know you had.
                  </p>

                  <p>
                    The hardest part about the things no one tells you is feeling like you&apos;re the only one struggling. You&apos;re not. Every parent has moments of feeling overwhelmed, unprepared, and slightly traumatized by the reality of caring for a tiny human.
                  </p>

                  <p>
                    Would it have helped to know all this beforehand? Maybe. Would it have stopped you from having a baby? Probably not. Sometimes the best lessons come from jumping in and figuring it out as you go.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg my-8">
                    <h4 className="font-semibold text-blue-800 mb-3">Remember</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• You&apos;re not failing if you&apos;re struggling</li>
                      <li>• Every parent feels unprepared sometimes</li>
                      <li>• It&apos;s okay to admit this is harder than expected</li>
                      <li>• You&apos;re doing better than you think you are</li>
                      <li>• These challenges are temporary</li>
                      <li>• Asking for help is not admitting defeat</li>
                    </ul>
                  </div>

                  <h2>Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <Link href="/blog/its-ok-to-hate-newborn-stage-reddit-truth" className="block p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
                      <h3 className="font-semibold text-pink-600 mb-2">It&apos;s OK to Hate the Newborn Stage</h3>
                      <p className="text-gray-600 text-sm">Honest truth about struggling with early parenthood</p>
                    </Link>
                    <Link href="/blog/postpartum-depression-vs-just-exhausted-how-tell" className="block p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                      <h3 className="font-semibold text-blue-600 mb-2">Postpartum Depression vs Exhaustion</h3>
                      <p className="text-gray-600 text-sm">Understanding the difference and when to seek help</p>
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