import React, { useState } from 'react'
import { FavoriteBorder, Favorite } from '@mui/icons-material'

export default function Image({imageData}) {

    const image = imageData.cover_photo.urls.small
    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = (e) => {
        setIsFavorite(prev => !prev)
        sendToApi(image)
    }

    // Send un/favorited url to backend
    // So we can save or delete from user's library
    const sendToApi = () => {
        console.log(image)
    }

    return (
        <div className="image-container" onClick={toggleFavorite}>
            <div className="favorites-container">
                {isFavorite ? 
                    <Favorite style={{ color: "red", fontSize:50 }}/> : 
                    <FavoriteBorder style={{ color: "lightgrey", fontSize:50 }}/>
                }
            </div>    
            <img className="image" src={image} alt={imageData.cover_photo.alt_description} />
        </div>
    )
}