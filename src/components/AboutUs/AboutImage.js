import React from 'react';
import './AboutImage.css';


function AboutImage({link, containerClass}){
    return(
    <div className={containerClass} >
        <img src={link} alt="" className="img-fluid img-test" />
    </div>
    );
}

export default AboutImage;