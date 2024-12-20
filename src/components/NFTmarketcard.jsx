"use client"
import { MarketplaceContract, MintContract } from '@/config'
import { NearContext } from '@/context'
import { useApprovedTokens } from '@/hooks/useApprovedTokens'
import { buyNFT, removeNftListing, updatePrice } from '@/utils/menuOps'
import { useContext, useState } from 'react'
import { BiTransfer } from 'react-icons/bi'
import { HiMenu } from 'react-icons/hi'
import { MdOutlineBackspace, MdOutlineSell } from "react-icons/md";
import { UpdatePriceModal } from './UpdatePriceModal'
import { useRouter } from 'next/navigation'
import ModelViewer from './ModelViewer'

export function Nftmarketcard({ token, metadata, index, signedAccountId, wallet }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(null); 
  const [openPriceModal, setOpenPriceModal] = useState(false);
  const [tokenId, setTokenId] = useState(null);

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

  const { title, description, media } = metadata;
  const is3DModel = media && media.endsWith('.glb');

  return (
    <div className="flex h-auto w-full md:w-80 relative">
    <div className="rounded-xl bg-chocolate-500 box-border flex flex-col items-center justify-start max-w-full border-[1px] border-solid border-chocolate-200" style={{height:'500px', width: '100%' }}  >
      <div className="relative self-stretch flex-1 rounded-t-xl rounded-b-none flex flex-col items-center justify-center overflow-hidden" style={{ height: '70%' }}>
        {media && (
          is3DModel ? (
            <ModelViewer modelUrl={media} />
          ) : (
            <img alt={title || 'NFT Image'} src={media} className="w-full h-full object-cover" style={{ width: '100%',height : '100%', objectFit: 'cover' }} />
          )
        )}
        <div className="absolute flex top-2 right-2  space-x-2 text-sm ">
          {token.owner_id !== signedAccountId ? (            
            <button onClick={(e) => { e.stopPropagation(); buyNFT(wallet, MintContract, MarketplaceContract, token.token_id, token.sale_conditions) }} className="bg-chocolate-250 text-white px-2 py-1 rounded-xl hover:bg-chocolate-200" >
              Buy
            </button>
          ) : (
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu(index);
                }}
                className="bg-chocolate-250 text-white px-2 py-1 hover:bg-chocolate-200 rounded "
              >
                <HiMenu />
                {menuOpen === index && (
                  <div
                    className="absolute top-full right-0 mt-4 bg-chocolate-250 shadow-lg rounded-xl z-10 box-border border-[1px] border-solid border-chocolate-200 backdrop-filter backdrop-blur-lg"
                    style={{ transform: 'translateX(-0.5rem)' }}
                  >
                    <div className=" text-white">
                      <button
                        onClick={() =>
                          removeNftListing(wallet, MintContract, MarketplaceContract, token.token_id)
                        }
                        className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-chocolate-200 transition-colors duration-300 rounded-t-xl"
                      >
                        <MdOutlineBackspace /> Remove Listing
                      </button>
                      <button
                        onClick={() => handleOpenPriceModal(`${token.token_id}`)}
                        className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-chocolate-200 transition-colors duration-300 rounded-b-xl"
                      >
                        <BiTransfer /> Update Price
                      </button>
                    </div>
                  </div>
                )}
              </button>

          )}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-4 px-6 pb-4 gap-4 overflow-hidden" style={{ height: '30%' }}>
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <h3 className="m-0 self-stretch relative text-xl leading-6 capitalize font-semibold font-inherit mq450:text-lg mq450:leading-5">
              {title || 'Distant Galaxy'}
            </h3>
            <div className="self-stretch flex flex-row items-start justify-start gap-3 text-base">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-6 w-6 rounded-full relative object-cover"
                  loading="lazy"
                  alt={title || 'NFT Thumbnail'}
                  src={media}
                />
              </div>
              <div className="flex-1 relative leading-6">{token.owner_id}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between text-sm text-caption-label-text">
            <div className="flex-1 flex flex-col items-start justify-start gap-1">
              <div className="self-stretch relative leading-tight">Price</div>
              <div className="self-stretch relative text-lg leading-6 text-croc-primary-white">
                {token.sale_conditions} NEAR
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <UpdatePriceModal open={openPriceModal} handleClose={handleClose} tokenId={tokenId} updatePrice={updatePrice} />
    </div>
  );
}
