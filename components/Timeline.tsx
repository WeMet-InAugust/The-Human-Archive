import React from 'react'
import { ArchiveItem } from '../types'

export default function Timeline({items}:{items:ArchiveItem[]}){
  return (
    <div className="timeline overflow-x-auto py-6">
      <div className="flex gap-8 items-end" style={{minWidth: '900px'}}>
        {items.map((it, idx)=> (
          <div key={it.id} className="timeline-item flex-shrink-0 w-64">
            <div className="text-6xl h-serif text-black/10">{idx+1}</div>
            <div className="mt-2">
              <div className="text-xs uppercase tracking-widest text-stone/70">{it.date}</div>
              <h4 className="h-serif text-lg text-black mt-1">{it.title}</h4>
              <p className="text-sm text-stone mt-2">{it.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
