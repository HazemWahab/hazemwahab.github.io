import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
            </header>
        )
    }
}

const headerStyle = {
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',    
}

const linkStyle = {
    color: '#fff'
}
