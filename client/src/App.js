import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import ContentArea from './containers/ContentArea';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <ContentArea />
            </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
