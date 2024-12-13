import React from 'react'

function Shots() {
    return (
        <div className='w-4/5 border-2'>
            <div className='border-2 w-1/3 m-auto mt-11 h-5/6 rounded-lg'>
                <video src="" className='border-2 w-full h-full'></video>
                {/* <Shots /> */}
                <div className=' border-2 px-4 py-1'>
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
        </div>
    )
}

export default Shots;
