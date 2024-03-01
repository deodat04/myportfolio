// import logo from "../assets/logo.jpg";
// import "../styles/Header.css";

// function Header(){
//     const currentPage = window.location.pathname;
//     return(
//         <header>
//         <div className="logo">
//             <img src={logo} alt="@deodat04" />
//         </div>
//         <input type="checkbox" id="click" />
//         <label htmlFor="click" className="mainicon">
//             <div className="menu">
//                 <i className="bi bi-list"></i>
//             </div>
//         </label>
//         <nav>
//             <a href="/" className={currentPage === '/' ? 'active' : ''}>Home</a>
//             <a href="/about" className={currentPage === '/about' ? 'active' : ''}>About</a>
//             <a href="/project" className={currentPage === '/project' ? 'active' : ''}>Project</a>
//             <a href="/portfolio" className={currentPage === '/portfolio' ? 'active' : ''}>Portfolio</a>
//             <a href="/contact" className={currentPage === '/contact' ? 'active' : ''}>Contact</a>
//         </nav>
//     </header>
//     )
// }

// export default Header;




import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from "../assets/logo.jpg";
import "../styles/Header.css";

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const currentPage = window.location.pathname;

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="@deodat04"
          />
      
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/" className={currentPage === '/' ? 'active' : ''}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className={currentPage === '/about' ? 'active' : ''}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/project" className={currentPage === '/project' ? 'active' : ''}>Project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio" className={currentPage === '/portfolio' ? 'active' : ''}>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className={currentPage === '/contact' ? 'active' : ''}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
