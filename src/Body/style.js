import styled, { keyframes } from 'styled-components'


const angry = keyframes`
  0%,40% {
    transform: translate3d(0,0,0)
  }
  50%,60%,70% {
    transform: translate3d(-2%,0,0)
  }
  55%,65%,75% {
    transform: translate3d(2%,0,0)
  }
`

const wobble = keyframes`
  0%,100% {
    transform: rotate3d(0,0,1,-5deg)
  }
  50% {
    transform:rotate3d(0,0,1,5deg)
  }
`

export const CreatureBody = styled.div`
  width: 170px;
  height: 170px;
  margin: 0 auto;
  position: relative;
  animation: ${wobble} 3s ease-in-out infinite;
  transition-duration: .25s;
  background-color: #f0443c;
  border-radius: 50%;
  box-shadow: inset 6px -9px rgba(14,11,32,.2);
  &:hover {
    /* Mouth element */
    div > div:last-child {
      transform: scale3d(.95,.75,1);
    }
    box-shadow: inset 10px -13px rgba(14,11,32,.2);
    transition-duration: .25s;
  }
` 

export const Face = styled.div`
  animation: ${angry} 4s ease-in-out infinite;
  height: 100%;
`
