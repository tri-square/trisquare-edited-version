import React, { useState,useEffect } from "react";
import "./ApplicationForm.css";
import sendEmail from "../../email_js";
import Modal from "react-modal";


function ApplicationForm(props) {
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [visaType, setVisaType] = useState("visiting");
  const [firstName, setFirstName] = useState([]);
  const [linkedInId, setLinkedInId] = useState([]);
  const [secondName, setSecondName] = useState([]);

  const [modalState, setModalState] = useState(false);
  const [typingTestScore, setTypingTestScore] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
 
    sendEmail(
      firstName,
      secondName,
      email,
      phone,
      linkedInId,
      visaType,
      props.job_title,
      props.company_name,
      typingTestScore
    );

    setModalState(true);
    e.target.reset();
  };

  useEffect(() => {
		const stroedScore = localStorage.getItem('wpm')
		if (stroedScore) setTypingTestScore(stroedScore)
	}, [])
  

  return (
    <div>
    
    <div className="page-wrapper  p-t-45 ">
      <div className="card applicationCard-5">
        <div className="card-heading">
          <h2 className="applicationFormTitle">Application Form</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-row m-b-55">
              <div className="name">Name</div>
              <div className="value">
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group-desc">
                      <input
                        className="input--style-5"
                        type="text"
                        name="first_name"
                        placeholder="first name"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-group-desc">
                      <input
                        className="input--style-5"
                        type="text"
                        name="last_name"
                        placeholder="last name"
                        required
                        onChange={(e) => setSecondName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="name">Linked In id</div>
              <div className="value">
                <div className="input-group">
                  <input
                    className="input--style-5"
                    type="text"
                    name="company"
                    placeholder="(optional)"
                    onChange={(e) => setLinkedInId(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mailPhoneContainer">
              <div className="form-row mailContainer" >
                <div className="name">Email</div>
                <div className="value">
                  <div className="input-group">
                    <input
                      className="input--style-5 "
                      type="email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row phoneContainer " >
                <div className="name">Phone</div>
                <div className="value">
                  <div className="row row-refine">
                    <div className="input-group-desc ">
                      <input
                        className="input--style-5  "
                        type="text"
                        name="phone"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-row p-t-20">
              <label className="label label--block">Visa Type :</label>
              <div className="p-t-15">
                <label className="radio-container  m-r-55">
                  visiting
                  <input
                    type="radio"
                    defaultChecked="checked"
                    name="exist"
                    onClick={() => setVisaType("visiting")}
                  />
                  <span className="checkmark" />
                </label>
                <label className="radio-container  ">
                  residential
                  <input type="radio" name="exist" />
                  <span
                    className="checkmark"
                    onClick={() => setVisaType("residential")}
                  />
                </label>
              </div>
            </div>

            <div className="form-row p-t-20">
              <p className="warningText" >Take a screenshot of the result of your typing test  and mail it to <a className="warningText-link" href="mailto:trisquare.engg@gmail.com">trisquare.engg@gmail.com</a></p>
            </div>

            <div>
              <button className="btn btn--radius-2 " type="submit">
                Apply
              </button>
            </div>
          </form>
          <Modal isOpen={modalState}
          
          >
            <div className="modalContainer ">
              
            <button className="button-63" onClick={() => setModalState(!modalState)}>close</button>
            </div>
       
          </Modal>
        </div>
      </div>
     
    </div>
    </div>

  );
}

export default ApplicationForm;
