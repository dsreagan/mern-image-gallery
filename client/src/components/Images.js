import Image from '../components/Image'

export default function Images ({ images }) {

    return (
        <div  className="image-grid">
            {images.length > 0 && images.map((image) => (
                <Image key={image.id} imageData={image} />))
            }
        </div>
        
    )
}