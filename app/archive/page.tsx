"use client"
import { useState } from 'react'
import { fetchAllArchives } from '../../lib/data'
import ArchiveList from '../../components/ArchiveList'

export default function ArchivePage(){
  const items = fetchAllArchives()
  return (
    <main className="container py-12">
      <header className="max-w-[70ch]">
        <h2 className="h-serif text-4xl">THE ARCHIVE</h2>
        <p className="mt-4 text-stone">Documents from the human record.</p>
      </header>

      <div className="mt-10">
        <ArchiveList />
      </div>
    </main>
  )
}
