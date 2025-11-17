import Spline from '@splinetool/react-spline'
import Navbar from '../components/Navbar'
import CTAButton from '../components/CTAButton'
import { Section, ServiceBreakdown, Testimonials, Process } from '../components/Sections'
import { motion } from 'framer-motion'

export default function Branding() {
  return (
    <div className="relative min-h-screen bg-[#080814] text-white">
      <div className="fixed inset-0 z-0">
        <Spline scene="https://prod.spline.design/Ac2lDnOCO385PkpX/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <section className="min-h-[90vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                  Branding that breathes
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 text-lg sm:text-xl text-white/85">
                  Strategy, identity, and systems that align every touchpoint — digital and physical.
                </motion.p>
                <div className="mt-8 flex gap-4">
                  <CTAButton href="#contact">Shape my brand</CTAButton>
                  <a href="#cases" className="rounded-full px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors">See case studies</a>
                </div>
              </div>
            </div>
          </section>

          <Section>
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold">A single expert, a coherent brand</h2>
              <p className="mt-4 text-white/80">No committee design. One vision that translates from logo to signage to storefront to UI.</p>
            </div>
          </Section>

          <Section>
            <ServiceBreakdown items={[
              { title: 'Brand strategy', text: 'Positioning, voice, and narrative crafted around business outcomes.' },
              { title: 'Identity systems', text: 'Logos, grids, typography, color, and motion rules.' },
              { title: 'Guidelines & assets', text: 'Export-ready kits for teams, printers, and partners.' },
            ]} />
          </Section>

          <Process />
          <Testimonials />

          <Section id="contact">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 max-w-xl">
              <h3 className="text-2xl font-bold">Clarity call</h3>
              <p className="mt-2 text-white/70">Share your context — get a precise brand approach and scope within 48 hours.</p>
              <div className="mt-6 flex gap-3">
                <CTAButton>Request intro</CTAButton>
                <a href="/" className="rounded-full px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors">Back home</a>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  )
}
