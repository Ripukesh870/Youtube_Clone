import React, { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import data from "../../data/data.json";
import log from "../../data/log.jpg";
import { videoPlay } from "../../redux/reducer/action";

// import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Subscribe() {
  const [menu, setMenu] = useState(true);
  const dispach = useDispatch();
  const navigate = useNavigate();
  
  const handleClickVideo = (e) => {
    // console.log(e.id);
    dispach(videoPlay(e));
    navigate(`/video/${e.id}`);
  };

  const handleClick=()=>{
    setMenu(!menu)
  }
  const handleManage=()=>{
    navigate("/subscriber/manages")
  }

  return (
    <div className="px-4 w-full sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 h-screen overflow-y-scroll border-2">
      <div className=" w-full mt-2">
        <div className=" flex p-5 justify-between">
          <h1 className="text-2xl">Latest </h1>
          <div className="flex gap-5  ">
            <h1 className="text-2xl text-blue-700 cursor-pointer" onClick={handleManage}>Manage</h1>
            {menu == true ? (
              <ViewModuleIcon fontSize="large" className="cursor-pointer" onClick={handleClick}/>
            ) : (
              <ListIcon fontSize="large" className="cursor-pointer" onClick={handleClick} />
            )}
          </div>
        </div>
      </div>
      {
        menu==false ?
      
      <div className=" w-full h-screen py-5 grid grid-cols-1 gap-5 gap-y-0  md:grid-cols-3  sm:grid-cols-2 lg:grid-cols-4">
        {
          data.map((items, index) => (
            <div
                className=" rounded-lg shadow-md flex flex-col  h-5/6 hover:bg-zinc-800 bg-zinc-900 pb-6 "
                key={index}
                onClick={() => handleClickVideo(items)}
            >
                <div className="flex justify-center items-center h-[230px] sm:h-[200px]">
                   <img src={items.thumbnailUrl} alt="thumbnail" className="rounded-xl w-full h-[180px] sm:h-[150px]" />
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
      </div> :

      <div className=" w-full h-screen py-5 grid grid-cols-1 gap-5 gap-y-0  ">
        {data.map((items, index) => (
          <div
            className=" rounded-lg shadow-md flex flex-row   hover:bg-zinc-800 bg-zinc-900 pb-3 p-3 my-3 mx-2"
            key={index}
            onClick={() => handleClickVideo(items)}
          >
            <div className="w-2/5 flex justify-center items-center h-full sm:h-[200px] ">
              <img
                src={items.thumbnailUrl}
                alt="thumbnail"
                className="rounded-xl w-full h-full "
              />
            </div>
            <div className=" w-3/5 lg:w-2/4 p-4 ">
              <div className="flex items-center ">
                <img
                  className="w-8 h-8 rounded-full p-1 m-2 "
                  src={log}
                  alt="author avatar"
                />
                <p className="text-sm font-semibold  truncate">{items.title}</p>
              </div>
              <div></div>
              <p className="text-sm text-gray-300 px-12 truncate">
                {items.author} &nbsp; &nbsp; {items.views} &nbsp;&nbsp;{" "}
                {items.uploadTime}
              </p>
              <p className="line-clamp-2 my-3 mx-12 text-sm">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>
}
    </div>
  );
}

export default Subscribe;
