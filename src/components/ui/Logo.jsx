import Link from 'next/link'
import React from 'react'
import { IoBagSharp } from 'react-icons/io5'

export const Logo = () => {
    return (
        <Link href="/" className="text-2xl flex items-center gap-1 font-bold text-gray-900 dark:text-white">
            <IoBagSharp className="text-pink-500" />
            Shoppy
        </Link>
    )
}
