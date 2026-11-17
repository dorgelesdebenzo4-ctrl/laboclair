import { useState } from 'react'
import { Card, PageTitle, btnPrimary, btnGhost, input } from '../components/ui'

const fmt = (n: number) => (Number.isFinite(n) ? n.toLocaleString('fr-FR', { maximumFractionDigits: 4 }) : '—')
const parse = (s: string) => {
  const v = parseFloat(s.replace(',', '.').replace(/\s/g, ''))
  return Number.isFinite(v) ? v : NaN
}

const VOL: Record<string, number> = { L: 1, dL: 0.1, mL: 1e-3, 'µL': 1e-6 }
const MASS: Record<string, number> = { g: 1, mg: 1e-3, 'µg': 1e-6 }

function Convertisseur() {
  const [kind, setKind] = useState<'vol' | 'mass'>('vol')
  const table = kind === 'vol' ? VOL : MASS
  const units = Object.keys(table)
  const [val, setVal] = useState('1')
  const [from, setFrom] = useState('L')
  const [to, setTo] = useState('mL')
  const f = units.includes(from) ? from : units[0]
  const t = units.includes(to) ? to : units[1]
  const res = (parse(val) * table[f]) / table[t]

  return (
    <Card className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {(['vol', 'mass'] as const).map((k) => (
          <button key={k} onClick={() => { setKind(k); setFrom(k === 'vol' ? 'L' : 'g'); setTo(k === 'vol' ? 'mL' : 'mg') }} className={kind === k ? btnPrimary : btnGhost}>
            {k === 'vol' ? 'Volumes' : 'Masses'}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <input className={input} inputMode="decimal" value={val} onChange={(e) => setVal(e.target.value)} />
        <select className={input} value={f} onChange={(e) => setFrom(e.target.value)}>
          {units.map((u) => <option key={u}>{u}</option>)}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">en</span>
        <select className={input} value={t} onChange={(e) => setTo(e.target.value)}>
          {units.map((u) => <option key={u}>{u}</option>)}
        </select>
      </div>
      <div className="rounded-xl bg-labo-50 p-4 text-center dark:bg-labo-900/40">
        <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
          {fmt(res)} {t}
        </div>
        <div className="mt-1 text-xs text-slate-500">
          {table[f] > table[t] ? `On descend vers une unité plus petite : on multiplie par ${fmt(table[f] / table[t])}` : table[f] < table[t] ? `On monte vers une unité plus grande : on divise par ${fmt(table[t] / table[f])}` : 'Même unité'}
        </div>
      </div>
    </Card>
  )
}

function DilutionCalc() {
  const [v, setV] = useState({ C1: '9', V1: '', C2: '0,9', V2: '100' })
  const keys = ['C1', 'V1', 'C2', 'V2'] as const
  const nums = Object.fromEntries(keys.map((k) => [k, parse(v[k])])) as Record<(typeof keys)[number], number>
  const missing = keys.filter((k) => Number.isNaN(nums[k]))
  let result = ''
  let steps = ''
  if (missing.length === 1) {
    const m = missing[0]
    const { C1, V1, C2, V2 } = nums
    const r = m === 'C1' ? (C2 * V2) / V1 : m === 'V1' ? (C2 * V2) / C1 : m === 'C2' ? (C1 * V1) / V2 : (C1 * V1) / C2
    result = `${m} = ${fmt(r)}`
    steps =
      m === 'V1' ? `V1 = (C2 × V2) ÷ C1 = (${fmt(C2)} × ${fmt(V2)}) ÷ ${fmt(C1)}`
      : m === 'C1' ? `C1 = (C2 × V2) ÷ V1 = (${fmt(C2)} × ${fmt(V2)}) ÷ ${fmt(V1)}`
      : m === 'C2' ? `C2 = (C1 × V1) ÷ V2 = (${fmt(C1)} × ${fmt(V1)}) ÷ ${fmt(V2)}`
      : `V2 = (C1 × V1) ÷ C2 = (${fmt(C1)} × ${fmt(V1)}) ÷ ${fmt(C2)}`
    if (m === 'V1' && r <= V2) steps += `\nPrélève ${fmt(r)} de solution mère et complète avec ${fmt(V2 - r)} de diluant. Facteur de dilution : ${fmt(V2 / r)}.`
  }
  const labels = { C1: 'C1 (mère)', V1: 'V1 (prélevé)', C2: 'C2 (fille)', V2: 'V2 (final)' }

  return (
    <Card className="space-y-3">
      <p className="text-sm">
        <strong>C1 × V1 = C2 × V2.</strong> Laisse <strong>une seule</strong> case vide : elle sera calculée. Utilise les mêmes unités des deux côtés.
      </p>
      <div className="grid grid-cols-2 gap-2">
        {keys.map((k) => (
          <label key={k} className="text-xs font-semibold text-slate-500">
            {labels[k]}
            <input className={`${input} mt-1`} inputMode="decimal" value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} />
          </label>
        ))}
      </div>
      <div className="rounded-xl bg-labo-50 p-4 dark:bg-labo-900/40">
        {result ? (
          <>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{result}</div>
            <p className="mt-1 whitespace-pre-line text-sm">{steps}</p>
          </>
        ) : (
          <p className="text-sm text-slate-500">Remplis 3 cases sur 4.</p>
        )}
      </div>
    </Card>
  )
}

const MOLAR: Record<string, number> = { 'Glucose (180 g/mol)': 180, 'NaCl (58,5 g/mol)': 58.5, 'Urée (60 g/mol)': 60, Autre: NaN }

function MolaireCalc() {
  const [sub, setSub] = useState('Glucose (180 g/mol)')
  const [custom, setCustom] = useState('')
  const [cm, setCm] = useState('1')
  const M = sub === 'Autre' ? parse(custom) : MOLAR[sub]
  const C = parse(cm) / M
  return (
    <Card className="space-y-3">
      <p className="text-sm">
        <strong>C = Cm ÷ M.</strong> Passe d’une concentration en g/L à une concentration en mol/L (et mmol/L).
      </p>
      <select className={input} value={sub} onChange={(e) => setSub(e.target.value)}>
        {Object.keys(MOLAR).map((k) => <option key={k}>{k}</option>)}
      </select>
      {sub === 'Autre' && <input className={input} inputMode="decimal" placeholder="Masse molaire en g/mol" value={custom} onChange={(e) => setCustom(e.target.value)} />}
      <label className="block text-xs font-semibold text-slate-500">
        Concentration massique (g/L)
        <input className={`${input} mt-1`} inputMode="decimal" value={cm} onChange={(e) => setCm(e.target.value)} />
      </label>
      <div className="rounded-xl bg-labo-50 p-4 dark:bg-labo-900/40">
        <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{fmt(C)} mol/L</div>
        <div className="text-sm">soit {fmt(C * 1000)} mmol/L</div>
        <div className="mt-1 text-xs text-slate-500">
          C = {fmt(parse(cm))} ÷ {fmt(M)}
        </div>
      </div>
    </Card>
  )
}

// ---------- Exercices générés ----------
type Exo = { enonce: string; reponse: number; unite: string; etapes: string[] }
const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)]

