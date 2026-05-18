import { useState } from 'react';

export function PixelTreasure() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const messages = [
    'HP +10',
    'MP +5',
    'EXP +100',
    'GOLD +50',
    'Item: Pixel Heart',
    'Item: Gamepad',
    'LUCK +1',
    'GAME OVER? No!',
    'LEVEL UP!',
    'Hidden Achievement Unlocked!'
  ];

  const handleClick = () => {
    if (!isOpen) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMessage);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-20">
      {/* Message bubble */}
      {isOpen && message && (
        <div
          className="absolute bottom-full right-0 mb-4 bg-primary text-white px-4 py-2 border-2 border-white whitespace-nowrap animate-bounce"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
        >
          {message}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary"></div>
        </div>
      )}

      {/* Treasure chest */}
      <button
        onClick={handleClick}
        className="group relative transition-transform hover:scale-110 active:scale-95"
        style={{ width: '48px', height: '48px' }}
      >
        {/* Chest base */}
        <div className="relative">
          {/* Closed chest */}
          {!isOpen && (
            <svg width="48" height="48" viewBox="0 0 48 48" className="transition-opacity">
              {/* Bottom part */}
              <rect x="8" y="24" width="32" height="16" fill="#8B4513" />
              <rect x="12" y="28" width="24" height="8" fill="#A0522D" />
              {/* Top part (lid) */}
              <rect x="8" y="16" width="32" height="8" fill="#8B4513" />
              <rect x="12" y="18" width="24" height="4" fill="#A0522D" />
              {/* Lock */}
              <rect x="22" y="22" width="4" height="6" fill="#FFD700" />
              <rect x="20" y="20" width="8" height="4" fill="#FFD700" />
              {/* Details */}
              <rect x="8" y="24" width="2" height="16" fill="#654321" />
              <rect x="38" y="24" width="2" height="16" fill="#654321" />
            </svg>
          )}

          {/* Open chest */}
          {isOpen && (
            <svg width="48" height="48" viewBox="0 0 48 48" className="animate-pulse">
              {/* Bottom part */}
              <rect x="8" y="24" width="32" height="16" fill="#8B4513" />
              <rect x="12" y="28" width="24" height="8" fill="#A0522D" />
              {/* Top part (lid open) */}
              <rect x="8" y="8" width="32" height="8" fill="#8B4513" />
              <rect x="12" y="10" width="24" height="4" fill="#A0522D" />
              {/* Sparkles */}
              <rect x="20" y="18" width="2" height="2" fill="#FFD700" className="animate-ping" />
              <rect x="26" y="16" width="2" height="2" fill="#FFD700" className="animate-ping" />
              <rect x="24" y="20" width="2" height="2" fill="#FFD700" className="animate-ping" />
              {/* Glow */}
              <rect x="16" y="22" width="16" height="2" fill="#FFFF00" opacity="0.6" />
            </svg>
          )}
        </div>

        {/* Hover hint */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          <span
            className="text-primary text-xs"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '8px' }}
          >
            ?
          </span>
        </div>
      </button>
    </div>
  );
}
