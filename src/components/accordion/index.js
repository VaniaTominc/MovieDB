import React, { useState, useRef } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { AccordionContainer, 
  AccordionIcon, 
  Title, 
  Content, 
  ContentText, 
  ButtonTitle 
} from "./style.js"

// My custom component. I built it because the ExpandableFilter component became too messy with all the repetitive code.

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    )
  }

  return (

    <AccordionContainer>
      <ButtonTitle className={`${setActive}`} onClick={toggleAccordion}>
        <AccordionIcon>{setActive === "active" ? <AiOutlineMinus size={18} /> : <AiOutlinePlus size={18} />}</AccordionIcon>
        <Title>{props.title}</Title>
      </ButtonTitle>
      <Content ref={content} style={{maxHeight: `${setHeight}`}}>
        <ContentText>{props.content}</ContentText>
      </Content>
    </AccordionContainer>
    
  )
}

export default Accordion

