import type { BabyNameParams, BabyNameResult } from '../types';

interface NameData {
  name: string;
  meaning: string;
  origin: string;
  gender: 'boy' | 'girl' | 'unisex';
  popularity: 'common' | 'unique' | 'trendy';
  style: string[];
  alternativeSpellings?: string[];
}

// Sample name database - in a real implementation, this would be much larger
const NAME_DATABASE: NameData[] = [
  // Boys
  { name: "Alexander", meaning: "Defender of mankind", origin: "Greek", gender: "boy", popularity: "common", style: ["classic"], alternativeSpellings: ["Alexandre", "Aleksander"] },
  { name: "Oliver", meaning: "Olive tree", origin: "Latin", gender: "boy", popularity: "trendy", style: ["modern", "nature"] },
  { name: "Ethan", meaning: "Strong, firm", origin: "Hebrew", gender: "boy", popularity: "common", style: ["modern", "biblical"] },
  { name: "Noah", meaning: "Rest, comfort", origin: "Hebrew", gender: "boy", popularity: "trendy", style: ["biblical", "classic"] },
  { name: "Liam", meaning: "Strong-willed warrior", origin: "Irish", gender: "boy", popularity: "trendy", style: ["modern"] },
  { name: "Mason", meaning: "Stone worker", origin: "English", gender: "boy", popularity: "common", style: ["modern"] },
  { name: "Lucas", meaning: "Light", origin: "Latin", gender: "boy", popularity: "common", style: ["classic"] },
  { name: "Leo", meaning: "Lion", origin: "Latin", gender: "boy", popularity: "trendy", style: ["short", "classic"] },
  { name: "River", meaning: "Flowing water", origin: "English", gender: "boy", popularity: "unique", style: ["nature", "modern"] },
  { name: "Atlas", meaning: "To endure", origin: "Greek", gender: "boy", popularity: "unique", style: ["unique", "modern"] },
  
  // Girls
  { name: "Emma", meaning: "Universal", origin: "Germanic", gender: "girl", popularity: "common", style: ["classic"] },
  { name: "Olivia", meaning: "Olive tree", origin: "Latin", gender: "girl", popularity: "trendy", style: ["classic", "nature"] },
  { name: "Sophia", meaning: "Wisdom", origin: "Greek", gender: "girl", popularity: "common", style: ["classic"] },
  { name: "Isabella", meaning: "God is my oath", origin: "Hebrew", gender: "girl", popularity: "common", style: ["classic", "biblical"] },
  { name: "Ava", meaning: "Bird", origin: "Latin", gender: "girl", popularity: "trendy", style: ["modern"] },
  { name: "Charlotte", meaning: "Free woman", origin: "French", gender: "girl", popularity: "common", style: ["vintage", "classic"] },
  { name: "Amelia", meaning: "Industrious", origin: "Germanic", gender: "girl", popularity: "trendy", style: ["vintage"] },
  { name: "Luna", meaning: "Moon", origin: "Latin", gender: "girl", popularity: "trendy", style: ["nature", "modern"] },
  { name: "Willow", meaning: "Willow tree", origin: "English", gender: "girl", popularity: "unique", style: ["nature", "modern"] },
  { name: "Aria", meaning: "Air, melody", origin: "Italian", gender: "girl", popularity: "trendy", style: ["modern"] },
  
  // Unisex
  { name: "Avery", meaning: "Elf ruler", origin: "English", gender: "unisex", popularity: "trendy", style: ["modern"] },
  { name: "Riley", meaning: "Courageous", origin: "Irish", gender: "unisex", popularity: "common", style: ["modern"] },
  { name: "Jordan", meaning: "To flow down", origin: "Hebrew", gender: "unisex", popularity: "common", style: ["classic"] },
  { name: "Taylor", meaning: "Tailor", origin: "English", gender: "unisex", popularity: "common", style: ["modern"] },
  { name: "Sage", meaning: "Wise one", origin: "Latin", gender: "unisex", popularity: "unique", style: ["nature", "modern"] },
  { name: "River", meaning: "Flowing water", origin: "English", gender: "unisex", popularity: "unique", style: ["nature", "modern"] },
  { name: "Phoenix", meaning: "Rising bird", origin: "Greek", gender: "unisex", popularity: "unique", style: ["unique", "modern"] },
  { name: "Ocean", meaning: "Sea", origin: "Greek", gender: "unisex", popularity: "unique", style: ["nature", "unique"] }
];

export function generateBabyNames(params: BabyNameParams): BabyNameResult {
  const {
    gender,
    origin,
    style,
    length,
    popularity,
    startsWith,
    endsWith,
    meaning,
    count = 10
  } = params;
  
  let filteredNames = NAME_DATABASE;
  
  // Filter by gender
  if (gender) {
    filteredNames = filteredNames.filter(name => 
      name.gender === gender || name.gender === 'unisex'
    );
  }
  
  // Filter by origin
  if (origin) {
    filteredNames = filteredNames.filter(name =>
      name.origin.toLowerCase().includes(origin.toLowerCase())
    );
  }
  
  // Filter by style
  if (style) {
    filteredNames = filteredNames.filter(name =>
      name.style.includes(style)
    );
  }
  
  // Filter by popularity
  if (popularity) {
    filteredNames = filteredNames.filter(name =>
      name.popularity === popularity
    );
  }
  
  // Filter by length
  if (length) {
    filteredNames = filteredNames.filter(name => {
      const nameLength = name.name.length;
      switch (length) {
        case 'short': return nameLength <= 4;
        case 'medium': return nameLength >= 5 && nameLength <= 7;
        case 'long': return nameLength >= 8;
        default: return true;
      }
    });
  }
  
  // Filter by starts with
  if (startsWith) {
    filteredNames = filteredNames.filter(name =>
      name.name.toLowerCase().startsWith(startsWith.toLowerCase())
    );
  }
  
  // Filter by ends with
  if (endsWith) {
    filteredNames = filteredNames.filter(name =>
      name.name.toLowerCase().endsWith(endsWith.toLowerCase())
    );
  }
  
  // Filter by meaning
  if (meaning) {
    filteredNames = filteredNames.filter(name =>
      name.meaning.toLowerCase().includes(meaning.toLowerCase())
    );
  }
  
  // Shuffle and limit results
  const shuffled = filteredNames.sort(() => Math.random() - 0.5);
  const selectedNames = shuffled.slice(0, count);
  
  // If we don't have enough names, add some general suggestions
  if (selectedNames.length < count && !origin && !style) {
    const additionalNames = NAME_DATABASE
      .filter(name => !selectedNames.includes(name))
      .filter(name => gender ? (name.gender === gender || name.gender === 'unisex') : true)
      .sort(() => Math.random() - 0.5)
      .slice(0, count - selectedNames.length);
    
    selectedNames.push(...additionalNames);
  }
  
  return {
    names: selectedNames.map(name => ({
      name: name.name,
      meaning: name.meaning,
      origin: name.origin,
      gender: name.gender,
      popularity: name.popularity,
      alternativeSpellings: name.alternativeSpellings
    })),
    totalSuggestions: selectedNames.length
  };
}