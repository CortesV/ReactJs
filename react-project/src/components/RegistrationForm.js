import React, { Component } from 'react';

export class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            test: ''
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                        <button>Save</button>
                    </div>
                </form>

                <form>
                    <div>
                        <input type="text" placeholder="Refs test" value={this.state.test} onChange={this.handleTestChange} ref={(input) => this.testInput = input}/>
                        <button onClick={this.testSubmit}>Save refs test</button>
                    </div>
                </form>
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form is submitted");
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handleTestChange = (event) => {
        this.setState({test: event.target.value})
    }

    testSubmit = (event) => {
        event.preventDefault();
        console.log("test submit", this.testInput.value);
    }
}

