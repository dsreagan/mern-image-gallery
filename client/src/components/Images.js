import Image from '../components/Image'

export default function Images (props) {

    //const [isAlreadyFavorited, setIsAlreadyFavorited] = useState(flase)
    // load user library here
    //check if there are search images and cross reference them with user library
    //if there are no search images then pass user library photos

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