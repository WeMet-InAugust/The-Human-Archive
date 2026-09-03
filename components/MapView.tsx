import React, { useState } from 'react'
import archives from '../data/archives.json'
import { ArchiveItem } from '../types'

export default function MapView(){
  const items = (archives as any).body as ArchiveItem[]
  const regions = Array.from(new Set(items.map(i => i.location.split(' / ')[0] || i.location)))
  const [active, setActive] = useState<string | null>(null)

  return (
    <section aria-labelledby="map-title">
      <h3 id="map-title" className="h-serif text-2xl">THE WORLD, THROUGH ITS RECORDS</h3>
      <p className="mt-2 text-stone">Select a region to discover sources.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white border p-6">
          <div className="h-64 bg-black/5 flex items-center justify-center text-stone">[Map placeholder — sample interactive regions]</div>
          <div className="mt-4">
            {items.filter(i => !active || i.location.includes(active)).map(i => (
              <div key={i.id} className="py-2 border-b last:border-b-0">
                <div className="text-sm text-stone">{i.date} · {i.location}</div>
                <div className="h-serif text-lg text-black">{i.title}</div>
              </div>
            ))}
          </div>
        </div>
        <aside className="bg-white border p-6">
          <div className="text-xs uppercase tracking-widest text-stone/70">Regions</div>
          <div className="mt-3 flex flex-col gap-2">
            {regions.map(r => (
              <button key={r} onClick={()=>setActive(active===r? null : r)} className={`text-left py-2 ${active===r? 'bg-black text-white' : 'bg-white' } border`}>{r}</button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
