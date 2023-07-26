import React from 'react'

export default function BodyText(props) {



  return (
    <div className="body-text-div">
        <h1 className="body-text">
            { props.isLoggedIn ?
                `Welcome back ${props.userName}. 
                Search for images using the search bar above, 
                click the ones you like, and revisit your favorites
                at any time by clicking heart square at the top right.`
              :
                `This is an image gallery. 
                Search for images using the search bar above. 
                Log in or sign up by clicking the account icon. 
                Once logged in you can like any image and revisit it 
                later in your favorites library.`
            }
        </h1>
    </div>
  )
}
