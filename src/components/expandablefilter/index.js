import React, { useEffect, useState } from "react"
import CheckBox from "../checkbox"
import Accordion from "../accordion"
import { Filters } from "./style"

const ExpandableFilter = ({languages, ratings, genres, status}) => {

  const [filtersShown, setFiltersShown] = useState(false)

  useEffect(() => {
    setFiltersShown(status)
  }, [status])

  return ( 
    <Filters filtersShown={filtersShown} onClick={() => setFiltersShown(!filtersShown)}>
      <Accordion 
        title="Select genre(s)"
        content={genres.map(item => <CheckBox key={item.id} {...item} />)}
        filtersShown={filtersShown}
      />

      <Accordion
        title="Select min. vote"
        content={ratings && ratings.map(item => {
          return <CheckBox key={item.id} {...item} />
        })}
      />

      <Accordion
        title="Select language"
        content={languages && languages.map(item => {
          return <CheckBox key={item.id} {...item} />
        })}
      />

    </Filters>
  )

}

export default ExpandableFilter




      