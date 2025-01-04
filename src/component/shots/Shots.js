
import React from "react";
import "tailwindcss/tailwind.css";
import v1 from "../../video/vi.mp4"
import v2 from "../../video/v2.mp4";
import v3 from "../../video/v3.mp4";


const ReelsPage = () => {
    const videos = [
        { src: v1, label: "Video 1" },
        { src: v2, label: "Video 2" },
        { src: v3, label: "Video 3" },
    ];
    const infiniteVideos = [...videos, ...videos, ...videos]; // Extend the array to simulate infinite scrolling

    return (
        <div className="flex flex-col overflow-y-scroll h-screen snap-y snap-mandatory w-4/5 border-2 ">
            {infiniteVideos.map((video, index) => (
                <div className="border-2 h-[90%]  w-full  relative flex justify-center items-center bg-black snap-start ">

                    <div
                        key={index}
                        className=" w-1/3 h-full flex border-2 my-5"
                    >
                        <video 
                            src={video.src}
                            autoPlay
                            loop
                            muted
                            className="reltive w-full h-auto object-contain border-2 rounded-lg "
                            style={{ aspectRatio: "16 / 9" }}
                        />
                        <div className="absolute bottom-5 left-5 text-white text-lg z-10">
                            {video.label}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ReelsPage;
