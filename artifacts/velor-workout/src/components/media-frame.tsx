import { ImageOff, Play } from 'lucide-react';
import { useState } from 'react';

export function MediaFrame({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="media-frame" data-testid="media-exercise">
      {!failed ? <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} /> : <div className="media-fallback"><ImageOff size={25} /><strong>Demo unavailable</strong><span>Use the steps and cues below to train safely.</span></div>}
      {!failed && <span className="media-badge"><Play size={12} fill="currentColor" /> visual guide</span>}
    </div>
  );
}