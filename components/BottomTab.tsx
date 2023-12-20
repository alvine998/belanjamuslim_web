import { BookmarkIcon, BuildingStorefrontIcon, HomeIcon, ListBulletIcon, UserIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import React from 'react'

export default function BottomTab() {
    const router = useRouter();
    return (
        <div>
            <div className="fixed bottom-0 left-0 right-0 p-4 z-50 bg-white text-black border flex justify-between items-center">
                <button type='button' className='flex flex-col justify-center items-center' onClick={() => { router.push("/") }}>
                    <HomeIcon className='text-black w-7' />
                    Beranda
                </button>
                <button type='button' className='flex flex-col justify-center items-center' onClick={() => { router.push("/") }}>
                    <ListBulletIcon className='text-black w-7' />
                    Menu
                </button>
                <button type='button' className='flex flex-col justify-center items-center text-[#006738]' onClick={() => { router.push("/") }}>
                    <div className='bg-[#006738] flex justify-center items-center rounded-full w-14 h-14 -mt-10'>
                        <BuildingStorefrontIcon className='text-white w-7' />
                    </div>
                    Mall
                </button>
                <button type='button' className='flex flex-col justify-center items-center' onClick={() => { router.push("/") }}>
                    <BookmarkIcon className='text-black w-7' />
                    Riwayat
                </button>
                <button type='button' className='flex flex-col justify-center items-center' onClick={() => { router.push("/") }}>
                    <UserIcon className='text-black w-7' />
                    Profil
                </button>
            </div>
        </div>
    )
}
