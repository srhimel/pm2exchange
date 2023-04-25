import { useSession } from 'next-auth/react'
import { Router, useRouter } from 'next/router'
import React from 'react'

const Index = () => {
  const router = useRouter()
  const { status } = useSession()
  if (status === 'loading') {
    return <>Loading....</>
  }
  if (status === 'unauthenticated') router.push('/admin/login')
  if (status === 'authenticated') router.push('/admin/dashboard')
  return <div>Admin Page</div>
}

export default Index
