import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import {CgProfile} from 'react-icons/cg'
import { NearContext } from '@/context';
import NearLogo from '/public/near-logo.svg';

export const Navigation = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel('Login');
    }
  }, [signedAccountId, wallet]);

  return (
    <div className="w-full px-10 border-b border-b-gray-700 py-2 flex justify-between items-center">
      <div className="gap-4 flex">
          <Link href="/" className="hover:underline" >
            Home
          </Link>
          <Link href="/create"  className="hover:underline">
            Create
          </Link>
          <Link href="/market"  className="hover:underline">
            Market
          </Link>
        </div>
        <div className="gap-4 flex justify-between items-center">
          <div className='navbar-nav pt-1'>
            <button className="btn btn-secondary" onClick={action} > {label} </button>
          </div>
          <Link href="/u" >
            <CgProfile />
          </Link>     
        </div>
    </div>
  );
};