type Variant = "female-1" | "female-2" | "couple" | "male-1";

interface Props {
  variant: Variant;
  size?: number;
}

/**
 * Animated SVG avatars — clean, minimal premium illustrations
 * with subtle CSS animations (no extra deps).
 */
export function AnimatedAvatar({ variant, size = 48 }: Props) {
  return (
    <div
      className="relative shrink-0 rounded-full overflow-hidden bg-[var(--color-cream)] border border-[var(--color-gold)]/30 shadow-sm"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="block"
      >
        <defs>
          <linearGradient id={`bg-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#faf6ef" />
            <stop offset="100%" stopColor="#f0e6d2" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" fill={`url(#bg-${variant})`} />

        {variant === "female-1" && <FemaleOne />}
        {variant === "female-2" && <FemaleTwo />}
        {variant === "couple" && <Couple />}
        {variant === "male-1" && <MaleOne />}
      </svg>

      <style>{`
        @keyframes avatar-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
        .avatar-bob { animation: avatar-bob 3.2s ease-in-out infinite; transform-origin: center; }
        @keyframes avatar-blink {
          0%, 92%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .avatar-blink { animation: avatar-blink 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
      `}</style>
    </div>
  );
}

const SKIN = "#f5d0b0";
const SKIN_2 = "#e8b894";
const HAIR_DARK = "#3a2418";
const HAIR_BROWN = "#6b4226";
const PETROL = "#1a3e3e";
const GOLD = "#d4af7a";
const BLUSH = "#e89090";

function FemaleOne() {
  return (
    <g className="avatar-bob">
      {/* hair back */}
      <path d="M14 38c0-12 8-22 18-22s18 10 18 22v8H14z" fill={HAIR_DARK} />
      {/* shoulders / blouse */}
      <path d="M10 64c0-9 8-14 22-14s22 5 22 14z" fill={GOLD} />
      {/* neck */}
      <rect x="28" y="40" width="8" height="8" fill={SKIN_2} />
      {/* face */}
      <ellipse cx="32" cy="32" rx="12" ry="13" fill={SKIN} />
      {/* hair fringe */}
      <path d="M20 26c2-6 8-10 12-10s10 4 12 10c-3-2-6-3-12-3s-9 1-12 3z" fill={HAIR_DARK} />
      {/* cheeks */}
      <circle cx="24" cy="36" r="2" fill={BLUSH} opacity="0.5" />
      <circle cx="40" cy="36" r="2" fill={BLUSH} opacity="0.5" />
      {/* eyes */}
      <ellipse className="avatar-blink" cx="27" cy="32" rx="1.3" ry="2" fill={PETROL} />
      <ellipse className="avatar-blink" cx="37" cy="32" rx="1.3" ry="2" fill={PETROL} />
      {/* smile */}
      <path d="M28 38c1.5 1.5 3 2 4 2s2.5-.5 4-2" stroke={PETROL} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </g>
  );
}

function FemaleTwo() {
  return (
    <g className="avatar-bob">
      {/* hair back long */}
      <path d="M14 36c0-12 8-22 18-22s18 10 18 22v14H14z" fill={HAIR_BROWN} />
      <path d="M10 64c0-9 8-14 22-14s22 5 22 14z" fill={PETROL} />
      <rect x="28" y="40" width="8" height="8" fill={SKIN_2} />
      <ellipse cx="32" cy="32" rx="12" ry="13" fill={SKIN} />
      {/* side bangs */}
      <path d="M19 28c2-7 8-12 13-12 4 0 7 2 9 5-3-1-7-2-11-2-5 0-9 4-11 9z" fill={HAIR_BROWN} />
      <circle cx="24" cy="36" r="2" fill={BLUSH} opacity="0.5" />
      <circle cx="40" cy="36" r="2" fill={BLUSH} opacity="0.5" />
      <ellipse className="avatar-blink" cx="27" cy="32" rx="1.3" ry="2" fill={PETROL} />
      <ellipse className="avatar-blink" cx="37" cy="32" rx="1.3" ry="2" fill={PETROL} />
      <path d="M28 38c1.5 1.5 3 2 4 2s2.5-.5 4-2" stroke={PETROL} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* small earring */}
      <circle cx="20" cy="34" r="1" fill={GOLD} />
      <circle cx="44" cy="34" r="1" fill={GOLD} />
    </g>
  );
}

function MaleOne() {
  return (
    <g className="avatar-bob">
      <path d="M16 30c0-10 7-16 16-16s16 6 16 16v10H16z" fill={HAIR_DARK} />
      <path d="M10 64c0-9 8-14 22-14s22 5 22 14z" fill={PETROL} />
      <rect x="28" y="40" width="8" height="8" fill={SKIN_2} />
      <ellipse cx="32" cy="32" rx="11" ry="12" fill={SKIN} />
      {/* side fade */}
      <path d="M21 28c2-6 6-10 11-10s9 4 11 10c-3-2-7-3-11-3s-8 1-11 3z" fill={HAIR_DARK} />
      <ellipse className="avatar-blink" cx="27" cy="32" rx="1.3" ry="2" fill={PETROL} />
      <ellipse className="avatar-blink" cx="37" cy="32" rx="1.3" ry="2" fill={PETROL} />
      <path d="M28 38c1.5 1.5 3 2 4 2s2.5-.5 4-2" stroke={PETROL} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Couple() {
  return (
    <g className="avatar-bob">
      {/* shoulders */}
      <path d="M2 64c0-8 7-13 18-13s18 5 18 13z" fill={PETROL} />
      <path d="M26 64c0-8 7-13 18-13s18 5 18 13z" fill={GOLD} />

      {/* Male (left) */}
      <g>
        <path d="M8 30c0-8 5-13 12-13s12 5 12 13v8H8z" fill={HAIR_DARK} />
        <ellipse cx="20" cy="32" rx="9" ry="10" fill={SKIN} />
        <path d="M11 28c2-5 5-8 9-8s7 3 9 8c-3-2-5-2-9-2s-6 0-9 2z" fill={HAIR_DARK} />
        <ellipse className="avatar-blink" cx="17" cy="32" rx="1.1" ry="1.6" fill={PETROL} />
        <ellipse className="avatar-blink" cx="23" cy="32" rx="1.1" ry="1.6" fill={PETROL} />
        <path d="M17 36c1 1 2 1.5 3 1.5s2-.5 3-1.5" stroke={PETROL} strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>

      {/* Female (right) */}
      <g>
        <path d="M30 28c0-9 6-15 14-15s14 6 14 15v12H30z" fill={HAIR_BROWN} />
        <ellipse cx="44" cy="32" rx="9" ry="10" fill={SKIN} />
        <path d="M35 27c2-6 5-10 9-10s7 4 9 10c-3-2-5-3-9-3s-7 1-9 3z" fill={HAIR_BROWN} />
        <ellipse className="avatar-blink" cx="41" cy="32" rx="1.1" ry="1.6" fill={PETROL} />
        <ellipse className="avatar-blink" cx="47" cy="32" rx="1.1" ry="1.6" fill={PETROL} />
        <path d="M41 36c1 1 2 1.5 3 1.5s2-.5 3-1.5" stroke={PETROL} strokeWidth="1" fill="none" strokeLinecap="round" />
        <circle cx="34" cy="34" r="0.8" fill={GOLD} />
        <circle cx="54" cy="34" r="0.8" fill={GOLD} />
      </g>
    </g>
  );
}
