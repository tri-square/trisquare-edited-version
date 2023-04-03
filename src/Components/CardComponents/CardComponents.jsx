import "./CardComponents.css";
import Col from "react-bootstrap/Col";
import db from "../../Firebase/Firebase";
import { Card, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";


function CardComponents() {
  const [jobData, setJobData] = useState(false);
  
  const getData = async () => {
    const collectionRef = collection(db, "job_posts");
    getDocs(collectionRef)
      .then((snapshot) => {
        let books = [];
        snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
        });

        setJobData(books);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(jobData);

  return (
    <div>
      
    <div className="rightPanelContainer" style={{ overflow: "hidden" }}>
      <div className="cardList" style={{ justifyContent: "space-evenly" }}>
        <h2 style={{ color: " #7523CC" }}>Job Feed </h2>
        {jobData &&
          jobData.map((obj) => (
            <Col
              key={obj.id}
              className="column"
              style={{
                backgroundColor: "white",
              }}
            >
              <Card style={{ marginTop: "8px",border:'0' }} classnName="card" >
                <Card.Body style={{ textAlign: "left" }} >
                  <Card.Title style={{ color: "green" }}>
                    {obj.job_title}
                  </Card.Title>
                  
                  <Card.Text className="text-primary">{obj.company_name}</Card.Text>
                  <br />

                  <Card.Text className="text-muted">
                    posted on :
                    {new Date(
                      obj.posted_date.seconds * 1000
                    ).toLocaleDateString("en-Uk")}
                  </Card.Text>
                  <br />
                  <Card.Subtitle className="descriptionTxt" >
                    <p className="descriptionTxt">{obj.description} </p>
                  </Card.Subtitle>

                  <br />

                  <div className="salaryDiv">
                
       {obj.salary_from.length>0 &&   <p style={{ maxWidth: "200px" }}>
                      <img
                        src={process.env.PUBLIC_URL + "/icon_salary.png"}
                        style={{ width: "20px", marginRight: "5px" }}
                        alt="salary"
                      />
                       {obj.salary_from} - {obj.salary_to} AED
                    </p>}
                  </div>

                  <div className="applyBtn">
                    <Link to="/application" state={{ jobId: obj.id }}>
                      <Button
                        className="addBtn"
                        style={{ marginLeft: "auto" }}
                        variant="primary"
                        
                      >
                        Apply
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </div>
    </div>
    </div>

  );
}

export default CardComponents;
