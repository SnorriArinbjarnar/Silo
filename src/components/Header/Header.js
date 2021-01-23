import React from 'react';
import './Header.css';

function Header({header}){
    const {headerBackgroundImage, primaryHeading, secondaryHeading, buttonText} = header;
    
    return (
        <header className="header d-flex justify-content-center align-items-end s" id="header" style={{backgroundImage: `url("${headerBackgroundImage.url}")`}}>
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-12 text-center">
                        <div className="header-mask w-100"></div>
                        <h1 className="display-2 text-center mb-4">
                            <span className="primary-heading">{primaryHeading}</span>
                            <span className="secondary-heading">{secondaryHeading}</span>
                        </h1>
                        <a href="#contact" className=" btn btn-lg btn-success mb-5">{buttonText}</a>
                    </div>
                </div>
            </div>
      </header>
    );
}

export default Header;