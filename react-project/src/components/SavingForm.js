import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';

export class SavingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            id: ''
        };
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    createUser = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:8080/rest/v1/user/', this.state)
            .then(response => {
                this.setState({id: response.data.id});
            });
        console.log(`User has created with id - ${this.state.id}`)
        alert(`User have created with id - ${this.state.id}`)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.createUser} className='generalForm'>
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