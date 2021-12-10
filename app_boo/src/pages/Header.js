import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

const Header = () => (
    <>
     <Navbar  bg="dark" variant="dark">
        <Navbar.Brand href=""></Navbar.Brand>
        <Nav defaultActiveKey="/" as="ul" >
            <Nav.Item as="li">
                <Link className="nav-link" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link className="nav-link" to="/products/new_product">New Product</Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link className="nav-link" to="/products">List Products</Link>
            </Nav.Item>
        </Nav>
     </Navbar>
    </>
);
export default Header;