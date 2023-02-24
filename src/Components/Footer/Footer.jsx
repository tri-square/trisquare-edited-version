import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
<footer className="footer">
  <div className="container bottom_border">
    <div className="row">
      <div className=" col-sm-4 col-md col-sm-4  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
        {/*headin5_amrc*/}
        
        <p><i className="fa fa-location-arrow" /> Dubai, UAE</p>
        <p><i className="fa fa-phone" />+91-9999878398</p>
        <a href="mailto:trisquare.engg@gmail.com"> <p><i className="fa fa fa-envelope" /> trisquare.engg@gmail.com</p></a>
      </div>
 
      <div className=" col-sm-4 col-md  col-6 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
        {/*headin5_amrc*/}
        <ul className="footer_ul_amrc">
          <li><a href="/jobs">Careers</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
    
        </ul>
        {/*footer_ul_amrc ends here*/}
      </div>
      <div className=" col-sm-4 col-md  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
        {/*headin5_amrc ends here*/}
        <ul className="footer_ul2_amrc">
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/tri-square-engineering-services/"><i className="fab fa-linkedin fleft padding-right" /> </a><p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/tri-square-engineering-services/">LinkedIn</a></p></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100084552544128"><i className="fab fa-facebook fleft padding-right" /> </a><p><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100084552544128">Facebook</a></p></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/trisquare_engg/"><i className="fab fa-twitter fleft padding-right" /> </a><p><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/trisquare_engg/">Instagram</a></p></li>
        </ul>
        {/*footer_ul2_amrc ends here*/}
      </div>
    </div>
  </div>
  <div className="container">
    <ul className="foote_bottom_ul_amrc">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/jobs">Vacancies</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    {/*foote_bottom_ul_amrc ends here*/}
    <p className="text-center">Copyright @2022 | Designed by Trisquare Engg</p>
    {/* <ul className="social_footer_ul">
      <li><a href="http://webenlance.com"><i className="fab fa-facebook-f" /></a></li>
      <li><a href="http://webenlance.com"><i className="fab fa-twitter" /></a></li>
      <li><a href="http://webenlance.com"><i className="fab fa-linkedin" /></a></li>
      <li><a href="http://webenlance.com"><i className="fab fa-instagram" /></a></li>
    </ul> */}
    {/*social_footer_ul ends here*/}
  </div>
</footer>


    </div>
  )
}

export default Footer