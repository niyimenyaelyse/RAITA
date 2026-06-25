import { useState, useEffect, useRef } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQSectionProps {
  lang: 'en' | 'rw'
}

const faqData = {
  en: [
    {
      question: 'Who can enroll in RAITA programs?',
      answer: 'RAITA programs are open to all Rwandans. We have specialized tracks for high school students, university graduates, working professionals, public servants, and local community leaders. No prior technical background is required for most of our introductory programs.',
    },
    {
      question: 'Are the training programs free?',
      answer: 'Most of our foundational programs are offered free of charge thanks to our partnerships with government agencies and international organizations. Advanced certification programs may have a nominal fee to cover materials and certification costs.',
    },
    {
      question: 'How long do the programs last?',
      answer: 'Program duration varies from 2-day intensive workshops to 12-week comprehensive courses. Short introductory sessions last 3-4 hours, while our professional certification programs run for 3 months with weekly sessions.',
    },
    {
      question: 'Do I need a computer science background?',
      answer: 'Not at all! Our AI Literacy and Awareness programs are designed for complete beginners. We only recommend basic computer skills (using email, browsing the internet). Our Coding & AI Basics program will teach you everything you need from the ground up.',
    },
    {
      question: 'Where are the training sessions held?',
      answer: 'We offer both in-person training at our Kigali center and partner locations across all 30 districts, as well as online virtual sessions. Hybrid options are also available for most programs.',
    },
    {
      question: 'Will I get a certificate after completing a program?',
      answer: 'Yes, all participants who successfully complete a program receive an official RAITA certificate. Our advanced programs also offer industry-recognized certifications in partnership with leading tech organizations.',
    },
    {
      question: 'How can my organization partner with RAITA?',
      answer: 'We welcome partnerships with schools, government agencies, and private organizations. Contact us at info.raita@gmail.com or call +250788877136 to discuss customized training programs for your team.',
    },
    {
      question: 'Can I become an instructor at RAITA?',
      answer: 'Absolutely! We are always looking for qualified instructors. Visit the Instructor Application section on our website or contact us directly with your CV and area of expertise.',
    },
  ],
  rw: [
    {
      question: 'Ni nde wiyandikisha mu myigishirize ya RAITA?',
      answer: 'Imyigishirize ya RAITA ifunguye Abanyarwanda bose. Dufite amasomo yo kwigira ku banyeshuri b\'ishuri rikuru, abarangije kaminuza, abakozi, abayobozi ba Leta, n\'abayobozi b\'abaturage. Nta mbere y\'uko hakenewe amategeko ya tekiniki mu myigishirize yacu y\'ibanze.',
    },
    {
      question: 'Imyigishirize yaba y\'ubuntu?',
      answer: 'Imyigishirize yacu myinshi ihabwa ubuntu kubera amasezerano yacu na za guverinoma n\'imiryango mpuzamahanga. Imyigishirize y\'imihoho ishobora kugira igiciro gito cyo gukemura ibikoresho.',
    },
    {
      question: 'Imyigishirize imara igihe kingana gute?',
      answer: 'Igihe cy\'imyigishirize gihinduka kuva ku masomo y\'iminsi 2 kugeza ku masomo y\'iminsi 90. Amasomo yoroheye amara amasaha 3-4, mu gihe imyigishirize yacu y\'ubuhanga irama amezi 3.',
    },
    {
      question: 'Nkeneye ubumenyi bwa kompiyuta?',
      answer: 'Oya ntagute! Amasomo yacu ya AI Literacy n\'Imerera yashyiriweho abatangiye. Dukoresha gusa ubumenyi bworoheye bwa kompiyuta (kohereza imeri, gushakisha internet).',
    },
    {
      question: 'Amahugurwa abera he?',
      answer: 'Dufasha amahugurwa y\'umubiri ku icaro ryacu rya Kigali no mu bindi bice byo mu turere 30 twose, nk\'uko n\'amasomo y\'ikoranabuhanga. Amahugurwa y\'ubwoko bwa hybrid ahari ku myigishirize myinshi.',
    },
    {
      question: 'Nzahabwa impamyabumenyi nyuma y\'imyigishirize?',
      answer: 'Yego, abitabira bose barangije imyigishirize bahabwa impamyabumenyi yemewe na RAITA. Imyigishirize yacu y\'imihaho nayo itanga impamyabumenzi yemewe n\'imiryango ikomeye.',
    },
    {
      question: 'Uruganda rwange rwashobora gukorana na RAITA?',
      answer: 'Twakira amasezerano n\'amashuri, ibiro bya Leta, n\'amashyirahamwe. Twandikire kuri info.raita@gmail.com cyangwa uhamagare +250788877136.',
    },
    {
      question: 'Nshobora kuba umwigisha kuri RAITA?',
      answer: 'Birashoboka! Dushaka abigisha bafite ubuhanga. Sura igice cy\' Gusaba kuba Umwigisha cyangwa uduhama n\'ibaruwa yawe n\'ubumenyi bwawe.',
    },
  ],
}

export default function FAQSection({ lang }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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

  const faqs = faqData[lang]

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-white"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="section-label text-raita-green mb-4 block">
              {lang === 'en' ? 'Got Questions?' : 'Afite Ibibazo?'}
            </span>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-raita-blue mb-4">
              {lang === 'en' ? 'Frequently Asked' : 'Ibibazo '}
              <span className="text-raita-green">{lang === 'en' ? 'Questions' : 'Bisanzwe'}</span>
            </h2>
            <p className="text-raita-blue/60 text-lg">
              {lang === 'en'
                ? 'Everything you need to know about joining RAITA.'
                : 'Ibyose ukeneye kumenya bijyanye no kwinjira muri RAITA.'}
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border border-gray-100 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full flex items-center justify-between p-5 lg:p-6 text-left transition-colors ${
                    openIndex === i ? 'bg-raita-blue' : 'bg-raita-light hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle
                      className={`w-5 h-5 flex-shrink-0 ${
                        openIndex === i ? 'text-raita-yellow' : 'text-raita-green'
                      }`}
                    />
                    <span
                      className={`font-display font-bold text-sm lg:text-base ${
                        openIndex === i ? 'text-white' : 'text-raita-blue'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-500 ${
                      openIndex === i
                        ? 'rotate-180 text-raita-yellow'
                        : 'text-raita-blue/40'
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
                >
                  <div className="p-5 lg:p-6 bg-white border-t border-gray-100">
                    <p className="text-raita-blue/60 text-sm leading-relaxed pl-9">
                      {faq.answer}
                    </p>
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
