import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Shield, 
  Calendar, 
  Baby, 
  Heart, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Stethoscope,
  Target,
  Activity,
  Award,
  TrendingUp,
  Users,
  Phone,
  FileText,
  XCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Newborn Vaccinations Guide: Essential Immunizations & Schedule',
  description: 'Complete guide to newborn and infant vaccinations including recommended schedule, vaccine types, side effects, and importance of immunizations for baby health.',
  keywords: 'newborn vaccinations, baby immunizations, vaccination schedule, infant vaccines, childhood immunizations, vaccine safety',
  openGraph: {
    title: 'Newborn Vaccinations: Complete Guide to Baby Immunizations',
    description: 'Essential guide to newborn vaccines, schedules, and keeping your baby protected.',
    type: 'article',
  },
};

const coreVaccines = [
  {
    vaccine: "Hepatitis B (HepB)",
    ageGiven: ["Birth (within 24 hours)", "1-2 months", "6-18 months"],
    description: "Protects against hepatitis B virus that can cause liver infection",
    importance: "Especially critical for newborns as the virus can be transmitted from mother to baby",
    sideEffects: ["Mild soreness at injection site", "Low-grade fever (rare)"],
    protectsAgainst: "Chronic liver infection, liver cancer, liver failure",
    doses: 3,
    icon: Shield,
    color: "blue"
  },
  {
    vaccine: "Rotavirus (RV)",
    ageGiven: ["2 months", "4 months", "6 months (if needed)"],
    description: "Oral vaccine that protects against rotavirus, a leading cause of severe diarrhea",
    importance: "Prevents severe dehydration and hospitalization from rotavirus gastroenteritis",
    sideEffects: ["Mild diarrhea", "Vomiting", "Irritability", "Mild fever"],
    protectsAgainst: "Severe diarrhea, vomiting, dehydration",
    doses: "2-3 (depending on brand)",
    icon: Heart,
    color: "pink"
  },
  {
    vaccine: "DTaP (Diphtheria, Tetanus, Pertussis)",
    ageGiven: ["2 months", "4 months", "6 months", "15-18 months", "4-6 years"],
    description: "Protects against three serious bacterial diseases",
    importance: "Pertussis (whooping cough) can be life-threatening in infants",
    sideEffects: ["Redness/swelling at injection site", "Mild fever", "Fussiness", "Loss of appetite"],
    protectsAgainst: "Diphtheria, tetanus (lockjaw), pertussis (whooping cough)",
    doses: 5,
    icon: Target,
    color: "green"
  },
  {
    vaccine: "Hib (Haemophilus influenzae type b)",
    ageGiven: ["2 months", "4 months", "6 months (if needed)", "12-15 months"],
    description: "Prevents serious infections caused by Hib bacteria",
    importance: "Before vaccine, Hib was leading cause of bacterial meningitis in children",
    sideEffects: ["Redness/warmth at injection site", "Mild fever"],
    protectsAgainst: "Meningitis, pneumonia, severe throat swelling",
    doses: "3-4 (depending on brand)",
    icon: Stethoscope,
    color: "purple"
  },
  {
    vaccine: "PCV13 (Pneumococcal)",
    ageGiven: ["2 months", "4 months", "6 months", "12-15 months"],
    description: "Protects against 13 types of pneumococcal bacteria",
    importance: "Prevents serious infections including meningitis and bloodstream infections",
    sideEffects: ["Drowsiness", "Loss of appetite", "Redness/tenderness at injection site", "Mild fever"],
    protectsAgainst: "Pneumonia, meningitis, blood infections, ear infections",
    doses: 4,
    icon: Activity,
    color: "orange"
  },
  {
    vaccine: "IPV (Inactivated Poliovirus)",
    ageGiven: ["2 months", "4 months", "6-18 months", "4-6 years"],
    description: "Protects against polio, which can cause paralysis",
    importance: "Maintains protection against polio in case of reintroduction",
    sideEffects: ["Soreness at injection site", "Very rare allergic reactions"],
    protectsAgainst: "Polio virus, paralysis, death",
    doses: 4,
    icon: Award,
    color: "teal"
  }
];

const additionalVaccines = [
  {
    vaccine: "Influenza (Flu)",
    ageGiven: "Annually starting at 6 months",
    description: "Annual protection against seasonal flu viruses",
    importance: "Infants under 6 months rely on maternal antibodies and herd immunity",
    notes: "Pregnant women should get flu shot to protect newborns"
  },
  {
    vaccine: "MMR (Measles, Mumps, Rubella)",
    ageGiven: "12-15 months, then 4-6 years",
    description: "Protects against three viral diseases",
    importance: "Critical for preventing serious complications from these highly contagious diseases",
    notes: "Not given before 12 months due to maternal antibodies"
  },
  {
    vaccine: "Varicella (Chickenpox)",
    ageGiven: "12-15 months, then 4-6 years",
    description: "Prevents chickenpox and later shingles",
    importance: "Prevents serious complications and hospitalizations",
    notes: "Most effective when given as scheduled"
  },
  {
    vaccine: "Hepatitis A",
    ageGiven: "12-23 months (2 doses)",
    description: "Protects against hepatitis A liver infection",
    importance: "Prevents liver disease and complications",
    notes: "Especially important for travel or high-risk areas"
  }
];

