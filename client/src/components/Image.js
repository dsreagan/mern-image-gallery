import React, { useState } from 'react'
import { FavoriteBorder, Favorite } from '@mui/icons-material'

export default function Image({ image, setTargetImage, setSaveImage }) {

    const [isFavorite, setIsFavorite] = useState(false)

    const likeUnlikeImage = async () => {
        setIsFavorite(prev => !prev)
        setSaveImage(prev => !prev)
        setTargetImage(image)
    }

    return (
        <div className="image-container" onClick={likeUnlikeImage}>
            <div className="favorites-container">
                {isFavorite ? 
                    <Favorite style={{ color: "red", fontSize:45, margin:8 }}/> : 
                    <FavoriteBorder style={{ color: "lightgrey", fontSize:45, margin:8 }}/>
                }
            </div>    
            <img className="image" src={image} alt="Search images" />
        </div>
    )
}