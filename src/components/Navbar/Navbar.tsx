import './Navbar.scss';
import React, { ReactChild, useState } from 'react';
import logo from './../../logo.svg';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

interface NavbarParams {
    logOut: () => void;
    children?: ReactChild | ReactChild[];
}

export default function Navbar({ logOut, children }: NavbarParams) {
    const [visible, setVisible] = useState(false);

    return <BootstrapNavbar expand="lg" bg="darksecondary" variant="dark" sticky="top">
        <NavbarBrand as={Link} to="/">
            <img src={logo} width="30" height="30" alt="NotJustAnna"/>
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" onClick={() => setVisible(!visible)}/>
        <div className={'navbar-collapse offcanvas-collapse' + (visible ? ' open' : '')} id="navbarCollapse">
            <Nav className="mr-auto ml-auto">
                {children}
                <NavDropdown title={<><FontAwesomeIcon icon={faUserCog}/> You</>} id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/" onClick={logOut}>Sign out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    </BootstrapNavbar>;
}
