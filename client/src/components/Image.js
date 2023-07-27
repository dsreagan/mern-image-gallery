import React, { useState, useEffect } from 'react'
import { FavoriteBorder, Favorite } from '@mui/icons-material'

export default function Image(props) {

    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = () => {
        setIsFavorite(prev => !prev)
        // isFavorite doesn't change until the next render so I'm evaluating it backwards
        !isFavorite ? 
            props.setImgToSave(props.image)
        :
            props.setImgToDelete(props.image)
    }

    return (
        <div className="image-container" onClick={toggleFavorite}>
            <div className="favorites-container">
                {isFavorite ? 
                    <Favorite style={{ color: "red", fontSize:45, margin:8 }}/> : 
                    <FavoriteBorder style={{ color: "lightgrey", fontSize:45, margin:8 }}/>
                }
            </div>    
            <img className="image" src={props.image} alt="Search images" />
        </div>
    )
}