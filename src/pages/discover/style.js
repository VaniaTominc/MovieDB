import styled from "styled-components"

export const DiscoverWrapper = styled.main`
  padding: 47px 50px;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 990px) {
    flex-direction: column;
    padding: 47px 35px;
    margin-top: -1rem;
  }

  @media (max-width: 428px) {
    padding: 20px;
    margin-top: 0;
  }
`

export const TotalCounter = styled.div`
  font-weight: 200;
  padding-bottom: 20px;
  font-size: .8rem;
`

export const MovieResults = styled.div`
  flex: 12;
  @media (max-width: 990px) {
    margin-top: 1.5rem;
  }
`

export const MovieFilters = styled.div`
  flex: 3;
  padding-left: 15px;
  @media (max-width: 990px) {
    margin-top: 1rem;
  }
`

export const MobilePageTitle = styled.header`
  display: none;

  @media (max-width: 990px) {
    display: block;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 60px;
    font-size: 1.6rem;
    margin-top: -5px; 
  }

  @media (max-width: 428px) {
    margin-top: .5rem;
  }
`