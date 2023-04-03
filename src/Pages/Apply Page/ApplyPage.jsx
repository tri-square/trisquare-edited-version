import React, { useEffect, useState } from "react";
import "./ApplyPage.css";
import db from "../../Firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ApplicationForm from "../../Components/ApplicationForm/applicationForm";
import NavBar from "../../Components/NavBar/NavBar";

function ApplyPage() {
  const [jobData, setJobData] = useState([]);
  const location = useLocation();
  let data = "";
  useEffect(() => {
    data = location.state.jobId;
    getData(data);
    console.log('id: ',data);         //data is id 
  }, []);

  const getData = async (data) => {
    const docRef = doc(db, "job_posts", data);
    getDoc(docRef).then((doc) => {
      setJobData(doc.data());
    });
  };

  
  return (
    <div>
      <NavBar/>

    <div className="container">
      <div className="applicationTitle pt-3 pb-3">
        <h2>Application Details</h2>
      </div>

      <div className="detailsContainer">
        <div
          className="column"
          style={{
            backgroundColor: "white",
          }}
        >
          <Card style={{ marginTop: "8px" }} classnName=" p-3 ">
            <Card.Body style={{ textAlign: "left" }}>
              <Card.Title>Job : {jobData.job_title}</Card.Title>

              <br />
              <Card.Text className="text-muted">posted on : </Card.Text>
              <br />

              <Card.Subtitle
                className="descriptionTxt"
                style={{ textAlign:'justify'}}
              >
                Details:{" "}
                <p className="descriptionTxt">{jobData.description} </p>
              </Card.Subtitle>
              <br />
           
              <div className="salaryDiv">
                <p style={{ maxWidth: "200px" }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icon_salary.png"}
                    style={{ width: "20px", marginRight: "5px" }}
                    alt='salary :'
                  />
                  Rs {jobData.salary_from} - {jobData.salary_to}
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>


        <div className="formContainer">
        {jobData &&  <ApplicationForm  job_title={jobData.job_title} company_name={jobData.company_name} jobId={data}/>}
        </div>
      </div>
    </div>
    </div>

  );
}

export default ApplyPage;
