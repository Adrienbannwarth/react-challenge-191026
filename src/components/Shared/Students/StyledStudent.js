import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.8rem;
  padding: 1.5rem 4rem;
  margin: 2rem 0px;
  max-width: 100rem;
  height: 6rem;
  box-shadow: 0 .4rem .2rem rgba(163, 160, 160, 0.25);
  border-radius: 1rem;
  border-left: 1rem solid;
  ${props => props.group === 'G1-A' ? 'border-color: #7765E3;' : null}
  ${props => props.group === 'G1-B' ? 'border-color: #538AE2;' : null}
  ${props => props.group === 'G2-A' ? 'border-color: #538AE2;' : null}
  ${props => props.group === 'G2-B' ? 'border-color: #538AE2;' : null}
  cursor: pointer;
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const TextLight = styled.p`
  opacity: .5;
`
export const StyledJob = styled.p`
position: relative;
margin-left: 2rem;
  &::after {
    content: '';
    position: absolute;
    left: -3rem;
    top: 50%;
    transform: translateY(-50%);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    ${props => props.job === 'Dev-back' ? 'background: #345995;' : null}
    ${props => props.job === 'Design' ? 'background: #03CEA4;' : null}
    ${props => props.job === 'Dev-Front' ? 'background: #EAC435;' : null}
  }
`
