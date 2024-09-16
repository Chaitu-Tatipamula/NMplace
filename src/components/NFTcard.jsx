import PropTypes from "prop-types";
import ModelViewer from "./ModelViewer";
import { MdOutlineBackspace, MdOutlineSell } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";

const NFTCardOneInfo = ({ className = "", image, owner, NFT, Eth, onClick, menuOpen, toggleMenu, handleOpenSellModal, handleOpenTransferModal, removeNftListing }) => {
  const is3DModel = image && image.endsWith('.glb');

  return (
    <div onClick={onClick} className={`relative cursor-pointer bg-chocolate-400  shadow-lg rounded-lg overflow-hidden ${className}`} style={{height:'400px', width: '100%' }} >
      {image && (
        is3DModel ? (
          <ModelViewer modelUrl={image} />
        ) : (
          <img
            src={image}
            alt="NFT image"
            loading="lazy"
            className="relative object-cover w-full h-full"
            // style={{ width: '100%' ,height : '100%', objectFit: 'cover' }}
          />
        )
      )}
      <div className="absolute bottom-0 left-0 w-full backdrop-filter backdrop-blur-lg rounded-lg bg-gray-300 box-border flex md:flex-row items-start md:items-center justify-between p-4 gap-4 z-10 border border-solid border-gray-500">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="relative tracking-wide leading-none font-semibold text-lg md:text-xl z-20">
              {NFT}
            </div>
            <div className="relative text-sm md:text-base text-gray-400 z-20">
              {owner}
            </div>
          </div>
          <b className="relative text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300 z-20">
            {Eth}
          </b>
        </div>
        <button onClick={(e) => {e.stopPropagation();  toggleMenu() }} className="cursor-pointer py-2 px-6 bg-transparent rounded-full bg-gradient-to-r from-blue-200 to-orange-400 flex items-center justify-center z-20 border border-solid border-tomato-100 hover:bg-orange-500">
          <div className="relative text-lg font-medium text-white">
            Options
          </div>
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-4 bg-gray-900 w-40 shadow-lg z-10">
            <div className="py-2 text-white">
              <button onClick={handleOpenSellModal} className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-gray-700 transition-colors duration-300">
                <MdOutlineSell /> Sell
              </button>
              <button onClick={handleOpenTransferModal} className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-gray-700 transition-colors duration-300">
                <BiTransfer /> Transfer
              </button>
              <button onClick={removeNftListing} className="flex items-center justify-start gap-2 w-full px-2 py-2 hover:bg-gray-700 transition-colors duration-300">
                <MdOutlineBackspace /> Remove Listing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

NFTCardOneInfo.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  NFT: PropTypes.string.isRequired,
  Eth: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  menuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  handleOpenSellModal: PropTypes.func,
  handleOpenTransferModal: PropTypes.func,
  removeNftListing: PropTypes.func,
}

export default NFTCardOneInfo
