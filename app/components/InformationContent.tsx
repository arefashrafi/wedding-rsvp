'use client'

import { Timeline } from '@/components/ui/timeline'

export default function InformationContent() {
  const data = [
    {
      title: 'When & Where',
      content: (
        <div>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <div>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold'>Date</p>
                <p className='text-xl font-bold text-gray-900'>Saturday, September 12th, 2026</p>
              </div>
              <div>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold'>Time</p>
                <p className='text-xl font-bold text-gray-900'>4:00 PM - Ceremony</p>
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold'>Venue</p>
                <p className='text-xl font-bold text-gray-900'>[Venue Name]</p>
              </div>
              <div>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold'>Address</p>
                <p className='text-base text-gray-700'>[Street Address]</p>
                <p className='text-base text-gray-700'>[City, State ZIP]</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Schedule of Events',
      content: (
        <div className='space-y-6'>
          <div className='flex gap-6 items-start'>
            <div className='min-w-[80px]'>
              <p className='text-lg font-bold text-gray-900'>4:00 PM</p>
            </div>
            <div className='flex-1'>
              <p className='font-bold text-lg mb-1 text-gray-900'>Ceremony</p>
              <p className='text-base text-gray-600'>Exchange vows and celebrate our love</p>
            </div>
          </div>
          <div className='flex gap-6 items-start'>
            <div className='min-w-[80px]'>
              <p className='text-lg font-bold text-gray-900'>5:00 PM</p>
            </div>
            <div className='flex-1'>
              <p className='font-bold text-lg mb-1 text-gray-900'>Cocktail Hour</p>
              <p className='text-base text-gray-600'>Drinks and hors d'oeuvres</p>
            </div>
          </div>
          <div className='flex gap-6 items-start'>
            <div className='min-w-[80px]'>
              <p className='text-lg font-bold text-gray-900'>6:00 PM</p>
            </div>
            <div className='flex-1'>
              <p className='font-bold text-lg mb-1 text-gray-900'>Reception</p>
              <p className='text-base text-gray-600'>Dinner, toasts, and dancing until 11 PM</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Dress Code',
      content: (
        <div>
          <p className='text-xl font-bold text-gray-900 mb-3'>Semi-Formal / Cocktail Attire</p>
          <p className='text-base text-gray-600 leading-relaxed'>
            Suits and cocktail dresses are perfect, but feel free to express your style!
          </p>
        </div>
      )
    },
    {
      title: 'Getting There',
      content: (
        <div className='space-y-4'>
          <div>
            <p className='font-bold text-lg mb-2 text-gray-900'>Parking</p>
            <p className='text-base text-gray-600 leading-relaxed'>
              Free parking available at the venue. Overflow parking at [nearby location].
            </p>
          </div>
          <div>
            <p className='font-bold text-lg mb-2 text-gray-900'>Transportation</p>
            <p className='text-base text-gray-600 leading-relaxed'>
              Rideshare services recommended. The venue is 15 minutes from downtown.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Accommodations',
      content: (
        <div>
          <p className='text-sm text-gray-600 mb-6'>Room blocks reserved for your convenience:</p>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-gray-50 p-6 rounded-xl'>
              <p className='text-lg font-bold text-gray-900 mb-2'>[Hotel Name 1]</p>
              <p className='text-sm text-gray-600 mb-1'>[Hotel Address]</p>
              <p className='text-sm text-gray-600 mb-3'>[City, State ZIP]</p>
              <p className='text-xs text-gray-900 bg-gray-200 px-3 py-1.5 rounded-lg inline-block'>
                Code: <span className='font-bold'>SUEUN-AREF</span>
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl'>
              <p className='text-lg font-bold text-gray-900 mb-2'>[Hotel Name 2]</p>
              <p className='text-sm text-gray-600 mb-1'>[Hotel Address]</p>
              <p className='text-sm text-gray-600 mb-3'>[City, State ZIP]</p>
              <p className='text-xs text-gray-900 bg-gray-200 px-3 py-1.5 rounded-lg inline-block'>
                Code: <span className='font-bold'>JEON-ASHRAFI</span>
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className='relative z-10 w-full'>
      <Timeline data={data} />
    </div>
  )
}
