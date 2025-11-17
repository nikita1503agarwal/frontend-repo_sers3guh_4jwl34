import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CTAButton from './CTAButton'

export function Section({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section ref={ref} className={`relative py-20 sm:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    {
      quote: "A seamless partner. One expert, zero handoffs, exceptional results.",
      author: 'Head of Marketing, Swiss Fintech',
    },
    {
      quote: 'The most fluid launch we ever had. Design that actually sells.',
      author: 'Founder, D2C Wellness',
    },
    {
      quote: 'From brand to store to signage — one person, one vision.',
      author: 'COO, Hospitality Group',
    },
  ]
  return (
    <Section className="text-white/90">
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10">Trusted by leaders who value focus</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur"
          >
            <p className="text-lg">“{t.quote}”</p>
            <p className="mt-4 text-sm text-white/60">{t.author}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Process() {
  const steps = [
    { title: '01 — Discover', text: 'A focused conversation with the founder. Goals, constraints, outcomes.' },
    { title: '02 — Design', text: 'Cinematic visuals, systems thinking, brand and behavior in sync.' },
    { title: '03 — Build', text: 'Web, commerce, signage. One expert orchestrating every detail.' },
    { title: '04 — Launch', text: 'Precise, stress-free rollouts with measurable impact.' },
  ]
  return (
    <Section className="text-white/90">
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10">A precise four-beat process</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-white/5 border border-white/10 p-6 h-full">
            <p className="text-sm uppercase tracking-widest text-white/50">{s.title}</p>
            <p className="mt-3 text-lg font-medium">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function CaseStudies() {
  const cases = [
    { title: 'Horizon Watches', tag: 'E‑commerce', desc: 'Swiss-made story meets a frictionless Shopify experience.', color: 'from-blue-500/40 to-cyan-400/30' },
    { title: 'Aria Health', tag: 'Brand', desc: 'Quiet confidence with a surgical visual system.', color: 'from-purple-500/40 to-pink-400/30' },
    { title: 'Metro Bistro', tag: 'Signage', desc: 'Dynamic LED menus that adapt to mood and hour.', color: 'from-emerald-500/40 to-teal-400/30' },
  ]
  return (
    <Section className="text-white/90">
      <div className="flex items-end justify-between mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected work</h3>
        <CTAButton href="#contact" className="hidden sm:inline-flex">Schedule a 20‑min call</CTAButton>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${c.color}`}>
            <p className="text-xs uppercase tracking-wider text-white/70">{c.tag}</p>
            <h4 className="mt-2 text-xl font-semibold">{c.title}</h4>
            <p className="mt-2 text-white/80">{c.desc}</p>
            <div className="mt-6">
              <CTAButton className="bg-white/10 hover:bg-white/20">View details</CTAButton>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function ServiceBreakdown({ items }) {
  return (
    <Section className="text-white/90">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="mt-2 text-white/70">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
