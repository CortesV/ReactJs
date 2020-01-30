import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';

export class RetrievingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            user: '',
            displayData: false
        };
    }

    handleIdChange = (event) => {
        this.setState({id: event.target.value})
    }

    getUser = async (event) => {
        event.preventDefault();
        await axios
            .get(`http://localhost:8080/rest/v1/user/${this.state.id}`)
            .then(response => {
                this.setState({user: response.data});
            });
        console.log(this.state.user);
        this.setState({displayData: true});
    }


    render() {
        return (
            <div>
                <form onSubmit={this.getUser} className='generalForm'>
                    <div className='formBlock'>
                        <div>
                            <label>Get user:</label>
                        </div>
                        <input type='text' value={this.state.id} onChange={this.handleIdChange}/>
                    </div>
                    <div className='formButton'>
                        <input type='submit' value='Submit'/>
                    </div>
                </form>
                {
                   this.showUser()
                }
            </div>
        );
    }

    showUser() {
        if (this.state.displayData) {
            return (
                <div className='user'>
                    <div className="userData">
                        <label>Id: </label>
                        <label>{this.state.user.id}</label>
                    </div>
                    <div className="userData">
                        <label>Email: </label>
                        <label>{this.state.user.email}</label>
                    </div>
                </div>
            );
        }
    }
}