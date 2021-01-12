import React from 'react'
//import {Link, NavLink} from 'react-router';

function Navbar() {
    return (
<nav class="navbar navbar-expand-md navbar-light bg-white sticky-top ">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          LOGO
        </a>
        <div class="navigation-part ">
            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            >
            <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="#" class="nav-link">Heim</a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">Um okkur</a>
            </li>
            <li class="nav-item">
              <a href="#services" class="nav-link">Þjónusta</a>
            </li>
            
            <li class="nav-item">
              <a href="#contact" class="nav-link">Hafðu Samband</a>
            </li>
            
          </ul>
        </div>
      </div>
      <div class="phone-part text-primary p-2">

        <span >555-4567</span>
        <i class="fa fa-phone" aria-hidden="true"></i>

        
      </div>
    </div>
    
    </nav>
    )
}

export default Navbar
