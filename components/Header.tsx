"use client"
import Link from 'next/link'
import { MotionConfig, motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Header(){
  return (
    <header className="border-b border-stone/10 bg-white/0 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="h-8 text-xl font-medium h-serif text-black">THE HUMAN ARCHIVE</Link>
        <nav className="hidden md:flex gap-8 items-center text-sm uppercase tracking-widest text-stone">
          <Link href="/explore">Explore</Link>
          <Link href="/archive">Archive</Link>
          <Link href="/perspectives">Perspectives</Link>
          <Link href="/about">About</Link>
        </nav>
        <button aria-label="menu" className="md:hidden p-2 text-stone">
          <Menu />
        </button>
      </div>
    </header>
  )
}
