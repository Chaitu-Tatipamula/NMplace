import { MarketplaceContract, MintContract } from "@/config";
import { NearContext } from "@/context";
import { useContext, useEffect, useState } from "react";

export function useTokensWithMetadata() {
    const {wallet,signedAccountId} = useContext(NearContext);
    const [tokens,setTokens] = useState([])
    const [sale, setsale] = useState()

    useEffect(() => {
            async function fetch(){
                const data = await wallet.viewMethod({
                    contractId: MintContract,
                    method: "nft_tokens_for_owner",
                    args: {
                        account_id : `${signedAccountId}`,
                        from_index : 0,
                        limit : 50
                    }
                })

                const getSaleDets = async(tokenId) => {
                    return await wallet.viewMethod({
                        contractId : MarketplaceContract,
                        method : "get_sale",
                        args : {
                            nft_contract_token : `${MintContract}.${tokenId}`
                        }
                    })
                }

                const resArr = await Promise.all(
                    data.map(async (token) => {
                        const res = await getSaleDets(token.token_id);
                        return { token, res };
                    })
                );
                




                setTokens(resArr)
                console.log(resArr);
                                
            }
            fetch()
    }, [wallet, signedAccountId])

    return tokens

}
