'use server'

import { list } from '@vercel/blob'

export async function getPhotos() {
  try {
    const { blobs } = await list()

    // Filter to only include actual image files (not folders)
    // Includes iPhone formats: HEIC, HEIF
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.heic', '.heif']
    const imageBlobs = blobs.filter((blob) => {
      const pathname = blob.pathname.toLowerCase()
      return imageExtensions.some((ext) => pathname.endsWith(ext))
    })
    console.log(`Fetched ${imageBlobs.length} image blobs from Vercel Blob Storage.`)
    return imageBlobs.map((blob) => ({
      url: blob.url,
      pathname: blob.pathname,
      uploadedAt: blob.uploadedAt
    }))
  } catch (error) {
    console.error('Error fetching photos from Vercel Blob:', error)
    return []
  }
}
