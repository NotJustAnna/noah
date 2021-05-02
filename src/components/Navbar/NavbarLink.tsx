import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import React, { ReactChild } from 'react';

interface AppNavbarLinkParams {
    exact?: boolean;
    to: string;
    children?: ReactChild | ReactChild[];
}

export default function NavbarLink({ exact, to, children} : AppNavbarLinkParams) {
    return <Nav.Link as={NavLink} exact={exact} to={to} className="nav-link" activeClassName="active">
        {children}
    </Nav.Link>;
}
