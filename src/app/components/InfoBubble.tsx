import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface InfoBubbleProps {
  title: string;
  content: string;
}

export function InfoBubble({ title, content }: InfoBubbleProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-primary/80 transition-colors border-2 border-white"
        style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px', lineHeight: 1 }}
        aria-label="Info"
      >
        ?
      </button>

      {open && (
        <div className="absolute top-10 right-0 w-64 bg-white border-4 border-primary shadow-[6px_6px_0_0_rgba(37,99,235,0.15)] z-50">
          <div className="bg-primary px-3 py-2 flex items-center justify-between">
            <span className="font-pixel text-[8px] text-white uppercase tracking-wider">{title}</span>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
          <div className="relative p-4">
            <div className="absolute -top-[2px] -left-[2px] w-2 h-2 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute -top-[2px] -right-[2px] w-2 h-2 border-t-2 border-r-2 border-primary/30" />
            <div className="absolute -bottom-[2px] -left-[2px] w-2 h-2 border-b-2 border-l-2 border-primary/30" />
            <div className="absolute -bottom-[2px] -right-[2px] w-2 h-2 border-b-2 border-r-2 border-primary/30" />
            <p className="font-pixel text-[8px] leading-relaxed text-foreground/80 whitespace-pre-line">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
