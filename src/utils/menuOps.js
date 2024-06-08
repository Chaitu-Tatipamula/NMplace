import { utils } from "near-api-js";

export async function transferNft(wallet,MintContract,tokenId,receiverId){
    const tx = await wallet.callMethod({
        contractId : MintContract,
        method : "nft_transfer",
        args : {
            receiver_id : `${receiverId}`,
            token_id : `${tokenId}`,
            
        },
        deposit : `${utils.format.parseNearAmount("0.000000000000000000000001")}` 
    })
}

export async function removeNftListing(wallet,MintContract,MarketContract,tokenId){
    const tx = await wallet.callMethod({
        contractId : MarketContract,
        method : "remove_sale",
        args : {
            nft_contract_id : `${MintContract}`,
            token_id : `${tokenId}`,
        },
        deposit : `${utils.format.parseNearAmount("0.000000000000000000000001")}` 
    })
}

export async function sellNft(wallet,MintContract,MarketplaceContract,tokenId){
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
    
}