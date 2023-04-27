import React from 'react';
import { useState } from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Navbar1 = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
      setIsLoggedIn(false);
     
    sessionStorage.removeItem('userId'); // remove userId from session storage upon logout
    // Perform logout logic here
    console.log('User logged out!');
    // Redirect to login page
    window.location.href = '/';
  };



  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/homePage">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Highlights">HighLights</Nav.Link>
            <Nav.Link href="/Content">Content</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
