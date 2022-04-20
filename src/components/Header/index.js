import './header.css';

import Logo from '../Logo';
import Nav from '../Nav';
import InOut from '../InOut';

import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Logo />
                <Nav />
                <InOut />
            </header>
        )
    }
}

export default Header;