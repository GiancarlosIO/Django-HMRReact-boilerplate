import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Entry2 from './entry_2';

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// first run the webpack then

ReactDOM.render(
  <Container>
    <Entry2 />
  </Container>,
  document.querySelector('#app'),
  () => {
    console.log('the entr3 was mounted in the DOM!');
  },
);


