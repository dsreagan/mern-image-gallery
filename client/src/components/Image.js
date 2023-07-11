import React, { useState } from 'react'
import { FavoriteBorder, Favorite } from '@mui/icons-material'

export default function Image({imageData}) {
    
    const image = imageData.cover_photo.urls.small
    console.log(image)

    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = (e) => {
        setIsFavorite(prev => !prev)
        // pass image prop to backend
        
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