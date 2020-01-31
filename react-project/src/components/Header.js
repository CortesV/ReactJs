import React, { Component } from 'react';

export class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.items);
        return (
            <div>
                {this.props.items.map((item, index) =>
                    <a href={item.link} key={index}>{item.label}</a>
                )}
            </div>
        );
    }
}

