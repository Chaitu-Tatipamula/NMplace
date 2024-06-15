import UserNFTs from '@/components/UserNFTs'
import React from 'react'
import Ownerlistings from '@/components/OwnedListings'


export default function Home() {
  return(
    <main className="flex flex-col py-6 items-center gap-5">
        <h1 className="text-5xl font-bold">Home</h1>
        <h2>My NFTs</h2>
        <UserNFTs/>
        <h2>Listed NFTs</h2>
        <Ownerlistings/>
    </main>
)
}
