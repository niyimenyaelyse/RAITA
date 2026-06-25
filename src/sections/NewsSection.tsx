import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

interface NewsSectionProps {
  lang: 'en' | 'rw'
}

const newsData = {
  en: [
    {
      title: 'RAITA Launches New AI Literacy Curriculum for High Schools Nationwide',
      excerpt: 'A comprehensive program designed to bring artificial intelligence education to every secondary school in Rwanda, starting with 50 pilot schools across all 30 districts.',
      date: 'June 15, 2025',
      readTime: '5 min read',
      category: 'Education',
      image: '/images/program-literacy.jpg',
    },
    {
      title: 'Partnership with Rwanda Utilities Regulatory Authority Announced',
      excerpt: 'RAITA will provide specialized AI training to government officials, helping them understand and regulate emerging AI technologies in the public sector.',
      date: 'June 10, 2025',
      readTime: '3 min read',
      category: 'Partnership',
      image: '/images/program-public.jpg',
    },
    {
      title: 'Student Teams Win National AI Innovation Challenge',
      excerpt: 'Three teams from RAITA training programs took top honors at the annual National AI Innovation Challenge, presenting solutions for healthcare and agriculture.',
      date: 'June 5, 2025',
      readTime: '4 min read',
      category: 'Achievement',
      image: '/images/program-training.jpg',
    },
  ],
  rw: [
    {
      title: 'RAITA Yatangije Igishushanyombonera Kisha cya AI ku Mashuri Yose',
      excerpt: 'Igikorwa cyuzuye cyashyiriweho kuzanira imyigishirize ya AI buri shuri rikuru mu Rwanda, kitangirira ku mashuri 50 yo kwigira mu turere 30 twose.',
      date: 'Kamena 15, 2025',
      readTime: 'Gusoma 5',
      category: 'Uburezi',
      image: '/images/program-literacy.jpg',
    },
    {
      title: 'Amasezerano na RURA Yashyizweho',
      excerpt: 'RAITA izatanga amahugurwa ya AI ku bayobozi ba Leta, babafasha gusobanukirwa no kugenzura ibikoresho bisha bya AI mu ruganda rw\'abantu.',
      date: 'Kamena 10, 2025',
      readTime: 'Gusoma 3',
      category: 'Amasezerano',
      image: '/images/program-public.jpg',
    },
    {
      title: 'Itsinda ry\'Abanyeshuri Ritsinze Irushanwa rya AI',
      excerpt: 'Itsinda 3 rivuye mu myigishirize ya RAITA ryegukanye igihembo ku Irushanwa rya Buri Mwaka rya AI, riganisha ibisubizo ku buzima n\'ubuhinzi.',
      date: 'Kamena 5, 2025',
      readTime: 'Gusoma 4',
      category: 'Intsinzi',
      image: '/images/program-training.jpg',
    },
  ],
}

export default function NewsSection({ lang }: NewsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const articles = newsData[lang]

  return (
    <section
      id="news"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-raita-light"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="section-label text-raita-green mb-4 block">
              {lang === 'en' ? 'Latest News' : 'Amakuru Agezweho'}
            </span>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-raita-blue">
              {lang === 'en' ? 'Updates &' : 'Amakuru & '}
              <span className="text-raita-green">{lang === 'en' ? 'Stories' : 'Inkuru'}</span>
            </h2>
          </div>
          <button className="mt-4 lg:mt-0 flex items-center gap-2 font-mono text-xs text-raita-blue hover:text-raita-green transition-colors uppercase tracking-widest">
            {lang === 'en' ? 'View All News' : 'Reba Amakuru Yose'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className={`group bg-white border border-gray-100 hover:border-raita-green/30 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-raita-yellow px-3 py-1">
                  <span className="font-mono text-[10px] text-raita-blue uppercase tracking-wider font-bold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 font-mono text-[10px] text-raita-blue/40 uppercase">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-raita-blue/40 uppercase">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-raita-blue mb-3 group-hover:text-raita-green transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-raita-blue/50 text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-2 font-mono text-[10px] text-raita-green uppercase tracking-widest group-hover:gap-3 transition-all">
                  {lang === 'en' ? 'Read More' : 'Soma Birebire'}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
