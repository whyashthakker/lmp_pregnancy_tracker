import { addDays, differenceInDays, addWeeks } from 'date-fns';
import { BabySize, WeeklyInfo, MilestoneDate, FetalGrowthData } from '../types';
import { babySizes, weeklyNotes } from './data';

// Constants
export const PREGNANCY_DURATION_DAYS = 280; // 40 weeks

/**
 * Calculate the due date based on LMP date
 */
export const calculateDueDate = (lmpDate: Date): Date => {
  return addDays(lmpDate, PREGNANCY_DURATION_DAYS);
};

/**
 * Calculate weeks and days pregnant based on LMP date
 */
export const calculatePregnancyProgress = (lmpDate: Date): { 
  weeksPregnant: number; 
  daysRemaining: number;
  progressPercentage: number;
} => {
  const today = new Date();
  const totalDaysPregnant = differenceInDays(today, lmpDate);
  
  if (totalDaysPregnant < 0) {
    return { weeksPregnant: 0, daysRemaining: 0, progressPercentage: 0 };
  }
  
  const weeksPregnant = Math.floor(totalDaysPregnant / 7);
  const daysRemaining = totalDaysPregnant % 7;
  const progressPercentage = Math.min(100, (totalDaysPregnant / PREGNANCY_DURATION_DAYS) * 100);
  
  return { weeksPregnant, daysRemaining, progressPercentage };
};

/**
 * Get the current trimester based on weeks pregnant
 */
export const getCurrentTrimester = (weeksPregnant: number): number => {
  if (weeksPregnant < 13) return 1;
  if (weeksPregnant < 27) return 2;
  return 3;
};

/**
 * Get baby size information for the current week
 */
export const getBabySize = (weeks: number, days: number = 0): BabySize => {
  // Round to the nearest week for the baby size
  const adjustedWeek = days >= 4 ? weeks + 1 : weeks;
  
  // Default size for early pregnancy (before week 5)
  if (adjustedWeek < 5) {
    return {
      size: "Poppy Seed",
      length: "0.1 mm",
      weight: "< 1 g",
      description: "The fertilized egg is developing into a blastocyst and implanting in the uterus.",
      milestones: ["Implantation occurs", "Cells begin to differentiate"],
      imageUrl: "/images/week4.png"
    };
  }
  
  // Default size for late pregnancy (after week 40)
  if (adjustedWeek > 40) {
    return babySizes[40] || {
      size: "Watermelon",
      length: "51 cm (20 in)",
      weight: "3.4 kg (7.5 lbs)",
      description: "Your baby is fully developed and ready to meet you!",
      milestones: ["Preparing for birth", "Lungs are fully mature"],
      imageUrl: "/images/week40.png"
    };
  }
  
  // Return the size for the current week
  return babySizes[adjustedWeek] || {
    size: "Unknown",
    length: "Unknown",
    weight: "Unknown",
    description: "Information not available for this week.",
    milestones: [],
  };
};

/**
 * Get weekly information for the current week
 */
export const getWeeklyInfo = (weeks: number): WeeklyInfo => {
  // Default info for early pregnancy (before week 5)
  if (weeks < 5) {
    return {
      symptoms: "You might not feel pregnant yet, but your body is beginning to change. Some women experience very light spotting when the fertilized egg attaches to the uterine lining.",
      husbandTips: "Learn about the early stages of pregnancy together with your partner. Be supportive and understanding as she may be anxious about the pregnancy.",
      nutrition: "Start taking prenatal vitamins with folic acid if you haven't already. Focus on a balanced diet rich in fruits, vegetables, and whole grains.",
      exercise: "Continue your regular exercise routine, but avoid overexertion. Walking, swimming, and yoga are excellent choices.",
      developmentHighlights: [
        "The fertilized egg develops into a blastocyst",
        "Implantation in the uterine wall occurs",
        "The placenta begins to form"
      ]
    };
  }
  
  // Default info for late pregnancy (after week 40)
  if (weeks > 40) {
    return weeklyNotes[40] || {
      symptoms: "You may feel very uncomfortable at this stage. Braxton Hicks contractions might increase, and you might notice increased vaginal discharge or the mucus plug coming out.",
      husbandTips: "Be ready to go to the hospital at any time. Keep the hospital bag accessible and the car fueled up. Practice the route to the hospital.",
      nutrition: "Continue eating small, frequent meals. Stay hydrated and focus on nutrient-dense foods.",
      exercise: "Gentle walking can help bring on labor. Listen to your body and rest when needed.",
      developmentHighlights: [
        "Baby is fully developed",
        "Lungs are mature",
        "Baby is getting ready for birth"
      ]
    };
  }
  
  // Return the info for the current week
  return weeklyNotes[weeks] || {
    symptoms: "Information not available for this week.",
    husbandTips: "Information not available for this week.",
    nutrition: "Information not available for this week.",
    exercise: "Information not available for this week.",
    developmentHighlights: []
  };
};

