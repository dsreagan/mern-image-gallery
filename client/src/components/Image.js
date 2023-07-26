import React, { useState, useEffect } from 'react'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { saveImage, deleteImage } from '../utils/operations'

export default function Image(props) {

    const [isFavorite, setIsFavorite] = useState(() => props.isAlreadyFavorited ? true : false)

    useEffect(() => {

        // this needs to be refactored
        // every image loaded has to go through a db transaction like this
        isFavorite ? 
            saveImage(props.userInfo.userId, props.userInfo.accessToken, props.image)
        :   
            deleteImage(props.userInfo.userId, props.userInfo.accessToken, props.image)

    }, [isFavorite, props])

    return (
        <div className="image-container" onClick={() => setIsFavorite(prev => !prev)}>
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