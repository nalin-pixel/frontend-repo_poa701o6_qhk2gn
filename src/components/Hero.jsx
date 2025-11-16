import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative h-full z-[1] flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-800 ring-1 ring-black/5">
              Enterprise IT Partner
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Modern networking, services, telephony, and Footbonaut solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
              We architect reliable networks, streamline operations, enable crystal‑clear communications, and deliver cutting‑edge training systems for professional football clubs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 shadow-sm">
                Talk to an expert
              </a>
              <a href="#solutions" className="inline-flex items-center rounded-md bg-white/80 backdrop-blur px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-black/5 hover:bg-white">
                Explore solutions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white"></div>
    </section>
  )
}
