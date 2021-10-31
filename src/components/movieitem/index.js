import React from "react"
import styled from 'styled-components'

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
          <h2>Heading</h2>
          <h2>Rating</h2>
        </HeadingRating>
        <Genre>Genre</Genre>
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
  width: 200px;
  height: 300px;
  object-fit: cover;
  padding: 20px;
`

const HeadingRating = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const OverviewContent = styled.p`
  padding-right: 20px;
  line-height: 1.5;
`
const ReleaseContent = styled.p`
  line-height: 0;
  margin-top: 3.8rem;
`

const Genre = styled.h4`
margin-top: -.75rem;
`