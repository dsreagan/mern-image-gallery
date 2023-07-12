import axios from 'axios'

const fetchImages = async (searchInput) => {
    console.log(searchInput)
    const response = await axios.get(`https://api.unsplash.com/search/collections?page=1
          &query=${searchInput}
          &client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    const data = await response.data.results
    return data
}

export default fetchImages