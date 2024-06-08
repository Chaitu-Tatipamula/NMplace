import { MintContract } from "@/config";
import { NearContext } from "@/context";
import { useContext, useEffect, useState } from "react";

export function useTokens() {
    const {wallet,signedAccountId} = useContext(NearContext);
    const [tokens,setTokens] = useState([])

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
                setTokens(data)
            }
            fetch()
    }, [wallet, signedAccountId])

    return tokens

}
