import React, { useContext, useState,useEffect } from 'react'
import { MarketplaceContract, MintContract } from '@/config';
import { NearContext } from '@/context';
import { useAllTokens } from './useAllTokens';

export  function useOwnerListings() {
    const {wallet,signedAccountId} = useContext(NearContext)
    const [salesObj,setSalesObj] = useState([])
    const tokenzz = useAllTokens()
    
    useEffect(()=>{
        async function fetch(){

            const approved = await wallet.viewMethod({
                contractId : MarketplaceContract,
                method : "get_sales_by_owner_id",
                args : {
                  account_id : `${signedAccountId}`,
                }
              })
              const metadataMap = tokenzz.reduce((map, token) => {
                map[token.token_id] = token.metadata;
                return map;
            }, {});

            const salesWithMetadata = approved.map(sale => {
                const tokenId = sale.token_id; 
                const metadata = metadataMap[tokenId];
                return {
                    ...sale,
                    metadata,
                };
            });
            
            setSalesObj(salesWithMetadata);
            console.log(tokenzz);
            console.log(salesObj);
            
        }

        if (wallet && signedAccountId && tokenzz.length > 0) {
            fetch();
        }

  
      },[wallet,signedAccountId,tokenzz]) 

      return salesObj
  
}
