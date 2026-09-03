"use client"
import Timeline from '../../components/Timeline'
import archives from '../../data/archives.json'

export default function TimelinePage(){
  const items = (archives as any).body
  return (
    <main className="container py-12">
      <h2 className="h-serif text-3xl">A HUMAN TIMELINE</h2>
      <p className="mt-4 text-stone">Move through curated moments from the archive.</p>
      <div className="mt-8">
        <Timeline items={items} />
      </div>
    </main>
  )
}
