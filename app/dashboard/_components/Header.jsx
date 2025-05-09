import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-md' >
        <div className='flex gap-3 items-center'>
            <Image src={'/loguito.jpeg'} alt='logo' width={100} height={100} className='w-20 h-20 object-contain' />
            <h1 className='text-xl font-bold'>AI Short Video</h1>
        </div>
        <div className='flex gap-3 items-center'>
            <Button className={`hover:bg-indigo-600 hover:text-white rounded-md cursor-pointer bg-red-600`}>Dashboard</Button>
            <UserButton />
        </div>
    </div>
  )
}

export default Header