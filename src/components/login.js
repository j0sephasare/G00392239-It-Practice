import React, { useState } from 'react';
import axios from 'axios';
import './css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        email,
        password,
      });
      console.log(response.data);
      setIsLoggedIn(true); // set isLoggedIn state to true upon successful login
    } catch (error) {
      console.log('Does not exist');
    }
  };

  if (isLoggedIn) {
    // if user is logged in, show the main app
    return (
      <div>
        <h1>Welcome to the main app!</h1>
        {/* add your main app code here */}
      </div>
    );
  } else {
    // if user is not logged in, show the login form
    return (
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleLogin}>
            <h3>Log In</h3>
              <div className="login__field">
              
                <label>
                  Email:
                  <br />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <label>
                  Password:
                  <br />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <button className="button login__submit" type="submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <br />
              <button className="button login__submit" onClick={() => window.location.href='/register'}>
            <span className="button__text">Sign Up</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>
            </form>
          </div>

          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
