import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import CTA from './components/CTA'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <CTA />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} BlueWire IT. All rights reserved.</p>
          <div className="text-sm text-gray-600">Networking • Services • Telephony • Footbonaut</div>
        </div>
      </footer>
    </div>
  )
}

export default App
