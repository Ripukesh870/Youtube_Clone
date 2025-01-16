// Home.js

import React, { useState } from 'react';
import data from "../../data/data.json";
import { useDispatch, useSelector } from 'react-redux';
import { videoPlay } from '../../redux/reducer/action';
import { useNavigate } from 'react-router-dom';
import log from "../../data/log.jpg"
import { addToHistory } from '../../redux/reducer/action';

function Home() {
    const [menu, setMenu] = useState(true);
    const dispach = useDispatch();
    const navigate = useNavigate();
    const filteredData = useSelector((state) => state.filter.filteredData || []);
    const renderData = filteredData.length ? filteredData : data; // Use original `data` if `filteredData` is empty
    const history = useSelector((state) => state.history.history);

    // console.log(filteredData)


    const handleClickVideo = (e) => {
        // console.log(e)
        // console.log(e.id);
        dispach(videoPlay(e));
        navigate(`/video/${e.id}`);
        dispach(addToHistory(e));
    }


    return (
        <>

            {/* {
                filteredData==""  ?
                
                    <div className="w-full h-screen xl:w-5/6 lg:w-4/5 md:w-3/4 sm:w-2/3 px-3 py-5 grid grid-cols-1 gap-5 gap-y-0 overflow-y-scroll md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">

                        {
                            data.map((items, index) => (
                                <div
                                    className=" rounded-lg shadow-md flex flex-col p-2 h-5/6 hover:bg-zinc-800 bg-zinc-900 pb-6 "
                                    key={index}
                                    onClick={() => handleClickVideo(items)}
                                >
                                    <div className="flex justify-center items-center h-[150px] border-2">
                                    <img src={items.thumbnailUrl} alt="thumbnail" className="rounded-xl w-full h-[130px]" />
                                    </div>
                                    <div className=' pb-1 '>
                                        <div className="flex items-center ">
                                            <img
                                                className="w-8 h-8 rounded-full p-1 m-2 "
                                                src={log}
                                                alt="author avatar"
                                            />
                                            <p className="text-sm font-semibold  truncate">
                                                {items.title}
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-300 px-8 truncate">{items.author}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div> 
                :
                <div className="border-2 w-full h-screen xl:w-5/6 lg:w-4/5 md:w-3/4 sm:w-2/3 px-3 py-5 grid grid-cols-1 gap-5 gap-y-0 overflow-y-scroll md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
                {
                    filteredData.map((items, index) => (
                        <div
                            className=" rounded-lg shadow-md flex flex-col p-2 h-5/6 hover:bg-zinc-800 bg-zinc-900 pb-6 border-2 h-"
                            key={index}
                            onClick={() => handleClickVideo(items)}
                        >
                            <div className="flex justify-center items-center h-[150px] border-2">
                            <img src={items.thumbnailUrl} alt="thumbnail" className="rounded-xl w-full h-[130px]" />
                            </div>
                            <div className=' pb-1 '>
                                <div className="flex items-center ">
                                    <img
                                        className="w-8 h-8 rounded-full p-1 m-2 "
                                        src={log}
                                        alt="author avatar"
                                    />
                                    <p className="text-sm font-semibold  truncate">
                                        {items.title}
                                    </p>
                                </div>
                                <p className="text-sm text-gray-300 px-8 truncate">{items.author}</p>
                            </div>
                        </div>
                    ))
                }
            </div> 

            } */}


            {/* <div className="border-2 w-full h-screen xl:w-5/6 lg:w-4/5 md:w-3/4 sm:w-2/3 px-3 py-5 grid grid-cols-1 gap-5 gap-y-0 overflow-y-scroll md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4"> */}
            <div className="w-full h-screen xl:w-5/6 lg:w-4/5 md:w-3/4 sm:w-2/3 px-3 py-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-500">

                {
                    renderData.length === 0 ? (
                        <div>
                            data not found
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
                        {
                            renderData.map((items, index) => (
                                <div
                                    className=" rounded-lg shadow-md flex flex-col p-2 h-5/6 hover:bg-zinc-800 bg-zinc-900 pb-6 "
                                    key={index}
                                    onClick={() => handleClickVideo(items)}
                                >
                                    <div className="flex justify-center items-center h-[150px] ">
                                        <img src={items.thumbnailUrl} alt="thumbnail" className="rounded-xl w-full h-[130px]" />
                                    </div>
                                    <div className=' pb-1 '>
                                        <div className="flex items-center ">
                                            <img
                                                className="w-8 h-8 rounded-full p-1 m-2 "
                                                src={log}
                                                alt="author avatar"
                                            />
                                            <p className="text-sm font-semibold  truncate">
                                                {items.title}
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-300 px-8 truncate">{items.author}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    )}
            </div>
        </>
    );
}

export default Home;









// import React, { useState } from "react";
// import data from "../../data/data.json";
// import { useDispatch, useSelector } from "react-redux";
// import { videoPlay } from "../../redux/reducer/action";
// import { useNavigate } from "react-router-dom";
// import log from "../../data/log.jpg";

// function Home() {
//     const [menu, setMenu] = useState(true);
//     const dispach = useDispatch();
//     const navigate = useNavigate();
//     const filteredData = useSelector((state) => state.filter.filteredData || []);
//     const renderData = filteredData.length ? filteredData : data; // Use original `data` if `filteredData` is empty

//     const handleClickVideo = (e) => {
//         console.log(filteredData);
//         console.log(e.id);
//         dispach(videoPlay(e));
//         navigate(`/video/${e.id}`);
//     };

//     return (
//         <>
//             <div className="w-full h-screen xl:w-5/6 lg:w-4/5 md:w-3/4 sm:w-2/3 px-3 py-5 overflow-y-scroll">
//                 {renderData.length === 0 ? (
//                     <div className="flex justify-center items-center h-full">
//                         <p className="text-xl font-semibold text-gray-500">
//                             Data not found
//                         </p>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
//                         {renderData.map((items, index) => (
//                             <div
//                                 className="rounded-lg shadow-md flex flex-col p-2 h-5/6 hover:bg-zinc-800 bg-zinc-900 pb-6"
//                                 key={index}
//                                 onClick={() => handleClickVideo(items)}
//                             >
//                                 <div className="flex justify-center items-center h-[150px] border-2">
//                                     <img
//                                         src={items.thumbnailUrl}
//                                         alt="thumbnail"
//                                         className="rounded-xl w-full h-[130px]"
//                                     />
//                                 </div>
//                                 <div className="pb-1">
//                                     <div className="flex items-center">
//                                         <img
//                                             className="w-8 h-8 rounded-full p-1 m-2"
//                                             src={log}
//                                             alt="author avatar"
//                                         />
//                                         <p className="text-sm font-semibold truncate">
//                                             {items.title}
//                                         </p>
//                                     </div>
//                                     <p className="text-sm text-gray-300 px-8 truncate">
//                                         {items.author}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// }

// export default Home;
