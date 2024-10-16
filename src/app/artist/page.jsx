"use client"
import ArtistInfo from "@/components/Artistinfo";
import { useTokens } from "@/hooks/useTokens";
import { useContext, useState } from "react";
import { MarketplaceContract, MintContract } from '@/config'
import { NearContext } from '@/context'
import { buyNFT, removeNftListing, updatePrice } from '@/utils/menuOps'
import { BiTransfer } from 'react-icons/bi'
import { HiMenu } from 'react-icons/hi'
import { MdOutlineBackspace, MdOutlineSell } from "react-icons/md";
import { UpdatePriceModal } from '../../components/UpdatePriceModal'
import { useRouter } from 'next/navigation'
import { useOwnerListings } from '@/hooks/useOwnerListings'
import ModelViewer from '../../components/ModelViewer'

const ArtistPageDesktop = () => {
  const { wallet, signedAccountId } = useContext(NearContext)
    const salesObj = useOwnerListings()
    const [menuOpen, setMenuOpen] = useState(null); 
    const [openPriceModal, setOpenPriceModal] = useState(false);
    const [tokenId, setTokenId] = useState(null)
    const router = useRouter()
    const [showListed, setShowListed] = useState(false);
    const tokenzz = useTokens()
    const handleTabToggle = () => {
      setShowListed(!showListed);
    };

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
              className="flex flex-col h-full w-full rounded-xl bg-chocolate-300 border border-chocolate-200 cursor-pointer overflow-hidden"
              onClick={() => router.push(`/nft/${token.owner_id}/${token.token_id}`)}
                  style={{height:'550px', width : '100%' }}
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
    <div className="w-full relative bg-black flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1.375rem] text-caption-label-text font-basebody-work-sans">
      <section className="self-stretch flex flex-col items-center justify-start max-w-full">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/placeholder.png"
        />
        <div className="w-[68.125rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full z-[1] mt-[-4.375rem]">
          <div className="rounded-xl flex flex-row items-start justify-start border-[2px] border-solid border-chocolate-200">
            <img
              className="h-[7.5rem] w-[7.5rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/asset1.png"
            />
          </div>
        </div>
      </section>
      <ArtistInfo />
      <div className="w-full flex flex-col gap-2">
        <div className="w-full border-t border-background-secondary"></div>
        <div className="w-full flex justify-center px-5">
          <div className="flex flex-wrap justify-start w-full max-w-[65rem]">
            <button 
              className={`flex-1 flex flex-col items-center py-3 px-5 border-b-2 border-caption-label-text min-w-[8.75rem] ${!showListed ? 'bg-gray-800 text-white' : 'text-gray-500'}`}
              disabled={!showListed}
              onClick={handleTabToggle}
            >
              <h3 className="text-white font-semibold capitalize text-lg">
                Owned
              </h3>
              <div className="bg-caption-label-text rounded-xl py-1 px-3">
                <span className="text-white text-sm">302</span>
              </div>
            </button>
            <button 
              className={`flex-1 flex flex-col items-center py-3 px-5 min-w-[8.75rem] ${showListed ? 'bg-gray-800 text-white' : 'text-gray-500'}`}
              disabled={showListed}
              onClick={handleTabToggle}
            >
              <h3 className="text-white font-semibold capitalize text-lg">
                Listed
              </h3>
              <div className="bg-background-secondary rounded-xl py-1 px-3">
                <span className="text-white text-sm">67</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    
      <section className="flex flex-col items-center justify-start py-20 px-5 gap-7 bg-[url('/nftcardsection.png')] bg-cover bg-no-repeat bg-center w-full text-left text-lg text-white font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Brow i think NFT card ka alag componenets hai so please use that insted of creating new componenets*/}
          {
            showListed ?
            salesObj && salesObj.map((token, index) => (
                <div key={index} >
                    {token.metadata && renderData(token.metadata, token, index)} 
                </div>
            ))
            
             :
             tokenzz && tokenzz.map((token, index) => (
                <div key={index} >
                    {token.metadata && renderData(token.metadata, token, index)} 
                </div>
            ))
                
          }
        </div>
      </section>
      <UpdatePriceModal open={openPriceModal} handleClose={handleClose} tokenId={tokenId} updatePrice={updatePrice} />

    </div>
  );
};

export default ArtistPageDesktop;
