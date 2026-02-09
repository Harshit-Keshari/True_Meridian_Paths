import { useState, useEffect } from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Logo.png";

function Navigation_bar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={`navbar-blur-overlay mx-auto ${sticky ? "sticky" : ""}`}
      style={{ maxWidth: "900px" }}
    >
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={logo}
            alt="True Meridian Paths Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Center Nav */}
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#home" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">
              About
            </Nav.Link>

            <NavDropdown
              title="Services"
              id="navbarScrollingDropdown"
              className="nav-link-custom"
            >
              <NavDropdown.Item href="#action3">Tour Packages</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Spiritual Tours</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Customized Trips</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Bookings</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Experiences</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">Travel Support</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>

          {/* Right Buttons */}
          <div className="d-flex gap-2 ms-auto">
            <Button variant="info">Login</Button>
            <Button variant="info">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation_bar;
