import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global.css'
import NavBar from './pages/global/components/navbar'
import Home from './pages/home/components/home'
import Pieces from './pages/pieces/components/pieces'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home />}/>         
            <Route path='/pieces' element={<Pieces />}/>
            {/* <Route path='/add' element={<Add />}/>
            <Route path='/about' element={<About />}/> */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
