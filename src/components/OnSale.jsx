"use client"
import { MarketplaceContract } from '@/config'
import { useApprovedTokens } from '@/hooks/useApprovedTokens'
import { useTokens } from '@/hooks/useTokens'
import Link from 'next/link'
import {HiMenu} from 'react-icons/hi'

export default function OnSale() {
    const salesObj = useApprovedTokens()
    
    function renderdata(metadata,token){
      const { title, description, media } = metadata;
        return (
        <Link href="/nft">
              <div className="flex flex-col h-full shadow bg-gray-950 text-white overflow-hidden rounded-lg group" onClick={(e)=>e.preventDefault()} >
              <div className='relative h-5/6 overflow-hidden'>
                  {media && (
                    <img src={media} alt='null' className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" />
                  )}
                  <div className="absolute top-2 right-2 flex space-x-2">
                      <button onClick={(e)=>sellNft(token.token_id)} className="bg-gray-950 text-white px-2 py-1 rounded hover:bg-gray-900">
                          Buy
                      </button>
                      <button className="bg-gray-950 text-white px-2 py-1 rounded hover:bg-gray-900">
                          <HiMenu />
                      </button>
                  </div>
              </div>
              <footer className='h-1/7 p-4 flex flex-col justify-between bg-gray-900 transition-colors duration-300 group-hover:bg-gray-800'>
                  <div className="text-sm text-truncate ">{token.owner_id}</div>
                  <div className="text-lg font-bold text-truncate">{typeof title === 'string' ? title : 'No title available'}</div>
                  <div className="text-sm  text-gray-500 text-truncate">{token.approved_account_ids[MarketplaceContract]  ? "Listed" : "Not Listed" }</div>
              </footer>
          </div>
         </Link>
      )
      
    }

     
  return (
        <div className="container mx-auto p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {salesObj && salesObj.map((token, index) => (
                                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                    {token.metadata && renderdata(token.metadata,token)} 
                                </div>
                        ))}
                    </div>
        </div>
    )
}
