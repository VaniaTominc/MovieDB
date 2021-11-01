import React from "react"
import styled from 'styled-components'

import * as colors from "../../colors"

const MovieItem = () => {

  return (
    // Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        {/* <h2>Picture of movie / series</h2> */}
        <StyledImage src="https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg" alt="test" />        {/* For now hard coded image */}
      </LeftCont>
      <RightCont>
        <HeadingRating>
          <Heading>Bad Genius</Heading>
          <Rating>7.5</Rating>
        </HeadingRating>
        <Genre>Action | Drama | Comedy</Genre>
        <OverviewWrapper>
          <OverviewContent>
            The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.
          </OverviewContent>
          <ReleaseContent>ReleaseDate</ReleaseContent>
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