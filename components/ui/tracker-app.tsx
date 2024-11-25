"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInDays, addDays, format, addWeeks, isValid, parse } from 'date-fns';
import { Trophy, Heart, Calendar, Baby, Clock, Star, CalendarDays } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';

interface BabySize {
  size: string;
  length: string;
  commits: number;
}

interface WeeklyInfo {
  symptoms: string;
  husbandTips: string;
}

interface BabySizes {
  [key: number]: BabySize;
}

interface WeeklyNotes {
  [key: number]: WeeklyInfo;
}

interface MilestoneDate {
  date: Date;
  title: string;
  type: 'checkpoint' | 'boss' | 'quest';
  description: string;
}

const PregnancyTracker: React.FC = () => {
  // Constants
  const DEFAULT_LMP = new Date('2024-10-14');

  const [lmpDate, setLmpDate] = useState<Date>(DEFAULT_LMP);
  const [lmpInput, setLmpInput] = useState<string>('2024-10-14');
  const [showDateError, setShowDateError] = useState<boolean>(false);

  const TODAY: Date = new Date();
  const PREGNANCY_DURATION: number = 280;
  const DUE_DATE: Date = addDays(lmpDate, PREGNANCY_DURATION);

  // Calculate current progress
  const daysPregnant: number = differenceInDays(TODAY, lmpDate);
  const weeksPregnant: number = Math.floor(daysPregnant / 7);
  const daysRemaining: number = Math.floor(daysPregnant % 7);
  
  const getBabySize = (weeks: number): BabySize => {
    if (weeks >= 40) {
      return { 
        size: "👶 Congratulations! You have a baby!", 
        length: "18-22 inches", 
        commits: 40 
      };
    }
  
    const sizes: BabySizes = {
      1: { size: "Poppy seed", length: "0.01 inches", commits: 1 },
      2: { size: "Caraway seed", length: "0.02 inches", commits: 1 },
      3: { size: "Sesame seed", length: "0.03 inches", commits: 2 },
      4: { size: "Poppy seed", length: "0.04 inches", commits: 3 },
      5: { size: "Sesame seed", length: "0.05 inches", commits: 4 },
      6: { size: "Lentil", length: "0.08 inches", commits: 5 },
      7: { size: "Blueberry", length: "0.3 inches", commits: 6 },
      8: { size: "Raspberry", length: "0.6 inches", commits: 7 },
      9: { size: "Green olive", length: "0.9 inches", commits: 8 },
      10: { size: "Prune", length: "1.2 inches", commits: 9 },
      11: { size: "Lime", length: "1.6 inches", commits: 10 },
      12: { size: "Plum", length: "2.1 inches", commits: 11 },
      13: { size: "Peach", length: "2.9 inches", commits: 12 },
      14: { size: "Lemon", length: "3.4 inches", commits: 13 },
      15: { size: "Apple", length: "4.0 inches", commits: 14 },
      16: { size: "Avocado", length: "4.6 inches", commits: 15 },
      17: { size: "Pear", length: "5.1 inches", commits: 16 },
      18: { size: "Sweet Potato", length: "5.6 inches", commits: 17 },
      19: { size: "Mango", length: "6.0 inches", commits: 18 },
      20: { size: "Banana", length: "6.5 inches", commits: 19 },
      21: { size: "Carrot", length: "7.2 inches", commits: 20 },
      22: { size: "Corn", length: "7.6 inches", commits: 21 },
      23: { size: "Large Mango", length: "8.0 inches", commits: 22 },
      24: { size: "Cantaloupe", length: "8.4 inches", commits: 23 },
      25: { size: "Cauliflower", length: "8.8 inches", commits: 24 },
      26: { size: "Lettuce", length: "9.2 inches", commits: 25 },
      27: { size: "Rutabaga", length: "9.6 inches", commits: 26 },
      28: { size: "Eggplant", length: "10.2 inches", commits: 27 },
      29: { size: "Butternut Squash", length: "10.8 inches", commits: 28 },
      30: { size: "Cabbage", length: "11.4 inches", commits: 29 },
      31: { size: "Coconut", length: "11.8 inches", commits: 30 },
      32: { size: "Jicama", length: "12.4 inches", commits: 31 },
      33: { size: "Pineapple", length: "13.2 inches", commits: 32 },
      34: { size: "Cantaloupe", length: "14.0 inches", commits: 33 },
      35: { size: "Honeydew Melon", length: "14.8 inches", commits: 34 },
      36: { size: "Large Romaine Lettuce", length: "15.7 inches", commits: 35 },
      37: { size: "Winter Melon", length: "16.5 inches", commits: 36 },
      38: { size: "Pumpkin", length: "17.2 inches", commits: 37 },
      39: { size: "Watermelon", length: "18.0 inches", commits: 38 },
      40: { size: "Small Pumpkin 🎃", length: "18.9-20.9 inches", commits: 39 }
    };
  
    // For early weeks
    if (weeks < 1) {
      return { 
        size: "The journey begins! 🌟", 
        length: "Not yet visible", 
        commits: 1 
      };
    }
  
    // For weeks beyond 40 but before birth
    if (weeks > 40) {
      return { 
        size: "Ready to meet you! 👶", 
        length: "18-22 inches", 
        commits: 40 
      };
    }
  
    return sizes[weeks] || { 
      size: "Loading size data...", 
      length: "measurement pending", 
      commits: 1 
    };
  };

  const getWeeklyInfo = (weeks: number): WeeklyInfo => {
    const weeklyNotes: WeeklyNotes = {
      4: {
        symptoms: "Missed period, fatigue, mild cramping",
        husbandTips: "🎮 QUEST: Emotional Support\n- Stock up on her favorite snacks\n- Take over some household chores\n- Be extra patient with mood swings"
      },
      5: {
        symptoms: "Morning sickness may begin, tender breasts",
        husbandTips: "🎮 QUEST: Morning Sickness Support\n- Keep crackers by the bedside\n- Learn to cook mild, non-spicy meals\n- Handle strong-smelling tasks"
      },
      6: {
        symptoms: "Frequent urination, mood swings",
        husbandTips: "🎮 QUEST: Comfort Provider\n- Plan bathroom breaks during outings\n- Start pregnancy journal together\n- Research pregnancy apps"
      },
      7: {
        symptoms: "Morning sickness, food aversions/cravings",
        husbandTips: "🎮 QUEST: Food Manager\n- Be ready for midnight snack runs\n- Keep track of food aversions\n- Make sure she stays hydrated"
      },
      8: {
        symptoms: "Fatigue, heightened sense of smell",
        husbandTips: "🎮 QUEST: Environment Master\n- Use unscented cleaning products\n- Create a relaxing sleep environment\n- Take over cooking if smells bother her"
      },
      9: {
        symptoms: "Mood swings, morning sickness peak",
        husbandTips: "🎮 QUEST: Emotional Guardian\n- Practice active listening\n- Plan relaxing activities together\n- Start planning nursery design"
      },
      10: {
        symptoms: "Less fatigue, possible heartburn",
        husbandTips: "🎮 QUEST: Health Support\n- Stock up on antacids (doctor-approved)\n- Plan gentle exercise together\n- Start researching birthing classes"
      },
      11: {
        symptoms: "Decreased nausea, increased energy",
        husbandTips: "🎮 QUEST: Activity Partner\n- Plan short, gentle walks together\n- Start pregnancy photography\n- Research baby gear together"
      },
      12: {
        symptoms: "Food cravings, round ligament pain",
        husbandTips: "🎮 QUEST: Comfort Champion\n- Learn pregnancy massage techniques\n- Help with stretching exercises\n- Start planning baby shower"
      },
      13: {
        symptoms: "Increased energy, visible bump forming",
        husbandTips: "🎮 QUEST: Documentation Master\n- Take weekly bump photos\n- Start planning maternity photoshoot\n- Research childbirth classes"
      }
    };
    return weeklyNotes[weeks] || {
      symptoms: "Consult your healthcare provider",
      husbandTips: "🎮 QUEST: Support Partner\n- Attend doctor appointments\n- Keep learning about pregnancy\n- Stay supportive"
    };
  };

  const getCriticalDates = (lmpDate: Date): MilestoneDate[] => {
    return [
      {
        date: addWeeks(lmpDate, 6),
        title: "⚔️ First Heartbeat Quest",
        type: 'quest',
        description: "Baby's heart starts beating"
      },
      {
        date: addWeeks(lmpDate, 8),
        title: "🛡️ First Prenatal Checkpoint",
        type: 'checkpoint',
        description: "First major health check"
      },
      {
        date: addWeeks(lmpDate, 12),
        title: "🏆 First Trimester Boss",
        type: 'boss',
        description: "Major milestone reached"
      },
      {
        date: addWeeks(lmpDate, 20),
        title: "🎯 Gender Reveal Quest",
        type: 'quest',
        description: "Anatomy scan available"
      },
      {
        date: addWeeks(lmpDate, 24),
        title: "🛡️ Glucose Challenge",
        type: 'checkpoint',
        description: "Health check point"
      },
      {
        date: addWeeks(lmpDate, 27),
        title: "🏆 Second Trimester Boss",
        type: 'boss',
        description: "Entering final trimester"
      },
      {
        date: addWeeks(lmpDate, 36),
        title: "⚔️ Weekly Quest Chain",
        type: 'quest',
        description: "Weekly check-ups begin"
      },
      {
        date: DUE_DATE,
        title: "👑 FINAL BOSS BATTLE",
        type: 'boss',
        description: "The big day!"
      }
    ];
  };

  const progressPercentage: number = (daysPregnant / PREGNANCY_DURATION) * 100;

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLmpInput(event.target.value);
    const parsedDate = parse(event.target.value, 'yyyy-MM-dd', new Date());
    
    if (isValid(parsedDate)) {
      setLmpDate(parsedDate);
      setShowDateError(false);
    } else {
      setShowDateError(true);
    }
  };

  const resetToDefault = () => {
    setLmpDate(DEFAULT_LMP);
    setLmpInput('2024-10-14');
    setShowDateError(false);
  };

  const DateInput = () => (
    <Card className="mb-4">
      <CardContent className="p-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 min-w-fit">
            <CalendarDays className="text-blue-500" size={16} />
            <Input
              type="date"
              value={lmpInput}
              onChange={handleDateChange}
              className="text-xs h-8"
              max={format(TODAY, 'yyyy-MM-dd')}
            />
            <Button
              onClick={resetToDefault}
              variant="ghost"
              size="sm"
              className="h-8 px-2"
            >
              Reset
            </Button>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>LMP: {format(lmpDate, 'MMM dd, yyyy')}</span>
            <span>Due: {format(DUE_DATE, 'MMM dd, yyyy')}</span>
            {showDateError && (
              <span className="text-rose-500">Invalid date</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );


  return (
    <div className="p-4 max-w-5xl mx-auto space-y-6">
      <style jsx global>{`
        @keyframes pulse {
            0% { transform: scale(1.1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1.1); }
        }
        
        @keyframes subtle-glow {
          0% { box-shadow: 0 0 2px #6366f1; }
          50% { box-shadow: 0 0 8px #6366f1; }
          100% { box-shadow: 0 0 2px #6366f1; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }

        .font-pixel {
          font-family: 'Press Start 2P', system-ui, sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }

        .card-game {
          background: linear-gradient(145deg, #ffffff, #f3f4f6);
          border: 1px solid #e5e7eb;
          animation: subtle-glow 3s infinite;
          transition: all 0.3s ease;
        }

        .card-game:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }

        .progress-bar {
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }

        .milestone-text {
          font-family: 'Press Start 2P', monospace;
          text-transform: uppercase;
          font-size: 0.7rem;
          line-height: 1.4;
        }

        .milestone-active {
          animation: float 3s ease-in-out infinite;
        }

        .timeline-dot {
          transition: all 0.3s ease;
        }

        .timeline-dot:hover {
          transform: scale(1.2);
        }

        .progress-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            transparent 75%
            );
            background-size: 20px 20px;
            animation: progress-stripe 1s linear infinite;
        }

        @keyframes progress-stripe {
            0% {
            background-position: 0 0;
            }
            100% {
            background-position: 20px 0;
            }
        }
      `}</style>


<DateInput />

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Card 1: Combined Level & Quest Progress */}
  <Card className="card-game">
    <CardHeader className="border-b border-indigo-100">
      <CardTitle className="flex items-center gap-2 text-indigo-600 milestone-text">
        <Trophy className="text-amber-500" size={20} />
        Progress & Stats
      </CardTitle>
    </CardHeader>
    <CardContent className="mt-4 space-y-6">
      {/* Level Info */}
      <div>
        <p className="text-2xl font-bold text-indigo-600 milestone-text">LVL {weeksPregnant}</p>
        <p className="text-sm text-indigo-400 font-pixel">+{daysRemaining} days EXP</p>
        <p className="text-sm text-gray-500 font-pixel">{daysPregnant} days logged</p>
      </div>

      {/* Progress Bar Section */}
      <div className="w-full bg-gray-100 rounded-lg p-3 space-y-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-indigo-600 font-pixel">EXP Progress</span>
          <span className="text-sm text-indigo-600 font-pixel">{`${daysPregnant}/${PREGNANCY_DURATION} days`}</span>
        </div>
        <div className="w-full bg-indigo-100 rounded-full h-6 p-1 relative overflow-hidden">
          <div 
            className="progress-bar h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
            style={{ width: `${progressPercentage}%` }}
          >
            <span className="text-xs text-white font-pixel drop-shadow-lg">{progressPercentage.toFixed(1)}%</span>
          </div>
          {[25, 50, 75].map((marker) => (
            <div
              key={marker}
              className="absolute top-0 bottom-0 w-px bg-indigo-200"
              style={{ left: `${marker}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between px-1 mt-1">
          <span className="text-xs text-gray-500 font-pixel">First</span>
          <span className="text-xs text-gray-500 font-pixel">Second</span>
          <span className="text-xs text-gray-500 font-pixel">Third</span>
          <span className="text-xs text-gray-500 font-pixel">Final</span>
        </div>
      </div>

    {/* Progress Stats */}
    <div className="grid grid-cols-1 gap-4">
    <div className="bg-indigo-50 rounded-lg p-4">
        <div className="text-sm text-indigo-600 font-pixel mb-2">Time Until Boss Battle</div>
        <div className="space-y-3">
        <div className="flex items-center justify-between">
            <span className="text-xs text-indigo-400 font-pixel">Months</span>
            <span className="text-lg text-indigo-700 font-pixel">
            {Math.ceil((PREGNANCY_DURATION - daysPregnant) / 30)} to go
            </span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-xs text-indigo-400 font-pixel">Weeks</span>
            <span className="text-lg text-indigo-700 font-pixel">
            {40 - weeksPregnant} to go
            </span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-xs text-indigo-400 font-pixel">Days</span>
            <span className="text-lg text-indigo-700 font-pixel">
            {PREGNANCY_DURATION - daysPregnant} to go
            </span>
        </div>
        </div>
    </div>
    </div>
    </CardContent>
  </Card>

  {/* Card 2: Quest Timeline */}
  <Card className="card-game">
    <CardHeader className="border-b border-indigo-100">
      <CardTitle className="flex items-center gap-2 text-indigo-600 milestone-text">
        <Calendar className="text-blue-500" size={20} />
        Quest Timeline
      </CardTitle>
    </CardHeader>
    <CardContent className="mt-4 space-y-4">
      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-indigo-100"></div>
        <div className="space-y-4">
          {getCriticalDates(lmpDate).map((milestone, idx) => {
            const isPast = milestone.date <= TODAY;
            const isToday = differenceInDays(milestone.date, TODAY) === 0;
            const isFuture = milestone.date > TODAY;

            return (
              <div 
                key={idx}
                className={`flex items-center gap-3 transition-all duration-300 ${
                  isPast ? 'opacity-50' : 
                  isToday ? 'milestone-active opacity-100' : 
                  isFuture ? 'opacity-75' : ''
                }`}
              >
                <div 
                  className={`timeline-dot w-4 h-4 rounded-full transition-all duration-300 ${
                    milestone.type === 'boss' ? 'bg-purple-500' :
                    milestone.type === 'checkpoint' ? 'bg-emerald-500' : 'bg-amber-500'
                  } ${
                    isToday ? 'ring-2 ring-offset-2 ring-indigo-300 scale-125' : ''
                  }`}
                ></div>
                <div>
                  <p className={`milestone-text ${
                    isToday ? 'text-indigo-600 font-bold' : 'text-indigo-500'
                  }`}>
                    {milestone.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {format(milestone.date, 'MMM dd')}
                    {isToday && " (Today!)"}
                  </p>
                  {isToday && (
                    <p className="text-xs text-indigo-400 mt-1">
                      {milestone.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Card 3: Combined Status & Growth */}
  <Card className="card-game">
    <CardHeader className="border-b border-indigo-100">
      <CardTitle className="flex items-center gap-2 text-indigo-600 milestone-text">
        <Baby className="text-pink-500" size={20} />
        Status & Growth
      </CardTitle>
    </CardHeader>
    <CardContent className="mt-4 space-y-6">
      {/* Growth Stats */}
      <div>
        <p className="text-xl font-bold text-pink-500 milestone-text">{getBabySize(weeksPregnant).size}</p>
        <p className="text-sm text-gray-500 font-pixel">Size: {getBabySize(weeksPregnant).length}</p>
        <div className="mt-2 bg-gray-50 p-2 rounded-lg">
          <div className="flex gap-1 my-2">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-sm transform transition-all duration-300 ${
                  i < weeksPregnant 
                    ? 'bg-green-500' 
                    : 'bg-gray-200'
                } ${
                  i === weeksPregnant - 1 
                    ? 'scale-125 ring-2 ring-green-300' 
                    : ''
                }`}
                style={{
                  opacity: i < weeksPregnant ? ((i + 1) / weeksPregnant) : 0.3,
                  animation: i === weeksPregnant - 1 
                    ? `pulse 1.5s ease-in-out infinite`
                    : 'none'
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-400 font-pixel">Week {weeksPregnant}/40</span>
            <span className="text-xs text-gray-400 font-pixel">{Math.round((weeksPregnant/40) * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Mom's Status */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="text-rose-500" size={16} />
          <span className="text-sm font-bold text-rose-500 font-pixel">Mom&apos;s Status</span>
        </div>
        <p className="text-gray-600 font-pixel">
          {getWeeklyInfo(weeksPregnant).symptoms}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {getWeeklyInfo(weeksPregnant).symptoms.split(', ').map((symptom, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-rose-50 text-rose-500 rounded-md text-xs font-pixel"
            >
              {symptom}
            </span>
          ))}
        </div>
      </div>

      {/* Weekly Side Quests */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="text-amber-500" size={16} />
          <span className="text-sm font-bold text-amber-500 font-pixel">Weekly Quests</span>
        </div>
        <div className="bg-amber-50 p-3 rounded-lg">
          <pre className="text-sm text-amber-700 whitespace-pre-wrap font-pixel leading-relaxed">
            {getWeeklyInfo(weeksPregnant).husbandTips}
          </pre>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 font-pixel">
          <Star className="text-amber-500" size={14} />
          <span>Complete all quests for bonus EXP!</span>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
</div>
);
};

export default PregnancyTracker;