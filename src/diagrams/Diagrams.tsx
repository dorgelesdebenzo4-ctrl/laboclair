import type { DiagramKey } from '../data/types'

const label = 'fill-slate-700 dark:fill-slate-200 text-[13px] font-medium'
const line = 'stroke-slate-400 dark:stroke-slate-500'

function Cellule() {
  return (
    <svg viewBox="0 0 440 260" className="w-full" role="img" aria-label="Schéma d'une cellule">
      <ellipse cx="170" cy="130" rx="140" ry="105" className="fill-sky-50 dark:fill-sky-950 stroke-sky-500" strokeWidth="5" />
      <circle cx="160" cy="125" r="42" className="fill-violet-200 dark:fill-violet-900 stroke-violet-500" strokeWidth="3" />
      <path d="M140 115 q10 -12 20 0 t20 0 M142 135 q10 10 20 0 t18 0" className="stroke-violet-600 dark:stroke-violet-300" strokeWidth="2.5" fill="none" />
      <g className="fill-orange-200 dark:fill-orange-900 stroke-orange-500" strokeWidth="2.5">
        <ellipse cx="245" cy="85" rx="26" ry="13" transform="rotate(20 245 85)" />
        <ellipse cx="95" cy="190" rx="24" ry="12" transform="rotate(-15 95 190)" />
      </g>
      <path d="M233 82 q6 8 12 0 t12 0" className="stroke-orange-500" strokeWidth="2" fill="none" />
      <g className="fill-emerald-500">
        {[[240, 165], [252, 175], [228, 178], [215, 60], [90, 90], [100, 80], [265, 140]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" />
        ))}
      </g>
      <g className={line} strokeWidth="1.5">
        <line x1="295" y1="70" x2="330" y2="40" />
        <line x1="190" y1="110" x2="330" y2="100" />
        <line x1="268" y1="92" x2="330" y2="150" />
        <line x1="255" y1="175" x2="330" y2="205" />
        <line x1="100" y1="215" x2="90" y2="245" />
      </g>
      <text x="334" y="44" className={label}>Membrane</text>
      <text x="334" y="104" className={label}>Noyau (ADN)</text>
      <text x="334" y="154" className={label}>Mitochondrie</text>
      <text x="334" y="209" className={label}>Ribosomes</text>
      <text x="20" y="252" className={label}>Cytoplasme</text>
    </svg>
  )
}

function Unites() {
  const steps = [
    ['L', 'g'],
    ['mL', 'mg'],
    ['µL', 'µg'],
  ]
  return (
    <svg viewBox="0 0 400 230" className="w-full" role="img" aria-label="Escalier des unités">
      {steps.map(([v, m], i) => (
        <g key={v}>
          <rect x={30 + i * 115} y={30 + i * 55} width="110" height="56" rx="12" className="fill-labo-100 dark:fill-labo-900 stroke-labo-500" strokeWidth="2" />
          <text x={85 + i * 115} y={56 + i * 55} textAnchor="middle" className="fill-labo-700 dark:fill-labo-200 text-[18px] font-bold">{v}</text>
          <text x={85 + i * 115} y={76 + i * 55} textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[13px]">{m}</text>
        </g>
      ))}
      {[0, 1].map((i) => (
        <g key={i}>
          <path d={`M${140 + i * 115} ${58 + i * 55} q22 0 22 28`} className="stroke-emerald-500" strokeWidth="2.5" fill="none" markerEnd="url(#fl)" />
          <text x={150 + i * 115} y={50 + i * 55} className="fill-emerald-600 dark:fill-emerald-400 text-[13px] font-bold">× 1 000</text>
        </g>
      ))}
      <defs>
        <marker id="fl" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="fill-emerald-500" />
        </marker>
      </defs>
      <text x="30" y="210" className={label}>Descendre : × 1 000 · Monter : ÷ 1 000 · 1 L = 10 dL</text>
    </svg>
  )
}

function Becher({ x, n, titre }: { x: number; n: number; titre: string }) {
  const dots = Array.from({ length: n }, (_, i) => [x + 22 + ((i * 37) % 76), 110 + ((i * 23) % 70)])
  return (
    <g>
      <path d={`M${x} 60 v120 q0 14 14 14 h92 q14 0 14 -14 v-120`} className="stroke-slate-400 dark:stroke-slate-400" strokeWidth="3" fill="none" />
      <rect x={x + 3} y="95" width="114" height="96" rx="10" className="fill-sky-200/70 dark:fill-sky-800/60" />
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" className="fill-rose-500" />
      ))}
      <text x={x + 60} y="220" textAnchor="middle" className={label}>{titre}</text>
    </g>
  )
}

