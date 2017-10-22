import React, { Component } from 'react'
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #0066ff;
  border: 1px solid #0066ff;
  color: #ffffff;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: transparent;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.5);
    background-color: #0099ff;
  }
`;

class Entry2 extends Component {
  render() {
    return (
      <Button>
        <span>so now</span>
      </Button>
    );
  }
}

export default Entry2;
