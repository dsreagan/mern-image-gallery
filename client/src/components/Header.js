import React, { useState } from 'react'
import { Search, Favorite } from '@mui/icons-material'
import fetchImages from '../utils/fetchImages'
import { getSavedImages } from '../utils/operations'

export default function Header(props) {

    const [searchInput, setSearchInput] = useState('')
    const [imageData, setImageData] = useState([])

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSearch = async () => {
        const unsplashData = await fetchImages(searchInput)
        const images = unsplashData.map(singleImage => {
            return {
                id: singleImage.cover_photo.id,
                url: singleImage.cover_photo.urls.small
            }
        })
        props.setImages(images)
    }
    
    // You haven't liked any images yet, search for images and click them to like them and save them in this folder.
    // pop up window with above statement
    const loadLikedImages = async () => {
        const images = await getSavedImages()
        images && props.setImages(images)
    }

    return (
        <div className="header">
            <div className="search-div">
                <div className="search-bar-wrapper">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={handleChange}
                        value={searchInput}
                    />
                    <button
                        disabled={!searchInput}
                        onClick={handleSearch}
                    >
                    <Search />
                    </button>
                </div>
            </div>
            <div className="icon-div"> 
                <div className="icon" onClick={loadLikedImages}>
                    <Favorite 
                        style={{ color: "white", fontSize:40 }} 
                    />
                </div>
           </div>
        </div>
    )
}