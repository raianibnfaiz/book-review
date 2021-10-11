import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar className="color-nav" light expand="md">
                <div className="container">
                    <NavbarBrand className="brand">Book Explore </NavbarBrand>
                </div>
                
            </Navbar>
        </div>
    );
};

export default Navigation;