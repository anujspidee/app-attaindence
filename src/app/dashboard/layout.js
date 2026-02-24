import React from 'react'
import SideNav from './_component/SideNav'

function layout({children}) {
  return (
    <div>
        <div>
            <SideNav/>
        </div>
        <div className='md:ml-64 hidden md:block'>
        {children}
        </div>
    </div>
  )
}

export default layout