import React, { useState } from 'react'
import axios from 'axios'
import { PhotoLibrary, Search } from '@mui/icons-material'


export default function SearchHeader(props) {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const fetchImages = async () => {
        const response = await axios.get(`https://api.unsplash.com/search/collections?page=1
          &query=${searchInput}
          &client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        const data = await response.data.results
        props.setImages(data)
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
                    onClick={fetchImages}
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