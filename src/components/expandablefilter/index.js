// import React, { useState } from "react"
import React from "react"
import CheckBox from "../checkbox"
// import styled from 'styled-components'

import Checkbox from "../checkbox"

const ExpandableFilter = ({languages, ratings}) => {

  // console.log('languages in ExpandableFilter >>>', languages)
  // console.log('ratings in ExpandableFilter >>>', ratings)


  // const [filtersShown, setFiltersShown] = useState(false)

  // ! You need to create your own checkbox component with a custom checkmark

  return (
    <>
      <section>

        <details>
          <summary>Select genre(s)</summary>
          <Checkbox />
        </details>

        <details>
          <summary>Select min.vote</summary>
          {ratings && ratings.map(item => {
            return <CheckBox key={item.id} { ...item} />
          })}
        </details>

        <details>
          <summary>Select language</summary>
          {languages && languages.map(item => {
            return <Checkbox key={item.id} { ...item} />
          })}
        </details>

      </section>
    </>
  )

}

export default ExpandableFilter