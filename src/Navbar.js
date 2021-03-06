import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div className='Navbar'>
                <NavLink className={(isActive)=>(isActive? 'Navbar-active': 'Navbar-inactive')} to='/'>Home</NavLink>
                <NavLink className={(isActive)=>(isActive? 'Navbar-active': 'Navbar-inactive')} to='/chips'>Chips</NavLink>
                <NavLink className={(isActive)=>(isActive? 'Navbar-active': 'Navbar-inactive')} to='/soda'>Soda</NavLink>
                <NavLink className={(isActive)=>(isActive? 'Navbar-active': 'Navbar-inactive')} to='/sardines'>Sardines</NavLink>
            </div>
        );
    }
}

export default Navbar;