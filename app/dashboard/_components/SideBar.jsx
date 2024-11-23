"use client"
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { HiOutlineHome, HiOutlineSquare3Stack3D, HiOutlineShieldCheck, HiOutlinePower } from "react-icons/hi2";


function SideBar() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <HiOutlineHome />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiOutlineSquare3Stack3D />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: <HiOutlineShieldCheck />,
            path: '/dashboard/upgrade'
        },
        {
            id: 4,
            name: 'Logout',
            icon: <HiOutlinePower />,
            path: '/dashboard/logout'
        }
    ]

    const path = usePathname();

  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
      <Image src={'/logo.svg'} alt='logo' width={160} height={100}/>
      <hr className='my-5' />

      <ul>
        {Menu.map((item, index) => (
            <Link href={item.path}>
            <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-300 hover:text-black rounded-lg 
            ${item.path==path&&'bg-gray-300 text-black'}`}>
                <div className='text-2xl' >{item.icon}</div>
                <h2>{item.name}</h2>
            </div>
            </Link>
        ))}
      </ul>
    </div>
  )
}

export default SideBar

