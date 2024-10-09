"use client"
import { MintContract } from '@/config'
import { NearContext } from '@/context'
import React, { useContext, useEffect, useState } from 'react'
import Button from './button'
import { utils } from 'near-api-js'

export default function CreateNft() {
    const {signedAccountId,wallet } = useContext(NearContext)
    const [title,setTitle] = useState(null)
    const [description,setDescription] = useState(null)
    const [media,setMedia] = useState(null)
    const [loading,setLoading] = useState(false)
    
    const handleSubmit = async()=>{
        setLoading(true)
        const transaction = await wallet.callMethod({contractId : MintContract ,method : 'nft_mint', args : {
            token_id: `token-4`,
            metadata: {
              title: `${title}`,
              description: `${description}`,
              media: `${media}`,
            },
            receiver_id: signedAccountId,
          },
          deposit : `${utils.format.parseNearAmount('0.01')}`,
          gas : "300000000000000"
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
