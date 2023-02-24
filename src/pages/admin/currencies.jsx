import Layout from '@/layout/admin/Layout'
import useCoin from '@/lib/hooks/useCoin'
import React, { useEffect } from 'react'

const Page = () => {
  const { data } = useCoin()
  const currencies =
    data &&
    data.map((i) => {
      return {
        label: i.name,
        icon: `https://static-ssl.minerstat.farm/32/${i.reward_unit.toLowerCase()}.png`,
        key: i.reward_unit
      }
    })
  console.log(currencies)
  return <div>i am admin</div>
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Page
