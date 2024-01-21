import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Work from './Work.jsx'
import Group from './Group.jsx'
import Room from './Room.jsx'
import Chat from './Chat.jsx'
import {Route,Routes,RouterProvider,createBrowserRouter,createRoutesFromElements}from "react-router-dom"


export default function App(){
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Work />}>
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/room' element={<Room />}/>
            <Route path='/group' element={<Group />}/>
        </Route>



    ))
    return(
     <RouterProvider router={router}/>

    )
}
      

