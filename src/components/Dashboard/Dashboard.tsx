import Undernav from '../Undernav/Undernav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UndernavLink from '../Undernav/UndernavLink';

export default function Dashboard() {
    return <>
        <Undernav>
            <UndernavLink to="/dashboard" exact>Overview</UndernavLink>
            <UndernavLink to="/dashboard/logs">Logs</UndernavLink>
        </Undernav>
        <main role="main" className="container-fluid">
            <div className="jumbotron">
                <h1>Navbar example</h1>
                <p className="lead">This example is a <FontAwesomeIcon icon={['fas', 'user-cog']}/> quick exercise to
                    illustrate how fixed to top navbar works. As you
                    scroll, it will remain fixed to the top of your browser’s viewport.</p>
                <a className="btn btn-lg btn-primary" href="../components/navbar/" role="button">View navbar
                    docs &raquo;</a>
            </div>
        </main>
    </>;
}
