import React, { useState } from 'react'
import { Search } from '@mui/icons-material'

export default function Header(props) {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    const handleSearch = () => {
        props.setSearch(searchInput)
        props.setGetFavorites(false)
    }

    return (
        <div className="search-div">
            <div className="search-bar-wrapper">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                    value={searchInput}
                    onKeyDown={handleKeyDown}
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