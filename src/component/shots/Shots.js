import React from 'react'
import v1 from "../../video/vi.mp4"
import v2 from "../../video/v2.mp4";
import v3 from "../../video/v3.mp4";
function Shots() {

    const video = [
        {
            id: "1",
            src: "v1.mp4",
            title: "hello hii bay "
        },
        {
            id: "1",
            src: "v1.mp4",
            title: "hello hii bay "
        }, {
            id: "1",
            src: "v1.mp4",
            title: "hello hii bay "
        }, {
            id: "1",
            src: "v1.mp4",
            title: "hello hii bay "
        }, {
            id: "1",
            src: "v1.mp4",
            title: "hello hii bay "
        }
    ]
    return (
        <div className='w-4/5 overflow-y-scroll h-screen'>
           
        {
            video.map((items)=>(
                <div className='border-2 w-1/3 m-auto my-11 h-5/6 rounded-lg relative'>
                <video src={items.src} className='border-2 w-full h-full' controls ></video>
                <div className=' border-2 px-4 py-1 absolute bottom-0 left-0'>
                    <div className='flex'>
                        <div className='flex '>
                            <div className='border-2 rounded-full w-10 h-10'>
                                <img src="blob:https://www.youtube.com/84b3411a-c92c-42a1-80f0-82288fa6a4d6" alt="" controls className='rounded-full w-full h-full' />
                            </div>
                            <div className='text-center my-auto mx-2 '>
                                <h1 className='text-lg'>Chanel name</h1>
                            </div>
                        </div>
                        <button className='border-2 bg-zinc-800 rounded-lg px-5 mx-4'>Subscribe</button>
                    </div>
                    <h4>title dfbndfbnd dfnbdnb</h4>
                </div>
            </div>
            ))
        }
            
        </div>
    )
}

export default Shots;




// import React from 'react';
// import v1 from '../../video/vi.mp4';
// import v2 from '../../video/v2.mp4';
// import v3 from '../../video/v3.mp4';

// function Shots() {
//     const videos = [
//         {
//             id: "1",
//             src: v1,
//             title: "First Video",
//             channel: "Channel 1",
//         },
//         {
//             id: "2",
//             src: v2,
//             title: "Second Video",
//             channel: "Channel 2",
//         },
//         {
//             id: "3",
//             src: v3,
//             title: "Third Video",
//             channel: "Channel 3",
//         },
//     ];

//     return (
//         <div className="w-4/5 overflow-y-scroll h-screen mx-auto">
//             {videos.map((item) => (
//                 <div key={item.id} className="border-2 w-1/3 my-11 mx-auto h-5/6 rounded-lg relative">
//                     <video src={item.src} className="w-full h-full" controls></video>
//                     <div className="border-2 px-4 py-1 absolute bottom-0 left-0">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <div className="border-2 rounded-full w-10 h-10 overflow-hidden">
//                                     {/* Placeholder Image */}
//                                     <img
//                                         src="https://via.placeholder.com/150"
//                                         alt={`${item.channel} profile`}
//                                         className="rounded-full w-full h-full"
//                                     />
//                                 </div>
//                                 <div className="mx-2">
//                                     <h1 className="text-lg font-medium">hhdhdhd dghdh</h1>
//                                 </div>
//                             </div>
//                             <button className="border-2 bg-zinc-800 text-white rounded-lg px-5">
//                                 Subscribe
//                             </button>
//                         </div>
//                         <h4 className="mt-2 font-semibold">{item.title}</h4>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Shots;






// import React from 'react';
// import v1 from '../../video/vi.mp4';
// import v2 from '../../video/v2.mp4';
// import v3 from '../../video/v3.mp4';

// function Shots() {
//     const videos = [
//         {
//             id: "1",
//             src: v1,
//             title: "First Video",
//             channel: "Channel 1",
//         },
//         {
//             id: "2",
//             src: v2,
//             title: "Second Video",
//             channel: "Channel 2",
//         },
//         {
//             id: "3",
//             src: v3,
//             title: "Third Video",
//             channel: "Channel 3",
//         },
//     ];

//     return (
//         <div className="w-4/5 overflow-y-scroll h-screen mx-auto">
//             {videos.map((item) => (
//                 <div key={item.id} className="border-2 w-1/3 my-11 mx-auto h-5/6 rounded-lg">
//                     <video src={item.src} className="border-2 w-full h-full" controls></video>
//                     {/* Overwritten Section */}
//                     <div className="border-2 px-4 py-1">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <div className="border-2 rounded-full w-10 h-10 overflow-hidden">
//                                     {/* Placeholder Image */}
//                                     <img
//                                         src="https://via.placeholder.com/150"
//                                         alt={`${item.channel} profile`}
//                                         className="rounded-full w-full h-full"
//                                     />
//                                 </div>
//                                 <div className="mx-2">
//                                     <h1 className="text-lg font-medium">hhdhdhd dghdh</h1>
//                                 </div>
//                             </div>
//                             <button className="border-2 bg-zinc-800 text-white rounded-lg px-5">
//                                 Subscribe
//                             </button>
//                         </div>
//                         <h4 className="mt-2 font-semibold">{item.title}</h4>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Shots;


































// import React from 'react';
// import v1 from '../../video/vi.mp4';
// import v2 from '../../video/v2.mp4';
// import v3 from '../../video/v3.mp4';

// function Shots() {
//     const videos = [
//         {
//             id: "1",
//             src: v1,
//             title: "First Video",
//         },
//         {
//             id: "2",
//             src: v2,
//             title: "Second Video",
//         },
//         {
//             id: "3",
//             src: v3,
//             title: "Third Video",
//         },
//     ];

//     return (
//         <div className="w-4/5 overflow-y-scroll">
//             {videos.map((item) => (
//                 <div key={item.id} className="w-full h-full border-2">
//                     <div className="w-1/3 border-2 mx-auto h-4/5 rounded-lg mt-10">
//                         <div className="w-full border-2">
//                             <video className="border-2" src={item.src} controls />
//                         </div>
//                         <h4 className="text-center mt-2">{item.title}</h4>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Shots;




// import React from "react";

// const videos = [
//     { id: 1, src: "video1.mp4", description: "Video 1 Description" },
//     { id: 2, src: "video2.mp4", description: "Video 2 Description" },
//     { id: 3, src: "video3.mp4", description: "Video 3 Description" },
// ];

// const App = () => {
//     return (
//         <div className="h-screen overflow-y-scroll snap-y snap-mandatory w-4/5">
//             {videos.map((video) => (
//                 <div
//                     key={video.id}
//                     className=" border-2 h-screen flex flex-col items-center justify-center snap-start relative"
//                 >
//                     <div className="w-full max-w-[540px] aspect-[9/16] bg-black rounded-lg overflow-hidden">
//                         <video
//                             src={video.src}
//                             className="w-full h-full object-cover"
//                             controls
//                             autoPlay
//                             loop
//                         />
//                     </div>
//                     <div className="absolute bottom-5 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md text-sm">
//                         {video.description}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default App;
