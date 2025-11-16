import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending…')
    try {
      // Placeholder submit – could be wired to backend later
      await new Promise((r) => setTimeout(r, 700))
      setStatus('Thanks! We will reach out shortly.')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Let’s talk</h2>
          <p className="mt-3 text-gray-700">Tell us about your goals. We’ll craft a tailored plan and timeline.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input required className="col-span-1 sm:col-span-1 rounded-md border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Name" />
          <input required type="email" className="col-span-1 sm:col-span-1 rounded-md border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email" />
          <input className="col-span-1 sm:col-span-2 rounded-md border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Company" />
          <textarea required rows={5} className="col-span-1 sm:col-span-2 rounded-md border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="How can we help?" />
          <div className="col-span-1 sm:col-span-2 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 shadow-sm">Send message</button>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
