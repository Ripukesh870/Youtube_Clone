import React from 'react'
import Navbar from './nav/Navbar'
import Sidebar from './nav/Sidebar'
import Home from './home/Home'
import { Route,  Routes } from 'react-router-dom'
import VideoDetails from './home/VideoDetails'
import Shots from './shots/Shots'
import History from './history/History'
import Library from './library/Library'
import WatchLater from './watchlater/WatchLater'
import LikeVideo from './likedvideo/LikeVideo'
import Subscribe from './subscribe/Subscribe'

function App1() {
    return (

        <div className='border-2 overflow-hidden'>
            <div className='scrollbar-thin'>
                <Navbar />
            </div>
            <div className='flex w-full overflow-hidden'>
                <Sidebar />
                {/* <Home /> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/video/:id" element={<VideoDetails />} />
                    <Route path="/shots" element={<Shots />} />
                    <Route path="/subscribe" element={<Subscribe />} />
                    <Route path="/library" element={<Library />} />
                    
                    <Route path="/history" element={<History />} />
                    <Route path="/shots" element={<Shots />} />
                    <Route path="/watchlist" element={<WatchLater />} />
                    <Route path="/likedvideo" element={<LikeVideo />} />

                </Routes>
            </div>
        </div>

    )
}

export default App1
