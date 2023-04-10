import "./css/LandingPage.css";
import React, { useState} from "react";
import "./css/LandingPage.css";
import NavPrimary from "../../Components/NavBarPrimary/NavPrimary";
import Footer from "../../Components/Footer/Footer";


function LandingPage() {
  const [serviceBtnState, setServiceBtnState] = useState(false);

  let btnId = "activeBtn";

  if (serviceBtnState) {
    btnId = "inactive";
  }


  return (
    <div>
      {/* nav end */}

      <div className="landingPageContainer">
        <div className="bannerContainer">
          <NavPrimary />

          <div className="bannerTxt">
            <h1 className="heading">
              {" "}
              <span className="weTakeYou"> sell your </span> <br />{" "}
              <span className="higher"> SKILLS </span>
            </h1>
            <br />

            <br />
          </div>
        </div>

        <section className="whoSec">
          <div className="whoContainer">
       

               <div className="whoRight">
         {/* <img style={{maxWidth:'100%'}} src="https://imgofficial.files.wordpress.com/2015/06/ho-we-ar.jpg" alt="" /> */}
              
            </div>


            <div className="whoLeft">
            <h2>
                We are a remote engineering service firm providing services to
                employers and opportunities to employees
              </h2>
              
            </div>
          </div>
        </section>
        

        <section className="services">
          <div className="serviceContainer">
            <h2>Our Services</h2>

            <div className="optionBtnDiv">
            <a href="/services">  
              <button
                className="optionBtn "
                id={btnId}
                onClick={(e) => setServiceBtnState(false)}
              >
                For Employers
              </button>
              </a>

              <a href="/services">  
              <button
                className="optionBtn"
                onClick={(e) => setServiceBtnState(true)}
              >
                For Employees
              </button>
              </a>
            </div>
          </div>          
        </section>
        <section className="newsSec">
          <div className="blogContainer">
            <div className="blog">
            <div className="blog-container-1" component="span" sx={{ p: 6, border: '1px dashed grey',backgroundColor: 'grey' }}>
           Blog 1
    </div>
    <div className="blog-container-2" component="span" sx={{ p: 6, border: '1px dashed grey',backgroundColor: 'grey' }}>
      Blog 2
    </div>
    <div className="blog-container-3" component="span" sx={{ p: 6, border: '1px dashed grey',backgroundColor: 'grey' }}>
      Blog 3
    </div>
            </div>
    <div className="news">
      <a href="https://www.khaleejtimes.com/uae/uae-want-a-100000-salary-yas-island-announces-worlds-best-job-contest">  
            <div className="news-container-1" component="span" sx={{ p: 4, border: '1px dashed grey' }}>
            <p style={{maxWidth:"12ch",color:"black",fontWeight:"500"}}>UAE:want a 100000 salary?</p>
            </div>
      </a>
      <a href="https://www.khaleejtimes.com/uae/uae-sharjah-ruler-directs-grants-to-4500-retirees">
        <div className="news-container-2" component="span" sx={{ p: 4, border: '1px dashed grey' }}>
      <p style={{maxWidth:"12ch",color:"black",fontWeight:"500"}}>UAE:Sharjah ruler direct</p>
    </div>
    </a>
      <a href="https://www.google.com/amp/s/m.economictimes.com/news/economy/policy/how-can-indias-upcoming-budget-revolutionise-the-jobs-market-amid-population-spike/amp_articleshow/96673253.cms">
        <div className="news-container-3" component="span" sx={{ p: 4, border: '1px dashed grey',backgroundColor: 'grey' }}>
        <p style={{maxWidth:"12ch",color:"black",fontWeight:"500"}}>How india's upcoming</p>
    </div>
    </a>

          </div>
          </div>
        </section>

        <section className="vacancies">
        <div className="vacnciesContainer">
            <div className="vacanciesLeft">
                <h2>Explore New Opportunities</h2>
                 <br />
                 <br />

                <h3>We bring you new carrier opportunities <br /> and help you scale up your life.</h3>
            </div>

            <div className="vacanciesRight">
         <a href="/jobs">   <button  class="button-86" role="button">See Vacancies</button> </a>

            </div>
          </div>
        </section>
      </div>
  
      <Footer/>
    </div>
  );
}

export default LandingPage;
