import React, {Component} from 'react';
import {Navigation} from './components/Navigation'
import {NavigationSecond} from './components/NavigationSecond'

class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <hr/>
                <NavigationSecond/>
            </div>
        );
    }
}

export default App;
