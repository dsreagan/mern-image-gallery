import React, { useState } from 'react'
import { FavoriteBorder, Favorite } from '@mui/icons-material'

export default function Image({ imageData, setTargetImage, setSaveImage }) {

    const image = imageData.cover_photo.urls.small
    const [isFavorite, setIsFavorite] = useState(false)

    const likeUnlikeImage = async (e) => {
        setIsFavorite(prev => !prev)
        setSaveImage(prev => !prev)
        setTargetImage(image)
    }

    return (
        <div className="image-container" onClick={likeUnlikeImage}>
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