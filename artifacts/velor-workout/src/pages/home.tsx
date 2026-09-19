import { Link } from 'wouter';
import { ArrowRight, Check, ChevronRight, Flame, Play, RotateCcw } from 'lucide-react';
import { sections, getWorkout } from '@/data/exercises';
import { useProgress } from '@/hooks/use-progress';
import { SafetyNotice } from '@/components/app-shell';

export default function Home() {
  const { progress } = useProgress();
  const last = progress.lastWorkout;
  return (
    <div className="page-wrap home-page">
      <header className="page-header home-header reveal">
        <div>
          <p className="eyebrow">Personal training / {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
          <h1>Show up.<br /><em>Do the work.</em></h1>
          <p className="lede">A clear path from where you are to what you can do next. No equipment room required.</p>
        </div>
        <div className="header-mark"><span>01</span><div className="mark-line" /><span>24</span></div>
      </header>

      {last && <section className="resume-card reveal delay-1">
        <div className="resume-icon"><RotateCcw size={20} /></div>
        <div className="resume-copy"><span className="eyebrow">Last session</span><strong>{getWorkout(last.sectionId, last.level).title}</strong><span>Level {last.level} · ready when you are</span></div>
        <Link href={`/workout/${last.sectionId}/${last.level}`} className="button button-dark" data-testid="link-resume-workout"><Play size={15} fill="currentColor" /> Resume</Link>
      </section>}

      <div className="section-heading reveal delay-1"><div><p className="eyebrow">Choose your focus</p><h2>Four ways in.</h2></div><span className="section-count">04 / 04</span></div>
      <section className="section-grid" aria-label="Workout sections">
        {sections.map((section, index) => {
          const done = progress.completedLevels.filter((id) => id.startsWith(`${section.id}-`)).length;
          return <Link key={section.id} href={`/section/${section.id}`} className={`section-card section-${index + 1} reveal delay-${index + 1}`} data-testid={`link-section-${section.id}`}>
            <div className="section-card-top"><span className="section-index">0{index + 1}</span><span className="section-complete">{done > 0 ? <><Check size={13} /> {done} done</> : '22 levels'}</span></div>
            <div className="section-graphic"><span className="graphic-number">{String(index + 1).padStart(2, '0')}</span><span className="graphic-line" /></div>
            <div className="section-card-copy"><h3>{section.name}</h3><p>{section.description}</p><span className="text-link">View levels <ArrowRight size={16} /></span></div>
          </Link>;
        })}
      </section>

      <section className="home-lower reveal delay-3">
        <div className="weekly-card">
          <div className="section-heading compact"><div><p className="eyebrow">Your record</p><h2>Keep the chain honest.</h2></div><Flame size={24} /></div>
          <div className="record-row"><strong>{progress.totalCompletedWorkouts}</strong><span>completed workouts</span><div className="record-bars">{Array.from({ length: 7 }, (_, i) => <i key={i} className={i < Math.min(7, progress.history.length) ? 'filled' : ''} />)}</div></div>
          <p className="muted-copy">Consistency beats intensity you cannot repeat. Start with the level that fits today.</p>
        </div>
        <div className="principle-card"><span className="principle-number">/ 03</span><h3>Progress is a practice.</h3><p>Complete a level, recover, then earn the next one. VELOR remembers the work so you can focus on the next rep.</p><Link href="/section/arms" className="text-link" data-testid="link-start-training">Start training <ChevronRight size={16} /></Link></div>
      </section>
      <SafetyNotice />
    </div>
  );
}