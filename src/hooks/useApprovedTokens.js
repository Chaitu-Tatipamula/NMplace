import React, { useContext, useState,useEffect } from 'react'
import { MarketplaceContract, MintContract } from '@/config';
import { NearContext } from '@/context';
import { useTokens } from './useTokens';
import { useAllTokens } from './useAllTokens';

export  function useApprovedTokens() {
    const {wallet,signedAccountId} = useContext(NearContext)
    const [salesObj,setSalesObj] = useState([])
    const tokenzz = useAllTokens()
    async function isTokenApproved(token){
        const approved = await wallet.viewMethod({
          contractId : MarketplaceContract,
          method : "get_sale",
          args : {
              nft_contract_token : `${MintContract}.${token.token_id}`,
          }
        })
        return approved != null
    }
    useEffect(()=>{
        async function fetch(){
            const approvedTokens = []
            for(let token of tokenzz){
                const approved =await isTokenApproved(token)
                if(approved){
                    approvedTokens.push(token)
                }
            }
            setSalesObj(approvedTokens)
        }
        fetch()
  
      },[wallet,signedAccountId,tokenzz]) 

      return salesObj
  
}
