'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Image from 'next/image';


const UserInfo = () => {
    const { user, isLoading, error } = useUser();
    console.log('user', user);

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {user && (
                <div className='flex items-center gap-2 border-t border-t-black/50 h-20 px-2'>
                    <div className='min-w-[50px]'>
                        <Image
                            src={user?.picture || '/default-picture.png'}
                            alt={user?.name || 'User'}
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                    </div>
                    <div className='flex-1'>
                        <div className=' font-bold'>
                            {user.name}
                        </div>
                        <div>
                            <a href='/api/auth/logout'>log out</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
 
export default UserInfo;