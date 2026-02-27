import { Hand, LayoutIcon, Settings, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SideNav() {
  const menulist=[
    {
      id:1,
      name:'Dashboard',
      icon:LayoutIcon,
      path:'/dashboard'
    },
    {
      id:2,
      name:'Employee',
      icon:User,
      path:'/dashboard/employee'
    },
    {
      id:3,
      name:'Attendance',
      icon:Hand,
      path:'/dashboard/attendance'
    },
    {
      id:4,
      name:'Settings',
      icon:Settings,
      path:'/dashboard/setting'
    }
  
  ]

  return (
    <div className='border shadow-md h-screen p-5'>
    <Image src={'./logo.svg'} width={180} height={50} alt="logo"  />
    <hr className='my-5'></hr>

    {menulist.map((menu,index) =>(
      <Link href={menu.path}>
      <h2 className='flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-primary 
      hover:text-white rounded-2xl cursor-pointer my-3.5
      ' >
        <menu.icon/>
        {menu.name}
      </h2>
      </Link>
    ))}

    <div>

    </div>

    </div>
  )
}

export default SideNav