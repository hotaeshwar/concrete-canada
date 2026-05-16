import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AjaxConcreteDelivery from './components/AjaxConcreteDelivery'
import WhitbyConcreteDelivery from './components/WhitbyConcreteDelivery'
import PickeringConcreteDelivery from './components/PickeringConcreteDelivery'
import SEO, { KEYWORDS } from './components/Seo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/Aboutus'
import Whychooseus from './components/Whychooseus'
import Services from './components/Services'
import Additionalservices from './components/Additionalservices'
import ProjectGallery from './components/Projectgallery'
import ContactSection from './components/Contactsection'
import Footer from './components/Footer'

const STATUSES = [
  [0,  'Initializing systems…'],
  [15, 'Loading mix designs…'],
  [30, 'Calibrating components…'],
  [50, 'Curing foundations…'],
  [70, 'Inspecting structure…'],
  [88, 'Final quality check…'],
  [98, 'Ready to build…'],
  [100,'Complete'],
]

const DURATION = 4000

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

function SplashScreen({ onFinish }) {
  const [count, setCount]     = useState(0)
  const [status, setStatus]   = useState('Initializing systems…')
  const [fadeOut, setFadeOut] = useState(false)
  const canvasRef = useRef(null)
  const startRef  = useRef(null)
  const rafRef    = useRef(null)

  useEffect(() => {
    const cvs = canvasRef.current
    const ctx = cvs.getContext('2d')
    let w = cvs.offsetWidth, h = cvs.offsetHeight
    cvs.width = w; cvs.height = h

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.7 - 0.2,
      a: Math.random() * 0.5 + 0.15,
    }))

    let alive = true
    function draw() {
      if (!alive) return
      ctx.clearRect(0, 0, w, h)
      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,160,0,${p.a})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.y < -5)  { p.y = h + 5; p.x = Math.random() * w }
        if (p.x < 0)   p.x = w
        if (p.x > w)   p.x = 0
      })
      requestAnimationFrame(draw)
    }
    draw()
    return () => { alive = false }
  }, [])

  useEffect(() => {
    function tick(now) {
      if (!startRef.current) startRef.current = now
      const t   = Math.min((now - startRef.current) / DURATION, 1)
      const val = Math.round(easeInOut(t) * 100)

      setCount(val)
      for (let i = STATUSES.length - 1; i >= 0; i--) {
        if (val >= STATUSES[i][0]) { setStatus(STATUSES[i][1]); break }
      }

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setFadeOut(true), 400)
        setTimeout(() => onFinish(), 1300)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [onFinish])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#0d0d0d',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      transition: 'opacity 0.9s ease, transform 0.9s ease',
      opacity: fadeOut ? 0 : 1,
      transform: fadeOut ? 'scale(1.04)' : 'scale(1)',
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, marginBottom: 32 }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 210, height: 210, marginTop: -105, marginLeft: -105,
          borderRadius: '50%', border: '3px solid transparent',
          borderTopColor: '#fa9f00', borderRightColor: '#fa9f0055',
          animation: 'spin 1s linear infinite',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 180, height: 180, marginTop: -90, marginLeft: -90,
          borderRadius: '50%', border: '2px solid transparent',
          borderBottomColor: '#fa9f00', borderLeftColor: '#fa9f0033',
          animation: 'spinReverse 1.5s linear infinite',
        }} />
        <img
          src="/media/logo.png"
          alt="Wilches Ready Mix Concrete"
          style={{
            width: 160, height: 160, objectFit: 'contain',
            borderRadius: '50%', display: 'block',
            position: 'relative', zIndex: 2,
          }}
        />
      </div>

      <p style={{
        color: '#fff', fontSize: 18, fontWeight: 700,
        letterSpacing: '0.15em', textTransform: 'uppercase',
        marginBottom: 6, position: 'relative', zIndex: 1,
      }}>
        Wilches Ready Mix
      </p>

      <p style={{
        color: '#fa9f00', fontSize: 13, letterSpacing: '0.08em',
        marginBottom: 32, position: 'relative', zIndex: 1, minHeight: 20,
      }}>
        {status}
      </p>

      <div style={{
        width: 280, height: 4, background: '#2a2a2a',
        borderRadius: 999, overflow: 'hidden',
        position: 'relative', zIndex: 1, marginBottom: 12,
      }}>
        <div style={{
          height: '100%', width: `${count}%`,
          background: 'linear-gradient(90deg, #fa9f00, #ffcc55)',
          borderRadius: 999, transition: 'width 0.1s ease',
          boxShadow: '0 0 8px #fa9f00aa',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
          animation: 'shimmer 1.2s infinite',
        }} />
      </div>

      <p style={{
        color: '#888', fontSize: 12, letterSpacing: '0.1em',
        position: 'relative', zIndex: 1,
      }}>
        {count}%
      </p>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes spinReverse { to { transform: rotate(-360deg); } }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

function AppContent() {
  const [showSplash, setShowSplash] = useState(true)
  const [appVisible, setAppVisible] = useState(false)

  const handleSplashFinish = () => {
    setShowSplash(false)
    setTimeout(() => setAppVisible(true), 50)
  }

  return (
    <>
      {/* ── SEO ── */}
      <SEO
        title="Wilches Ready Mix Concrete Inc | Ready Mix Concrete Toronto"
        description="Wilches Ready Mix Concrete Inc provides high-quality ready mix concrete services in Toronto and the Greater Toronto Area (GTA). Reliable, affordable, and fast delivery for residential and commercial projects."
        canonical="https://wilchesreadymix.com"
        keywords={KEYWORDS.home}
        serviceType="Ready Mix Concrete Supplier"
        serviceDesc="Leading ready mix concrete supplier in Toronto and GTA with fast, reliable delivery for residential and commercial projects."
        breadcrumbs={[
          { name: 'Home', url: 'https://wilchesreadymix.com' },
        ]}
        image="https://wilchesreadymix.com/media/logo.png"
      />

      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <div style={{ opacity: appVisible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div id="home"><Hero /></div>
              <div id="about"><AboutUs /></div>
              <Whychooseus />
              <div id="services"><Services /></div>
              <Additionalservices />
              <div id="gallery"><ProjectGallery /></div>
              <div id="contact"><ContactSection /></div>
            </>
          } />
          {/* Support existing hash links that update path to /about, /services, etc. */}
          <Route path="/about" element={<HomeLayout />} />
          <Route path="/services" element={<HomeLayout />} />
          <Route path="/gallery" element={<HomeLayout />} />
          <Route path="/contact" element={<HomeLayout />} />
          
          <Route path="/ready-mix-concrete-delivery-ajax/" element={<AjaxConcreteDelivery />} />
          <Route path="/ready-mix-concrete-delivery-whitby" element={<WhitbyConcreteDelivery />} />
          <Route path="/ready-mix-concrete-pickering" element={<PickeringConcreteDelivery />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

function HomeLayout() {
  return (
    <>
      <div id="home"><Hero /></div>
      <div id="about"><AboutUs /></div>
      <Whychooseus />
      <div id="services"><Services /></div>
      <Additionalservices />
      <div id="gallery"><ProjectGallery /></div>
      <div id="contact"><ContactSection /></div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App