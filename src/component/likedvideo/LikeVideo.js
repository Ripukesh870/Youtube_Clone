import React from 'react'
import data from "../../data/data.json"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { videoPlay } from "../../redux/reducer/action";
import log from "../../data/log.jpg";


function LikeVideo() {

  const dispach = useDispatch();
  const nav = useNavigate();
  

  const handleClick_video = (items) => {
      console.log(items);
      dispach(videoPlay(items));
      nav(`/video/${items.id}`);
    };

  return (
    <div className='h-screen lg:flex border-2 w-full sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 '>
      <div className='w-full sm:w-1/3 h-[85%] border-2 m-4 rounded-lg p-2 bg-gradient-to-b from-orange-100 to-zinc-900' >
        <div className='border-2 flex text-black h-3/6 justify-center p-2' >
           <img src={log} className='boder-2'/>
        </div>
        <div className='border-2 text-white h-3/6'>
          <h1>like videos</h1>
          <div>
          <h2>web development </h2>
          <h3>7 videos </h3>
          </div>
         <div>
          <button>
            Play all
          </button>
         </div>
          
        </div>
      </div>
      <div className='w-full sm:w-2/3 h-[90%] p-4  '>
        <div className=' h-[100%] overflow-y-scroll scrollbar-none'>
          <h1>Video </h1>
          <div className=''>
          {data.map((items) => (
              <div
                key={items.id}
                className=" w-full h-40 flex rounded-lg p-2 my-3 bg-zinc-900 hover:bg-zinc-800"
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

          {/* <div className='border-2 '>

          
          {data.map((items) => (
              <div
                key={items.id}
                className="border-2 w-full h-40 flex rounded-lg p-2 my-3 bg-zinc-900 hover:bg-zinc-800"
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
            </div> */}
            </div>
      </div>
    </div>
  )
}

export default LikeVideo
