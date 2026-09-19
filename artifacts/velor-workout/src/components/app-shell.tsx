import { Link, useLocation } from 'wouter';
import { Activity, ArrowLeft, BarChart3, Clock3, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { sections } from '@/data/exercises';
import { useProgress } from '@/hooks/use-progress';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const { progress } = useProgress();
  const activeSection = sections.find((section) => location.includes(`/section/${section.id}`) || location.includes(`/workout/${section.id}`) || location.includes(`/complete/${section.id}`));
  return (
    <div className="velor-app min-h-[100dvh]">
      <aside className={`velor-sidebar ${open ? 'is-open' : ''}`}>
        <div className="sidebar-brand">
          <Link href="/" className="brand-lockup" data-testid="link-home">
            <span className="brand-mark">V</span><span>VELOR</span>
          </Link>
          <button className="icon-button mobile-close" onClick={() => setOpen(false)} aria-label="Close navigation" data-testid="button-close-navigation"><X size={20} /></button>
        </div>
        <div className="sidebar-rule" />
        <p className="eyebrow sidebar-eyebrow">Training system</p>
        <nav className="sidebar-nav" aria-label="Main navigation">
          <Link href="/" className={location === '/' ? 'nav-link active' : 'nav-link'} data-testid="link-dashboard"><Home size={17} /> Today</Link>
          {activeSection && <Link href={`/section/${activeSection.id}`} className="nav-link active-soft" data-testid="link-current-section"><ArrowLeft size={17} /> {activeSection.shortName}</Link>}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-stat">
            <span className="stat-icon"><BarChart3 size={16} /></span>
            <div><strong>{progress.totalCompletedWorkouts}</strong><span>workouts logged</span></div>
          </div>
          <div className="sidebar-stat">
            <span className="stat-icon warm"><Clock3 size={16} /></span>
            <div><strong>{progress.history.length ? progress.history[0].minutes : 0}<small> min</small></strong><span>last session</span></div>
          </div>
          <p className="sidebar-footer">Train with what you have.<br />Progress with what you do.</p>
        </div>
      </aside>
      {open && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setOpen(false)} data-testid="button-scrim" />}
      <main className="velor-main">
        <header className="mobile-header">
          <button className="icon-button" onClick={() => setOpen(true)} aria-label="Open navigation" data-testid="button-open-navigation"><Menu size={21} /></button>
          <Link href="/" className="mobile-brand" data-testid="link-mobile-home"><span className="brand-mark">V</span> VELOR</Link>
          <span className="mobile-progress">{progress.totalCompletedWorkouts} done</span>
        </header>
        {children}
      </main>
    </div>
  );
}

export function SafetyNotice() {
  return <div className="safety-notice" data-testid="text-safety-notice"><Activity size={17} /><p>Use controlled movement and stop if you experience sharp pain, dizziness, or unusual symptoms. Make sure any household support you use is stable before exercising.</p></div>;
}