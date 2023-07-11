import React from 'react'

export default function Image({image}) {

    return (
        <div className="image-flex">
            <img className="image" src={image.cover_photo.urls.small} alt={image.cover_photo.alt_description} />
        </div>
    )
}