import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing container'>
      <div>
        <div className='landing-inner container center'>
          {/* <h1 className='page-title'>E2 Accelerator</h1> */}
        </div>
        <div className='landing-buttons container center'>
          <p className='register-prompt-text section'>
            Register for a new account or login to your existing account
          </p>
          <Link
            to='/register'
            className='btn btn-large grey darken-3 landing-button'
          >
            Sign Up
          </Link>
          <Link
            to='/login'
            className='btn btn-large grey darken-3 landing-button'
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
