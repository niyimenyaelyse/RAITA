import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Award, BookOpen, Target, Globe } from 'lucide-react'

interface ImpactSectionProps {
  lang: 'en' | 'rw'
}

const content = {
  en: {
    label: 'Our Impact',
    headline: 'Transforming Rwanda Through AI Education',
    body: 'Our students don\'t just learn AI; they build the foundational training data that powers global models and shape the future of their communities.',
    stats: [
      { icon: Users, value: '2,500+', label: 'Students Trained', suffix: '' },
      { icon: BookOpen, value: '15+', label: 'Active Programs', suffix: '' },
      { icon: Target, value: '50+', label: 'AI Models Trained', suffix: '' },
      { icon: Award, value: '500K+', label: 'Datasets Processed', suffix: '' },
      { icon: Globe, value: '30', label: 'Districts Reached', suffix: '' },
      { icon: TrendingUp, value: '95%', label: 'Employment Rate', suffix: '' },
    ],
  },
  rw: {
    label: 'Ingaruka Yacu',
    headline: 'Guhindura U Rwanda Binyuze mu Myigishirize ya AI',
    body: 'Abanyeshuri bacwa badiga AI gusa; bubaka ingingo z\'amakuru agenga ibisabwa ku isi yose no gukora imigambi y\'abo mu muryango.',
    stats: [
      { icon: Users, value: '2,500+', label: 'Abanyeshuri Bigishijwe', suffix: '' },
      { icon: BookOpen, value: '15+', label: 'Imyigishirize Ikomeje', suffix: '' },
      { icon: Target, value: '50+', label: 'Imodeli za AI Zigishijwe', suffix: '' },
      { icon: Award, value: '500K+', label: 'Amakuru Y\'Amakuru', suffix: '' },
      { icon: Globe, value: '30', label: 'Akarere Kakigerwaho', suffix: '' },
      { icon: TrendingUp, value: '95%', label: 'Igipimo cy\'Imirimo', suffix: '' },
    ],
  },
}

export default function ImpactSection({ lang }: ImpactSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const c = content[lang]

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-raita-blue"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/impact-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-raita-blue/80 via-raita-blue/70 to-raita-blue/90" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-raita-green/20 rotate-45 animate-float" />
      <div className="absolute bottom-32 right-20 w-16 h-16 border border-raita-yellow/20 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-raita-green/40" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-raita-yellow/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label text-raita-green mb-4 block">
            {c.label}
          </span>
          <h2 className="font-display font-black text-4xl lg:text-5xl xl:text-6xl text-white mb-6 max-w-4xl mx-auto">
            {c.headline}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {c.body}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {c.stats.map((stat, i) => (
            <div
              key={i}
              className={`group p-6 lg:p-8 border border-white/10 hover:border-raita-green/50 hover:bg-white/5 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <stat.icon className="w-6 h-6 text-raita-green mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-display font-black text-3xl lg:text-4xl text-white mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
