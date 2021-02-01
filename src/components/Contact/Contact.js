import React, {useState} from 'react';
import SnackBar from '../SnackBar/SnackBar';
import emailjs, { init } from 'emailjs-com';

function Contact(){
    const [snackMessage, setSnackMessage] = useState("");

    function sendEmail(e){
        e.preventDefault();
        const gmailService = process.env.REACT_APP_EMAILJS_SERVICEID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATEID;
        const userID = process.env.REACT_APP_EMAILJS_USERID;
        init(userID);

        emailjs.sendForm(gmailService, templateID, e.target, userID)
                .then(() => {
                    setSnackMessage("Tölvupóstur sendur...");
                    triggerSnackBar('snackbar');
                }, () => {
                    setSnackMessage("Eitthvað fór úrskeiðis. Reyndu aftur síðar...");
                    triggerSnackBar('snackbar');
                })
                     
    }

    const triggerSnackBar = (snackBarId) => {
        var bar = document.getElementById(snackBarId);
        bar.className = "show";
    
        setTimeout(() => {
          bar.className = bar.className.replace("show", "");
        }, 3000);
    }

    return (
        <React.Fragment>
        <section className="contact-us container-fluid mb-4 p-4 " id="contact">
            <div className="row justify-content-center">
                <div className="col-9">
                    <h2 className="mb-3">Hafðu Samband</h2>
                    <hr />
                    <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Nafn</label>
                        <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        name="Nafn"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Símanúmer</label>
                        <input
                        type="phone"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder=""
                        name="Phone"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Netfang</label>
                        <input
                        type="email"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder=""
                        name="email"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Skilaboð</label>
                        <textarea
                        className="form-control"
                        id="formGroupExampleInput2"
                        cols="30"
                        rows="10"
                        name="message"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Senda</button>
                    
                    </form>
                </div>
            </div>
            
      </section>
      <SnackBar message={snackMessage} />
      </React.Fragment>
    );
}

export default Contact;