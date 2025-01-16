import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoPauseOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
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

  const dispach = useDispatch();
  const nav = useNavigate();
  const history = useSelector((state) => state.history.history);
  const shortHistory = useSelector((state) => state.shots.history);

  const handleClick_video = (items) => {
    console.log(items);
    dispach(videoPlay(items));
    nav(`/video/${items.id}`);
  };
  return (

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
        <div className="">
          <h1 className="flex justify-center mt-2 text-lg text-zinc-400">
            Shots History
          </h1>
        </div>
        {shortHistory.length > 0 ? (
          <div className=" flex  gap-2 p-3 overflow-hidden h-full overflow-x-scroll scrollbar-none ">
            {shortHistory.map((items) => (
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
        ) :
          <div className="flex items-center justify-center h-full">
            <h1 className="text-center text-gray-500">No data found</h1>
          </div>
        }
      </div>


      <p className=" text-xl text-center text-gray-300 p-3 ">
        Long video history
      </p>
      <div className=" mb-16 overflow-y-scroll h-full w-full px-3 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-500 scrollbar-none ">
        {
        history.length > 0 ? (
        history.map((items) => (
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
        ))):(
          <div className="flex  justify-center h-full">
          <h1 className="text-gray-500 text-lg">No data found</h1>
        </div>
        )
      
      }
      </div>
    </div>
  );
}

export default History;
