import { MapPin, Phone, Mail, ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react'

interface FooterProps {
  lang: 'en' | 'rw'
}

const content = {
  en: {
    cta: "Let's Build Rwanda's AI Future Together",
    ctaButton: 'Start Learning Today',
    contactTitle: 'Get in Touch',
    address: 'Kigali, Rwanda',
    phone: '+250 788 877 136',
    email: 'info.raita@gmail.com',
    quickLinks: [
      { label: 'Programs', href: '#programs' },
      { label: 'Enroll', href: '#enroll' },
      { label: 'News', href: '#news' },
      { label: 'FAQ', href: '#faq' },
    ],
    programLinks: [
      { label: 'AI for Leaders', href: '#programs' },
      { label: 'AI for Students', href: '#programs' },
      { label: 'Cross-Cutting', href: '#programs' },
      { label: 'Become Instructor', href: '#instructor' },
    ],
    socialTitle: 'Follow Us',
    copyright: ' Rwanda AI Training Academy (RAITA). All rights reserved.',
    tagline: 'Empowering Rwanda Through AI',
  },
  rw: {
    cta: 'Duhamye Tubake Ejo Hazaza h\'AI mu Rwanda',
    ctaButton: 'Tangira Kwiga Uyu Munsi',
    contactTitle: 'Twandikire',
    address: 'Kigali, Rwanda',
    phone: '+250 788 877 136',
    email: 'info.raita@gmail.com',
    quickLinks: [
      { label: 'Imyigishirize', href: '#programs' },
      { label: 'Kwiyandikisha', href: '#enroll' },
      { label: 'Amakuru', href: '#news' },
      { label: 'Ibibazo', href: '#faq' },
    ],
    programLinks: [
      { label: 'AI ku Bayobozi', href: '#programs' },
      { label: 'AI ku Banyeshuri', href: '#programs' },
      { label: 'Imyigishirize Y\'Abantu Bose', href: '#programs' },
      { label: 'Ubahwe Umwigisha', href: '#instructor' },
    ],
    socialTitle: 'Dukurikire',
    copyright: ' Ikigo cy\'Imyigishirize ya AI mu Rwanda (RAITA). Uburenganzira bwose burinda.',
    tagline: 'Gukangurira U Rwanda Binyuze mu AI',
  },
}

export default function Footer({ lang }: FooterProps) {
  const c = content[lang]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="relative w-full bg-raita-dark bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/images/footerbg.png)',
    }}>
      {/* Overlay for 40% opacity */}
      <div className="absolute inset-0 bg-raita-dark/60"></div>
      {/* Content wrapper */}
      <div className="relative z-10">
      {/* CTA Banner */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl lg:text-6xl xl:text-7xl text-white mb-8 leading-tight">
            {c.cta}
          </h2>
          <button
            onClick={() => scrollToSection('#enroll')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-raita-yellow text-raita-blue font-display font-bold text-lg rounded-pill hover:bg-raita-green hover:text-white transition-all duration-300 group"
          >
            <span>{c.ctaButton}</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-raita-yellow rounded-full flex items-center justify-center font-display font-black text-raita-blue text-xl">
                R
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-tight block">
                  RAITA
                </span>
                <span className="font-mono text-[9px] text-raita-green uppercase tracking-widest">
                  {c.tagline}
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Building Rwanda\'s AI workforce through accessible, world-class education for all.'
                : 'Kubaka abakozi ba AI b\'u Rwanda binyuze mu myigishirize y\'isi yose.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-6">
              {lang === 'en' ? 'Quick Links' : 'Aho Kugana Vuba'}
            </h4>
            <ul className="space-y-3">
              {c.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-raita-yellow text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-6">
              {lang === 'en' ? 'Programs' : 'Imyigishirize'}
            </h4>
            <ul className="space-y-3">
              {c.programLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-raita-yellow text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-6">
              {c.contactTitle}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-raita-green flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{c.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-raita-green flex-shrink-0" />
                <span className="text-white/80 text-sm">{c.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-raita-green flex-shrink-0" />
                <span className="text-white/80 text-sm">{c.email}</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-8">
              <h5 className="font-mono text-[10px] text-white/70 uppercase tracking-widest mb-4">
                {c.socialTitle}
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/Rwanda AI training academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/80 hover:text-raita-yellow hover:border-raita-yellow transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/company/Rwanda AI training academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/80 hover:text-raita-yellow hover:border-raita-yellow transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/Rwanda AI training academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/80 hover:text-raita-yellow hover:border-raita-yellow transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs font-mono">
            &copy; {new Date().getFullYear()}{c.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/60 text-xs font-mono hover:text-white/80 cursor-pointer transition-colors">
              {lang === 'en' ? 'Privacy Policy' : 'Politiki y\'Ibanga'}
            </span>
            <span className="text-white/60 text-xs font-mono hover:text-white/80 cursor-pointer transition-colors">
              {lang === 'en' ? 'Terms of Service' : 'Amategeko yo gukoresha'}
            </span>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="w-full text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-white/70 text-xs font-mono">
            Developed by Elyse NIYIMENYA
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
}
