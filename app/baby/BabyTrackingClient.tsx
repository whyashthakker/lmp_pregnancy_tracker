'use client';

import { useState, useEffect } from 'react';
import { 
  Plus, 
  Minus, 
  Calendar, 
  Baby, 
  Droplets, 
  Utensils, 
  Moon, 
  Activity,
  Save,
  RotateCcw,
  Target,
  TrendingUp
} from 'lucide-react';

interface TrackingData {
  [date: string]: {
    [category: string]: number;
  };
}

interface TrackingCategory {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  unit: string;
  description: string;
  getTarget: (weekNumber: number) => { min: number; max: number; ideal: number };
}

const trackingCategories: TrackingCategory[] = [
  {
    id: 'diapers_wet',
    name: 'Wet Diapers',
    icon: Droplets,
    color: 'blue',
    unit: 'count',
    description: 'Number of wet diapers (pee)',
    getTarget: (weekNumber: number) => {
      if (weekNumber <= 2) return { min: 6, max: 10, ideal: 8 };
      if (weekNumber <= 8) return { min: 6, max: 8, ideal: 7 };
      if (weekNumber <= 26) return { min: 5, max: 7, ideal: 6 };
      return { min: 4, max: 6, ideal: 5 };
    }
  },
  {
    id: 'diapers_dirty',
    name: 'Dirty Diapers',
    icon: Baby,
    color: 'brown',
    unit: 'count',
    description: 'Number of dirty diapers (poop)',
    getTarget: (weekNumber: number) => {
      if (weekNumber <= 1) return { min: 3, max: 6, ideal: 4 };
      if (weekNumber <= 6) return { min: 2, max: 5, ideal: 3 };
      if (weekNumber <= 26) return { min: 1, max: 3, ideal: 2 };
      return { min: 1, max: 2, ideal: 1 };
    }
  },
  {
    id: 'feeds',
    name: 'Feeding Sessions',
    icon: Utensils,
    color: 'green',
    unit: 'count',
    description: 'Breastfeeding or bottle feeding sessions',
    getTarget: (weekNumber: number) => {
      if (weekNumber <= 2) return { min: 8, max: 12, ideal: 10 };
      if (weekNumber <= 8) return { min: 6, max: 10, ideal: 8 };
      if (weekNumber <= 26) return { min: 5, max: 8, ideal: 6 };
      return { min: 4, max: 6, ideal: 5 };
    }
  },
  {
    id: 'sleep_hours',
    name: 'Sleep Duration',
    icon: Moon,
    color: 'purple',
    unit: 'hours',
    description: 'Total sleep time in hours',
    getTarget: (weekNumber: number) => {
      if (weekNumber <= 2) return { min: 14, max: 18, ideal: 16 };
      if (weekNumber <= 8) return { min: 13, max: 16, ideal: 15 };
      if (weekNumber <= 26) return { min: 12, max: 15, ideal: 14 };
      return { min: 11, max: 14, ideal: 12 };
    }
  },
  {
    id: 'tummy_time',
    name: 'Tummy Time',
    icon: Activity,
    color: 'orange',
    unit: 'minutes',
    description: 'Tummy time duration in minutes',
    getTarget: (weekNumber: number) => {
      if (weekNumber <= 2) return { min: 5, max: 15, ideal: 10 };
      if (weekNumber <= 8) return { min: 10, max: 30, ideal: 20 };
      if (weekNumber <= 26) return { min: 20, max: 60, ideal: 40 };
      return { min: 30, max: 90, ideal: 60 };
    }
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        button: 'bg-blue-500 hover:bg-blue-600',
        icon: 'text-blue-600'
      };
    case 'brown':
      return {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-700',
        button: 'bg-amber-500 hover:bg-amber-600',
        icon: 'text-amber-600'
      };
    case 'green':
      return {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        button: 'bg-green-500 hover:bg-green-600',
        icon: 'text-green-600'
      };
    case 'purple':
      return {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        button: 'bg-purple-500 hover:bg-purple-600',
        icon: 'text-purple-600'
      };
    case 'orange':
      return {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-700',
        button: 'bg-orange-500 hover:bg-orange-600',
        icon: 'text-orange-600'
      };
    default:
      return {
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        text: 'text-gray-700',
        button: 'bg-gray-500 hover:bg-gray-600',
        icon: 'text-gray-600'
      };
  }
};