function newExo(): Exo {
  const type = pick(['conv', 'v1', 'facteur', 'cm', 'serie'])
  if (type === 'conv') {
    const [a, b, k] = pick([['mL', 'µL', 1000], ['L', 'mL', 1000], ['g', 'mg', 1000], ['mg', 'µg', 1000], ['dL', 'mL', 100], ['L', 'dL', 10]] as [string, string, number][])
    const up = Math.random() < 0.5
    const x = pick([0.2, 0.5, 1.5, 2, 2.5, 3, 0.75, 4])
    if (!up) return { enonce: `Convertis ${fmt(x)} ${a} en ${b}.`, reponse: x * k, unite: b, etapes: [`1 ${a} = ${fmt(k)} ${b}`, `On descend vers une unité plus petite : × ${fmt(k)}`, `${fmt(x)} × ${fmt(k)} = ${fmt(x * k)} ${b}`] }
    const y = x * k
    return { enonce: `Convertis ${fmt(y)} ${b} en ${a}.`, reponse: x, unite: a, etapes: [`1 ${a} = ${fmt(k)} ${b}`, `On monte vers une unité plus grande : ÷ ${fmt(k)}`, `${fmt(y)} ÷ ${fmt(k)} = ${fmt(x)} ${a}`] }
  }
  if (type === 'v1') {
    const F = pick([2, 4, 5, 10, 20])
    const V2 = pick([50, 100, 200, 250])
    const C1 = pick([10, 20, 40, 100])
    const C2 = C1 / F
    const V1 = (C2 * V2) / C1
    return { enonce: `Tu veux préparer ${V2} mL de solution à ${fmt(C2)} g/L à partir d’une solution mère à ${C1} g/L. Quel volume de solution mère dois-tu prélever (en mL) ?`, reponse: V1, unite: 'mL', etapes: ['C1 × V1 = C2 × V2, donc V1 = (C2 × V2) ÷ C1', `V1 = (${fmt(C2)} × ${V2}) ÷ ${C1}`, `V1 = ${fmt(V1)} mL`, `Puis compléter avec ${fmt(V2 - V1)} mL de diluant (dilution au 1/${F}).`] }
  }
  if (type === 'facteur') {
    const F = pick([2, 5, 10, 20, 50])
    const C1 = pick([50, 100, 200, 500])
    return { enonce: `Une solution à ${C1} g/L est diluée au 1/${F}. Quelle est sa nouvelle concentration (en g/L) ?`, reponse: C1 / F, unite: 'g/L', etapes: [`C2 = C1 ÷ F`, `C2 = ${C1} ÷ ${F}`, `C2 = ${fmt(C1 / F)} g/L`] }
  }
  if (type === 'cm') {
    const m = pick([2, 4.5, 9, 18, 5, 12])
    const V = pick([0.25, 0.5, 2, 1.5])
    return { enonce: `On dissout ${fmt(m)} g de soluté dans ${fmt(V)} L de solution. Quelle est la concentration massique (en g/L) ?`, reponse: m / V, unite: 'g/L', etapes: ['Cm = m ÷ V', `Cm = ${fmt(m)} ÷ ${fmt(V)}`, `Cm = ${fmt(m / V)} g/L`] }
  }
  const a = pick([2, 5, 10])
  const b = pick([2, 5, 10])
  return { enonce: `On fait une dilution au 1/${a}, puis une seconde dilution au 1/${b}. Quel est le facteur de dilution total ?`, reponse: a * b, unite: '(facteur)', etapes: ['En série, les facteurs se multiplient', `${a} × ${b} = ${a * b}`, `Dilution totale au 1/${a * b}`] }
}

function Exercices() {
  const [exo, setExo] = useState<Exo>(newExo)
  const [rep, setRep] = useState('')
  const [shown, setShown] = useState<null | boolean>(null)
  const [score, setScore] = useState({ ok: 0, total: 0 })

  const check = () => {
    const v = parse(rep)
    const ok = Math.abs(v - exo.reponse) <= Math.max(1e-9, Math.abs(exo.reponse) * 0.01)
    setShown(ok)
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }))
  }
  const next = () => {
    setExo(newExo())
    setRep('')
    setShown(null)
  }

  return (
    <Card className="space-y-3">
      <div className="flex justify-between text-xs font-semibold text-slate-500">
        <span>Exercice généré au hasard</span>
        <span>
          Score : {score.ok}/{score.total}
        </span>
      </div>
      <p className="text-lg font-semibold text-slate-900 dark:text-white">{exo.enonce}</p>
      <div className="flex gap-2">
        <input className={input} inputMode="decimal" placeholder="Ta réponse" value={rep} onChange={(e) => setRep(e.target.value)} disabled={shown !== null} onKeyDown={(e) => e.key === 'Enter' && rep && shown === null && check()} />
        <span className="self-center text-sm text-slate-500">{exo.unite}</span>
      </div>
      {shown === null ? (
        <button className={`${btnPrimary} w-full`} onClick={check} disabled={!rep}>
          Vérifier
        </button>
      ) : (
        <div className="rounded-xl bg-slate-50 p-3 text-sm dark:bg-ink-900">
          <p className="font-bold text-slate-900 dark:text-white">{shown ? '✅ Bravo, c’est juste !' : `❌ La bonne réponse est ${fmt(exo.reponse)} ${exo.unite}`}</p>
          <p className="mt-2 font-semibold">Correction pas à pas :</p>
          <ol className="mt-1 list-decimal space-y-0.5 pl-5">
            {exo.etapes.map((e, i) => <li key={i}>{e}</li>)}
          </ol>
          <button className={`${btnPrimary} mt-3 w-full`} onClick={next}>
            Exercice suivant →
          </button>
        </div>
      )}
    </Card>
  )
}

const TABS = [
  { id: 'exo', label: '✏️ Exercices', el: <Exercices /> },
  { id: 'conv', label: '📏 Unités', el: <Convertisseur /> },
  { id: 'dil', label: '🧪 Dilution', el: <DilutionCalc /> },
  { id: 'mol', label: '⚛️ g/L ↔ mol/L', el: <MolaireCalc /> },
]

export default function Calculs() {
  const [tab, setTab] = useState('exo')
  return (
    <div>
      <PageTitle title="Calculs de labo" sub="Entraîne-toi, puis vérifie avec les calculatrices." back="/plus" />
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold ${tab === t.id ? 'bg-labo-600 text-white' : 'bg-white text-slate-600 dark:bg-ink-800 dark:text-slate-300'}`}>
            {t.label}
          </button>
        ))}
      </div>
      {TABS.find((t) => t.id === tab)!.el}
    </div>
  )
}
