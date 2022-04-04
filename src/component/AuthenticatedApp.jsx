import React from 'react'
import '../App.css'
import Navbar from '../component/pages/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from "../component/pages/home/Home"
import Header from '../component/pages/Header/Header'
import Page from "./pages/NotWorkedPages/Page"
import Render from "../component/pages/Render/Render"
import ShowMore from "../component/pages/ShowMore/Showmore"




function AuthenticatedApp(){


    return(
        <>
        <div className="app">
            <div className='container'>
                <Navbar/>             
            <div className='center'>
                 <Header/>
                <Routes>
                        <Route path='' element={<Home/>}/>
                        <Route path='/trending' element={<Page/>}/>
                        <Route path='/subscription' element={<Page/>}/>
                        <Route path='/library' element={<Page/>}/>
                        <Route path='/history' element={<Page/>}/>
                        <Route path='/watch' element={<Page/>}/>
                        <Route path='/favourites' element={<Page/>}/>
                        <Route path='/liked' element={<Page/>}/>
                        <Route path='/music' element={<Page/>}/>
                        <Route path='/games' element={<Page/>}/>
                        <Route path='/show/' element={<Page/>}/>
                        <Route path='/showmore/' element={<ShowMore/>}/>
                        <Route path='/showmore1/' element={<ShowMore/>}/>
                        <Route path='/showmore2/' element={<ShowMore/>}/>
                        <Route path='/setting' element={<Page/>}/>
                        <Route path='/render/:info_id' element={<Render/>}/>
                </Routes>
            </div>
            </div>
        </div>
        </>
    )
}
export default AuthenticatedApp;