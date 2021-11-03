import styled, { css } from "styled-components"

export const FiltersWrapper = styled.div`
  position: relative;
  padding-top: 36px;

  @media (max-width: 990px) {
    display: flex;
    padding-top: 30px;
    margin-left: -15px;
    justify-content: space-between;
  }
`

export const CategoryTitle = styled.div`
  font-size: .9rem;
  font-weight: 800;
  @media (max-width: 990px) {
    display: none;
  }
`

export const FilterIcon = css`
  width: 30px;
  display: none;
  @media (max-width: 990px) {
    display: block;
  }
`

export const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 12px 20px 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;

  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}

  @media (max-width: 990px) {
    background-color: transparent;
    padding: 0;
    width: 30px;
    ${props => props.marginBottom && css`
    flex: 1;
    margin-right: 15px;
    background-color: transparent;
    flex: display;
    flex-direction: column;
  `}
  }
`