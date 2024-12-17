import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


function Navbar() {
    const [menu, setMenu] = useState(false);
    const handleClickOpenMenu = () => {
        setMenu((prevMenu) => !prevMenu)
    }


    return (
        <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky'>
            <div className='flex gap-8 items-center text-2xl text-white '>
                {
                    menu ?

                        <div className=' cursor-pointer duration-1000 ' onClick={handleClickOpenMenu}>
                            <GiHamburgerMenu />
                        </div> :
                        <div className=' cursor-pointer duration-1000 ' onClick={handleClickOpenMenu}>
                            <IoMdClose className='text-3xl'/>
                        </div>
                }
                <div className='flex gap-2 items-center justify-center'>
                    <FaYoutube className='text-red-500 text-3xl ' />
                    <span className='text-2xl'>Youtube</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5 '>
                <form>
                    <div className='flex bg-black items-center h-10 px-4 pr-0 rounded-3xl'>
                        <div className='flex gap-5 items-center pr-5'>
                            <input type="text" placeholder='Search' className='w-96 bg-black focus:outline-none border-none text-white text-xl' />
                        </div>
                        <button className='h-10 w-10 flex items-center rounded-r-3xl bg-black justify-center border-none outline-none'>
                            <AiOutlineSearch className='text-xl ' />
                        </button>
                    </div>
                </form>
                <div className='text-xl bg-black rounded-full p-2 '>
                    <FaMicrophone />
                </div>
            </div>

            <div className='flex gap-8 text-xl items-center'>
                <RiVideoAddLine />
                <div className='relative'>
                    <IoIosNotificationsOutline className='text-2xl' />
                    <span className='absolute bottom-2 left-3.5 bg-red-600 text-xs rounded-full px-1'>9+</span>
                </div>
                <img className='w-9 h-9 rounded-full ' src="data:image/jpeg;base64,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" alt="" />

            </div>
        </div>
    )
}

export default Navbar