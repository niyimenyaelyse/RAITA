import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Users, GraduationCap, Layers, Brain, MessageSquare, Shield, Lightbulb, Code, Sparkles, Target, AlertTriangle, Hand, TrendingUp, BookOpen, Monitor } from 'lucide-react'

interface ProgramsSectionProps {
  lang: 'en' | 'rw'
}

const programData = {
  en: [
    {
      id: 'leaders',
      icon: Users,
      title: 'For Local Leaders & Community',
      subtitle: 'Empowering governance with AI literacy',
      color: 'bg-raita-blue',
      textColor: 'text-white',
      programs: [
        { icon: Lightbulb, name: 'AI Awareness Training', desc: 'Basic understanding of what AI is, how it affects daily life, jobs, and society. No tech background needed.' },
        { icon: Brain, name: 'AI for Decision-Making', desc: 'How leaders can use AI tools to make better decisions in governance, business, or community planning.' },
        { icon: Shield, name: 'AI Ethics & Policy Training', desc: 'Understanding bias, fairness, privacy, and how to make responsible decisions around AI adoption.' },
        { icon: TrendingUp, name: 'AI for Economic Opportunity', desc: 'How AI creates jobs, changes existing ones, and how communities can position themselves to benefit.' },
        { icon: Monitor, name: 'AI Tools Workshop', desc: 'Hands-on sessions with practical tools like ChatGPT, Google Gemini, or sector-specific AI tools relevant to their work.' },
      ],
    },
    {
      id: 'students',
      icon: GraduationCap,
      title: 'For High School Students',
      subtitle: 'Building the next generation of AI talent',
      color: 'bg-raita-green',
      textColor: 'text-raita-blue',
      programs: [
        { icon: BookOpen, name: 'AI Literacy Program', desc: 'What AI is, how it works in simple terms, and how it is already in their phones, social media, and apps.' },
        { icon: Target, name: 'AI & Careers', desc: 'How AI is changing future jobs and what skills students need to stay relevant.' },
        { icon: Hand, name: 'Hands-on AI Projects', desc: 'Building simple AI projects using platforms like Scratch, Teachable Machine, or ML4Kids — no coding required.' },
        { icon: Shield, name: 'AI Ethics & Critical Thinking', desc: 'Discussing deepfakes, misinformation, privacy, and responsible use of AI.' },
        { icon: Code, name: 'Coding & AI Basics', desc: 'Introduction to Python and simple machine learning concepts for students interested in tech.' },
      ],
    },
    {
      id: 'crosscutting',
      icon: Layers,
      title: 'Cross-Cutting Programs',
      subtitle: 'For everyone interested in AI',
      color: 'bg-raita-yellow',
      textColor: 'text-raita-blue',
      programs: [
        { icon: Sparkles, name: 'AI Storytelling', desc: 'Using AI tools for creative writing, art, and content creation.' },
        { icon: MessageSquare, name: 'AI & Local Problems', desc: 'Applying AI thinking to solve real community challenges.' },
        { icon: AlertTriangle, name: 'AI Safety Awareness', desc: 'Scams, misinformation, and how to protect yourself in the digital age.' },
      ],
    },
  ],
  rw: [
    {
      id: 'leaders',
      icon: Users,
      title: 'Ku Bayobozi n\'Abaturage',
      subtitle: 'Gukangurira ubuyobozi ubumenyi bwa AI',
      color: 'bg-raita-blue',
      textColor: 'text-white',
      programs: [
        { icon: Lightbulb, name: 'Imyigishirize y\'Imerera ya AI', desc: 'Gusobanukirwa neza niba AI ari igiki, ikigera ku buzima bwa buri munsi, imirimo, no ku muryango. Nta mategeko ya tekiniki akenewe.' },
        { icon: Brain, name: 'AI mu Gufata Ibicyemezo', desc: 'Uko abayobozi bashobora gukoresha ibikoresho bya AI mu gufata ibyemezo byiza mu buyobozi, ubucuruzi, cyangwa gushyira imigambi y\'abaturage.' },
        { icon: Shield, name: 'Imyigishirize ku Nkiko za AI', desc: 'Gusobanukirwa na discrimination, uburinganire, ubuzima bwite, no gufata ibyemezo by\'ubuyobozi bijyanye na AI.' },
        { icon: TrendingUp, name: 'AI mu Mbubakiro', desc: 'Uko AI irema imirimo, ihindura iyariho, n\'uko abaturage bashobora kwitegura kubona inyungu.' },
        { icon: Monitor, name: 'Amahugurwa ku Bikoresho bya AI', desc: 'Amasese y\'ikiganza hamwe n\'ibikoresho bya ChatGPT, Google Gemini, cyangwa ibindi bikoresho bihamye.' },
      ],
    },
    {
      id: 'students',
      icon: GraduationCap,
      title: 'Ku Banyeshuri b\'Ishuri Rikuru',
      subtitle: 'Kubaka abakozi ba AI bo mu gihe kizaza',
      color: 'bg-raita-green',
      textColor: 'text-raita-blue',
      programs: [
        { icon: BookOpen, name: 'Igishushanyombonera cya AI', desc: 'AI ari igiki, ukora gute mu magambo yoroheye, n\'uburyo iba mu materefone yabo, imbuga nkuru, n\'apulikisiyo.' },
        { icon: Target, name: 'AI n\'Imirimo', desc: 'Uko AI ihindura imirimo y\'ejo hazaza n\'ubumenyi bikenewe ngo umuntu agume azi neza.' },
        { icon: Hand, name: 'Imishinga ya AI y\'Ikiganza', desc: 'Kubaka imishinga yoroheye ya AI ukoresheje Scratch, Teachable Machine, cyangwa ML4Kids.' },
        { icon: Shield, name: 'Inkiko za AI n\'Ibihabanye', desc: 'Kuganira ku deepfakes, amakuru atari yo, ubuzima bwite, no gukoresha AI mu buryo bw\'ubuyobozi.' },
        { icon: Code, name: 'Ukubona na AI', desc: 'Kumenya Python n\'ibitekerezo bya machine learning byoroheye ku banyeshuri bashishikajwe na tekiniki.' },
      ],
    },
    {
      id: 'crosscutting',
      icon: Layers,
      title: 'Imyigishirize Y\'Abantu Bose',
      subtitle: 'Kuri buri wese wiyandikishe mu AI',
      color: 'bg-raita-yellow',
      textColor: 'text-raita-blue',
      programs: [
        { icon: Sparkles, name: 'Inkuru zikoresheje AI', desc: 'Gukoresha ibikoresho bya AI mu kwandika, ubugeni, no gukora ibirimo.' },
        { icon: MessageSquare, name: 'AI n\'Ibibazo by\'Ahantu', desc: 'Gukoresha ibitekerezo bya AI mu gukemura ibibazo by\'abaturage.' },
        { icon: AlertTriangle, name: 'Kumenya Umutekano wa AI', desc: 'Amashwa, amakuru atari yo, n\'uko kwirinda mu gihe cya digitali.' },
      ],
    },
  ],
}

