import Image from '../components/Image'

export default function Images (props) {

    // need to connect the likes to the image instead of the div that the images occupy

    // need to see if any of the searched for images have been liked and then set them as liked before displaying

    

    return (
        <div  className="image-grid">
            {props.images.map((image) => (
                <Image 
                    key={image.id}
                    image={image.url} 
                    userInfo={props.userInfo}
                    isAlreadyFavorited={props.areFavoriteImages}
                />
            )
            )}
        </div>
        
    )
}