import { useState, useEffect } from 'react'
import Image from '../components/Image'
import { saveImage, deleteImage } from '../utils/operations'

export default function Images ({ images }) {

  const [targetImage, setTargetImage] = useState('')
  const [saveImage, setSaveImage] = useState(false)

  useEffect(() => {

    // Save or delete from user's library
    const likeUnlikeImage = async () => {
      try {
        if (saveImage) {
          console.log(`liked ${targetImage}`)
          // save image take 3 arguments
          // await saveImage(targetImage)
        } else {
          // delete image take 3 arguments
          // await deleteImage("testing123")
          console.log(`unliked ${targetImage}`)
        }
        setTargetImage('')
      } catch (err) {
        console.log('Your selection was not updated.')
      }
    }
    targetImage.length > 0 && likeUnlikeImage()

  }, [targetImage, saveImage])

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