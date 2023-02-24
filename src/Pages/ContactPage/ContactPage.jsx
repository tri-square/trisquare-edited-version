import "./ContactPage.css";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import NavPrimary from "../../Components/NavBarPrimary/NavPrimary";
import Footer from "../../Components/Footer/Footer";
function ContactPage() {
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [secondName, setSecondName] = useState([]);
  const [message, setMessage] = useState([]);

  const serviceId = "service_rh1n9hr";
  const templateId = "template_q9jn62f";
  const publicKey = "Ihq_Z6r2ep5EXazCi";


  const sendEmail = async (firstName, secondName, email, phone, message) => {
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          firstName,
          secondName,
          email,
          phone,
          message,
        },
        publicKey
      );

      if (response.status === 200) {
        console.log("Successfully sent message.");
      }
    } catch (error) {
      console.error("Failed to send email. Error: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(firstName, secondName, email, phone, message);
    e.target.reset();
    alert("Thank you for contacting us. We will get back to you soon!");
  };
  return (
    <div className="contactFormBody">
      <NavPrimary />
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="cntctFormCard">
              <h2>Drop Us A Message</h2>
              <form className="form-card mt-5" onSubmit={handleSubmit}>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      First name<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                      onblur="validate(1)"
                      required
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Last name<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                      onblur="validate(2)"
                      onChange={(e) => setSecondName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Email<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email"
                      onblur="validate(3)"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Phone number<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="mob"
                      name="mob"
                      placeholder="phone (optional)"
                      onblur="validate(4)"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  className="row justify-content-between text-left"
                  style={{ padding: "0 10% 0 10%" }}
                >
                  <div className="form-group col-sm- flex-column d-flex">
                    <label className="form-control-label px-3">
                      Message<span className="text-danger"> *</span>
                    </label>
                    <textarea
                      type="text"
                      id="job"
                      name="job"
                      placeholder
                      onblur="validate(5)"
                      required
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="form-group col-sm-6">
                    <button type="submit" className="btn-block btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactPage;
