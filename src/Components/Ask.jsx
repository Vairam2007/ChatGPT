import React, { useEffect, useRef, useState } from 'react'
import "../Components/Ask.css"
import { IoSend } from "react-icons/io5";
const Ask = () => {
    const[text,settext]=useState([])
    const inputref= useRef(null);
    const newMs=useRef(null)
    const Give = () =>{
        let newMsg = inputref.current.value
        if (newMsg) {
            settext([...text, newMsg])
            inputref.current.value = '';
        }
        
    }
    useEffect(()=>{
        if (newMs.current){
            newMs.current.scrollIntoView({behavior: 'smooth'})
        }
    })
  return (
    <div className="w-full h-[100vh] bg-gray-500 flex flex-col justify-evenly items-center">
        <h1 className='text-[30px] font-bold ' >Chat GPT</h1>
        <div className="w-[80%] h-[75%] flex flex-col gap-[20px] bg-gray-700 p-[50px] rounded-[30px] my-[10px] overflow-y-scroll">
        {text.map((txt, index) => (
            <div key={index}>
                <div className="aibox">
                            <div className="logo"></div>
                            <div className="aitext">{txt}</div>
                </div>
            <div className="perbox mt-2">
                <div className="pertext"></div>
                <div className="perlogo"></div>
            </div>
                <div ref={newMs} />
            </div>
            
                        
                    ))}
                    
        </div>
        <div className="w-[80%] my-[20px] flex flex-row g-[20px] justify-evenly items-center">
            <input type="text" ref={inputref} className='w-[80%] font-semibold text-[25px] outline-none border-none p-[20px] h-[50px] rounded-[10px]' />
            <button onClick={Give} className='send'><IoSend className='w-[40px] h-[40px] text-blue-950' /></button>
        </div>
    </div>
  )
}


export default Ask
