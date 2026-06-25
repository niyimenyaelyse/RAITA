import { useEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'

interface TestimonialsSectionProps {
  lang: 'en' | 'rw'
}

const testimonials = {
  en: [
    {
      name: 'Marie Claire Uwase',
      role: 'District Officer, Nyarugenge',
      image: '/images/testimonial-1.jpg',
      quote: 'RAITA changed how I approach my work. The AI for Decision-Making course helped me analyze community data faster and make better-informed policies for our district.',
    },
    {
      name: 'Jean Paul Habimana',
      role: 'Headmaster, Gisimba High School',
      image: '/images/testimonial-2.jpg',
      quote: 'Our students who completed the AI Literacy Program are now teaching their peers. RAITA is creating a ripple effect of AI knowledge across our entire school.',
    },
    {
      name: 'David Ndayisaba',
      role: 'Student, Kigali Tech Academy',
      image: '/images/testimonial-3.jpg',
      quote: 'I never thought I could understand AI, but the Hands-on Projects made it so simple. Now I am building my own machine learning models and dreaming of a career in tech.',
    },
    {
      name: 'Grace Mukamana',
      role: 'Community Leader, Musanze',
      image: '/images/testimonial-1.jpg',
      quote: 'The AI Tools Workshop gave me practical skills I use every day. From managing community records to planning events, AI has made me more effective.',
    },
    {
      name: 'Dr. Patrick Ngabo',
      role: 'Public Health Coordinator',
      image: '/images/testimonial-2.jpg',
      quote: 'RAITA training helped our health department implement AI-driven data analysis. We can now predict disease outbreaks and allocate resources more efficiently.',
    },
    {
      name: 'Sophie Umutoni',
      role: 'Student, Excelle High School',
      image: '/images/testimonial-3.jpg',
      quote: 'The Coding & AI Basics course opened my eyes to a world of possibilities. I am now confident that Rwanda can lead Africa in AI innovation.',
    },
  ],
  rw: [
    {
      name: 'Marie Claire Uwase',
      role: 'Umukozi w\'Akarere, Nyarugenge',
      image: '/images/testimonial-1.jpg',
      quote: 'RAITA yahinduye uko ndeba akazi kanjye. Isomo rya AI mu Gufata Ibicyemezo ryanfashije gusobanura amakuru y\'abaturage vuba no gufata amategeko meza ku karere kacu.',
    },
    {
      name: 'Jean Paul Habimana',
      role: 'Umuyobozi w\'Ishuri, Gisimba',
      image: '/images/testimonial-2.jpg',
      quote: 'Abanyeshuri bacu bashoje Igishushanyombonera cya AI ubu bayigisha abandi. RAITA irema umubyutso w\'ubumenyi bwa AI mu ishuri ryacu ryose.',
    },
    {
      name: 'David Ndayisaba',
      role: 'Umwigishwa, Kigali Tech Academy',
      image: '/images/testimonial-3.jpg',
      quote: 'Ntabwo natekerezaga ko nabasha gusobanukirwa na AI, ariko Imishinga y\'Ikiganza yabigenze biroroha. Ubu ndubaka imodeli zanje za ML.',
    },
    {
      name: 'Grace Mukamana',
      role: 'Umuyobozi w\'Abaturage, Musanze',
      image: '/images/testimonial-1.jpg',
      quote: 'Amahugurwa ku Bikoresho bya AI yampaye ubuhanga nabukoresha buri munsi. Kuva mu gucyika inyandiko kugeza no gushyira imigambi, AI yampumurije.',
    },
    {
      name: 'Dr. Patrick Ngabo',
      role: 'Umukozi w\'Ubuzima',
      image: '/images/testimonial-2.jpg',
      quote: 'Amahugurwa ya RAITA yafashije ibiro byacu by\'ubuzima gushyiraho isesengura ry\'amakuru rya AI. Ubu tubasha kubuza indwara n\'gahunda y\'ubutunzi.',
    },
    {
      name: 'Sophie Umutoni',
      role: 'Umwigishwa, Excelle High School',
      image: '/images/testimonial-3.jpg',
      quote: 'Isomo ry\'Ukubona na AI ryansobanuze isi y\'ubushobozi. Ubu nizeye ko Rwanda ishobora kuyobora Afurika mu bishya bya AI.',
    },
  ],
}

export default function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const testimonialsList = testimonials[lang]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Double the testimonials for seamless loop
  const doubled = [...testimonialsList, ...testimonialsList]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-raita-light overflow-hidden"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20 mb-12">
        {/* Section Header */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label text-raita-green mb-4 block">
            {lang === 'en' ? 'Success Stories' : 'Inkuru z\'Intsinzi'}
          </span>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-raita-blue">
            {lang === 'en' ? 'Voices of' : 'Ijwi ry\'Abantu'}{' '}
            <span className="text-raita-green">{lang === 'en' ? 'Change' : 'Impinduka'}</span>
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div
        className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-raita-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-raita-light to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="marquee-track">
            {doubled.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[400px] mx-3 group"
              >
                <div className="bg-raita-yellow p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-raita-blue/20 mb-4" />

                  {/* Quote Text */}
                  <p className="text-raita-blue text-sm leading-relaxed mb-6 line-clamp-4">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-raita-blue/10">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <div className="font-display font-bold text-raita-blue text-sm">
                        {t.name}
                      </div>
                      <div className="font-mono text-[10px] text-raita-blue/50 uppercase tracking-wider">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
