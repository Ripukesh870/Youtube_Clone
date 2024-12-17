import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';


function Sidebar() {
   const nav =useNavigate();
    const handleclick=(route)=>{
        nav(route)
    }

    const mainLink = [
        {
            icon: <MdHomeFilled className='text-xl'/>,
            name: 'Home',
            route:"./"
        },
        {
            icon: <SiYoutubeshorts className='text-xl'/>,
            name: 'Shots',
            route:"/shots"
        },
        {
            icon: <MdSubscriptions className='text-xl'/>,
            name: 'Subscribe',
            route:"/subscribe"
        }
    ];
    const otherLinks = [
        {
            icon: <MdOutlineLibraryAdd className='text-xl'/>,
            name: 'Library',
            route:"/library"
        },
        {
            icon: <FaHistory className='text-xl'/>,
            name: 'History',
            route:"/history"
        },
        {
            icon: <MdOutlineWatchLater className='text-xl'/>,
            name: 'Watch later',
            route:"/watchlist"
        },
        {
            icon: <AiFillLike className='text-xl'/>,
            name: 'Liked video',
            route:"/likedvideo"
        }
    ];


    return (
        <>
            <div className='w-1/5 bg-[#212121] overflow-auto pb-8 h-screen lg:w-1/5  '>
                <ul className='flex flex-col border-b-1 border-gray-900 border-b-4 mb-2 pb-2 p-3'>
                    {
                        mainLink.map((user) => {
                            return (
                                <li key={user.name} className={`pl-6 py-3 hover:bg-zinc-600 ${user.name === "Home" ? " bg-slate-600" : " "} rounded-xl `} onClick={()=>handleclick(user.route)}>
                                    <Link to={user.route} className='flex items-center gap-4 '>{user.icon} <span className='text-sm  tracking-wider'> {user.name} </span></Link>
                                </li>
                            )
                        })
                    }
                </ul>
            
                <ul className='flex flex-col border-b-1 border-gray-800 p-3'>
                    {
                        otherLinks.map((user) => {
                            return (
                                <li key={user.name} className={`pl-6 py-3 hover:bg-zinc-600 ${user.name === "Home" ? " bg-slate-600" : " "} rounded-xl`} onClick={()=>handleclick(user.route)}>
                                    <Link to={user.route} className='flex items-center gap-4 '>{user.icon} <span className='text-sm  tracking-wider'> {user.name} </span></Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
