export function LandmarksWatermark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 480"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        {/* Eiffel Tower */}
        <g id="lm-eiffel">
          <path d="M20 95 L30 10 L40 95" />
          <path d="M12 95 L48 95" />
          <path d="M18 72 L42 72" />
          <path d="M21 50 L39 50" />
          <path d="M25 30 L35 30" />
          <path d="M20 95 L42 72" />
          <path d="M40 95 L18 72" />
          <path d="M21 72 L39 50" />
          <path d="M39 72 L21 50" />
          <path d="M30 10 L30 0" />
        </g>
        {/* Big Ben */}
        <g id="lm-bigben">
          <rect x="14" y="34" width="32" height="61" />
          <circle cx="30" cy="46" r="9" />
          <path d="M30 46 L30 40" />
          <path d="M30 46 L35 48" />
          <path d="M14 34 L30 13 L46 34 Z" />
          <path d="M30 13 L30 2" />
          <path d="M14 95 L46 95" />
          <path d="M14 60 L46 60" />
          <path d="M14 78 L46 78" />
        </g>
        {/* Statue of Liberty */}
        <g id="lm-liberty">
          <rect x="19" y="80" width="22" height="16" />
          <path d="M24 80 Q24 38 30 28 Q36 38 36 80 Z" />
          <circle cx="30" cy="21" r="6.5" />
          <path d="M30 14.5 L27 8" />
          <path d="M30 14.5 L30 6" />
          <path d="M30 14.5 L33 8" />
          <path d="M30 14.5 L25 11" />
          <path d="M30 14.5 L35 11" />
          <path d="M37 29 L47 12" />
          <path d="M47 12 L47 2" />
          <path d="M44 2 Q47 -4 50 2 Z" />
        </g>
      </defs>

      <use href="#lm-eiffel" x="50" y="250" width="130" height="220" />
      <use href="#lm-bigben" x="250" y="30" width="95" height="160" />
      <use href="#lm-liberty" x="1190" y="220" width="150" height="250" />
      <use href="#lm-eiffel" x="970" y="20" width="80" height="135" />
      <use href="#lm-bigben" x="710" y="260" width="110" height="185" />
      <use href="#lm-liberty" x="420" y="50" width="70" height="115" />
    </svg>
  );
}
