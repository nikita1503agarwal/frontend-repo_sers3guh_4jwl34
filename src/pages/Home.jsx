import Spline from '@splinetool/react-spline'
import Navbar from '../components/Navbar'
import CTAButton from '../components/CTAButton'
import { Section, Testimonials, Process, CaseStudies } from '../components/Sections'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#040815] text-white">
      <div className="fixed inset-0 z-0 opacity-90">
        <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <section className="min-h-[90vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                  Brand Waves
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="mt-4 text-lg sm:text-xl text-white/80">
                  A single expert studio crafting brands, websites, and digital signage with cinematic precision.
                </motion.p>
                <div className="mt-8 flex gap-4">
                  <CTAButton href="#contact">Start your project</CTAButton>
                  <a href="#work" className="rounded-full px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors">See work</a>
                </div>
              </div>
            </div>
          </section>

          <Section className="text-white/90">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">One voice. One vision. No handoffs.</h2>
              <p className="mt-4 text-white/80">You speak directly with the person designing and building your brand, website, and physical signage. Strategic clarity, fewer meetings, faster outcomes.</p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <CTAButton href="/wavelab">Explore WaveLab</CTAButton>
                <CTAButton className="bg-white/10 hover:bg-white/20" href="/branding">Branding</CTAButton>
                <CTAButton className="bg-white/10 hover:bg-white/20" href="/signage">Digital Signage</CTAButton>
              </div>
            </div>
          </Section>

          <CaseStudies />
          <Process />
          <Testimonials />

          <Section className="text-white/90" id="contact">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s build something that moves people</h3>
                <p className="mt-3 text-white/70">Book a short call to align on goals and timelines. If it’s a fit, you get a clear plan within 48 hours.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <form className="space-y-4">
                  <input className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
                  <input type="email" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
                  <textarea className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="What are you building?" rows="4" />
                  <CTAButton className="w-full">Request intro</CTAButton>
                </form>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  )
}