/**
 * Get critical dates and appointments based on LMP date
 */
export const getCriticalDates = (lmpDate: Date): MilestoneDate[] => {
  const dueDate = calculateDueDate(lmpDate);
  
  return [
    {
      date: addWeeks(lmpDate, 8),
      title: "First Prenatal Visit",
      type: "checkup",
      description: "Initial prenatal visit with medical history, physical exam, and dating ultrasound."
    },
    {
      date: addWeeks(lmpDate, 12),
      title: "NT Scan",
      type: "screening",
      description: "Nuchal translucency ultrasound to screen for chromosomal abnormalities."
    },
    {
      date: addWeeks(lmpDate, 16),
      title: "Quad Screen",
      type: "test",
      description: "Blood test to screen for neural tube defects and chromosomal abnormalities."
    },
    {
      date: addWeeks(lmpDate, 20),
      title: "Anatomy Scan",
      type: "screening",
      description: "Detailed ultrasound to check baby's anatomy and development."
    },
    {
      date: addWeeks(lmpDate, 24),
      title: "Glucose Test",
      type: "test",
      description: "Screening for gestational diabetes."
    },
    {
      date: addWeeks(lmpDate, 28),
      title: "Tdap Vaccine",
      type: "milestone",
      description: "Vaccination to protect baby from whooping cough."
    },
    {
      date: addWeeks(lmpDate, 36),
      title: "Group B Strep Test",
      type: "test",
      description: "Screening for group B streptococcus bacteria."
    },
    {
      date: dueDate,
      title: "Due Date",
      type: "milestone",
      description: "Estimated date of delivery."
    }
  ];
};

/**
 * Generate fetal growth data based on gestational age
 */
export const generateFetalGrowthData = (): FetalGrowthData[] => {
  const data: FetalGrowthData[] = [];
  
  // Simplified growth data generation
  for (let week = 8; week <= 40; week += 2) {
    // These are simplified formulas based on general growth patterns
    // In a real app, you would use more accurate medical formulas or data
    const crown_rump_length = week < 13 ? week * 6 : 0; // Only relevant in first trimester
    const biparietal_diameter = week > 12 ? (week - 12) * 2.5 + 20 : 0;
    const head_circumference = week > 12 ? (week - 12) * 8 + 75 : 0;
    const abdominal_circumference = week > 12 ? (week - 12) * 8 + 60 : 0;
    const femur_length = week > 12 ? (week - 12) * 2 + 10 : 0;
    
    // Weight follows an exponential curve
    let weight = 0;
    if (week < 10) {
      weight = week * 2;
    } else if (week < 20) {
      weight = Math.pow(week, 1.8) * 0.8;
    } else {
      weight = Math.pow(week - 10, 2.1) * 15 + 300;
    }
    
    data.push({
      week,
      day: 0,
      crown_rump_length,
      biparietal_diameter,
      head_circumference,
      abdominal_circumference,
      femur_length,
      weight: Math.round(weight)
    });
  }
  
  return data;
};

/**
 * Extract numeric value from a string (for form processing)
 */
export const extractNumeric = (str: string): number => {
  const match = str.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

/**
 * Calculate the adjusted success rate based on weeks pregnant and selected factors
 */
export const calculateAdjustedSuccessRate = (weeksPregnant: number): number => {
  // Calculate base success rate based on weeks
  let baseRate = 0;
  if (weeksPregnant < 6) baseRate = 60;
  else if (weeksPregnant < 8) baseRate = 75;
  else if (weeksPregnant < 10) baseRate = 85;
  else if (weeksPregnant < 12) baseRate = 90;
  else if (weeksPregnant < 14) baseRate = 95;
  else if (weeksPregnant < 20) baseRate = 98;
  else baseRate = 99.5; // After 20 weeks

  return baseRate;
}; 