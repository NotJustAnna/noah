import './Undernav.scss';
import { ReactChild } from 'react';

interface UnderlineNavParams {
    children?: ReactChild | ReactChild[];
}

export default function Undernav({ children }: UnderlineNavParams) {
    // <a className="nav-link active" href="#">Dashboard</a>
    // <a className="nav-link" href="#">
    //     Friends
    //     <span className="ml-1 badge badge-pill text-white bg-success align-text-bottom">27</span>
    // </a>
    return <div className="nav-scroller bg-secondary mb-1">
        <nav className="nav nav-underline justify-content-center">{children}</nav>
    </div>;
}
