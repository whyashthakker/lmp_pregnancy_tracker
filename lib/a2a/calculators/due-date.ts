import { addDays, differenceInDays, format } from 'date-fns';
import type { DueDateCalculatorParams, DueDateResult } from '../types';

export function calculateDueDate(params: DueDateCalculatorParams): DueDateResult {
  const { lastMenstrualPeriod, conceptionDate, cycleLength = 28 } = params;
  
  let estimatedConceptionDate: Date;
  let estimatedDueDate: Date;
  
  if (conceptionDate) {
    estimatedConceptionDate = new Date(conceptionDate);
    estimatedDueDate = addDays(estimatedConceptionDate, 266); // 38 weeks from conception
  } else if (lastMenstrualPeriod) {
    const lmpDate = new Date(lastMenstrualPeriod);
    // Adjust for cycle length variations
    const ovulationDay = cycleLength - 14;
    estimatedConceptionDate = addDays(lmpDate, ovulationDay);
    estimatedDueDate = addDays(lmpDate, 280); // 40 weeks from LMP
  } else {
    throw new Error('Either lastMenstrualPeriod or conceptionDate must be provided');
  }
  
  const today = new Date();
  const daysSinceConception = differenceInDays(today, estimatedConceptionDate);
  
  // Calculate current pregnancy week (from LMP)
  const daysSinceLMP = lastMenstrualPeriod 
    ? differenceInDays(today, new Date(lastMenstrualPeriod))
    : daysSinceConception + 14; // Add 2 weeks if calculating from conception
    
  const currentWeek = Math.floor(daysSinceLMP / 7);
  const currentDay = daysSinceLMP % 7;
  
  // Determine trimester
  let trimester: number;
  if (currentWeek <= 12) trimester = 1;
  else if (currentWeek <= 27) trimester = 2;
  else trimester = 3;
  
  const daysRemaining = Math.max(0, differenceInDays(estimatedDueDate, today));
  const weeksRemaining = Math.floor(daysRemaining / 7);
  
  return {
    dueDate: format(estimatedDueDate, 'yyyy-MM-dd'),
    currentWeek: Math.max(0, currentWeek),
    currentDay: Math.max(0, currentDay),
    trimester,
    conceptionDate: format(estimatedConceptionDate, 'yyyy-MM-dd'),
    estimatedDate: format(estimatedDueDate, 'yyyy-MM-dd'),
    weeksRemaining: Math.max(0, weeksRemaining),
    daysRemaining: Math.max(0, daysRemaining)
  };
}