import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Play, BookOpen, Users, Award } from 'lucide-react'
import ParticleCanvas from '../components/ParticleCanvas'

interface HeroSectionProps {
  lang: 'en' | 'rw'
}

const content = {
  en: {
    label: 'RWANDA AI TRAINING ACADEMY',
    headline: 'Building the AI Workforce of Tomorrow',
    body: 'Empowering Rwandans — from students to public servants — with the skills to train, annotate, and lead in the age of Artificial Intelligence.',
    ctaPrimary: 'Enroll Now',
    ctaSecondary: 'Watch Our Story',
    stats: [
      { icon: BookOpen, value: '15+', label: 'Training Programs' },
      { icon: Users, value: '2,500+', label: 'Students Trained' },
      { icon: Award, value: '98%', label: 'Satisfaction Rate' },
    ],
  },
  rw: {
    label: 'IKIGO CY\'IMYIGISHIRIZE YA AI MU RWANDA',
    headline: 'Kubaka Abakozi ba AI bo Ejo Hazaza',
    body: 'Gukangurira Abanyarwanda — abanyeshuri kugeza ku bayobozi — ubushobozi bwo kwigisha, gushyira akamaro, no kuyobora mu gihe cy\'Ubwenge Bw\'Ikoranabuhanga.',
    ctaPrimary: 'Iyandikishe Nonaha',
    ctaSecondary: 'Reba Inkuru Yacu',
    stats: [
      { icon: BookOpen, value: '15+', label: 'Imyigishirize' },
      { icon: Users, value: '2,500+', label: 'Abanyeshuri' },
      { icon: Award, value: '98%', label: 'Ingaruka Nziza' },
    ],
  },
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const c = content[lang]

  const scrollToEnroll = () => {
    const el = document.querySelector('#enroll')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-raita-blue"
    >
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-raita-blue via-raita-blue/90 to-raita-blue/70 z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12 xl:px-20 py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              {/* Label */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 mb-8">
                <div className="w-2 h-2 bg-raita-green rounded-full animate-pulse" />
                <span className="font-mono text-[11px] text-raita-green uppercase tracking-[0.2em]">
                  {c.label}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-6">
                {c.headline.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === 2 || i === 3 ? (
                      <span className="text-raita-yellow">{word}</span>
                    ) : (
                      word
                    )}{' '}
                  </span>
                ))}
              </h1>

              {/* Body */}
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
                {c.body}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-16">
                <button
                  onClick={scrollToEnroll}
                  className="group flex items-center gap-3 px-8 py-4 bg-raita-yellow text-raita-blue font-display font-bold text-sm rounded-pill hover:bg-white transition-all duration-300"
                >
                  <span>{c.ctaPrimary}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-display font-bold text-sm rounded-pill hover:border-raita-yellow hover:text-raita-yellow transition-all duration-300">
                  <Play className="w-4 h-4" />
                  <span>{c.ctaSecondary}</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 lg:gap-10">
                {c.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-700 delay-${300 + i * 200} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${300 + i * 200}ms` }}
                  >
                    <stat.icon className="w-5 h-5 text-raita-green mb-2" />
                    <div className="font-display font-black text-2xl lg:text-3xl text-white">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero Image */}
            <div
              className={`hidden lg:block transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-raita-yellow/30" />
                <div className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-raita-green/30" />

                {/* Image container */}
                <div className="relative overflow-hidden">
                  <img
                    src="/images/hero-bg.jpg"
                    alt="RAITA Training"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-raita-blue/60 to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 bg-raita-yellow px-4 py-2">
                    <span className="font-display font-bold text-raita-blue text-sm">
                      #EmpoweringRwanda
                    </span>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="absolute -right-4 top-1/2 w-1 h-32 bg-raita-green -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F4F4F9"
          />
        </svg>
      </div>
    </section>
  )
}
