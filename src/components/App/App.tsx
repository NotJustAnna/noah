import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import NavbarLink from '../Navbar/NavbarLink';

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
        <Dashboard/>
    </Router>;

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <hr/>

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <></>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}
