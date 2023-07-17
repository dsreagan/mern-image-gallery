import { useState, useEffect } from 'react'
import Image from '../components/Image'

export default function Images ({ images }) {

  const [targetImage, setTargetImage] = useState('')
  const [saveImage, setSaveImage] = useState(false)

  useEffect(() => {

    // Save or delete from user's library
    const likeUnlikeImage = async () => {
      try {
        if (saveImage) {
            // await saveImage(targetImage)
            console.log(`liked ${targetImage}`)
            
        } else {
            // await deleteImage(targetImage)
            console.log(`unliked ${targetImage}`)
        }
        setTargetImage('')
      } catch (err) {
        console.log('Your selection was not updated.')
      }
    }
    targetImage.length > 0 && likeUnlikeImage()

  }, [targetImage])

    return (
        <div  className="image-grid">
            {images.length > 0 && images.map((image) => (
                <Image 
                    key={image.id}
                    image={image.url} 
                    setTargetImage={setTargetImage}
                    setSaveImage={setSaveImage}
                />
            )
            )}
        </div>
        
    )
}