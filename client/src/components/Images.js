import { useState, useEffect } from 'react'
import Image from '../components/Image'
import { saveImage, deleteImage } from '../utils/operations'

export default function Images (props) {

  const [targetImage, setTargetImage] = useState('')
  // not working properly and redundant
  const [favoriteImage, setFavoriteImage] = useState(false)

  useEffect(() => {

    const likeUnlikeImage = async () => {
      try {
        if (favoriteImage) {
          console.log(`liked ${targetImage}`)
          await saveImage(
            props.userInfo.userId, 
            props.userInfo.accessToken, 
            targetImage
          )
        } else {
          await deleteImage(
            props.userInfo.userId, 
            props.userInfo.accessToken, 
            targetImage
          )
          console.log(`unliked ${targetImage}`)
        }
        setTargetImage('')
      } catch (err) {
        console.log('Your selection was not updated.')
      }
    }
    targetImage.length > 0 && likeUnlikeImage()

  }, [targetImage, favoriteImage, props])

    return (
        <div  className="image-grid">
            {props.images.length > 0 && props.images.map((image) => (
                <Image 
                    key={image.id}
                    image={image.url} 
                    setTargetImage={setTargetImage}
                    setFavoriteImage={setFavoriteImage}
                />
            )
            )}
        </div>
        
    )
}