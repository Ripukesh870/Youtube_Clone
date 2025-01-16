// import React, { useEffect, useState } from 'react'
// import { MdHomeFilled } from "react-icons/md";
// import { SiYoutubeshorts } from "react-icons/si";
// import { MdSubscriptions } from "react-icons/md";
// import { MdOutlineLibraryAdd } from "react-icons/md";
// import { FaHistory } from "react-icons/fa";
// import { MdOutlineWatchLater } from "react-icons/md";
// import { AiFillLike } from "react-icons/ai";
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleMenu } from '../../redux/reducer/action';


// function Sidebar() {
//     // const [menu,setmenu]=useState(true);
//     const nav = useNavigate();
//     const menu = useSelector((state) => state.menu.isOpen);
//     const dispatch = useDispatch();
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);


//     const handleclick=(route)=>{
//          // Check if window width is less than or equal to sm (e.g., 640px)
//         if (windowWidth <= 640) {
//             dispatch(toggleMenu()); // Dispatch only if screen is smaller than or equal to sm
//         }
//         nav(route);
        
//     }
//     useEffect(() => {
//         const handleResize = () => {
//           setWindowWidth(window.innerWidth);
//         };
    
//         window.addEventListener('resize', handleResize);
    
//         // Cleanup listener on unmount
//         return () => window.removeEventListener('resize', handleResize);
//       }, []);


      

//     const mainLink = [
//         {
//             icon: <MdHomeFilled className='text-xl'/>,
//             name: 'Home',
//             route:"./"
//         },
//         {
//             icon: <SiYoutubeshorts className='text-xl'/>,
//             name: 'Shots',
//             route:"/shots"
//         },
//         {
//             icon: <MdSubscriptions className='text-xl'/>,
//             name: 'Subscribe',
//             route:"/subscribe"
//         }
//     ];
//     const otherLinks = [
//         {
           
//             icon: <FaHistory className='text-xl'/>,
//             name: 'History',
//             route:"/history"
//         },
//         {
//             icon: <MdOutlineLibraryAdd className='text-xl'/>,
//             name: 'Library',
//             route:"/library"
//         },
//         {
//             icon: <MdOutlineWatchLater className='text-xl'/>,
//             name: 'Watch later',
//             route:"/watchlist"
//         },
//         {
//             icon: <AiFillLike className='text-xl'/>,
//             name: 'Liked video',
//             route:"/likedvideo"
//         }
//     ];


//     return (
//         <>
//             <div className={`bg-[#212121] overflow-auto pb-8 h-screen lg:w-1/5 md:w-1/4 sm:w-1/3 w-0 xl:w-1/6 ${menu?"":"w-full fixed left-0 z-50"} `}>
//                 <ul className='flex flex-col border-b-1 border-gray-900 border-b-4 mb-2 pb-2 p-3'>
//                     {
//                         mainLink.map((user) => {
//                             return (
//                                 <li key={user.name} className={`pl-6 py-3 hover:bg-zinc-600 ${user.name === "Home" ? " bg-slate-600" : " "} rounded-xl `} onClick={()=>handleclick(user.route)}>
//                                     <Link to={user.route} className='flex items-center gap-4 '>{user.icon} <span className='text-sm  tracking-wider'> {user.name} </span></Link>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
            
//                 <ul className='flex flex-col border-b-1 border-gray-800 p-3'>
//                     {
//                         otherLinks.map((user) => {
//                             return (
//                                 <li key={user.name} className={`pl-6 py-3 hover:bg-zinc-600 ${user.name === "Home" ? " bg-slate-600" : " "} rounded-xl`} onClick={()=>handleclick(user.route)}>
//                                     <Link to={user.route} className='flex items-center gap-4 '>{user.icon} <span className='text-sm  tracking-wider'> {user.name} </span></Link>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default Sidebar;












import React, { useEffect, useState } from 'react';
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/reducer/action';

function Sidebar() {
    const nav = useNavigate();
    const location = useLocation(); // Hook to get current route
    const menu = useSelector((state) => state.menu.isOpen);
    const dispatch = useDispatch();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleclick = (route) => {
        if (windowWidth <= 640) {
            dispatch(toggleMenu()); // Close menu on smaller screens
        }
        nav(route);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mainLink = [
        {
            icon: <MdHomeFilled className='text-xl' />,
            name: 'Home',
            route: "/"
        },
        {
            icon: <SiYoutubeshorts className='text-xl' />,
            name: 'Shots',
            route: "/shots"
        },
        {
            icon: <MdSubscriptions className='text-xl' />,
            name: 'Subscribe',
            route: "/subscribe"
        }
    ];

    const otherLinks = [
        {
            icon: <FaHistory className='text-xl' />,
            name: 'History',
            route: "/history"
        },
        // {
        //     icon: <MdOutlineLibraryAdd className='text-xl' />,
        //     name: 'Library',
        //     route: "/library"
        // },
        // {
        //     icon: <MdOutlineWatchLater className='text-xl' />,
        //     name: 'Watch later',
        //     route: "/watchlist"
        // },
        {
            icon: <AiFillLike className='text-xl' />,
            name: 'Liked video',
            route: "/likedvideo"
        }
    ];

    return (
        <div className={`bg-[#212121] overflow-auto pb-8 h-screen lg:w-1/5 md:w-1/4 sm:w-1/3 w-0 xl:w-1/6 ${menu ? "" : "w-full fixed left-0 z-50"} `}>
            <ul className='flex flex-col border-b-1 border-gray-900 border-b-4 mb-2 pb-2 p-3'>
                {mainLink.map((user) => {
                    const isActive = location.pathname === user.route; 
                    return (
                        <li
                            key={user.name}
                            className={`pl-6 py-3 hover:bg-zinc-600 ${isActive ? "bg-slate-600" : ""} rounded-xl`}
                            onClick={() => handleclick(user.route)}
                        >
                            <Link to={user.route} className='flex items-center gap-4 '>
                                {user.icon} <span className='text-sm tracking-wider'> {user.name} </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <ul className='flex flex-col border-b-1 border-gray-800 p-3'>
                {otherLinks.map((user) => {
                    const isActive = location.pathname === user.route; 
                    return (
                        <li
                            key={user.name}
                            className={`pl-6 py-3 hover:bg-zinc-600 ${isActive ? "bg-slate-600" : ""} rounded-xl`}
                            onClick={() => handleclick(user.route)}
                        >
                            <Link to={user.route} className='flex items-center gap-4 '>
                                {user.icon} <span className='text-sm tracking-wider'> {user.name} </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
