import Image from 'next/image';

type Props = {
  variant: 'on-blue' | 'app-icon';
  size: number;
  className?: string;
};

// Renders the official /logo.png (black mark on white) cropped to the mark.
// "on-blue" turns it white and transparent over blue; "app-icon" gives a white mark on a black tile.
export function BrandMark({ variant, size, className = '' }: Props) {
  const tile = variant === 'app-icon' ? 'rounded-[22%] bg-black' : '';
  const blend = variant === 'on-blue' ? 'mix-blend-screen' : '';

  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden ${tile} ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="FXPayout"
        width={size * 2}
        height={size * 2}
        className={`absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 invert ${blend}`}
        style={{ width: size * 1.8, height: size * 1.8 }}
      />
    </span>
  );
}