export default function BabyTrackingClient() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [trackingData, setTrackingData] = useState<TrackingData>({});
  const [babyAge, setBabyAge] = useState<string>('');

  useEffect(() => {
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);

    // Load data from localStorage
    const savedData = localStorage.getItem('babyTrackingData');
    if (savedData) {
      try {
        setTrackingData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading tracking data:', error);
      }
    }

    // Load baby age from localStorage
    const savedAge = localStorage.getItem('babyAge');
    if (savedAge) {
      setBabyAge(savedAge);
    }
  }, []);

  const saveData = (newData: TrackingData) => {
    setTrackingData(newData);
    localStorage.setItem('babyTrackingData', JSON.stringify(newData));
  };

  const updateValue = (category: string, delta: number) => {
    const newData = { ...trackingData };
    if (!newData[selectedDate]) {
      newData[selectedDate] = {};
    }
    if (!newData[selectedDate][category]) {
      newData[selectedDate][category] = 0;
    }
    newData[selectedDate][category] = Math.max(0, newData[selectedDate][category] + delta);
    saveData(newData);
  };

  const getValue = (category: string): number => {
    return trackingData[selectedDate]?.[category] || 0;
  };

  const resetDay = () => {
    const newData = { ...trackingData };
    if (newData[selectedDate]) {
      delete newData[selectedDate];
      saveData(newData);
    }
  };

  const calculateWeekNumber = (birthDate: string, currentDate: string): number => {
    const birth = new Date(birthDate);
    const current = new Date(currentDate);
    const diffTime = current.getTime() - birth.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, Math.ceil(diffDays / 7));
  };

  const setBabyBirthDate = (date: string) => {
    setBabyAge(date);
    localStorage.setItem('babyAge', date);
  };

  const weekNumber = babyAge ? calculateWeekNumber(babyAge, selectedDate) : 0;

  const getProgressPercentage = (current: number, target: { min: number; max: number; ideal: number }): number => {
    if (current >= target.ideal) return 100;
    if (current <= 0) return 0;
    return Math.min(100, (current / target.ideal) * 100);
  };

  const getProgressColor = (current: number, target: { min: number; max: number; ideal: number }): string => {
    if (current >= target.ideal) return 'bg-green-500';
    if (current >= target.min) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/80 p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-full bg-gradient-to-r from-pink-100 to-purple-100">
          <Baby className="w-8 h-8 text-pink-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Daily Baby Tracking</h2>
          <p className="text-gray-600">Track your baby&apos;s daily activities and patterns</p>
        </div>
      </div>

      {/* Baby Age Setup */}
      {!babyAge && (
        <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Set Your Baby&apos;s Birth Date</h3>
          <p className="text-blue-700 mb-4">Enter your baby&apos;s birth date to track weekly progress and get age-appropriate insights.</p>
          <div className="flex gap-4 items-center">
            <input
              type="date"
              className="px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setBabyBirthDate(e.target.value)}
            />
            <p className="text-sm text-blue-600">This will be saved locally on your device</p>
          </div>
        </div>
      )}

      {/* Date and Week Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Select Date
          </h3>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {babyAge && (
          <div className="bg-gradient-to-r from-pink-50/60 to-purple-50/60 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Baby&apos;s Age</h3>
            <p className="text-2xl font-bold text-pink-600">{weekNumber} weeks old</p>
            <p className="text-sm text-gray-600">Born: {new Date(babyAge).toLocaleDateString()}</p>
          </div>
        )}
      </div>

      {/* Tracking Categories */}
      <div className="space-y-6 mb-8">
        {trackingCategories.map((category) => {
          const IconComponent = category.icon;
          const colors = getColorClasses(category.color);
          const currentValue = getValue(category.id);
          const target = babyAge ? category.getTarget(weekNumber) : null;
          const progressPercentage = target ? getProgressPercentage(currentValue, target) : 0;
          const progressColor = target ? getProgressColor(currentValue, target) : 'bg-gray-300';
          
          return (
            <div key={category.id} className={`${colors.bg} border ${colors.border} rounded-xl p-6`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  <div>
                    <h3 className={`text-lg font-semibold ${colors.text}`}>{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className={`text-2xl font-bold ${colors.text}`}>
                  {currentValue} {category.unit}
                </div>
              </div>
              
              {/* Progress Bar and Target Info */}
              {target && weekNumber <= 52 && (
                <div className="mb-4">
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                    <span>Target: {target.min}-{target.max} {category.unit}</span>
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      Ideal: {target.ideal}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div 
                      className={`h-2.5 rounded-full transition-all duration-300 ${progressColor}`}
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {currentValue < target.min && 'Below recommended range'}
                    {currentValue >= target.min && currentValue < target.ideal && 'Within range, approaching ideal'}
                    {currentValue >= target.ideal && currentValue <= target.max && 'Ideal range achieved!'}
                    {currentValue > target.max && 'Above typical range'}
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateValue(category.id, -1)}
                  className={`p-2 ${colors.button} text-white rounded-lg transition-colors`}
                  disabled={currentValue === 0}
                >
                  <Minus className="w-5 h-5" />
                </button>
                
                <div className="flex-1 bg-white/60 rounded-lg p-3 text-center">
                  <span className="text-lg font-medium text-gray-800">{currentValue}</span>
                </div>
                
                <button
                  onClick={() => updateValue(category.id, 1)}
                  className={`p-2 ${colors.button} text-white rounded-lg transition-colors`}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={resetDay}
          className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Reset Day
        </button>
        
        <button
          onClick={() => {
            // Force save current data
            localStorage.setItem('babyTrackingData', JSON.stringify(trackingData));
            alert('Data saved successfully!');
          }}
          className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
        >
          <Save className="w-5 h-5" />
          Save Data
        </button>
      </div>

      {/* Weekly Summary */}
      {babyAge && (
        <div className="mt-8 bg-gradient-to-r from-green-50/60 to-blue-50/60 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {trackingCategories.map((category) => {
              // Calculate weekly average from last 7 days
              const weekData = [];
              for (let i = 0; i < 7; i++) {
                const date = new Date(selectedDate);
                date.setDate(date.getDate() - i);
                const dateStr = date.toISOString().split('T')[0];
                const value = trackingData[dateStr]?.[category.id] || 0;
                weekData.push(value);
              }
              const weeklyTotal = weekData.reduce((sum, val) => sum + val, 0);
              const weeklyAverage = (weeklyTotal / 7).toFixed(1);
              
              return (
                <div key={category.id} className="bg-white/60 rounded-lg p-4 text-center">
                  <category.icon className={`w-5 h-5 mx-auto mb-2 ${getColorClasses(category.color).icon}`} />
                  <p className="text-sm font-medium text-gray-800">{category.name}</p>
                  <p className="text-lg font-bold text-gray-700">{weeklyAverage}</p>
                  <p className="text-xs text-gray-500">avg/day</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Age Guidelines */}
      {babyAge && weekNumber <= 52 && (
        <div className="mt-8 bg-blue-50/60 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Week {weekNumber} Guidelines
          </h3>
          <p className="text-blue-700 text-sm mb-3">
            These are general guidelines for babies around {weekNumber} weeks old. Every baby develops at their own pace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {trackingCategories.map((category) => {
              const target = category.getTarget(weekNumber);
              return (
                <div key={category.id} className="flex items-center gap-2 text-blue-700">
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}: {target.min}-{target.max} {category.unit}/day</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Usage Notes */}
      <div className="mt-8 bg-yellow-50/60 border border-yellow-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-4">📝 How to Use</h3>
        <ul className="space-y-2 text-yellow-700 text-sm">
          <li>• Set your baby&apos;s birth date to track weekly progress and see target ranges</li>
          <li>• Use + and - buttons to record daily activities throughout the day</li>
          <li>• Progress bars show how you&apos;re tracking against age-appropriate targets</li>
          <li>• Data is automatically saved to your browser&apos;s local storage</li>
          <li>• View weekly summaries to identify patterns and trends</li>
          <li>• Guidelines are for babies up to 1 year old</li>
          <li>• Your data stays completely private on your device</li>
        </ul>
      </div>
    </div>
  );
}