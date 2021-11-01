import axios from 'axios'

// ! All of your API requests should be in this file
// Look into error handling as well. My comment!!!!

const API_KEY = '?api_key=c3bbb72df7f3e5358be38114d5409db5'

// Get popular movies
export const popularMoviesData = async() => {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular${API_KEY}`)
    // console.log('popularMoviesData >>>>', data.results)
    return data.results
  } catch(err) {
    console.log('Error with popularMoviesData >>>>', err.message)
  }
}

// Get movies
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher               If there are more than two words, space between must be converted to + 
export const moviesData = async(keyword) => {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie${API_KEY}&query=${keyword}`)
    return data.results
  } catch(err) {
    console.log('Error with moviesData >>>>', err.message)
  }
}

// Get genre
export const genresData = async() => {
  try { 
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/tv/list${API_KEY}`)
    // console.log('Genres >>>>', data.genres)
    return data.genres
  } catch(err) {
    console.log('there is something wrong with the data >>>', err.message)
  }
}