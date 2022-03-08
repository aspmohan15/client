import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <Navbar style={{
                backgroundColor: "#A4E51F",
                position: "sticky",
                top: 0,
            }} >
                <Container>
                    <Navbar.Brand>My Farmer Store</Navbar.Brand>
                    <Nav>
                        <Nav.Item style={{ color: "red", marginLeft: "20px" }}>Products</Nav.Item>
                        <Nav.Item className='' style={{ color: "red", marginLeft: "20px" }}>Service</Nav.Item>
                        <Nav.Item className='' style={{ color: "red", marginLeft: "20px" }}>Contact</Nav.Item>
                        <Nav.Item className='' style={{ color: "red", marginLeft: "20px" }}>About-us</Nav.Item>
                    </Nav>
                    <NavDropdown title="Accounts">
                        <Link to="/home">Sign up</Link>

                    </NavDropdown>
                </Container>
            </Navbar>


        </>
    )
}
