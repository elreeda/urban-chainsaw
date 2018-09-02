import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components'

import Body from './Body';
import Eyes from './Eyes';
import Mouth from './Mouth';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC');
  body {
    background-color: #130f2a;
    font-family: 'Amatic SC', sans-serif;
  }
`

const StyleBase = styled.div`
  text-align: center;
  span {
    color: #EDBF68;
    border-bottom: thin dashed rgba(237,191,104,.5);
    font-size: 1.5em;
    line-height: 2;
    font-weight: 800;
  }
`

class App extends Component {
  render() {
    return (
      <StyleBase>
        <Body>
          <Eyes />
          <Mouth />
        </Body>
        <span>Angry face</span>
      </StyleBase>
    );
  }
}

export default App;
