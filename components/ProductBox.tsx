import { formatCurrency } from '@/utils'
import { BuildingStorefrontIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
    mark?: 'promo' | 'recommended' | 'flash_sale',
    name: string,
    price: number,
    sold: number,
    image: string,
    discount?: number,
    seller: string
}
export default function ProductBox(props: Props) {

    let discount_price = props.price - (props.price * ((props?.discount || 0) / 100))
    return (
        <div>
            <div className='item relative'>
                <img src={props.image} alt="items" className='w-full h-[150px] rounded-lg' />
                {
                    props.mark == 'recommended' ?
                        <div className='bg-[#006738] w-[40px] h-[40px] rounded-lg top-0 right-0 absolute flex justify-center items-center'>
                            <HandThumbUpIcon className='text-white w-7' />
                        </div> : ""
                }
                {
                    props.mark == 'promo' ?
                        <div className='bg-[#006738] w-[40px] h-[40px] rounded-lg top-0 right-0 absolute flex justify-center items-center'>
                            <p className='text-white font-semibold'>{props.discount}%</p>
                        </div> : ""
                }

                <div>
                    <h5 className='text-md'>{props.name}</h5>
                    <button className='flex gap-2 items-center mb-2'>
                        <BuildingStorefrontIcon className='text-black w-4' />
                        <h5 className='text-sm font-semibold'>{props.seller}</h5>
                    </button>
                    {
                        props.mark == 'flash_sale' || props.mark == 'promo' ?
                            <h5 className=''>
                                <strong className='line-through'>{formatCurrency(props.price)}</strong><br /><strong className='text-red-500'>{formatCurrency(discount_price)}</strong>
                            </h5> :
                            <h5 className=''>
                                <strong>{formatCurrency(props.price)}</strong>
                            </h5>
                    }

                    {
                        props.mark == 'flash_sale' ?
                            <div className='bg-red-700 w-full p-1 my-1 flex justify-center items-center rounded-full'>
                                <p className='text-white text-sm'>Terjual {props.sold}</p>
                            </div> :
                            <h5 className='text-xs'>Terjual {props.sold}</h5>

                    }
                </div>
                <div>
                    <button className='bg-orange-500 w-full h-[30px] mt-2 text-white rounded-lg'>
                        Beli Sekarang
                    </button>
                    <button className='bg-green-700 w-full text-sm h-[30px] mt-1 text-white rounded-lg'>
                        Simpan Keranjang
                    </button>
                </div>
            </div>
        </div>
    )
}
