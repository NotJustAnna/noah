import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import NavbarLink from '../Navbar/NavbarLink';
import Home from '../Home/Home';
import Actions from '../Actions/Actions';

export default function App() {
    const [token, setToken] = useState<string>();

    if (!token) {
        return <Login setToken={setToken}/>
    }

    const handleLogout = () => {
        setToken(undefined);
    }

    return <Router>
        <Navbar logOut={handleLogout}>
            <NavbarLink exact to="/">Home</NavbarLink>
            <NavbarLink to="/dashboard">Dashboard</NavbarLink>
            <NavbarLink to="/actions">Actions</NavbarLink>
        </Navbar>
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/dashboard"><Dashboard/></Route>
            <Route path="/actions"><Actions/></Route>
        </Switch>
    </Router>;
}
