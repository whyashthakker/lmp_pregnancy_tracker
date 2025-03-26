"use client";

import React, { useState } from 'react';
import { format } from 'date-fns';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Activity } from 'lucide-react';

interface UltrasoundMeasurement {
  date: string;
  weeksAhead: number;
  daysAhead: number;
  notes?: string;
}

interface UltrasoundMeasurementsProps {
  measurements: UltrasoundMeasurement[];
  onAddMeasurement: (measurement: UltrasoundMeasurement) => void;
}

const UltrasoundMeasurements: React.FC<UltrasoundMeasurementsProps> = ({
  measurements,
  onAddMeasurement
}) => {
  const [date, setDate] = useState('');
  const [weeksAhead, setWeeksAhead] = useState('');
  const [daysAhead, setDaysAhead] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !weeksAhead || !daysAhead) return;

    onAddMeasurement({
      date,
      weeksAhead: parseInt(weeksAhead),
      daysAhead: parseInt(daysAhead),
      notes: notes || undefined
    });

    // Reset form
    setDate('');
    setWeeksAhead('');
    setDaysAhead('');
    setNotes('');
  };

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <Activity className="text-blue-600" size={18} />
          </div>
          <h3 className="font-medium text-gray-800">Ultrasound Measurements</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="date" className="block text-xs font-medium text-gray-700 mb-1">
                Ultrasound Date
              </label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="weeksAhead" className="block text-xs font-medium text-gray-700 mb-1">
                Weeks Ahead
              </label>
              <Input
                id="weeksAhead"
                type="number"
                min="0"
                value={weeksAhead}
                onChange={(e) => setWeeksAhead(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="daysAhead" className="block text-xs font-medium text-gray-700 mb-1">
                Days Ahead
              </label>
              <Input
                id="daysAhead"
                type="number"
                min="0"
                max="6"
                value={daysAhead}
                onChange={(e) => setDaysAhead(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-xs font-medium text-gray-700 mb-1">
              Notes (Optional)
            </label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any additional information about the ultrasound..."
            />
          </div>

          <Button type="submit" className="w-full">
            Add Measurement
          </Button>
        </form>

        {measurements.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Measurements</h4>
            <div className="space-y-3">
              {measurements.map((measurement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg border border-gray-100"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {format(new Date(measurement.date), 'MMMM d, yyyy')}
                      </p>
                      <p className="text-sm text-gray-600">
                        {measurement.weeksAhead} weeks, {measurement.daysAhead} days ahead
                      </p>
                      {measurement.notes && (
                        <p className="text-xs text-gray-500 mt-1">{measurement.notes}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UltrasoundMeasurements; 