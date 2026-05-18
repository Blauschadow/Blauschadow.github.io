import React from 'react';
import { motion } from 'motion/react';

interface PixelWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  delay?: number;
}

export function PixelWindow({ children, title, className = "", delay = 0 }: PixelWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={`relative ${className}`}
    >
      {/* Shadow layer */}
      <div className="absolute inset-0 bg-primary/20 translate-x-2 translate-y-2 pointer-events-none" />

      {/* Main Container */}
      <div className="relative border-4 border-primary bg-card overflow-hidden">
        {/* Title Bar if provided */}
        {title && (
          <div className="bg-primary px-4 py-2 flex items-center justify-between border-b-4 border-primary">
            <h3 className="text-primary-foreground font-pixel text-[10px] uppercase tracking-wider">
              {title}
            </h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary-foreground/50" />
              <div className="w-2 h-2 bg-primary-foreground" />
            </div>
          </div>
        )}

        {/* Inner Border Decoration */}
        <div className="p-1">
          <div className="border-2 border-primary/30 p-4 relative bg-card">
            {/* Corner Accents */}
            <div className="absolute -top-[6px] -left-[6px] w-3 h-3 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-[6px] -right-[6px] w-3 h-3 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-[6px] -left-[6px] w-3 h-3 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-[6px] -right-[6px] w-3 h-3 border-b-2 border-r-2 border-primary" />
            
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
