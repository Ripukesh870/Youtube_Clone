import React from "react";
import hiistory from "../../data/data.json";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoPauseOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { videoPlay } from "../../redux/reducer/action";
import { useNavigate } from "react-router-dom";
import v1 from "../../video/vi.mp4";
import v2 from "../../video/v2.mp4";
import v3 from "../../video/v3.mp4";
import log from "../../data/log.jpg";

function History() {
  const videos = [
    { src: v1, label: "Video 1", id: "110" },
    { src: v2, label: "Video 2", id: "111" },
    { src: v3, label: "Video 3", id: "112" },
    { src: v1, label: "Video 1", id: "114" },
    { src: v2, label: "Video 2", id: "115" },
    { src: v3, label: "Video 3", id: "116" },
    { src: v1, label: "Video 1", id: "117" },
    { src: v2, label: "Video 2", id: "118" },
    { src: v3, label: "Video 3", id: "119" },
  ];
  // const infiniteVideos = [...videos, ...videos, ...videos]; // Extend the array to simulate infinite scrolling

  const dispach = useDispatch();
  const nav = useNavigate();

  const handleClick_video = (items) => {
    console.log(items);
    dispach(videoPlay(items));
    nav(`/video/${items.id}`);
  };
  return (
    // <div className="w-5/6 h-screen ">
    // <div
    //   className="w-full h-3/6 flex  "
    //   style={{ borderBottom: "2px solid gray" }}
    // >
    //   <div className="w-1/2 h-5/6 ">
    //     <p className=" text-xl text-center font-bold p-3 ">
    //       Long video history
    //     </p>
    //     <div className=" overflow-y-scroll h-full w-full px-3 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-500 scrollbar-none border-r-2">
    //       {hiistory.map((items) => (
    //         <div
    //           key={items.id}
    //           className="w-full h-40 flex rounded-lg p-3 my-3 bg-zinc-950 hover:bg-zinc-900"
    //           style={{}}
    //           onClick={() => handleClick_video(items)}
    //         >
    //           <div className="w-2/5 h-full ">
    //             <img
    //               src={items.thumbnailUrl}
    //               alt=""
    //               className="h-full w-full rounded-lg"
    //             />
    //           </div>
    //           <div className="w-3/5 p-3 overflow-hidden ">
    //             <h1 className="text-xl truncate">{items.title}</h1>
    //             <h6 className="text-xs truncate">
    //               {items.author} {items.views} views
    //             </h6>
    //             <br />
    //             <h6 className="text-sm truncate">{items.title}</h6>
    //             <h5 className="text-sm truncate">{items.description}</h5>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //     <div className="w-1/2 h-5/6 ">
    //       <p className=" text-xl text-center font-bold p-3 ">
    //         Short video history
    //       </p>

    //       <div className=" grid grid-cols-3 w-full gap-2 p-3 overflow-hidden h-full overflow-y-scroll scrollbar-none ">
    //         {videos.map((items) => (
    //           <div className="relative border-2 aspect-[9/16] flex items-center justify-cente rounded-lg" key={items.id}>
    //             <img src={log} className="w-full h-full" />
    //             <h1 className="absolute bottom-0 left-0 w-full p-2 text-white text-sm bg-black bg-opacity-50 truncate rounded-lg">
    //             {items.label}
    //             </h1>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" h-2/5 flex">
    //     <div className=" w-1/2 h-full text-center">
    //       <div className="  mt-11 justify-center text-center m-auto">
    //         <div className="outline-zinc-600 flex w-[60%] m-auto px-2 rounded-full bg-zinc-950">
    //           <IoSearch fontSize="24px" className="my-2 mx-2" />
    //           <input
    //             type="text"
    //             className="bg-zinc-950 text-white text-lg px-2 py-1 outline-none w-full rounded-full"
    //             placeholder="Search watch history"
    //           />
    //         </div>
    // <div className="border-2 text-[10px] md-">
    //   <div className="border-2 flex w-[40%] m-auto mt-7 p-1 rounded-full px-4 hover:bg-zinc-800 bg-zinc-950">
    //     <RiDeleteBinLine className="text-[14px]" />
    //     <button className="px-2"> Clear all watch history</button>{" "}
    //   </div>
    //   <div className=" flex w-[40%] m-auto mt-5 p-1 rounded-full px-4 hover:bg-zinc-800 bg-zinc-950 border-2 ">
    //     <IoPauseOutline  className="text-[14px]" />{" "}
    //     <button className="px-2"> Pause watch history</button>{" "}
    //   </div>
    // </div>
    //       </div>
    //     </div>
    //     <div className=" w-1/2 h-full">
    //       <div className=" w-full h-full">
    //         <h1 className=" text-center text-xl p-2">Search history</h1>
    //         <div className=" overflow-y-scroll h-4/5 w-full px-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-500 ">
    //           {hiistory.map((items) => (
    //             <div
    //               className="w-full h-40 flex rounded-lg p-3 my-3 bg-zinc-950 hover:bg-zinc-900"
    //               style={{}}
    //               key={items.id}
    //               onClick={() => handleClick_video(items)}
    //             >
    //               <div className="w-2/5 h-full ">
    //                 <img
    //                   src={items.thumbnailUrl}
    //                   alt=""
    //                   className="h-full w-full rounded-lg"
    //                 />
    //               </div>
    //               <div className="w-3/5 p-3 overflow-hidden ">
    //                 <h1 className="text-xl truncate">{items.title}</h1>
    //                 <h6 className="text-xs truncate">
    //                   {items.author} {items.views} views
    //                 </h6>
    //                 <br />
    //                 <h6 className="text-sm truncate">{items.title}</h6>
    //                 <h5 className="text-sm truncate">{items.description}</h5>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full  h-screen xl:w-5/6 lg:w-4/5 md:w-3/4 sm:w-2/3 px-3 py-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-500">
      <div className=" text-[12px] mt-3">
        <div className=" flex w-[70%] md:w-[40%] m-auto p-1 rounded-full px-4 hover:bg-zinc-800 justify-center bg-zinc-900">
          <RiDeleteBinLine className="text-[14px]" />
          <button className="px-2"> Clear all watch history</button>{" "}
        </div>
        <div className=" flex w-[70%] md:w-[40%] m-auto mt-2 p-1 rounded-full px-4 hover:bg-zinc-800 bg-zinc-900 justify-center ">
          <IoPauseOutline className="text-[17px]" />{" "}
          <button className="px-2"> Pause watch history</button>{" "}
        </div>
      </div>
      <div className=" h-2/5 border-b">
        <div className=" flex  gap-2 p-3 overflow-hidden h-full overflow-x-scroll scrollbar-none ">
          {videos.map((items) => (
            <div
              className="relative border-2 aspect-[9/16] flex items-center justify-cente rounded-lg "
              key={items.id}
            >
              <img src={log} className="w-full h-full" />
              <h1 className="text-[10px] absolute bottom-0 left-0 w-full p-1 text-white bg-black bg-opacity-50 truncate rounded-lg">
                {items.label}
              </h1>
            </div>
          ))}
        </div>
      </div>


      {/* <div className="w-full h-3/6 flex  " style={{ borderBottom: "2px solid gray" }} > */}
      {/* <div className=" h-5/6 "> */}
      <p className=" text-xl text-center font-bold p-3 ">
        Long video history
      </p>
      <div className=" mb-16 overflow-y-scroll h-full w-full px-3 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-500 scrollbar-none ">
        {hiistory.map((items) => (
          <div
            key={items.id}
            className="w-full h-40 flex rounded-lg p-3 my-3 bg-zinc-950 hover:bg-zinc-900"
            style={{}}
            onClick={() => handleClick_video(items)}
          >
            <div className="w-2/5 h-full ">
              <img
                src={items.thumbnailUrl}
                alt=""
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="w-3/5 p-3 overflow-hidden ">
              <h1 className="text-xl truncate">{items.title}</h1>
              <h6 className="text-xs truncate">
                {items.author} {items.views} views
              </h6>
              <br />
              <h6 className="text-sm truncate">{items.title}</h6>
              <h5 className="text-sm truncate">{items.description}</h5>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default History;
