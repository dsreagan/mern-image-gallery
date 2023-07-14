import { useState } from 'react'
import Header from '../components/Header'
import Images from '../components/Images'

export default function Home ({ isLoggedIn }) {

  const [images, setImages] = useState([])

    return (
        <div>
            <Header 
                setImages={(imageData) => setImages(imageData)} 
                isLoggedIn={isLoggedIn}
            />
            <Images 
                images={images}
            />
        </div>
    )
}