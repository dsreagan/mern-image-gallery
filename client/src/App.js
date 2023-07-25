import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AccountCircle from './components/AccountCircle'
import FavoritesSquare from './components/FavoritesSquare'
import Images from './components/Images'
import Modal from './components/Modal'
import BodyText from './components/BodyText'

export default function App() {

  const [userInfo, setUserInfo] = useState(
    {userId: '', userName: '', accessToken: ''}
  )
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [images, setImages] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {

    const procedure = async () => {
      console.log(userInfo)
      if(userInfo.userId.length > 0) {
        setIsLoggedIn(true)
      }
    }
    procedure()
  })

  return (
    <div className="App">
      <AccountCircle 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}     
        setModalIsOpen={setModalIsOpen} 
      />

      {isLoggedIn && 
        <FavoritesSquare 
          userInfo={userInfo}
          setImages={setImages}     
        />
      }
      
      <Header
        setImages={setImages}
        userInfo={userInfo}
      />

      {images.length > 0 ?
        <Images 
          images={images}
          userInfo={userInfo}
        />
        :
        <BodyText
          userName={userInfo.userName.toString()}
          isLoggedIn={isLoggedIn}
        />
      }

      {modalIsOpen && 
        <Modal 
        setModalIsOpen={setModalIsOpen}
        setUserInfo={setUserInfo}
        />
      }
      
    </div>
  )
}