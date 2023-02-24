import Layout from '@/layout/admin/Layout'
import React from 'react'

const Page = () => {
  return <div>i am admin</div>
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Page
