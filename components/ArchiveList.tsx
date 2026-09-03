"use client"
import { useState, useMemo } from 'react'
import archives from '../data/archives.json'
import { ArchiveItem } from '../types'
import ArchiveCard from './ArchiveCard'

export default function ArchiveList(){
  const items = (archives as any).body as ArchiveItem[]
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState('')

  const results = useMemo(()=>{
    const normalized = q.trim().toLowerCase()
    return items.filter(i => {
      if(filter && i.tags && !i.tags.includes(filter)) return false
      if(!normalized) return true
      return [i.title, i.description, i.period, i.location, (i.tags||[]).join(' ')].join(' ').toLowerCase().includes(normalized)
    })
  },[q, filter, items])

  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <label className="sr-only">Search archive</label>
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search the archive" className="flex-1 border py-2 px-3 bg-white/80"/>
        <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="border py-2 px-3 bg-white/80">
          <option value="">All tags</option>
          <option value="war">War</option>
          <option value="pandemic">Pandemic</option>
          <option value="literature">Literature</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(item => <ArchiveCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}
