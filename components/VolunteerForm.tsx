"use client"
import { useState } from 'react'

export default function VolunteerForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Research')
  const [success, setSuccess] = useState(false)

  function submit(e:any){
    e.preventDefault()
    const queue = JSON.parse(localStorage.getItem('volunteer-queue')||'[]')
    queue.push({name,email,role,ts:Date.now()})
    localStorage.setItem('volunteer-queue', JSON.stringify(queue))
    setSuccess(true)
  }

  return (
    <form onSubmit={submit} className="max-w-xl">
      <label className="block">Name<input required value={name} onChange={e=>setName(e.target.value)} className="w-full border p-2 mt-1" /></label>
      <label className="block mt-4">Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2 mt-1" /></label>
      <label className="block mt-4">Area<select value={role} onChange={e=>setRole(e.target.value)} className="w-full border p-2 mt-1">
        <option>Research</option>
        <option>Transcription</option>
        <option>Translation</option>
        <option>Editing</option>
        <option>Development</option>
      </select></label>
      <div className="mt-6">
        <button className="bg-black text-white py-2 px-4">Become a Contributor</button>
      </div>
      {success && <div className="mt-4 text-sm text-stone">Thanks — your submission has been queued (demo).</div>}
    </form>
  )
}
