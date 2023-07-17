import React, { useState } from 'react'
import { PhotoLibrary, Search, Person } from '@mui/icons-material'
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
    
    
    // handle error if it can't load saved images, the user might not have any
    const loadLikedImages = async () => {
    const images = await getSavedImages()
    props.setImages(images)
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
                {props.isLoggedIn ? 
                    <div className="icon">
                        <PhotoLibrary 
                            style={{ color: "white", fontSize:40 }} 
                            onClick={loadLikedImages}
                        />
                    </div>
                    :
                    <div className="icon">
                        <Person style={{ color: "white", fontSize:40 }} />
                    </div>
                }
           </div>
        </div>
    )
}