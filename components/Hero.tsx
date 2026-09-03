"use client"
import Link from 'next/link'
import { MotionConfig, motion } from 'framer-motion'
import archives from '../data/archives.json'

const heroImage = (archives as any).body?.[0]?.image || ''

export default function Hero(){
  return (
    <section className="min-h-[78vh] flex items-center" aria-labelledby="hero-title">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 id="hero-title" className="h-serif text-[clamp(34px,6vw,88px)] leading-[0.9] text-black">THE RECORD<br/>OF HUMANITY.</h1>
          <p className="mt-6 max-w-[48ch] text-stone text-lg">A living digital archive of the documents, literature, images, and voices through which we remember the past.</p>
          <div className="mt-8 flex gap-4">
            <Link href="/archive" className="inline-block bg-black text-white py-3 px-6 text-sm h-serif">Explore the Archive</Link>
            <a href="/about" className="inline-block border border-stone/20 py-3 px-6 text-sm">Our Mission</a>
          </div>
        </div>
        <motion.div initial={{opacity:0.6}} animate={{opacity:1}} className="rounded-sm overflow-hidden shadow-lg" aria-hidden>
          <div className="relative h-80 md:h-96 bg-cover bg-center" style={{backgroundImage:`url('${heroImage}')`}}>
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-2 text-xs text-stone">
              NEW YORK · 1918 · PRIMARY SOURCE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
