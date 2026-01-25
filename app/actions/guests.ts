'use server'

import { neon } from '@neondatabase/serverless'

export interface Guest {
  id: string
  name: string
  attending: boolean
}

export async function fetchRelatedGuests(name: string): Promise<Guest[]> {
  if (name.length < 3) {
    return []
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)

    // Find the family_id of the person who entered their name
    const userResult = await sql`
      SELECT family_id 
      FROM guests_attendance 
      WHERE LOWER(name) LIKE LOWER(${'%' + name + '%'})
      LIMIT 1
    `

    if (userResult.length === 0) {
      return []
    }

    const familyId = userResult[0].family_id

    // Fetch all guests in the same family
    const dbGuests = await sql`
      SELECT name, attendance 
      FROM guests_attendance 
      WHERE family_id = ${familyId}
      ORDER BY name
    `

    const guests: Guest[] = dbGuests.map((g: any, index: number) => ({
      id: `${familyId}-${index}`,
      name: g.name as string,
      attending: g.attendance as boolean
    }))

    return guests
  } catch (error) {
    console.error('Error fetching guests:', error)
    return []
  }
}

export interface RSVPSubmission {
  primary: Guest
  dietaryRestrictions: string
  message: string
  guests: Guest[]
}

export async function submitRSVP(data: RSVPSubmission): Promise<{ success: boolean; error?: string }> {
  try {
    const sql = neon(process.env.DATABASE_URL!)

    // Update each guest's attendance and shared information
    for (const guest of data.guests) {
      if (data.primary.name == guest.name) {
        await sql`
            UPDATE guests_attendance 
            SET 
            attendance = ${guest.attending},
            dietary_restrictions = ${data.dietaryRestrictions || null},
            message = ${data.message || null}
            WHERE name = ${guest.name}
                and family_id = ${guest.id.split('-')[0]}
        `
      } else {
        await sql`
            UPDATE guests_attendance 
            SET 
            attendance = ${guest.attending}
            WHERE name = ${guest.name}
                and family_id = ${guest.id.split('-')[0]}
        `
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Error submitting RSVP:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit RSVP'
    }
  }
}