export default function ProgramsSection({ lang }: ProgramsSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>('leaders')
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

  const categories = programData[lang]

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-raita-light"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label text-raita-green mb-4 block">
            {lang === 'en' ? 'Our Programs' : 'Imyigishirize Yacu'}
          </span>
          <h2 className="font-display font-black text-4xl lg:text-5xl xl:text-6xl text-raita-blue mb-4">
            {lang === 'en' ? 'Training for Every' : 'Imyigishirize ku'}
            <span className="text-raita-green"> {lang === 'en' ? 'Rwandan' : 'Buri Munyarwanda'}</span>
          </h2>
          <p className="text-raita-blue/60 text-lg max-w-2xl">
            {lang === 'en'
              ? 'From high school students to public servants, our programs meet learners where they are and take them where AI is going.'
              : 'Kuva ku banyeshuri b\'ishuri rikuru kugeza ku bayobozi, imyigishirize yacu igera ku bantu aho bari nkabo ibakuye aho AI igana.'}
          </p>
        </div>

        {/* Program Categories */}
        <div className="space-y-4">
          {categories.map((category, catIndex) => (
            <div
              key={category.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedId(expandedId === category.id ? null : category.id)}
                className={`w-full ${category.color} ${category.textColor} p-6 lg:p-8 flex items-center justify-between group transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center ${
                    category.id === 'leaders' ? 'bg-raita-green/20' :
                    category.id === 'students' ? 'bg-raita-blue/20' :
                    'bg-raita-blue/20'
                  }`}>
                    <category.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-bold text-lg lg:text-2xl">{category.title}</h3>
                    <p className={`text-sm mt-1 ${
                      category.id === 'leaders' ? 'text-white/60' :
                      category.id === 'students' ? 'text-raita-blue/60' :
                      'text-raita-blue/60'
                    }`}>
                      {category.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-500 ${
                    expandedId === category.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Programs */}
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  expandedId === category.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:p-6 bg-white border border-gray-100">
                  {category.programs.map((program, progIndex) => (
                    <div
                      key={progIndex}
                      className="group p-6 border border-gray-100 hover:border-raita-green/50 hover:shadow-md transition-all duration-300 bg-white"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-raita-light flex items-center justify-center flex-shrink-0 group-hover:bg-raita-green/10 transition-colors">
                          <program.icon className="w-5 h-5 text-raita-green" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-raita-blue text-sm mb-2 group-hover:text-raita-green transition-colors">
                            {program.name}
                          </h4>
                          <p className="text-raita-blue/50 text-xs leading-relaxed">
                            {program.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
