import React, { useEffect, useState } from 'react'
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
import SubscriberManage from './subscribe/SubscriberManage'
import LoadingPage from './nav/LoadingPage'
import DataNotFound from './home/DataNotFound'

function App1() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2-second loading time
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (

        <div className='overflow-hidden'>
            {/* <LoadingPage/> */}
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
                    <Route path="/subscriber/manages" element={<SubscriberManage />} />
                    
                    <Route path="/library" element={<Library />} />
                    
                    <Route path="/history" element={<History />} />
                    <Route path="/shots" element={<Shots />} />
                    <Route path="/watchlist" element={<WatchLater />} />
                    <Route path="/likedvideo" element={<LikeVideo />} />
                    <Route path="/datanotfound" element={<DataNotFound />} />

                    
                </Routes>
            </div>
        </div>

    )
}

export default App1
