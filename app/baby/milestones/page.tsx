"use client";

import { useState, useEffect } from "react";
import { format, differenceInHours, addDays, addWeeks } from "date-fns";

interface Milestone {
  id: string;
  title: string;
  description: string;
  category: "physical" | "cognitive" | "social" | "language";
  minWeeks: number;
  maxWeeks: number;
  averageWeeks: number;
  watchWindow: number; // days to watch before and after average
  tips: string[];
  importance: "high" | "medium" | "low";
}

const milestones: Milestone[] = [
  {
    id: "first-smile",
    title: "First Social Smile",
    description: "Baby smiles in response to you, not just gas!",
    category: "social",
    minWeeks: 4,
    maxWeeks: 8,
    averageWeeks: 6,
    watchWindow: 7,
    tips: [
      "Talk and smile at your baby frequently",
      "Make eye contact during feeding and play",
      "Use animated facial expressions",
      "Be patient - it's coming!"
    ],
    importance: "high"
  },
  {
    id: "holds-head-up",
    title: "Holds Head Up",
    description: "Baby can lift and hold their head up during tummy time",
    category: "physical",
    minWeeks: 2,
    maxWeeks: 6,
    averageWeeks: 4,
    watchWindow: 5,
    tips: [
      "Daily tummy time (start with 2-3 minutes)",
      "Get down to baby's level during tummy time",
      "Use colorful toys to encourage lifting head",
      "Practice on your chest for comfort"
    ],
    importance: "high"
  },
  {
    id: "laughs-out-loud",
    title: "First Laugh",
    description: "Baby laughs out loud in response to play",
    category: "social",
    minWeeks: 12,
    maxWeeks: 20,
    averageWeeks: 16,
    watchWindow: 10,
    tips: [
      "Play peek-a-boo games",
      "Make silly faces and sounds",
      "Tickle gently (especially feet)",
      "Be animated and enthusiastic"
    ],
    importance: "high"
  },
  {
    id: "rolls-over",
    title: "Rolls Over",
    description: "Baby rolls from tummy to back or back to tummy",
    category: "physical",
    minWeeks: 12,
    maxWeeks: 24,
    averageWeeks: 18,
    watchWindow: 14,
    tips: [
      "Ensure safe, flat surface for practice",
      "Never leave baby unattended on elevated surfaces",
      "Encourage with toys placed to one side",
      "Celebrate attempts, not just success"
    ],
    importance: "high"
  },
  {
    id: "sits-without-support",
    title: "Sits Without Support",
    description: "Baby can sit up independently for several minutes",
    category: "physical",
    minWeeks: 20,
    maxWeeks: 32,
    averageWeeks: 26,
    watchWindow: 14,
    tips: [
      "Practice supported sitting daily",
      "Use pillows around baby for safety",
      "Encourage reaching for toys while sitting",
      "Start with short periods and increase gradually"
    ],
    importance: "high"
  },
  {
    id: "first-word",
    title: "First Word",
    description: "Baby says their first recognizable word (mama, dada, etc.)",
    category: "language",
    minWeeks: 36,
    maxWeeks: 60,
    averageWeeks: 48,
    watchWindow: 21,
    tips: [
      "Talk to baby constantly throughout the day",
      "Repeat simple words like 'mama' and 'dada'",
      "Read books together daily",
      "Respond enthusiastically to all vocalizations"
    ],
    importance: "high"
  },
  {
    id: "crawls",
    title: "Crawls",
    description: "Baby moves forward on hands and knees",
    category: "physical",
    minWeeks: 28,
    maxWeeks: 40,
    averageWeeks: 34,
    watchWindow: 14,
    tips: [
      "Baby-proof your home before this happens",
      "Create safe spaces for exploration",
      "Encourage with toys just out of reach",
      "Get down and crawl with them!"
    ],
    importance: "high"
  },
  {
    id: "pulls-to-stand",
    title: "Pulls to Stand",
    description: "Baby pulls themselves up to standing position",
    category: "physical",
    minWeeks: 32,
    maxWeeks: 48,
    averageWeeks: 40,
    watchWindow: 14,
    tips: [
      "Lower crib mattress before this milestone",
      "Provide stable furniture for pulling up",
      "Baby-proof sharp corners and edges",
      "Watch for falls - stay close"
    ],
    importance: "high"
  },
  {
    id: "first-steps",
    title: "First Independent Steps",
    description: "Baby takes first steps without support",
    category: "physical",
    minWeeks: 40,
    maxWeeks: 72,
    averageWeeks: 52,
    watchWindow: 21,
    tips: [
      "Encourage cruising along furniture",
      "Use push toys for confidence",
      "Create safe walking spaces",
      "Celebrate every wobbly attempt"
    ],
    importance: "high"
  },
  {
    id: "says-mama-dada",
    title: "Says 'Mama' or 'Dada' Meaningfully",
    description: "Baby says mama or dada and means you specifically",
    category: "language",
    minWeeks: 40,
    maxWeeks: 64,
    averageWeeks: 52,
    watchWindow: 21,
    tips: [
      "Point to yourself when saying 'mama' or 'dada'",
      "Use these words frequently in context",
      "Respond excitedly when they say it",
      "Be consistent with which parent is which word"
    ],
    importance: "high"
  },
  {
    id: "follows-simple-commands",
    title: "Follows Simple Commands",
    description: "Baby follows simple instructions like 'come here' or 'give me'",
    category: "cognitive",
    minWeeks: 48,
    maxWeeks: 72,
    averageWeeks: 60,
    watchWindow: 21,
    tips: [
      "Start with gestures combined with words",
      "Use simple, one-step commands",
      "Be consistent with your requests",
      "Praise when they follow instructions"
    ],
    importance: "medium"
  },
  {
    id: "walks-confidently",
    title: "Walks Confidently",
    description: "Baby walks steadily without falling frequently",
    category: "physical",
    minWeeks: 52,
    maxWeeks: 80,
    averageWeeks: 64,
    watchWindow: 21,
    tips: [
      "Provide plenty of safe walking practice",
      "Avoid shoes indoors - barefoot is best",
      "Create obstacle courses with pillows",
      "Take walks outside together"
    ],
    importance: "medium"
  },
  {
    id: "says-several-words",
    title: "Says Several Words",
    description: "Baby has a vocabulary of 10+ recognizable words",
    category: "language",
    minWeeks: 64,
    maxWeeks: 88,
    averageWeeks: 72,
    watchWindow: 21,
    tips: [
      "Name everything you see throughout the day",
      "Read picture books and label items",
      "Sing songs with repetitive words",
      "Don't worry about perfect pronunciation"
    ],
    importance: "medium"
  },
  {
    id: "runs",
    title: "Runs",
    description: "Baby can run (though may be wobbly)",
    category: "physical",
    minWeeks: 72,
    maxWeeks: 104,
    averageWeeks: 88,
    watchWindow: 28,
    tips: [
      "Provide safe spaces for running practice",
      "Play chase games in safe areas",
      "Expect falls - have soft surfaces",
      "Join in the fun - run with them!"
    ],
    importance: "medium"
  },
  {
    id: "two-word-phrases",
    title: "Two-Word Phrases",
    description: "Baby combines words like 'more milk' or 'bye-bye daddy'",
    category: "language",
    minWeeks: 78,
    maxWeeks: 104,
    averageWeeks: 91,
    watchWindow: 28,
    tips: [
      "Model two-word combinations",
      "Expand on their single words",
      "Use phrases consistently",
      "Be patient with their attempts"
    ],
    importance: "medium"
  },
  {
    id: "jumps-with-both-feet",
    title: "Jumps with Both Feet",
    description: "Baby can jump with both feet leaving the ground",
    category: "physical",
    minWeeks: 96,
    maxWeeks: 130,
    averageWeeks: 113,
    watchWindow: 28,
    tips: [
      "Demonstrate jumping yourself",
      "Use trampolines or bouncy surfaces",
      "Make it a fun game with music",
      "Ensure safe landing surfaces"
    ],
    importance: "low"
  },
  {
    id: "potty-training-ready",
    title: "Shows Potty Training Readiness",
    description: "Baby shows signs they're ready for potty training",
    category: "cognitive",
    minWeeks: 104,
    maxWeeks: 156,
    averageWeeks: 130,
    watchWindow: 35,
    tips: [
      "Watch for signs of readiness",
      "Introduce potty vocabulary",
      "Let them observe bathroom routines",
      "Don't rush - readiness varies greatly"
    ],
    importance: "medium"
  }
];

