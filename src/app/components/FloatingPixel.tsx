import { useState } from 'react';

interface FloatingPixelProps {
  initialX: number;
  initialY: number;
  color: string;
  size?: number;
}

export function FloatingPixel({ initialX, initialY, color, size = 16 }: FloatingPixelProps) {
  const [clicked, setClicked] = useState(false);
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  const handleClick = () => {
    setClicked(true);
    setPosition({
      x: Math.random() * 90,
      y: Math.random() * 90
    });
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div
      onClick={handleClick}
      className="absolute cursor-pointer transition-all duration-500 hover:scale-150"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        transform: clicked ? 'rotate(180deg) scale(1.5)' : 'rotate(0deg)',
      }}
    />
  );
}
