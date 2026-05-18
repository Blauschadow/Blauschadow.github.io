import { motion } from 'motion/react';

interface StatBarProps {
  label: string;
  current: number;
  max: number;
  color: string;
  className?: string;
}

export function StatBar({ label, current, max, color, className = "" }: StatBarProps) {
  const percentage = Math.min(100, Math.max(0, (current / max) * 100));

  return (
    <div className={`space-y-1 ${className}`}>
      <div className="flex justify-between items-end px-1">
        <span className="text-foreground font-pixel text-[8px] uppercase">{label}</span>
        <span className="text-muted-foreground font-pixel text-[7px]">
          {current} / {max}
        </span>
      </div>
      
      <div className="h-5 border-2 border-primary bg-background p-[2px] relative overflow-hidden">
        {/* Progress Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color}`}
        />
        
        {/* Grid Overlay for texture */}
        <div className="absolute inset-0 pointer-events-none opacity-20 flex">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-primary/50 h-full" />
          ))}
        </div>

        {/* Gloss Effect */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 pointer-events-none" />
      </div>
    </div>
  );
}
