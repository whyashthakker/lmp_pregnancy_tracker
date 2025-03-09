# Pregnancy Tracker Application

A comprehensive pregnancy tracking application built with Next.js, React, and TypeScript. Fully responsive and optimized for both desktop and mobile devices.

## Component Structure

The application has been organized into modular components for better maintainability:

### Core Components

- `PregnancyTracker`: Main component that orchestrates the entire application
  - Located at: `components/pregnancy-tracker/index.tsx`

### Dashboard Components

- `ProgressDashboard`: Displays pregnancy progress, baby size, and timeline
  - Located at: `components/pregnancy-tracker/dashboard/progress-dashboard.tsx`
- `MiscarriageRisk`: Shows pregnancy stability rates with a positive focus and multiple factors assessment
  - Located at: `components/pregnancy-tracker/dashboard/miscarriage-risk.tsx`

### Weekly Insights Components

- `WeeklyInsights`: Shows weekly development information, symptoms, nutrition, and exercise tips
  - Located at: `components/pregnancy-tracker/weekly-insights/weekly-insights.tsx`
- `PartnerTips`: Provides tips for partners based on the current pregnancy week
  - Located at: `components/pregnancy-tracker/weekly-insights/partner-tips.tsx`

### Symptoms Tracking Components

- `RecentSymptoms`: Displays recent symptoms with severity indicators
  - Located at: `components/pregnancy-tracker/symptoms/recent-symptoms.tsx`
- `SymptomForm`: Form for adding new symptoms
  - Located at: `components/pregnancy-tracker/symptoms/symptom-form.tsx`
- `CommonSymptoms`: Comprehensive list of common pregnancy symptoms by trimester
  - Located at: `components/pregnancy-tracker/symptoms/common-symptoms.tsx`

### Medical Components

- `RecentVitalSigns`: Displays recent vital signs measurements
  - Located at: `components/pregnancy-tracker/medical/recent-vital-signs.tsx`
- `VitalSignsFormComponent`: Form for adding new vital signs measurements
  - Located at: `components/pregnancy-tracker/medical/vital-signs-form.tsx`

### Settings Components

- `AppSettings`: Application settings and data management
  - Located at: `components/pregnancy-tracker/settings/app-settings.tsx`

### Types and Utilities

- Types: `components/pregnancy-tracker/types/index.ts`
- Pregnancy Calculations: `components/pregnancy-tracker/utils/pregnancy-calculations.ts`
- Data: `components/pregnancy-tracker/utils/data.ts`

### UI Components

The application uses a set of reusable UI components:

- Button, Card, Input, Textarea, Label, etc.
- Custom components: Slider, Progress, Tooltip, AlertDialog, Switch, Checkbox

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Pregnancy timeline tracking based on LMP date
- Weekly development insights
- Baby size visualization
- Symptom tracking and management
- Common pregnancy symptoms by trimester
- Comprehensive pregnancy stability assessment:
  - Trimester-specific stability factors
  - Simple checkbox interface for selecting factors
  - Positive factors (heartbeat, normal ultrasound, etc.)
  - Risk factors (bleeding, high blood pressure, etc.)
  - Dynamic stability rate calculation
- Partner tips
- Medical notes and vital signs tracking
- Data export and management
- Application settings (notifications, dark mode, privacy)
- Fully responsive design optimized for mobile devices

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- date-fns for date manipulation
- UUID for generating unique IDs
- Radix UI for accessible components
