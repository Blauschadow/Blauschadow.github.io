interface PixelStarProps {
  size?: number;
  color?: string;
}

export function PixelStar({ size = 12, color = "#60a5fa" }: PixelStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      className="inline-block"
    >
      <rect x="5" y="0" width="2" height="2" fill={color}/>
      <rect x="4" y="2" width="4" height="2" fill={color}/>
      <rect x="3" y="4" width="6" height="2" fill={color}/>
      <rect x="0" y="5" width="12" height="2" fill={color}/>
      <rect x="3" y="6" width="6" height="2" fill={color}/>
      <rect x="4" y="8" width="4" height="2" fill={color}/>
      <rect x="5" y="10" width="2" height="2" fill={color}/>
    </svg>
  );
}
