import React from 'react';
import AboutImage from './AboutImage';
import './AboutUs.css';


function AboutUs({about}){
   
    return (
    <section className="test my-4" id="about">
        <div className ="container-fluid padding bg-light">
            <div className="row about-us-2 text-center ">
                <div className="col-12  text-dark">
                    <h1 className=" display-4">Um Okkur</h1>
                </div>
                <div className="col-12 py-2">
                    <p className="text-justify text-dark lead">
                        {about.aboutUsParagraph}  
                    </p>
                </div>
                {
                    about.aboutImagesCollection.items.map( (item, index) => {
                        const classOne = (index + 1) === about.aboutImagesCollection.items.length ? 'col-md-6 col-lg-4' : 'col-md-6 col-lg-4 mb-sm-2';
                        return (
                            <AboutImage link={item.url} containerClass={classOne} key={index}/>
                        );
                    })
                }
               
            </div>
        </div> 
    </section>
    );
}

export default AboutUs;