"use client"
import { useState } from 'react'

export default function Lightbox({src, alt, onClose}:{src:string, alt?:string, onClose:()=>void}){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-w-[90%] max-h-[90%] relative">
        <button aria-label="Close" onClick={onClose} className="absolute right-2 top-2 text-white">✕</button>
        <img src={src} alt={alt} className="w-full h-auto max-h-[90vh] object-contain"/>
      </div>
    </div>
  )
}
