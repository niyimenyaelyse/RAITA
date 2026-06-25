import { useState, useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle, User, Mail, Phone, FileText, GraduationCap, Briefcase } from 'lucide-react'

interface InstructorSectionProps {
  lang: 'en' | 'rw'
}

const content = {
  en: {
    label: 'Join Our Team',
    headline: 'Become an Instructor',
    body: 'Share your expertise and help shape the next generation of AI talent in Rwanda. We are looking for passionate educators with experience in AI, data science, machine learning, or related fields.',
    benefits: [
      'Flexible teaching schedule',
      'Competitive compensation',
      'Professional development opportunities',
      'Access to cutting-edge AI tools',
      'Network with industry leaders',
      'Make a lasting impact on Rwanda\'s future',
    ],
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      expertise: 'Area of Expertise',
      experience: 'Years of Experience',
      qualification: 'Highest Qualification',
      message: 'Tell us about yourself and why you want to teach at RAITA',
      submit: 'Apply to Teach',
      success: 'Application Received!',
      successMessage: 'Thank you for your interest in teaching with us. We will review your application and contact you within 5 business days.',
    },
  },
  rw: {
    label: 'Injira mu Itsinda',
    headline: 'Ubahwe Umwigisha',
    body: 'Sangira ubumenyi bwawe ufashe gushyira ibisekuru bya AI byejo hazaza mu Rwanda. Dushaka abigisha bashishikaye bafite uburambe mu AI, siyanse y\'amakuru, machine learning, cyangwa imyuga ihuriyeho.',
    benefits: [
      'Gahunda yigisha igororamye',
      'Umushahara unesha',
      'Amahirwe yo kwigira',
      'Kugera ku bikoresho bisha bya AI',
      'Guhuza n\'abayobozi bo mu ruganda',
      'Gukora ingaruka idakuka ku ejo hazaza h\'u Rwanda',
    ],
    form: {
      firstName: 'Izina ry\'Imbere',
      lastName: 'Izina ry\'Inyuma',
      email: 'Imeyili',
      phone: 'Telefoni',
      expertise: 'Ubwoko bw\'Ubumenyi',
      experience: 'Imyaka y\'Uburambe',
      qualification: 'Impamyabumenyi Isumba',
      message: 'Twandikire ibijyanye nawe n\'impamvu ushaka kwigisha kuri RAITA',
      submit: 'Saba Kwigisha',
      success: 'Gusaba Byakiriwe!',
      successMessage: 'Urakoze kunyurwa mu kwigisha natwe. Tuzareba gusaba kwawe tukaguhamagara mu iminsi 5 y\'akazi.',
    },
  },
}

export default function InstructorSection({ lang }: InstructorSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const c = content[lang]

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
      id="instructor"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-raita-blue overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rotate-45" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-white rotate-12" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left: Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="section-label text-raita-yellow mb-4 block">
              {c.label}
            </span>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-6">
              {c.headline}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              {c.body}
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {c.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-raita-green flex-shrink-0" />
                  <span className="text-white/70 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {submitted ? (
              <div className="text-center py-16 bg-white/5 border border-white/10">
                <CheckCircle className="w-16 h-16 text-raita-green mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {c.form.success}
                </h3>
                <p className="text-white/60">{c.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <User className="w-3 h-3" />
                      {c.form.firstName}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-raita-light border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-raita-light border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-raita-light border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-raita-light border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Expertise */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <FileText className="w-3 h-3" />
                      {c.form.expertise}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Machine Learning"
                      className="w-full px-4 py-3 bg-raita-light border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <Briefcase className="w-3 h-3" />
                      {c.form.experience}
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-raita-light border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  {/* Qualification - Full Width */}
                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <GraduationCap className="w-3 h-3" />
                      {c.form.qualification}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-raita-light border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message - Full Width */}
                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-raita-blue/60 mb-2">
                      <FileText className="w-3 h-3" />
                      {c.form.message}
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-raita-light border border-gray-200 text-raita-blue text-sm focus:border-raita-green focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-8 w-full flex items-center justify-center gap-3 px-8 py-4 bg-raita-yellow text-raita-blue font-display font-bold text-sm hover:bg-raita-green hover:text-white transition-colors duration-300"
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
