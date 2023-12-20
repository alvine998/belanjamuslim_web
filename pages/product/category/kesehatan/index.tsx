import Input from '@/components/Input'
import React, { useEffect, useState } from 'react'
import { BellIcon, BookmarkIcon, BuildingStorefrontIcon, EnvelopeIcon, HandThumbUpIcon, HomeIcon, ListBulletIcon, ShoppingBagIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic'
import { baby_cloth, gadget, healthy_foods, makeup_kit, medical_kit, men_cloth, mom_baby, skin_beauty, watch, women_cloth } from '@/assets'
import Image from 'next/image'
import ProductBox from '@/components/ProductBox'
import BottomTab from '@/components/BottomTab'
import Slider from '@/components/Slider'
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

export default function Home() {
    const router = useRouter();
    const [show, setShow] = useState<boolean>(false)
    const [isSliding, setIsSliding] = useState<any>({ open: false, key: '', data: null })

    useEffect(() => {
        setShow(true)
    }, [])
    return (
        <div>
            <Slider isSliding={isSliding} setIsSliding={setIsSliding} />
            <div className={`bg-[#006738] w-full h-[70px] p-2 duration-200 transition-all ${isSliding?.open ? '' : 'fixed top-0 z-50'}`}>
                <Header setOpen={setIsSliding} />
            </div>

            <div className='mt-20'>
                <div className='px-4'>
                    <h1 className='text-lg font-semibold'>Product / Kategori / <span className='text-[#006738]'>Kesehatan</span></h1>
                    <div className='bg-green-200 w-full h-auto p-2 pl-5 mt-4 rounded-lg'>
                        <p>Terdapat 4 Produk</p>
                    </div>
                </div>
                <div className='flex flex-wrap gap-2 justify-center items-center p-3 mb-36'>
                    <div className='w-[170px] mt-2'>
                        <ProductBox
                            image='https://firebasestorage.googleapis.com/v0/b/basicchat-c83b5.appspot.com/o/WhatsApp%20Image%202023-12-13%20at%2016.47.45.jpeg?alt=media&token=c4a105a3-8c9e-44e1-ba71-258efaafd384'
                            name='Malino Series Dhiyaa Hand Soap'
                            price={39000}
                            sold={10}
                            seller='Mifhial Gusti'
                        />
                    </div>
                    <div className='w-[170px] mt-2'>
                        <ProductBox
                            mark='recommended'
                            image='https://firebasestorage.googleapis.com/v0/b/basicchat-c83b5.appspot.com/o/WhatsApp%20Image%202023-12-13%20at%2016.47.45.jpeg?alt=media&token=c4a105a3-8c9e-44e1-ba71-258efaafd384'
                            name='Malino Series Dhiyaa Hand Soap'
                            price={39000}
                            sold={10}
                            seller='Mifhial Gusti'
                        />
                    </div>
                    <div className='w-[170px] mt-2'>
                        <ProductBox
                            image='https://firebasestorage.googleapis.com/v0/b/basicchat-c83b5.appspot.com/o/WhatsApp%20Image%202023-12-13%20at%2016.47.45.jpeg?alt=media&token=c4a105a3-8c9e-44e1-ba71-258efaafd384'
                            name='Malino Series Dhiyaa Hand Soap'
                            price={39000}
                            sold={10}
                            seller='Mifhial Gusti'
                        />
                    </div>
                    <div className='w-[170px] mt-2'>
                        <ProductBox
                            mark='recommended'
                            image='https://firebasestorage.googleapis.com/v0/b/basicchat-c83b5.appspot.com/o/WhatsApp%20Image%202023-12-13%20at%2016.47.45.jpeg?alt=media&token=c4a105a3-8c9e-44e1-ba71-258efaafd384'
                            name='Malino Series Dhiyaa Hand Soap'
                            price={39000}
                            sold={10}
                            seller='Mifhial Gusti'
                        />
                    </div>
                </div>
            </div>


            <div>
                <BottomTab />
            </div>
        </div>
    )
}
