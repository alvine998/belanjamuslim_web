import React, { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    isRequired?: boolean
}

export default function Input(props: Props) {
    const { label, isRequired } = props
    return (
        <div className='my-2 w-full'>
            <label className='text-gray-500' htmlFor={label}>{label || ""}{isRequired ? <strong className='text-red-500 text-xs'>*</strong> : ""}</label>
            <input {...props} id={label} className='focus:outline-none w-full ring-1 ring-gray-400 p-1 rounded-md pl-2 h-10' />
        </div>
    )
}