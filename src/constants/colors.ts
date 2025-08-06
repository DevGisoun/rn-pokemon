export const pokemonTypeColors: {
    [key: string]: { background: string; text: string };
} = {
    normal: { background: '#f5f5f5', text: '#a3a3a3' }, // neutral-100, neutral-400
    fire: { background: '#ffe4e6', text: '#fb7185' }, // rose-100, rose-400
    water: { background: '#e0f2fe', text: '#38bdf8' }, // sky-100, sky-400
    grass: { background: '#dcfce7', text: '#4ade80' }, // green-100, green-500
    electric: { background: '#fef9c3', text: '#facc15' }, // yellow-100, yellow-500
    ice: { background: '#cffafe', text: '#22d3ee' }, // cyan-100, cyan-400
    fighting: { background: '#fca5a5', text: '#ef4444' }, // red-300, red-500
    poison: { background: '#e9d5ff', text: '#a855f7' }, // purple-200, purple-600
    ground: { background: '#fde68a', text: '#f59e0b' }, // amber-200, amber-500
    flying: { background: '#e0e7ff', text: '#818cf8' }, // indigo-100, indigo-400
    psychic: { background: '#fbcfe8', text: '#ec4899' }, // pink-200, pink-500
    bug: { background: '#d9f99d', text: '#84cc16' }, // lime-200, lime-500
    rock: { background: '#fed7aa', text: '#f97316' }, // orange-200, orange-500
    ghost: { background: '#d8b4fe', text: '#9333ea' }, // violet-300, violet-600
    dragon: { background: '#c4b5fd', text: '#7c3aed' }, // violet-400, violet-600
    steel: { background: '#e5e7eb', text: '#6b7280' }, // gray-200, gray-500
    fairy: { background: '#fce7f3', text: '#db2777' }, // pink-100, pink-600
    // 정의되지 않은 타입이 들어올 경우를 대비한 기본값
    default: { background: '#e0e0e0', text: '#555' },
};
