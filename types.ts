
export interface Nutrient {
  id: string;
  title: string;
  image: string;
  bannerImage: string;
  videoId: string;
  color: string;
  conceptMap: {
    title: string;
    mainPoints: {
      point: string;
      subpoints: string[];
    }[];
  };
  content: {
    sections: {
      title: string;
      text?: string;
      points?: string[];
      table?: {
        headers: string[];
        rows: string[][];
      };
    }[];
  };
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface GameFood {
  name: string;
  image: string;
  primaryNutrientId: 'hidrats-de-carboni' | 'lipids' | 'proteines';
}

// --- Tipus per a la Sala d'Aliments ---

export interface NutritionalInfo {
  [key: string]: string;
}

export interface Product {
  name: string;
  image: string;
  ingredients?: {
    list: string[];
    notes?: string;
  };
  nutrition?: {
    per100?: NutritionalInfo;
    perServing?: {
      servingSize: string;
      data: NutritionalInfo;
    };
  };
  sugarComparison?: number; // grams of sugar per 100g/ml
}

export interface FoodCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  image: string;
  products: Product[];
  analysis: {
    title: string;
    content: (string | { type: 'p'; text: string } | { type: 'ul'; items: string[] })[];
  }[];
}

export interface FoodAnalysisData {
  categories: FoodCategory[];
  generalConclusions: {
    title: string;
    content: (string | { type: 'p'; text: string } | { type: 'ul'; items: string[] })[];
  }[];
}

// --- Tipus per a l'Escape Room ---

export type Activity = {
  type: 'fill-in-blanks' | 'classification' | 'creative-writing' | 'timeline' | 'question-answer' | 'riddle' | 'match-functions' | 'final-mission' | 'conversation';
  title: string;
  instructions: string;
  data: any;
  userInputs?: (string | string[])[];
  isCorrect?: boolean[];
};

export interface Challenge {
  id: string;
  title: string;
  nutrientId: string;
  objectives: string[];
  activities: Activity[];
  clue: {
    question: string;
    getCorrectAnswer: (activities: Activity[]) => number | string;
  };
}

export interface EscapeRoomData {
  title: string;
  finalCode: string;
  challenges: Challenge[];
}