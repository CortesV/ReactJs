import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';

export class SavingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            id: 0
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post('http://localhost:8080/rest/v1/user/', this.state)
            .then(response => {
                console.log(response);
                this.setState({id: response.data})
            })
            .catch(error => {
                console.log(error);
            });
        alert(`User have created with id - ${this.state.id}`)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='generalForm'>
                    <div className='formBlock'>
                        <div>
                            <label>Email: </label>
                        </div>
                        <input type='text' value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>
                    <div className='formBlock'>
                        <div>
                            <label>Password: </label>
                        </div>
                        <input type='text' value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <div className='formButton'>
                        <input type='submit' value='Submit'/>
                    </div>
                </form>
            </div>
        );
    }


}