const vaccinationSchedule = [
  {
    age: "Birth",
    vaccines: ["Hepatitis B (1st dose)"],
    notes: "Given within 24 hours of birth",
    icon: Baby
  },
  {
    age: "1-2 Months",
    vaccines: ["Hepatitis B (2nd dose)"],
    notes: "Usually given at 1 month visit",
    icon: Calendar
  },
  {
    age: "2 Months",
    vaccines: ["DTaP (1st)", "Hib (1st)", "IPV (1st)", "PCV13 (1st)", "Rotavirus (1st)"],
    notes: "First major vaccination visit - multiple shots",
    icon: Shield
  },
  {
    age: "4 Months",
    vaccines: ["DTaP (2nd)", "Hib (2nd)", "IPV (2nd)", "PCV13 (2nd)", "Rotavirus (2nd)"],
    notes: "Second round of core vaccines",
    icon: Target
  },
  {
    age: "6 Months",
    vaccines: ["DTaP (3rd)", "Hib (3rd)*", "IPV (3rd)*", "PCV13 (3rd)", "Rotavirus (3rd)*", "Hepatitis B (3rd)", "Influenza (annual)"],
    notes: "* indicates may not be needed depending on vaccine brand",
    icon: Activity
  },
  {
    age: "12-15 Months",
    vaccines: ["Hib (final)", "PCV13 (4th)", "MMR (1st)", "Varicella (1st)", "Hepatitis A (1st)"],
    notes: "Introduction of live vaccines",
    icon: Heart
  },
  {
    age: "15-18 Months",
    vaccines: ["DTaP (4th)"],
    notes: "Booster dose for continued protection",
    icon: TrendingUp
  },
  {
    age: "19-23 Months",
    vaccines: ["Hepatitis A (2nd)"],
    notes: "Completion of hepatitis A series",
    icon: CheckCircle
  }
];

const safetyInfo = [
  {
    topic: "Vaccine Safety",
    points: [
      "Vaccines undergo rigorous testing before approval",
      "Continuous monitoring for safety after approval",
      "Benefits far outweigh risks for healthy children",
      "Serious adverse reactions are extremely rare"
    ],
    icon: Shield
  },
  {
    topic: "Common Side Effects",
    points: [
      "Mild fever (less than 101°F)",
      "Soreness, redness, or swelling at injection site",
      "Fussiness or irritability",
      "Decreased appetite"
    ],
    icon: AlertTriangle
  },
  {
    topic: "When to Call Doctor",
    points: [
      "High fever (over 104°F)",
      "Severe allergic reaction (hives, difficulty breathing)",
      "Inconsolable crying for 3+ hours",
      "Seizures or unusual behavior"
    ],
    icon: Phone
  },
  {
    topic: "Managing Reactions",
    points: [
      "Use infant acetaminophen or ibuprofen for fever/pain",
      "Apply cool compress to injection site",
      "Offer extra fluids and comfort",
      "Monitor for 24-48 hours after vaccination"
    ],
    icon: Heart
  }
];

const contraindications = [
  {
    category: "General Contraindications",
    conditions: [
      "Severe illness with fever",
      "Known severe allergy to vaccine component",
      "Previous severe reaction to same vaccine",
      "Immune system disorders (for live vaccines)"
    ]
  },
  {
    category: "Temporary Delays",
    conditions: [
      "Moderate to severe illness",
      "Recent blood transfusion (for live vaccines)",
      "Current antibiotic treatment for serious infection",
      "Recent administration of antibody-containing products"
    ]
  },
  {
    category: "Not Contraindications",
    conditions: [
      "Mild cold or low-grade fever",
      "Family history of vaccine reactions",
      "Prematurity (vaccines given by chronological age)",
      "Breastfeeding"
    ]
  }
];

const herdImmunity = [
  {
    concept: "Community Protection",
    description: "When most people in a community are vaccinated, it protects those who cannot be vaccinated",
    examples: ["Newborns too young for vaccines", "Children with immune system disorders", "People with severe allergies"]
  },
  {
    concept: "Threshold Levels",
    description: "Different diseases require different vaccination rates for community protection",
    examples: ["Measles: 95% vaccination rate needed", "Polio: 90% vaccination rate needed", "Pertussis: 85% vaccination rate needed"]
  },
  {
    concept: "Protecting Vulnerable",
    description: "Vaccination helps protect the most vulnerable members of society",
    examples: ["Premature babies", "Cancer patients", "Elderly individuals", "Pregnant women"]
  }
];

