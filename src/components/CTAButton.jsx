import { motion } from 'framer-motion'

export default function CTAButton({ children, className = '', onClick, href }) {
  const base = (
    <motion.button
      whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(59,130,246,0.35)', backgroundColor: 'rgb(37,99,235)' }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={`relative overflow-hidden rounded-full px-6 py-3 bg-blue-600 text-white font-semibold tracking-tight transition-colors ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 to-white/0" />
    </motion.button>
  )
  if (href) {
    return (
      <a href={href}>
        {base}
      </a>
    )
  }
  return base
}
