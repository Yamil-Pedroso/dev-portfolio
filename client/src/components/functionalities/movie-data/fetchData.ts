import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/4/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=$"`

const fetchData = async () => {
  try {
    const { data } = await axios.get(API_URL)
    return data
  } catch (error) {
    console.log(error)
  }
}

 const fetchSearchData = async (searchTerm: string) => {
  try {
    const { data } = await axios.get(SEARCH_API + searchTerm)
    return data
  } catch (error) {
    console.log(error)
  }
}

export { fetchData, fetchSearchData, IMG_PATH };


