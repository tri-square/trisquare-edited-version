import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";

import NavPrimary from "../../Components/NavBarPrimary/NavPrimary";
import "./AboutPage.css";
function AboutPage() {
  const [serviceBtnState, setServiceBtnState] = useState(false);

  let btnId = "activeBtn";

  if (serviceBtnState) {
    console.log("if log service btn state");
    btnId = "inactive";
  }

  return (
    <div>
      <NavPrimary />
      <div className="abtBanner">
        <h1 className="abtTitle">About Us</h1>
      </div>

      <section className="abtFirst">
        <div className="abtLeft">
          <img
            className="abtImg"
            src={process.env.PUBLIC_URL + "/aboutImg.jpg"}
            alt=""
          />
        </div>

        <div className="abtRight">
          We are a remote engineering service firm of front end engineers with
          the motto to make employers business and employees career easier.
        </div>
      </section>

      <section className="abtServiceSection">
        <div className="main-container">
          <div className="abtServiceHeading">
            <h1 className="heading__title">Our Services</h1>
        
          </div>
          <div className="cards">
            <div className="abtServiceCard card-1">
              <div className="card__icon">
              <i class="fas fa-plane-departure"></i>
              </div>
            
              <h2 className="card__title">
              Recruitment
              </h2>
           
            </div>
            <div className="abtServiceCard card-2">
              <div className="card__icon">
              <i class="far fa-map"></i>
              </div>
          
              <h2 className="card__title">
              CAD Services
              </h2>
             
            </div>
            <div className="abtServiceCard card-3">
              <div className="card__icon">
              <i class="fa-brands fa-unity"></i>
              </div>
           
              <h2 className="card__title">3D Modelling</h2>
           
            </div>
            <div className="abtServiceCard card-4">
              <div className="card__icon">
              <i class="fa-solid fa-briefcase"></i>
              </div>
           
              <h2 className="card__title">
              Part Time Job Opprtunities
              </h2>
            
            </div>
            <div className="abtServiceCard card-5">
              <div className="card__icon">
              <i class="fas fa-chart-line"></i>
              </div>
           
              <h2 className="card__title">
              Career Guidance
              </h2>
             
            </div>
            <div className="abtServiceCard card-1">
              <div className="card__icon">
              <i class="fa-solid fa-gears"></i>
              </div>
              
              <h2 className="card__title">
              Skill Development
              </h2>
             
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
