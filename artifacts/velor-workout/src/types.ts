export type SectionId = 'arms' | 'back-shoulders' | 'legs' | 'abdomen';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Exercise {
  id: string;
  name: string;
  targetArea: string;
  difficulty: Difficulty;
  equipment: string;
  sets: number;
  reps?: number;
  duration?: number;
  rest: number;
  instructions: string[];
  formCues: string[];
  commonMistakes: string[];
  regression: string;
  progression: string;
  primaryMuscles: string[];
  mediaUrl: string;
  mediaAlt: string;
}

export interface WorkoutExercise extends Exercise {
  workoutSets: number;
  workoutReps?: number;
  workoutDuration?: number;
}

export interface Workout {
  id: string;
  sectionId: SectionId;
  level: number;
  title: string;
  tier: Difficulty;
  focus: string;
  estimatedMinutes: number;
  exercises: WorkoutExercise[];
}

export interface Section {
  id: SectionId;
  name: string;
  shortName: string;
  description: string;
  note: string;
  accent: string;
  icon: string;
}

export interface ProgressState {
  completedLevels: string[];
  completedSets: Record<string, number>;
  lastWorkout?: { sectionId: SectionId; level: number; completedAt: string };
  history: { workoutId: string; completedAt: string; minutes: number }[];
  totalCompletedWorkouts: number;
}