import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';

export class RetrievingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            user: ''
        };

        this.handleIdChange = this.handleIdChange.bind(this);
    }

    handleIdChange(event) {
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
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getUser} className='generalForm'>
                    <div className='formBlock'>
                        <div>
                            <label>Get user</label>
                        </div>
                        <input type='text' value={this.state.id} onChange={this.handleIdChange}/>
                    </div>
                    <div className='formButton'>
                        <input type='submit' value='Submit'/>
                    </div>
                </form>
            </div>
        );
    }


}