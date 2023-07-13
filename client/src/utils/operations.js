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

const getUserLibrary = async () => {
    try {
      const res = await axios.get('http://localhost:3000/user/library/64b02ea68fa518fb2c7a3592',
      {
        headers: {
          token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjAyZWE2OGZhNTE4ZmIyYzdhMzU5MiIsImlhdCI6MTY4OTI2OTc1NywiZXhwIjoxNjg5NTI4OTU3fQ.Au9zIS45jMB-3cM5rdQBHaHaM4GoD19JgVoyD1QbVaI'
        }
      })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
}

export { registerUser, getUserLibrary, loginUser }