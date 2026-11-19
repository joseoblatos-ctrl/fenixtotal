import { useState, useEffect, useRef } from 'react';

const STREAM_URL = "https://tubeapi.org/#eyJ2IjoiMWQ2bDBjUkJjMFkiLCJmIjoibXAzIiwiciI6ImRyZWFteS10YWZmeS00ZWI3NDcubmV0bGlmeS5hcHAifQ==";

function FireParticle({ delay, left }: { delay: number; left: number }) {
  return (
    <div
      className="absolute bottom-0 w-2 h-2 rounded-full opacity-0"
      style={{
        left: `${left}%`,
        background: 'radial-gradient(circle, #ff6b00, #ff0000)',
        animation: `fireRise 3s ease-out ${delay}s infinite`,
      }}
    />
  );
}

function PhoenixLogo() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-orange-600 to-red-600 opacity-20 blur-xl animate-pulse" />
      <svg viewBox="0 0 100 100" className="w-12 h-12 relative z-10">
        <defs>
          <linearGradient id="fireGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="50%" stopColor="#ff6b00" />
            <stop offset="100%" stopColor="#ffaa00" />
          </linearGradient>
        </defs>
        <path
          d="M50 10 C30 30, 20 50, 30 70 C35 80, 45 85, 50 90 C55 85, 65 80, 70 70 C80 50, 70 30, 50 10 Z M50 25 C40 40, 35 55, 40 65 C43 72, 47 75, 50 78 C53 75, 57 72, 60 65 C65 55, 60 40, 50 25 Z"
          fill="url(#fireGrad)"
          opacity="0.9"
        />
        <path
          d="M50 5 C45 15, 35 20, 30 35 C28 42, 32 48, 38 50 M50 5 C55 15, 65 20, 70 35 C72 42, 68 48, 62 50"
          fill="none"
          stroke="#ff6b00"
          strokeWidth="2"
          opacity="0.7"
        />
        <path
          d="M35 55 C30 45, 25 35, 20 30 C18 28, 22 32, 25 38 M65 55 C70 45, 75 35, 80 30 C82 28, 78 32, 75 38"
          fill="none"
          stroke="#ffaa00"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-orange-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PhoenixLogo />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black tracking-wider bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              FENIXTOTAL
            </h1>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-orange-300/70 uppercase -mt-1">
              COMYOU
            </span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">Inicio</a>
          <a href="#streaming" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">Streaming</a>
          <a href="#features" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">Características</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-green-400">EN VIVO</span>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,0,0.1)_0%,_transparent_70%)]" />
      
      {/* Fire particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <FireParticle key={i} delay={i * 0.3} left={Math.random() * 100} />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-3xl opacity-30 animate-pulse" />
            <PhoenixLogo />
            <div className="absolute -inset-4 border border-orange-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          </div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent leading-tight">
          FENIXTOTAL
        </h2>
        <p className="text-lg md:text-2xl text-orange-200/80 tracking-[0.2em] uppercase mb-2">
          COMYOU
        </p>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
          Tu plataforma de streaming definitiva. Contenido premium sin límites, 
          calidad superior y experiencia inmersiva.
        </p>
        <a
          href="#streaming"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-105"
        >
          <i className="fas fa-play" />
          VER AHORA
        </a>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

function StreamingSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section id="streaming" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Streaming en Vivo
            </span>
          </h3>
          <p className="text-gray-400">Disfruta del contenido en la mejor calidad</p>
        </div>

        {/* Player Container */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-2xl opacity-30 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
          
          {/* Player frame */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-orange-900/30">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-b border-orange-900/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <PhoenixLogo />
                <span className="text-orange-400/70">FENIXTOTAL COMYOU Player</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsLoaded(true)}
                  className="px-3 py-1 text-xs bg-orange-600/20 text-orange-400 rounded hover:bg-orange-600/40 transition-colors"
                >
                  <i className="fas fa-play mr-1" /> Cargar
                </button>
              </div>
            </div>

            {/* Iframe area */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {!isLoaded ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-orange-600 rounded-full blur-xl opacity-30 animate-pulse" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => setIsLoaded(true)}
                    >
                      <i className="fas fa-play text-white text-2xl ml-1" />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Click para reproducir</p>
                  <p className="text-gray-600 text-xs mt-1">FENIXTOTAL COMYOU</p>
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  src={STREAM_URL}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="autoplay; fullscreen; encrypted-media"
                  frameBorder="0"
                  title="FENIXTOTAL COMYOU Streaming"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: 'fas fa-bolt',
      title: 'Ultra Rápido',
      description: 'Carga instantánea sin buffering. Tecnología de última generación.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: 'fas fa-shield-alt',
      title: '100% Seguro',
      description: 'Conexión encriptada y protegida. Tu privacidad es prioridad.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'fas fa-gem',
      title: 'Calidad Premium',
      description: 'Resolución HD y audio de alta fidelidad en todo el contenido.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'fas fa-infinity',
      title: 'Sin Límites',
      description: 'Acceso ilimitado a todo el catálogo. Sin restricciones.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Multi-Dispositivo',
      description: 'Compatible con todos tus dispositivos. Donde quieras, cuando quieras.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: 'fas fa-headset',
      title: 'Soporte 24/7',
      description: 'Asistencia técnica disponible las 24 horas del día.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="features" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              ¿Por qué FENIXTOTAL?
            </span>
          </h3>
          <p className="text-gray-400">La experiencia definitiva en streaming</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-orange-800/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`${feature.icon} text-white text-lg`} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '10M+', label: 'Usuarios Activos' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4K', label: 'Calidad Máxima' },
    { value: '24/7', label: 'Soporte' },
  ];

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 via-red-900/30 to-orange-900/30" />
          <div className="absolute inset-0 border border-orange-800/20 rounded-2xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <PhoenixLogo />
            <div>
              <h4 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                FENIXTOTAL COMYOU
              </h4>
              <p className="text-xs text-gray-500">Streaming Premium © 2026</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-colors">
              <i className="fab fa-telegram text-sm" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-colors">
              <i className="fab fa-instagram text-sm" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-colors">
              <i className="fab fa-twitter text-sm" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-colors">
              <i className="fab fa-youtube text-sm" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800/30 text-center">
          <p className="text-xs text-gray-600">
            FENIXTOTAL COMYOU — Todos los derechos reservados. Plataforma de streaming de nueva generación.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <StreamingSection />
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
