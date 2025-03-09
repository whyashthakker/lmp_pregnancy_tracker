"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus } from 'lucide-react';

interface SymptomFormProps {
  onAddSymptom: (symptom: string, severity: number, notes?: string) => void;
}

const SymptomForm: React.FC<SymptomFormProps> = ({ onAddSymptom }) => {
  const [symptom, setSymptom] = useState('');
  const [symptomSeverity, setSymptomSeverity] = useState(5);
  const [symptomNotes, setSymptomNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symptom.trim()) {
      onAddSymptom(symptom, symptomSeverity, symptomNotes);
      setSymptom('');
      setSymptomSeverity(5);
      setSymptomNotes('');
    }
  };

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow mb-6">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-2 md:gap-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <Plus className="text-blue-600" size={18} />
          </div>
          <h3 className="font-medium text-gray-800 text-sm md:text-base">Track New Symptom</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div>
            <Label htmlFor="symptom" className="text-sm">Symptom</Label>
            <Input
              id="symptom"
              placeholder="e.g., Nausea, Fatigue, Headache"
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="severity" className="text-sm">Severity (1-10)</Label>
            <div className="mt-1 md:mt-2">
              <input
                type="range"
                min={1}
                max={10}
                value={symptomSeverity}
                onChange={(e) => setSymptomSeverity(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Mild</span>
                <span>Moderate</span>
                <span>Severe</span>
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="notes" className="text-sm">Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any additional details about this symptom"
              value={symptomNotes}
              onChange={(e) => setSymptomNotes(e.target.value)}
              className="h-16 md:h-20 mt-1"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Add Symptom
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SymptomForm; 