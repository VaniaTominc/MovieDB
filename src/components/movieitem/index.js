/* eslint-disable no-unused-vars */
import React from "react"
import styled from 'styled-components'

import * as colors from "../../colors"

const MovieItem = ({poster_path, original_title, overview, release_date, vote_average}) => {

  // console.log('movies >>>>', movies)

  return (
    // Complete the MovieItem component


      <MovieItemWrapper> 
        <LeftCont>
          {/* <h2>Picture of movie / series</h2> */}
          <StyledImage src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />       
        </LeftCont>
        <RightCont>
          <HeadingRating>
            <Heading>{original_title}</Heading>
            <Rating>{vote_average}</Rating>
          </HeadingRating>
          {/* <Genre>{genres.map(i => i.id.filter(j => j === item[j].genre_ids ? j.name : ''))}</Genre> */}
          {/* <Genre>{genres.map(i => typeof i)}</Genre> */}
          {/* <Genre>{genres.map(i => typeof i.name)}</Genre> */}
          {/* <Genre>{item.map(j => j.genre_ids)}</Genre> */}
          <OverviewWrapper> 
            <OverviewContent>
              {overview}
            </OverviewContent>
            <ReleaseContent>{release_date}</ReleaseContent>
          </OverviewWrapper>
        </RightCont>
      </MovieItemWrapper>
  )
}

export default MovieItem

// Added display: flex;
const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex;    
  margin-bottom: 15px;                    
`

const LeftCont = styled.div`
  display: inline-block;
`

const RightCont = styled.div`
  display: inline-block;
`

// Created new styled component for the image
const StyledImage = styled.img`
  width: 130px;
  height: 200px;
  object-fit: cover;
  padding: 20px;
`

const HeadingRating = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  align-item: flex-end;
`

const Heading = styled.h2`
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;
`

const Rating = styled.h4`
  border: 1px solid ${colors.primaryColor};
  border-radius: 5px;
  background-color: ${colors.primaryColor};
  color: white;
  padding: 4px;
  font-size: .8rem;
  line-height: 0;
  display: flex;
  align-items: center;
`

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -12px;
`

const OverviewContent = styled.p`
  padding-right: 20px;
  line-height: 1.3;
  font-size: .9rem;
`
const ReleaseContent = styled.p`
  line-height: 0;
  margin-top: 3.8rem;
  font-size: .75rem;
  color: ${colors.primaryColor};
`

const Genre = styled.h4`
  color: ${colors.primaryColor};
  font-size: .75rem;
  margin-top: -.75rem;
`