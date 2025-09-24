export interface BabyCostItem {
  category: string;
  item: string;
  minCost: number;
  maxCost: number;
  essential: boolean;
  description?: string;
  ageRange?: string; // e.g., "0-1 years", "1-2 years", etc.
}

export interface AgeBasedCost {
  ageRange: string;
  totalMinCost: number;
  totalMaxCost: number;
  description: string;
}

export interface CountryData {
  name: string;
  slug: string;
  currency: string;
  currencySymbol: string;
  locale: string;
  flag: string;
  description: string;
  totalMinCost: number;
  totalMaxCost: number;
  ageBasedCosts: AgeBasedCost[];
  categories: {
    [key: string]: BabyCostItem[];
  };
}

export const countriesData: Record<string, CountryData> = {
  india: {
    name: "India",
    slug: "india",
    currency: "INR",
    currencySymbol: "₹",
    locale: "en-IN",
    flag: "🇮🇳",
    description: "Comprehensive cost breakdown for having a baby in India, covering prenatal care, delivery, and age-based expenses from birth to 5 years.",
    totalMinCost: 85000,
    totalMaxCost: 450000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 85000, totalMaxCost: 180000, description: "Birth to first birthday - highest medical and initial setup costs" },
      { ageRange: "1-2 years", totalMinCost: 45000, totalMaxCost: 95000, description: "Toddler essentials, food, clothing, and basic healthcare" },
      { ageRange: "2-3 years", totalMinCost: 40000, totalMaxCost: 85000, description: "Early education preparation and developmental needs" },
      { ageRange: "3-4 years", totalMinCost: 55000, totalMaxCost: 120000, description: "Pre-school education and extracurricular activities" },
      { ageRange: "4-5 years", totalMinCost: 65000, totalMaxCost: 140000, description: "School preparation and advanced learning tools" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "Regular checkups & consultations", minCost: 15000, maxCost: 50000, essential: true, description: "Monthly checkups with gynecologist" },
        { category: "Prenatal Care", item: "Ultrasound scans", minCost: 8000, maxCost: 25000, essential: true, description: "4-6 scans during pregnancy" },
        { category: "Prenatal Care", item: "Blood tests & lab work", minCost: 12000, maxCost: 30000, essential: true, description: "Routine blood tests and screening" },
        { category: "Prenatal Care", item: "Prenatal vitamins", minCost: 3000, maxCost: 8000, essential: true, description: "Folic acid, iron, calcium supplements" }
      ],
      delivery: [
        { category: "Delivery", item: "Hospital delivery (normal)", minCost: 25000, maxCost: 80000, essential: true, description: "Private hospital normal delivery" },
        { category: "Delivery", item: "C-section delivery", minCost: 45000, maxCost: 150000, essential: false, description: "If required, private hospital" },
        { category: "Delivery", item: "Pediatrician consultation", minCost: 2000, maxCost: 8000, essential: true, description: "Initial baby checkup" },
        { category: "Delivery", item: "Hospital stay (3-5 days)", minCost: 15000, maxCost: 40000, essential: true, description: "Room charges and nursing care" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Clothing (0-1 years)", minCost: 8000, maxCost: 25000, essential: true, description: "Onesies, pajamas, seasonal wear", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Diapers (0-2 years)", minCost: 25000, maxCost: 50000, essential: true, description: "Disposable or cloth diapers", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding supplies", minCost: 5000, maxCost: 15000, essential: true, description: "Bottles, formula if needed", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby care products", minCost: 3000, maxCost: 10000, essential: true, description: "Soap, oil, powder, lotion", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Toys & development (1-3 years)", minCost: 5000, maxCost: 20000, essential: false, description: "Educational toys and books", ageRange: "1-3 years" },
        { category: "Baby Essentials", item: "School supplies (3-5 years)", minCost: 8000, maxCost: 25000, essential: true, description: "Books, uniform, stationery", ageRange: "3-5 years" }
      ]
    }
  },

  "united-states": {
    name: "United States",
    slug: "united-states",
    currency: "USD",
    currencySymbol: "$",
    locale: "en-US",
    flag: "🇺🇸",
    description: "Complete cost analysis for raising a child in the United States, including healthcare, childcare, and education expenses from birth to 5 years.",
    totalMinCost: 15000,
    totalMaxCost: 55000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 15000, totalMaxCost: 35000, description: "Newborn medical care and initial baby expenses" },
      { ageRange: "1-2 years", totalMinCost: 12000, totalMaxCost: 28000, description: "Toddler care, food, and basic necessities" },
      { ageRange: "2-3 years", totalMinCost: 14000, totalMaxCost: 32000, description: "Early learning and developmental activities" },
      { ageRange: "3-4 years", totalMinCost: 16000, totalMaxCost: 38000, description: "Pre-K education and structured activities" },
      { ageRange: "4-5 years", totalMinCost: 18000, totalMaxCost: 42000, description: "Kindergarten preparation and school supplies" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "Prenatal visits & checkups", minCost: 2500, maxCost: 6000, essential: true, description: "OB-GYN visits throughout pregnancy" },
        { category: "Prenatal Care", item: "Ultrasounds & imaging", minCost: 800, maxCost: 2500, essential: true, description: "Multiple ultrasounds during pregnancy" },
        { category: "Prenatal Care", item: "Lab tests & screening", minCost: 1200, maxCost: 3500, essential: true, description: "Blood work, genetic testing" },
        { category: "Prenatal Care", item: "Prenatal vitamins", minCost: 200, maxCost: 500, essential: true, description: "Prescription or OTC vitamins" }
      ],
      delivery: [
        { category: "Delivery", item: "Hospital delivery (vaginal)", minCost: 8000, maxCost: 18000, essential: true, description: "Average hospital birth cost" },
        { category: "Delivery", item: "C-section delivery", minCost: 12000, maxCost: 25000, essential: false, description: "If medically necessary" },
        { category: "Delivery", item: "Anesthesia", minCost: 500, maxCost: 2000, essential: false, description: "Epidural or other pain management" },
        { category: "Delivery", item: "Pediatrician fees", minCost: 300, maxCost: 800, essential: true, description: "Newborn examination" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Baby clothes (0-1 years)", minCost: 400, maxCost: 1500, essential: true, description: "Basic clothing needs", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Diapers (0-2 years)", minCost: 1200, maxCost: 2200, essential: true, description: "Disposable diapers", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding supplies", minCost: 300, maxCost: 1000, essential: true, description: "Bottles, formula, nursing supplies", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby gear & furniture", minCost: 800, maxCost: 2500, essential: true, description: "Crib, car seat, stroller basics", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Childcare (1-5 years)", minCost: 8000, maxCost: 20000, essential: false, description: "Annual daycare/preschool costs", ageRange: "1-5 years" },
        { category: "Baby Essentials", item: "Healthcare (annual)", minCost: 1500, maxCost: 4000, essential: true, description: "Regular checkups and vaccinations", ageRange: "0-5 years" }
      ]
    }
  },

  "united-kingdom": {
    name: "United Kingdom",
    slug: "united-kingdom",
    currency: "GBP",
    currencySymbol: "£",
    locale: "en-GB",
    flag: "🇬🇧",
    description: "Baby and child costs in the UK with NHS coverage, childcare expenses, and education costs from birth to school age.",
    totalMinCost: 3000,
    totalMaxCost: 25000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 3000, totalMaxCost: 12000, description: "NHS birth with essential baby items and private options" },
      { ageRange: "1-2 years", totalMinCost: 4000, totalMaxCost: 15000, description: "Toddler needs and potential nursery costs" },
      { ageRange: "2-3 years", totalMinCost: 5000, totalMaxCost: 18000, description: "Early learning and 15-hour free childcare" },
      { ageRange: "3-4 years", totalMinCost: 4500, totalMaxCost: 16000, description: "30-hour free childcare and preparation activities" },
      { ageRange: "4-5 years", totalMinCost: 3500, totalMaxCost: 12000, description: "Reception year preparation and school supplies" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "NHS prenatal care", minCost: 0, maxCost: 0, essential: true, description: "Free NHS maternity care" },
        { category: "Prenatal Care", item: "Private prenatal care", minCost: 2000, maxCost: 8000, essential: false, description: "Private consultant fees" },
        { category: "Prenatal Care", item: "Additional scans", minCost: 100, maxCost: 500, essential: false, description: "Extra private scans" },
        { category: "Prenatal Care", item: "Vitamins & supplements", minCost: 50, maxCost: 200, essential: true, description: "Folic acid, vitamin D" }
      ],
      delivery: [
        { category: "Delivery", item: "NHS hospital birth", minCost: 0, maxCost: 0, essential: true, description: "Free NHS delivery" },
        { category: "Delivery", item: "Private hospital birth", minCost: 3000, maxCost: 12000, essential: false, description: "Private maternity care" },
        { category: "Delivery", item: "Home birth (NHS)", minCost: 0, maxCost: 0, essential: false, description: "NHS midwife-led home birth" },
        { category: "Delivery", item: "Private midwife", minCost: 1500, maxCost: 4000, essential: false, description: "Independent midwife care" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Baby clothes (0-1 years)", minCost: 250, maxCost: 1200, essential: true, description: "Basic clothing essentials", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Nappies (0-2 years)", minCost: 600, maxCost: 1200, essential: true, description: "Disposable nappies", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding equipment", minCost: 150, maxCost: 600, essential: true, description: "Bottles, sterilizer, formula if needed", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby equipment", minCost: 500, maxCost: 1800, essential: true, description: "Pram, car seat, cot", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Nursery fees (1-3 years)", minCost: 3000, maxCost: 12000, essential: false, description: "Private nursery costs before free hours", ageRange: "1-3 years" },
        { category: "Baby Essentials", item: "Books & toys (1-5 years)", minCost: 200, maxCost: 800, essential: false, description: "Educational materials and entertainment", ageRange: "1-5 years" }
      ]
    }
  },

  australia: {
    name: "Australia",
    slug: "australia",
    currency: "AUD",
    currencySymbol: "A$",
    locale: "en-AU",
    flag: "🇦🇺",
    description: "Comprehensive costs for raising a child in Australia with Medicare benefits, childcare subsidies, and education expenses.",
    totalMinCost: 4000,
    totalMaxCost: 35000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 4000, totalMaxCost: 18000, description: "Birth costs with Medicare plus baby essentials" },
      { ageRange: "1-2 years", totalMinCost: 5000, totalMaxCost: 22000, description: "Toddler care and potential childcare costs" },
      { ageRange: "2-3 years", totalMinCost: 6000, totalMaxCost: 25000, description: "Early learning and childcare subsidies" },
      { ageRange: "3-4 years", totalMinCost: 5500, totalMaxCost: 23000, description: "Preschool programs and developmental activities" },
      { ageRange: "4-5 years", totalMinCost: 5000, totalMaxCost: 20000, description: "School preparation and kindy costs" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "Medicare bulk-billed care", minCost: 0, maxCost: 500, essential: true, description: "GP and some specialist visits" },
        { category: "Prenatal Care", item: "Private obstetrician", minCost: 3000, maxCost: 8000, essential: false, description: "Private specialist care" },
        { category: "Prenatal Care", item: "Ultrasounds", minCost: 200, maxCost: 800, essential: true, description: "Medicare partially covered" },
        { category: "Prenatal Care", item: "Pregnancy supplements", minCost: 100, maxCost: 300, essential: true, description: "Elevit, folic acid" }
      ],
      delivery: [
        { category: "Delivery", item: "Public hospital birth", minCost: 0, maxCost: 0, essential: true, description: "Free in public system" },
        { category: "Delivery", item: "Private hospital birth", minCost: 5000, maxCost: 18000, essential: false, description: "With private health insurance gap" },
        { category: "Delivery", item: "Private obstetrician fees", minCost: 2000, maxCost: 6000, essential: false, description: "Professional fees" },
        { category: "Delivery", item: "Anesthetist fees", minCost: 500, maxCost: 1500, essential: false, description: "For epidural/cesarean" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Baby clothing (0-1 years)", minCost: 400, maxCost: 1500, essential: true, description: "Seasonal appropriate clothing", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Nappies (0-2 years)", minCost: 800, maxCost: 1600, essential: true, description: "Disposable nappies", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding supplies", minCost: 300, maxCost: 800, essential: true, description: "Bottles, formula if needed", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby equipment", minCost: 1000, maxCost: 3000, essential: true, description: "Pram, car seat, cot", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Childcare (1-5 years)", minCost: 6000, maxCost: 18000, essential: false, description: "Annual childcare with CCS subsidy", ageRange: "1-5 years" },
        { category: "Baby Essentials", item: "Healthcare (annual)", minCost: 500, maxCost: 2000, essential: true, description: "Medical expenses not covered by Medicare", ageRange: "0-5 years" }
      ]
    }
  },

  canada: {
    name: "Canada",
    slug: "canada",
    currency: "CAD",
    currencySymbol: "C$",
    locale: "en-CA",
    flag: "🇨🇦",
    description: "Child-rearing costs in Canada with universal healthcare, parental benefits, and childcare considerations across provinces.",
    totalMinCost: 2500,
    totalMaxCost: 25000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 2500, totalMaxCost: 12000, description: "Birth covered by healthcare plus baby essentials" },
      { ageRange: "1-2 years", totalMinCost: 4000, totalMaxCost: 16000, description: "Toddler needs and potential childcare costs" },
      { ageRange: "2-3 years", totalMinCost: 5000, totalMaxCost: 18000, description: "Early childhood education and development" },
      { ageRange: "3-4 years", totalMinCost: 5500, totalMaxCost: 20000, description: "Pre-school programs and learning materials" },
      { ageRange: "4-5 years", totalMinCost: 4500, totalMaxCost: 16000, description: "School readiness and kindergarten preparation" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "Healthcare covered services", minCost: 0, maxCost: 0, essential: true, description: "Doctor visits, hospital care" },
        { category: "Prenatal Care", item: "Prescription medications", minCost: 200, maxCost: 800, essential: true, description: "Vitamins, medications not covered" },
        { category: "Prenatal Care", item: "Private ultrasounds", minCost: 150, maxCost: 500, essential: false, description: "Additional 3D/4D scans" },
        { category: "Prenatal Care", item: "Private birthing classes", minCost: 100, maxCost: 400, essential: false, description: "Childbirth preparation" }
      ],
      delivery: [
        { category: "Delivery", item: "Hospital birth", minCost: 0, maxCost: 0, essential: true, description: "Covered by provincial healthcare" },
        { category: "Delivery", item: "Private room upgrade", minCost: 200, maxCost: 800, essential: false, description: "Semi-private or private room" },
        { category: "Delivery", item: "Doula services", minCost: 800, maxCost: 2000, essential: false, description: "Professional birth support" },
        { category: "Delivery", item: "Home birth midwife", minCost: 0, maxCost: 500, essential: false, description: "Covered in most provinces" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Baby clothes (0-1 years)", minCost: 400, maxCost: 1800, essential: true, description: "Seasonal clothing needs", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Diapers (0-2 years)", minCost: 800, maxCost: 1500, essential: true, description: "Disposable diapers", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding supplies", minCost: 250, maxCost: 750, essential: true, description: "Bottles, formula if needed", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby gear", minCost: 600, maxCost: 2500, essential: true, description: "Car seat, stroller, crib", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Childcare (1-5 years)", minCost: 5000, maxCost: 15000, essential: false, description: "Annual childcare costs vary by province", ageRange: "1-5 years" },
        { category: "Baby Essentials", item: "Educational materials (2-5 years)", minCost: 300, maxCost: 1000, essential: false, description: "Books, learning toys, apps", ageRange: "2-5 years" }
      ]
    }
  },

  china: {
    name: "China",
    slug: "china",
    currency: "CNY",
    currencySymbol: "¥",
    locale: "zh-CN",
    flag: "🇨🇳",
    description: "Comprehensive breakdown of child-rearing costs in China, including healthcare, education, and living expenses from birth to school age.",
    totalMinCost: 25000,
    totalMaxCost: 180000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 25000, totalMaxCost: 80000, description: "Birth expenses and first-year baby essentials" },
      { ageRange: "1-2 years", totalMinCost: 18000, totalMaxCost: 65000, description: "Toddler care and early development costs" },
      { ageRange: "2-3 years", totalMinCost: 22000, totalMaxCost: 75000, description: "Early education and childcare expenses" },
      { ageRange: "3-4 years", totalMinCost: 28000, totalMaxCost: 85000, description: "Kindergarten preparation and learning materials" },
      { ageRange: "4-5 years", totalMinCost: 32000, totalMaxCost: 95000, description: "Pre-primary education and skill development" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "Hospital prenatal visits", minCost: 3000, maxCost: 12000, essential: true, description: "Regular checkups at public/private hospitals" },
        { category: "Prenatal Care", item: "Ultrasound examinations", minCost: 1500, maxCost: 5000, essential: true, description: "Multiple scans during pregnancy" },
        { category: "Prenatal Care", item: "Medical tests & screening", minCost: 2500, maxCost: 8000, essential: true, description: "Blood tests, genetic screening" },
        { category: "Prenatal Care", item: "Nutritional supplements", minCost: 800, maxCost: 2500, essential: true, description: "Prenatal vitamins and minerals" }
      ],
      delivery: [
        { category: "Delivery", item: "Public hospital delivery", minCost: 8000, maxCost: 20000, essential: true, description: "Standard delivery in public hospital" },
        { category: "Delivery", item: "Private hospital delivery", minCost: 25000, maxCost: 60000, essential: false, description: "Premium private hospital care" },
        { category: "Delivery", item: "C-section (if needed)", minCost: 5000, maxCost: 15000, essential: false, description: "Additional surgical costs" },
        { category: "Delivery", item: "Confinement care", minCost: 8000, maxCost: 25000, essential: false, description: "Traditional postpartum care service" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Baby clothing (0-1 years)", minCost: 1500, maxCost: 6000, essential: true, description: "Seasonal baby clothing", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Diapers (0-2 years)", minCost: 3000, maxCost: 8000, essential: true, description: "Quality disposable diapers", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding supplies", minCost: 1200, maxCost: 4000, essential: true, description: "Bottles, formula, baby food", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby equipment", minCost: 3000, maxCost: 12000, essential: true, description: "Stroller, crib, car seat", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Early education (1-5 years)", minCost: 8000, maxCost: 30000, essential: false, description: "Private kindergarten and classes", ageRange: "1-5 years" },
        { category: "Baby Essentials", item: "Healthcare (annual)", minCost: 2000, maxCost: 8000, essential: true, description: "Medical checkups and treatments", ageRange: "0-5 years" }
      ]
    }
  },

  netherlands: {
    name: "Netherlands",
    slug: "netherlands",
    currency: "EUR",
    currencySymbol: "€",
    locale: "nl-NL",
    flag: "🇳🇱",
    description: "Child costs in the Netherlands with excellent healthcare system, childcare benefits, and education support from birth to school age.",
    totalMinCost: 3500,
    totalMaxCost: 28000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 3500, totalMaxCost: 15000, description: "Birth with insurance coverage plus baby essentials" },
      { ageRange: "1-2 years", totalMinCost: 4500, totalMaxCost: 18000, description: "Toddler care and childcare options" },
      { ageRange: "2-3 years", totalMinCost: 5000, totalMaxCost: 20000, description: "Early education and development programs" },
      { ageRange: "3-4 years", totalMinCost: 4800, totalMaxCost: 19000, description: "Pre-school education and activities" },
      { ageRange: "4-5 years", totalMinCost: 4200, totalMaxCost: 16000, description: "School preparation and learning materials" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "Basic health insurance covered care", minCost: 200, maxCost: 500, essential: true, description: "Midwife and hospital care" },
        { category: "Prenatal Care", item: "Additional private services", minCost: 500, maxCost: 2000, essential: false, description: "Extra scans, private consultations" },
        { category: "Prenatal Care", item: "Pregnancy supplements", minCost: 80, maxCost: 300, essential: true, description: "Folic acid and vitamins" },
        { category: "Prenatal Care", item: "Birthing classes", minCost: 150, maxCost: 500, essential: false, description: "Preparation courses" }
      ],
      delivery: [
        { category: "Delivery", item: "Hospital birth (insured)", minCost: 250, maxCost: 800, essential: true, description: "Basic insurance covers most costs" },
        { category: "Delivery", item: "Home birth with midwife", minCost: 200, maxCost: 600, essential: false, description: "Traditional Dutch birthing option" },
        { category: "Delivery", item: "Private hospital room", minCost: 300, maxCost: 1000, essential: false, description: "Upgrade to private accommodation" },
        { category: "Delivery", item: "Kraamzorg (maternity care)", minCost: 800, maxCost: 2500, essential: true, description: "Postnatal home care service" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Baby clothes (0-1 years)", minCost: 300, maxCost: 1200, essential: true, description: "Quality baby clothing", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Luiers (diapers) (0-2 years)", minCost: 600, maxCost: 1200, essential: true, description: "Disposable diapers", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding equipment", minCost: 200, maxCost: 600, essential: true, description: "Bottles, formula, high chair", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby gear", minCost: 800, maxCost: 2500, essential: true, description: "Stroller, car seat, crib", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Childcare (1-5 years)", minCost: 4000, maxCost: 12000, essential: false, description: "Daycare with government subsidies", ageRange: "1-5 years" },
        { category: "Baby Essentials", item: "Healthcare extras", minCost: 300, maxCost: 1000, essential: true, description: "Dental care, additional treatments", ageRange: "0-5 years" }
      ]
    }
  },

  sweden: {
    name: "Sweden",
    slug: "sweden",
    currency: "SEK",
    currencySymbol: "kr",
    locale: "sv-SE",
    flag: "🇸🇪",
    description: "Child-rearing costs in Sweden with extensive parental benefits, subsidized childcare, and free healthcare from birth onwards.",
    totalMinCost: 15000,
    totalMaxCost: 85000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 15000, totalMaxCost: 40000, description: "Birth costs minimal due to benefits, focus on baby items" },
      { ageRange: "1-2 years", totalMinCost: 18000, totalMaxCost: 50000, description: "Toddler essentials and optional services" },
      { ageRange: "2-3 years", totalMinCost: 20000, totalMaxCost: 55000, description: "Förskola (preschool) and development activities" },
      { ageRange: "3-4 years", totalMinCost: 22000, totalMaxCost: 60000, description: "Advanced preschool and learning materials" },
      { ageRange: "4-5 years", totalMinCost: 25000, totalMaxCost: 65000, description: "School preparation and extracurricular activities" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "Free healthcare visits", minCost: 0, maxCost: 0, essential: true, description: "All prenatal care covered by healthcare" },
        { category: "Prenatal Care", item: "Private ultrasound sessions", minCost: 800, maxCost: 2500, essential: false, description: "Additional 3D/4D scans" },
        { category: "Prenatal Care", item: "Pregnancy supplements", minCost: 300, maxCost: 800, essential: true, description: "High-quality vitamins" },
        { category: "Prenatal Care", item: "Förlossningsförberedelse classes", minCost: 500, maxCost: 1500, essential: false, description: "Childbirth preparation courses" }
      ],
      delivery: [
        { category: "Delivery", item: "Hospital birth (free)", minCost: 0, maxCost: 50, essential: true, description: "Completely covered by healthcare system" },
        { category: "Delivery", item: "Private maternity ward", minCost: 3000, maxCost: 10000, essential: false, description: "Luxury birthing experience" },
        { category: "Delivery", item: "Professional doula", minCost: 2000, maxCost: 5000, essential: false, description: "Birth support specialist" },
        { category: "Delivery", item: "Extended hospital stay", minCost: 500, maxCost: 2000, essential: false, description: "Additional days for recovery" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Baby kläder (clothes) (0-1 years)", minCost: 800, maxCost: 2500, essential: true, description: "High-quality Swedish baby wear", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Blöjor (diapers) (0-2 years)", minCost: 2000, maxCost: 4000, essential: true, description: "Eco-friendly diapers", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding supplies", minCost: 500, maxCost: 1500, essential: true, description: "BPA-free bottles and organic food", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby equipment", minCost: 2500, maxCost: 8000, essential: true, description: "Premium stroller, car seat, furniture", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Förskola (childcare) (1-5 years)", minCost: 1500, maxCost: 6000, essential: false, description: "Heavily subsidized childcare", ageRange: "1-5 years" },
        { category: "Baby Essentials", item: "Activities & learning (2-5 years)", minCost: 2000, maxCost: 8000, essential: false, description: "Music, sports, language classes", ageRange: "2-5 years" }
      ]
    }
  },

  "south-korea": {
    name: "South Korea",
    slug: "south-korea",
    currency: "KRW",
    currencySymbol: "₩",
    locale: "ko-KR",
    flag: "🇰🇷",
    description: "Comprehensive child-rearing costs in South Korea with national health insurance, education expenses, and cultural considerations.",
    totalMinCost: 8500000,
    totalMaxCost: 42000000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 8500000, totalMaxCost: 18000000, description: "Birth with national insurance plus premium baby items" },
      { ageRange: "1-2 years", totalMinCost: 6500000, totalMaxCost: 15000000, description: "Toddler care and early learning programs" },
      { ageRange: "2-3 years", totalMinCost: 7800000, totalMaxCost: 18000000, description: "Kindergarten preparation and development" },
      { ageRange: "3-4 years", totalMinCost: 9200000, totalMaxCost: 22000000, description: "Private kindergarten and skill development" },
      { ageRange: "4-5 years", totalMinCost: 11000000, totalMaxCost: 28000000, description: "Academic preparation and extracurricular activities" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "National health insurance visits", minCost: 300000, maxCost: 800000, essential: true, description: "Regular checkups with partial coverage" },
        { category: "Prenatal Care", item: "Private clinic consultations", minCost: 1200000, maxCost: 3500000, essential: false, description: "Premium obstetric care" },
        { category: "Prenatal Care", item: "Ultrasound examinations", minCost: 500000, maxCost: 1500000, essential: true, description: "Multiple pregnancy scans" },
        { category: "Prenatal Care", item: "Prenatal vitamins", minCost: 200000, maxCost: 600000, essential: true, description: "High-quality supplements" }
      ],
      delivery: [
        { category: "Delivery", item: "Hospital delivery (insurance)", minCost: 1500000, maxCost: 4000000, essential: true, description: "Standard hospital birth" },
        { category: "Delivery", item: "Premium maternity hospital", minCost: 5000000, maxCost: 12000000, essential: false, description: "Luxury birthing center" },
        { category: "Delivery", item: "C-section procedure", minCost: 2000000, maxCost: 5000000, essential: false, description: "If medically required" },
        { category: "Delivery", item: "Sanhujori (postpartum care)", minCost: 2500000, maxCost: 8000000, essential: false, description: "Traditional postpartum care center" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Baby clothes (0-1 years)", minCost: 800000, maxCost: 2500000, essential: true, description: "Quality baby clothing", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Diapers (0-2 years)", minCost: 1500000, maxCost: 3000000, essential: true, description: "Premium disposable diapers", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding supplies", minCost: 600000, maxCost: 1500000, essential: true, description: "Bottles, formula, baby food", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby equipment", minCost: 2000000, maxCost: 6000000, essential: true, description: "Stroller, car seat, furniture", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Hagwon (private education) (3-5 years)", minCost: 3000000, maxCost: 12000000, essential: false, description: "Private tutoring and classes", ageRange: "3-5 years" },
        { category: "Baby Essentials", item: "Healthcare (annual)", minCost: 500000, maxCost: 2000000, essential: true, description: "Additional medical expenses", ageRange: "0-5 years" }
      ]
    }
  },

  mexico: {
    name: "Mexico",
    slug: "mexico",
    currency: "MXN",
    currencySymbol: "$",
    locale: "es-MX",
    flag: "🇲🇽",
    description: "Child-rearing costs in Mexico with public healthcare options, private alternatives, and education expenses across different economic levels.",
    totalMinCost: 85000,
    totalMaxCost: 420000,
    ageBasedCosts: [
      { ageRange: "0-1 years", totalMinCost: 85000, totalMaxCost: 180000, description: "Birth costs and first-year baby essentials" },
      { ageRange: "1-2 years", totalMinCost: 55000, totalMaxCost: 125000, description: "Toddler care and basic healthcare needs" },
      { ageRange: "2-3 years", totalMinCost: 65000, totalMaxCost: 145000, description: "Early education and development activities" },
      { ageRange: "3-4 years", totalMinCost: 75000, totalMaxCost: 165000, description: "Preschool education and learning materials" },
      { ageRange: "4-5 years", totalMinCost: 85000, totalMaxCost: 185000, description: "School preparation and educational resources" }
    ],
    categories: {
      prenatal: [
        { category: "Prenatal Care", item: "Public healthcare (IMSS/ISSSTE)", minCost: 5000, maxCost: 15000, essential: true, description: "Social security medical care" },
        { category: "Prenatal Care", item: "Private obstetric care", minCost: 25000, maxCost: 60000, essential: false, description: "Private doctor consultations" },
        { category: "Prenatal Care", item: "Ultrasound examinations", minCost: 8000, maxCost: 20000, essential: true, description: "Pregnancy monitoring scans" },
        { category: "Prenatal Care", item: "Prenatal supplements", minCost: 3000, maxCost: 8000, essential: true, description: "Vitamins and minerals" }
      ],
      delivery: [
        { category: "Delivery", item: "Public hospital delivery", minCost: 8000, maxCost: 25000, essential: true, description: "Government hospital birth" },
        { category: "Delivery", item: "Private hospital delivery", minCost: 35000, maxCost: 85000, essential: false, description: "Private maternity hospital" },
        { category: "Delivery", item: "C-section delivery", minCost: 15000, maxCost: 40000, essential: false, description: "Cesarean section if needed" },
        { category: "Delivery", item: "Pediatric consultation", minCost: 2000, maxCost: 6000, essential: true, description: "Newborn medical checkup" }
      ],
      essentials: [
        { category: "Baby Essentials", item: "Baby clothes (0-1 years)", minCost: 8000, maxCost: 25000, essential: true, description: "Basic clothing essentials", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Pañales (diapers) (0-2 years)", minCost: 18000, maxCost: 35000, essential: true, description: "Disposable diapers", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Feeding supplies", minCost: 5000, maxCost: 15000, essential: true, description: "Bottles, formula, baby food", ageRange: "0-1 years" },
        { category: "Baby Essentials", item: "Baby equipment", minCost: 15000, maxCost: 45000, essential: true, description: "Stroller, car seat, crib", ageRange: "0-2 years" },
        { category: "Baby Essentials", item: "Private education (3-5 years)", minCost: 25000, maxCost: 80000, essential: false, description: "Private preschool and kindergarten", ageRange: "3-5 years" },
        { category: "Baby Essentials", item: "Healthcare (annual)", minCost: 8000, maxCost: 25000, essential: true, description: "Medical expenses and treatments", ageRange: "0-5 years" }
      ]
    }
  }
};

export const getCountryBySlug = (slug: string): CountryData | undefined => {
  return countriesData[slug];
};

export const getAllCountries = (): CountryData[] => {
  return Object.values(countriesData);
};

export const formatCurrency = (amount: number, currency: string, locale: string): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getPopularCountries = (): CountryData[] => {
  const popularSlugs = ['india', 'united-states', 'united-kingdom', 'australia', 'canada', 'china'];
  return popularSlugs.map(slug => countriesData[slug]).filter(Boolean);
};