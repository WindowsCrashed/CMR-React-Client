import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global.css'
import NavBar from './pages/global/components/navbar'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            {/* <Route path='/' element={<Home />}/>         
            <Route path='/search' element={<Search />}/>
            <Route path='/add' element={<Add />}/>
            <Route path='/about' element={<About />}/> */}
        </Routes>
      </BrowserRouter>
      
      <h1 className='brand'>Hello World!</h1>
      <h2>Testing 2</h2>
    </React.Fragment>
  )
}

export default App
