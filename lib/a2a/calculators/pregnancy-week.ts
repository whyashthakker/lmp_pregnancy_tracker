import { addDays, differenceInDays } from 'date-fns';
import type { PregnancyWeekParams, PregnancyWeekResult } from '../types';

const WEEK_DESCRIPTIONS: Record<number, string> = {
  4: "The embryo is implanting in the uterine wall",
  5: "Baby's heart begins to develop",
  6: "Neural tube formation begins",
  7: "Limb buds appear",
  8: "Basic facial features form",
  9: "Fingers and toes develop",
  10: "All vital organs are formed",
  11: "Baby can swallow and urinate",
  12: "Reflexes begin to develop",
  13: "Second trimester begins - morning sickness often improves",
  14: "Baby's sex can potentially be determined",
  15: "Baby begins to hear",
  16: "You might feel first movements",
  17: "Baby's skeleton is hardening",
  18: "Baby's hearing is developing",
  19: "Vernix (protective coating) covers baby",
  20: "Halfway point! Anatomy scan time",
  21: "Baby's movements become more coordinated",
  22: "Baby's taste buds are developing",
  23: "Baby can hear outside sounds",
  24: "Baby's lungs are developing",
  25: "Baby responds to familiar voices",
  26: "Baby's eyes begin to open",
  27: "Third trimester begins",
  28: "Baby's brain develops rapidly",
  29: "Baby's bones are hardening",
  30: "Baby's brain and eyes develop further",
  31: "Baby's movements may feel different",
  32: "Baby practices breathing movements",
  33: "Baby's immune system develops",
  34: "Baby's central nervous system matures",
  35: "Baby's kidneys are fully developed",
  36: "Baby is considered full-term soon",
  37: "Baby is considered early term",
  38: "Baby is full-term",
  39: "Baby's brain continues developing",
  40: "Due date - baby is ready to be born!"
};

const MILESTONES: Record<number, string[]> = {
  4: ["Missed period", "Pregnancy test positive"],
  8: ["First prenatal appointment", "Morning sickness may begin"],
  12: ["End of first trimester", "Miscarriage risk decreases significantly"],
  16: ["You might feel baby's first movements"],
  20: ["Anatomy scan", "Halfway point", "Gender reveal possible"],
  24: ["Viability milestone", "Glucose screening test"],
  28: ["Third trimester begins", "Baby shower planning"],
  32: ["Baby shower time", "Birth classes recommended"],
  36: ["Baby is considered early term", "Hospital bag should be packed"],
  37: ["Baby is full-term", "Ready for birth"],
  40: ["Due date", "Baby can arrive any day"]
};

export function calculatePregnancyWeek(params: PregnancyWeekParams): PregnancyWeekResult {
  const { lastMenstrualPeriod, dueDate } = params;
  
  let lmpDate: Date;
  
  if (lastMenstrualPeriod) {
    lmpDate = new Date(lastMenstrualPeriod);
  } else if (dueDate) {
    // Calculate LMP from due date (subtract 280 days)
    lmpDate = addDays(new Date(dueDate), -280);
  } else {
    throw new Error('Either lastMenstrualPeriod or dueDate must be provided');
  }
  
  const today = new Date();
  const daysSinceLMP = differenceInDays(today, lmpDate);
  
  const currentWeek = Math.floor(daysSinceLMP / 7);
  const currentDay = daysSinceLMP % 7;
  
  // Determine trimester
  let trimester: number;
  if (currentWeek <= 12) trimester = 1;
  else if (currentWeek <= 27) trimester = 2;
  else trimester = 3;
  
  // Get week description and milestones
  const weekDescription = WEEK_DESCRIPTIONS[currentWeek] || "Continued development and growth";
  const milestones = MILESTONES[currentWeek] || [];
  
  // Development info based on trimester
  let developmentInfo: string;
  if (trimester === 1) {
    developmentInfo = "Critical organ development period. Take prenatal vitamins and avoid harmful substances.";
  } else if (trimester === 2) {
    developmentInfo = "Rapid growth period. You may start feeling movement and have more energy.";
  } else {
    developmentInfo = "Final preparation for birth. Baby is gaining weight and lungs are maturing.";
  }
  
  return {
    currentWeek: Math.max(0, currentWeek),
    currentDay: Math.max(0, currentDay),
    trimester,
    weekDescription,
    milestones,
    developmentInfo
  };
}