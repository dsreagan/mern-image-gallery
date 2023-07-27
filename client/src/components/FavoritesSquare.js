import { Favorite } from '@mui/icons-material'

export default function FavoritesSquare(props) {

  return (
    <div 
        className="favorites-square"
        onClick={() => props.setGetFavorites(true)}
    > 
        <Favorite 
            style={{ color: "white", fontSize:40 }} 
        />
    </div>
  )
}
