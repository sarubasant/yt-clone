import React from 'react'
import { RxHamburgerMenu  } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    return (
        <>
            <div className='font-[Roboto]  h-20 flex items-center gap-6 justify-between px-4'>

                <div className="left items-center   h-full flex">
                   <div className="hamburger cursor-pointer hoverEffect"> <RxHamburgerMenu  size={24}/></div>
                   <a href="/"> <img className='h-32 cursor-pointer' src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png" alt="" /></a>
                </div>
                <div className="search-bar w-96 h-10 flex items-center">
                    <input className='rounded-l-full w-full h-full pl-4 border' placeholder='Search' type="text" name="" id="" />
                    <div className="search h-full w-16 p-2.5 bg-gray-300 rounded-r-full items-center cursor-pointer">
                       <GoSearch size={20} />
                    </div>
                    
                </div>
                <div className="right flex h-10 items-center gap-7">
                    <div className="video cursor-pointer hoverEffect"><RiVideoAddLine size={24}/></div>
                    <div className="notification hoverEffect cursor-pointer"><IoMdNotificationsOutline size={24}/></div>
                    <div className="profile rounded-full w-10 h-10 overflow-clip bg-red-600"><img className='h-10 w-16' src="https://th.bing.com/th/id/OIP.te5-Jfhddh7mhV1AjTz-7AHaEo?rs=1&pid=ImgDetMain" alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Navbar