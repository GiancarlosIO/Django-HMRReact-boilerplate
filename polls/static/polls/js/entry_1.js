
import React, { Component } from 'react'
import styled from 'styled-components';

import Entry2 from './entry_2';
import Container from './ui/Container';
import Title from './ui/Title';

class App extends Component {
  render() {
    return (
      <Container>
        <Title>Django</Title>
        <Entry2 />
      </Container>
    );
  }
};

export default App;
