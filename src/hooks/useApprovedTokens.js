import React, { useContext, useState,useEffect } from 'react'
import { MarketplaceContract, MintContract } from '@/config';
import { NearContext } from '@/context';
import { useTokens } from './useTokens';

export  function useApprovedTokens() {
    const {wallet,signedAccountId} = useContext(NearContext)
    const [salesObj,setSalesObj] = useState([])
    const tokenzz = useTokens()
    async function isTokenApproved(token){
        const approved = await wallet.viewMethod({
          contractId : MintContract,
          method : "nft_is_approved",
          args : {
              token_id : `${token.token_id}`,
              approved_account_id : `${MarketplaceContract}`,
              approval_id : `${token.approved_account_ids[MarketplaceContract]}`
          }
        })
        // console.log(approved);
        return approved
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
