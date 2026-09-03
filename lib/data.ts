import archives from '../data/archives.json'
import { ArchiveItem } from '../types'

export function fetchAllArchives(): ArchiveItem[] {
  return (archives as any).body as ArchiveItem[]
}

export function fetchArchiveById(id: string): ArchiveItem | undefined {
  return fetchAllArchives().find((a) => a.id === id)
}