const preparationTips = [
  {
    category: "Before the Visit",
    tips: [
      "Bring vaccination record/card",
      "List any concerns or questions",
      "Give pain reliever 30 minutes before (if recommended by doctor)",
      "Dress baby in easily removable clothing",
      "Plan for comfort items (favorite toy, pacifier)"
    ],
    icon: Calendar
  },
  {
    category: "During the Visit",
    tips: [
      "Hold and comfort your baby during shots",
      "Ask questions about vaccines being given",
      "Request vaccination record updates",
      "Discuss any previous reactions",
      "Plan next appointment"
    ],
    icon: Heart
  },
  {
    category: "After the Visit",
    tips: [
      "Monitor for reactions for 24-48 hours",
      "Give pain reliever if baby is uncomfortable",
      "Offer extra fluids and comfort",
      "Watch injection sites for unusual reactions",
      "Contact doctor if concerned about reactions"
    ],
    icon: Clock
  }
];

const mythsVsFacts = [
  {
    myth: "Vaccines cause autism",
    fact: "Multiple large-scale studies have found no link between vaccines and autism. The original study suggesting this link was fraudulent and retracted.",
    evidence: "Studies of millions of children worldwide"
  },
  {
    myth: "Natural immunity is better than vaccine immunity",
    fact: "While natural immunity can be strong, the diseases vaccines prevent can cause serious complications or death. Vaccines provide immunity without the risks of disease.",
    evidence: "Disease complications vs. vaccine side effects data"
  },
  {
    myth: "Too many vaccines overwhelm the immune system",
    fact: "Babies' immune systems can handle thousands of antigens daily. Vaccines contain far fewer antigens than babies encounter naturally.",
    evidence: "Immunological research on infant immune capacity"
  },
  {
    myth: "Vaccine ingredients are dangerous",
    fact: "Vaccine ingredients are present in extremely small amounts and are carefully tested for safety. Many are naturally occurring substances.",
    evidence: "Toxicology studies and safety data"
  }
];

