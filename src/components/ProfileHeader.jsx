"use client"
import React from 'react'

export default function ProfileHeader({ address, tokensCount, listedTokensCount, transactionsCount, lastActivity }) {
    return (
        <div className="bg-gray-900 p-5 rounded-lg shadow-lg text-white">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center">
              {/* Profile Picture Placeholder */}
              <div className="text-3xl">👤</div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{address}</h2>
              <a href={`https://explorer.testnet.near.org/accounts/${address}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {address}
              </a>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-center">
            <div>
              {console.log(tokensCount)}
              <p className="text-lg font-semibold">{tokensCount}</p>
              <p className="text-sm text-gray-400">Tokens</p>
            </div>
            <div>
              <p className="text-lg font-semibold">{listedTokensCount}</p>
              <p className="text-sm text-gray-400">Listed Tokens</p>
            </div>
            <div>
              <p className="text-lg font-semibold">-</p>
              <p className="text-sm text-gray-400">Bought</p>
            </div>
            <div>
              <p className="text-lg font-semibold">-</p>
              <p className="text-sm text-gray-400">Sales</p>
            </div>
            <div>
              <p className="text-lg font-semibold">{transactionsCount}</p>
              <p className="text-sm text-gray-400">Transactions</p>
            </div>
            <div>
              <p className="text-lg font-semibold">{lastActivity}</p>
              <p className="text-sm text-gray-400">Last Activity</p>
            </div>
          </div>
        </div>
      );
}
