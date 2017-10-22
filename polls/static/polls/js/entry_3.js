import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './entry_1';

// first run the webpack then (?)
const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#app'),
    () => {
      console.log('the entry_3 was mounted in the DOM!');
    },
  );
}

renderApp(App);

if (module.hot) {
  console.log('module', module);
  module.hot.accept('./entry_1', () => {
    console.log('HOT-REACT DUDE');
    renderApp(App);
  });
}


