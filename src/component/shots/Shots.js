
import { useState, useRef, useEffect } from "react";
import v1 from "../../video/vi.mp4";
import v2 from "../../video/v2.mp4";
import v3 from "../../video/v3.mp4";
import log from "../../data/log.jpg";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { addToShotsHistory } from "../../redux/reducer/action";
import { useDispatch, useSelector } from "react-redux";

const VideoList = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.shots.history);
  console.log(history)

  const videos = [
    { src: v1, label: "Video 1 erguegubvdf ibherb  df b " },
    { src: v2, label: "Video 2" },
    { src: v3, label: "Video 3" },
  ];
  const infiniteVideos = [...videos, ...videos, ...videos]; // Extend the array to simulate infinite scrolling

  const videoSide = [
    {
      id: 1,
      label: "Like",
      icon: <ThumbUpOffAltIcon className="m-1" fontSize="medium"/>,
      count: 0, // Example count to show likes
    },
    {
      id: 2,
      label: "Dislike",
      icon: <ThumbDownOffAltIcon className="m-1 " fontSize="medium"/>,
      count: 0, // Example count to show dislikes
    },
    {
      id: 3,
      label: "Comment",
      icon: <CommentIcon className="m-1" fontSize="small" />,
      count: 0, // Example count to show comments
    },
    {
      id: 4,
      label: "Share",
      icon: <ShareIcon className="m-1 " fontSize="small"/>,
      count: "Share", // Example count to show comments
      action: () => alert("Share functionality triggered"), // Example action
    },
    {
      id: 5,
      label: "More Options",
      icon: <MoreVertIcon className="m-1 " fontSize="small" />,
      // count: "More", // Example count to show comments
      action: () => alert("More options triggered"), // Example action
    },
  ];
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Autoplay the active video
    videoRefs.current.forEach((video, index) => {
      if (index === activeVideoIndex) {
        video?.play();
        dispatch(addToShotsHistory(infiniteVideos[index]));

      } else {
        video?.pause();
      }
    });
  }, [activeVideoIndex]);

  const handleVideoClick = (index) => {
    // Toggle active video on click
    
    setActiveVideoIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex-col w-full sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 h-screen overflow-y-scroll snap-y snap-mandatory ">
      {infiniteVideos.map((video, index) => (
        <div key={index} className="w-full h-[90%] snap-start " style={{border:"2px solid black"}}  >
          <div className=" mx-auto h-[90%] my-[3%] relative " style={{ aspectRatio: "9 / 16" }} >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className=" h-full rounded-xl"
              src={video.src}
              loop
              // muted
              // style={{ aspectRatio: "16 / 9" }}
              onClick={() => handleVideoClick(index)}
            />
            <div className=" absolute bottom-2 w-full  ">
              {/* <hr className="mb-2 " /> */}
              <div className="relative flex pl-3 sm:px-3 justify-between items-center w-[85%] sm:w-full ">
                <div className="flex items-center space-x-2 w-[60%] ">
                  <img src={log} className="rounded-full w-8 h-8" />
                  <h1 className="text-sm truncate">{video.label}</h1>
                </div>

                <div className="my-auto right-0 ">
                  <button className="text-sm rounded-lg bg-red-900 px-4 py-1 ">
                    Subscribe
                  </button>
                </div>
              </div>
              <h1 className="mx-3 text-sm my-1">video title # tags </h1>
            </div>
            <div className=" sm:w-14 absolute bottom-3 sm:right-[-4rem] justify-center right-0 px-1 " >
               
                  {
                    videoSide.map((item) => (
                      <div key={item.id} className="flex flex-col items-center pb-1 my-1 py-1 sm:my-0 ">
                        <button 
                          onClick={item.action}
                          className=" rounded-full sm:p-1 sm:border sm:rounded-full hover:bg-gray-200 "
                        >
                          {item.icon}
                        </button>
                        {/* <p>{item.count}</p> */}
                        {item.count !== undefined && <p className="text-xs">{item.count}</p>}
                      </div>
                  ))}
              <div className=" w-full flex justify-center items-center " >
                <img src={log} className="rounded-full w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
