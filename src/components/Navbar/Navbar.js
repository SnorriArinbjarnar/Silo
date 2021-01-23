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
      <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top ">
            <div className="container-fluid d-flex flex-xs-column  flex-md-row ">
              {/*<a href="/#" class="navbar-brand">
                LOGO
              </a>*/}
              <div className="navigation-part">
                  <button
                  className={`${classTwo}`}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  onClick={this.toogleNavbar}
                  >
                  <span className="navbar-toggler-icon"></span>
                  </button>
    
              <div className={`${classOne}`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto  ">
                  <li className="nav-item active">
                    <a href="/#" className="nav-link">Heim</a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link">Um okkur</a>
                  </li>
                  <li className="nav-item">
                    <a href="#services" className="nav-link">Þjónusta</a>
                  </li>
                  
                  <li className="nav-item">
                    <a href="#contact" className="nav-link">Hafðu Samband</a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="phone-part text-primary p-2 ">
              <span>893 3249</span>
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
          </div>
          
          </nav>
          )
  }
    
}

export default Navbar
