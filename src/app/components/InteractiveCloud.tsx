import { useState } from 'react';

interface InteractiveCloudProps {
  position: 'left' | 'right';
}

export function InteractiveCloud({ position }: InteractiveCloudProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} transition-all duration-500 cursor-pointer`}
      style={{
        top: '20%',
        transform: isHovered
          ? position === 'left' ? 'translateX(20px)' : 'translateX(-20px)'
          : 'translateX(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg width="120" height="60" viewBox="0 0 24 12">
        <rect x="4" y="4" width="4" height="4" fill="#60a5fa" opacity={isHovered ? "1" : "0.6"}/>
        <rect x="8" y="2" width="8" height="4" fill="#60a5fa" opacity={isHovered ? "1" : "0.6"}/>
        <rect x="2" y="6" width="16" height="4" fill="#60a5fa" opacity={isHovered ? "1" : "0.6"}/>
        <rect x="6" y="8" width="12" height="2" fill="#60a5fa" opacity={isHovered ? "1" : "0.6"}/>
        <rect x="16" y="4" width="4" height="4" fill="#60a5fa" opacity={isHovered ? "1" : "0.6"}/>
      </svg>
    </div>
  );
}
