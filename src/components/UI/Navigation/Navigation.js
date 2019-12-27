import React from 'react';
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Navigation = () => {
  return (
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/pages/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/pages/contacts">Contacts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/pages/info">Info</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/pages/photos">Photos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/pages/videos/">Videos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/pages/admin/">ADMIN</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
  );
};

export default Navigation;