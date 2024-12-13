import React from "react";
import hiistory from "../../data/data.json";
function History() {
  return (
    <div className="w-4/5 border-2 h-screen">
      <div className="w-full border-2 h-1/2">
        <h1>Long video history</h1>
        <div className="border-2 overflow-scroll h-full">
          {hiistory.map((items) => (
            <div className="w-[60%]  flex">
              <div className="w-2/5">
                <img src={items.thumbnailUrl} alt="" />
              </div>
              <div className="w-3/5 border-2 p-2">
                <h1 className="text-xl">{items.title}</h1>
                <h6 className="text-xs">
                  {items.author} {items.views} views
                </h6>{" "}
                <br />
                <h6 className="text-sm">{items.title}</h6>
                <h5 className="text-sm">{items.description}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-2 h-1/2">
      <h1>Long video history</h1>
        <div className="border-2 overflow-scroll h-full">
          {hiistory.map((items) => (
            <div className="w-[60%]  flex">
              <div className="w-2/5">
                <img src={items.thumbnailUrl} alt="" />
              </div>
              <div className="w-3/5 border-2 p-2">
                <h1 className="text-xl">{items.title}</h1>
                <h6 className="text-xs">
                  {items.author} {items.views} views
                </h6>{" "}
                <br />
                <h6 className="text-sm">{items.title}</h6>
                <h5 className="text-sm">{items.description}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
