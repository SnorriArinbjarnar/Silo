import React from 'react';
import CardDeck from './CardDeck';
import './Services.css';

function Services(){
    return(
        <section class="verkefni mb-4 py-6" id="services">
            <div class="container-fluid p-md-2">
                <h3 class="mb-4 p-4 text-center display-3">Þjónusta</h3>
                <div class="row text-center">
                    <CardDeck />
                </div> {/* row end*/}
            </div> {/* Container Fluid End */}
      </section>
    );
}

export default Services;