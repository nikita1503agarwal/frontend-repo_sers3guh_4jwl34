import Spline from '@splinetool/react-spline'
import Navbar from '../components/Navbar'
import CTAButton from '../components/CTAButton'
import { Section, ServiceBreakdown, Testimonials, Process } from '../components/Sections'
import { motion } from 'framer-motion'

export default function WaveLab() {
  return (
    <div className="relative min-h-screen bg-[#040815] text-white">
      <div className="fixed inset-0 z-0">
        <Spline scene="https://prod.spline.design/KYEnZ4iLfVLoPzmi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <section className="min-h-[90vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                  WaveLab — Websites & Commerce
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 text-lg sm:text-xl text-white/85">
                  Custom Webflow and Shopify experiences engineered to sell and feel effortless.
                </motion.p>
                <div className="mt-8 flex gap-4">
                  <CTAButton href="#contact">Start a store</CTAButton>
                  <a href="#cases" className="rounded-full px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors">See case studies</a>
                </div>
              </div>
            </div>
          </section>

          <Section>
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold">Why WaveLab</h2>
              <p className="mt-4 text-white/80">Speed and craft in one motion. One expert handles UX, 3D, interactions, and build. No handoffs, no friction. Swiss-grade reliability.</p>
            </div>
          </Section>

          <Section>
            <ServiceBreakdown items={[
              { title: 'Webflow sites', text: 'Cinematic, fast, maintainable. CMS-driven content and delightful motion.' },
              { title: 'Shopify storefronts', text: 'Conversion-first layouts, robust product architecture, buttery checkout.' },
              { title: '3D & motion', text: 'Spline and GSAP for micro-interactions that guide, not distract.' },
            ]} />
          </Section>

          <Process />
          <Testimonials />

          <Section id="contact">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 max-w-xl">
              <h3 className="text-2xl font-bold">Get a scope in 48 hours</h3>
              <p className="mt-2 text-white/70">Share goals and constraints — you’ll get a lean plan, timeline, and investment range.</p>
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
