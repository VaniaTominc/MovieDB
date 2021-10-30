import React from "react"
import styled from 'styled-components'

const MovieItem = () => {

  return (
    // Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
      </LeftCont>
      <RightCont>
      </RightCont>
    </MovieItemWrapper>
  )
}

export default MovieItem

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
`

const LeftCont = styled.div`
  display: inline-block;
`

const RightCont = styled.div`
  display: inline-block;
`