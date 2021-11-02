/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import CheckBox from "../checkbox"
import styled from 'styled-components'

import Accordion from "../accordion"

const ExpandableFilter = ({languages, ratings, genres, status}) => {

  const [filtersShown, setFiltersShown] = useState('')
  useEffect(() => {
    setFiltersShown(status)
  }, [status])
  // console.log('status inside ExpandableFilter >>>>', status)
  // console.log('filtersShown inside ExpandableFilter >>>>', filtersShown)

  // ! You need to create your own checkbox component with a custom checkmark

  return ( 
    <Filters filtersShown={filtersShown} onClick={() => setFiltersShown(!filtersShown)}>
      <Accordion 
        title='Select genre(s)'
        content={genres.map(item => <CheckBox key={item.id} {...item} />)}
      />

      <Accordion
        title='Select min. vote'
        content={ratings && ratings.map(item => {
          return <CheckBox key={item.id} {...item} />
        })}
      />

      <Accordion
        title='Select language'
        content={languages && languages.map(item => {
          return <CheckBox key={item.id} {...item} />
        })}
      />

    </Filters>
  )

}

export default ExpandableFilter

const Filters = styled.section`
  @media (max-width: 990px) {
    display: ${({ filtersShown }) => filtersShown ? 'none' : 'block'};
    transition: all 0.5s linear;
  }
`


      