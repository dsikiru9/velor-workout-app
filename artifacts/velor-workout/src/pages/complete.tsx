import { Link, useParams } from 'wouter';
import { ArrowRight, Check, Home, RotateCcw, Trophy } from 'lucide-react';
import { getSection, getWorkout } from '@/data/exercises';
import { useProgress } from '@/hooks/use-progress';

export default function CompletePage() {
  const { sectionId = '', levelId = '1' } = useParams<{ sectionId: string; levelId: string }>();
  const section = getSection(sectionId);
  const workout = section ? getWorkout(section.id, Number(levelId)) : null;
  const { progress } = useProgress();
  const nextLevel = Number(levelId) < 22 ? Number(levelId) + 1 : Number(levelId);
  if (!section || !workout) return <div className="page-wrap"><div className="empty-state"><h1>Workout unavailable</h1><Link href="/" className="button button-dark">Back to today</Link></div></div>;
  return <div className="completion-page"><div className="completion-shell">
    <div className="completion-top"><Link href={`/section/${section.id}`} className="back-link" data-testid="link-back-section"><ArrowRight size={16} className="flip-x" /> {section.shortName}</Link><span className="brand-mini">VELOR / LOGGED</span></div>
    <div className="completion-content"><div className="completion-stamp"><Trophy size={24} /><span>Session complete</span></div><p className="eyebrow">You finished the work.</p><h1>{workout.title}<br /><em>is in the record.</em></h1><p className="completion-copy">Good training is repeatable. Take the win, recover well, and come back ready for the next useful step.</p>
      <div className="summary-grid"><div><strong>{workout.exercises.length}</strong><span>exercises</span></div><div><strong>{workout.exercises.reduce((sum, item) => sum + item.workoutSets, 0)}</strong><span>sets logged</span></div><div><strong>{workout.estimatedMinutes}<small> min</small></strong><span>session length</span></div></div>
      <div className="completion-actions"><Link href={`/workout/${section.id}/${nextLevel}`} className="button button-primary" data-testid="link-next-level">Next level <ArrowRight size={17} /></Link><Link href={`/section/${section.id}`} className="button button-outline" data-testid="link-review-levels">Review levels</Link><Link href="/" className="text-button" data-testid="link-completion-home"><Home size={15} /> Back to today</Link></div>
      <div className="completion-record"><div className="record-check"><Check size={18} /></div><div><strong>{progress.totalCompletedWorkouts} workouts completed</strong><span>Every finished session is saved locally on this device.</span></div><RotateCcw size={18} /></div>
    </div><p className="completion-footer">Controlled movement. Honest progress.</p>
  </div></div>;
}