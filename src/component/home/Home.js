

// Home.js

import React, { useState } from 'react';
import data from "../../data/data.json";
import { useDispatch } from 'react-redux';
import { videoPlay } from '../../redux/reducer/action';
import { useNavigate } from 'react-router-dom';
import log from "../../data/log.jpg"
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
            <div className=" w-full h-screen xl:5/6 lg:w-4/5 md:w-3/4 sm:w-2/3 px-3 py-5 m-3  grid grid-cols-1 gap-5 gap-y-0 overflow-y-scroll md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xl:grid-cols-5">
                {
                    data.map((items, index) => (
                        <div
                            className=" rounded-lg shadow-md flex flex-col p-2 h-5/6 hover:bg-zinc-800 bg-zinc-900 pb-6 "
                            key={index}
                            onClick={() => handleClickVideo(items)}
                        >
                            <div className="flex justify-center items-center h-[150px]">
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
        </>
    );
}

export default Home;




