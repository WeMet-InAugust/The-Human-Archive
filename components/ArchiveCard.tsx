"use client"
import Link from 'next/link'
import { ArchiveItem } from '../types'

export default function ArchiveCard({item}:{item:ArchiveItem}){
  return (
    <article className="bg-white shadow-sm border border-stone/5 overflow-hidden">
      <Link href={`/archive/${item.id}`} className="block focus:outline-none focus:ring-2 focus:ring-black">
        <div className="h-44 bg-cover bg-center" style={{backgroundImage:`url('${item.image}')`}} role="img" aria-label={item.title}></div>
        <div className="p-4">
          <div className="text-xs uppercase tracking-widest text-stone/70">{item.date} · {item.location}</div>
          <h3 className="mt-2 h-serif text-lg text-black">{item.title}</h3>
          <p className="mt-2 text-sm text-stone line-clamp-3">{item.description}</p>
        </div>
      </Link>
    </article>
  )
}
