import React, { useEffect, useState } from "react"
import * as fetcher from "../../fetcher"
import SearchFilters from "../../components/searchfilter"
import MovieList from "../../components/movielist"
import Spinner from "../../components/helpers"
import { DiscoverWrapper, 
  TotalCounter, 
  MovieResults, 
  MovieFilters,
  MobilePageTitle,
} from "./style"


const Discover = () => {

  const [genreOptions, setGenresOptions] = useState([])
  const [results, setResults] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [keyword, setKeyword] = useState("")
  const [year, setYear] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const resultsData = await fetcher.moviesData(keyword, year) 
        const totalCount = resultsData.total_results
        setIsLoading(false)
        setTotalCount(totalCount)
      } catch(err) {
        console.log("I am causing problems inside Discover component >>>", err.message)
      }
    }
    getData()
  }, [keyword, year])

  const ratingOptions = [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 }
  ]

  const languageOptions = [
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" }
  ]

  useEffect(() => {
    const getData = async() => {
      try {
        const genresData = await fetcher.genresData()
        const popularData = await fetcher.popularMoviesData()
        const resultsData = await fetcher.moviesData(keyword, year) 
        setIsLoading(false)
        setGenresOptions(genresData)
        setResults(popularData.results)
        const totalCount = popularData.total_results 
        setTotalCount(totalCount)
        setResults(resultsData.results)
        setTotalCount(resultsData.total_results)
      } catch(err) {
        console.log("something is wrong", err.message)
      }
    }
    getData()
  }, [keyword, year])

  const searchMovies = (keyword, year) => {
    setKeyword(keyword)
    setYear(year)
  }


  return (
    <>
      {isLoading ? 

        (<Spinner />)

        :

        (<DiscoverWrapper>
          <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on small screens & mobile devices*/}
        <MovieFilters>
        <SearchFilters 
          genres={genreOptions} 
          ratings={ratingOptions}  
          languages={languageOptions}
          searchMovies={(keyword, year) => searchMovies(keyword, year)}
        />
      </MovieFilters>
      <MovieResults>
        { totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
        <MovieList 
          movies={results || []}
        />
      </MovieResults>
        </DiscoverWrapper>)
    
      }
    </>
  )

}

export default Discover


