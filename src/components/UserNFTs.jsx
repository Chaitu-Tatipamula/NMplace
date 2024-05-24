"use client"
import { MarketplaceContract, MintContract } from '@/config'
import { NearContext } from '@/context'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import {utils} from 'near-api-js'

export default function UserNFTs() {
    const { signedAccountId, wallet } = useContext(NearContext)
    const [ownedTokens, setOwnedTokens] = useState([])

    
    const rendermetadata = (metadata,token) => {
        const { title, description, media } = metadata;
        const isApprovedForMarketplace = token.approved_account_ids.hasOwnProperty(MarketplaceContract);

        return (
            <Link href="/nft">
                <div className="flex flex-col h-full shadow bg-gray-950 text-white overflow-hidden rounded-lg group" onClick={(e)=>e.preventDefault()} >
                <div className='relative h-5/6 overflow-hidden'>
                    {media && (
                        <img src={media} alt='null' className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" />
                    )}
                    <div className="absolute top-2 right-2 flex space-x-2">
                        <button onClick={(e)=>sellNft(token.token_id)} className="bg-gray-950 text-white px-2 py-1 rounded hover:bg-gray-900">
                            SELL
                        </button>
                        <button className="bg-gray-950 text-white px-2 py-1 rounded hover:bg-gray-900">
                            <HiMenu />
                        </button>
                    </div>
                </div>
                <footer className='h-1/7 p-4 flex flex-col justify-between bg-gray-900 transition-colors duration-300 group-hover:bg-gray-800'>
                    <div className="text-sm text-truncate ">{token.owner_id}</div>
                    <div className="text-lg font-bold text-truncate">{typeof title === 'string' ? title : 'No title available'}</div>
                    
                    <div className="text-sm  text-gray-500 text-truncate">{knowIfApproved(token) ? "Listed" : "Not Listed" }</div>
                </footer>
            </div>
           </Link>
        )
    }

    const sellNft = async(tokenId)=>{
        const transaction =  await wallet.callMethod({
            contractId : MintContract,
            method : "nft_approve",
            args : {
                token_id : `${tokenId}`,
                account_id : `${MarketplaceContract}`,
                msg : JSON.stringify({
                    sale_conditions: "0.1"
                })
            },
            deposit : `${utils.format.parseNearAmount("0.001")}`,
            gas : "200000000000000"
        }) 
        console.log(transaction);
        
    }

    const knowIfApproved = async(token)=>{
        console.log(token.approved_account_ids[MarketplaceContract]);
        const approved = await wallet.viewMethod({
            contractId : MintContract,
            method : "nft_is_approved",
            args : {
                token_id : `${token.token_id}`,
                approved_account_id : `${MarketplaceContract}`,
                approval_id : `${token.approved_account_ids[MarketplaceContract]}`
            }
        })
        console.log(approved);
        return approved
    }
    

    useEffect(() => {
        async function fetch() {
            const data = await wallet.viewMethod({
                contractId: MintContract,
                method: "nft_tokens_for_owner",
                args: {
                    account_id: `${signedAccountId}`
                }
            })
            
            setOwnedTokens(data)
            
        }
        fetch()
    }, [wallet, signedAccountId])

    return (
        <div className="container mx-auto p-5">
            {console.log(ownedTokens)}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {ownedTokens && ownedTokens.map((token, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                {token.metadata && rendermetadata(token.metadata,token)} 
                            </div>
                    ))}
                </div>
        </div>
    )
}
