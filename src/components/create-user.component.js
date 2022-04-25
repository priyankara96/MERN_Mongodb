import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Username: '',
            password: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangepassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        window.location = '/users/';
    }

    render() {
        return ( 
            <div>
            <h3 > New User </h3> 
            <form onSubmit = { this.onSubmit } >
            
            <div className = "form-group">
            <
            label > Username: </label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.username }
            onChange = { this.onChangeUsername }
            /> 
            </div>

            <div className = "form-group">

            <label > Password: </label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.password }
            onChange = { this.onChangepassword }
            /> 
            </div>

            <div className = "form-group">
            <
            input type = "submit"
            value = "Create User"
            className = "btn btn-primary" 
            />
            </div> 
            </form> 
            </div>
        )
    }
}