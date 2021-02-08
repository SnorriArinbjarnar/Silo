import React, {useState, useCallback, useRef, useEffect} from 'react';
import './Navbar.css';

function Navbar(){
    const [collapsed, setCollapsed] = useState(true);
    const [show, setShow] = useState(false);
    const btn = useRef(null);

   const toggleCollapse = useCallback(
        () => setCollapsed(!collapsed),
        [collapsed, setCollapsed],
    )

    useEffect(() => {
        const {current} = btn;
        const isVisible = (window.getComputedStyle(current).getPropertyValue('display') !== 'none');
        const setShowVar = (boolValue) => {
            setShow(boolValue);
        }
        const handleResize = () => {
            const isVisible = (window.getComputedStyle(current).getPropertyValue('display') !== 'none');
            setShowVar(isVisible);
        }
        
        setShowVar(isVisible);
        window.addEventListener('resize', handleResize);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show ';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    const classThree = collapsed   ? 'container-fluid' : 'container-fluid collapse-direction';

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top ">
            <div className={classThree}>
            {/*<a href="/#" class="navbar-brand">
                LOGO
            </a>*/}
            <div className="navigation-part">
                <button
                className={`${classTwo}`}
                ref={btn}
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                onClick={toggleCollapse}
                >
                <span className="navbar-toggler-icon"></span>
                </button>

            <div className={`${classOne}`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto  ">
                <li className="nav-item active">
                    <a href="/#" className="nav-link" onClick={show ? toggleCollapse : null}>Heim</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link" onClick={show ? toggleCollapse : null}>Um okkur</a>
                </li>
                <li className="nav-item">
                    <a href="#services" className="nav-link" onClick={show ? toggleCollapse : null}>Þjónusta</a>
                </li>
                
                <li className="nav-item">
                    <a href="#contact" className="nav-link" onClick={show ? toggleCollapse : null}>Hafðu Samband</a>
                </li>
                
                </ul>
            </div>
            </div>
            <div className="phone-part text-primary p-2 ">
            <a href="tel:+8933249">893 3249</a>
            <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;