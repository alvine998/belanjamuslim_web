import Input from '@/components/Input'
import React from 'react'
import { BellIcon, EnvelopeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function Header() {
    return (
        <div>
            {/* Header Search */}
            <div className='flex justify-between items-center gap-5'>
                <div className='w-full'>
                    <Input placeholder='Cari Di Belanja Muslim' type='search' />
                </div>
                <div className='flex gap-2 w-1/2'>
                    <button type='button' onClick={() => { alert("Belum tersedia") }}>
                        <EnvelopeIcon className='text-white text-lg w-7' />
                    </button>
                    <button type='button' onClick={() => { alert("Belum tersedia") }}>
                        <BellIcon className='text-white text-lg w-7' />
                    </button>
                    <button type='button' onClick={() => { alert("Belum tersedia") }}>
                        <ShoppingBagIcon className='text-white text-lg w-7' />
                    </button>
                </div>
            </div>
        </div>
    )
}
