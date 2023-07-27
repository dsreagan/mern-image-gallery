import { useState, useEffect } from 'react'
import Image from '../components/Image'
import { saveImage, deleteImage, getSavedImages } from '../utils/operations'
import fetchImages from '../utils/fetchImages'
import BodyText from '../components/BodyText'

export default function Images (props) {

    // need to see if any of the searched for images have been liked and then set them as liked before displaying

    const [imagesToDisplay, setImagesToDisplay] = useState([])
    const [imgToSave, setImgToSave] = useState('')
    const [imgToDelete, setImgToDelete] = useState('')

    useEffect(() => {


        const imagesForNonUser = async () => {

            if (props.search.length > 0) {

                const unsplashData = await fetchImages(props.search)
                const unsplashImages = unsplashData.map(singleImage => {
                    return {
                        id: singleImage.cover_photo.id,
                        url: singleImage.cover_photo.urls.small
                    }
                })
                setImagesToDisplay(unsplashImages)
            } else {
                setImagesToDisplay([])
            }
        }
        


        const imagesForUser = async () => {
            try {

                imgToDelete.length > 0 && 
                    await deleteImage(props.userInfo.userId, props.userInfo.accessToken, imgToDelete)
                setImgToDelete('')

                imgToSave.length > 0 && 
                    await saveImage(props.userInfo.userId, props.userInfo.accessToken, imgToSave)
                setImgToSave('')

                const urlArray = await getSavedImages(props.userInfo.userId, props.userInfo.accessToken)
                    const favImages = urlArray.map((url, index) => {
                        return {
                            id: index,
                            url: url
                        }
                    })
            
                if (props.search.length > 0) {

                    const unsplashData = await fetchImages(props.search)
                    const unsplashImages = unsplashData.map(singleImage => {
                        return {
                            id: singleImage.cover_photo.id,
                            url: singleImage.cover_photo.urls.small
                        }
                    })
                    setImagesToDisplay(unsplashImages)
                } else {
                    setImagesToDisplay([])
                }
                
                if (props.getFavorites) {
                    setImagesToDisplay(favImages)
                }

            } catch (err) {
                console.log(err)
            }
        }

        if (props.isLoggedIn) {
            imagesForUser()
        } else {
            imagesForNonUser()
        }

    }, [imgToSave, imgToDelete, props])
    

    return (
        <div  className="image-grid">
            {imagesToDisplay.map((image) => (
                <Image 
                    key={image.id}
                    image={image.url}
                    setImgToSave={setImgToSave}
                    setImgToDelete={setImgToDelete}
                />
            )
            )}
        </div>
        
    )
}