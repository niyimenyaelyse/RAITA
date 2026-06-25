import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'

interface NavigationProps {
  lang: 'en' | 'rw'
  onLangChange: (lang: 'en' | 'rw') => void
}

const navLinks = [
  { label: { en: 'Programs', rw: 'Imyigishirize' }, href: '#programs' },
  { label: { en: 'Impact', rw: 'Ingaruka' }, href: '#impact' },
  { label: { en: 'Stories', rw: 'Inkuru' }, href: '#testimonials' },
  { label: { en: 'Enroll', rw: 'Kwiyandikisha' }, href: '#enroll' },
  { label: { en: 'News', rw: 'Amakuru' }, href: '#news' },
  { label: { en: 'FAQ', rw: 'Ibibazo' }, href: '#faq' },
  { label: { en: 'Contact', rw: 'Twandikire' }, href: '#contact' },
]

export default function Navigation({ lang, onLangChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-raita-blue/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-raita-yellow rounded-full flex items-center justify-center font-display font-black text-raita-blue text-lg">
              R
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-white text-sm tracking-tight">
                RAITA
              </span>
              <span className="block font-mono text-[10px] text-raita-green uppercase tracking-widest">
                {lang === 'en' ? 'Rwanda AI Training Academy' : 'Ikigo cy\'Imyigishirize ya AI'}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-raita-yellow transition-colors duration-300"
              >
                {link.label[lang]}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => onLangChange(lang === 'en' ? 'rw' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-pill border border-white/20 text-white/80 hover:border-raita-yellow hover:text-raita-yellow transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="font-mono text-xs uppercase">
                {lang === 'en' ? 'EN' : 'RW'}
              </span>
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#enroll')}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-raita-yellow text-raita-blue font-display font-bold text-sm rounded-pill hover:bg-white transition-colors duration-300"
            >
              {lang === 'en' ? 'Get Started' : 'Tangira'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-raita-blue/98 backdrop-blur-lg transition-all duration-500 overflow-hidden ${
          isMobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left font-mono text-sm uppercase tracking-widest text-white/70 hover:text-raita-yellow transition-colors py-2"
            >
              {link.label[lang]}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#enroll')}
            className="w-full mt-4 px-6 py-3 bg-raita-yellow text-raita-blue font-display font-bold text-sm rounded-pill"
          >
            {lang === 'en' ? 'Get Started' : 'Tangira'}
          </button>
        </div>
      </div>
    </nav>
  )
}
