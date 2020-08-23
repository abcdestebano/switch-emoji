import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 50px;
  background-color: #FAFAFA;
  padding: 10px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 3px 6px #c3c3c3;
`

const OptionSwitch = styled.span`
  font-size: 2em;
  transition: transform 500ms;
  transform: ${({ isOn }) => isOn ? 'translateX(0px)' : 'translateX(100%)'};
`

const Switch = ({ isOn, toggleSwitch }) => {
  return (
    <Wrapper onClick={toggleSwitch}>
      <OptionSwitch isOn={isOn}>
        {isOn ? "🌝" : "🌚"}
      </OptionSwitch>
    </Wrapper>
  )
}

export default Switch