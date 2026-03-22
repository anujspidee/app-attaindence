import React from 'react'
import connectDB from '../../../helper/dbconfig/dbconnect'

connectDB();
console.log("Database connected")

function page() {
  return (
    <div>page
      


    </div>
  )
}

export default page