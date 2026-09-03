"use client"
import VolunteerForm from '../../components/VolunteerForm'

export default function Contribute(){
  return (
    <main className="container py-12">
      <h2 className="h-serif text-3xl">An archive is never finished.</h2>
      <p className="mt-4 text-stone">Contribute through research, transcription, editing, translation, or development.</p>
      <div className="mt-8">
        <VolunteerForm />
      </div>
    </main>
  )
}
