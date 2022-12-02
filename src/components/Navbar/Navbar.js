import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../image/planet.png';

const NavbarVariable = () => {
  const navlinks = [
    {
      id: 1,
      text: 'Rockets',
      path: '/',
    },
    {
      id: 2,
      text: 'Missions',
      path: '/missions',
    },
    {
      id: 3,
      text: 'Profile',
      path: '/profile',
    },
  ];

  const navList = navlinks.map((links) => (
    <li key={links.id} className="navLink">
      <NavLink className="navlink" to={links.path}>{links.text}</NavLink>
    </li>
  ));

  return (
    <header>
      <Navbar bg="light" variant="light">
        <Container>
          <img src={logo} className="logo" alt="Planet Logo" />
          <a className="navbar-brand" href="/">Space Traveler&lsquo;s Hub</a>
          <Nav className="ms-auto">
            <Nav.Link>
              <ul className="navbar-nav">
                {navList}
              </ul>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarVariable;
