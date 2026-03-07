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
                <p className='text-xl font-bold text-gray-900'>16:30 - Ceremony</p>
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold'>Venue</p>
                <p className='text-xl font-bold text-gray-900'>Ängens gård</p>
              </div>
              <div>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold'>Address</p>
                <p className='text-base text-gray-700'>Ängen, Bårarpsvägen 28</p>
                <p className='text-base text-gray-700'>556 28 Jönköping</p>
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
              <p className='text-lg font-bold text-gray-900'>16:00</p>
            </div>
            <div className='flex-1'>
              <p className='font-bold text-lg mb-1 text-gray-900'>We Meet</p>
              <p className='text-base text-gray-600'>Guest Arrival</p>
            </div>
          </div>
          <div className='flex gap-6 items-start'>
            <div className='min-w-[80px]'>
              <p className='text-lg font-bold text-gray-900'>16:30</p>
            </div>
            <div className='flex-1'>
              <p className='font-bold text-lg mb-1 text-gray-900'>We Do</p>
              <p className='text-base text-gray-600'>Ceremony</p>
            </div>
          </div>
          <div className='flex gap-6 items-start'>
            <div className='min-w-[80px]'>
              <p className='text-lg font-bold text-gray-900'>17:30</p>
            </div>
            <div className='flex-1'>
              <p className='font-bold text-lg mb-1 text-gray-900'>We Smile</p>
              <p className='text-base text-gray-600'>Photo</p>
            </div>
          </div>
          <div className='flex gap-6 items-start'>
            <div className='min-w-[80px]'>
              <p className='text-lg font-bold text-gray-900'>18:30</p>
            </div>
            <div className='flex-1'>
              <p className='font-bold text-lg mb-1 text-gray-900'>We eat</p>
              <p className='text-base text-gray-600'>Dinner & Speaches</p>
            </div>
          </div>
          <div className='flex gap-6 items-start'>
            <div className='min-w-[80px]'>
              <p className='text-lg font-bold text-gray-900'>20:30</p>
            </div>
            <div className='flex-1'>
              <p className='font-bold text-lg mb-1 text-gray-900'>We fika</p>
              <p className='text-base text-gray-600'>Cake cutting</p>
            </div>
          </div>
          <div className='flex gap-6 items-start'>
            <div className='min-w-[80px]'>
              <p className='text-lg font-bold text-gray-900'>21:30</p>
            </div>
            <div className='flex-1'>
              <p className='font-bold text-lg mb-1 text-gray-900'>We party</p>
              <p className='text-base text-gray-600'>Drinks & Dancing</p>
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
    }
  ]

  return (
    <div className='relative z-10 w-full'>
      <Timeline data={data} />
    </div>
  )
}
