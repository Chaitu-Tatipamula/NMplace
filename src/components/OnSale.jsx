"use client"
import { MarketplaceContract, MintContract } from '@/config'
import { NearContext } from '@/context'
import { Wallet } from '@/wallets/near'
import React, { useContext, useEffect, useState } from 'react'

export default function OnSale() {
  const {wallet , signedAccountId} = useContext(NearContext)
  const [salesObj,setSalesObj] = useState([])
  useEffect(()=>{
    async function fetch() {
      const data = await wallet.viewMethod({
        contractId : MarketplaceContract,
        method : "get_sales_by_nft_contract_id",
        args : {
          nft_contract_id : `${MintContract}`
        }
      })
      setSalesObj(data)
   }
   fetch()
  },[wallet,signedAccountId])
  return (
    <div>Market
      {console.log(salesObj)}
      
    </div>
  )
}
