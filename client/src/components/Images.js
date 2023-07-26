import Image from '../components/Image'

export default function Images (props) {

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