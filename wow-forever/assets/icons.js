/* Every drawn icon, by name. rail-* are the left-hand buttons; ability-* are Necromancer abilities;
   the rest are Necromancer talents and tree emblems. Each is a small SVG drawing. */
window.ICONS = {
  "ability-animate-dead": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-animate-dead" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-animate-dead" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-animate-dead)"/>
    <g filter="url(#gl-animate-dead)">
    <path d="M32 8 L36 22 L50 22 L39 31 L43 45 L32 36 L21 45 L25 31 L14 22 L28 22 Z" fill="#7fe0c4" opacity=".35"/>
    <path d="M9.1 42 a6.9 6.9 0 1 1 13.8 0 v2.5 q0 1.9 -1.9 2.2 v2.5 h-10 v-2.5 q-1.9 -0.3 -1.9 -2.2 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="13.3" cy="42.3" rx="2" ry="2.2" fill="#15110d"/>
    <ellipse cx="18.7" cy="42.3" rx="2" ry="2.2" fill="#15110d"/>
    <path d="M16 44.2 l-1 1.9 h2 z" fill="#15110d"/>
    <line x1="14.8" y1="47.1" x2="14.8" y2="49.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="16" y1="47.1" x2="16" y2="49.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="17.2" y1="47.1" x2="17.2" y2="49.1" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="13.3" cy="42.5" r="0.8" fill="#7fe0c4"/>
    <circle cx="18.7" cy="42.5" r="0.8" fill="#7fe0c4"/>
    <path d="M41.1 42 a6.9 6.9 0 1 1 13.8 0 v2.5 q0 1.9 -1.9 2.2 v2.5 h-10 v-2.5 q-1.9 -0.3 -1.9 -2.2 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="45.3" cy="42.3" rx="2" ry="2.2" fill="#15110d"/>
    <ellipse cx="50.7" cy="42.3" rx="2" ry="2.2" fill="#15110d"/>
    <path d="M48 44.2 l-1 1.9 h2 z" fill="#15110d"/>
    <line x1="46.8" y1="47.1" x2="46.8" y2="49.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="48" y1="47.1" x2="48" y2="49.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="49.2" y1="47.1" x2="49.2" y2="49.1" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="45.3" cy="42.5" r="0.8" fill="#7fe0c4"/>
    <circle cx="50.7" cy="42.5" r="0.8" fill="#7fe0c4"/>
    <path d="M22.4 32 a9.6 9.6 0 1 1 19.2 0 v3.5 q0 2.6 -2.6 3.1 v3.5 h-14 v-3.5 q-2.6 -0.4 -2.6 -3.1 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <ellipse cx="28.2" cy="32.4" rx="2.8" ry="3.1" fill="#15110d"/>
    <ellipse cx="35.8" cy="32.4" rx="2.8" ry="3.1" fill="#15110d"/>
    <path d="M32 35.1 l-1.4 2.6 h2.8 z" fill="#15110d"/>
    <line x1="30.2" y1="39.2" x2="30.2" y2="42" stroke="#15110d" stroke-width="0.8"/>
    <line x1="32" y1="39.2" x2="32" y2="42" stroke="#15110d" stroke-width="0.8"/>
    <line x1="33.8" y1="39.2" x2="33.8" y2="42" stroke="#15110d" stroke-width="0.8"/>
    <circle cx="28.2" cy="32.7" r="1.1" fill="#7fe0c4"/>
    <circle cx="35.8" cy="32.7" r="1.1" fill="#7fe0c4"/>
    <path d="M6 54 Q18 51 32 53 T58 54 V60 H6 z" fill="#2a221b" stroke="#15110d" stroke-width="1"/>
    <path d="M10 57 h6 M30 59 h8 M44 56 h5" stroke="#4a3d30" stroke-width="1.4" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-blight": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-blight" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-blight" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-blight)"/>
    <g filter="url(#gl-blight)">
    <path d="M4 40 H60 V60 H4 Z" fill="#3b4a20" stroke="#15110d" stroke-width="1.2"/>
    <path d="M12 44 l6 6 l-2 6 M30 42 l-4 8 l6 6 M46 44 l4 6 l-4 6" fill="none" stroke="#15110d" stroke-width="1.6"/>
    <path d="M16 40 q-6 -8 0 -16 q6 -8 0 -16" fill="none" stroke="#a9d94c" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>
    <path d="M32 40 q-6 -8 0 -16 q6 -8 0 -16" fill="none" stroke="#a9d94c" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>
    <path d="M48 40 q-6 -8 0 -16 q6 -8 0 -16" fill="none" stroke="#a9d94c" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-bone-armor": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-bone-armor" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-bone-armor" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-bone-armor)"/>
    <g filter="url(#gl-bone-armor)">
    <path d="M32 11.2 L48.2 17.5 V31.2 C48.2 42.5 38.2 48.8 32 51.2 C25.8 48.8 15.8 42.5 15.8 31.2 V17.5 z" fill="#2b2f33" stroke="#15110d" stroke-width="1.6"/>
    <path d="M18.0 22 Q32 15 46.0 22" fill="none" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M20.5 30 Q32 23 43.5 30" fill="none" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M23.0 38 Q32 31 41.0 38" fill="none" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M25.5 46 Q32 39 38.5 46" fill="none" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    <line x1="32" y1="14" x2="32" y2="48" stroke="#ece4cf" stroke-width="3"/>
    <circle cx="32" cy="14" r="3" fill="#7fe0c4"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-bone-prison": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-bone-prison" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-bone-prison" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-bone-prison)"/>
    <g filter="url(#gl-bone-prison)">
    <ellipse cx="32" cy="54" rx="20" ry="4" fill="#2a221b" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="32" cy="34" r="6" fill="#7fe0c4" opacity=".85"/>
    <rect x="28" y="40" width="8" height="12" rx="3" fill="#7fe0c4" opacity=".85"/>
    <path d="M14 54 Q18.5 30 32 10" fill="none" stroke="#15110d" stroke-width="5.4" stroke-linecap="round"/>
    <path d="M14 54 Q18.5 30 32 10" fill="none" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M23 54 Q25.25 30 32 10" fill="none" stroke="#15110d" stroke-width="5.4" stroke-linecap="round"/>
    <path d="M23 54 Q25.25 30 32 10" fill="none" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M32 54 Q32.0 30 32 10" fill="none" stroke="#15110d" stroke-width="5.4" stroke-linecap="round"/>
    <path d="M32 54 Q32.0 30 32 10" fill="none" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M41 54 Q38.75 30 32 10" fill="none" stroke="#15110d" stroke-width="5.4" stroke-linecap="round"/>
    <path d="M41 54 Q38.75 30 32 10" fill="none" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M50 54 Q45.5 30 32 10" fill="none" stroke="#15110d" stroke-width="5.4" stroke-linecap="round"/>
    <path d="M50 54 Q45.5 30 32 10" fill="none" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-bone-shard": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-bone-shard" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-bone-shard" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-bone-shard)"/>
    <g filter="url(#gl-bone-shard)">
    <path d="M8 20 h14 M6 30 h18 M10 40 h12" stroke="#7fe0c4" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>
    <polygon points="26,34 50,18 58,24 40,44 30,42" fill="#ece4cf" stroke="#15110d" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M34 36 L50 23" stroke="#a3987d" stroke-width="1.6"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-bone-spear": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-bone-spear" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-bone-spear" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-bone-spear)"/>
    <g filter="url(#gl-bone-spear)">
    <path d="M6 58 L44 20" stroke="#15110d" stroke-width="7" stroke-linecap="round"/>
    <path d="M6 58 L44 20" stroke="#ece4cf" stroke-width="4.4" stroke-linecap="round"/>
    <polygon points="40,16 58,6 48,24" fill="#ece4cf" stroke="#15110d" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M14 48 l6 -6" stroke="#a3987d" stroke-width="1.6"/>
    <path d="M22 40 l6 -6" stroke="#a3987d" stroke-width="1.6"/>
    <path d="M30 32 l6 -6" stroke="#a3987d" stroke-width="1.6"/>
    <path d="M48 36 q4 4 10 2 M40 46 q4 4 10 2" fill="none" stroke="#7fe0c4" stroke-width="2" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-consume-corpse": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-consume-corpse" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-consume-corpse" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-consume-corpse)"/>
    <g filter="url(#gl-consume-corpse)">
    <path d="M23.5 42 a8.5 8.5 0 1 1 17.1 0 v3.1 q0 2.3 -2.3 2.7 v3.1 h-12.4 v-3.1 q-2.3 -0.4 -2.3 -2.7 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.9"/>
    <ellipse cx="28.7" cy="42.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <ellipse cx="35.3" cy="42.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <path d="M32 44.8 l-1.2 2.3 h2.5 z" fill="#15110d"/>
    <line x1="30.4" y1="48.4" x2="30.4" y2="50.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="32" y1="48.4" x2="32" y2="50.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="33.5" y1="48.4" x2="33.5" y2="50.8" stroke="#15110d" stroke-width="0.7"/>
    <circle cx="28.7" cy="42.6" r="1" fill="#7fe0c4"/>
    <circle cx="35.3" cy="42.6" r="1" fill="#7fe0c4"/>
    <path d="M32 30 C20 24 44 18 32 12 C24 8 34 4 36 4" fill="none" stroke="#7fe0c4" stroke-width="3" stroke-linecap="round"/>
    <path d="M24 30 C16 22 28 18 22 10" fill="none" stroke="#7fe0c4" stroke-width="2" stroke-linecap="round" opacity=".6"/>
    <path d="M40 30 C48 22 36 18 42 10" fill="none" stroke="#7fe0c4" stroke-width="2" stroke-linecap="round" opacity=".6"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-corpse-explosion": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-corpse-explosion" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-corpse-explosion" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-corpse-explosion)"/>
    <g filter="url(#gl-corpse-explosion)">
    <polygon points="34,9 37.7,22.6 48.7,13.8 43.7,26.9 57.8,26.3 46,34 57.8,41.7 43.7,41.1 48.7,54.2 37.7,45.4 34,59 30.3,45.4 19.3,54.2 24.3,41.1 10.2,41.7 22,34 10.2,26.3 24.3,26.9 19.3,13.8 30.3,22.6" fill="#7fe0c4" stroke="#15110d" stroke-width="1.2" stroke-linejoin="round"/>
    <polygon points="34,20 36.2,27.3 42.2,22.7 39.7,29.9 47.3,29.7 41,34 47.3,38.3 39.7,38.1 42.2,45.3 36.2,40.7 34,48 31.8,40.7 25.8,45.3 28.3,38.1 20.7,38.3 27,34 20.7,29.7 28.3,29.9 25.8,22.7 31.8,27.3" fill="#ece4cf" stroke="#15110d" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M28.2 33 a5.8 5.8 0 1 1 11.6 0 v2.1 q0 1.6 -1.6 1.8 v2.1 h-8.4 v-2.1 q-1.6 -0.3 -1.6 -1.8 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.6"/>
    <ellipse cx="31.7" cy="33.3" rx="1.7" ry="1.9" fill="#15110d"/>
    <ellipse cx="36.3" cy="33.3" rx="1.7" ry="1.9" fill="#15110d"/>
    <path d="M34 34.9 l-0.8 1.6 h1.7 z" fill="#15110d"/>
    <line x1="33" y1="37.3" x2="33" y2="39" stroke="#15110d" stroke-width="0.5"/>
    <line x1="34" y1="37.3" x2="34" y2="39" stroke="#15110d" stroke-width="0.5"/>
    <line x1="35" y1="37.3" x2="35" y2="39" stroke="#15110d" stroke-width="0.5"/>
    <polygon points="8,12 12,14 9,17" fill="#ece4cf" stroke="#15110d" stroke-width=".8"/>
    <polygon points="52,10 56,12 53,15" fill="#ece4cf" stroke="#15110d" stroke-width=".8"/>
    <polygon points="54,50 58,52 55,55" fill="#ece4cf" stroke="#15110d" stroke-width=".8"/>
    <polygon points="8,50 12,52 9,55" fill="#ece4cf" stroke="#15110d" stroke-width=".8"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-cripple": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-cripple" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-cripple" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-cripple)"/>
    <g filter="url(#gl-cripple)">
    <line x1="10" y1="46" x2="30" y2="30" stroke="#15110d" stroke-width="7.4" stroke-linecap="round"/>
    <circle cx="8.1" cy="43.6" r="3.9" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="11.9" cy="48.4" r="3.9" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="28.1" cy="27.6" r="3.9" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="31.9" cy="32.4" r="3.9" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="10" y1="46" x2="30" y2="30" stroke="#ece4cf" stroke-width="5" stroke-linecap="round"/>
    <line x1="36" y1="34" x2="54" y2="18" stroke="#15110d" stroke-width="7.4" stroke-linecap="round"/>
    <circle cx="33.9" cy="31.7" r="3.9" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="38.1" cy="36.3" r="3.9" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="51.9" cy="15.7" r="3.9" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="56.1" cy="20.3" r="3.9" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="36" y1="34" x2="54" y2="18" stroke="#ece4cf" stroke-width="5" stroke-linecap="round"/>
    <path d="M30 22 l4 6 l-3 3 l5 6 l-2 4" fill="none" stroke="#7fe0c4" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M12 56 q8 -6 16 0 q8 6 16 0 q6 -4 10 -2" fill="none" stroke="#7fe0c4" stroke-width="2" opacity=".7"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-dark-ritual": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-dark-ritual" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-dark-ritual" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-dark-ritual)"/>
    <g filter="url(#gl-dark-ritual)">
    <circle cx="32" cy="34" r="22" fill="none" stroke="#a88bff" stroke-width="1.8"/>
    <polygon points="32,12 44.9,51.8 11.1,27.2 52.9,27.2 19.1,51.8" fill="none" stroke="#a88bff" stroke-width="1.6"/>
    <path d="M32 8 L36 14 L34 40 L30 40 L28 14 Z" fill="#c9ced3" stroke="#15110d" stroke-width="1.4"/>
    <rect x="24" y="40" width="16" height="4" rx="1.5" fill="#6b4b2c" stroke="#15110d" stroke-width="1.2"/>
    <rect x="30" y="44" width="4" height="10" fill="#6b4b2c" stroke="#15110d" stroke-width="1.2"/>
    <path d="M16 44.6 C20.1 50 19.6 54 16 54 C12.4 54 11.9 50 16 44.6 z" fill="#d04a3a" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="14.7" cy="50.9" rx="0.9" ry="1.4" fill="#ffffff" opacity=".55"/>
    <path d="M48 44.6 C52 50 51.6 54 48 54 C44.4 54 44 50 48 44.6 z" fill="#d04a3a" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="46.6" cy="50.9" rx="0.9" ry="1.4" fill="#ffffff" opacity=".55"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-exhume": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-exhume" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-exhume" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-exhume)"/>
    <g filter="url(#gl-exhume)">
    <path d="M6 40 Q18 37 32 39 T58 40 V60 H6 z" fill="#2a221b" stroke="#15110d" stroke-width="1"/>
    <path d="M10 43 h6 M30 45 h8 M44 42 h5" stroke="#4a3d30" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M20.4 38 a7.6 7.6 0 1 1 15.1 0 v2.8 q0 2.1 -2.1 2.4 v2.8 h-11 v-2.8 q-2.1 -0.3 -2.1 -2.4 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="25" cy="38.3" rx="2.2" ry="2.5" fill="#15110d"/>
    <ellipse cx="31" cy="38.3" rx="2.2" ry="2.5" fill="#15110d"/>
    <path d="M28 40.5 l-1.1 2.1 h2.2 z" fill="#15110d"/>
    <line x1="26.6" y1="43.6" x2="26.6" y2="45.8" stroke="#15110d" stroke-width="0.6"/>
    <line x1="28" y1="43.6" x2="28" y2="45.8" stroke="#15110d" stroke-width="0.6"/>
    <line x1="29.4" y1="43.6" x2="29.4" y2="45.8" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="25" cy="38.5" r="0.9" fill="#7fe0c4"/>
    <circle cx="31" cy="38.5" r="0.9" fill="#7fe0c4"/>
    <line x1="40" y1="8" x2="50" y2="40" stroke="#6b4b2c" stroke-width="4" stroke-linecap="round"/>
    <path d="M44 38 L56 34 L58 48 Q52 54 46 50 Z" fill="#8a9196" stroke="#15110d" stroke-width="1.4"/>
    <line x1="14" y1="30" x2="14" y2="14" stroke="#7fe0c4" stroke-width="2.4" stroke-linecap="round"/>
    <polygon points="14,12 16.9,17.3 11.1,17.3" fill="#7fe0c4"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-grasping-dead": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-grasping-dead" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-grasping-dead" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-grasping-dead)"/>
    <g filter="url(#gl-grasping-dead)">
    <path d="M6 50 Q18 47 32 49 T58 50 V60 H6 z" fill="#2a221b" stroke="#15110d" stroke-width="1"/>
    <path d="M10 53 h6 M30 55 h8 M44 52 h5" stroke="#4a3d30" stroke-width="1.4" stroke-linecap="round"/>
    <rect x="16.1" y="39.8" width="3.7" height="10.2" rx="1.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <ellipse cx="18" cy="38.1" rx="5.1" ry="3.8" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <line x1="13.8" y1="36.4" x2="13.1" y2="27.9" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="13.8" y1="36.4" x2="13.1" y2="27.9" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    <line x1="16.5" y1="36.4" x2="16.2" y2="25.4" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="16.5" y1="36.4" x2="16.2" y2="25.4" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    <line x1="19.5" y1="36.4" x2="19.8" y2="26.2" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="19.5" y1="36.4" x2="19.8" y2="26.2" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    <line x1="22.2" y1="36.4" x2="22.9" y2="28.8" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="22.2" y1="36.4" x2="22.9" y2="28.8" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    <line x1="12.9" y1="39" x2="9.5" y2="33.9" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="12.9" y1="39" x2="9.5" y2="33.9" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    <rect x="29.7" y="39.4" width="4.6" height="12.6" rx="2.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <ellipse cx="32" cy="37.3" rx="6.3" ry="4.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <line x1="26.8" y1="35.2" x2="26" y2="24.7" stroke="#15110d" stroke-width="3.8" stroke-linecap="round"/>
    <line x1="26.8" y1="35.2" x2="26" y2="24.7" stroke="#ece4cf" stroke-width="2.3" stroke-linecap="round"/>
    <line x1="30.1" y1="35.2" x2="29.8" y2="21.5" stroke="#15110d" stroke-width="3.8" stroke-linecap="round"/>
    <line x1="30.1" y1="35.2" x2="29.8" y2="21.5" stroke="#ece4cf" stroke-width="2.3" stroke-linecap="round"/>
    <line x1="33.9" y1="35.2" x2="34.2" y2="22.6" stroke="#15110d" stroke-width="3.8" stroke-linecap="round"/>
    <line x1="33.9" y1="35.2" x2="34.2" y2="22.6" stroke="#ece4cf" stroke-width="2.3" stroke-linecap="round"/>
    <line x1="37.2" y1="35.2" x2="38" y2="25.8" stroke="#15110d" stroke-width="3.8" stroke-linecap="round"/>
    <line x1="37.2" y1="35.2" x2="38" y2="25.8" stroke="#ece4cf" stroke-width="2.3" stroke-linecap="round"/>
    <line x1="25.7" y1="38.4" x2="21.5" y2="32" stroke="#15110d" stroke-width="3.8" stroke-linecap="round"/>
    <line x1="25.7" y1="38.4" x2="21.5" y2="32" stroke="#ece4cf" stroke-width="2.3" stroke-linecap="round"/>
    <rect x="44.1" y="39.8" width="3.7" height="10.2" rx="1.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <ellipse cx="46" cy="38.1" rx="5.1" ry="3.8" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <line x1="41.8" y1="36.4" x2="41.1" y2="27.9" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="41.8" y1="36.4" x2="41.1" y2="27.9" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    <line x1="44.5" y1="36.4" x2="44.2" y2="25.4" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="44.5" y1="36.4" x2="44.2" y2="25.4" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    <line x1="47.5" y1="36.4" x2="47.8" y2="26.2" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="47.5" y1="36.4" x2="47.8" y2="26.2" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    <line x1="50.2" y1="36.4" x2="50.9" y2="28.8" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="50.2" y1="36.4" x2="50.9" y2="28.8" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    <line x1="40.9" y1="39" x2="37.5" y2="33.9" stroke="#15110d" stroke-width="3.1" stroke-linecap="round"/>
    <line x1="40.9" y1="39" x2="37.5" y2="33.9" stroke="#ece4cf" stroke-width="1.9" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-grave-chill": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-grave-chill" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-grave-chill" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-grave-chill)"/>
    <g filter="url(#gl-grave-chill)">
    <path d="M14.6 52 V31.1 Q14.6 19.7 26 19.7 Q37.4 19.7 37.4 31.1 V52 Z" fill="#7e8790" stroke="#15110d" stroke-width="1.6"/>
    <path d="M20 30 h12 M26 24 v14" stroke="#15110d" stroke-width="2.4"/>
    <line x1="46" y1="22" x2="58" y2="22" stroke="#8fd0ff" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="53.2" y1="22" x2="55.7" y2="19.4" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="53.2" y1="22" x2="55.7" y2="24.6" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="46" y1="22" x2="52" y2="32.4" stroke="#8fd0ff" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="49.6" y1="28.2" x2="53.1" y2="29.1" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="49.6" y1="28.2" x2="48.6" y2="31.7" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="46" y1="22" x2="40" y2="32.4" stroke="#8fd0ff" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="42.4" y1="28.2" x2="43.4" y2="31.7" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="42.4" y1="28.2" x2="38.9" y2="29.1" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="46" y1="22" x2="34" y2="22" stroke="#8fd0ff" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="38.8" y1="22" x2="36.3" y2="24.6" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="38.8" y1="22" x2="36.3" y2="19.4" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="46" y1="22" x2="40" y2="11.6" stroke="#8fd0ff" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="42.4" y1="15.8" x2="38.9" y2="14.9" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="42.4" y1="15.8" x2="43.4" y2="12.3" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="46" y1="22" x2="52" y2="11.6" stroke="#8fd0ff" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="49.6" y1="15.8" x2="48.6" y2="12.3" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <line x1="49.6" y1="15.8" x2="53.1" y2="14.9" stroke="#8fd0ff" stroke-width="1.6500000000000001" stroke-linecap="round"/>
    <circle cx="46" cy="22" r="1.9" fill="#ffffff"/>
    <path d="M4 52 H60 V58 H4 Z" fill="#cfe8f7" stroke="#15110d" stroke-width="1"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-hush-of-the-grave": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-hush-of-the-grave" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-hush-of-the-grave" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-hush-of-the-grave)"/>
    <g filter="url(#gl-hush-of-the-grave)">
    <path d="M16.2 30 a13.8 13.8 0 1 1 27.5 0 v5 q0 3.8 -3.8 4.4 v5 h-20 v-5 q-3.8 -0.6 -3.8 -4.4 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.5"/>
    <ellipse cx="24.6" cy="30.6" rx="4" ry="4.5" fill="#15110d"/>
    <ellipse cx="35.4" cy="30.6" rx="4" ry="4.5" fill="#15110d"/>
    <path d="M30 34.5 l-2 3.8 h4 z" fill="#15110d"/>
    <line x1="27.5" y1="40.2" x2="27.5" y2="44.2" stroke="#15110d" stroke-width="1.1"/>
    <line x1="30" y1="40.2" x2="30" y2="44.2" stroke="#15110d" stroke-width="1.1"/>
    <line x1="32.5" y1="40.2" x2="32.5" y2="44.2" stroke="#15110d" stroke-width="1.1"/>
    <circle cx="24.6" cy="31" r="1.6" fill="#7fe0c4"/>
    <circle cx="35.4" cy="31" r="1.6" fill="#7fe0c4"/>
    <path d="M18 44 H42" stroke="#15110d" stroke-width="3"/>
    <path d="M21 40 v8" stroke="#d04a3a" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M27 40 v8" stroke="#d04a3a" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M33 40 v8" stroke="#d04a3a" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M39 40 v8" stroke="#d04a3a" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M48 12 l8 8 M56 12 l-8 8" stroke="#d04a3a" stroke-width="3" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-plague-cloud": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-plague-cloud" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-plague-cloud" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-plague-cloud)"/>
    <g filter="url(#gl-plague-cloud)">
    <circle cx="17" cy="33" r="11.2" fill="#6f8f3a" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="32" cy="24.2" r="15" fill="#6f8f3a" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="47" cy="31.8" r="11.2" fill="#6f8f3a" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="37" cy="36.8" r="11.2" fill="#6f8f3a" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="25.8" cy="38" r="10" fill="#6f8f3a" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="17" cy="33" r="10" fill="#6f8f3a"/>
    <circle cx="32" cy="24.2" r="13.8" fill="#6f8f3a"/>
    <circle cx="47" cy="31.8" r="10" fill="#6f8f3a"/>
    <circle cx="37" cy="36.8" r="10" fill="#6f8f3a"/>
    <circle cx="25.8" cy="38" r="8.8" fill="#6f8f3a"/>
    <path d="M25.8 30 a6.2 6.2 0 1 1 12.4 0 v2.2 q0 1.7 -1.7 2 v2.2 h-9 v-2.2 q-1.7 -0.3 -1.7 -2 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.7"/>
    <ellipse cx="29.6" cy="30.3" rx="1.8" ry="2" fill="#15110d"/>
    <ellipse cx="34.4" cy="30.3" rx="1.8" ry="2" fill="#15110d"/>
    <path d="M32 32 l-0.9 1.7 h1.8 z" fill="#15110d"/>
    <line x1="30.9" y1="34.6" x2="30.9" y2="36.4" stroke="#15110d" stroke-width="0.5"/>
    <line x1="32" y1="34.6" x2="32" y2="36.4" stroke="#15110d" stroke-width="0.5"/>
    <line x1="33.1" y1="34.6" x2="33.1" y2="36.4" stroke="#15110d" stroke-width="0.5"/>
    <path d="M18 49.8 C21.1 54 20.8 57.1 18 57.1 C15.2 57.1 14.8 54 18 49.8 z" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="16.9" cy="54.7" rx="0.7" ry="1.1" fill="#ffffff" opacity=".55"/>
    <path d="M32 49.8 C35.1 54 34.8 57.1 32 57.1 C29.2 57.1 28.9 54 32 49.8 z" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="30.9" cy="54.7" rx="0.7" ry="1.1" fill="#ffffff" opacity=".55"/>
    <path d="M46 49.8 C49.1 54 48.8 57.1 46 57.1 C43.2 57.1 42.9 54 46 49.8 z" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="45" cy="54.7" rx="0.7" ry="1.1" fill="#ffffff" opacity=".55"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-raise-abomination": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-raise-abomination" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-raise-abomination" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-raise-abomination)"/>
    <g filter="url(#gl-raise-abomination)">
    <path d="M10 58 Q8 24 32 20 Q56 24 54 58 Z" fill="#7d8a6a" stroke="#15110d" stroke-width="1.6"/>
    <circle cx="32" cy="22" r="10" fill="#8e9a7a" stroke="#15110d" stroke-width="1.6"/>
    <circle cx="28" cy="21" r="2" fill="#7fe0c4"/>
    <circle cx="36" cy="22" r="1.4" fill="#7fe0c4"/>
    <path d="M20 34 L44 52 M24 48 L40 30" stroke="#15110d" stroke-width="1.6"/>
    <path d="M24 38 l3 -3 M25 41 l3 -3" stroke="#15110d" stroke-width="1.2"/>
    <path d="M30 43 l3 -3 M31 46 l3 -3" stroke="#15110d" stroke-width="1.2"/>
    <path d="M36 48 l3 -3 M37 51 l3 -3" stroke="#15110d" stroke-width="1.2"/>
    <path d="M30 34 l3 -3 M31 37 l3 -3" stroke="#15110d" stroke-width="1.2"/>
    <path d="M50 30 q8 2 6 12 q-2 6 -6 4" fill="none" stroke="#9aa1a6" stroke-width="3" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-raise-dead": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-raise-dead" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-raise-dead" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-raise-dead)"/>
    <g filter="url(#gl-raise-dead)">
    <path d="M6 44 Q18 41 32 43 T58 44 V60 H6 z" fill="#2a221b" stroke="#15110d" stroke-width="1"/>
    <path d="M10 47 h6 M30 49 h8 M44 46 h5" stroke="#4a3d30" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M21 30 a11 11 0 1 1 22 0 v4 q0 3 -3 3.5 v4 h-16 v-4 q-3 -0.5 -3 -3.5 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <ellipse cx="27.7" cy="30.5" rx="3.2" ry="3.6" fill="#15110d"/>
    <ellipse cx="36.3" cy="30.5" rx="3.2" ry="3.6" fill="#15110d"/>
    <path d="M32 33.6 l-1.6 3 h3.2 z" fill="#15110d"/>
    <line x1="30" y1="38.2" x2="30" y2="41.4" stroke="#15110d" stroke-width="0.9"/>
    <line x1="32" y1="38.2" x2="32" y2="41.4" stroke="#15110d" stroke-width="0.9"/>
    <line x1="34" y1="38.2" x2="34" y2="41.4" stroke="#15110d" stroke-width="0.9"/>
    <circle cx="27.7" cy="30.8" r="1.3" fill="#7fe0c4"/>
    <circle cx="36.3" cy="30.8" r="1.3" fill="#7fe0c4"/>
    <path d="M18 54 q-2 -6 0 -10" stroke="#7fe0c4" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M46 54 q-2 -6 0 -10" stroke="#7fe0c4" stroke-width="2" fill="none" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-shroud-of-the-grave": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-shroud-of-the-grave" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-shroud-of-the-grave" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-shroud-of-the-grave)"/>
    <g filter="url(#gl-shroud-of-the-grave)">
    <path d="M18.8 50 V25.8 Q18.8 12.6 32 12.6 Q45.2 12.6 45.2 25.8 V50 Z" fill="#7e8790" stroke="#15110d" stroke-width="1.6"/>
    <path d="M6 50 Q18 47 32 49 T58 50 V60 H6 z" fill="#2a221b" stroke="#15110d" stroke-width="1"/>
    <path d="M10 53 h6 M30 55 h8 M44 52 h5" stroke="#4a3d30" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M6 46 Q20 38 32 44 T58 42 V50 Q44 46 32 50 T6 52 Z" fill="#7fe0c4" opacity=".35"/>
    <path d="M24 26 q8 6 16 0" fill="none" stroke="#15110d" stroke-width="2.4" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-skeletal-mage": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-skeletal-mage" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-skeletal-mage" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-skeletal-mage)"/>
    <g filter="url(#gl-skeletal-mage)">
    <path d="M14 40 Q14 10 32 8 Q50 10 50 40 Q42 32 32 32 Q22 32 14 40 Z" fill="#2f3446" stroke="#15110d" stroke-width="1.6"/>
    <path d="M23.5 32 a8.5 8.5 0 1 1 17.1 0 v3.1 q0 2.3 -2.3 2.7 v3.1 h-12.4 v-3.1 q-2.3 -0.4 -2.3 -2.7 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.9"/>
    <ellipse cx="28.7" cy="32.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <ellipse cx="35.3" cy="32.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <path d="M32 34.8 l-1.2 2.3 h2.5 z" fill="#15110d"/>
    <line x1="30.4" y1="38.4" x2="30.4" y2="40.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="32" y1="38.4" x2="32" y2="40.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="33.5" y1="38.4" x2="33.5" y2="40.8" stroke="#15110d" stroke-width="0.7"/>
    <circle cx="28.7" cy="32.6" r="1" fill="#8fd0ff"/>
    <circle cx="35.3" cy="32.6" r="1" fill="#8fd0ff"/>
    <circle cx="48" cy="50" r="7" fill="#8fd0ff" stroke="#15110d" stroke-width="1.4"/>
    <line x1="48" y1="50" x2="53" y2="50" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="51" y1="50" x2="52" y2="48.9" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="51" y1="50" x2="52" y2="51.1" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="48" y1="50" x2="50.5" y2="54.3" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="49.5" y1="52.6" x2="51" y2="53" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="49.5" y1="52.6" x2="49.1" y2="54" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="48" y1="50" x2="45.5" y2="54.3" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="46.5" y1="52.6" x2="46.9" y2="54" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="46.5" y1="52.6" x2="45" y2="53" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="48" y1="50" x2="43" y2="50" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="45" y1="50" x2="44" y2="51.1" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="45" y1="50" x2="44" y2="48.9" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="48" y1="50" x2="45.5" y2="45.7" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="46.5" y1="47.4" x2="45" y2="47" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="46.5" y1="47.4" x2="46.9" y2="46" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="48" y1="50" x2="50.5" y2="45.7" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="49.5" y1="47.4" x2="49.1" y2="46" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <line x1="49.5" y1="47.4" x2="51" y2="47" stroke="#ffffff" stroke-width="1.0499999999999998" stroke-linecap="round"/>
    <circle cx="48" cy="50" r="0.8" fill="#ffffff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-unholy-frenzy": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-unholy-frenzy" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-unholy-frenzy" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-unholy-frenzy)"/>
    <g filter="url(#gl-unholy-frenzy)">
    <path d="M20.3 34 a11.7 11.7 0 1 1 23.4 0 v4.2 q0 3.2 -3.2 3.7 v4.2 h-17 v-4.2 q-3.2 -0.5 -3.2 -3.7 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="27.4" cy="34.5" rx="3.4" ry="3.8" fill="#15110d"/>
    <ellipse cx="36.6" cy="34.5" rx="3.4" ry="3.8" fill="#15110d"/>
    <path d="M32 37.8 l-1.7 3.2 h3.4 z" fill="#15110d"/>
    <line x1="29.9" y1="42.7" x2="29.9" y2="46.1" stroke="#15110d" stroke-width="1"/>
    <line x1="32" y1="42.7" x2="32" y2="46.1" stroke="#15110d" stroke-width="1"/>
    <line x1="34.1" y1="42.7" x2="34.1" y2="46.1" stroke="#15110d" stroke-width="1"/>
    <circle cx="27.4" cy="34.9" r="1.4" fill="#d04a3a"/>
    <circle cx="36.6" cy="34.9" r="1.4" fill="#d04a3a"/>
    <path d="M14 6 L20 22" stroke="#d04a3a" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M24 6 L30 22" stroke="#d04a3a" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M34 6 L40 22" stroke="#d04a3a" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M48 12 l6 -4 M50 20 l8 0 M48 28 l6 4" stroke="#7fe0c4" stroke-width="2.4" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ability-wither": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-wither" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#173a35"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-wither" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-wither)"/>
    <g filter="url(#gl-wither)">
    <path d="M32 58 Q30 40 34 30 Q38 20 30 12" fill="none" stroke="#5b4630" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M33 34 Q46 30 50 40 Q42 44 33 34 Z" fill="#6f6a3a" stroke="#15110d" stroke-width="1.2"/>
    <path d="M31 24 Q18 18 14 28 Q24 32 31 24 Z" fill="#5d5a33" stroke="#15110d" stroke-width="1.2"/>
    <path d="M30 12 Q22 4 26 2" fill="none" stroke="#5b4630" stroke-width="2"/>
    <path d="M48 8.8 C53.4 16 52.8 21.4 48 21.4 C43.2 21.4 42.6 16 48 8.8 z" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="46.2" cy="17.2" rx="1.2" ry="1.9" fill="#ffffff" opacity=".55"/>
    <path d="M16 38.6 C20.1 44 19.6 48 16 48 C12.4 48 11.9 44 16 38.6 z" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="14.7" cy="44.9" rx="0.9" ry="1.4" fill="#ffffff" opacity=".55"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#7fe0c4" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "army-of-the-damned": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-army-of-the-damned" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-army-of-the-damned" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-army-of-the-damned)"/>
    <g filter="url(#gl-army-of-the-damned)">
    <path d="M6 50 Q18 47 32 49 T58 50 V60 H6 z" fill="#2a221b" stroke="#15110d" stroke-width="1"/>
    <path d="M10 53 h6 M30 55 h8 M44 52 h5" stroke="#4a3d30" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M8.2 38 a5.8 5.8 0 1 1 11.6 0 v2.1 q0 1.6 -1.6 1.8 v2.1 h-8.4 v-2.1 q-1.6 -0.3 -1.6 -1.8 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.6"/>
    <ellipse cx="11.7" cy="38.3" rx="1.7" ry="1.9" fill="#15110d"/>
    <ellipse cx="16.3" cy="38.3" rx="1.7" ry="1.9" fill="#15110d"/>
    <path d="M14 39.9 l-0.8 1.6 h1.7 z" fill="#15110d"/>
    <line x1="12.9" y1="42.3" x2="12.9" y2="44" stroke="#15110d" stroke-width="0.5"/>
    <line x1="14" y1="42.3" x2="14" y2="44" stroke="#15110d" stroke-width="0.5"/>
    <line x1="15.1" y1="42.3" x2="15.1" y2="44" stroke="#15110d" stroke-width="0.5"/>
    <circle cx="11.7" cy="38.4" r="0.7" fill="#f0c46a"/>
    <circle cx="16.3" cy="38.4" r="0.7" fill="#f0c46a"/>
    <path d="M44.2 38 a5.8 5.8 0 1 1 11.6 0 v2.1 q0 1.6 -1.6 1.8 v2.1 h-8.4 v-2.1 q-1.6 -0.3 -1.6 -1.8 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.6"/>
    <ellipse cx="47.7" cy="38.3" rx="1.7" ry="1.9" fill="#15110d"/>
    <ellipse cx="52.3" cy="38.3" rx="1.7" ry="1.9" fill="#15110d"/>
    <path d="M50 39.9 l-0.8 1.6 h1.7 z" fill="#15110d"/>
    <line x1="49" y1="42.3" x2="49" y2="44" stroke="#15110d" stroke-width="0.5"/>
    <line x1="50" y1="42.3" x2="50" y2="44" stroke="#15110d" stroke-width="0.5"/>
    <line x1="51" y1="42.3" x2="51" y2="44" stroke="#15110d" stroke-width="0.5"/>
    <circle cx="47.7" cy="38.4" r="0.7" fill="#f0c46a"/>
    <circle cx="52.3" cy="38.4" r="0.7" fill="#f0c46a"/>
    <path d="M16.1 30 a6.9 6.9 0 1 1 13.8 0 v2.5 q0 1.9 -1.9 2.2 v2.5 h-10 v-2.5 q-1.9 -0.3 -1.9 -2.2 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="20.3" cy="30.3" rx="2" ry="2.2" fill="#15110d"/>
    <ellipse cx="25.7" cy="30.3" rx="2" ry="2.2" fill="#15110d"/>
    <path d="M23 32.2 l-1 1.9 h2 z" fill="#15110d"/>
    <line x1="21.8" y1="35.1" x2="21.8" y2="37.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="23" y1="35.1" x2="23" y2="37.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="24.2" y1="35.1" x2="24.2" y2="37.1" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="20.3" cy="30.5" r="0.8" fill="#f0c46a"/>
    <circle cx="25.7" cy="30.5" r="0.8" fill="#f0c46a"/>
    <path d="M34.1 30 a6.9 6.9 0 1 1 13.8 0 v2.5 q0 1.9 -1.9 2.2 v2.5 h-10 v-2.5 q-1.9 -0.3 -1.9 -2.2 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="38.3" cy="30.3" rx="2" ry="2.2" fill="#15110d"/>
    <ellipse cx="43.7" cy="30.3" rx="2" ry="2.2" fill="#15110d"/>
    <path d="M41 32.2 l-1 1.9 h2 z" fill="#15110d"/>
    <line x1="39.8" y1="35.1" x2="39.8" y2="37.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="41" y1="35.1" x2="41" y2="37.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="42.2" y1="35.1" x2="42.2" y2="37.1" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="38.3" cy="30.5" r="0.8" fill="#f0c46a"/>
    <circle cx="43.7" cy="30.5" r="0.8" fill="#f0c46a"/>
    <path d="M23.5 24 a8.5 8.5 0 1 1 17.1 0 v3.1 q0 2.3 -2.3 2.7 v3.1 h-12.4 v-3.1 q-2.3 -0.4 -2.3 -2.7 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.9"/>
    <ellipse cx="28.7" cy="24.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <ellipse cx="35.3" cy="24.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <path d="M32 26.8 l-1.2 2.3 h2.5 z" fill="#15110d"/>
    <line x1="30.4" y1="30.4" x2="30.4" y2="32.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="32" y1="30.4" x2="32" y2="32.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="33.5" y1="30.4" x2="33.5" y2="32.8" stroke="#15110d" stroke-width="0.7"/>
    <circle cx="28.7" cy="24.6" r="1" fill="#f0c46a"/>
    <circle cx="35.3" cy="24.6" r="1" fill="#f0c46a"/>
    <line x1="32" y1="6" x2="32" y2="14" stroke="#f0c46a" stroke-width="2"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "biting-cold": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-biting-cold" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-biting-cold" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-biting-cold)"/>
    <g filter="url(#gl-biting-cold)">
    <path d="M10 10 L20 10 L15.0 46 Z" fill="#8fd0ff" stroke="#15110d" stroke-width="1.3" stroke-linejoin="round"/>
    <path d="M22 10 L30 10 L26.0 34 Z" fill="#8fd0ff" stroke="#15110d" stroke-width="1.3" stroke-linejoin="round"/>
    <path d="M32 10 L44 10 L38.0 54 Z" fill="#8fd0ff" stroke="#15110d" stroke-width="1.3" stroke-linejoin="round"/>
    <path d="M46 10 L54 10 L50.0 38 Z" fill="#8fd0ff" stroke="#15110d" stroke-width="1.3" stroke-linejoin="round"/>
    <rect x="8" y="6" width="48" height="6" rx="2" fill="#ece4cf" stroke="#15110d" stroke-width="1.3"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "bone-plating": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-bone-plating" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-bone-plating" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-bone-plating)"/>
    <g filter="url(#gl-bone-plating)">
    <path d="M32 11.2 L48.2 17.5 V31.2 C48.2 42.5 38.2 48.8 32 51.2 C25.8 48.8 15.8 42.5 15.8 31.2 V17.5 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.6"/>
    <line x1="22" y1="22" x2="42" y2="42" stroke="#15110d" stroke-width="5.6" stroke-linecap="round"/>
    <circle cx="23.4" cy="20.6" r="2.5" fill="#a3987d" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="20.6" cy="23.4" r="2.5" fill="#a3987d" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="43.4" cy="40.6" r="2.5" fill="#a3987d" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="40.6" cy="43.4" r="2.5" fill="#a3987d" stroke="#15110d" stroke-width="1.2"/>
    <line x1="22" y1="22" x2="42" y2="42" stroke="#a3987d" stroke-width="3.2" stroke-linecap="round"/>
    <line x1="42" y1="22" x2="22" y2="42" stroke="#15110d" stroke-width="5.6" stroke-linecap="round"/>
    <circle cx="43.4" cy="23.4" r="2.5" fill="#a3987d" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="40.6" cy="20.6" r="2.5" fill="#a3987d" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="23.4" cy="43.4" r="2.5" fill="#a3987d" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="20.6" cy="40.6" r="2.5" fill="#a3987d" stroke="#15110d" stroke-width="1.2"/>
    <line x1="42" y1="22" x2="22" y2="42" stroke="#a3987d" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="32" cy="32" r="3" fill="#8fd0ff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "bone-splinters": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-bone-splinters" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-bone-splinters" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-bone-splinters)"/>
    <g filter="url(#gl-bone-splinters)">
    <polygon points="12,50 30,30 26,44" fill="#ece4cf" stroke="#15110d" stroke-width="1.3" stroke-linejoin="round"/>
    <polygon points="34,12 40,30 30,26" fill="#ece4cf" stroke="#15110d" stroke-width="1.3" stroke-linejoin="round"/>
    <polygon points="52,40 36,34 46,46" fill="#ece4cf" stroke="#15110d" stroke-width="1.3" stroke-linejoin="round"/>
    <polygon points="20,16 28,26 18,24" fill="#ece4cf" stroke="#15110d" stroke-width="1.3" stroke-linejoin="round"/>
    <polygon points="32,26 33.5,29.4 37.2,29 35,32 37.2,35 33.5,34.6 32,38 30.5,34.6 26.8,35 29,32 26.8,29 30.5,29.4" fill="#a9d94c" stroke="#15110d" stroke-width="1.2" stroke-linejoin="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "carrion-swarm": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-carrion-swarm" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-carrion-swarm" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-carrion-swarm)"/>
    <g filter="url(#gl-carrion-swarm)">
    <g transform="translate(32 34) rotate(0) scale(1)">
    <path d="M-12 -6 l-6 -4 M-12 2 l-7 0 M-10 9 l-6 5 M12 -6 l6 -4 M12 2 l7 0 M10 9 l6 5" stroke="#ece4cf" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="0" cy="3" rx="11" ry="14" fill="#a9d94c" stroke="#15110d" stroke-width="1.6"/>
    <line x1="0" y1="-10" x2="0" y2="17" stroke="#15110d" stroke-width="1.4"/>
    <circle cx="0" cy="-12" r="5" fill="#2b2a24" stroke="#15110d" stroke-width="1.2"/>
    </g>
    <g transform="translate(16 18) rotate(-30) scale(0.55)">
    <path d="M-12 -6 l-6 -4 M-12 2 l-7 0 M-10 9 l-6 5 M12 -6 l6 -4 M12 2 l7 0 M10 9 l6 5" stroke="#ece4cf" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="0" cy="3" rx="11" ry="14" fill="#a9d94c" stroke="#15110d" stroke-width="1.6"/>
    <line x1="0" y1="-10" x2="0" y2="17" stroke="#15110d" stroke-width="1.4"/>
    <circle cx="0" cy="-12" r="5" fill="#2b2a24" stroke="#15110d" stroke-width="1.2"/>
    </g>
    <g transform="translate(48 16) rotate(25) scale(0.5)">
    <path d="M-12 -6 l-6 -4 M-12 2 l-7 0 M-10 9 l-6 5 M12 -6 l6 -4 M12 2 l7 0 M10 9 l6 5" stroke="#ece4cf" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="0" cy="3" rx="11" ry="14" fill="#a9d94c" stroke="#15110d" stroke-width="1.6"/>
    <line x1="0" y1="-10" x2="0" y2="17" stroke="#15110d" stroke-width="1.4"/>
    <circle cx="0" cy="-12" r="5" fill="#2b2a24" stroke="#15110d" stroke-width="1.2"/>
    </g>
    <g transform="translate(50 48) rotate(40) scale(0.45)">
    <path d="M-12 -6 l-6 -4 M-12 2 l-7 0 M-10 9 l-6 5 M12 -6 l6 -4 M12 2 l7 0 M10 9 l6 5" stroke="#ece4cf" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="0" cy="3" rx="11" ry="14" fill="#a9d94c" stroke="#15110d" stroke-width="1.6"/>
    <line x1="0" y1="-10" x2="0" y2="17" stroke="#15110d" stroke-width="1.4"/>
    <circle cx="0" cy="-12" r="5" fill="#2b2a24" stroke="#15110d" stroke-width="1.2"/>
    </g>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "charnel-wagon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-charnel-wagon" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-charnel-wagon" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-charnel-wagon)"/>
    <g filter="url(#gl-charnel-wagon)">
    <circle cx="32" cy="32" r="19" fill="none" stroke="#ece4cf" stroke-width="4.5"/>
    <circle cx="32" cy="32" r="19" fill="none" stroke="#15110d" stroke-width="1" />
    <line x1="32" y1="32" x2="50" y2="32" stroke="#a3987d" stroke-width="2.6"/>
    <line x1="32" y1="32" x2="44.7" y2="44.7" stroke="#a3987d" stroke-width="2.6"/>
    <line x1="32" y1="32" x2="32" y2="50" stroke="#a3987d" stroke-width="2.6"/>
    <line x1="32" y1="32" x2="19.3" y2="44.7" stroke="#a3987d" stroke-width="2.6"/>
    <line x1="32" y1="32" x2="14" y2="32" stroke="#a3987d" stroke-width="2.6"/>
    <line x1="32" y1="32" x2="19.3" y2="19.3" stroke="#a3987d" stroke-width="2.6"/>
    <line x1="32" y1="32" x2="32" y2="14" stroke="#a3987d" stroke-width="2.6"/>
    <line x1="32" y1="32" x2="44.7" y2="19.3" stroke="#a3987d" stroke-width="2.6"/>
    <path d="M25.8 30 a6.2 6.2 0 1 1 12.4 0 v2.2 q0 1.7 -1.7 2 v2.2 h-9 v-2.2 q-1.7 -0.3 -1.7 -2 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.7"/>
    <ellipse cx="29.6" cy="30.3" rx="1.8" ry="2" fill="#15110d"/>
    <ellipse cx="34.4" cy="30.3" rx="1.8" ry="2" fill="#15110d"/>
    <path d="M32 32 l-0.9 1.7 h1.8 z" fill="#15110d"/>
    <line x1="30.9" y1="34.6" x2="30.9" y2="36.4" stroke="#15110d" stroke-width="0.5"/>
    <line x1="32" y1="34.6" x2="32" y2="36.4" stroke="#15110d" stroke-width="0.5"/>
    <line x1="33.1" y1="34.6" x2="33.1" y2="36.4" stroke="#15110d" stroke-width="0.5"/>
    <circle cx="29.6" cy="30.4" r="0.7" fill="#f0c46a"/>
    <circle cx="34.4" cy="30.4" r="0.7" fill="#f0c46a"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "chill-of-the-grave": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-chill-of-the-grave" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-chill-of-the-grave" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-chill-of-the-grave)"/>
    <g filter="url(#gl-chill-of-the-grave)">
    <path d="M16.9 34 a13.1 13.1 0 1 1 26.1 0 v4.8 q0 3.6 -3.6 4.2 v4.8 h-19 v-4.8 q-3.6 -0.6 -3.6 -4.2 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.4"/>
    <ellipse cx="24.9" cy="34.6" rx="3.8" ry="4.3" fill="#15110d"/>
    <ellipse cx="35.1" cy="34.6" rx="3.8" ry="4.3" fill="#15110d"/>
    <path d="M30 38.3 l-1.9 3.6 h3.8 z" fill="#15110d"/>
    <line x1="27.6" y1="43.7" x2="27.6" y2="47.5" stroke="#15110d" stroke-width="1.1"/>
    <line x1="30" y1="43.7" x2="30" y2="47.5" stroke="#15110d" stroke-width="1.1"/>
    <line x1="32.4" y1="43.7" x2="32.4" y2="47.5" stroke="#15110d" stroke-width="1.1"/>
    <circle cx="24.9" cy="35" r="1.5" fill="#8fd0ff"/>
    <circle cx="35.1" cy="35" r="1.5" fill="#8fd0ff"/>
    <line x1="49" y1="15" x2="58" y2="15" stroke="#8fd0ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="54.4" y1="15" x2="56.3" y2="13.1" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="54.4" y1="15" x2="56.3" y2="16.9" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="49" y1="15" x2="53.5" y2="22.8" stroke="#8fd0ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="51.7" y1="19.7" x2="54.3" y2="20.3" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="51.7" y1="19.7" x2="51" y2="22.3" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="49" y1="15" x2="44.5" y2="22.8" stroke="#8fd0ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="46.3" y1="19.7" x2="47" y2="22.3" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="46.3" y1="19.7" x2="43.7" y2="20.3" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="49" y1="15" x2="40" y2="15" stroke="#8fd0ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="43.6" y1="15" x2="41.7" y2="16.9" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="43.6" y1="15" x2="41.7" y2="13.1" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="49" y1="15" x2="44.5" y2="7.2" stroke="#8fd0ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="46.3" y1="10.3" x2="43.7" y2="9.7" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="46.3" y1="10.3" x2="47" y2="7.7" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="49" y1="15" x2="53.5" y2="7.2" stroke="#8fd0ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="51.7" y1="10.3" x2="51" y2="7.7" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="51.7" y1="10.3" x2="54.3" y2="9.7" stroke="#8fd0ff" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="49" cy="15" r="1.4" fill="#ffffff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "contagion": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-contagion" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-contagion" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-contagion)"/>
    <g filter="url(#gl-contagion)">
    <path d="M22 24 Q32 34 28 40 M42 26 Q38 36 34 40" fill="none" stroke="#ece4cf" stroke-width="1.6" stroke-dasharray="2 3"/>
    <circle cx="18" cy="20" r="7" fill="#a9d94c" stroke="#15110d" stroke-width="1.4"/>
    <line x1="25" y1="20" x2="28" y2="20" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="22.9" y1="24.9" x2="25.1" y2="27.1" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="18" y1="27" x2="18" y2="30" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="13.1" y1="24.9" x2="10.9" y2="27.1" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="11" y1="20" x2="8" y2="20" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="13.1" y1="15.1" x2="10.9" y2="12.9" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="18" y1="13" x2="18" y2="10" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="22.9" y1="15.1" x2="25.1" y2="12.9" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="46" cy="22" r="6" fill="#a9d94c" stroke="#15110d" stroke-width="1.4"/>
    <line x1="52" y1="22" x2="55" y2="22" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="50.2" y1="26.2" x2="52.4" y2="28.4" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="46" y1="28" x2="46" y2="31" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="41.8" y1="26.2" x2="39.6" y2="28.4" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="40" y1="22" x2="37" y2="22" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="41.8" y1="17.8" x2="39.6" y2="15.6" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="46" y1="16" x2="46" y2="13" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="50.2" y1="17.8" x2="52.4" y2="15.6" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="30" cy="46" r="8" fill="#a9d94c" stroke="#15110d" stroke-width="1.4"/>
    <line x1="38" y1="46" x2="41" y2="46" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="35.7" y1="51.7" x2="37.8" y2="53.8" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="30" y1="54" x2="30" y2="57" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="24.3" y1="51.7" x2="22.2" y2="53.8" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="22" y1="46" x2="19" y2="46" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="24.3" y1="40.3" x2="22.2" y2="38.2" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="30" y1="38" x2="30" y2="35" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="35.7" y1="40.3" x2="37.8" y2="38.2" stroke="#a9d94c" stroke-width="1.6" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "crypt-keeper": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-crypt-keeper" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-crypt-keeper" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-crypt-keeper)"/>
    <g filter="url(#gl-crypt-keeper)">
    <circle cx="22" cy="22" r="11" fill="none" stroke="#ece4cf" stroke-width="5"/>
    <circle cx="22" cy="22" r="11" fill="none" stroke="#15110d" stroke-width="1"/>
    <line x1="29" y1="30" x2="52" y2="52" stroke="#ece4cf" stroke-width="5" stroke-linecap="round"/>
    <path d="M44 44 l6 -6 M48 48 l5 -5" stroke="#ece4cf" stroke-width="4" stroke-linecap="round"/>
    <path d="M17.6 21 a4.4 4.4 0 1 1 8.8 0 v1.6 q0 1.2 -1.2 1.4 v1.6 h-6.4 v-1.6 q-1.2 -0.2 -1.2 -1.4 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.5"/>
    <ellipse cx="20.3" cy="21.2" rx="1.3" ry="1.4" fill="#15110d"/>
    <ellipse cx="23.7" cy="21.2" rx="1.3" ry="1.4" fill="#15110d"/>
    <path d="M22 22.4 l-0.6 1.2 h1.3 z" fill="#15110d"/>
    <line x1="21.2" y1="24.3" x2="21.2" y2="25.6" stroke="#15110d" stroke-width="0.4"/>
    <line x1="22" y1="24.3" x2="22" y2="25.6" stroke="#15110d" stroke-width="0.4"/>
    <line x1="22.8" y1="24.3" x2="22.8" y2="25.6" stroke="#15110d" stroke-width="0.4"/>
    <circle cx="20.3" cy="21.3" r="0.5" fill="#8fd0ff"/>
    <circle cx="23.7" cy="21.3" r="0.5" fill="#8fd0ff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "death-and-decay": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-death-and-decay" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-death-and-decay" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-death-and-decay)"/>
    <g filter="url(#gl-death-and-decay)">
    <ellipse cx="32" cy="44" rx="25" ry="10" fill="#4b2f86" stroke="#15110d" stroke-width="1.4"/>
    <ellipse cx="32" cy="44" rx="16" ry="5.5" fill="none" stroke="#a88bff" stroke-width="2"/>
    <path d="M22.1 26 a9.9 9.9 0 1 1 19.8 0 v3.6 q0 2.7 -2.7 3.1 v3.6 h-14.4 v-3.6 q-2.7 -0.4 -2.7 -3.1 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <ellipse cx="28.1" cy="26.4" rx="2.9" ry="3.2" fill="#15110d"/>
    <ellipse cx="35.9" cy="26.4" rx="2.9" ry="3.2" fill="#15110d"/>
    <path d="M32 29.2 l-1.4 2.7 h2.9 z" fill="#15110d"/>
    <line x1="30.2" y1="33.4" x2="30.2" y2="36.3" stroke="#15110d" stroke-width="0.8"/>
    <line x1="32" y1="33.4" x2="32" y2="36.3" stroke="#15110d" stroke-width="0.8"/>
    <line x1="33.8" y1="33.4" x2="33.8" y2="36.3" stroke="#15110d" stroke-width="0.8"/>
    <circle cx="28.1" cy="26.7" r="1.2" fill="#a88bff"/>
    <circle cx="35.9" cy="26.7" r="1.2" fill="#a88bff"/>
    <circle cx="14" cy="34" r="1.8" fill="#a88bff"/>
    <circle cx="50" cy="32" r="1.8" fill="#a88bff"/>
    <circle cx="20" cy="22" r="1.8" fill="#a88bff"/>
    <circle cx="46" cy="16" r="1.8" fill="#a88bff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "deathless-will": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-deathless-will" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-deathless-will" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-deathless-will)"/>
    <g filter="url(#gl-deathless-will)">
    <rect x="24" y="28" width="16" height="26" rx="2" fill="#ece4cf" stroke="#15110d" stroke-width="1.5"/>
    <path d="M24 32 q3 4 6 0 q3 5 6 0 q2 3 4 0" fill="#a3987d"/>
    <path d="M32 8 C40.9 17.9 38.9 26 32 26 C25.1 26 23.1 17.9 32 8 z" fill="#8fd0ff"/>
    <path d="M32 16.1 C36 21.5 35 25 32 25 C29 25 28 21.5 32 16.1 z" fill="#fff8e6" opacity=".85"/>
    <path d="M27.9 46 a4.1 4.1 0 1 1 8.2 0 v1.5 q0 1.1 -1.1 1.3 v1.5 h-6 v-1.5 q-1.1 -0.2 -1.1 -1.3 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.4"/>
    <ellipse cx="30.4" cy="46.2" rx="1.2" ry="1.4" fill="#15110d"/>
    <ellipse cx="33.6" cy="46.2" rx="1.2" ry="1.4" fill="#15110d"/>
    <path d="M32 47.4 l-0.6 1.1 h1.2 z" fill="#15110d"/>
    <line x1="31.2" y1="49.1" x2="31.2" y2="50.3" stroke="#15110d" stroke-width="0.3"/>
    <line x1="32" y1="49.1" x2="32" y2="50.3" stroke="#15110d" stroke-width="0.3"/>
    <line x1="32.8" y1="49.1" x2="32.8" y2="50.3" stroke="#15110d" stroke-width="0.3"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "deaths-herald": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-deaths-herald" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-deaths-herald" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-deaths-herald)"/>
    <g filter="url(#gl-deaths-herald)">
    <path d="M14 40 Q14 22 36 18 L50 12 L50 34 L36 30 Q24 32 24 42 Z" fill="#ece4cf" stroke="#15110d" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M14 40 q0 8 6 8 q4 0 4 -6" fill="#a3987d" stroke="#15110d" stroke-width="1.4"/>
    <path d="M54 14 q6 9 0 18 M58 10 q9 13 0 26" fill="none" stroke="#f0c46a" stroke-width="2.4" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "enduring-dead": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-enduring-dead" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-enduring-dead" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-enduring-dead)"/>
    <g filter="url(#gl-enduring-dead)">
    <path d="M20 10 H44 M20 54 H44" stroke="#a3987d" stroke-width="4" stroke-linecap="round"/>
    <path d="M22 12 L42 12 L33 31 L42 52 L22 52 L31 31 Z" fill="none" stroke="#ece4cf" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M25 15 H39 L32 29 Z" fill="#f0c46a" opacity=".9"/>
    <path d="M26 49 H38 L32 41 Z" fill="#f0c46a"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "festering": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-festering" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-festering" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-festering)"/>
    <g filter="url(#gl-festering)">
    <path d="M12 50 Q32 40 52 50 V56 H12 Z" fill="#3b4a20" stroke="#15110d" stroke-width="1.4"/>
    <circle cx="24" cy="40" r="8" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <circle cx="21.2" cy="37.2" r="2.2" fill="#ffffff" opacity=".6"/>
    <circle cx="40" cy="34" r="6" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <circle cx="37.9" cy="31.9" r="1.7" fill="#ffffff" opacity=".6"/>
    <circle cx="30" cy="22" r="5" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <circle cx="28.2" cy="20.2" r="1.4" fill="#ffffff" opacity=".6"/>
    <circle cx="44" cy="16" r="3.5" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <circle cx="42.8" cy="14.8" r="1" fill="#ffffff" opacity=".6"/>
    <circle cx="18" cy="26" r="3" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <circle cx="16.9" cy="24.9" r="0.8" fill="#ffffff" opacity=".6"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "frost-nova": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-frost-nova" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-frost-nova" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-frost-nova)"/>
    <g filter="url(#gl-frost-nova)">
    <circle cx="32" cy="32" r="24" fill="none" stroke="#8fd0ff" stroke-width="2" opacity=".7"/>
    <polygon points="57,32 52,36 52,28" fill="#8fd0ff"/>
    <polygon points="52.2,46.7 45.8,47 50.5,40.5" fill="#8fd0ff"/>
    <polygon points="39.7,55.8 34.4,52.3 42,49.8" fill="#8fd0ff"/>
    <polygon points="24.3,55.8 22,49.8 29.6,52.3" fill="#8fd0ff"/>
    <polygon points="11.8,46.7 13.5,40.5 18.2,47" fill="#8fd0ff"/>
    <polygon points="7,32 12,28 12,36" fill="#8fd0ff"/>
    <polygon points="11.8,17.3 18.2,17 13.5,23.5" fill="#8fd0ff"/>
    <polygon points="24.3,8.2 29.6,11.7 22,14.2" fill="#8fd0ff"/>
    <polygon points="39.7,8.2 42,14.2 34.4,11.7" fill="#8fd0ff"/>
    <polygon points="52.2,17.3 50.5,23.5 45.8,17" fill="#8fd0ff"/>
    <line x1="32" y1="32" x2="44" y2="32" stroke="#e8f6ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="39.2" y1="32" x2="41.7" y2="29.4" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="39.2" y1="32" x2="41.7" y2="34.6" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="32" y1="32" x2="38" y2="42.4" stroke="#e8f6ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="35.6" y1="38.2" x2="39.1" y2="39.1" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="35.6" y1="38.2" x2="34.6" y2="41.7" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="32" y1="32" x2="26" y2="42.4" stroke="#e8f6ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="28.4" y1="38.2" x2="29.4" y2="41.7" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="28.4" y1="38.2" x2="24.9" y2="39.1" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="32" y1="32" x2="20" y2="32" stroke="#e8f6ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="24.8" y1="32" x2="22.3" y2="34.6" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="24.8" y1="32" x2="22.3" y2="29.4" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="32" y1="32" x2="26" y2="21.6" stroke="#e8f6ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="28.4" y1="25.8" x2="24.9" y2="24.9" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="28.4" y1="25.8" x2="29.4" y2="22.3" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="32" y1="32" x2="38" y2="21.6" stroke="#e8f6ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="35.6" y1="25.8" x2="34.6" y2="22.3" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="35.6" y1="25.8" x2="39.1" y2="24.9" stroke="#e8f6ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <circle cx="32" cy="32" r="1.9" fill="#ffffff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "frozen-marrow": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-frozen-marrow" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-frozen-marrow" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-frozen-marrow)"/>
    <g filter="url(#gl-frozen-marrow)">
    <line x1="14" y1="50" x2="50" y2="14" stroke="#15110d" stroke-width="8.4" stroke-linecap="round"/>
    <circle cx="11.4" cy="47.4" r="4.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="16.6" cy="52.6" r="4.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="47.4" cy="11.4" r="4.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="52.6" cy="16.6" r="4.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="14" y1="50" x2="50" y2="14" stroke="#ece4cf" stroke-width="6" stroke-linecap="round"/>
    <line x1="42" y1="42" x2="54" y2="42" stroke="#8fd0ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="49.2" y1="42" x2="51.7" y2="39.4" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="49.2" y1="42" x2="51.7" y2="44.6" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="42" y1="42" x2="48" y2="52.4" stroke="#8fd0ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="45.6" y1="48.2" x2="49.1" y2="49.1" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="45.6" y1="48.2" x2="44.6" y2="51.7" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="42" y1="42" x2="36" y2="52.4" stroke="#8fd0ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="38.4" y1="48.2" x2="39.4" y2="51.7" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="38.4" y1="48.2" x2="34.9" y2="49.1" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="42" y1="42" x2="30" y2="42" stroke="#8fd0ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="34.8" y1="42" x2="32.3" y2="44.6" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="34.8" y1="42" x2="32.3" y2="39.4" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="42" y1="42" x2="36" y2="31.6" stroke="#8fd0ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="38.4" y1="35.8" x2="34.9" y2="34.9" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="38.4" y1="35.8" x2="39.4" y2="32.3" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="42" y1="42" x2="48" y2="31.6" stroke="#8fd0ff" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="45.6" y1="35.8" x2="44.6" y2="32.3" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <line x1="45.6" y1="35.8" x2="49.1" y2="34.9" stroke="#8fd0ff" stroke-width="1.7999999999999998" stroke-linecap="round"/>
    <circle cx="42" cy="42" r="1.9" fill="#ffffff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "glacial-shell": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-glacial-shell" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-glacial-shell" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-glacial-shell)"/>
    <g filter="url(#gl-glacial-shell)">
    <path d="M32 12 L47.6 18 V31.2 C47.6 42 38 48 32 50.4 C26 48 16.4 42 16.4 31.2 V18 z" fill="#8fd0ff" stroke="#15110d" stroke-width="1.6"/>
    <path d="M32 18 L42.4 22 V30.8 C42.4 38 36 42 32 43.6 C28 42 21.6 38 21.6 30.8 V22 z" fill="#d6eeff" stroke="#15110d" stroke-width="1.6"/>
    <line x1="32" y1="30" x2="39" y2="30" stroke="#3c7bb0" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="36.2" y1="30" x2="37.7" y2="28.5" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="36.2" y1="30" x2="37.7" y2="31.5" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="32" y1="30" x2="35.5" y2="36.1" stroke="#3c7bb0" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="34.1" y1="33.6" x2="36.1" y2="34.2" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="34.1" y1="33.6" x2="33.5" y2="35.7" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="32" y1="30" x2="28.5" y2="36.1" stroke="#3c7bb0" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="29.9" y1="33.6" x2="30.5" y2="35.7" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="29.9" y1="33.6" x2="27.9" y2="34.2" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="32" y1="30" x2="25" y2="30" stroke="#3c7bb0" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="27.8" y1="30" x2="26.3" y2="31.5" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="27.8" y1="30" x2="26.3" y2="28.5" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="32" y1="30" x2="28.5" y2="23.9" stroke="#3c7bb0" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="29.9" y1="26.4" x2="27.9" y2="25.8" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="29.9" y1="26.4" x2="30.5" y2="24.3" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="32" y1="30" x2="35.5" y2="23.9" stroke="#3c7bb0" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="34.1" y1="26.4" x2="33.5" y2="24.3" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="34.1" y1="26.4" x2="36.1" y2="25.8" stroke="#3c7bb0" stroke-width="1.35" stroke-linecap="round"/>
    <circle cx="32" cy="30" r="1.1" fill="#ffffff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "grave-calling": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-grave-calling" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-grave-calling" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-grave-calling)"/>
    <g filter="url(#gl-grave-calling)">
    <path d="M6 46 Q18 43 32 45 T58 46 V60 H6 z" fill="#2a221b" stroke="#15110d" stroke-width="1"/>
    <path d="M10 49 h6 M30 51 h8 M44 48 h5" stroke="#4a3d30" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="25" y1="47" x2="23" y2="24" stroke="#15110d" stroke-width="6.4" stroke-linecap="round"/>
    <circle cx="22.5" cy="47.2" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="27.5" cy="46.8" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="20.5" cy="24.2" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="25.5" cy="23.8" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="25" y1="47" x2="23" y2="24" stroke="#ece4cf" stroke-width="4" stroke-linecap="round"/>
    <line x1="31" y1="47" x2="33" y2="22" stroke="#15110d" stroke-width="6.4" stroke-linecap="round"/>
    <circle cx="28.5" cy="46.8" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="33.5" cy="47.2" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="30.5" cy="21.8" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="35.5" cy="22.2" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="31" y1="47" x2="33" y2="22" stroke="#ece4cf" stroke-width="4" stroke-linecap="round"/>
    <line x1="37" y1="47" x2="41" y2="25" stroke="#15110d" stroke-width="6.4" stroke-linecap="round"/>
    <circle cx="34.6" cy="46.6" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="39.4" cy="47.4" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="38.6" cy="24.6" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="43.4" cy="25.4" r="3.1" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="37" y1="47" x2="41" y2="25" stroke="#ece4cf" stroke-width="4" stroke-linecap="round"/>
    <path d="M20 26 q12 -14 24 0" fill="none" stroke="#f0c46a" stroke-width="2.4" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "grave-reach": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-grave-reach" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-grave-reach" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-grave-reach)"/>
    <g filter="url(#gl-grave-reach)">
    <path d="M25.1 30 a6.9 6.9 0 1 1 13.8 0 v2.5 q0 1.9 -1.9 2.2 v2.5 h-10 v-2.5 q-1.9 -0.3 -1.9 -2.2 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="29.3" cy="30.3" rx="2" ry="2.2" fill="#15110d"/>
    <ellipse cx="34.7" cy="30.3" rx="2" ry="2.2" fill="#15110d"/>
    <path d="M32 32.2 l-1 1.9 h2 z" fill="#15110d"/>
    <line x1="30.8" y1="35.1" x2="30.8" y2="37.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="32" y1="35.1" x2="32" y2="37.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="33.2" y1="35.1" x2="33.2" y2="37.1" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="29.3" cy="30.5" r="0.8" fill="#a9d94c"/>
    <circle cx="34.7" cy="30.5" r="0.8" fill="#a9d94c"/>
    <line x1="32" y1="32" x2="52.6" y2="11.4" stroke="#a9d94c" stroke-width="3" stroke-linecap="round"/>
    <polygon points="54,10 52.3,15.8 48.2,11.7" fill="#a9d94c"/>
    <line x1="32" y1="32" x2="11.4" y2="11.4" stroke="#a9d94c" stroke-width="3" stroke-linecap="round"/>
    <polygon points="10,10 15.8,11.7 11.7,15.8" fill="#a9d94c"/>
    <line x1="32" y1="40" x2="52.3" y2="52.9" stroke="#a9d94c" stroke-width="3" stroke-linecap="round"/>
    <polygon points="54,54 48,53.6 51.1,48.7" fill="#a9d94c"/>
    <line x1="32" y1="40" x2="11.7" y2="52.9" stroke="#a9d94c" stroke-width="3" stroke-linecap="round"/>
    <polygon points="10,54 12.9,48.7 16,53.6" fill="#a9d94c"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "grave-resolve": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-grave-resolve" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-grave-resolve" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-grave-resolve)"/>
    <g filter="url(#gl-grave-resolve)">
    <path d="M18 56 V26 Q18 12 32 12 Q46 12 46 26 V56 Z" fill="#7e8790" stroke="#15110d" stroke-width="1.6"/>
    <path d="M32 20 V40 M25 27 H39" stroke="#15110d" stroke-width="3"/>
    <path d="M6 52 Q18 49 32 51 T58 52 V60 H6 z" fill="#2a221b" stroke="#15110d" stroke-width="1"/>
    <path d="M10 55 h6 M30 57 h8 M44 54 h5" stroke="#4a3d30" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="48" y1="18" x2="55" y2="18" stroke="#8fd0ff" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="52.2" y1="18" x2="53.7" y2="16.5" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="52.2" y1="18" x2="53.7" y2="19.5" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="48" y1="18" x2="51.5" y2="24.1" stroke="#8fd0ff" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="50.1" y1="21.6" x2="52.1" y2="22.2" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="50.1" y1="21.6" x2="49.5" y2="23.7" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="48" y1="18" x2="44.5" y2="24.1" stroke="#8fd0ff" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="45.9" y1="21.6" x2="46.5" y2="23.7" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="45.9" y1="21.6" x2="43.9" y2="22.2" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="48" y1="18" x2="41" y2="18" stroke="#8fd0ff" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="43.8" y1="18" x2="42.3" y2="19.5" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="43.8" y1="18" x2="42.3" y2="16.5" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="48" y1="18" x2="44.5" y2="11.9" stroke="#8fd0ff" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="45.9" y1="14.4" x2="43.9" y2="13.8" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="45.9" y1="14.4" x2="46.5" y2="12.3" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="48" y1="18" x2="51.5" y2="11.9" stroke="#8fd0ff" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="50.1" y1="14.4" x2="49.5" y2="12.3" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <line x1="50.1" y1="14.4" x2="52.1" y2="13.8" stroke="#8fd0ff" stroke-width="1.35" stroke-linecap="round"/>
    <circle cx="48" cy="18" r="1.1" fill="#ffffff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "grim-momentum": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-grim-momentum" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-grim-momentum" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-grim-momentum)"/>
    <g filter="url(#gl-grim-momentum)">
    <path d="M14 54 L32 42 L50 54" fill="none" stroke="#a3987d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 42 L32 30 L50 42" fill="none" stroke="#ece4cf" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 30 L32 18 L50 30" fill="none" stroke="#f0c46a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.6 14 a4.4 4.4 0 1 1 8.8 0 v1.6 q0 1.2 -1.2 1.4 v1.6 h-6.4 v-1.6 q-1.2 -0.2 -1.2 -1.4 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.5"/>
    <ellipse cx="30.3" cy="14.2" rx="1.3" ry="1.4" fill="#15110d"/>
    <ellipse cx="33.7" cy="14.2" rx="1.3" ry="1.4" fill="#15110d"/>
    <path d="M32 15.4 l-0.6 1.2 h1.3 z" fill="#15110d"/>
    <line x1="31.2" y1="17.3" x2="31.2" y2="18.6" stroke="#15110d" stroke-width="0.4"/>
    <line x1="32" y1="17.3" x2="32" y2="18.6" stroke="#15110d" stroke-width="0.4"/>
    <line x1="32.8" y1="17.3" x2="32.8" y2="18.6" stroke="#15110d" stroke-width="0.4"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "improved-cripple": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-improved-cripple" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-improved-cripple" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-improved-cripple)"/>
    <g filter="url(#gl-improved-cripple)">
    <ellipse cx="16" cy="46" rx="7" ry="4.5" transform="rotate(-45 16 46)" fill="none" stroke="#ece4cf" stroke-width="3.2"/>
    <ellipse cx="25" cy="37" rx="7" ry="4.5" transform="rotate(-45 25 37)" fill="none" stroke="#a3987d" stroke-width="3.2"/>
    <ellipse cx="34" cy="28" rx="7" ry="4.5" transform="rotate(-45 34 28)" fill="none" stroke="#ece4cf" stroke-width="3.2"/>
    <ellipse cx="43" cy="19" rx="7" ry="4.5" transform="rotate(-45 43 19)" fill="none" stroke="#a3987d" stroke-width="3.2"/>
    <line x1="30" y1="54" x2="54" y2="40" stroke="#15110d" stroke-width="6" stroke-linecap="round"/>
    <circle cx="28.9" cy="52.1" r="2.8" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="31.1" cy="55.9" r="2.8" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="52.9" cy="38.1" r="2.8" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="55.1" cy="41.9" r="2.8" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="30" y1="54" x2="54" y2="40" stroke="#ece4cf" stroke-width="3.6" stroke-linecap="round"/>
    <path d="M40 44 l4 6 l-4 1" stroke="#f0c46a" stroke-width="2" fill="none"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "legion-emblem": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-legion-emblem" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-legion-emblem" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-legion-emblem)"/>
    <g filter="url(#gl-legion-emblem)">
    <path d="M22 8 H42 V44 L32 38 L22 44 Z" fill="#6b1f1f" stroke="#15110d" stroke-width="1.5"/>
    <path d="M24.4 22 a7.6 7.6 0 1 1 15.1 0 v2.8 q0 2.1 -2.1 2.4 v2.8 h-11 v-2.8 q-2.1 -0.3 -2.1 -2.4 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="29" cy="22.3" rx="2.2" ry="2.5" fill="#15110d"/>
    <ellipse cx="35" cy="22.3" rx="2.2" ry="2.5" fill="#15110d"/>
    <path d="M32 24.5 l-1.1 2.1 h2.2 z" fill="#15110d"/>
    <line x1="30.6" y1="27.6" x2="30.6" y2="29.8" stroke="#15110d" stroke-width="0.6"/>
    <line x1="32" y1="27.6" x2="32" y2="29.8" stroke="#15110d" stroke-width="0.6"/>
    <line x1="33.4" y1="27.6" x2="33.4" y2="29.8" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="29" cy="22.6" r="0.9" fill="#f0c46a"/>
    <circle cx="35" cy="22.6" r="0.9" fill="#f0c46a"/>
    <line x1="10" y1="54" x2="54" y2="54" stroke="#15110d" stroke-width="5.8" stroke-linecap="round"/>
    <circle cx="10" cy="51.9" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="10" cy="56.1" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="54" cy="51.9" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="54" cy="56.1" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="10" y1="54" x2="54" y2="54" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "lich-emblem": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-lich-emblem" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-lich-emblem" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-lich-emblem)"/>
    <g filter="url(#gl-lich-emblem)">
    <path d="M18 24 L16 8 L25 17 L32 4 L39 17 L48 8 L46 24 z" fill="#8fd0ff" stroke="#15110d" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="18" y="22" width="28" height="5" fill="#8fd0ff" stroke="#15110d" stroke-width="1.5"/>
    <circle cx="32" cy="24.5" r="1.8" fill="#ffffff"/>
    <path d="M22.4 42 a9.6 9.6 0 1 1 19.2 0 v3.5 q0 2.6 -2.6 3.1 v3.5 h-14 v-3.5 q-2.6 -0.4 -2.6 -3.1 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <ellipse cx="28.2" cy="42.4" rx="2.8" ry="3.1" fill="#15110d"/>
    <ellipse cx="35.8" cy="42.4" rx="2.8" ry="3.1" fill="#15110d"/>
    <path d="M32 45.1 l-1.4 2.6 h2.8 z" fill="#15110d"/>
    <line x1="30.2" y1="49.2" x2="30.2" y2="52" stroke="#15110d" stroke-width="0.8"/>
    <line x1="32" y1="49.2" x2="32" y2="52" stroke="#15110d" stroke-width="0.8"/>
    <line x1="33.8" y1="49.2" x2="33.8" y2="52" stroke="#15110d" stroke-width="0.8"/>
    <circle cx="28.2" cy="42.7" r="1.1" fill="#8fd0ff"/>
    <circle cx="35.8" cy="42.7" r="1.1" fill="#8fd0ff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "lichborne": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-lichborne" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-lichborne" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-lichborne)"/>
    <g filter="url(#gl-lichborne)">
    <path d="M19.4 27.4 L17.6 13 L25.7 21.1 L32 9.4 L38.3 21.1 L46.4 13 L44.6 27.4 z" fill="#8fd0ff" stroke="#15110d" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="19.4" y="25.6" width="25.2" height="4.5" fill="#8fd0ff" stroke="#15110d" stroke-width="1.5"/>
    <circle cx="32" cy="27.9" r="1.6" fill="#ffffff"/>
    <path d="M23.5 42 a8.5 8.5 0 1 1 17.1 0 v3.1 q0 2.3 -2.3 2.7 v3.1 h-12.4 v-3.1 q-2.3 -0.4 -2.3 -2.7 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.9"/>
    <ellipse cx="28.7" cy="42.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <ellipse cx="35.3" cy="42.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <path d="M32 44.8 l-1.2 2.3 h2.5 z" fill="#15110d"/>
    <line x1="30.4" y1="48.4" x2="30.4" y2="50.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="32" y1="48.4" x2="32" y2="50.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="33.5" y1="48.4" x2="33.5" y2="50.8" stroke="#15110d" stroke-width="0.7"/>
    <circle cx="28.7" cy="42.6" r="1" fill="#8fd0ff"/>
    <circle cx="35.3" cy="42.6" r="1" fill="#8fd0ff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "lingering-plague": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-lingering-plague" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-lingering-plague" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-lingering-plague)"/>
    <g filter="url(#gl-lingering-plague)">
    <path d="M6 46 Q18 43 32 45 T58 46 V60 H6 z" fill="#2a221b" stroke="#15110d" stroke-width="1"/>
    <path d="M10 49 h6 M30 51 h8 M44 48 h5" stroke="#4a3d30" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="22" cy="32" r="10" fill="#a9d94c" opacity=".85" stroke="#15110d" stroke-width="1"/>
    <circle cx="34" cy="26" r="12" fill="#a9d94c" opacity=".85" stroke="#15110d" stroke-width="1"/>
    <circle cx="46" cy="34" r="9" fill="#a9d94c" opacity=".85" stroke="#15110d" stroke-width="1"/>
    <circle cx="30" cy="38" r="9" fill="#a9d94c" opacity=".85" stroke="#15110d" stroke-width="1"/>
    <path d="M18 50 v4 M30 50 v5 M44 50 v4" stroke="#a9d94c" stroke-width="2" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "marrow-harvest": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-marrow-harvest" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-marrow-harvest" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-marrow-harvest)"/>
    <g filter="url(#gl-marrow-harvest)">
    <path d="M14 12 Q50 6 54 34 Q44 18 18 20 Z" fill="#ece4cf" stroke="#15110d" stroke-width="1.6" stroke-linejoin="round"/>
    <line x1="18" y1="16" x2="46" y2="56" stroke="#6b4b2c" stroke-width="4.5" stroke-linecap="round"/>
    <line x1="10" y1="52" x2="28" y2="44" stroke="#15110d" stroke-width="5.8" stroke-linecap="round"/>
    <circle cx="9.1" cy="50.1" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="10.9" cy="53.9" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="27.1" cy="42.1" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="28.9" cy="45.9" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="10" y1="52" x2="28" y2="44" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="52" cy="46" r="4" fill="#a9d94c"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "master-of-the-dead": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-master-of-the-dead" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-master-of-the-dead" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-master-of-the-dead)"/>
    <g filter="url(#gl-master-of-the-dead)">
    <path d="M22.2 21.2 L20.8 10 L27.1 16.3 L32 7.2 L36.9 16.3 L43.2 10 L41.8 21.2 z" fill="#d9b45a" stroke="#15110d" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="22.2" y="19.8" width="19.6" height="3.5" fill="#d9b45a" stroke="#15110d" stroke-width="1.5"/>
    <circle cx="32" cy="21.6" r="1.3" fill="#f0c46a"/>
    <path d="M21.3 38 a10.7 10.7 0 1 1 21.5 0 v3.9 q0 2.9 -2.9 3.4 v3.9 h-15.6 v-3.9 q-2.9 -0.5 -2.9 -3.4 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <ellipse cx="27.8" cy="38.5" rx="3.1" ry="3.5" fill="#15110d"/>
    <ellipse cx="36.2" cy="38.5" rx="3.1" ry="3.5" fill="#15110d"/>
    <path d="M32 41.5 l-1.6 2.9 h3.1 z" fill="#15110d"/>
    <line x1="30.1" y1="46" x2="30.1" y2="49.1" stroke="#15110d" stroke-width="0.9"/>
    <line x1="32" y1="46" x2="32" y2="49.1" stroke="#15110d" stroke-width="0.9"/>
    <line x1="34" y1="46" x2="34" y2="49.1" stroke="#15110d" stroke-width="0.9"/>
    <circle cx="27.8" cy="38.8" r="1.3" fill="#f0c46a"/>
    <circle cx="36.2" cy="38.8" r="1.3" fill="#f0c46a"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "morbid-focus": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-morbid-focus" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-morbid-focus" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-morbid-focus)"/>
    <g filter="url(#gl-morbid-focus)">
    <path d="M8 32 Q32 8 56 32 Q32 56 8 32 Z" fill="#ece4cf" stroke="#15110d" stroke-width="1.6"/>
    <circle cx="32" cy="32" r="10" fill="#a9d94c" stroke="#15110d" stroke-width="1.4"/>
    <ellipse cx="32" cy="32" rx="2.6" ry="8" fill="#15110d"/>
    <path d="M14 26 l-4 -5 M20 21 l-2 -6 M44 21 l2 -6 M50 26 l4 -5" stroke="#a3987d" stroke-width="2" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "necrotic-bond": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-necrotic-bond" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-necrotic-bond" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-necrotic-bond)"/>
    <g filter="url(#gl-necrotic-bond)">
    <path d="M32 52 C10 38 12 18 24 18 C29 18 32 22 32 26 C32 22 35 18 40 18 C52 18 54 38 32 52 Z" fill="#f0c46a" stroke="#15110d" stroke-width="1.6"/>
    <line x1="14" y1="48" x2="50" y2="14" stroke="#15110d" stroke-width="5.8" stroke-linecap="round"/>
    <circle cx="12.6" cy="46.5" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="15.4" cy="49.5" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="48.6" cy="12.5" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="51.4" cy="15.5" r="2.7" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="14" y1="48" x2="50" y2="14" stroke="#ece4cf" stroke-width="3.4" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "ossuary": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-ossuary" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-ossuary" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-ossuary)"/>
    <g filter="url(#gl-ossuary)">
    <line x1="32" y1="12" x2="32" y2="54" stroke="#ece4cf" stroke-width="4" stroke-linecap="round"/>
    <path d="M32 20 Q14 18 14 26" fill="none" stroke="#ece4cf" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M32 20 Q50 18 50 26" fill="none" stroke="#ece4cf" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M32 28 Q16 26 16 34" fill="none" stroke="#ece4cf" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M32 28 Q48 26 48 34" fill="none" stroke="#ece4cf" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M32 36 Q18 34 18 42" fill="none" stroke="#ece4cf" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M32 36 Q46 34 46 42" fill="none" stroke="#ece4cf" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M32 44 Q20 42 20 50" fill="none" stroke="#ece4cf" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M32 44 Q44 42 44 50" fill="none" stroke="#ece4cf" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="32" cy="10" r="4" fill="#8fd0ff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "pestilence-incarnate": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-pestilence-incarnate" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-pestilence-incarnate" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-pestilence-incarnate)"/>
    <g filter="url(#gl-pestilence-incarnate)">
    <circle cx="32" cy="32" r="22" fill="none" stroke="#a9d94c" stroke-width="2" stroke-dasharray="3 3"/>
    <circle cx="32" cy="19" r="9" fill="none" stroke="#a9d94c" stroke-width="3.4"/>
    <circle cx="43.3" cy="38.5" r="9" fill="none" stroke="#a9d94c" stroke-width="3.4"/>
    <circle cx="20.7" cy="38.5" r="9" fill="none" stroke="#a9d94c" stroke-width="3.4"/>
    <path d="M25.1 31 a6.9 6.9 0 1 1 13.8 0 v2.5 q0 1.9 -1.9 2.2 v2.5 h-10 v-2.5 q-1.9 -0.3 -1.9 -2.2 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="29.3" cy="31.3" rx="2" ry="2.2" fill="#15110d"/>
    <ellipse cx="34.7" cy="31.3" rx="2" ry="2.2" fill="#15110d"/>
    <path d="M32 33.2 l-1 1.9 h2 z" fill="#15110d"/>
    <line x1="30.8" y1="36.1" x2="30.8" y2="38.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="32" y1="36.1" x2="32" y2="38.1" stroke="#15110d" stroke-width="0.6"/>
    <line x1="33.2" y1="36.1" x2="33.2" y2="38.1" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="29.3" cy="31.5" r="0.8" fill="#a9d94c"/>
    <circle cx="34.7" cy="31.5" r="0.8" fill="#a9d94c"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "phylactery": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-phylactery" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-phylactery" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-phylactery)"/>
    <g filter="url(#gl-phylactery)">
    <path d="M32 6 L46 26 L32 58 L18 26 Z" fill="#8fd0ff" stroke="#15110d" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M32 6 L38 26 L32 58 M18 26 H46" fill="none" stroke="#ffffff" stroke-width="1.2" opacity=".7"/>
    <path d="M24 30 l6 6 l-4 6 M40 30 l-5 8" stroke="#15110d" stroke-width="1.4" fill="none"/>
    <path d="M27.9 26 a4.1 4.1 0 1 1 8.2 0 v1.5 q0 1.1 -1.1 1.3 v1.5 h-6 v-1.5 q-1.1 -0.2 -1.1 -1.3 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.4"/>
    <ellipse cx="30.4" cy="26.2" rx="1.2" ry="1.4" fill="#15110d"/>
    <ellipse cx="33.6" cy="26.2" rx="1.2" ry="1.4" fill="#15110d"/>
    <path d="M32 27.4 l-0.6 1.1 h1.2 z" fill="#15110d"/>
    <line x1="31.2" y1="29.1" x2="31.2" y2="30.3" stroke="#15110d" stroke-width="0.3"/>
    <line x1="32" y1="29.1" x2="32" y2="30.3" stroke="#15110d" stroke-width="0.3"/>
    <line x1="32.8" y1="29.1" x2="32.8" y2="30.3" stroke="#15110d" stroke-width="0.3"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "plague-bearer": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-plague-bearer" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-plague-bearer" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-plague-bearer)"/>
    <g filter="url(#gl-plague-bearer)">
    <path d="M18.9 30 a13.1 13.1 0 1 1 26.1 0 v4.8 q0 3.6 -3.6 4.2 v4.8 h-19 v-4.8 q-3.6 -0.6 -3.6 -4.2 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.4"/>
    <ellipse cx="26.9" cy="30.6" rx="3.8" ry="4.3" fill="#15110d"/>
    <ellipse cx="37.1" cy="30.6" rx="3.8" ry="4.3" fill="#15110d"/>
    <path d="M32 34.3 l-1.9 3.6 h3.8 z" fill="#15110d"/>
    <line x1="29.6" y1="39.7" x2="29.6" y2="43.5" stroke="#15110d" stroke-width="1.1"/>
    <line x1="32" y1="39.7" x2="32" y2="43.5" stroke="#15110d" stroke-width="1.1"/>
    <line x1="34.4" y1="39.7" x2="34.4" y2="43.5" stroke="#15110d" stroke-width="1.1"/>
    <circle cx="26.9" cy="30.9" r="1.5" fill="#a9d94c"/>
    <circle cx="37.1" cy="30.9" r="1.5" fill="#a9d94c"/>
    <path d="M10 52 q8 -8 16 0 t16 0 t14 0" fill="none" stroke="#a9d94c" stroke-width="3" stroke-linecap="round"/>
    <circle cx="12" cy="40" r="3" fill="#a9d94c" opacity=".7"/>
    <circle cx="52" cy="38" r="3.6" fill="#a9d94c" opacity=".7"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "plague-pit": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-plague-pit" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-plague-pit" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-plague-pit)"/>
    <g filter="url(#gl-plague-pit)">
    <path d="M10 30 H54 L50 50 Q32 58 14 50 Z" fill="#2b2a24" stroke="#15110d" stroke-width="1.6"/>
    <ellipse cx="32" cy="30" rx="22" ry="6" fill="#a9d94c" stroke="#15110d" stroke-width="1.6"/>
    <circle cx="24" cy="20" r="4" fill="#a9d94c" opacity=".8"/>
    <circle cx="36" cy="14" r="3" fill="#a9d94c" opacity=".6"/>
    <circle cx="40" cy="22" r="2.4" fill="#a9d94c" opacity=".7"/>
    <path d="M27.2 42 a4.8 4.8 0 1 1 9.6 0 v1.8 q0 1.3 -1.3 1.5 v1.8 h-7 v-1.8 q-1.3 -0.2 -1.3 -1.5 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.5"/>
    <ellipse cx="30.1" cy="42.2" rx="1.4" ry="1.6" fill="#15110d"/>
    <ellipse cx="33.9" cy="42.2" rx="1.4" ry="1.6" fill="#15110d"/>
    <path d="M32 43.6 l-0.7 1.3 h1.4 z" fill="#15110d"/>
    <line x1="31.1" y1="45.6" x2="31.1" y2="47" stroke="#15110d" stroke-width="0.4"/>
    <line x1="32" y1="45.6" x2="32" y2="47" stroke="#15110d" stroke-width="0.4"/>
    <line x1="32.9" y1="45.6" x2="32.9" y2="47" stroke="#15110d" stroke-width="0.4"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "plaguebringer-emblem": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-plaguebringer-emblem" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-plaguebringer-emblem" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-plaguebringer-emblem)"/>
    <g filter="url(#gl-plaguebringer-emblem)">
    <path d="M19.6 27 a12.4 12.4 0 1 1 24.8 0 v4.5 q0 3.4 -3.4 3.9 v4.5 h-18 v-4.5 q-3.4 -0.6 -3.4 -3.9 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="27.2" cy="27.6" rx="3.6" ry="4" fill="#15110d"/>
    <ellipse cx="36.8" cy="27.6" rx="3.6" ry="4" fill="#15110d"/>
    <path d="M32 31.1 l-1.8 3.4 h3.6 z" fill="#15110d"/>
    <line x1="29.8" y1="36.2" x2="29.8" y2="39.8" stroke="#15110d" stroke-width="1"/>
    <line x1="32" y1="36.2" x2="32" y2="39.8" stroke="#15110d" stroke-width="1"/>
    <line x1="34.2" y1="36.2" x2="34.2" y2="39.8" stroke="#15110d" stroke-width="1"/>
    <circle cx="27.2" cy="27.9" r="1.5" fill="#a9d94c"/>
    <circle cx="36.8" cy="27.9" r="1.5" fill="#a9d94c"/>
    <path d="M20 44 q3 5 0 8 q-3 -3 0 -8 z" fill="#a9d94c" stroke="#15110d" stroke-width="1"/>
    <path d="M32 48 q3 5 0 8 q-3 -3 0 -8 z" fill="#a9d94c" stroke="#15110d" stroke-width="1"/>
    <path d="M44 44 q3 5 0 8 q-3 -3 0 -8 z" fill="#a9d94c" stroke="#15110d" stroke-width="1"/>
    <path d="M8 20 q6 -6 12 0 M44 12 q6 -6 12 0" fill="none" stroke="#a9d94c" stroke-width="2.4" stroke-linecap="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "rail-bard": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-bard" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#e8c15a" stop-opacity=".45"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect fill="#0b0a0c"/>
    <rect width="64" height="64" fill="url(#rg-bard)"/>
    <path d="M31 35 L49 13 L53 17 L35 39Z" fill="#b98d5a" stroke="#000" stroke-width="1.5"/>
    <rect x="47" y="6" width="11" height="8" rx="2" transform="rotate(45 52 10)" fill="#e8c15a" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <ellipse cx="24" cy="42" rx="15" ry="12" transform="rotate(-40 24 42)" fill="#e8c15a" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="24" cy="42" r="4.5" fill="#0b0a0c"/>
    <path d="M27 39 L50 15 M24 42 L48 13" stroke="#000" stroke-width=".8" opacity=".6"/>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#e8c15a" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,

  "rail-home": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-home" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#ffd100" stop-opacity=".45"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect fill="#0b0a0c"/>
    <rect width="64" height="64" fill="url(#rg-home)"/>
    <path d="M8 18 Q20 12 32 18 Q44 12 56 18 V48 Q44 42 32 48 Q20 42 8 48Z" fill="#ffd100" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M32 18 V48" stroke="#000" stroke-width="1.5"/>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#ffd100" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,

  "rail-illusionist": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-illusionist" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#b48cff" stop-opacity=".45"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect fill="#0b0a0c"/>
    <rect width="64" height="64" fill="url(#rg-illusionist)"/>
    <path d="M32 8 L48 32 L32 56 L16 32Z" fill="#b48cff" opacity=".3" transform="translate(-11 0)"/>
    <path d="M32 8 L48 32 L32 56 L16 32Z" fill="#b48cff" opacity=".3" transform="translate(11 0)"/>
    <path d="M32 8 L48 32 L32 56 L16 32Z" fill="#b48cff" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M21 32 Q32 21 43 32 Q32 43 21 32Z" fill="#0b0a0c"/>
    <circle cx="32" cy="32" r="4.2" fill="#b48cff"/>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#b48cff" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,

  "rail-necromancer": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-necromancer" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#9fe07a" stop-opacity=".45"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect fill="#0b0a0c"/>
    <rect width="64" height="64" fill="url(#rg-necromancer)"/>
    <path d="M14.8 31 a17.2 17.2 0 1 1 34.4 0 v6.2 q0 4.7 -4.7 5.5 v6.2 h-25 v-6.2 q-4.7 -0.8 -4.7 -5.5 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.9"/>
    <ellipse cx="25.3" cy="31.8" rx="5" ry="5.6" fill="#15110d"/>
    <ellipse cx="38.7" cy="31.8" rx="5" ry="5.6" fill="#15110d"/>
    <path d="M32 36.6 l-2.5 4.7 h5 z" fill="#15110d"/>
    <line x1="28.9" y1="43.8" x2="28.9" y2="48.8" stroke="#15110d" stroke-width="1.4"/>
    <line x1="32" y1="43.8" x2="32" y2="48.8" stroke="#15110d" stroke-width="1.4"/>
    <line x1="35.1" y1="43.8" x2="35.1" y2="48.8" stroke="#15110d" stroke-width="1.4"/>
    <circle cx="25.3" cy="32.2" r="2" fill="#9fe07a"/>
    <circle cx="38.7" cy="32.2" r="2" fill="#9fe07a"/>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#9fe07a" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,

  "rail-professions": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-professions" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#d9a35a" stop-opacity=".45"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect fill="#0b0a0c"/>
    <rect width="64" height="64" fill="url(#rg-professions)"/>
    <path d="M10 34 H46 Q54 34 58 30 V38 Q50 41 44 41 V47 H50 V54 H18 V47 H26 V41 H10Z" fill="#d9a35a" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <g transform="rotate(35 32 20)">
    <rect x="30" y="10" width="5" height="26" fill="#b98d5a" stroke="#000" stroke-width="1.2"/>
    <rect x="21" y="4" width="23" height="11" rx="2" fill="#d9a35a" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#d9a35a" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,

  "rail-races": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-races" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#8fbf7a" stop-opacity=".45"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect fill="#0b0a0c"/>
    <rect width="64" height="64" fill="url(#rg-races)"/>
    <path d="M13 56 Q13 39 32 39 Q51 39 51 56Z" fill="#8fbf7a" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="32" cy="25" r="10" fill="#8fbf7a" stroke="#000" stroke-width="1.5"/>
    <path d="M38 17 Q44 6 54 7 Q53 17 42 20Z" fill="#5f8f4e" stroke="#000" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M40 18 L50 10" stroke="#000" stroke-width="1" fill="none"/>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#8fbf7a" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,
  "rail-create": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-create" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#ffd100" stop-opacity=".4"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect width="64" height="64" fill="url(#rg-create)"/>
    <ellipse cx="32" cy="53" rx="20" ry="5" fill="#8a6a2c" stroke="#000" stroke-width="1.5"/>
    <path d="M22 51 Q22 36 32 36 Q42 36 42 51Z" fill="#ffd100" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="32" cy="27" r="8" fill="#ffd100" stroke="#000" stroke-width="1.5"/>
    <path d="M10 22 A22 22 0 0 1 20 10" fill="none" stroke="#ffd100" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M20 10 L14 10 M20 10 L19 16" fill="none" stroke="#ffd100" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#ffd100" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,
  "rail-bloodsworn": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-bloodsworn" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#e0485a" stop-opacity=".45"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect fill="#0b0a0c"/>
    <rect width="64" height="64" fill="url(#rg-bloodsworn)"/>
    <path d="M32 14 C41 27 47 34 47 43 A15 15 0 1 1 17 43 C17 34 23 27 32 14Z" fill="#e0485a" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M32 5 L35.5 11 V44 L32 49 L28.5 44 V11Z" fill="#d7dbe2" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M32 12 V44" stroke="#8a0a1a" stroke-width="1.4"/>
    <path d="M20 10 H44 V14 H20Z" fill="#8a6a2c" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M30 2.5 H34 V10 H30Z" fill="#4a3424" stroke="#000" stroke-width="1.2"/>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#e0485a" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,

  "rail-tinker": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-tinker" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#f0a03c" stop-opacity=".45"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect fill="#0b0a0c"/>
    <rect width="64" height="64" fill="url(#rg-tinker)"/>
    <g transform="translate(32 32)">
    <g fill="#f0a03c" stroke="#000" stroke-width="1.5" stroke-linejoin="round">
    <rect x="-5" y="-25" width="10" height="12" rx="2" transform="rotate(0)"/>
    <rect x="-5" y="-25" width="10" height="12" rx="2" transform="rotate(45)"/>
    <rect x="-5" y="-25" width="10" height="12" rx="2" transform="rotate(90)"/>
    <rect x="-5" y="-25" width="10" height="12" rx="2" transform="rotate(135)"/>
    <rect x="-5" y="-25" width="10" height="12" rx="2" transform="rotate(180)"/>
    <rect x="-5" y="-25" width="10" height="12" rx="2" transform="rotate(225)"/>
    <rect x="-5" y="-25" width="10" height="12" rx="2" transform="rotate(270)"/>
    <rect x="-5" y="-25" width="10" height="12" rx="2" transform="rotate(315)"/>
    <circle r="16"/>
    </g>
    <circle r="7" fill="#0b0a0c" stroke="#000" stroke-width="1.5"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#f0a03c" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,

  "rail-warden": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="rg-warden" cx=".5" cy=".35" r=".8">
    <stop offset="0" stop-color="#e0b25c" stop-opacity=".45"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    </defs>
    <rect fill="#0b0a0c"/>
    <rect width="64" height="64" fill="url(#rg-warden)"/>
    <g fill="none" stroke="#e0b25c" stroke-width="4" stroke-linecap="round">
    <path d="M16 28 Q32 2 48 28"/>
    <path d="M16 28 V52"/>
    <path d="M24 18 V52"/>
    <path d="M32 14 V52"/>
    <path d="M40 18 V52"/>
    <path d="M48 28 V52"/>
    </g>
    <rect x="11" y="50" width="42" height="7" rx="2" fill="#e0b25c" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="32" cy="9" r="3.5" fill="#e0b25c" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="#e0b25c" stroke-opacity=".6" stroke-width="1.5"/>
    </svg>`,

  "rattling-bones": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-rattling-bones" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-rattling-bones" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-rattling-bones)"/>
    <g filter="url(#gl-rattling-bones)">
    <line x1="16" y1="46" x2="48" y2="18" stroke="#15110d" stroke-width="6.6" stroke-linecap="round"/>
    <circle cx="14.3" cy="44" r="3.3" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="17.7" cy="48" r="3.3" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="46.3" cy="16" r="3.3" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="49.7" cy="20" r="3.3" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="16" y1="46" x2="48" y2="18" stroke="#ece4cf" stroke-width="4.2" stroke-linecap="round"/>
    <line x1="16" y1="18" x2="48" y2="46" stroke="#15110d" stroke-width="6.6" stroke-linecap="round"/>
    <circle cx="17.7" cy="16" r="3.3" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="14.3" cy="20" r="3.3" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="49.7" cy="44" r="3.3" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <circle cx="46.3" cy="48" r="3.3" fill="#ece4cf" stroke="#15110d" stroke-width="1.2"/>
    <line x1="16" y1="18" x2="48" y2="46" stroke="#ece4cf" stroke-width="4.2" stroke-linecap="round"/>
    <path d="M23.5 28 a8.5 8.5 0 1 1 17.1 0 v3.1 q0 2.3 -2.3 2.7 v3.1 h-12.4 v-3.1 q-2.3 -0.4 -2.3 -2.7 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.9"/>
    <ellipse cx="28.7" cy="28.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <ellipse cx="35.3" cy="28.4" rx="2.5" ry="2.8" fill="#15110d"/>
    <path d="M32 30.8 l-1.2 2.3 h2.5 z" fill="#15110d"/>
    <line x1="30.4" y1="34.4" x2="30.4" y2="36.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="32" y1="34.4" x2="32" y2="36.8" stroke="#15110d" stroke-width="0.7"/>
    <line x1="33.5" y1="34.4" x2="33.5" y2="36.8" stroke="#15110d" stroke-width="0.7"/>
    <circle cx="28.7" cy="28.6" r="1" fill="#f0c46a"/>
    <circle cx="35.3" cy="28.6" r="1" fill="#f0c46a"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "rot": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-rot" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-rot" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-rot)"/>
    <g filter="url(#gl-rot)">
    <polygon points="32,8 35.8,21.7 47.4,13.6 41.5,26.5 55.6,27.8 42.8,33.9 52.8,44 39.1,40.4 40.2,54.6 32,43 23.8,54.6 24.9,40.4 11.2,44 21.2,33.9 8.4,27.8 22.5,26.5 16.6,13.6 28.2,21.7" fill="#a9d94c" stroke="#15110d" stroke-width="1.2" stroke-linejoin="round"/>
    <polygon points="32,19 34.1,26.4 40.4,22 37.2,29 44.8,29.7 37.9,33 43.3,38.5 35.9,36.6 36.4,44.2 32,38 27.6,44.2 28.1,36.6 20.7,38.5 26.1,33 19.2,29.7 26.8,29 23.6,22 29.9,26.4" fill="#ece4cf" stroke="#15110d" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M26.8 31 a5.2 5.2 0 1 1 10.4 0 v1.9 q0 1.4 -1.4 1.7 v1.9 h-7.6 v-1.9 q-1.4 -0.2 -1.4 -1.7 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.6"/>
    <ellipse cx="30" cy="31.2" rx="1.5" ry="1.7" fill="#15110d"/>
    <ellipse cx="34" cy="31.2" rx="1.5" ry="1.7" fill="#15110d"/>
    <path d="M32 32.7 l-0.8 1.4 h1.5 z" fill="#15110d"/>
    <line x1="31.1" y1="34.9" x2="31.1" y2="36.4" stroke="#15110d" stroke-width="0.4"/>
    <line x1="32" y1="34.9" x2="32" y2="36.4" stroke="#15110d" stroke-width="0.4"/>
    <line x1="33" y1="34.9" x2="33" y2="36.4" stroke="#15110d" stroke-width="0.4"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "shambling-ranks": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-shambling-ranks" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-shambling-ranks" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-shambling-ranks)"/>
    <g filter="url(#gl-shambling-ranks)">
    <path d="M22.4 30 a9.6 9.6 0 1 1 19.2 0 v3.5 q0 2.6 -2.6 3.1 v3.5 h-14 v-3.5 q-2.6 -0.4 -2.6 -3.1 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <ellipse cx="28.2" cy="30.4" rx="2.8" ry="3.1" fill="#15110d"/>
    <ellipse cx="35.8" cy="30.4" rx="2.8" ry="3.1" fill="#15110d"/>
    <path d="M32 33.1 l-1.4 2.6 h2.8 z" fill="#15110d"/>
    <line x1="30.2" y1="37.2" x2="30.2" y2="40" stroke="#15110d" stroke-width="0.8"/>
    <line x1="32" y1="37.2" x2="32" y2="40" stroke="#15110d" stroke-width="0.8"/>
    <line x1="33.8" y1="37.2" x2="33.8" y2="40" stroke="#15110d" stroke-width="0.8"/>
    <circle cx="28.2" cy="30.7" r="1.1" fill="#f0c46a"/>
    <circle cx="35.8" cy="30.7" r="1.1" fill="#f0c46a"/>
    <path d="M14 44 A20 20 0 1 1 50 44" fill="none" stroke="#f0c46a" stroke-width="3" stroke-linecap="round"/>
    <polygon points="10,40 18,48 20,38" fill="#f0c46a"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "soul-siphon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-soul-siphon" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-soul-siphon" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-soul-siphon)"/>
    <g filter="url(#gl-soul-siphon)">
    <polyline points="35,32 35.3,32.7 35.4,33.6 35.2,34.5 34.8,35.5 34.1,36.3 33.2,37 32,37.5 30.7,37.7 29.3,37.6 27.9,37.2 26.6,36.4 25.4,35.2 24.5,33.8 24,32.1 23.8,30.2 24.1,28.3 24.8,26.4 26,24.7 27.6,23.2 29.6,22.1 31.8,21.4 34.3,21.3 36.7,21.8 39.1,22.8 41.2,24.3 43,26.4 44.3,28.9 45.1,31.7 45.2,34.7 44.6,37.7 43.3,40.6 41.3,43.1 38.8,45.2 35.8,46.8 32.4,47.6 28.9,47.7 25.3,46.9 22,45.3 19,43 16.6,40 14.8,36.5 13.9,32.6 13.9,28.5 14.8,24.4 16.6,20.5 19.3,17.1 22.7,14.4 26.8,12.4 31.2,11.4 35.9,11.4 40.5,12.4 44.9,14.5 48.7,17.5 51.8,21.4 54,26 55.1,31 55.1,36.2 54,41.4 51.6,46.2" fill="none" stroke="#8fd0ff" stroke-width="3" stroke-linecap="round"/>
    <circle cx="32" cy="32" r="4" fill="#ffffff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "swelling-ranks": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-swelling-ranks" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-swelling-ranks" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-swelling-ranks)"/>
    <g filter="url(#gl-swelling-ranks)">
    <path d="M10.8 36 a7.2 7.2 0 1 1 14.3 0 v2.6 q0 2 -2 2.3 v2.6 h-10.4 v-2.6 q-2 -0.3 -2 -2.3 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="15.2" cy="36.3" rx="2.1" ry="2.3" fill="#15110d"/>
    <ellipse cx="20.8" cy="36.3" rx="2.1" ry="2.3" fill="#15110d"/>
    <path d="M18 38.3 l-1 2 h2.1 z" fill="#15110d"/>
    <line x1="16.7" y1="41.3" x2="16.7" y2="43.4" stroke="#15110d" stroke-width="0.6"/>
    <line x1="18" y1="41.3" x2="18" y2="43.4" stroke="#15110d" stroke-width="0.6"/>
    <line x1="19.3" y1="41.3" x2="19.3" y2="43.4" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="15.2" cy="36.5" r="0.8" fill="#f0c46a"/>
    <circle cx="20.8" cy="36.5" r="0.8" fill="#f0c46a"/>
    <path d="M38.9 36 a7.2 7.2 0 1 1 14.3 0 v2.6 q0 2 -2 2.3 v2.6 h-10.4 v-2.6 q-2 -0.3 -2 -2.3 z" fill="#ece4cf" stroke="#15110d" stroke-width="0.8"/>
    <ellipse cx="43.2" cy="36.3" rx="2.1" ry="2.3" fill="#15110d"/>
    <ellipse cx="48.8" cy="36.3" rx="2.1" ry="2.3" fill="#15110d"/>
    <path d="M46 38.3 l-1 2 h2.1 z" fill="#15110d"/>
    <line x1="44.7" y1="41.3" x2="44.7" y2="43.4" stroke="#15110d" stroke-width="0.6"/>
    <line x1="46" y1="41.3" x2="46" y2="43.4" stroke="#15110d" stroke-width="0.6"/>
    <line x1="47.3" y1="41.3" x2="47.3" y2="43.4" stroke="#15110d" stroke-width="0.6"/>
    <circle cx="43.2" cy="36.5" r="0.8" fill="#f0c46a"/>
    <circle cx="48.8" cy="36.5" r="0.8" fill="#f0c46a"/>
    <path d="M22.4 26 a9.6 9.6 0 1 1 19.2 0 v3.5 q0 2.6 -2.6 3.1 v3.5 h-14 v-3.5 q-2.6 -0.4 -2.6 -3.1 z" fill="#ece4cf" stroke="#15110d" stroke-width="1.1"/>
    <ellipse cx="28.2" cy="26.4" rx="2.8" ry="3.1" fill="#15110d"/>
    <ellipse cx="35.8" cy="26.4" rx="2.8" ry="3.1" fill="#15110d"/>
    <path d="M32 29.1 l-1.4 2.6 h2.8 z" fill="#15110d"/>
    <line x1="30.2" y1="33.2" x2="30.2" y2="36" stroke="#15110d" stroke-width="0.8"/>
    <line x1="32" y1="33.2" x2="32" y2="36" stroke="#15110d" stroke-width="0.8"/>
    <line x1="33.8" y1="33.2" x2="33.8" y2="36" stroke="#15110d" stroke-width="0.8"/>
    <circle cx="28.2" cy="26.7" r="1.1" fill="#f0c46a"/>
    <circle cx="35.8" cy="26.7" r="1.1" fill="#f0c46a"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "unholy-aura": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-unholy-aura" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#5a4116"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-unholy-aura" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-unholy-aura)"/>
    <g filter="url(#gl-unholy-aura)">
    <ellipse cx="32" cy="44" rx="22" ry="8" fill="none" stroke="#f0c46a" stroke-width="3"/>
    <ellipse cx="32" cy="44" rx="14" ry="4.5" fill="none" stroke="#f0c46a" stroke-width="1.8" opacity=".7"/>
    <path d="M20 40 q-3 -10 0 -20 q3 -6 0 -12" fill="none" stroke="#f0c46a" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    <path d="M32 40 q-3 -10 0 -20 q3 -6 0 -12" fill="none" stroke="#f0c46a" stroke-width="2" stroke-linecap="round" opacity="1"/>
    <path d="M44 40 q-3 -10 0 -20 q3 -6 0 -12" fill="none" stroke="#f0c46a" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#f0c46a" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "unyielding": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-unyielding" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#1b4362"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-unyielding" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-unyielding)"/>
    <g filter="url(#gl-unyielding)">
    <rect x="20" y="14" width="24" height="36" fill="#ece4cf" stroke="#15110d" stroke-width="1.5"/>
    <rect x="16" y="8" width="32" height="7" rx="1.5" fill="#a3987d" stroke="#15110d" stroke-width="1.5"/>
    <rect x="16" y="49" width="32" height="7" rx="1.5" fill="#a3987d" stroke="#15110d" stroke-width="1.5"/>
    <path d="M26 16 v32 M32 16 v32 M38 16 v32" stroke="#a3987d" stroke-width="1.4"/>
    <line x1="4" y1="32" x2="14" y2="32" stroke="#8fd0ff" stroke-width="2.4" stroke-linecap="round"/>
    <polygon points="16,32 10.7,34.9 10.7,29.1" fill="#8fd0ff"/>
    <line x1="60" y1="32" x2="50" y2="32" stroke="#8fd0ff" stroke-width="2.4" stroke-linecap="round"/>
    <polygon points="48,32 53.3,29.1 53.3,34.9" fill="#8fd0ff"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#8fd0ff" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "virulence": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-virulence" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-virulence" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-virulence)"/>
    <g filter="url(#gl-virulence)">
    <path d="M32 15 C43.2 30 42 41.2 32 41.2 C22 41.2 20.8 30 32 15 z" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="28.2" cy="32.5" rx="2.5" ry="4" fill="#ffffff" opacity=".55"/>
    <path d="M26.8 35 a5.2 5.2 0 1 1 10.4 0 v1.9 q0 1.4 -1.4 1.7 v1.9 h-7.6 v-1.9 q-1.4 -0.2 -1.4 -1.7 z" fill="#1e2a12" stroke="#15110d" stroke-width="0.6"/>
    <ellipse cx="30" cy="35.2" rx="1.5" ry="1.7" fill="#15110d"/>
    <ellipse cx="34" cy="35.2" rx="1.5" ry="1.7" fill="#15110d"/>
    <path d="M32 36.7 l-0.8 1.4 h1.5 z" fill="#15110d"/>
    <line x1="31.1" y1="38.9" x2="31.1" y2="40.4" stroke="#15110d" stroke-width="0.4"/>
    <line x1="32" y1="38.9" x2="32" y2="40.4" stroke="#15110d" stroke-width="0.4"/>
    <line x1="33" y1="38.9" x2="33" y2="40.4" stroke="#15110d" stroke-width="0.4"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

  "withering-touch": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
    <radialGradient id="bg-withering-touch" cx=".5" cy=".38" r=".78">
    <stop offset="0" stop-color="#33501a"/>
    <stop offset="1" stop-color="#0b0a0c"/>
    </radialGradient>
    <filter id="gl-withering-touch" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b"/>
    <feOffset dy="1.2" result="o"/>
    <feComponentTransfer in="o" result="s">
    <feFuncA type="linear" slope=".8"/>
    </feComponentTransfer>
    <feMerge>
    <feMergeNode in="s"/>
    <feMergeNode in="SourceGraphic"/>
    </feMerge>
    </filter>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="6" fill="url(#bg-withering-touch)"/>
    <g filter="url(#gl-withering-touch)">
    <path d="M22 56 V34 Q22 30 25 30 Q28 30 28 34 V22 Q28 18 31 18 Q34 18 34 22 V20 Q34 16 37 16 Q40 16 40 20 V26 Q40 22 43 22 Q46 22 46 26 V40 Q46 50 38 56 Z" fill="#ece4cf" stroke="#15110d" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M28 40 h12 M30 46 h10" stroke="#a3987d" stroke-width="1.4"/>
    <path d="M18 11.4 C22.9 18 22.4 22.9 18 22.9 C13.6 22.9 13.1 18 18 11.4 z" fill="#a9d94c" stroke="#15110d" stroke-width="1.3"/>
    <ellipse cx="16.4" cy="19.1" rx="1.1" ry="1.8" fill="#ffffff" opacity=".55"/>
    </g>
    <rect x="1.5" y="1.5" width="61" height="61" rx="5.5" fill="none" stroke="#a9d94c" stroke-opacity=".55" stroke-width="1.5"/>
    <rect x="4" y="4" width="56" height="56" rx="3.5" fill="none" stroke="#000" stroke-opacity=".45"/>
    </svg>`,

};
