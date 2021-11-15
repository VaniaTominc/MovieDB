import React, { useEffect, useState } from "react"
import CheckBox from "../checkbox"
import Accordion from "../accordion"
import { Filters } from "./style"

const ExpandableFilter = ({languages, ratings, genres, status}) => {

  const [filtersShown, setFiltersShown] = useState(null)

  useEffect(() => {
    setFiltersShown(status)
  }, [status])

  return ( 
    <Filters filtersShown={filtersShown}>                 {/* Deleted onClick, because it was causing me problems, but solved the issue with closing accordion on smaller devices */}
      <Accordion 
        title="Select genre(s)"
        content={genres.map(item => {
          return <CheckBox key={item.id} {...item} /> 
        })}
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




      