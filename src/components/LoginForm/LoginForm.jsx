import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
 const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('Form submitted');
 };

 return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" 
            placeholder='Username' 
            required
            aria-label='Username'
          />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" 
            placeholder='Password' 
            required
            aria-label='Password'
          />
          <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
 )
}

export default LoginForm;
