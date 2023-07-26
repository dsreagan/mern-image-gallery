import React, { useState } from 'react'
import { Search } from '@mui/icons-material'
import fetchImages from '../utils/fetchImages'

export default function Header(props) {

    const [searchInput, setSearchInput] = useState('')

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
        props.setAreFavoriteImages(false)
    }

    return (
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
    )
}