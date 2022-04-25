import React, { Component } from 'react';
import axios from 'axios';



export default class EditUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    password: response.data.password

                })
            })
            .catch(function(error) {
                console.log(error);
            })



    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }





    onSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        const user = {
            username: username,
            password: password,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/update/' + this.props.match.params.id, user)
            .then(res => console.log(res.data));

        window.location = '/users/';
    }




    render() {
        return ( 
            <div>
            <h3> Edit Users </h3> 
            
            <form onSubmit = { this.onSubmit } >
            
            <div className = "form-group" >
            <label> Name: </label>  <
            input type = "text"
            required className = "form-control"
            value = { this.state.username }
            onChange = { this.onChangeUsername }
            /> 
            </div > 
            
            
            <div className = "form-group" >
            <label> Password: </label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.password }
            onChange = { this.onChangePassword }
            /> 
            </div>

            <div className = "form-group" >
            <input type = "submit"
            value = "Edit"
            className = "btn btn-primary" />
            </div> 
            </form> 
            </div>
        )
    }
}