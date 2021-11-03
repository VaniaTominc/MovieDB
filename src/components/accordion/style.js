import styled from "styled-components"

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: -.5rem;
`

export const AccordionIcon = styled.div`
  margin: 0 .6rem 0 -.3rem;
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 100;
  @media (max-width: 428px) {
    font-size: .85rem;
  }
`

export const Content = styled.div`
  overflow: auto;
  transition: max-height 0.6s ease;
`

export const ContentText = styled.div`
  font-weight: 200;
  font-size: .7rem;
`

export const ButtonTitle = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: transparent 0.6s ease;
`