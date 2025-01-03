// import React from 'react'
// import v1 from "../../video/vi.mp4"
// import v2 from "../../video/v2.mp4";
// import v3 from "../../video/v3.mp4";
// function Shots() {

//     const video = [
//         {
//             id: "1",
//             src: v1,
//             title: "hello hii bay "
//         },
//         {
//             id: "1",
//             src: v1,
//             title: "hello hii bay "
//         }, {
//             id: "1",
//             src: v2,
//             title: "hello hii bay "
//         }, {
//             id: "1",
//             src: v2,
//             title: "hello hii bay "
//         }, {
//             id: "1",
//             src: v3,
//             title: "hello hii bay "
//         }
//     ]
//     return (
//         <div className='w-4/5 overflow-y-scroll h-screen'>

//             {
//                 video.map((items) => (
//                     <div className='border-2 w-1/3 m-auto my-11 h-5/6 rounded-lg relative'>
//                         <video src={items.src} className=' w-[100%] h-full' controls ></video>
//                         <div className=' border-2 px-4 py-1 absolute bottom-0 left-0'>
//                             <div className='flex'>
//                                 <div className='flex '>
//                                     <div className='border-2 rounded-full w-10 h-10'>
//                                         <img src="blob:https://www.youtube.com/84b3411a-c92c-42a1-80f0-82288fa6a4d6" alt="" controls className='rounded-full w-full h-full' />
//                                     </div>
//                                     <div className='text-center my-auto mx-2 '>
//                                         <h1 className='text-lg'>Chanel name</h1>
//                                     </div>
//                                 </div>
//                                 <button className='border-2 bg-zinc-800 rounded-lg px-5 mx-4'>Subscribe</button>
//                             </div>
//                             <h4>title dfbndfbnd dfnbdnb</h4>
//                         </div>
//                     </div>
//                 ))
//             }

//         </div>
//     )
// }

// export default Shots;


// import React from 'react';
// import v1 from "../../video/vi.mp4";
// import v2 from "../../video/v2.mp4";
// import v3 from "../../video/v3.mp4";

// function Shots() {
//     const videos = [
//         {
//             id: "1",
//             src: v1,
//             title: "Video 1 Title",
//             channelName: "Channel 1",
//             channelImage: "path/to/image1.jpg" // Replace with actual image path
//         },
//         {
//             id: "2",
//             src: v2,
//             title: "Video 2 Title",
//             channelName: "Channel 2",
//             channelImage: "path/to/image2.jpg" // Replace with actual image path
//         },
//         {
//             id: "3",
//             src: v3,
//             title: "Video 3 Title",
//             channelName: "Channel 3",
//             channelImage: "path/to/image3.jpg" // Replace with actual image path
//         }
//     ];

//     return (
//         <div className='w-4/5 overflow-y-scroll h-screen'>
//             {videos.map((video) => (
//                 <div key={video.id} className='border-2 w-1/3 m-auto my-11 h-5/6 rounded-lg relative'>
//                     <video src={video.src} className='w-full h-full' controls></video>
//                     <div className='border-2 px-4 py-1 absolute bottom-0 left-0'>
//                         <div className='flex'>
//                             <div className='flex'>
//                                 <div className='border-2 rounded-full w-10 h-10'>
//                                     <img src={video.channelImage} alt={video.channelName} className='rounded-full w-full h-full' />
//                                 </div>
//                                 <div className='text-center my-auto mx-2'>
//                                     <h1 className='text-lg'>{video.channelName}</h1>
//                                 </div>
//                             </div>
//                             <button className='border-2 bg-zinc-800 rounded-lg px-5 mx-4'>Subscribe</button>
//                         </div>
//                         <h4>{video.title}</h4>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Shots;


// src/App.js
import React from 'react';
import VideoShorts from '../shots/VideoShorts';
import v1 from "../../video/vi.mp4"
import v2 from "../../video/v2.mp4";
import v3 from "../../video/v3.mp4";
const videos = [
    {
        id: "1",
        src: v1,
        title: "Video 1 Title",
        channelName: "Channel 1",
        channelImage: "path/to/image1.jpg" // Replace with actual image path
    },
    {
        id: "2",
        src: v2,
        title: "Video 2 Title",
        channelName: "Channel 2",
        channelImage: "path/to/image2.jpg" // Replace with actual image path
    },
    {
        id: "3",
        src: v3,
        title: "Video 3 Title",
        channelName: "Channel 3",
        channelImage: "path/to/image3.jpg" // Replace with actual image path
    }
];

function Shots() {
    return (
        <div className="App border-2 w-4/5 ">
            <VideoShorts videos={videos} />
        </div>
    );
}

export default Shots;