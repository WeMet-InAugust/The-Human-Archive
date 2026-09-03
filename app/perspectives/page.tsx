"use client"
import { useState } from 'react'
import archives from '../../data/archives.json'

export default function Perspectives(){
  const items = (archives as any).body
  const [idx, setIdx] = useState(0)
  const current = items[idx]
  return (
    <main className="container py-12">
      <h2 className="h-serif text-3xl">TWO PERSPECTIVES</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <div className="uppercase text-xs tracking-widest text-stone/70">THE RECORD</div>
          <div className="mt-2">
            <img src={current.image} alt="" className="w-full h-64 object-cover" />
          </div>
          <div className="mt-4 text-sm text-stone">{current.description}</div>
        </div>
        <div>
          <div className="uppercase text-xs tracking-widest text-stone/70">THE EXPERIENCE</div>
          <div className="mt-2">
            <div className="bg-white border p-6">
              <h3 className="h-serif text-xl">{current.relatedLiterature?.[0] || '—'}</h3>
              <p className="mt-4 text-stone">A short excerpt or contextual note would appear here in a full edition.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        {items.map((_:any, i:number)=> (
          <button key={i} onClick={()=>setIdx(i)} className={`px-3 py-2 border ${i===idx? 'bg-black text-white' : ''}`}>{i+1}</button>
        ))}
      </div>

    </main>
  )
}
