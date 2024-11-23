"use client"

import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <>
    <div className='flex justify-between p-5 shadow-md'>
      <Image src={'/logo.svg'} width={150} height={100} alt='Logo'/>
      <button>Get Started</button>
    </div>
    </>
  )
}

export default Header
