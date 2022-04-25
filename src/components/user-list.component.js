import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const USER = props => ( 
    <tr>
    <td> { props.user.username } </td> 
    <td> { props.user.password } </td>  
    <td>
    <Link to = { "/user/Edit/" + props.user._id } > Edit </Link> | <a href="jsx-a11y/href - no - hash " onClick={() => { props.deleteUser(props.user._id) }}>Delete</a> 
    </td> 
    </tr>
)

export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);


        this.state = { user: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    UserList() {
        return this.state.user.map(currentuser => {
            return <USER user = { currentuser }
            deleteUser = { this.deleteUser }
            key = { currentuser._id }
            />;
        })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/users/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.username.includes(searchKey)
            )

            this.setState({ user: result })

        });

    }


    render() {
        return ( <div>

            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h3 > Details of all Users </h3> </
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search by User Name"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>



            <
            table className = "table" >
            <
            thead className = "thead-light" >
            <tr>
            <th> Username </th>  
            <th> Password </th>    
            <th> Actions </th> 
            </tr> 
            </thead>  
            <tbody > { this.UserList() } 
            </tbody>  
            </table>

            </div>



        )
    }
}