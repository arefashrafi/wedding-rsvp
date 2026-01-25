'use client'

import { useEffect, useState } from 'react'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { getPhotos } from '../actions/photos'

interface Photo {
  url: string
  pathname: string
  uploadedAt: Date
}

export default function PhotosContent() {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    async function fetchPhotos() {
      const fetchedPhotos = await getPhotos()
      setPhotos(fetchedPhotos)
    }
    fetchPhotos()
  }, [])

  if (photos.length === 0) {
    return (
      <div className='relative z-10 w-full h-screen flex items-center justify-center px-4'>
        <div className='text-center bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-20 max-w-3xl'>
          <div className='w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-8'>
            <svg className='w-12 h-12 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
              />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 13a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
          </div>

          <h1 className='text-6xl md:text-7xl font-bold text-gray-900 mb-6'>Photos</h1>

          <div className='space-y-4'>
            <p className='text-3xl md:text-4xl text-gray-600 font-light'>Coming Soon</p>

            <p className='text-lg text-gray-500 max-w-lg mx-auto leading-relaxed'>
              We can't wait to share our beautiful wedding photos with you. Check back after the celebration!
            </p>
          </div>

          <div className='mt-8 pt-8 border-t border-gray-200'>
            <p className='text-sm text-gray-400 uppercase tracking-wider'>June 14, 2026</p>
          </div>
        </div>
      </div>
    )
  }
  const cards = photos.map((photo, index) => {
    // Create varied layouts with consistent aspect ratios
    let className = 'col-span-1'
    if (index % 5 === 0) {
      className = 'col-span-1 md:col-span-2'
    } else if (index % 3 === 0) {
      className = 'col-span-1 md:col-span-2'
    }

    return {
      id: index + 1,
      content: (
        <div>
          <p className='font-bold text-lg md:text-2xl lg:text-4xl text-white'>
            {photo.pathname.split('/').pop()?.split('.')[0] || `Photo ${index + 1}`}
          </p>
        </div>
      ),
      className,
      thumbnail: photo.url
    }
  })

  return (
    <div className='relative z-10 w-full min-h-screen py-10 md:py-16 px-2 md:px-4'>
      <div className='max-w-7xl mx-auto mb-6 md:mb-10 px-2'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-2 md:mb-4 text-center'>
          Our Wedding Photos
        </h1>
        <p className='text-base md:text-xl text-gray-600 text-center max-w-2xl mx-auto px-4'>
          Relive the beautiful moments from our special day
        </p>
      </div>
      <div className='min-h-[1000px] md:min-h-screen'>
        <LayoutGrid cards={cards} />
      </div>
    </div>
  )
}
