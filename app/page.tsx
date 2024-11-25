import PregnancyTracker from '@/components/ui/tracker-app';
import { Baby } from 'lucide-react';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Baby className="w-8 h-8 text-indigo-600" />
          <h1 className="font-pixel text-3xl text-indigo-600 tracking-tight">
            Baby Quest Tracker
          </h1>
        </div>
        <PregnancyTracker />
      </div>
    </main>
  );
}