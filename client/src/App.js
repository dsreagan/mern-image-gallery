import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AccountCircle from './components/AccountCircle'
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

      <Header
        setImages={setImages}
      />

      {images.length > 0 ?
        <Images 
        images={images}
        />
        :
        <BodyText />
      }

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