import axios from 'axios'

const registerUser = async (username, password) => {
    try {
        const res = await axios.post(`https://image-gallery-api-wua0.onrender.com/auth/register`,
            {
                username: username,
                password: password
            }
        )
        // maybe catch res.data.username and check for that in modal.js
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}

const logInUser = async (username, password) => {
    try {
        const res = await axios.post(`https://image-gallery-api-wua0.onrender.com/auth/login`,
            {
                username: username,
                password: password
            }
        )
        console.log(res)
        const accessToken = res.data.accessToken
        const userName = res.data.username
        const userId = res.data._id
        return {userId, userName, accessToken}
    } catch (err) {
        console.log(err)
    }
}

const saveImage = async (userId, accessToken, imageUrl) => {
    try {
        const res = await axios.put(`https://image-gallery-api-wua0.onrender.com/user/save/${userId}`, 
            {
                image: imageUrl
            },
            {
                headers: {
                    token: `Bearer ${accessToken}`
                }
            }
        )
        return res.data
    } catch (err) {
      console.log(err)
    }
}

const deleteImage = async (userId, accessToken, imageUrl) => {
    try {
        const res = await axios.put(`https://image-gallery-api-wua0.onrender.com/user/delete/${userId}`, 
            {
                image: imageUrl
            },
            {
                headers: {
                    token: `Bearer ${accessToken}`
                }
            }
        )
        return res.data
    } catch (err) {
      console.log(err)
    }
}

// Get Liked Images
const getSavedImages = async (userId, accessToken) => {
    try {
        
        const res = await axios.get(`https://image-gallery-api-wua0.onrender.com/user/library/${userId}`,
            {
                headers: {
                    token: `Bearer ${accessToken}`
                }
            }
        )
        return res.data
    } catch (err) {
      console.log(err)
    }
}

export { registerUser, logInUser, saveImage, deleteImage, getSavedImages }