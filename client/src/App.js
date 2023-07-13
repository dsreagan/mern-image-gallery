import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import axios from 'axios'
import { 
  registerUser, 
  getUserLibrary, 
  loginUser, 
  saveImage, 
  deleteImage 
} from './utils/operations'

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [images, setImages] = useState([])

  useEffect(() => {

    const procedure = async () => {
      const {userId, userName, accessToken} =  await loginUser('Mike', 'hello123')
      console.log(userId, userName, accessToken)
      await deleteImage(userId, accessToken, 'unique123')
      await getUserLibrary(userId, accessToken)
    }
    procedure()

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