"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Hand, LayoutIcon, Settings, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SideNav() {
  const { user } = useKindeBrowserClient();
  const menulist = [
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutIcon,
      path: '/dashboard'
    },
    {
      id: 2,
      name: 'Employee',
      icon: User,
      path: '/dashboard/employee'
    },
    {
      id: 3,
      name: 'Attendance',
      icon: Hand,
      path: '/dashboard/attendance'
    },
    {
      id: 4,
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/setting'
    }

  ]

  return (
    <div className='border shadow-md h-screen p-5'>
      <Image src={'./logo.svg'} width={180} height={50} alt="logo" />
      <hr className='my-5'></hr>

      {menulist.map((menu, index) => (
        <Link href={menu.path}>
          <h2 className='flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-primary 
      hover:text-white rounded-2xl cursor-pointer my-3.5
      ' >
            <menu.icon />
            {menu.name}
          </h2>
        </Link>
      ))}

      <div className='flex gap-2 items-center bottom-5 fixed p-5'>
        <Image src={user?.picture} width={35} height={35}
          alt='logo'
          className='rounded-full' />
         <div>
          <h2 className='text-sm font-bold'>{user?.given_name} {user?.family_name}</h2>
          <h2 className='text-xs text-slate-400'>{user?.email}</h2>
        </div>
      </div>
    </div>
  )
}

export default SideNav