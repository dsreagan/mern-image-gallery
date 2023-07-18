import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Images from './components/Images'
import Modal from './components/Modal'
import axios from 'axios'
import { 
  registerUser, 
  getSavedImages,
  logInUser, 
  saveImage, 
  deleteImage 
} from './utils/operations'

export default function App() {

  const [userInfo, setUserInfo] = useState(
    {userId: '', userName: '', accessToken: ''})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [images, setImages] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

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
  useEffect(() => {
    const procedure = async () => {
      console.log(userInfo)
    }
    procedure()
  })

  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        setImages={setImages}
        setModalIsOpen={setModalIsOpen}
      />
      <Images 
        images={images}
      />
      {modalIsOpen && 
        <Modal 
        setModalIsOpen={setModalIsOpen}
        setUserInfo={(userId, userName, accessToken) => {
            setUserInfo({userId: userId, userName: userName, accessToken: accessToken})
          }
        }
        />
      }
    </div>
  )
}