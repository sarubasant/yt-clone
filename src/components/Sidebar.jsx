import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";



const Sidebar = () => {
  return (
    <>
    <div className="main">
        <div className="first flex flex-col w-40 ">
            <a href="" className='home flex  items-center gap-6 w-full p-2 font-medium rounded-lg hover:bg-gray-200'><IoMdHome size={20}/>Home</a>
            <a href="" className="shorts flex items-center gap-6 w-full p-2 font-medium rounded-lg hover:bg-gray-200"><SiYoutubeshorts/>Shorts</a>
            <a href="" className="subscriptions flex  items-center gap-6 w-full p-2 font-medium rounded-lg hover:bg-gray-200"><MdOutlineSubscriptions/>Subscriptions</a>
        </div>
        <div className="second">

        </div>
    </div>
    </>
  )
}

export default Sidebar