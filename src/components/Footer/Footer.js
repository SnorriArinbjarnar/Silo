import React from 'react';

function Footer() {
    return(
        <footer className="page-footer  font-small bg-light d-flex justify-content-center">
            <div className="footer-copyright text-center mt-2">
            <p>
                <span>Steypusalan Síló</span>
                |
                <span>Rauðhella 1, 221 Hafnafjörður</span>
                |
                <span>netfang: example@example.com</span>
            </p>
            </div>
            <div className="social">
                <a className="btn-floating btn-lg btn-fb" href="https://www.facebook.com/Gröfu-og-jarðvinnuþjónusta-Síló-113866570381886" type="button" role="button"><i className="fab fa-facebook-f"></i></a>
            </div>
      </footer>
    );
}

export default Footer;