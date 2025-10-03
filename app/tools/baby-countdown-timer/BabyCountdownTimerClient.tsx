'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Baby, 
  Calendar as CalendarIcon, 
  Heart, 
  Timer,
  PartyPopper,
  Star,
  Crown,
  Flower
} from 'lucide-react';
import { format, addDays, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  progressPercentage: number;
}

const celebrationEmojis = ['🎉', '🎊', '✨', '🌟', '💖', '👶', '🎈', '🎁', '🌸', '🦋'];
const milestoneMessages = {
  250: "You're in the final stretch! 🏁",
  200: "Getting so close! 💕",
  150: "Third trimester magic! ✨",
  100: "Double digits countdown! 🎯",
  50: "Almost time to meet your baby! 👶",
  30: "Pack your hospital bag! 🏥",
  14: "Could be any day now! 🎉",
  7: "Your baby is coming soon! 💖",
  1: "Tomorrow might be the day! 🌟",
  0: "Your baby is here! Welcome! 🎊"
};

export default function BabyCountdownTimerClient() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [dueDate, setDueDate] = useState<Date>();
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    progressPercentage: 0
  });
  const [currentEmoji, setCurrentEmoji] = useState(0);

  // Calculate due date (280 days from LMP)
  useEffect(() => {
    if (selectedDate) {
      const calculated = addDays(selectedDate, 280);
      setDueDate(calculated);
    }
  }, [selectedDate]);

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (dueDate) {
        const now = new Date();
        
        if (now >= dueDate) {
          setCountdown({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            totalDays: 0,
            progressPercentage: 100
          });
        } else {
          const totalDaysFromLMP = differenceInDays(dueDate, selectedDate!);
          const remainingDays = differenceInDays(dueDate, now);
          const remainingHours = differenceInHours(dueDate, now) % 24;
          const remainingMinutes = differenceInMinutes(dueDate, now) % 60;
          const remainingSeconds = differenceInSeconds(dueDate, now) % 60;
          
          const daysCompleted = totalDaysFromLMP - remainingDays;
          const progressPercentage = Math.min(100, (daysCompleted / totalDaysFromLMP) * 100);
          
          setCountdown({
            days: remainingDays,
            hours: remainingHours,
            minutes: remainingMinutes,
            seconds: remainingSeconds,
            totalDays: remainingDays,
            progressPercentage
          });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dueDate, selectedDate]);

  // Emoji animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % celebrationEmojis.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('pregnancyData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (parsedData.lmpDate) {
          setSelectedDate(new Date(parsedData.lmpDate));
        }
      } catch (error) {
        console.error('Error parsing saved pregnancy data:', error);
      }
    }
  }, []);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      // Save to localStorage for consistency
      const savedData = localStorage.getItem('pregnancyData');
      const parsedData = savedData ? JSON.parse(savedData) : {};
      parsedData.lmpDate = date.toISOString();
      localStorage.setItem('pregnancyData', JSON.stringify(parsedData));
    }
  };

  const getMilestoneMessage = () => {
    const days = countdown.totalDays;
    for (const [threshold, message] of Object.entries(milestoneMessages)) {
      if (days <= parseInt(threshold)) {
        return message;
      }
    }
    return "Your pregnancy journey has begun! 🌟";
  };

  const getProgressColor = () => {
    if (countdown.progressPercentage < 30) return 'from-pink-400 to-rose-400';
    if (countdown.progressPercentage < 60) return 'from-purple-400 to-pink-400';
    if (countdown.progressPercentage < 90) return 'from-blue-400 to-purple-400';
    return 'from-green-400 to-blue-400';
  };

  const isOverdue = dueDate && new Date() > dueDate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-pink-600 hover:text-pink-700 font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Timer className="h-16 w-16 text-pink-500" />
              <span className="absolute -top-2 -right-2 text-2xl animate-bounce">
                {celebrationEmojis[currentEmoji]}
              </span>
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Baby Countdown Timer
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Count down every magical moment until you meet your little one! ✨
          </p>
        </div>

        {/* Date Selection */}
        {!selectedDate && (
          <Card className="max-w-2xl mx-auto mb-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-gray-800 flex items-center justify-center gap-3">
                <CalendarIcon className="h-7 w-7 text-pink-500" />
                When Did Your Last Period Begin?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-gray-600">
                Let&apos;s calculate your countdown to meeting your baby!
              </p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full max-w-md mx-auto bg-gradient-to-r from-pink-100 to-purple-100 border-pink-200 hover:from-pink-200 hover:to-purple-200 text-gray-700 font-medium"
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Select your last period date
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                    fixedWeeks
                  />
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>
        )}

        {/* Main Countdown */}
        {selectedDate && dueDate && (
          <div className="space-y-8">
            {/* Celebration Banner */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full border border-pink-200/50">
                <PartyPopper className="h-5 w-5 text-pink-500" />
                <span className="text-lg font-semibold text-gray-800">
                  {getMilestoneMessage()}
                </span>
                <PartyPopper className="h-5 w-5 text-purple-500" />
              </div>
            </div>

            {/* Main Countdown Display */}
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${getProgressColor()}`} style={{ width: `${countdown.progressPercentage}%` }}></div>
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {isOverdue ? "Baby is here! 🎉" : "Time Until Baby Arrives"}
                  </h2>
                  <p className="text-gray-600">
                    Due Date: <span className="font-semibold">{format(dueDate, 'EEEE, MMMM d, yyyy')}</span>
                  </p>
                </div>

                {!isOverdue && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border border-pink-100">
                      <div className="text-4xl lg:text-5xl font-bold text-pink-600 mb-2">
                        {countdown.days}
                      </div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        {countdown.days === 1 ? 'Day' : 'Days'}
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                      <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                        {countdown.hours}
                      </div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        {countdown.hours === 1 ? 'Hour' : 'Hours'}
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                      <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                        {countdown.minutes}
                      </div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        {countdown.minutes === 1 ? 'Minute' : 'Minutes'}
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100">
                      <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                        {countdown.seconds}
                      </div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        {countdown.seconds === 1 ? 'Second' : 'Seconds'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Progress Circle */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray={`${countdown.progressPercentage * 2.51} 251`}
                        className="transition-all duration-1000 ease-out drop-shadow-sm"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <Baby className="h-8 w-8 text-pink-500 mb-2" />
                      <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        {Math.round(countdown.progressPercentage)}%
                      </span>
                      <span className="text-xs text-gray-500 mt-1">Complete</span>
                    </div>
                  </div>
                </div>

                {/* Change Date Button */}
                <div className="text-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="bg-white/50 border-gray-200">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Change Last Period Date
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                        fixedWeeks
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-100">
                <CardContent className="p-6 text-center">
                  <Crown className="h-8 w-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Royal Countdown</h3>
                  <p className="text-sm text-gray-600">
                    Your baby is growing like royalty! Every day brings new developments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Stellar Progress</h3>
                  <p className="text-sm text-gray-600">
                    You&apos;re creating a little star! Each moment is precious and magical.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
                <CardContent className="p-6 text-center">
                  <Flower className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Blooming Journey</h3>
                  <p className="text-sm text-gray-600">
                    Like a beautiful flower, your baby is blooming perfectly inside you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Related Tools */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">More Pregnancy Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/due-date-calculator" className="block group">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <CalendarIcon className="h-10 w-10 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-800 mb-2">Due Date Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate your estimated delivery date</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/pregnancy-week-calculator" className="block group">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Baby className="h-10 w-10 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-800 mb-2">Week Calculator</h3>
                  <p className="text-sm text-gray-600">Find out how many weeks pregnant you are</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/tools/kick-counter" className="block group">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Heart className="h-10 w-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-800 mb-2">Kick Counter</h3>
                  <p className="text-sm text-gray-600">Track your baby&apos;s movements</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}