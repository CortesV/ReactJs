import React, { Component } from 'react';

export class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };
    }

    render() {
        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div>Hello from dropdown</div>
        }
        return (
            <div onClick={this.toggleState}>
                Dropdown
                {dropdownText}
            </div>
        );
    }

    toggleState = () => {
        this.setState({isOpened: !this.state.isOpened})
    }
}

