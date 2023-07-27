import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AccountCircle from './components/AccountCircle'
import FavoritesSquare from './components/FavoritesSquare'
import Images from './components/Images'
import Modal from './components/Modal'

export default function App() {

  const [userInfo, setUserInfo] = useState(
    {userId: '', userName: '', accessToken: ''}
  )
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [search, setSearch] = useState('')
  const [getFavorites, setGetFavorites] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {

    // delete this before build and deploy
    const procedure = async () => {
      console.log(userInfo)
      // if(userInfo.userId.length > 0) {
      //   setIsLoggedIn(true)
      // }
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
          setGetFavorites={setGetFavorites}
        />
      }
      
      <Header
        setSearch={setSearch}
        setGetFavorites={setGetFavorites}
      />

      <Images 
        userInfo={userInfo}
        search={search}
        setSearch={setSearch}
        getFavorites={getFavorites} 
        isLoggedIn={isLoggedIn}
      />

      {modalIsOpen && 
        <Modal 
          setModalIsOpen={setModalIsOpen}
          setUserInfo={setUserInfo}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      }
      
    </div>
  )
}