import React from 'react'
import {Link} from 'react-router-dom'
import home from '../images/home.png'
export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row">
    <div>
      <div className='lg:ml-[5rem] ml-5 lg:p-2 md:h-[60%] h-[80%] mt-[5%] flex flex-col justify-evenly'>
        <span className='lg:text-6xl md:text-5xl text-4xl text-black'><br/><br/>Find your support <br /> through <br/> CalmTalk<br/></span><br/><br />
        <Link to="/login" className='border-2 bg-[#37AE96] text-white hover:bg-[#216558] hover:text-white transition-all ease-in-out duration-150 hover:border-2 p-2 rounded-xl w-fit text-bold'>Book an appointment</Link>
        Or <br /> <Link to="/login">Chat with AI</Link>
      </div>
    </div>
     <div className='bg-[#dddbca]'>
      <br />
    <img src={home} alt="" className='w-full h-full'/>
    </div>
    </div>
  )
}
