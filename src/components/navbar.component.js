import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return ( 
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg" >

            <Link to = "/"
            className = "navbar-brand" > Logo </Link> 
            <div className = "collpase navbar-collapse" >
            <ul className = "navbar-nav mr-auto" >
            
            <li className = "navbar-item" >
            <Link to = "/"
            className = "nav-link" > Customer List </Link> 
            </li> 
            
            <li className = "navbar-item" >
            <Link to = "/create"
            className = "nav-link" > New Customer </Link> 
            </li> 
            
            <li className = "navbar-item" >
            < Link to = "/users/"
            className = "nav-link" > User List </Link> 
            </li>

            <li className = "navbar-item" >
            <Link to = "/user/add"
            className = "nav-link" > New User </Link> 
            </li >


            </ul> 
            </div> 
            </nav>
        );
    }
}