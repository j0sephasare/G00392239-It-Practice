import React from 'react'
import '../App.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Highlights } from './Highlights';
import {Content } from './Content';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './login';
import Register from './register';


const Navbar1 = () => {
  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Highlights">HighLights</Nav.Link>
            <Nav.Link href="/Content">Content</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      <Route path='/Highlights' element={<Highlights></Highlights>}></Route>
      <Route path='/Content' element={<Content></Content>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
     
    </Routes>
    </div>
    </Router>
  );
}

export default Navbar1