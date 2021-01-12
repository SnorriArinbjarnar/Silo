import React from 'react';
import './AboutUs.css';
import image1 from '../assets/images/image1.jpg';
import image4 from '../assets/images/image4.jpg';
import image3 from '../assets/images/image3.jpg';

function AboutUs(){
    return (
    <section class="test my-4" id="about">
        <div class ="container-fluid padding bg-light">
            <div class="row about-us-2 text-center ">
                <div class="col-12  text-dark">
                    <h1 class=" display-4">Um Okkur</h1>
                </div>
                <div class="col-12 py-2">
                    <p class="text-justify text-dark lead">
                    Fyrirtækið var stofnað árið 1987 á Neskaupsstað og byrjaði upphaflega sem steypusala. 
                    Síðar flutti reksturinn suður til reykjavíkur árið 2000 og færðum reksturinn meira yfir í jarðvinnu.
                Í gegnum tíðina höfum við sinnt fjölbreyttum verkefnum tengt bygginga- og jarðvinnu. Við sérhæfum okkur í drenlögnum, snjómokstri og allri almennri jarðvinnu. Við vinnum verkin af metnaði og fagmennsku sem hefur gefið okkur gott orðspor og aflað okkur nýrra viðskiptavina.
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-sm-2 ">
                    <img src={image1} alt="" className="img-fluid img-test" />
                </div>
                <div class="col-md-6 col-lg-4 mb-md-2 ">
                    <img src={image3} alt="" class="img-fluid img-test" />
                </div>
                <div class="col-md-auto col-lg-4  ">
                    <img src={image4} alt="" class="img-fluid img-test" />
                </div>

            </div>
        </div> 
    </section>
    );
}

export default AboutUs;