// src/VideoShorts.js
import React, { useEffect, useRef } from 'react';

const VideoShorts = ({ videos }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY > 0) {
                videoRef.current.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            } else {
                videoRef.current.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="overflow-hidden h-screen w-1/3 justify-center m-auto" ref={videoRef}>
            <div className="flex flex-col h-full">
                {videos.map((video) => (
                    <div key={video.id} className="my-5 flex-shrink-0 h-[85%] w-full flex flex-col items-center justify-center bg-black border-2 ">
                        <video className="w-full h-full object-cover" controls>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-10 text-white text-center">
                            <h2 className="text-lg font-bold">{video.title}</h2>
                            <div className="flex items-center justify-center mt-2">
                                <img src={video.channelImage} alt={video.channelName} className="w-10 h-10 rounded-full mr-2" />
                                <span>{video.channelName}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoShorts;