import { useCallback, useState } from 'react';
import type { ProgressState, SectionId } from '@/types';

const KEY = 'velor-progress-v1';
const initial: ProgressState = { completedLevels: [], completedSets: {}, history: [], totalCompletedWorkouts: 0 };

function read(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...initial, ...JSON.parse(raw) } : initial;
  } catch {
    return initial;
  }
}

function write(value: ProgressState) {
  try { localStorage.setItem(KEY, JSON.stringify(value)); } catch { /* storage is optional */ }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(read);
  const update = useCallback((transform: (current: ProgressState) => ProgressState) => {
    setProgress((current) => { const next = transform(current); write(next); return next; });
  }, []);
  const markSet = useCallback((workoutId: string, exerciseIndex: number, setIndex: number) => {
    update((current) => ({ ...current, completedSets: { ...current.completedSets, [`${workoutId}:${exerciseIndex}:${setIndex}`]: 1 } }));
  }, [update]);
  const completeLevel = useCallback((sectionId: SectionId, level: number, minutes: number) => {
    const workoutId = `${sectionId}-${level}`;
    update((current) => ({
      ...current,
      completedLevels: current.completedLevels.includes(workoutId) ? current.completedLevels : [...current.completedLevels, workoutId],
      lastWorkout: { sectionId, level, completedAt: new Date().toISOString() },
      history: [{ workoutId, completedAt: new Date().toISOString(), minutes }, ...current.history].slice(0, 30),
      totalCompletedWorkouts: current.completedLevels.includes(workoutId) ? current.totalCompletedWorkouts : current.totalCompletedWorkouts + 1,
    }));
  }, [update]);
  return { progress, markSet, completeLevel };
}