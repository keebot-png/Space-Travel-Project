import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/planet.png';

// import css file here
import '../style/navbar.css';

const Navbar = () => (
  <nav className="nav-container">
    <NavLink to="/" className="logo-link">
      <img className="web-logo" src={logo} alt="planet logo" />
      Space Traveler&lsquo;sHub
    </NavLink>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Rocket
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/mission">
          Mission
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;

// const NavbarVariable = () => {
//   const navlinks = [
//     {
//       id: 1,
//       text: 'Rockets',
//       path: '/',
//     },
//     {
//       id: 2,
//       text: 'Missions',
//       path: '/missions',
//     },
//     {
//       id: 3,
//       text: 'Profile',
//       path: '/profile',
//     },
//   ];

//   const navList = navlinks.map((links) => (
//     <li key={links.id} className="navLink">
//       <NavLink className="navlink" to={links.path}>{links.text}</NavLink>
//     </li>
//   ));

//   return (
//     <header>
//       <Navbar bg="light" variant="light">
//         <Container>
//           <img src={logo} className="logo" alt="Planet Logo" />
//           <a className="navbar-brand" href="/">Space Traveler&lsquo;s Hub</a>
//           <Nav className="ms-auto">
//             <NavLink>
//               <ul className="navbar-nav">
//                 {navList}
//               </ul>
//             </NavLink>
//           </Nav>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default NavbarVariable;
