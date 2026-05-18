import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export function NameOriginPopup() {
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
      {/* Question mark bubble */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-primary/80 transition-colors border-2 border-white"
        style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px', lineHeight: 1 }}
        aria-label="Name origin"
      >
        ?
      </button>

      {/* Floating window */}
      {open && (
        <div className="absolute bottom-10 right-0 w-72 bg-white border-4 border-primary shadow-[6px_6px_0_0_rgba(37,99,235,0.15)] z-50">
          {/* Title bar */}
          <div className="bg-primary px-3 py-2 flex items-center justify-between">
            <span className="font-pixel text-[8px] text-white uppercase tracking-wider">名字的由来</span>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>

          {/* Corner accents */}
          <div className="relative p-4">
            <div className="absolute -top-[2px] -left-[2px] w-2 h-2 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute -top-[2px] -right-[2px] w-2 h-2 border-t-2 border-r-2 border-primary/30" />
            <div className="absolute -bottom-[2px] -left-[2px] w-2 h-2 border-b-2 border-l-2 border-primary/30" />
            <div className="absolute -bottom-[2px] -right-[2px] w-2 h-2 border-b-2 border-r-2 border-primary/30" />

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="font-pixel text-[8px] leading-relaxed text-foreground/80">
                  <span className="text-primary">Blau</span> 在德语中的意思为<span className="text-primary">蓝色</span>，蓝色是我最喜欢的颜色。
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 w-2 h-2 rounded-full bg-primary/40 flex-shrink-0" />
                <p className="font-pixel text-[8px] leading-relaxed text-foreground/80">而取名为 <span className="text-primary">Blauschadow </span>的理由，大概是我答应过一个人要以这个名字写一个游戏吧。</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-dashed border-primary/10 flex justify-end">
              <span className="font-pixel text-[7px] text-muted-foreground">— Blauschatten</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
