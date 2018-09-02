import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0%, 10%, 100% {
    transform: scale3d(1,1,1);
  }
  5% {
    transform: scale3d(1,0,1);
  }
`

export const EyesStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 22%;
` 

export const Eye = styled.div`
  background-color: #0e0b20;
  animation: ${blink} 3s linear infinite;
  height: 23px;
  width: 16px;
  border-radius: 50%;
  margin: 0 15px;
` 
