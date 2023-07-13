import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import axios from 'axios'
import { registerUser, getUserLibrary, loginUser } from './utils/operations'

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [images, setImages] = useState([])

  useEffect(async () => {

    
    const {userId, userName, accessToken} =  await loginUser('Dicki Boy', 'hello123')
    console.log(userId, userName, accessToken)

    
  })

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