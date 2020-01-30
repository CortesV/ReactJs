import React, { Component } from 'react';
import {SavingForm} from './components/SavingForm'
import {RetrievingForm} from './components/RetrievingForm'

class App extends Component {
  render() {
    return (
      <div>
            <SavingForm/>
            <br/>
            <br/>
            <br/>
            <RetrievingForm/>
      </div>
    );
  }
}

export default App;
