import { Metadata } from 'next';
import BabyGenderPredictorClient from './BabyGenderPredictorClient';

export const metadata: Metadata = {
  title: 'Baby Gender Predictor - Fun Gender Prediction Tools | Your Journey',
  description: 'Use fun gender prediction methods like Chinese Gender Calendar, Ramzi Theory, and old wives tales to predict your baby\'s gender. Entertainment purposes only.',
  keywords: 'baby gender predictor, Chinese gender calendar, Ramzi theory, baby gender prediction, boy or girl predictor, gender reveal',
  openGraph: {
    title: 'Baby Gender Predictor - Will It Be a Boy or Girl?',
    description: 'Fun gender prediction tools including Chinese Calendar and traditional methods. For entertainment only.',
    type: 'article',
  },
};

export default function BabyGenderPredictor() {
  return <BabyGenderPredictorClient />;
}