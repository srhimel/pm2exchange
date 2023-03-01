// middleware.ts
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const isLoggedIn = request.cookies.get('next-auth.session-token')?.value
  if (request.nextUrl.pathname === '/admin') {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    } else {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  } else if (request.nextUrl.pathname === '/admin/login') {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    } else {
      return NextResponse.next()
    }
  } else {
    if (isLoggedIn) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*', '/admin']
}
