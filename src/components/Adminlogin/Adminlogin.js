import React from 'react';

export default function Adminlogin() {
    return (
      <>
        <div className='container'>
            <h2>Login</h2>
            <form>
                <p>
                <input type="text" id="username" name="username" placeholder="Username" required />
                </p>
                <p>
                <input type="email" id="email" name="email" placeholder="Email Address" required />
                </p>
                <p>
                  <input type='submit' />
                </p>
            </form>
        </div>
      </>
    );
  }