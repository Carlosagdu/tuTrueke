import React, { Component } from "react";
import Home from '../pages/home/HomeComponent';
import Login from '../pages/login/LoginComponent';
import Signup from '../pages/signup/SignupComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Main extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/login" exact >
                        <Login />
                    </Route>
                    <Route path="/signup" exact >
                        <Signup />
                    </Route>
                    <Route path="/" exact >
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}