import axios from 'axios'

const registerUser = async (username, password) => {
    try {
        const res = await axios.post('http://localhost:3000/auth/register',
            {
                username: username,
                password: password
            }
        )
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}

const loginUser = async (username, password) => {
    try {
        const res = await axios.post('http://localhost:3000/auth/login',
            {
                username: username,
                password: password
            }
        )
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
        const res = await axios.put(`http://localhost:3000/user/save/${userId}`, 
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
    console.log(accessToken)
    try {
        const res = await axios.put(`http://localhost:3000/user/delete/${userId}`, 
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
const getUserLibrary = async (userId, accessToken) => {
    try {
        const res = await axios.get(`http://localhost:3000/user/library/${userId}`,
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

export { registerUser, loginUser, saveImage, deleteImage, getUserLibrary }