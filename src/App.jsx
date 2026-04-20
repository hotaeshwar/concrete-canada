import { useState, useEffect, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
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

    const pts = Array.from({ length: 42 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
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
      overflow: 'hidden', fontFamily: 'Georgia, serif',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      opacity: fadeOut ? 0 : 1,
      transform: fadeOut ? 'scale(1.04)' : 'scale(1)',
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>
      <style>{`
        @keyframes gridDrift {
          from { background-position: 0 0; }
          to   { background-position: 48px 48px; }
        }
        @keyframes hexSpin  { to { transform: rotate(360deg); } }
        @keyframes hexSpinR { to { transform: rotate(-360deg); } }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanMove {
          0%   { top: 10%; }
          50%  { top: 90%; }
          100% { top: 10%; }
        }
        .spl-fadeup { animation: fadeUp 0.8s ease both; }
      `}</style>

      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,160,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,160,0,0.04) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
        animation: 'gridDrift 20s linear infinite',
      }} />

      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />

      <div style={{
        position: 'absolute', left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg,transparent,rgba(255,160,0,0.15),transparent)',
        animation: 'scanMove 3s ease-in-out infinite', zIndex: 5,
      }} />

      {[
        { top: 20, left: 20,     borderWidth: '1px 0 0 1px' },
        { top: 20, right: 20,    borderWidth: '1px 1px 0 0' },
        { bottom: 20, left: 20,  borderWidth: '0 0 1px 1px' },
        { bottom: 20, right: 20, borderWidth: '0 1px 1px 0' },
      ].map((s, i) => (
        <div key={i} style={{
          position: 'absolute', width: 22, height: 22,
          borderStyle: 'solid', borderColor: 'rgba(255,160,0,0.25)', ...s,
        }} />
      ))}

      <div className="spl-fadeup" style={{
        position: 'relative', zIndex: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 28, animationDelay: '0.2s',
      }}>
        {[160, 130].map((size, i) => (
          <div key={i} style={{
            position: 'absolute', width: size, height: size,
            border: `1px solid rgba(255,160,0,${i === 0 ? 0.09 : 0.18})`,
            clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
            animation: `${i === 0 ? 'hexSpinR' : 'hexSpin'} ${i === 0 ? 12 : 8}s linear infinite`,
          }} />
        ))}

        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <img
            src="/media/logo.png"
            alt="Wilches Ready Mix Concrete"
            onError={e => { e.target.style.display = 'none' }}
            style={{ width: 'clamp(180px,32vw,260px)', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </div>
      </div>

      <div className="spl-fadeup" style={{
        width: 'clamp(120px,30vw,200px)', height: 1, marginBottom: 24,
        background: 'linear-gradient(90deg,transparent,rgba(255,160,0,0.5),transparent)',
        animationDelay: '0.5s',
      }} />

      <div className="spl-fadeup" style={{
        display: 'flex', alignItems: 'baseline', gap: 4,
        marginBottom: 16, animationDelay: '0.6s', position: 'relative', zIndex: 10,
      }}>
        <span style={{
          fontSize: 'clamp(52px,10vw,76px)', fontWeight: 700,
          color: count === 100 ? '#ffa500' : '#fff',
          lineHeight: 1, fontFamily: 'Georgia, serif',
          letterSpacing: '-0.02em', transition: 'color 0.3s',
        }}>
          {count}
        </span>
        <span style={{ fontSize: 'clamp(20px,3vw,26px)', color: 'rgba(255,160,0,0.7)' }}>%</span>
      </div>

      <div className="spl-fadeup" style={{
        fontSize: 'clamp(8px,1.4vw,10px)', letterSpacing: '0.3em',
        color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase',
        marginBottom: 22, minHeight: 14, animationDelay: '0.7s',
        position: 'relative', zIndex: 10,
      }}>
        {status}
      </div>

      <div className="spl-fadeup" style={{
        width: 'clamp(200px,45vw,320px)', height: 2,
        background: 'rgba(255,255,255,0.07)',
        borderRadius: 99, overflow: 'hidden',
        position: 'relative', zIndex: 10,
        animationDelay: '0.8s',
      }}>
        <div style={{
          height: '100%', width: `${count}%`,
          background: 'linear-gradient(90deg,#e07b00,#ffa500,#ffd080)',
          borderRadius: 99, transition: 'width 0.08s linear',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', right: -3, top: '50%',
            transform: 'translateY(-50%)',
            width: 7, height: 7, borderRadius: '50%',
            background: '#ffa500',
            boxShadow: '0 0 8px #ffa500, 0 0 16px rgba(255,165,0,0.6)',
          }} />
        </div>
      </div>
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
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div style={{ opacity: appVisible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Navbar />
        <div id="home"><Hero /></div>
        <div id="about"><AboutUs /></div>
        <Whychooseus />
        <div id="services"><Services /></div>
        <Additionalservices />
        <div id="gallery"><ProjectGallery /></div>
        <div id="contact"><ContactSection /></div>
        <Footer />
      </div>
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