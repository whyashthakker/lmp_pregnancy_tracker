"use client";

import { useState, useEffect } from "react";
import { format, differenceInWeeks, differenceInDays } from "date-fns";
import { TrendingUp, Scale, Ruler, Plus, Trash2 } from "lucide-react";

interface GrowthEntry {
  id: string;
  date: string;
  ageWeeks: number;
  ageDays: number;
  weight: number; // in kg
  height: number; // in cm
  headCircumference?: number; // in cm
  notes?: string;
}

interface PercentileData {
  weeks: number;
  p3: number;
  p10: number;
  p25: number;
  p50: number;
  p75: number;
  p90: number;
  p97: number;
}

// WHO Growth Chart Data (sample data - in production you'd use complete WHO charts)
const weightPercentiles: PercentileData[] = [
  { weeks: 0, p3: 2.4, p10: 2.7, p25: 3.0, p50: 3.3, p75: 3.7, p90: 4.2, p97: 4.8 },
  { weeks: 4, p3: 3.2, p10: 3.6, p25: 4.0, p50: 4.5, p75: 5.1, p90: 5.8, p97: 6.6 },
  { weeks: 8, p3: 4.0, p10: 4.5, p25: 5.1, p50: 5.7, p75: 6.4, p90: 7.3, p97: 8.3 },
  { weeks: 12, p3: 4.7, p10: 5.2, p25: 5.8, p50: 6.4, p75: 7.2, p90: 8.2, p97: 9.4 },
  { weeks: 16, p3: 5.2, p10: 5.7, p25: 6.3, p50: 7.0, p75: 7.8, p90: 8.9, p97: 10.2 },
  { weeks: 20, p3: 5.6, p10: 6.1, p25: 6.7, p50: 7.5, p75: 8.4, p90: 9.5, p97: 10.9 },
  { weeks: 24, p3: 5.9, p10: 6.4, p25: 7.1, p50: 7.9, p75: 8.8, p90: 10.0, p97: 11.5 },
  { weeks: 52, p3: 7.4, p10: 8.1, p25: 8.8, p50: 9.6, p75: 10.6, p90: 11.8, p97: 13.3 },
  { weeks: 104, p3: 9.6, p10: 10.5, p25: 11.5, p50: 12.5, p75: 13.7, p90: 15.2, p97: 17.0 }
];

const heightPercentiles: PercentileData[] = [
  { weeks: 0, p3: 44.2, p10: 46.1, p25: 48.0, p50: 49.9, p75: 51.8, p90: 53.7, p97: 55.6 },
  { weeks: 4, p3: 50.0, p10: 51.8, p25: 53.6, p50: 55.4, p75: 57.3, p90: 59.2, p97: 61.1 },
  { weeks: 8, p3: 54.4, p10: 56.2, p25: 58.1, p50: 60.0, p75: 61.9, p90: 63.9, p97: 65.9 },
  { weeks: 12, p3: 57.6, p10: 59.5, p25: 61.4, p50: 63.4, p75: 65.4, p90: 67.6, p97: 69.8 },
  { weeks: 16, p3: 60.0, p10: 61.9, p25: 63.9, p50: 66.0, p75: 68.1, p90: 70.4, p97: 72.8 },
  { weeks: 20, p3: 61.9, p10: 63.9, p25: 66.0, p50: 68.2, p75: 70.4, p90: 72.8, p97: 75.3 },
  { weeks: 24, p3: 63.5, p10: 65.6, p25: 67.8, p50: 70.1, p75: 72.5, p90: 75.0, p97: 77.7 },
  { weeks: 52, p3: 71.0, p10: 73.4, p25: 75.9, p50: 78.6, p75: 81.4, p90: 84.4, p97: 87.6 },
  { weeks: 104, p3: 81.0, p10: 83.8, p25: 86.8, p50: 90.0, p75: 93.4, p90: 97.0, p97: 100.8 }
];

