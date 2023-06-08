import React from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom';

export default function Sidebar() {
    return (
      <>
        <div className="container">
                  
                  <ul className="sidebar">
                  <li><span>SideBar</span></li>
                   <li><Link to="/Adminlogin"><span><i className="users"></i></span><span>LOGIN</span></Link></li>
                   <li><Link to="/Uploadlogo"><span><i className="home"></i></span><span>LOGO</span></Link></li>
                   <li><Link to="/Selectactivity"><span><i className="dashboard"></i></span><span>ACTIVITY</span></Link></li>
                   </ul>
                  
                  <div className="content">
                     
                  </div>
          </div>
      </>
    );
  }