import React, { useState } from 'react'
import axios from 'axios'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'

export default function SearchHeader(props) {

    const [searchInput, setSearchInput] = useState('')

    function handleChange(event) {
        setSearchInput(event.target.value)
    }

    const fetchAPI = async () => {
        const response = await axios.get(`https://api.unsplash.com/search/collections?page=1
          &query=${searchInput}
          &client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        const data = await response.data.results
        console.log(data)
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
                    onClick={fetchAPI}
                >Search</button>
            </div>
            <div className="library-div">
                <PhotoLibraryIcon style={{ color: "lightgrey", fontSize:50 }} />
            </div>
        </div>
    )
}