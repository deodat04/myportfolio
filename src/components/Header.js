// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';
// import logo from "../assets/logo.jpg";
// import "../styles/Header.css";

// function Header(props) {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   const currentPage = window.location.pathname;

//   return (
//     <div>
//       <Navbar color="dark" dark expand="md">
//         <NavbarBrand href="/">
//           <img
//             src={logo}
//             width="30"
//             height="30"
//             className="d-inline-block align-top"
//             alt="@deodat04"
//           />
//         </NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} />
//         <Collapse isOpen={!collapsed} navbar>
//           <Nav className="ms-auto" navbar>
//             <NavItem>
//               <NavLink href="/" className={currentPage === '/' ? 'active' : ''}>Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/about" className={currentPage === '/about' ? 'active' : ''}>About</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/project" className={currentPage === '/project' ? 'active' : ''}>Project</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/portfolio" className={currentPage === '/portfolio' ? 'active' : ''}>Portfolio</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/contact" className={currentPage === '/contact' ? 'active' : ''}>Contact</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;

import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.jpg";
import classes from "../styles/Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="@deodat04"
          />
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                    <li>
                            <Link to="/" onClick={menuToggleHandler}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={menuToggleHandler}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/project" onClick={menuToggleHandler}>
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" onClick={menuToggleHandler}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={menuToggleHandler}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* <button onClick={ctaClickHandler}>CTA Page</button> */}
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;