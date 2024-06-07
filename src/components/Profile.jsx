"use client"
import React, { useContext, useState } from 'react'
import UserNFTs from './UserNFTs'
import ProfileHeader from './ProfileHeader';
import { NearContext } from '@/context';
import { useTokens } from '@/hooks/useTokens';
import { useApprovedTokens } from '@/hooks/useApprovedTokens';

export default function Profile() {
  const {signedAccountId} = useContext(NearContext)
  const tokenzz = useTokens()
  const listedTokens = useApprovedTokens()
  const [profileData, setProfileData] = useState({
    address: signedAccountId,
    tokensCount: 0,
    listedTokensCount: listedTokens.length, // Example data, replace with actual data
    transactionsCount: 24, // Example data, replace with actual data
    lastActivity: '1 day ago', // Example data, replace with actual data
  });
  return (
    <div>
        <ProfileHeader
          address={profileData.address}
          tokensCount={profileData.tokensCount = tokenzz.length}
          listedTokensCount={profileData.listedTokensCount = listedTokens.length}
          transactionsCount={profileData.transactionsCount}
          lastActivity={profileData.lastActivity}
      />
        <UserNFTs/>
    </div>
  )
}
