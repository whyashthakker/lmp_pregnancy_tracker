"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Stethoscope } from 'lucide-react';
import { VitalSignsForm as VitalSignsFormType } from '../types';

interface VitalSignsFormProps {
  form: VitalSignsFormType;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

const VitalSignsFormComponent: React.FC<VitalSignsFormProps> = ({ form, onChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow mb-6">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-100 p-2 rounded-full">
            <Stethoscope className="text-green-600" size={20} />
          </div>
          <h3 className="font-medium text-gray-800">Record Vital Signs</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bloodPressure">Blood Pressure</Label>
              <Input
                id="bloodPressure"
                name="bloodPressure"
                placeholder="e.g., 120/80 mmHg"
                value={form.bloodPressure}
                onChange={onChange}
              />
            </div>
            
            <div>
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                name="weight"
                placeholder="e.g., 65 kg"
                value={form.weight}
                onChange={onChange}
              />
            </div>
            
            <div>
              <Label htmlFor="temperature">Temperature</Label>
              <Input
                id="temperature"
                name="temperature"
                placeholder="e.g., 37.0 °C"
                value={form.temperature}
                onChange={onChange}
              />
            </div>
            
            <div>
              <Label htmlFor="heartRate">Heart Rate</Label>
              <Input
                id="heartRate"
                name="heartRate"
                placeholder="e.g., 75 bpm"
                value={form.heartRate}
                onChange={onChange}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="note">Notes (Optional)</Label>
            <Textarea
              id="note"
              name="note"
              placeholder="Add any additional notes about your vital signs"
              value={form.note || ''}
              onChange={onChange}
              className="h-20"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Save Vital Signs
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default VitalSignsFormComponent; 