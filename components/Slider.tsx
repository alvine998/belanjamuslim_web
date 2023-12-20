import { Transition } from '@headlessui/react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
    isSliding: any,
    setIsSliding: any
}

export default function Slider(props: Props) {
    const { isSliding, setIsSliding } = props
    return (
        <div>
            <Transition
                show={isSliding?.open}
                enter='transition-all duration-300'
                enterFrom='-ml-64'
                enterTo='ml-0'
                leave='transition-all duration-300'
                leaveFrom='ml-0'
                leaveTo='-ml-64'
            >
                <div className='bg-white h-[100vh] w-full p-5'>
                    <button onClick={() => { setIsSliding({ ...isSliding, open: false }) }} className='flex gap-5 items-center'>
                        <ChevronLeftIcon className='text-black w-8' />
                        {isSliding?.key == "inbox" ? "Inbox" : isSliding?.key == "notification" ? "Pemberitahuan" : "Keranjang"}
                    </button>

                    <div className='flex justify-center items-center mt-20'>
                        <p className='text-center'>Belum ada data</p>
                    </div>
                </div>
            </Transition>
        </div>
    )
}
