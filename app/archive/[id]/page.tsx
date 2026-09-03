"use client"
import { useState } from 'react'
import { fetchArchiveById } from '../../../lib/data'
import { useRouter } from 'next/navigation'
import Lightbox from '../../../components/Lightbox'

export default function ArchiveItemPage({params}:{params:{id:string}}){
  const item = fetchArchiveById(params.id)
  const [open, setOpen] = useState(false)
  if(!item) return <div className="container py-12">Not found</div>
  return (
    <main className="container py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white border p-4">
            <img src={item.image} alt={item.title} className="w-full h-auto cursor-zoom-in" onClick={()=>setOpen(true)} />
            <div className="mt-2 text-xs text-stone">{item.institution} · {item.license}</div>
          </div>
        </div>
        <div>
          <div className="uppercase text-xs tracking-widest text-stone/70">THE RECORD</div>
          <h1 className="h-serif text-3xl mt-2">{item.title}</h1>
          <div className="mt-4 text-sm text-stone">{item.date} · {item.location} · {item.sourceType}</div>

          <section className="mt-6">
            <h3 className="text-sm uppercase tracking-widest text-stone/70">What does it say?</h3>
            <p className="mt-2 text-stone">{item.transcription || 'No transcription available for this demo item.'}</p>
          </section>

          <section className="mt-6">
            <h3 className="text-sm uppercase tracking-widest text-stone/70">What was happening?</h3>
            <p className="mt-2 text-stone">{item.historicalContext}</p>
          </section>

          <section className="mt-6">
            <h3 className="text-sm uppercase tracking-widest text-stone/70">What does this tell us?</h3>
            <p className="mt-2 text-stone">{item.interpretation}</p>
          </section>

        </div>
      </div>

      {open && <Lightbox src={item.image||''} alt={item.title} onClose={()=>setOpen(false)} />}
    </main>
  )
}
