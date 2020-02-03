import React, { Component } from 'react';
import {SavingForm} from './components/SavingForm'
import {RetrievingForm} from './components/RetrievingForm'
import {RegistrationForm} from './components/RegistrationForm'
class App extends Component {
  render() {
    return (
      <div>
            <RegistrationForm/>
      </div>
    );
  }
}

export default App;
