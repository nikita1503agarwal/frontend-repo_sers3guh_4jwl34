import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Home from './pages/Home'
import WaveLab from './pages/WaveLab'
import Branding from './pages/Branding'
import Signage from './pages/Signage'
import Spline from '@splinetool/react-spline'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="relative">
      <ScrollToTop />
      {/* Global ambient Spline per system note */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-60">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wavelab" element={<WaveLab />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/signage" element={<Signage />} />
        <Route path="*" element={
          <div className="min-h-screen grid place-items-center bg-black text-white">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-extrabold">404</h1>
              <p>Page not found</p>
              <Link className="underline" to="/">Go home</Link>
            </div>
          </div>
        } />
      </Routes>
    </div>
  )
}
