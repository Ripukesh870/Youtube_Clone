

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
                                        src={log}
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




