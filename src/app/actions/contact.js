'use server'

import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'

export async function submitContactForm(formData) {
  // 1. Basic server-side validation
  const name = formData.name?.trim()
  const email = formData.email?.trim()
  const subject = formData.subject?.trim() || null
  const message = formData.message?.trim()

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please provide a valid email address.' }
  }

  try {
    const supabase = await createClient()

    // 2. Identify client IP address
    const headerList = await headers()
    const ip = headerList.get('x-forwarded-for')?.split(',')[0] || 
               headerList.get('x-real-ip') || 
               'unknown'

    // 3. Server-side Rate Limiting (Database-backed)
    // Limit to 3 submissions per IP address every 5 minutes
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()
    const { count, error: countError } = await supabase
      .from('contact_submissions')
      .select('id', { count: 'exact', head: true })
      .eq('ip_address', ip)
      .gte('created_at', fiveMinutesAgo)

    if (countError) {
      console.error('Error checking rate limit:', countError)
    } else if (count !== null && count >= 3) {
      return { 
        success: false, 
        error: 'Too many messages sent. Please wait 5 minutes before trying again.' 
      }
    }

    // 4. Save submission with client IP
    const { error } = await supabase.from('contact_submissions').insert([
      { name, email, subject, message, ip_address: ip }
    ])

    if (error) {
      console.error('Supabase insert error — code:', error.code, '| message:', error.message, '| details:', error.details, '| hint:', error.hint)
      return { success: false, error: `DB error: ${error.message} (code: ${error.code})` }
    }

    return { success: true }
  } catch (error) {
    console.error('Server error submitting contact:', error)
    return { success: false, error: 'Internal server error.' }
  }
}
