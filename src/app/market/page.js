import OnSale from '@/components/OnSale'
import React from 'react'


export default function Home() {
  return(
    <main className="flex flex-col py-6 items-center gap-5">
        <h1 className="text-5xl font-bold">Market</h1>
        <OnSale/>
    </main>
)
}
