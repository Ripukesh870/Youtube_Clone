// import React, { useState } from 'react'
// import data from "../data/data.json"

// function Home() {
//     const [menu, setMenu] = useState(true);
//     // console.log(data.songs);
//     // const data1 = data;
//     // console.log(data1);

//     return (

//         <>
//             <div className={`h-screen border-2 w-screen px-2 flex flex-wrap justify-around overflow-scroll grid-cols-4 gap-2`}>
//                 {
//                     data.map((items,index) => (

//                             <div className='border-2 my-2 mb-2 h-80' key={index}>
//                                 <div className='w-100 rounded p-1.5 '>
//                                     {/* <img src={items.thumbnailUrl} alt="" className='rounded-xl' /> */}
//                                     {/* <video src={items.link} className='rounded-xl'></video> */}
//                                 </div>
//                                 <div>
//                                     <div className='flex '>
//                                         <img className='w-11 h-11 rounded-full p-1 m-2' src="https://i.ytimg.com/vi/sPM2WiwA1us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjws-52IcY0gmLW1zcDFMRTXoqyQ" alt="" />
//                                         <h1 className='text-xl'>
//                                             {items.title}
//                                         </h1>

//                                     </div>
//                                     <h3 className='px-14'>{items.author}</h3>
//                                 </div>
//                             </div>

//                     ))
//                 }



//                 {/* <div className='border-2 w-96 my-2 mb-2 h-80 '>
//                     <div className='w-100 rounded p-1.5 '>
//                         <img src="https://i.ytimg.com/vi/sPM2WiwA1us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjws-52IcY0gmLW1zcDFMRTXoqyQ" alt="" className='rounded-xl' />
//                     </div>
//                     <div>
//                         <div className='flex '>
//                             <img className='w-11 h-11 rounded-full p-1 m-2' src="https://i.ytimg.com/vi/sPM2WiwA1us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjws-52IcY0gmLW1zcDFMRTXoqyQ" alt="" />
//                             <h1 className='text-xl'>
//                                 Hello My name is Ripukesh. Hello My name is ripukesh kumar ...
//                             </h1>

//                         </div>
//                         <h3 className='px-14'>chanel name </h3>
//                     </div>
//                 </div>
//                 <div className='border-2 w-96 my-2 mb-2 h-80 '>
//                     <div className='w-100 rounded p-1.5 '>
//                         <img src="https://i.ytimg.com/vi/sPM2WiwA1us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjws-52IcY0gmLW1zcDFMRTXoqyQ" alt="" className='rounded-xl' />
//                     </div>
//                     <div>
//                         <div className='flex '>
//                             <img className='w-11 h-11 rounded-full p-1 m-2' src="https://i.ytimg.com/vi/sPM2WiwA1us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjws-52IcY0gmLW1zcDFMRTXoqyQ" alt="" />
//                             <h1 className='text-xl'>
//                                 Hello My name is Ripukesh. Hello My name is ripukesh kumar ...
//                             </h1>

//                         </div>
//                         <h3 className='px-14'>chanel name </h3>
//                     </div>
//                 </div>
//                 <div className='border-2 w-96 my-2 mb-2 h-80 '>
//                     <div className='w-100 rounded p-1.5 '>
//                         <img src="https://i.ytimg.com/vi/sPM2WiwA1us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjws-52IcY0gmLW1zcDFMRTXoqyQ" alt="" className='rounded-xl' />
//                     </div>
//                     <div>
//                         <div className='flex '>
//                             <img className='w-11 h-11 rounded-full p-1 m-2' src="https://i.ytimg.com/vi/sPM2WiwA1us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjws-52IcY0gmLW1zcDFMRTXoqyQ" alt="" />
//                             <h1 className='text-xl'>
//                                 Hello My name is Ripukesh. Hello My name is ripukesh kumar ...
//                             </h1>

//                         </div>
//                         <h3 className='px-14'>chanel name </h3>
//                     </div>
//                 </div> */}



//             </div>
//         </>
//     )
// }

// export default Home









// Home.js

import React, { useState } from 'react';
import data from "../../data/data.json";
import { useDispatch } from 'react-redux';
import { videoPlay } from '../../redux/reducer/action';
import { useNavigate } from 'react-router-dom';
function Home() {
    const [menu, setMenu] = useState(true);
    const dispach = useDispatch();
    const navigate = useNavigate();


    const handleClickVideo = (e) => {
        // console.log(e.id);
        dispach(videoPlay(e));
        navigate(`/video/${e.id}`);
    }


    return (
        <>
            <div className="h-screen w-4/5 px-4 py-4 grid grid-cols-4 gap-3 gap-y-5 overflow-y-scroll ">
                {
                    data.map((items, index) => (
                        <div
                            className=" rounded-lg shadow-md flex flex-col p-2 pb-4 h-5/6 hover:bg-zinc-800 "
                            key={index}
                            onClick={() => handleClickVideo(items)}
                        >
                            <div className="flex justify-center items-center h-2/3 ">
                               <img src={items.thumbnailUrl} alt="thumbnail" className="rounded-xl w-full h-full" />
                            </div>
                            <div className=''>
                                <div className="flex items-center mb-2">
                                    <img
                                        className="w-11 h-11 rounded-full p-1 m-2"
                                        src="https://i.ytimg.com/vi/sPM2WiwA1us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjws-52IcY0gmLW1zcDFMRTXoqyQ"
                                        alt="author avatar"
                                    />
                                    <h1 className="text-lg font-semibold line-clamp-2">
                                        {items.title}
                                    </h1>
                                </div>
                                <h3 className="text-sm text-gray-300 px-14 ">{items.author}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Home;




