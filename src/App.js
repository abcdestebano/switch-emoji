import React, { useState } from 'react';
import './App.css';
import Switch from './Switch';
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isOn }) => isOn ? "#282c34" : "#FFF"};
`

function App() {
  const [isOn, handleSwitch] = useState(false)

  return (
    <Container isOn={isOn}>
      <Switch isOn={isOn} toggleSwitch={() => handleSwitch(!isOn)} />
    </Container>
  );
}

export default App;