interface CountdownInfo {
  status: "upcoming" | "active" | "overdue" | "completed";
  timeToStart: number; // hours until watch window starts
  timeInWindow: number; // hours until watch window ends
  watchStartDate: Date;
  watchEndDate: Date;
  averageDate: Date;
  hoursToAverage: number;
}

export default function BabyMilestonePage() {
  const [birthDate, setBirthDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [savedBirthDate, setSavedBirthDate] = useState<Date | null>(null);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Load saved birth date from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("babyBirthDate");
    if (saved) {
      const parsedDate = new Date(saved);
      setSavedBirthDate(parsedDate);
      setBirthDate(format(parsedDate, "yyyy-MM-dd"));
    }
  }, []);

  const handleSaveBirthDate = () => {
    if (birthDate) {
      const date = new Date(birthDate);
      setSavedBirthDate(date);
      localStorage.setItem("babyBirthDate", date.toISOString());
    }
  };

  const calculateMilestoneInfo = (milestone: Milestone): CountdownInfo => {
    if (!savedBirthDate) {
      return {
        status: "upcoming",
        timeToStart: 0,
        timeInWindow: 0,
        watchStartDate: new Date(),
        watchEndDate: new Date(),
        averageDate: new Date(),
        hoursToAverage: 0
      };
    }

    const averageDate = addWeeks(savedBirthDate, milestone.averageWeeks);
    const watchStartDate = addDays(averageDate, -milestone.watchWindow);
    const watchEndDate = addDays(averageDate, milestone.watchWindow);
    
    const hoursToStart = differenceInHours(watchStartDate, currentTime);
    const hoursToEnd = differenceInHours(watchEndDate, currentTime);
    const hoursToAverage = differenceInHours(averageDate, currentTime);

    let status: CountdownInfo["status"];
    if (hoursToStart > 0) {
      status = "upcoming";
    } else if (hoursToEnd > 0) {
      status = "active";
    } else if (hoursToAverage > -8760) { // Within a year past expected
      status = "overdue";
    } else {
      status = "completed";
    }

    return {
      status,
      timeToStart: Math.max(0, hoursToStart),
      timeInWindow: Math.max(0, hoursToEnd),
      watchStartDate,
      watchEndDate,
      averageDate,
      hoursToAverage
    };
  };

  const formatTimeRemaining = (hours: number): string => {
    if (hours < 1) {
      const minutes = Math.floor(hours * 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
    
    if (hours < 24) {
      const wholeHours = Math.floor(hours);
      const minutes = Math.floor((hours - wholeHours) * 60);
      return `${wholeHours}h ${minutes}m`;
    }
    
    const days = Math.floor(hours / 24);
    const remainingHours = Math.floor(hours % 24);
    return `${days} day${days !== 1 ? 's' : ''} ${remainingHours}h`;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "physical": return "bg-blue-100 text-blue-800";
      case "cognitive": return "bg-purple-100 text-purple-800";
      case "social": return "bg-pink-100 text-pink-800";
      case "language": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "border-gray-300 bg-gray-50";
      case "active": return "border-yellow-400 bg-yellow-50 shadow-lg";
      case "overdue": return "border-red-400 bg-red-50";
      case "completed": return "border-green-400 bg-green-50";
      default: return "border-gray-300 bg-gray-50";
    }
  };

  const activeMilestones = milestones
    .map(milestone => ({ milestone, info: calculateMilestoneInfo(milestone) }))
    .filter(({ info }) => info.status === "active")
    .sort((a, b) => a.info.hoursToAverage - b.info.hoursToAverage);

  const upcomingMilestones = milestones
    .map(milestone => ({ milestone, info: calculateMilestoneInfo(milestone) }))
    .filter(({ info }) => info.status === "upcoming")
    .sort((a, b) => a.info.timeToStart - b.info.timeToStart)
    .slice(0, 5);

  const overdueMilestones = milestones
    .map(milestone => ({ milestone, info: calculateMilestoneInfo(milestone) }))
    .filter(({ info }) => info.status === "overdue")
    .sort((a, b) => b.info.hoursToAverage - a.info.hoursToAverage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Baby Milestone Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never miss a precious moment! Track your baby&apos;s development milestones with real-time countdowns 
            and preparation tips for the first 3 years.
          </p>
        </div>

        {/* Birth Date Input */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Setup Your Baby&apos;s Profile</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                Baby&apos;s Date of Birth
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                max={format(new Date(), "yyyy-MM-dd")}
              />
            </div>
            <button
              onClick={handleSaveBirthDate}
              disabled={!birthDate}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Save & Track Milestones
            </button>
          </div>
          {savedBirthDate && (
            <p className="mt-4 text-green-700 bg-green-50 p-3 rounded-lg">
              ✅ Tracking milestones for baby born on {format(savedBirthDate, "MMMM d, yyyy")}
            </p>
          )}
        </div>

        {savedBirthDate && (
          <>
            {/* Active Milestones - Watch Now! */}
            {activeMilestones.length > 0 && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6 flex items-center">
                  <span className="animate-pulse mr-3">🎯</span>
                  Active Watch Windows - Be Ready!
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {activeMilestones.map(({ milestone, info }) => (
                    <div
                      key={milestone.id}
                      className={`border-2 rounded-xl p-6 ${getStatusColor(info.status)}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(milestone.category)}`}>
                            {milestone.category}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-yellow-600">
                            {formatTimeRemaining(Math.abs(info.hoursToAverage))}
                          </div>
                          <div className="text-sm text-gray-600">
                            {info.hoursToAverage > 0 ? "until average time" : "past average"}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{milestone.description}</p>
                      
                      <div className="bg-white bg-opacity-70 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Watch Window:</h4>
                        <p className="text-sm text-gray-600">
                          {format(info.watchStartDate, "MMM d")} - {format(info.watchEndDate, "MMM d, yyyy")}
                        </p>
                        <p className="text-sm text-yellow-700 font-medium mt-1">
                          ⏰ {formatTimeRemaining(info.timeInWindow)} remaining in watch window
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Tips to Help:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {milestone.tips.slice(0, 2).map((tip, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overdue Milestones */}
            {overdueMilestones.length > 0 && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                  <span className="mr-3">⚠️</span>
                  Overdue Milestones - Don&apos;t Worry!
                </h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800">
                    <strong>Remember:</strong> Every baby develops at their own pace. These milestones are averages. 
                    If you&apos;re concerned, consult your pediatrician, but don&apos;t panic if your baby is a little behind.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {overdueMilestones.map(({ milestone, info }) => (
                    <div
                      key={milestone.id}
                      className={`border-2 rounded-xl p-6 ${getStatusColor(info.status)}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(milestone.category)}`}>
                            {milestone.category}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600">
                            {formatTimeRemaining(Math.abs(info.hoursToAverage))} overdue
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{milestone.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Keep encouraging:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {milestone.tips.slice(0, 3).map((tip, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Milestones */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
                <span className="mr-3">🔮</span>
                Coming Up Next
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {upcomingMilestones.map(({ milestone, info }) => (
                  <div
                    key={milestone.id}
                    className={`border-2 rounded-xl p-6 ${getStatusColor(info.status)}`}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(milestone.category)}`}>
                        {milestone.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm">{milestone.description}</p>
                    
                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {formatTimeRemaining(info.timeToStart)}
                        </div>
                        <div className="text-xs text-blue-600">until watch window</div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-600">
                      <p><strong>Watch window:</strong> {format(info.watchStartDate, "MMM d")} - {format(info.watchEndDate, "MMM d")}</p>
                      <p><strong>Average time:</strong> {format(info.averageDate, "MMM d, yyyy")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Overview */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Milestone Timeline</h2>
              <div className="space-y-4">
                {milestones.map((milestone) => {
                  const info = calculateMilestoneInfo(milestone);
                  return (
                    <div key={milestone.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(milestone.category)}`}>
                            {milestone.category}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            info.status === "active" ? "bg-yellow-100 text-yellow-800" :
                            info.status === "overdue" ? "bg-red-100 text-red-800" :
                            info.status === "completed" ? "bg-green-100 text-green-800" :
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {info.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{milestone.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {format(info.averageDate, "MMM d, yyyy")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {milestone.minWeeks}-{milestone.maxWeeks} weeks
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {!savedBirthDate && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👶</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Tracking?</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Enter your baby&apos;s birth date above to begin tracking their developmental milestones 
              with personalized countdowns and helpful tips.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}