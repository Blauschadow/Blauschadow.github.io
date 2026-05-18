import { useState } from 'react';

interface PixelTooltipProps {
  content: string;
  title?: string;
  position?: 'fixed' | 'relative'; // New prop to control positioning
}

export function PixelTooltip({ content, title = "情报：名字的来源", position = 'relative' }: PixelTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block ml-3">
      {/* Exclamation mark bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group transition-transform hover:scale-110 active:scale-95"
        aria-label="显示名字来源说明"
      >
        {/* Pixel bubble background */}
        <div className="relative w-8 h-8">
          {/* Main bubble circle (using pixel art style) - Blue theme */}
          <div className="absolute inset-0">
            <div className="w-full h-full relative">
              {/* Top row */}
              <div className="absolute top-0 left-2 right-2 h-1 bg-primary"></div>
              {/* Second row */}
              <div className="absolute top-1 left-1 right-1 h-1 bg-primary"></div>
              {/* Middle rows */}
              <div className="absolute top-2 left-0 right-0 bottom-2 bg-primary"></div>
              {/* Second to last row */}
              <div className="absolute bottom-1 left-1 right-1 h-1 bg-primary"></div>
              {/* Bottom row */}
              <div className="absolute bottom-0 left-2 right-2 h-1 bg-primary"></div>
            </div>
          </div>
          
          {/* Exclamation mark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-white relative z-10"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px', lineHeight: '1' }}
            >
              !
            </span>
          </div>

          {/* Small pixel tail pointing down-left */}
          <div className="absolute -bottom-1 left-1 w-2 h-1 bg-primary"></div>
          <div className="absolute -bottom-2 left-0 w-1 h-1 bg-primary"></div>
        </div>

        {/* Hover animation glow - Blue theme */}
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-30 transition-opacity blur-sm"></div>
      </button>

      {/* Tooltip content */}
      {isOpen && (
        <>
          {/* Backdrop to close when clicking outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Tooltip bubble - conditional positioning */}
          <div className={
            position === 'fixed' 
              ? "fixed top-4 left-4 right-4 sm:left-4 sm:right-auto sm:top-4 z-50 w-auto sm:w-80 max-w-[calc(100vw-2rem)] animate-in fade-in slide-in-from-top-2 duration-200"
              : "absolute bottom-full right-0 mb-4 z-50 w-64 max-w-[90vw] sm:max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200"
          }>
            {/* Pixel-style border */}
            <div className="border-4 border-primary bg-card shadow-2xl relative">
              {/* Arrow pointing down-right to the exclamation mark */}
              <div className="absolute -bottom-3 right-2 w-4 h-3">
                <div className="absolute left-1 top-0 w-2 h-1 bg-primary"></div>
                <div className="absolute left-1.5 top-1 w-1 h-1 bg-primary"></div>
                <div className="absolute left-1.5 top-2 w-1 h-1 bg-primary"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start gap-2 mb-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0 mt-1 animate-pulse"></div>
                  <h3
                    className="text-primary"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '8px', lineHeight: '1.8' }}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  className="text-foreground"
                  style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '7px', lineHeight: '2.2' }}
                >
                  {content}
                </p>

                {/* Close hint */}
                <div className="mt-3 pt-3 border-t-2 border-border">
                  <p
                    className="text-muted-foreground text-center"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '6px' }}
                  >
                    点击任意处关闭
                  </p>
                </div>
              </div>

              {/* Pixel decorations */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-primary opacity-50"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-primary opacity-50"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}