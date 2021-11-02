import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


// My custom component. I built it because the ExpandableFilter component became too messy with all the repetitive code.

const Accordion = (props) => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
  }

  return (

    <AccordionContainer>
      <ButtonTitle className={`${setActive}`} onClick={toggleAccordion}>
        <AccordionIcon>{setActive === 'active' ? <AiOutlineMinus size={18} /> : <AiOutlinePlus size={18} />}</AccordionIcon>
        <Title>{props.title}</Title>
      </ButtonTitle>
      <Content ref={content} style={{maxHeight: `${setHeight}`}}>
        <ContentText>{props.content}</ContentText>
      </Content>
    </AccordionContainer>
    
  )
}

export default Accordion

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: -.5rem;
`

const AccordionIcon = styled.div`
  margin: 0 .6rem 0 -.3rem;
`

const Title = styled.p`
  font-size: 1rem;
  font-weight: 100;
  text-align: left;
`

const Content = styled.div`
  overflow: auto;
  transition: max-height 0.6s ease;
`

const ContentText = styled.div`
  font-weight: 200;
  font-size: .7rem;
`

const ButtonTitle = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: transparent 0.6s ease;
`