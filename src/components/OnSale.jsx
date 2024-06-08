"use client"
import { MarketplaceContract, MintContract } from '@/config'
import { NearContext } from '@/context'
import { useApprovedTokens } from '@/hooks/useApprovedTokens'
import { useTokens } from '@/hooks/useTokens'
import { removeListing, removeNftListing } from '@/utils/menuOps'
import { utils } from 'near-api-js'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { BiTransfer } from 'react-icons/bi'
import {HiMenu} from 'react-icons/hi'
import { MdOutlineBackspace, MdOutlineSell } from "react-icons/md";


export default function OnSale() {
    const {wallet, signedAccountId} = useContext(NearContext)
    const salesObj = useApprovedTokens()
    const [menuOpen, setMenuOpen] = useState(null); 
   

    const toggleMenu = (index) => {
        setMenuOpen(menuOpen === index ? null : index);
      };

    const buyNFT = async(tokenId)=>{
        const transaction =  await wallet.callMethod({
            contractId : MintContract,
            method : "offer",
            args : {
                nft_contract_id : `${MintContract}`,
                token_id : `${tokenId}`,
                
            },
            deposit : `${utils.format.parseNearAmount("0.001")}`,
            gas : "200000000000000"
        }) 
        
    }
    
    const updatePrice = async(tokenId, price)=>{
        const transaction =  await wallet.callMethod({
            contractId : MarketplaceContract,
            method : "update_price",
            args : {
                nft_contract_id : `${MintContract}`,
                token_id : `${tokenId}`,
                price : `${price}`
                
            },
            deposit : `${utils.format.parseNearAmount("0.001")}`,
            gas : "200000000000000"
        }) 
        
    }
    
    function renderdata(metadata,token,index){
      const { title, description, media } = metadata;
        return (
        
            <div onClick={()=>window.location.href = "/nft"}  className="cursor-pointer flex flex-col h-full shadow bg-gray-950 text-white overflow-hidden rounded-lg group"  >
              <div className='relative h-5/6 overflow-hidden'>
                  {media && (
                    <img src={media} alt='null' className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" />
                  )}
                  <div className="absolute top-2 right-2 flex space-x-2">
                     {
                        !token.owner_id==signedAccountId && 
                        <button onClick={(e)=>{e.stopPropagation(); buyNFT(token.token_id)}} className="bg-gray-950 text-white px-2 py-1 rounded hover:bg-gray-900">
                            Buy
                        </button>
                     }
                      <button onClick={(e) => {e.stopPropagation();  toggleMenu(index) }} className="bg-gray-950 text-white px-2 py-1 rounded hover:bg-gray-900">
                            <HiMenu />
                        {menuOpen === index && (
                            <div className="absolute right-0 mt-4 bg-gray-900  w-40 shadow-lg sm:w-38 md:w-30 lg:w-40 z-10">
                            <div className="py-2 text-white">
                                {!token.owner_id==signedAccountId &&
                                <button onClick={()=>buyNFT(token.token_id)} className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-gray-700 transition-colors duration-300"><MdOutlineSell/> Buy</button>}
                                {token.owner_id==signedAccountId && 
                                <button onClick={()=>removeNftListing(wallet,MintContract,MarketplaceContract,token.token_id)} className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-gray-700 transition-colors duration-300"><MdOutlineBackspace/> Remove Listing</button>}
                                {token.owner_id==signedAccountId && 
                                <button onClick={()=>updatePrice(token.token_id,price)} className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-gray-700 transition-colors duration-300"><BiTransfer/> Update Price</button>}
                            </div>
                            </div>
                        )}
                        </button>
                  </div>
              </div>
              <footer className='h-1/7 p-4 flex flex-col justify-between bg-gray-900 transition-colors duration-300 group-hover:bg-gray-800'>
                  <div className="text-sm text-truncate ">{token.owner_id}</div>
                  <div className="text-lg font-bold text-truncate">{typeof title === 'string' ? title : 'No title available'}</div>
                  <div className="text-sm  text-gray-500 text-truncate">{token.approved_account_ids[`${MarketplaceContract}`]!=null  ? "Listed" : "Not Listed" }</div>
              </footer>
          </div>
        
      )
      
    }

     
  return (
        <div className="container mx-auto p-5">
            {console.log(salesObj)}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {salesObj && salesObj.map((token, index) => (
                                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                    {token.metadata && renderdata(token.metadata,token,index)} 
                                </div>
                        ))}
                    </div>
        </div>
    )
}
