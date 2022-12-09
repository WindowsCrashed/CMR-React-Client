import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global.css'
import Composers from './pages/composers'
import Contribute from './pages/contribute'
import NavBar from './templates/navbar'
import Home from './pages/home'
import Pieces from './pages/pieces'
import Login from './pages/login'
import ViewComposer from './pages/view-composer'
import ViewPiece from './pages/view-piece'
import './utils.css'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home />}/>         
            <Route path='/pieces' element={<Pieces />}/>
            <Route path='/composers' element={<Composers />}/>
            <Route path='/contribute' element={<Contribute />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/composers/:id' element={<ViewComposer />}/>
            <Route path='/pieces/:id' element={<ViewPiece />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
