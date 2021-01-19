import React, {Component} from 'react'
//import {Link, NavLink} from 'react-router';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.toogleNavbar = this.toogleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toogleNavbar(){
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render(){
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show ';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-white sticky-top ">
            <div class="container-fluid d-flex flex-xs-column  flex-md-row ">
              {/*<a href="/#" class="navbar-brand">
                LOGO
              </a>*/}
              <div class="navigation-part">
                  <button
                  className={`${classTwo}`}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  onClick={this.toogleNavbar}
                  >
                  <span class="navbar-toggler-icon"></span>
                  </button>
    
              <div className={`${classOne}`} id="navbarResponsive">
                <ul class="navbar-nav ml-auto  ">
                  <li class="nav-item active">
                    <a href="/#" class="nav-link">Heim</a>
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
            <div class="phone-part text-primary p-2 ">
              <span >555-4567</span>
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
          </div>
          
          </nav>
          )
  }
    
}

export default Navbar
