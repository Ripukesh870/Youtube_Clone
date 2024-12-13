import React from 'react'
import Navbar from './nav/Navbar'
import Sidebar from './nav/Sidebar'
import Home from './home/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import VideoDetails from './home/VideoDetails'
import Shots from './shots/Shots'
import History from './history/History'

function App1() {
    return (

        <div className=''>
            <div className=''>
                <Navbar />
            </div>
            <div className='flex w-full'>
                <Sidebar />
                {/* <Home /> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/video/:id" element={<VideoDetails />} />
                    <Route path="/shots" element={<Shots />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/shots" element={<Shots />} />

                </Routes>
            </div>
        </div>

    )
}

export default App1
