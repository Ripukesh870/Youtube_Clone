import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoDescription from "./VideoDescription";
import data from "../../data/data.json"
import { useNavigate } from "react-router-dom";
import { videoPlay } from "../../redux/reducer/action";


function VideoDetails() {
    const dispach= useDispatch();
    const nav = useNavigate();

    // const selector= useSelector();
    // const data1 = data[0]
    // console.log(data1)
    const currentVideo = useSelector((state) => state.videoReducer.currentVideo);

    // console.log(currentVideo.title);
    const handlePlay=(items)=>{
        // console.log(items);
        dispach(videoPlay(items));
        nav(`/video/${items.id}`)
    }

    return (
        <div className="w-full flex ">
            <div className=" w-2/3">
                <div className="w-full p-2">
                    <video
                        src={currentVideo.videoUrl}
                        controls
                        className="rounded-lg"
                        style={{border:"2px solid #3d3d3b"}}
                    ></video>
                </div>
                <div className="p-2 px-4 ">
                    <h1 className="text-white text-2xl font-bold px-2">
                        {currentVideo.title}
                    </h1>
                    <div className="flex p-2">
                        <div className="w-10 h-10 rounded-full">
                            <img className="w-full rounded-full h-full"
                                src="https://i.ytimg.com/vi/sPM2WiwA1us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjws-52IcY0gmLW1zcDFMRTXoqyQ"
                                alt=""
                            />
                        </div>
                        <div className=" mx-4">
                            <h2 className="text-md">Chanel name </h2>
                            <h6 className="text-xs">2.66M Subscribers</h6>
                        </div>
                    </div>
                    <div className="bg-zinc-900 rounded-lg px-4 py-2">
                        <h6 className="text-xs">{currentVideo.views} views {currentVideo.uploadTime} </h6>
                        <VideoDescription description={currentVideo.description} />
                    </div>
                </div>
            </div>   
            <div className="px-2 w-1/3 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-500 py-4" style={{borderLeft:"2px solid #3d3d3b"}}>
                {  
                    data.map((items) => (
                        <div className="w-full flex p-2 hover:bg-zinc-800 hover:rounded-md px-4 gap-2 cursor-pointer rounded-lg  my-3 bg-zinc-900 hover:bg-zinc-850" onClick={()=>handlePlay(items)} style={{}} key={items.id}>
                            <div className="w-2/5 rounded-md h-24" style={{border:"2px solid #3d3d3b"}}>
                                <img src={items.thumbnailUrl} alt="" className="rounded-md w-full h-full" />
                            </div>
                            <div className="w-3/5 overflow-hidden px-2">
                                <div className="h-1/2 py-2">
                                    <h1 className="text-base font-bold truncate">{items.title}</h1>
                                </div>
                                <div className="g-1/2">
                                    <h6 className="text-xs">{items.author}</h6>
                                    <h6 className="text-xs truncate">{items.views} views {items.uploadTime}</h6>
                                </div>

                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    );
}

export default VideoDetails;


