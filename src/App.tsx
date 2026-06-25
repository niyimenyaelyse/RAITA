import { useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './sections/HeroSection'
import ProgramsSection from './sections/ProgramsSection'
import ImpactSection from './sections/ImpactSection'
import TestimonialsSection from './sections/TestimonialsSection'
import EnrollmentSection from './sections/EnrollmentSection'
import NewsSection from './sections/NewsSection'
import FAQSection from './sections/FAQSection'
import InstructorSection from './sections/InstructorSection'
import Footer from './sections/Footer'

export default function App() {
  const [lang, setLang] = useState<'en' | 'rw'>('en')

  return (
    <div className="relative w-full min-h-screen bg-raita-light">
      {/* Navigation */}
      <Navigation lang={lang} onLangChange={setLang} />

      {/* Main Content */}
      <main className="relative w-full">
        <HeroSection lang={lang} />
        <ProgramsSection lang={lang} />
        <ImpactSection lang={lang} />
        <TestimonialsSection lang={lang} />
        <EnrollmentSection lang={lang} />
        <NewsSection lang={lang} />
        <FAQSection lang={lang} />
        <InstructorSection lang={lang} />
        <Footer lang={lang} />
      </main>
    </div>
  )
}
