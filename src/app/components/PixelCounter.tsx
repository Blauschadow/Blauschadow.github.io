import { useState } from 'react';

export function PixelCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="border-4 border-primary bg-card p-4 inline-block">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(Math.max(0, count - 1))}
          className="w-12 h-12 border-4 border-primary bg-secondary hover:bg-primary transition-colors active:translate-y-1"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '16px' }}
        >
          -
        </button>

        <div className="min-w-[100px] text-center">
          <div
            className="text-primary"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '24px' }}
          >
            {count}
          </div>
          <div
            className="text-muted-foreground mt-1"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '7px' }}
          >
            PIXELS
          </div>
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="w-12 h-12 border-4 border-primary bg-secondary hover:bg-primary transition-colors active:translate-y-1"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '16px' }}
        >
          +
        </button>
      </div>
    </div>
  );
}
