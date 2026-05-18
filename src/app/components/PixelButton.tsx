interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function PixelButton({ children, onClick, variant = 'primary' }: PixelButtonProps) {
  const baseStyles = "px-6 py-3 border-4 transition-all duration-100 active:translate-x-1 active:translate-y-1 cursor-pointer";
  const variantStyles = variant === 'primary'
    ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
    : "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/90";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
      style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
    >
      {children}
    </button>
  );
}
