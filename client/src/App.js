import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [images, setImages] = useState([])

  return (
    <div className="App">
      <Header 
          setImages={(imageData) => setImages(imageData)} 
          loggedIn={loggedIn}
        />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
      </Routes>
    </div>
  )
}