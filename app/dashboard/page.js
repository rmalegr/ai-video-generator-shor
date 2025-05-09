"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState'
import Link from 'next/link'

const Dashboard = () => {
  const [videolist, setVideoList] = useState([])
  return (
    <div>
      <div className='flex justify-between items-center mr-5 '>
        <h2 className='font-bold text-2xl text-purple-400 '>Dashboard </h2>
        <Button className='bg-purple-500 text-white mt-2' >
          <Link href={"/dashboard/create-new"}> Create New Short Video</Link>  
         </Button>
      </div>
      {/* EmptyState */}
      {videolist?.length === 0 &&
        <div>
          <EmptyState />
        </div>
      }
    </div>
  )
}

export default Dashboard