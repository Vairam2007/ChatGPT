import React from 'react'
import "../Components/Ask.css"
const Ask = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-500 flex flex-col justify-evenly items-center">
        <div className="w-[80%] h-[80%] flex flex-col gap-[20px] bg-gray-700 p-[50px] rounded-[30px]">
            <div className="aibox">
                <div className="logo"></div>
                <div className="aitext"></div>
            </div>
            <div className="perbox">
                <div className="pertext"></div>
                <div className="perlogo"></div>
            </div>
        </div>
        <div className="w-[80%] flex flex-row g-[20px] justify-evenly items-center">
            <input type="text" className='w-[80%] font-semibold text-[25px] outline-none border-none p-[20px] h-[50px] rounded-[10px]' />
            <button className='w-[50px] h-[50px] bg-black'></button>
        </div>
    </div>
  )
}

export default Ask
