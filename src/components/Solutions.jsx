import { Server, Phone, Share2, Activity } from 'lucide-react'

const solutions = [
  {
    icon: Server,
    title: 'Networking',
    description:
      'Design, deployment, and monitoring of secure, scalable networks. SD‑WAN, Wi‑Fi 6/6E, switching, and data center fabrics.',
  },
  {
    icon: Share2,
    title: 'IT Services',
    description:
      'Managed services, cloud migrations, automation, and 24/7 support. We keep your stack healthy and your teams shipping.',
  },
  {
    icon: Phone,
    title: 'Telephony',
    description:
      'VoIP platforms, contact centers, SIP trunking, and Microsoft Teams Phone. Crystal‑clear comms at any scale.',
  },
  {
    icon: Activity,
    title: 'Footbonaut',
    description:
      'Installation and maintenance of the Footbonaut training system for elite clubs. Precision tracking and analytics.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Solutions</h2>
          <p className="mt-3 text-gray-700">End‑to‑end delivery, from discovery to ongoing operations.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{description}</p>
              <div className="mt-4 text-sm font-medium text-blue-700">Learn more →</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  )
}
