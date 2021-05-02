import { NavLink } from 'react-router-dom';
import React, { ReactChild } from 'react';

interface UndernavLinkParams {
    exact?: boolean;
    to: string;
    children?: ReactChild | ReactChild[];
}

export default function UndernavLink({ exact, to, children }: UndernavLinkParams) {
    return <NavLink exact={exact} to={to} className="nav-link" activeClassName="active">{children}</NavLink>;
}
