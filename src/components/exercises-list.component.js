import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => ( 
    <tr >
    <td > { props.exercise.username } </td> 
    <td > { props.exercise.Address } </td> 
    <td > { props.exercise.Age } </td> 
    <td > { props.exercise.birthday.substring(0, 10) } </td> 
    <td > { props.exercise.password } </td> 
    <td>
    <Link to = { "/edit/" + props.exercise._id } > Edit </Link> | <a href="/" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a > 
    </td> 
    </tr>
)

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this)
        this.handleSearchArea = this.handleSearchArea.bind(this);

        this.state = { exercises: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })

    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise = { currentexercise }
            deleteExercise = { this.deleteExercise }
            key = { currentexercise._id }
            />;
        })
    }




    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/exercises/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.username.includes(searchKey)
            )

            this.setState({ exercises: result })

        });

    }

    render() {
        return ( 
            <div>
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h3 > Details of all Customers </h3> </
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search by Customer Name"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>


            <table className = "table">
            <thead className = "thead-light" >
            <tr>
            <th> Name </th> 
            <th> Address </th> 
            <th> Age </th> 
            <th> Birth Day </th> 
            <th> Password </th> 
            <th > Actions </th> 
            </tr > 
            </thead> 
            <tbody > { this.exerciseList() } 
            </tbody> 
            </table>

            </div>
        )
    }
}