export default function NewbornVaccinationsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Newborn Vaccinations Guide: Essential Immunizations
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive guide to newborn and infant vaccinations including recommended schedules, 
            vaccine safety, side effects, and the importance of immunizations for your baby&apos;s health.
          </p>
        </div>

        <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50/60 to-green-50/60 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Why Vaccinations Are Critical for Newborns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Protection</h3>
                <p className="text-gray-600 text-sm">
                  Vaccines protect against serious and potentially life-threatening diseases when babies are most vulnerable.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Health</h3>
                <p className="text-gray-600 text-sm">
                  High vaccination rates protect the entire community, especially those who cannot be vaccinated.
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Prevention Success</h3>
                <p className="text-gray-600 text-sm">
                  Vaccines have eliminated or drastically reduced many childhood diseases that once caused widespread illness and death.
                </p>
              </div>
            </div>
          </div>

          {/* Core Vaccines */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Essential Vaccines for Newborns and Infants
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              These core vaccines are recommended by the CDC and pediatric organizations worldwide 
              to protect children from serious diseases.
            </p>

            <div className="space-y-8">
              {coreVaccines.map((vaccine, index) => {
                const IconComponent = vaccine.icon;
                const colorClasses = {
                  blue: 'from-blue-50/60 to-blue-100/60 border-blue-200',
                  pink: 'from-pink-50/60 to-pink-100/60 border-pink-200',
                  green: 'from-green-50/60 to-green-100/60 border-green-200',
                  purple: 'from-purple-50/60 to-purple-100/60 border-purple-200',
                  orange: 'from-orange-50/60 to-orange-100/60 border-orange-200',
                  teal: 'from-teal-50/60 to-teal-100/60 border-teal-200'
                };
                
                return (
                  <div key={index} className={`bg-gradient-to-r ${colorClasses[vaccine.color as keyof typeof colorClasses]} rounded-2xl border p-8`}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`p-4 rounded-full bg-${vaccine.color}-100 flex-shrink-0`}>
                        <IconComponent className={`w-8 h-8 text-${vaccine.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{vaccine.vaccine}</h3>
                        <p className="text-gray-700 mb-4">{vaccine.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="font-semibold text-gray-800">Number of Doses:</p>
                            <p className="text-gray-600">{vaccine.doses}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Protects Against:</p>
                            <p className="text-gray-600">{vaccine.protectsAgainst}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          Vaccination Schedule
                        </h4>
                        <ul className="space-y-1">
                          {vaccine.ageGiven.map((age, ageIndex) => (
                            <li key={ageIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                              {age}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-600" />
                          Common Side Effects
                        </h4>
                        <ul className="space-y-1">
                          {vaccine.sideEffects.map((effect, effectIndex) => (
                            <li key={effectIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0 mt-2"></div>
                              {effect}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-600" />
                          Why It&apos;s Important
                        </h4>
                        <p className="text-sm text-gray-600 bg-white/60 p-3 rounded-lg">
                          {vaccine.importance}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vaccination Schedule */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Recommended Vaccination Schedule
            </h2>
            <p className="text-gray-600 mb-12 text-center leading-relaxed">
              This timeline shows when vaccines are typically given during the first two years of life.
            </p>

            <div className="space-y-6">
              {vaccinationSchedule.map((visit, index) => {
                const IconComponent = visit.icon;
                return (
                  <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{visit.age}</h3>
                        <p className="text-gray-600 text-sm mb-4">{visit.notes}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-16">
                      {visit.vaccines.map((vaccine, vaccineIndex) => (
                        <div key={vaccineIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{vaccine}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Vaccines */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Additional Important Vaccines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalVaccines.map((vaccine, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50/60 to-blue-50/60 rounded-xl border border-purple-100/40 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{vaccine.vaccine}</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">{vaccine.ageGiven}</p>
                  <p className="text-gray-700 text-sm mb-3">{vaccine.description}</p>
                  <p className="text-gray-600 text-sm mb-2"><strong>Importance:</strong> {vaccine.importance}</p>
                  <p className="text-blue-600 text-xs"><strong>Note:</strong> {vaccine.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Vaccine Safety Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-green-50/60 to-blue-50/60 rounded-xl border border-green-100/40 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-green-100">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{info.topic}</h3>
                    </div>
                    <ul className="space-y-2">
                      {info.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contraindications */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              When Vaccines Should Be Delayed or Avoided
            </h2>
            <div className="space-y-6">
              {contraindications.map((category, index) => (
                <div key={index} className="bg-yellow-50/60 border border-yellow-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.conditions.map((condition, conditionIndex) => (
                      <div key={conditionIndex} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-yellow-700">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Herd Immunity */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Community Protection Through Vaccination
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {herdImmunity.map((concept, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50/60 to-green-50/60 rounded-xl border border-teal-100/40 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{concept.concept}</h3>
                  <p className="text-gray-700 text-sm mb-4">{concept.description}</p>
                  <div className="space-y-1">
                    {concept.examples.map((example, exampleIndex) => (
                      <p key={exampleIndex} className="text-xs text-teal-700 bg-teal-100/60 px-2 py-1 rounded">
                        {example}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Preparing for Vaccination Visits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {preparationTips.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-xl border border-blue-100/40 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-blue-100">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Myths vs Facts */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Common Vaccine Myths vs. Scientific Facts
            </h2>
            <div className="space-y-6">
              {mythsVsFacts.map((item, index) => (
                <div key={index} className="bg-white/60 rounded-xl border border-gray-100/60 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-red-50/60 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <XCircle className="w-5 h-5" />
                        Myth
                      </h4>
                      <p className="text-red-700 text-sm">{item.myth}</p>
                    </div>
                    <div className="bg-green-50/60 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Scientific Fact
                      </h4>
                      <p className="text-green-700 text-sm mb-2">{item.fact}</p>
                      <p className="text-green-600 text-xs"><strong>Evidence:</strong> {item.evidence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Reminders */}
          <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                  Important Reminders for Parents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-700">
                  <div>
                    <h4 className="font-semibold mb-2">Keep Records:</h4>
                    <p className="text-sm mb-4">
                      Maintain an up-to-date vaccination record for school enrollment, travel, and medical care.
                    </p>
                    <h4 className="font-semibold mb-2">Stay on Schedule:</h4>
                    <p className="text-sm">
                      Follow the recommended schedule for optimal protection. Delays can leave children vulnerable.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Discuss Concerns:</h4>
                    <p className="text-sm mb-4">
                      Talk to your pediatrician about any concerns or questions about vaccines.
                    </p>
                    <h4 className="font-semibold mb-2">Trust Science:</h4>
                    <p className="text-sm">
                      Vaccines are one of the greatest public health achievements, preventing millions of deaths annually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Protect Your Baby&apos;s Health
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Stay informed about your baby&apos;s health and development. Learn more about baby care, 
              tracking development, and keeping your little one healthy and safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/baby"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Baby Health Tracking
              </Link>
              <Link 
                href="/blog/pregnancy-medical-checkups"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Medical Checkups Guide
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}