import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export async function proxy(request) {
  const { response } = createClient(request)
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files, images, and favicon.
     * Ensures Supabase session cookies are refreshed on every navigation.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
