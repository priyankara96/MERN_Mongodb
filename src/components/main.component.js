import { NavLink } from 'react-router-dom'

import React from 'react';





function Home() {
    return ( 
        <div>
        <p> WELCOME EVERYONE </p> <h1> It is a Home Page </h1>


        <div className = "form-group" >
        <label > User Name: </label> <
        input type = "text"
        required className = "form-control" / > </div>

        <div className = "form-group" >
        <label> Password: </label> <
        input type = "text"
        required className = "form-control" / > </div>



        <div class = "form-group" >
        <button type = "submit" class = "btn btn-primary login-btn btn-block" > Log in </button> 
        </div>




        <p class = "text-center" > Login with your social media account </p> 
        <div class = "text-center social-btn" >
        <NavLink to = "/"
        class = "btn btn-secondary" > < i class = "fa fa-facebook" > </i>&nbsp; Facebook</NavLink >
        <NavLink to = "/"
        class = "btn btn-info" > < i class = "fa fa-twitter" > </i>&nbsp; Twitter</NavLink >
        <NavLink to = "/"
        class = "btn btn-danger" > < i class = "fa fa-google" > </i>&nbsp; Google</NavLink >
        </div>

        </div>
    )
}

export default Home