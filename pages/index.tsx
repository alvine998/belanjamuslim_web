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
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    setShow(true)
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      <div className={`bg-[#006738] w-full h-[160px] ${isScrolled ? 'p-0 duration-200 transition-all' : 'p-4'}`}>
        <div className={isScrolled ? 'fixed top-0 bg-[#006738] w-full h-[70px] p-2 duration-200 transition-all z-50' : ''}>
          <Header />
        </div>
        <div className='flex gap-2 items-center w-full'>
          <button>
            <UserCircleIcon className='text-white w-10' />
          </button>
          <div>
            <h5 className='text-lg font-bold text-white'>Hai, Pengunjung!</h5>
            <p className='text-white text-sm' >Akses semua fitur yuk~</p>
          </div>
          <button className='bg-white p-2 rounded-sm ml-4 w-1/3'>
            Masuk
          </button>
        </div>
      </div>

      <div className='mb-36'>
        <div className='bg-white w-full h-auto p-4 rounded-3xl -mt-5'>
          <div className='mt-2'>
            {
              show ?
                <OwlCarousel autoplay className="owl-theme" loop margin={1} responsive={{ 0: { items: 1, margin: 5 }, 768: { items: 2, margin: 10 }, 1024: { items: 3, margin: 20 } }}>
                  <div className='item'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/basicchat-c83b5.appspot.com/o/WhatsApp%20Image%202023-12-14%20at%2017.03.03.jpeg?alt=media&token=361ab48c-73f9-4673-94fa-027a2c046d7b"
                      alt="items" className='w-full h-[150px] rounded-lg' />
                  </div>
                  <div className='item'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/basicchat-c83b5.appspot.com/o/WhatsApp%20Image%202023-12-14%20at%2017.03.03.jpeg?alt=media&token=361ab48c-73f9-4673-94fa-027a2c046d7b"
                      alt="items" className='w-full h-[150px] rounded-lg' />
                  </div>
                  <div className='item'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/basicchat-c83b5.appspot.com/o/WhatsApp%20Image%202023-12-14%20at%2017.03.03.jpeg?alt=media&token=361ab48c-73f9-4673-94fa-027a2c046d7b"
                      alt="items" className='w-full h-[150px] rounded-lg' />
                  </div>
                </OwlCarousel> : ""
            }
          </div>
          <div className='bg-white shadow-lg mt-2 p-2 rounded-md flex flex-col justify-center items-center'>
            <div className='flex justify-center gap-2 items-center'>
              <button onClick={() => { router.push('product/category/fashion-pria') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={men_cloth} alt="icon-nav" width={35} height={35} />
                Fashion Pria
              </button>
              <button onClick={() => { router.push('product/category/busana-wanita') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={women_cloth} alt="icon-nav" width={35} height={35} />
                Busana Wanita
              </button>
              <button onClick={() => { router.push('product/category/perhiasan-aksesoris') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={makeup_kit} alt="icon-nav" width={35} height={35} />
                Perhiasan Aksesoris
              </button>
              <button onClick={() => { router.push('product/category/produk-elektronik') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={gadget} alt="icon-nav" width={35} height={35} />
                Produk Elektronik
              </button>
              <button onClick={() => { router.push('product/category/pakaian-bayi') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={baby_cloth} alt="icon-nav" width={35} height={35} />
                Pakaian Bayi
              </button>
            </div>

            <div className='flex justify-center gap-2 items-center mt-4'>
              <button onClick={() => { router.push('product/category/kesehatan') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={medical_kit} alt="icon-nav" width={35} height={35} />
                Kesehatan
              </button>
              <button onClick={() => { router.push('product/category/ibu-dan-bayi') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={mom_baby} alt="icon-nav" width={35} height={35} />
                Ibu dan Bayi
              </button>
              <button onClick={() => { router.push('product/category/salon-kecantikan') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={skin_beauty} alt="icon-nav" width={35} height={35} />
                Salon Kecantikan
              </button>
              <button onClick={() => { router.push('product/category/jam-tangan') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={watch} alt="icon-nav" width={35} height={35} />
                Jam Tangan
              </button>
              <button onClick={() => { router.push('product/category/makanan-sehat') }} className='flex flex-col justify-center items-center text-xs'>
                <Image src={healthy_foods} alt="icon-nav" width={35} height={35} />
                Makanan Sehat
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className='p-5'>
          <h5 className='font-bold text-lg'>Spesial Hari Ini</h5>
          <div className='my-2 flex justify-center items-center gap-2'>
            <img src="https://dummyimage.com/150" alt="dummy-promo" className='w-full h-auto' />
            <img src="https://dummyimage.com/150" alt="dummy-promo" className='w-full h-auto' />
          </div>
          <div className='my-2 flex justify-center items-center gap-2'>
            <img src="https://dummyimage.com/150" alt="dummy-promo" className='w-full h-auto' />
            <img src="https://dummyimage.com/150" alt="dummy-promo" className='w-full h-auto' />
          </div>
        </div>

        <div className='p-5'>
          <h5 className='font-bold text-lg'>Flash Sale 12.12</h5>
          <hr />
          <div className='mt-2'>
            {
              show ?
                <OwlCarousel autoplay className="owl-theme" dots={false} loop margin={1} responsive={{ 0: { items: 2, margin: 5 }, 768: { items: 4, margin: 10 }, 1024: { items: 6, margin: 20 } }}>
                  <ProductBox
                    name='Sanda M-01 Pro'
                    image='https://ae01.alicdn.com/kf/He6ea7b97870346c6aac2f85e26c51943r.jpg_640x640Q90.jpg_.webp'
                    price={250000}
                    sold={25}
                    mark='flash_sale'
                    discount={10}
                    seller='Yoou'
                  />
                </OwlCarousel> : ""
            }
          </div>
        </div>

        <div className='p-5'>
          <h5 className='font-bold text-lg'>Produk Terlaris</h5>
          <hr />
          <div className='mt-2'>
            {
              show ?
                <OwlCarousel autoplay className="owl-theme" dots={false} loop margin={1} responsive={{ 0: { items: 2, margin: 5 }, 768: { items: 4, margin: 10 }, 1024: { items: 6, margin: 20 } }}>
                  <ProductBox
                    mark='recommended'
                    image='https://firebasestorage.googleapis.com/v0/b/basicchat-c83b5.appspot.com/o/WhatsApp%20Image%202023-12-13%20at%2016.47.45.jpeg?alt=media&token=c4a105a3-8c9e-44e1-ba71-258efaafd384'
                    name='Malino Series Dhiyaa Hand Soap'
                    price={39000}
                    sold={10}
                    seller='Paradigma'
                  />
                </OwlCarousel> : ""
            }
          </div>
        </div>

        <div className='p-5'>
          <button className='border bg-white rounded-lg w-full p-2 font-semibold shadow-lg'>
            Lihat Lainnya
          </button>
        </div>

      </div>
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
