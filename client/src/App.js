import React, { useState } from 'react'
import SearchHeader from './components/SearchHeader'
import Image from './components/Image'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {

  const [images, setImages] = useState([])

  return (

    // <Route>
    //   <Switch>
    //     <Route>
        
    //     </Route>
    //   </Switch>
    // </Route>

    <div className="App">
      <SearchHeader setImages={(images) => setImages(images)} />
      <div className="image-grid">
        {images.length > 0 && images.map((image) => (
          <Image key={image.id} imageData={image} />))
        }
      </div>
    </div>
  )
}