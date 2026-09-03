import Hero from '../components/Hero'

export default function Home(){
  return (
    <main>
      <Hero />

      <section className="container py-20">
        <div className="max-w-[68ch]">
          <h2 className="h-serif text-3xl">We inherit more than history. We inherit voices.</h2>
          <p className="mt-4 text-stone">Historical knowledge comes through letters, diaries, photographs, newspapers, maps, manuscripts, speeches, literature, artwork, and oral histories. This site is curated to preserve the human voice.</p>
        </div>
      </section>

      <section className="container pb-20">
        <h3 className="h-serif text-2xl">Two Perspectives</h3>
        <p className="mt-4 text-stone">A short demonstration of the archive / experience split is available in Perspectives.</p>
        <div className="mt-6">
          <a href="/perspectives" className="inline-block bg-black text-white py-2 px-4">Open Two Perspectives</a>
        </div>
      </section>

      <section className="container pb-40">
        <h3 className="h-serif text-2xl">What We Preserve, We Remember.</h3>
        <p className="mt-3 text-stone">Explore the Archive</p>
        <div className="mt-6">
          <a href="/archive" className="inline-block border border-stone/10 py-2 px-4">Explore the Archive</a>
        </div>
      </section>
    </main>
  )
}
