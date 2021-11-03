import styled, { css } from "styled-components"
import * as colors from "../../colors"

export const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex;    
  margin-bottom: 15px;                    
`

export const LeftCont = styled.div`
  display: inline-block;
`

export const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StyledImage = css`
  width: 130px;
  height: 200px;
  object-fit: cover;
  padding: 20px;

  @media (max-width: 428px) {
    width: 85px;
    height: 140px;
    padding: 15px;
  }
`

export const HeadingRating = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  align-item: flex-end;
  align-items: center;

  @media (max-width: 428px) {
    padding-right: 12.5px;
  }
`

export const Heading = styled.h2`
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 428px) {
    font-size: 1.02rem;
  }
`

export const Rating = styled.div`
  width: 19px;
  height: 14px;
  border: 1px solid ${colors.primaryColor};
  border-radius: 5px;
  background-color: ${colors.primaryColor};
  color: white;
  padding: 4px;
  font-size: .8rem;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 428px) {
    margin-top: 5px;
    font-size: .75rem;
    padding: 3px 1.5px;
  }
`

export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

export const OverviewContent = styled.p`
  padding-right: 20px;
  line-height: 1.3;
  font-size: .9rem;

  @media (max-width: 428px) {
    padding-right: 5px;
    font-size: .8rem;
  }
`

export const ReleaseContent = styled.p`
  line-height: 0;
  font-size: .75rem;
  color: ${colors.primaryColor};
  margin-bottom: 30px;
  opacity: .5;

  @media (max-width: 428px) {
    font-size: .6rem;
    margin-bottom: 22px;
  }
`

export const Genre = styled.h4`
  color: ${colors.primaryColor};
  font-size: .75rem;
  margin-top: -.75rem;

  @media (max-width: 428px) {
    margin-top: -.3rem;
    font-weight: 400;
    font-size: .65rem;
  }
`