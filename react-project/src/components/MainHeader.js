import React, { Component } from 'react';
import {Header} from './Header'

const menu = [
    {
        link: '/articles',
        label: 'Acticles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];

export class MainHeader extends Component {

    render() {
        return (
            <div>
                <Header items = {menu}/>
            </div>
        );
    }
}

