import React from 'react';
import './Header.css';

function Header(){
    return (
        <header class="header d-flex justify-content-center align-items-end s" id="header">
            <div class="container-fluid ">
                <div class="row ">
                    <div class="col-12 text-center">
                        <div class="header-mask w-100"></div>
                        <h1 class="display-2 text-center mb-4">
                            <span class="primary-heading">Vönduð Jarðvinna</span>
                            <span class="secondary-heading">Áratuga reynsla</span>
                        </h1>
                        <a href="#contact" class=" btn btn-lg btn-success mb-5">Fá Tilboð</a>
                    </div>
                </div>
            </div>
      </header>
    );
}

export default Header;