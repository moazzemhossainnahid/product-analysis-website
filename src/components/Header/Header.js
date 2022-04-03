import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/bikebd.com_logo.png"
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand to="/">
    <img width="150px" src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <CustomLink to="/">HOME</CustomLink>
      <CustomLink to='/reviews'>REVIEWS</CustomLink>
      <CustomLink to="/dashboard">DASHBOARD</CustomLink>
      <CustomLink to="/blogs">BLOGS</CustomLink>
      <CustomLink to="/about">ABOUT</CustomLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
