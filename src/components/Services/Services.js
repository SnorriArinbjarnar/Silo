import React from 'react';
import CardDeck from './CardDeck';
import './Services.css';

function Services(){
    return(
        <section className="verkefni mb-4 py-6" id="services">
            <div className="container-fluid p-md-2">
                <h3 className="mb-4 p-4 text-center display-3">Þjónusta</h3>
                <div className="row text-center">
                    <CardDeck />
                </div> {/* row end*/}
            </div> {/* Container Fluid End */}
      </section>
    );
}

export default Services;