function Concentration() {
  return (
    <svg viewBox="0 0 400 235" className="w-full" role="img" aria-label="Comparaison de concentrations">
      <Becher x={40} n={4} titre="Peu concentrée" />
      <Becher x={240} n={14} titre="Très concentrée" />
      <circle cx="160" cy="30" r="5" className="fill-rose-500" />
      <text x="172" y="35" className={label}>= soluté · liquide bleu = solvant</text>
    </svg>
  )
}

function Dilution() {
  return (
    <svg viewBox="0 0 400 240" className="w-full" role="img" aria-label="Dilution au 1/10">
      <g>
        <rect x="30" y="60" width="50" height="130" rx="8" className="fill-none stroke-slate-400" strokeWidth="3" />
        <rect x="33" y="150" width="44" height="37" rx="5" className="fill-rose-400" />
        <text x="55" y="215" textAnchor="middle" className={label}>1 vol.</text>
        <text x="55" y="232" textAnchor="middle" className="fill-slate-500 text-[11px]">solution mère</text>
      </g>
      <text x="100" y="135" className="fill-slate-500 text-[26px] font-bold">+</text>
      <g>
        <rect x="130" y="40" width="70" height="150" rx="8" className="fill-none stroke-slate-400" strokeWidth="3" />
        <rect x="133" y="55" width="64" height="132" rx="5" className="fill-sky-200 dark:fill-sky-800" />
        <text x="165" y="215" textAnchor="middle" className={label}>9 vol.</text>
        <text x="165" y="232" textAnchor="middle" className="fill-slate-500 text-[11px]">diluant</text>
      </g>
      <text x="215" y="135" className="fill-slate-500 text-[26px] font-bold">=</text>
      <g>
        <rect x="250" y="25" width="110" height="165" rx="10" className="fill-none stroke-slate-400" strokeWidth="3" />
        <rect x="253" y="40" width="104" height="147" rx="7" className="fill-rose-200 dark:fill-rose-900" />
        <text x="305" y="215" textAnchor="middle" className={label}>10 vol. au 1/10</text>
        <text x="305" y="232" textAnchor="middle" className="fill-slate-500 text-[11px]">solution fille</text>
      </g>
    </svg>
  )
}

function Sang() {
  return (
    <svg viewBox="0 0 430 260" className="w-full" role="img" aria-label="Tube de sang centrifugé">
      <rect x="140" y="10" width="70" height="26" rx="5" className="fill-violet-500" />
      <path d="M145 36 v180 q0 30 30 30 q30 0 30 -30 v-180" className="fill-none stroke-slate-400" strokeWidth="3" />
      <path d="M148 40 h54 v80 h-54 z" className="fill-amber-200 dark:fill-amber-300/80" />
      <rect x="148" y="120" width="54" height="5" className="fill-slate-100" />
      <path d="M148 125 h54 v91 q0 27 -27 27 q-27 0 -27 -27 z" className="fill-red-700" />
      <g className={line} strokeWidth="1.5">
        <line x1="205" y1="80" x2="250" y2="80" />
        <line x1="205" y1="122" x2="250" y2="122" />
        <line x1="205" y1="180" x2="250" y2="180" />
      </g>
      <text x="255" y="78" className={label}>Plasma : plus de 50 %</text>
      <text x="255" y="94" className="fill-slate-500 text-[11px]">eau, sels minéraux, protéines</text>
      <text x="255" y="126" className={label}>Globules blancs</text>
      <text x="255" y="142" className="fill-slate-500 text-[11px]">+ plaquettes (fine couche)</text>
      <text x="255" y="184" className={label}>Globules rouges</text>
      <text x="255" y="200" className="fill-slate-500 text-[11px]">≈ 40 % (hématocrite)</text>
      <text x="20" y="28" className="fill-slate-500 text-[11px]">Tube EDTA</text>
      <text x="20" y="44" className="fill-slate-500 text-[11px]">(anticoagulant)</text>
    </svg>
  )
}

export function Diagram({ k }: { k: DiagramKey }) {
  switch (k) {
    case 'cellule':
      return <Cellule />
    case 'unites':
      return <Unites />
    case 'concentration':
      return <Concentration />
    case 'dilution':
      return <Dilution />
    case 'sang':
      return <Sang />
  }
}
