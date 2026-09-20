import { Link, useLocation, useParams } from 'wouter';
import { ArrowLeft, ArrowRight, Check, ChevronDown, Clock3, Minus, Pause, Play, Plus, RotateCcw, ShieldCheck, SkipForward } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { getSection, getWorkout } from '@/data/exercises';
import { MediaFrame } from '@/components/media-frame';
import { useProgress } from '@/hooks/use-progress';

export default function WorkoutPage() {
  const { sectionId = '', levelId = '1' } = useParams<{ sectionId: string; levelId: string }>();
  const level = Number(levelId);
  const section = getSection(sectionId);
  const workout = useMemo(() => section ? getWorkout(section.id, level) : null, [section, level]);
  const [, setLocation] = useLocation();
  const { markSet, completeLevel, progress } = useProgress();
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [setIndex, setSetIndex] = useState(0);
  const [resting, setResting] = useState(false);
  const [restSeconds, setRestSeconds] = useState(30);
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);
  const startedAt = useMemo(() => Date.now(), []);
  const exercise = workout?.exercises[exerciseIndex];
  const totalSets = exercise?.workoutSets ?? 1;
  const target = exercise?.workoutReps ? `${exercise.workoutReps} reps` : `${exercise?.workoutDuration ?? 30} sec`;
  useEffect(() => {
    if (!resting || paused) return;
    const timer = window.setInterval(() => setRestSeconds((value) => {
      if (value <= 1) { window.clearInterval(timer); setResting(false); setRestSeconds(30); advance(); return 0; }
      return value - 1;
    }), 1000);
    return () => window.clearInterval(timer);
  }, [resting, paused]);
  function advance() {
    if (!workout) return;
    if (setIndex + 1 < totalSets) { setSetIndex((value) => value + 1); return; }
    if (exerciseIndex + 1 < workout.exercises.length) { setExerciseIndex((value) => value + 1); setSetIndex(0); return; }
    completeLevel(workout.sectionId, workout.level, Math.max(1, Math.round((Date.now() - startedAt) / 60000)));
    setLocation(`/complete/${workout.sectionId}/${workout.level}`);
  }
  function completeSet() {
    if (!workout) return;
    markSet(workout.id, exerciseIndex, setIndex);
    setRestSeconds(30);
    setResting(true);
  }
  function skipRest() { setResting(false); setRestSeconds(30); advance(); }
  if (!section || !workout || !exercise) return <div className="page-wrap"><div className="empty-state"><h1>Workout unavailable</h1><Link href="/" className="button button-dark">Back to today</Link></div></div>;
  const completedForWorkout = Object.keys(progress.completedSets).filter((key) => key.startsWith(`${workout.id}:`)).length;
  if (!started) return <div className="workout-page">
    <header className="workout-topbar"><Link href={`/section/${section.id}`} className="back-link" data-testid="link-back-to-levels"><ArrowLeft size={16} /> Back to levels</Link><div className="workout-top-title"><span>{section.shortName}</span><strong>Level {level}</strong></div><span className="workout-counter">{String(workout.exercises.length).padStart(2, '0')} <i>exercises</i></span></header>
    <main className="workout-preview">
      <div className="workout-preview-heading">
        <div>
          <p className="eyebrow">{workout.tier} / {workout.focus}</p>
          <h1>{workout.title}</h1>
          <p className="preview-copy">Review the full session before you start. Every exercise, target, and rest period is here.</p>
        </div>
        <span className="workout-time"><Clock3 size={16} /> {workout.estimatedMinutes} min</span>
      </div>
      <div className="preview-kicker"><span>Today's workout</span><span>{workout.exercises.length} exercises · {workout.exercises.reduce((sum, item) => sum + item.workoutSets, 0)} sets</span></div>
      <div className="preview-exercise-list">
        {workout.exercises.map((item, index) => (
          <article className="preview-exercise" key={item.id}>
            <div className="preview-exercise-head"><span className="preview-number">{String(index + 1).padStart(2, '0')}</span><div><h2>{item.name}</h2><p>{item.targetArea} <span>·</span> {item.primaryMuscles.join(' · ')}</p></div><strong>{item.workoutReps ? `${item.workoutSets} × ${item.workoutReps} reps` : `${item.workoutSets} × ${item.workoutDuration} sec`}</strong></div>
            <MediaFrame src={item.mediaUrl} alt={item.mediaAlt} />
            <div className="preview-exercise-meta"><span>Rest {item.rest} sec</span><span>{item.equipment}</span></div>
          </article>
        ))}
      </div>
      <div className="preview-start"><button className="button button-primary" onClick={() => setStarted(true)} data-testid="button-start-workout">Start workout <ArrowRight size={18} /></button><p>You can pause or skip rest at any time once you begin.</p></div>
    </main>
  </div>;
  return <div className="workout-page">
    <header className="workout-topbar"><Link href={`/section/${section.id}`} className="back-link" data-testid="link-exit-workout"><ArrowLeft size={16} /> Exit workout</Link><div className="workout-top-title"><span>{section.shortName}</span><strong>Level {level}</strong></div><span className="workout-counter">{String(exerciseIndex + 1).padStart(2, '0')} <i>/</i> {String(workout.exercises.length).padStart(2, '0')}</span></header>
    <div className="workout-progress"><i style={{ width: `${((exerciseIndex + (setIndex / totalSets)) / workout.exercises.length) * 100}%` }} /></div>
    <main className="workout-content">
      <div className="workout-heading"><div><p className="eyebrow">{workout.tier} / {workout.focus}</p><h1>{workout.title}</h1></div><span className="workout-time"><Clock3 size={16} /> {workout.estimatedMinutes} min</span></div>
      <div className="exercise-layout">
        <div className="exercise-main">
          <div className="exercise-meta"><span>Exercise {exerciseIndex + 1} of {workout.exercises.length}</span><span>{exercise.equipment}</span></div>
          <h2>{exercise.name}</h2><p className="exercise-target">{exercise.targetArea} <span>·</span> {exercise.primaryMuscles.join(' · ')}</p>
          <MediaFrame src={exercise.mediaUrl} alt={exercise.mediaAlt} />
          <div className="set-control-card">
            {resting ? <div className="rest-view"><div className="rest-ring"><span>{restSeconds}</span><small>sec</small></div><div><p className="eyebrow">Recover</p><h3>Rest between sets.</h3><p>Next: {setIndex + 1 < totalSets ? `${exercise.name} · set ${setIndex + 2}` : exerciseIndex + 1 < workout.exercises.length ? workout.exercises[exerciseIndex + 1].name : 'Finish workout'}</p></div><div className="rest-actions"><button className="button button-outline" onClick={() => setRestSeconds((value) => Math.max(10, value - 10))} data-testid="button-rest-minus"><Minus size={15} /> 10</button><button className="button button-outline" onClick={() => setRestSeconds((value) => Math.min(120, value + 10))} data-testid="button-rest-plus"><Plus size={15} /> 10</button><button className="text-button" onClick={skipRest} data-testid="button-skip-rest"><SkipForward size={15} /> Skip rest</button></div></div> :
              <div className="set-view"><div className="set-head"><span className="eyebrow">Current set</span><span className="set-dots">{Array.from({ length: totalSets }, (_, i) => <i key={i} className={i < setIndex ? 'done' : i === setIndex ? 'current' : ''}>{i < setIndex ? <Check size={11} /> : i + 1}</i>)}</span></div><div className="target-row"><strong>{target}</strong><span>Target</span></div><button className="button button-primary complete-button" onClick={completeSet} data-testid="button-complete-set"><Check size={18} /> Complete set <ArrowRight size={17} /></button><div className="set-foot"><span>Set {setIndex + 1} of {totalSets}</span><button className="text-button" onClick={() => setPaused((value) => !value)} data-testid="button-pause-workout">{paused ? <Play size={14} /> : <Pause size={14} />} {paused ? 'Resume' : 'Pause'}</button></div></div>}
          </div>
        </div>
        <aside className="exercise-sidebar"><div className="detail-block"><span className="eyebrow">How to do it</span><ol>{exercise.instructions.map((item, i) => <li key={item}><b>0{i + 1}</b><span>{item}</span></li>)}</ol></div><div className="detail-block"><span className="eyebrow">Form cues</span><ul className="cue-list">{exercise.formCues.map((cue) => <li key={cue}><Check size={14} /> {cue}</li>)}</ul></div><details className="detail-disclosure"><summary><span>Watch for</span><ChevronDown size={16} /></summary><ul>{exercise.commonMistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}</ul></details><div className="scale-note"><ShieldCheck size={17} /><div><strong>Need to adjust?</strong><span>Regression: {exercise.regression}</span><span>Progression: {exercise.progression}</span></div></div><div className="workout-log"><span>Session progress</span><strong>{completedForWorkout} / {workout.exercises.reduce((sum, item) => sum + item.workoutSets, 0)} sets</strong></div></aside>
      </div>
    </main>
  </div>;
}