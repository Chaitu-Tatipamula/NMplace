"use client"
import { MintContract } from '@/config'
import { NearContext } from '@/context'
import React, { useContext, useEffect, useState } from 'react'
import Button from './button'

export default function CreateNft() {
    const {signedAccountId,wallet } = useContext(NearContext)
    const [title,setTitle] = useState(null)
    const [description,setDescription] = useState(null)
    const [media,setMedia] = useState(null)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
      console.log(title);
      console.log(description);
      console.log(media);

    },[title,description,media])
    const handleSubmit = async()=>{
        setLoading(true)
        const transaction = await wallet.callMethod({contractId : MintContract ,method : 'nft_mint', args : {
            token_id: `${signedAccountId} go-team-token-3`,
            metadata: {
              title: `${title}`,
              description: `${description}`,
              media: `${media}`,
            },
            receiver_id: signedAccountId,
          },
          deposit : '12000000000000000000000',
          gas : "200000000000000"
         })
         setLoading(false)

    }

  return (
    <main className='flex flex-col gap-25 max-w-sm w-full'>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
            type="text"
            className="rounded-lg p-2 w-full"
            placeholder="Crazy Token"
            onChange={(e)=>
                setTitle(e.target.value)
            }
          />
            <input
            type="text"
            className="rounded-lg p-2 w-full"
            placeholder="This NFTee makes you crazieee..!"
            onChange={(e)=>
                setDescription(e.target.value)
            }
          />
            <input
            type="text"
            className="rounded-lg p-2 w-full"
            placeholder="preferably decentralized like ipfs"
            onChange={
                (e)=>setMedia(e.target.value)
            }
          />
        {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-l-white items-center justify-center mx-auto" />
        ) : (
            <div className="flex items-center justify-between">
                <Button onClick={handleSubmit}>Mint</Button>
            </div>
        )}
            
        </form>
    </main >
  )
}
