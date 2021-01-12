import React from 'react';

function Contact(){
    return (
        <section class="contact-us container-fluid mb-4 p-4 " id="contact">
            <div class="row justify-content-center">
                <div class="col-9">
                    <h2 class="mb-3">Hafðu Samband</h2>
                    <hr />
                    <form>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput">Nafn</label>
                        <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Example input"
                        />
                    </div>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput2">Símanúmer</label>
                        <input
                        type="phone"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input"
                        />
                    </div>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput2">Netfang</label>
                        <input
                        type="email"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input"
                        />
                    </div>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput2">Skilaboð</label>
                        <textarea
                        class="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            
            </div>
      </section>
    );
}

export default Contact;