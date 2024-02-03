// Style your elements here
import styled from 'styled-components'

export const Mainbackground = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`

export const LeftContainer = styled.div`
  background-color: #3b4b69;
  background-size: cover;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const UnderLine = styled.hr`
  border: 2px solid yellow;
  width: 80%;
`
export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');

  background-size: cover;
  width: 70%;
  height: 40vh;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 20%;
  color: #ffffff;
  font-family: Roboto;

  padding: 25px;
`
export const RightmainConstiner = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RightContainer = styled.div`
  width: 80%;

  box-shadow: 0px 2px 2px 2px #d3d9e0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
`

export const InputTextValues = styled.input`
  width: 60%;
  outline: none;
  box-shadow: 1px 1px 1px 1px #d3d9e0;
  border: none;
  border-radius: 2px;
  height: 45px;
`
