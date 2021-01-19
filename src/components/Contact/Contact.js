import React from 'react';
import emailjs, { init } from 'emailjs-com';



function Contact(){

    function sendEmail(e){
        e.preventDefault();
        const gmailService = process.env.REACT_APP_EMAILJS_SERVICEID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATEID;
        const userID = process.env.REACT_APP_EMAILJS_USERID;
        init(userID);

        
        emailjs.sendForm(gmailService, templateID, e.target, userID)
                .then((result) => {
                    console.log(result.text);
                }, error => {
                    console.log(error.text);
                    
                });
    }



    return (
        <section class="contact-us container-fluid mb-4 p-4 " id="contact">
            <div class="row justify-content-center">
                <div class="col-9">
                    <h2 class="mb-3">Hafðu Samband</h2>
                    <hr />
                    <form onSubmit={sendEmail}>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput">Nafn</label>
                        <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        name="Nafn"
                        />
                    </div>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput2">Símanúmer</label>
                        <input
                        type="phone"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder=""
                        name="Phone"
                        />
                    </div>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput2">Netfang</label>
                        <input
                        type="email"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder=""
                        name="email"
                        />
                    </div>
                    
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput2">Skilaboð</label>
                        <textarea
                        class="form-control"
                        id="formGroupExampleInput2"
                        cols="30"
                        rows="10"
                        name="message"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Senda</button>
                    </form>
                </div>
            
            </div>
      </section>
    );
}

export default Contact;