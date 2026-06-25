import { useState, useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle, User, Mail, Phone, BookOpen, Building, MapPin, MessageSquare } from 'lucide-react'

interface EnrollmentSectionProps {
  lang: 'en' | 'rw'
}

const content = {
  en: {
    label: 'Start Your Journey',
    headline: 'Enroll in a Program',
    body: 'Fill out the form below to register for one of our AI training programs. Our team will contact you with next steps.',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      category: 'Select Category',
      program: 'Select Program',
      institution: 'Institution / Organization',
      district: 'District',
      message: 'Why do you want to learn AI?',
      submit: 'Submit Application',
      success: 'Application Submitted!',
      successMessage: 'Thank you for your interest. We will contact you within 48 hours.',
    },
    categories: [
      { value: '', label: 'Choose a category...' },
      { value: 'leaders', label: 'Local Leaders & Community' },
      { value: 'students', label: 'High School Students' },
      { value: 'crosscutting', label: 'Cross-Cutting Programs' },
    ],
    programs: {
      leaders: [
        { value: 'ai-awareness', label: 'AI Awareness Training' },
        { value: 'ai-decision', label: 'AI for Decision-Making' },
        { value: 'ai-ethics', label: 'AI Ethics & Policy Training' },
        { value: 'ai-economic', label: 'AI for Economic Opportunity' },
        { value: 'ai-tools', label: 'AI Tools Workshop' },
      ],
      students: [
        { value: 'ai-literacy', label: 'AI Literacy Program' },
        { value: 'ai-careers', label: 'AI & Careers' },
        { value: 'ai-hands-on', label: 'Hands-on AI Projects' },
        { value: 'ai-ethics-critical', label: 'AI Ethics & Critical Thinking' },
        { value: 'ai-coding', label: 'Coding & AI Basics' },
      ],
      crosscutting: [
        { value: 'ai-storytelling', label: 'AI Storytelling' },
        { value: 'ai-local', label: 'AI & Local Problems' },
        { value: 'ai-safety', label: 'AI Safety Awareness' },
      ],
    },
  },
  rw: {
    label: 'Tangira Uruhare Rwawe',
    headline: 'Iyandikishe mu Myigishirize',
    body: 'Uzuza ifishi hepfo kugirango wiyandikishe mu mwe mu myigishirize yacu ya AI. Itsinda ryacu rizaguhamagara.',
    form: {
      firstName: 'Izina ry\'Imbere',
      lastName: 'Izina ry\'Inyuma',
      email: 'Imeyili',
      phone: 'Telefoni',
      category: 'Hitamo Itsinda',
      program: 'Hitamo Myigishirize',
      institution: 'Ikigo / Umuryango',
      district: 'Akarere',
      message: 'Kuki ushaka kwiga AI?',
      submit: 'Ohereza Gusaba',
      success: 'Gusaba Byagenze Neza!',
      successMessage: 'Urakoze kunyurwa. Tuzaguhamagara mu masaha 48.',
    },
    categories: [
      { value: '', label: 'Hitamo itsinda...' },
      { value: 'leaders', label: 'Abayobozi n\'Abaturage' },
      { value: 'students', label: 'Abanyeshuri b\'Ishuri Rikuru' },
      { value: 'crosscutting', label: 'Imyigishirize Y\'Abantu Bose' },
    ],
    programs: {
      leaders: [
        { value: 'ai-awareness', label: 'Imyigishirize y\'Imerera ya AI' },
        { value: 'ai-decision', label: 'AI mu Gufata Ibicyemezo' },
        { value: 'ai-ethics', label: 'Inkiko za AI' },
        { value: 'ai-economic', label: 'AI mu Mbubakiro' },
        { value: 'ai-tools', label: 'Amahugurwa ku Bikoresho' },
      ],
      students: [
        { value: 'ai-literacy', label: 'Igishushanyombonera cya AI' },
        { value: 'ai-careers', label: 'AI n\'Imirimo' },
        { value: 'ai-hands-on', label: 'Imishinga y\'Ikiganza' },
        { value: 'ai-ethics-critical', label: 'Inkiko n\'Ibihabanye' },
        { value: 'ai-coding', label: 'Ukubona na AI' },
      ],
      crosscutting: [
        { value: 'ai-storytelling', label: 'Inkuru zikoresheje AI' },
        { value: 'ai-local', label: 'AI n\'Ibibazo by\'Ahantu' },
        { value: 'ai-safety', label: 'Umutekano wa AI' },
      ],
    },
  },
}

export default function EnrollmentSection({ lang }: EnrollmentSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [category, setCategory] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

  const c = content[lang]

  const availablePrograms = category ? (c.programs as any)[category] || [] : []

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="enroll"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-white"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="section-label text-raita-green mb-4 block">
              {c.label}
            </span>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-raita-blue mb-4">
              {c.headline}
            </h2>
            <p className="text-raita-blue/60 text-lg">
              {c.body}
            </p>
          </div>

          {/* Form or Success */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {submitted ? (
              <div className="text-center py-16 bg-raita-light border border-raita-green/20">
                <CheckCircle className="w-16 h-16 text-raita-green mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl text-raita-blue mb-2">
                  {c.form.success}
                </h3>
                <p className="text-raita-blue/60">{c.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-raita-light p-8 lg:p-12 border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <User className="w-3 h-3" />
                      {c.form.firstName}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <User className="w-3 h-3" />
                      {c.form.lastName}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <Mail className="w-3 h-3" />
                      {c.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <Phone className="w-3 h-3" />
                      {c.form.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+250"
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <BookOpen className="w-3 h-3" />
                      {c.form.category}
                    </label>
                    <select
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    >
                      {c.categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Program */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <BookOpen className="w-3 h-3" />
                      {c.form.program}
                    </label>
                    <select
                      required
                      disabled={!category}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors disabled:opacity-50"
                    >
                      <option value="">
                        {category ? 'Choose a program...' : 'Select category first'}
                      </option>
                      {availablePrograms.map((prog: any) => (
                        <option key={prog.value} value={prog.value}>
                          {prog.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Institution */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <Building className="w-3 h-3" />
                      {c.form.institution}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* District */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <MapPin className="w-3 h-3" />
                      {c.form.district}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message - Full Width */}
                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <MessageSquare className="w-3 h-3" />
                      {c.form.message}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-8 w-full flex items-center justify-center gap-3 px-8 py-4 bg-raita-blue text-white font-display font-bold text-sm hover:bg-raita-green transition-colors duration-300"
                >
                  <span>{c.form.submit}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
