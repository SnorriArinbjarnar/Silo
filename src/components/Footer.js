import React from 'react';

function Footer() {
    return(
        <footer class="page-footer  font-small bg-light d-flex justify-content-center">
            <div class="footer-copyright text-center mt-2">
            <p>
                <span>Steypusalan Síló</span>
                |
                <span>Rauðhella 1, 221 Hafnafjörður</span>
                |
                <span>netfang: example@example.com</span>
            </p>
            </div>
            <div class="social">
                <a class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>
            </div>
      </footer>
    );
}

export default Footer;