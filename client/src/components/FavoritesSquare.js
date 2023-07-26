import { Favorite } from '@mui/icons-material'
import { getSavedImages } from '../utils/operations'

export default function FavoritesSquare(props) {

    // You haven't liked any images yet, search for images and click them to like them and save them in this folder.
    // pop up window with above statement
    const loadLikedImages = async () => {
        const urlArray = await getSavedImages(props.userInfo.userId, props.userInfo.accessToken)
        if(urlArray) {
            const images = urlArray.map((url, index) => {
                return {
                    id: index,
                    url: url
                }
            })
            props.setImages(images)
            props.setAreFavoriteImages(true)
        }
    }

  return (
    <div 
        className="favorites-square"
        onClick={loadLikedImages}
    > 
        <Favorite 
            style={{ color: "white", fontSize:40 }} 
        />
    </div>
  )
}