export default function BabyGrowthPage() {
  const [birthDate, setBirthDate] = useState<string>("");
  const [savedBirthDate, setSavedBirthDate] = useState<Date | null>(null);
  const [growthEntries, setGrowthEntries] = useState<GrowthEntry[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    date: format(new Date(), "yyyy-MM-dd"),
    weight: "",
    height: "",
    headCircumference: "",
    notes: ""
  });

  // Load saved data from localStorage
  useEffect(() => {
    const savedBirth = localStorage.getItem("babyBirthDate");
    if (savedBirth) {
      const parsedDate = new Date(savedBirth);
      setSavedBirthDate(parsedDate);
      setBirthDate(format(parsedDate, "yyyy-MM-dd"));
    }

    const savedEntries = localStorage.getItem("growthEntries");
    if (savedEntries) {
      setGrowthEntries(JSON.parse(savedEntries));
    }
  }, []);

  const handleSaveBirthDate = () => {
    if (birthDate) {
      const date = new Date(birthDate);
      setSavedBirthDate(date);
      localStorage.setItem("babyBirthDate", date.toISOString());
    }
  };

  const calculateAge = (date: string, birthDate: Date) => {
    const entryDate = new Date(date);
    const ageWeeks = differenceInWeeks(entryDate, birthDate);
    const ageDays = differenceInDays(entryDate, birthDate);
    return { ageWeeks, ageDays };
  };

  const addGrowthEntry = () => {
    if (!savedBirthDate || !newEntry.weight || !newEntry.height) return;

    const { ageWeeks, ageDays } = calculateAge(newEntry.date, savedBirthDate);
    
    const entry: GrowthEntry = {
      id: Date.now().toString(),
      date: newEntry.date,
      ageWeeks,
      ageDays,
      weight: parseFloat(newEntry.weight),
      height: parseFloat(newEntry.height),
      headCircumference: newEntry.headCircumference ? parseFloat(newEntry.headCircumference) : undefined,
      notes: newEntry.notes || undefined
    };

    const updatedEntries = [...growthEntries, entry].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    setGrowthEntries(updatedEntries);
    localStorage.setItem("growthEntries", JSON.stringify(updatedEntries));

    // Reset form
    setNewEntry({
      date: format(new Date(), "yyyy-MM-dd"),
      weight: "",
      height: "",
      headCircumference: "",
      notes: ""
    });
    setShowAddForm(false);
  };

  const deleteEntry = (id: string) => {
    const updatedEntries = growthEntries.filter(entry => entry.id !== id);
    setGrowthEntries(updatedEntries);
    localStorage.setItem("growthEntries", JSON.stringify(updatedEntries));
  };

  const findPercentile = (value: number, ageWeeks: number, percentileData: PercentileData[]) => {
    // Find the closest age in our data
    const closestData = percentileData.reduce((prev, curr) => 
      Math.abs(curr.weeks - ageWeeks) < Math.abs(prev.weeks - ageWeeks) ? curr : prev
    );

    if (value <= closestData.p3) return "< 3rd";
    if (value <= closestData.p10) return "3rd-10th";
    if (value <= closestData.p25) return "10th-25th";
    if (value <= closestData.p50) return "25th-50th";
    if (value <= closestData.p75) return "50th-75th";
    if (value <= closestData.p90) return "75th-90th";
    if (value <= closestData.p97) return "90th-97th";
    return "> 97th";
  };

  const getPercentileColor = (percentile: string) => {
    if (percentile.includes("< 3rd") || percentile.includes("> 97th")) return "text-red-600 bg-red-50";
    if (percentile.includes("3rd-10th") || percentile.includes("90th-97th")) return "text-orange-600 bg-orange-50";
    return "text-green-600 bg-green-50";
  };

  const formatAge = (ageWeeks: number, ageDays: number) => {
    if (ageWeeks === 0) return `${ageDays} days`;
    if (ageWeeks < 4) return `${ageWeeks} week${ageWeeks !== 1 ? 's' : ''} ${ageDays % 7} days`;
    const months = Math.floor(ageWeeks / 4.33);
    const remainingWeeks = Math.floor(ageWeeks % 4.33);
    return `${months} month${months !== 1 ? 's' : ''} ${remainingWeeks > 0 ? `${remainingWeeks}w` : ''}`;
  };

  const generateChartData = (type: 'weight' | 'height') => {
    const percentileData = type === 'weight' ? weightPercentiles : heightPercentiles;
    const maxWeeks = Math.max(...growthEntries.map(e => e.ageWeeks), 52);
    
    return {
      percentileData: percentileData.filter(p => p.weeks <= maxWeeks),
      userEntries: growthEntries.map(entry => ({
        weeks: entry.ageWeeks,
        value: type === 'weight' ? entry.weight : entry.height,
        date: entry.date
      }))
    };
  };

  const latestEntry = growthEntries.length > 0 ? growthEntries[growthEntries.length - 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Baby Growth Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your baby&apos;s weight, height, and head circumference with WHO percentile charts. 
            Monitor healthy growth patterns over time.
          </p>
        </div>

        {/* Birth Date Input */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Setup Your Baby&apos;s Growth Tracking</h2>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                max={format(new Date(), "yyyy-MM-dd")}
              />
            </div>
            <button
              onClick={handleSaveBirthDate}
              disabled={!birthDate}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Save & Track Growth
            </button>
          </div>
          {savedBirthDate && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-green-700">
                ✅ Tracking growth for baby born on {format(savedBirthDate, "MMMM d, yyyy")}
              </p>
              <p className="text-sm text-green-600 mt-1">
                {growthEntries.length} growth measurements recorded
              </p>
            </div>
          )}
        </div>

        {savedBirthDate && (
          <>
            {/* Current Stats */}
            {latestEntry && (
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-8 h-8" />
                    <h3 className="text-xl font-bold">Latest Weight</h3>
                  </div>
                  <div className="text-3xl font-bold mb-2">{latestEntry.weight} kg</div>
                  <div className="text-sm opacity-90">
                    {findPercentile(latestEntry.weight, latestEntry.ageWeeks, weightPercentiles)} percentile
                  </div>
                  <div className="text-xs opacity-75 mt-1">
                    Age: {formatAge(latestEntry.ageWeeks, latestEntry.ageDays)}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Ruler className="w-8 h-8" />
                    <h3 className="text-xl font-bold">Latest Height</h3>
                  </div>
                  <div className="text-3xl font-bold mb-2">{latestEntry.height} cm</div>
                  <div className="text-sm opacity-90">
                    {findPercentile(latestEntry.height, latestEntry.ageWeeks, heightPercentiles)} percentile
                  </div>
                  <div className="text-xs opacity-75 mt-1">
                    Measured: {format(new Date(latestEntry.date), "MMM d, yyyy")}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-8 h-8" />
                    <h3 className="text-xl font-bold">Growth Trend</h3>
                  </div>
                  <div className="text-lg font-bold mb-2">
                    {growthEntries.length > 1 ? "Tracking Well" : "Need More Data"}
                  </div>
                  <div className="text-sm opacity-90">
                    {growthEntries.length} measurements
                  </div>
                  <div className="text-xs opacity-75 mt-1">
                    {latestEntry.headCircumference && `Head: ${latestEntry.headCircumference} cm`}
                  </div>
                </div>
              </div>
            )}

            {/* Add New Entry */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Growth Measurements</h2>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Measurement
                </button>
              </div>

              {showAddForm && (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">New Growth Measurement</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Measurement
                      </label>
                      <input
                        type="date"
                        value={newEntry.date}
                        onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        max={format(new Date(), "yyyy-MM-dd")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Weight (kg) *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={newEntry.weight}
                        onChange={(e) => setNewEntry({...newEntry, weight: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., 4.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Height (cm) *
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={newEntry.height}
                        onChange={(e) => setNewEntry({...newEntry, height: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., 65.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Head Circumference (cm)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={newEntry.headCircumference}
                        onChange={(e) => setNewEntry({...newEntry, headCircumference: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., 42.0"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes (optional)
                    </label>
                    <textarea
                      value={newEntry.notes}
                      onChange={(e) => setNewEntry({...newEntry, notes: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                      rows={2}
                      placeholder="Doctor visit, illness, etc."
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={addGrowthEntry}
                      disabled={!newEntry.weight || !newEntry.height}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Save Measurement
                    </button>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Growth Entries List */}
              {growthEntries.length > 0 ? (
                <div className="space-y-4">
                  {growthEntries.slice().reverse().map((entry) => (
                    <div key={entry.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h4 className="font-semibold text-gray-900">
                              {format(new Date(entry.date), "MMM d, yyyy")}
                            </h4>
                            <span className="text-sm text-gray-500">
                              Age: {formatAge(entry.ageWeeks, entry.ageDays)}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                            <div>
                              <span className="text-sm text-gray-600">Weight:</span>
                              <div className="font-medium">{entry.weight} kg</div>
                              <div className={`text-xs px-2 py-1 rounded inline-block ${getPercentileColor(findPercentile(entry.weight, entry.ageWeeks, weightPercentiles))}`}>
                                {findPercentile(entry.weight, entry.ageWeeks, weightPercentiles)}
                              </div>
                            </div>
                            <div>
                              <span className="text-sm text-gray-600">Height:</span>
                              <div className="font-medium">{entry.height} cm</div>
                              <div className={`text-xs px-2 py-1 rounded inline-block ${getPercentileColor(findPercentile(entry.height, entry.ageWeeks, heightPercentiles))}`}>
                                {findPercentile(entry.height, entry.ageWeeks, heightPercentiles)}
                              </div>
                            </div>
                            {entry.headCircumference && (
                              <div>
                                <span className="text-sm text-gray-600">Head:</span>
                                <div className="font-medium">{entry.headCircumference} cm</div>
                              </div>
                            )}
                          </div>
                          {entry.notes && (
                            <p className="text-sm text-gray-600 italic">&quot;{entry.notes}&quot;</p>
                          )}
                        </div>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete measurement"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <TrendingUp className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-500 mb-2">No Measurements Yet</h3>
                  <p className="text-gray-400">Add your first growth measurement to start tracking progress</p>
                </div>
              )}
            </div>

            {/* Growth Charts */}
            {growthEntries.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Growth Charts & Percentiles</h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Weight Chart */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-blue-600" />
                      Weight Progress
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="text-sm text-gray-600 mb-2">WHO Weight Percentiles (kg)</div>
                      {generateChartData('weight').percentileData.map((data) => (
                        <div key={data.weeks} className="flex justify-between text-xs py-1">
                          <span>{data.weeks}w:</span>
                          <span>3rd: {data.p3}</span>
                          <span>50th: {data.p50}</span>
                          <span>97th: {data.p97}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {growthEntries.map((entry) => (
                        <div key={entry.id} className="flex justify-between items-center p-2 bg-blue-50 rounded">
                          <span className="text-sm">{formatAge(entry.ageWeeks, entry.ageDays)}</span>
                          <span className="font-medium">{entry.weight} kg</span>
                          <span className={`text-xs px-2 py-1 rounded ${getPercentileColor(findPercentile(entry.weight, entry.ageWeeks, weightPercentiles))}`}>
                            {findPercentile(entry.weight, entry.ageWeeks, weightPercentiles)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Height Chart */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-green-600" />
                      Height Progress
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="text-sm text-gray-600 mb-2">WHO Height Percentiles (cm)</div>
                      {generateChartData('height').percentileData.map((data) => (
                        <div key={data.weeks} className="flex justify-between text-xs py-1">
                          <span>{data.weeks}w:</span>
                          <span>3rd: {data.p3}</span>
                          <span>50th: {data.p50}</span>
                          <span>97th: {data.p97}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {growthEntries.map((entry) => (
                        <div key={entry.id} className="flex justify-between items-center p-2 bg-green-50 rounded">
                          <span className="text-sm">{formatAge(entry.ageWeeks, entry.ageDays)}</span>
                          <span className="font-medium">{entry.height} cm</span>
                          <span className={`text-xs px-2 py-1 rounded ${getPercentileColor(findPercentile(entry.height, entry.ageWeeks, heightPercentiles))}`}>
                            {findPercentile(entry.height, entry.ageWeeks, heightPercentiles)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Understanding Percentiles:</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>• <strong>50th percentile:</strong> Average for babies this age</p>
                    <p>• <strong>25th-75th percentile:</strong> Normal range for most babies</p>
                    <p>• <strong>3rd-97th percentile:</strong> Still within normal limits</p>
                    <p>• <strong>Consistent tracking:</strong> More important than single measurements</p>
                    <p>• <strong>Concerning:</strong> Dropping across multiple percentile lines</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {!savedBirthDate && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📏</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Track Growth?</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Enter your baby&apos;s birth date above to start tracking weight, height, and growth percentiles 
              with WHO growth charts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}