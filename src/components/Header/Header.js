import React from 'react';
import './Header.css';

function Header({header}){
    const {headerBackgroundImage, primaryHeading, secondaryHeading, buttonText} = header;
    
    return (
        <header class="header d-flex justify-content-center align-items-end s" id="header" style={{backgroundImage: `url("${headerBackgroundImage.url}")`}}>
            <div class="container-fluid ">
                <div class="row ">
                    <div class="col-12 text-center">
                        <div class="header-mask w-100"></div>
                        <h1 class="display-2 text-center mb-4">
                            <span class="primary-heading">{primaryHeading}</span>
                            <span class="secondary-heading">{secondaryHeading}</span>
                        </h1>
                        <a href="#contact" class=" btn btn-lg btn-success mb-5">{buttonText}</a>
                    </div>
                </div>
            </div>
      </header>
    );
}

export default Header;