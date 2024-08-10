import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
const Sidebar = () => {
  const[come,setcome]=useState(false)
  return ( 
    <>
    <div className=" w-[20%] h-[100vh] bg-black hidden md:block"></div>
    <IoMenu onClick={()=>{setcome(!come)}} className='z-10 absolute h-[40px] w-[40px] top-[20px] left-[20px] block md:hidden cursor-pointer text-gray-700' /> 
    {come && <div className="z-0  w-[20%] h-[100vh] bg-black "></div>}
    </>
  )
}

export default Sidebar
