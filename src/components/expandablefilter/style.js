import styled from "styled-components"

export const Filters = styled.section`

@media (max-width: 990px) {
  display: ${({ filtersShown }) => filtersShown ? "flex" : "none"};
  align-items: ${({ filtersShown }) => filtersShown ? "flex-start" : "none"};
  justify-content: ${({ filtersShown }) => filtersShown ? "flex-end" : "none"};
  margin-left: ${({ filtersShown }) => filtersShown ? "-50rem" : "none"};
  transition: all 0.5s linear;
}
`