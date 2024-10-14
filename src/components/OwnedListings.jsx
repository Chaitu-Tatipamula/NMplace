"use client"
import { MarketplaceContract, MintContract } from '@/config'
import { NearContext } from '@/context'
import { buyNFT, removeNftListing, updatePrice } from '@/utils/menuOps'
import { useContext, useState } from 'react'
import { BiTransfer } from 'react-icons/bi'
import { HiMenu } from 'react-icons/hi'
import { MdOutlineBackspace, MdOutlineSell } from "react-icons/md";
import { UpdatePriceModal } from './UpdatePriceModal'
import { useRouter } from 'next/navigation'
import { useOwnerListings } from '@/hooks/useOwnerListings'
import ModelViewer from './ModelViewer'

export default function OwnerListings() {
    const { wallet, signedAccountId } = useContext(NearContext)
    const salesObj = useOwnerListings()
    const [menuOpen, setMenuOpen] = useState(null); 
    const [openPriceModal, setOpenPriceModal] = useState(false);
    const [tokenId, setTokenId] = useState(null)
    const router = useRouter()

    const handleOpenPriceModal = (token) => {
        setOpenPriceModal(true)
        setTokenId(token)
    };

    const handleClose = () => {
        setOpenPriceModal(false)
    };

    const toggleMenu = (index) => {
        setMenuOpen(menuOpen === index ? null : index);
    };

    function renderData(metadata, token, index) {
        const { title, media } = metadata;
        const is3DModel = media && media.endsWith('.glb');
        
        return (
            <div 
                key={index} 
                className="flex flex-col h-auto w-auto rounded-xl bg-chocolate-300 border border-chocolate-200 cursor-pointer overflow-hidden"
                onClick={() => router.push(`/nft/${token.owner_id}/${token.token_id}`)}
                    style={{height:'400px', width : '100%' }}
                >
                <div 
                    className="relative w-full h-2/3 overflow-hidden rounded-t-xl"
                >
                    
                    {media && (
                        is3DModel ? (
                            <ModelViewer modelUrl={media}  />
                        ) : (
                            <img src={media} alt='NFT Media' className="relative w-full h-full object-cover rounded-t-xl " />
                        )
                    )}
                    <div className="absolute top-2 right-2 flex space-x-2">
                        {token.owner_id !== signedAccountId && (
                            <button 
                                onClick={(e) => { e.stopPropagation(); buyNFT(wallet, MintContract, MarketplaceContract, token.token_id, token.sale_conditions) }} 
                                className="bg-gray-950 text-white px-2 py-1 rounded hover:bg-gray-900"
                            >
                                Buy
                            </button>
                        )}
                        <button 
                            onClick={(e) => { e.stopPropagation(); toggleMenu(index) }} 
                            className="bg-gray-950 text-white px-2 py-1 rounded hover:bg-gray-900"
                        >
                            <HiMenu />
                            {menuOpen === index && (
                                <div className="absolute right-0 mt-4 bg-gray-900 w-40 shadow-lg z-10">
                                    <div className="py-2 text-white">
                                        {token.owner_id !== signedAccountId && (
                                            <button 
                                                onClick={() => buyNFT(wallet, MintContract, MarketplaceContract, token.token_id, token.sale_conditions)} 
                                                className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-gray-700"
                                            >
                                                <MdOutlineSell /> Buy
                                            </button>
                                        )}
                                        {token.owner_id === signedAccountId && (
                                            <>
                                                <button 
                                                    onClick={() => removeNftListing(wallet, MintContract, MarketplaceContract, token.token_id)} 
                                                    className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-gray-700"
                                                >
                                                    <MdOutlineBackspace /> Remove Listing
                                                </button>
                                                <button 
                                                    onClick={() => handleOpenPriceModal(token.token_id)} 
                                                    className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-gray-700"
                                                >
                                                    <BiTransfer /> Update Price
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
                <div className="w-full p-5 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-semibold capitalize">{title || "Distant Galaxy"}</h3>
                        <div className="flex items-center gap-3 text-sm font-mono">
                            <span>{token.owner_id}</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm font-mono text-caption-label-text">
                        <div>
                            <p>Price</p>
                            <p className="text-white text-base">{token.sale_conditions || "1.63 ETH"}</p>
                        </div>
                        <div className="text-right">
                            <p>Highest Bid</p>
                            <p className="text-white text-base">0.33 wETH</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-5 flex w-full">
            {/* <div className='flex flex-col items-center justify-start h-auto relative w-full'> */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"> */}
                    {salesObj && salesObj.map((token, index) => (
                        <div key={index} >
                            {token.metadata && renderData(token.metadata, token, index)} 
                        </div>
                    ))}
                {/* </div> */}
            {/* </div> */}
            <UpdatePriceModal open={openPriceModal} handleClose={handleClose} tokenId={tokenId} updatePrice={updatePrice} />
        </div>
    )
}
