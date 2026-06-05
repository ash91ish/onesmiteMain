import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const name = body.name?.trim()
    const email = body.email?.trim()
    const subject = body.subject?.trim() || null
    const message = body.message?.trim()

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // 2. Identify client IP (Bunny CDN forwards real IP via CF-Connecting-IP or x-forwarded-for)
    const headerList = await headers()
    const ip =
      headerList.get('cf-connecting-ip') ||
      headerList.get('x-forwarded-for')?.split(',')[0].trim() ||
      headerList.get('x-real-ip') ||
      'unknown'

    const supabase = await createClient()

    // 3. Rate limiting — max 3 submissions per IP per 5 minutes
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()
    const { count, error: countError } = await supabase
      .from('contact_submissions')
      .select('id', { count: 'exact', head: true })
      .eq('ip_address', ip)
      .gte('created_at', fiveMinutesAgo)

    if (countError) {
      console.error('Rate limit check error:', countError.message)
    } else if (count !== null && count >= 3) {
      return NextResponse.json(
        { success: false, error: 'Too many messages sent. Please wait 5 minutes before trying again.' },
        { status: 429 }
      )
    }

    // 4. Save submission
    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, subject, message, ip_address: ip }])

    if (error) {
      console.error('Supabase insert error:', error.code, error.message)
      return NextResponse.json(
        { success: false, error: `DB error: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
