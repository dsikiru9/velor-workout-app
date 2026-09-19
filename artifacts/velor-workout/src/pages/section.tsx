import { Link, useParams } from 'wouter';
import { ArrowLeft, ArrowRight, Check, LockKeyhole, ShieldCheck } from 'lucide-react';
import { getSection } from '@/data/exercises';
import { useProgress } from '@/hooks/use-progress';
import type { Difficulty } from '@/types';
import { SafetyNotice } from '@/components/app-shell';

const tiers: { name: Difficulty; range: number[]; description: string }[] = [
  { name: 'Beginner', range: Array.from({ length: 7 }, (_, i) => i + 1), description: 'Build positions you can repeat.' },
  { name: 'Intermediate', range: Array.from({ length: 7 }, (_, i) => i + 8), description: 'Add volume without losing control.' },
  { name: 'Advanced', range: Array.from({ length: 8 }, (_, i) => i + 15), description: 'Make every rep deliberate.' },
];

export default function SectionPage() {
  const { sectionId = '' } = useParams<{ sectionId: string }>();
  const section = getSection(sectionId);
  const { progress } = useProgress();
  if (!section) return <div className="page-wrap"><div className="empty-state"><h1>Section not found</h1><Link href="/" className="button button-dark">Back to today</Link></div></div>;
  const doneCount = progress.completedLevels.filter((id) => id.startsWith(`${section.id}-`)).length;
  return <div className="page-wrap section-page">
    <Link href="/" className="back-link reveal" data-testid="link-back-home"><ArrowLeft size={16} /> All sections</Link>
    <header className="section-hero reveal delay-1"><div><p className="eyebrow">{section.shortName} / 22 levels</p><h1>{section.name}</h1><p className="lede">{section.description}</p></div><div className="hero-progress"><span>{String(doneCount).padStart(2, '0')} <small>/ 22</small></span><div className="progress-track"><i style={{ width: `${(doneCount / 22) * 100}%` }} /></div><small>levels complete</small></div></header>
    <div className="section-note reveal delay-2"><ShieldCheck size={18} /><p>{section.note}</p></div>
    <div className="level-list">
      {tiers.map((tier, tierIndex) => <section key={tier.name} className={`tier-block reveal delay-${tierIndex + 2}`}><div className="tier-heading"><div><span className="tier-kicker">0{tierIndex + 1} / progression</span><h2>{tier.name}</h2><p>{tier.description}</p></div><span className={`tier-pill tier-${tierIndex}`}>{tier.range.length} levels</span></div><div className="levels-grid">{tier.range.map((level) => {
        const id = `${section.id}-${level}`;
        const completed = progress.completedLevels.includes(id);
        return <Link key={level} href={`/workout/${section.id}/${level}`} className={`level-row ${completed ? 'completed' : ''}`} data-testid={`link-level-${section.id}-${level}`}><span className="level-number">{String(level).padStart(2, '0')}</span><span className="level-label">{tier.name} {level}</span><span className="level-status">{completed ? <><Check size={16} /> Complete</> : <><span>Start</span><ArrowRight size={16} /></>}</span></Link>;
      })}</div></section>)}
    </div>
    <SafetyNotice />
  </div>;
}