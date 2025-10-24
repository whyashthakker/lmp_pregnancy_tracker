import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/baby" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Baby Tracker
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-600 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Popular Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/due-date-calculator" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Due Date Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/contraction-timer" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Contraction Timer
                </Link>
              </li>
              <li>
                <Link href="/tools/ovulation-calculator" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Ovulation Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/pregnancy-week-calculator" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Week Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/baby-gender-predictor" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Gender Predictor
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Baby & Pregnancy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/baby-name-generator" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Baby Name Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/hospital-bag-checklist" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Hospital Bag Checklist
                </Link>
              </li>
              <li>
                <Link href="/tools/pregnancy-safe-foods" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Safe Foods Guide
                </Link>
              </li>
              <li>
                <Link href="/tools/pregnancy-symptom-checker" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Symptom Checker
                </Link>
              </li>
              <li>
                <Link href="/tools/kick-counter" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Kick Counter
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Popular Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/first-trimester-guide" className="text-gray-600 hover:text-pink-600 transition-colors">
                  First Trimester Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/pregnancy-nutrition-essentials" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Nutrition Essentials
                </Link>
              </li>
              <li>
                <Link href="/blog/newborn-first-week-guide" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Newborn First Week
                </Link>
              </li>
              <li>
                <Link href="/blog/pregnancy-warning-signs" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Warning Signs
                </Link>
              </li>
              <li>
                <Link href="/blog/complete-newborn-care-guide" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Newborn Care Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} egspect.com. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <p className="text-gray-500 text-sm">
                Made with ❤️ by <a href="https://goyashy.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">goyashy</a> (who became a dad {Math.floor((new Date().getTime() - new Date('2025-10-18').getTime()) / (1000 * 60 * 60 * 24))} days ago)
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Your trusted companion for pregnancy and baby care
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}