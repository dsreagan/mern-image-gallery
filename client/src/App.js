import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Images from './components/Images'
import Home from './pages/Home'
import Library from './pages/Library'
import axios from 'axios'
import { 
  registerUser, 
  getUserLibrary,
  logInUser, 
  saveImage, 
  deleteImage 
} from './utils/operations'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logIn = async () => {
    try {
      const {userId, userName, accessToken} =  await logInUser('Mike', 'hello123') // get from form
      console.log(userId, userName, accessToken) // for testing
      setIsLoggedIn(true)
    } catch (err) {
      console.log('Wrong username or password.')
      setIsLoggedIn(false)
    }
  }

  return (
    <div className="App">
      
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              isLoggedIn={isLoggedIn}
            />
          } 
        />
        <Route 
          path="/library" 
          element={<Library />}
        />
      </Routes>
      
    </div>
  )
}