'use client'
import { useState } from 'react'
import RSVPForm from './components/RSVPForm'
import ContactSection from './components/ContactSection'
import { AuroraBackground } from './components/ui/aurora-background'
import { motion } from 'motion/react'
import { TextGenerateEffect } from './components/ui/text-generate-effect'
import InformationContent from './components/InformationContent'
import { NoiseBackground } from '@/components/ui/noise-background'

export default function Home() {
  const [isVerified, setIsVerified] = useState(false)

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp')
    if (rsvpSection) {
      const targetPosition = rsvpSection.offsetTop
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 1500 // 1.5 seconds
      let start: number | null = null

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * ease)

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  const scrollToInformation = () => {
    const infoSection = document.querySelector('#rsvp')?.nextElementSibling
    if (infoSection) {
      const targetPosition = infoSection.getBoundingClientRect().top + window.scrollY
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 1500
      let start: number | null = null

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * ease)

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  return (
    <>
      <div
        style={{ fontFamily: 'orpheus-pro, serif' }}
        className='relative z-10 text-center space-y-8 px-4 pt-16 min-h-screen flex flex-col items-center justify-center'
      >
        <p className='text-2xl md:text-3xl text-gray-500 tracking-widest uppercase'>September 12, 2026</p>
        <TextGenerateEffect className='text-6xl md:text-8xl' duration={0.75} words='Sueun & Aref' />
        <TextGenerateEffect className='text-3xl md:text-3xl' duration={1} words="We're getting married!" />
        <NoiseBackground
          containerClassName='w-fit p-2 rounded-full mx-auto'
          gradientColors={['rgb(218, 191, 255)', 'rgb(193, 178, 213)', 'rgb(218, 191, 255)']}
        >
          <button
            onClick={scrollToRSVP}
            className='h-full w-full cursor-pointer rounded-full px-8 py-4 text-white shadow-lg transition-all duration-200 hover:shadow-xl active:scale-98 font-semibold text-lg'
            style={{ backgroundColor: '#C1B2D5' }}
          >
            RSVP Now
          </button>
        </NoiseBackground>
      </div>
      <RSVPForm onVerified={() => setIsVerified(true)} onSubmitted={scrollToInformation} />
      {isVerified && <InformationContent />}
    </>
  )
}
