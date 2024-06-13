"use client"
import React, { useContext, useState } from 'react'
import UserNFTs from './UserNFTs'
import ProfileHeader from './ProfileHeader';
import { NearContext } from '@/context';
import { useTokens } from '@/hooks/useTokens';
import { useApprovedTokens } from '@/hooks/useApprovedTokens';
import { useOwnerListings } from '@/hooks/useOwnerListings';
import Ownerlistings from './OwnedListings';

export default function Profile() {
  const {signedAccountId} = useContext(NearContext)
  const tokenzz = useTokens()
  const listedTokens = useOwnerListings()
  const [showListed, setShowListed] = useState(false); // Default to showing listed NFTs initially

  const handleTabToggle = () => {
    setShowListed(!showListed);
  };
  
  const [profileData, setProfileData] = useState({
    address: signedAccountId,
    tokensCount: tokenzz.length,
    listedTokensCount: listedTokens.length, // Example data, replace with actual data
    transactionsCount: 24, // Example data, replace with actual data
    lastActivity: '1 day ago', // Example data, replace with actual data
  });
  return (
    <div className="profile-container p-4 rounded shadow-md">
      <ProfileHeader
        address={profileData.address}
        tokensCount={profileData.tokensCount}
        listedTokensCount={profileData.listedTokensCount}
        transactionsCount={profileData.transactionsCount}
        lastActivity={profileData.lastActivity}
      />
      <div className="flex border-b border-gray-800 p-2">
        <button
          className={`px-4 py-2 font-medium rounded-t-md hover:bg-gray-700 ${!showListed ? 'bg-gray-800 text-white' : 'text-gray-500'}`}
          disabled={!showListed}
          onClick={handleTabToggle}
        >
          Owned
        </button>
        <button
          className={`px-4 py-2 font-medium rounded-t-md hover:bg-gray-700 ${showListed ? 'bg-gray-800 text-white' : 'text-gray-500'}`}
          disabled={showListed}
          onClick={handleTabToggle}
        >
          Listed
        </button>
      </div>
      <div className="p-4">
        {showListed ? <Ownerlistings /> : <UserNFTs />}
      </div>
    </div>
  )
}
