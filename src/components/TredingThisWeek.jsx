"use client"
import { MarketplaceContract, MintContract } from '@/config'
import { NearContext } from '@/context'
import React, { useContext, useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { removeNftListing, sellNft, transferNft } from '@/utils/menuOps'
import { MdOutlineSell, MdOutlineBackspace } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { SellModal } from './SellModal'
import { TransferModaal } from './TransferModaal'
import { useRouter } from 'next/navigation'
import ModelViewer from './ModelViewer'
import NFTCardOneInfo  from './NFTcard'
import { ShimmerBadge, ShimmerText, ShimmerThumbnail} from 'react-shimmer-effects';  // Import shimmer effect

export default function UserNFTs() {
    const { signedAccountId, wallet } = useContext(NearContext)
    const [ownedTokens, setOwnedTokens] = useState([])
    const [menuOpen, setMenuOpen] = useState(null)
    const [openSellModal, setOpenSellModal] = useState(false)
    const [openTransferModal, setOpenTransferModal] = useState(false)
    const [tokenId, setTokenId] = useState(null)
    const [saleStatus, setSaleStatus] = useState({})
    const [visibleCount, setVisibleCount] = useState(4);  // Start by displaying 4 cards
    const [loading,setLoading] = useState(true)
    const router = useRouter()

    const handleOpenSellModal = (token) => {
        setOpenSellModal(true)
        setTokenId(token)
    }

    const handleOpenTransferModal = (token) => {
        setOpenTransferModal(true)
        setTokenId(token)
    }

    const handleClose = () => {
        setOpenSellModal(false)
        setOpenTransferModal(false)
    }

    const toggleMenu = (index) => {
        setMenuOpen(menuOpen === index ? null : index)
    }

    const checkSaleStatus = async (tokenId) => {
        const data = await wallet.viewMethod({
            contractId: MarketplaceContract,
            method: "get_sale",
            args: {
                nft_contract_token: `${MintContract}.${tokenId}`
            }
        })
        return data !== null
    }

    useEffect(()=>{
        if(wallet && signedAccountId){
            setLoading(false)
        }
    },[wallet, signedAccountId])

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
            const saleStatusObj = {}
            for (let token of data) {
                const isListed = await checkSaleStatus(token.token_id)
                saleStatusObj[token.token_id] = isListed
            }
            setSaleStatus(saleStatusObj)
            setLoading(false)
        }
        fetch()
    }, [wallet, signedAccountId, ownedTokens])

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 4);  // Show next 4 cards when clicked
    }

    const shimmerStyles = {
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite"
    };

    return (
        <section className="dark relative py-5 mx-5">
            <div className="flex flex-col items-center justify-center px-4 max-w-full h-full text-center text-white">
                <div className="flex flex-col items-center justify-start gap-2 max-w-full">
                    <h1 className="m-0 text-5xl leading-[2.875rem] capitalize font-semibold font-inherit">
                        Owned NFTs
                    </h1>
                    <h3 className="m-0 text-[1.375rem] leading-[160%] capitalize font-normal font-inherit">
                        Checkout your owned NFTs collection.
                    </h3>
                </div>
            </div>

            {/* Shimmer effect for loading state */}
            <div className="nft-carousel flex overflow-x-auto space-x-3 mt-4 ">
                {ownedTokens.length === 0 ? (
                    <div className="flex space-x-3">
                        {[...Array(4)].map((_, index) => (
                            <>
                                <ShimmerThumbnail className={loading ? "bg-transparent" : ""} height={350} width={350} rounded style={loading ? shimmerStyles : {}}/>
                               
                            </>
                        ))}
                    </div>
                ) : (
                    ownedTokens.slice(0, visibleCount).map((token, index) => (
                        <NFTCardOneInfo
                            key={index}
                            token={token}
                            image={token.metadata?.media || ''}
                            NFT={token.metadata?.title || 'No title available'}
                            owner={token.owner_id}
                            isListed={saleStatus[token.token_id] ? 'Listed' : 'Not Listed'}
                            onClick={() => router.push(`/nft/${token.owner_id}/${token.token_id}`)}
                            menuOpen={menuOpen === index}
                            toggleMenu={() => toggleMenu(index)}
                            handleOpenSellModal={() => handleOpenSellModal(`${token.token_id}`)}
                            handleOpenTransferModal={() => handleOpenTransferModal(`${token.token_id}`)}
                            removeNftListing={() => removeNftListing(wallet, MintContract, MarketplaceContract, token.token_id)}
                            handleClose={()=>handleClose()}
                        />
                    ))
                )}
            </div>

            {/* View More button */}
            {visibleCount < ownedTokens.length && (
                <div className="flex justify-center mt-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
                        onClick={handleViewMore}
                    >
                        <span>View More</span>
                        <HiMenu />
                    </button>
                </div>
            )}

            {/* Modal for selling and transferring NFTs */}
            <SellModal open={openSellModal} handleClose={handleClose} tokenId={tokenId} sellNft={sellNft} />
            <TransferModaal open={openTransferModal} handleClose={handleClose} tokenId={tokenId} transferNft={transferNft} />
        </section>
    )
}
