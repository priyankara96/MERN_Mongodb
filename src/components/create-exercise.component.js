import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);


        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangebirthday = this.onChangebirthday.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Username: '',
            Address: '',
            age: '',
            Birthday: new Date(),
            Password: '',
            users: []
        }
    }



    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    onChangebirthday(date) {
        this.setState({
            Birthday: date
        })
    }

    onChangepassword(e) {
        this.setState({
            Password: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            Address: this.state.address,
            Age: this.state.age,
            birthday: this.state.Birthday,
            password: this.state.Password

        }

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return ( 
            <div>
            <h3> New Customer </h3> 
            <form onSubmit = { this.onSubmit } >
            
            <div className = "form-group" >
            <label > Name: </label>  
            <input type = "text"
            required className = "form-control"
            value = { this.state.username }
            onChange = { this.onChangeUsername }
            /> 
            </div> 
            
            <div className = "form-group">
            <label > Address: </label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.address }
            onChange = { this.onChangeAddress }
            /> 
            </div> 
            <div className = "form-group" >
            <label > Age: </label> 
            <input type = "text"
            className = "form-control"
            value = { this.state.age }
            onChange = { this.onChangeAge }
            /> 
            </div> 
            
            <div className = "form-group" >
            <label> Birthday: </label> 
            <div>
            <DatePicker selected = { this.state.Birthday }
            onChange = { this.onChangebirthday }
            /> 
            </div>

            <div className = "form-group" >
            <label > Password: </label>  
            <input type = "text"
            required className = "form-control"
            value = { this.state.Password }
            onChange = { this.onChangepassword }
            /> 
            </div>





            </div>

            <div className = "form-group" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary" />
            </div> 
            </form> 
            </div>
        )
    }
}