import React, { useState } from 'react'
import { PhotoLibrary, Search } from '@mui/icons-material'
import fetchImages from '../utils/fetchImages'


export default function SearchHeader(props) {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSearch = async () => {
        const imageData = await fetchImages(searchInput)
        props.setImages(imageData)
    }

    return (
        <div className="header">
            <div className="search-div">
                <input
                    type="text"
                    placeholder="Search for images..."
                    onChange={handleChange}
                    value={searchInput}
                />
                <button
                    disabled={!searchInput}
                    // onClick={fetchImages}
                    onClick={handleSearch}
                >
                  <Search />
                </button>
            </div>
            <div className="library-div">
                <PhotoLibrary style={{ color: "#F5F5F5", fontSize:50 }} />
            </div>
        </div>
    )
}