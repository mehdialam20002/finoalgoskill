import React from 'react'
import "./footer-style.css"
import ApLogo from "./images/appstoreLogo.png"
import {AiFillFacebook,AiOutlineYoutube,AiFillTwitterCircle,AiOutlineInstagram} from "react-icons/ai"

export default function Footer() {
  return (
    <footer >
        <div className='footer-container'>
        <div className='left box'>
            <div className='left-box-content'>
                <img src="https://unacademy.com/static/images/logo.svg" width="150px" alt="unacdemy-logo" />
                <p>Unacademy is democratising education, making it accessible to all. Join the revolution, learn on India's largest learning platform.</p>
                <div className='ap-logo-img'>
                    <img src={ApLogo} alt="Apple_store" width="80px" />
                    <img src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg" alt="" width="118px" style={{marginLeft:"-8px"}}/>
                 </div>
            </div>
            <hr className='left-hr'></hr>
            <div>
                <h5>Reach out to us</h5>
                <p>Get your questions answered about learning with Unacademy.</p>
                <h5>call</h5>
            </div>
        </div>
        <div className='right box'>
            <div className='right-content'>
                <div className='all-links'>
                    <h5>Company</h5>
                    <p>About Us</p>
                    <p>Shikshodaya</p>
                    <p>Careers</p>
                    <p>Blogs</p>
                    <p>Privacy policy</p>
                    <p>Terms and conditions</p>
                </div>
                <div className='all-links'>
                    <h5>Help & support</h5>
                    <p>About Us</p>
                    <p>Shikshodaya</p>
                    <p>Careers</p>
                    <p>Blogs</p>
                </div>
                <div className='all-links'>
                    <h5>Company</h5>
                    <p>About Us</p>
                    <p>Shikshodaya</p>
                    <p>Careers</p>
                </div>
                <div className='all-links'>
                    <h5>Popular goals</h5>
                    <p>About Us</p>
                    <p>Shikshodaya</p>
                    <p>Careers</p>
                    <p>Blogs</p>
                    <p>Privacy policy</p>
                    <p>Blogs</p>
                </div>
                <div className='all-links'>
                    <h5>Unacademy Centre</h5>
                    <p>About Us</p>
                    <p>Shikshodaya</p>
                    <p>Careers</p>
                    <p>Blogs</p>
                </div>
                <div className='all-links'>
                    <h5>Study material</h5>
                    <p>About Us</p>
                    <p>Shikshodaya</p>
                    <p>Careers</p>
                    <p>Blogs</p>
                    <p>Privacy policy</p>
                    <p>Terms and conditions</p>
                </div>
            </div>
        </div>
     </div>  
     <hr className='main-hr'></hr>
     <div className='footer-end'>
        <div style={{color:"gray"}}> © 2023 Sorting Hat Technologies Pvt Ltd</div>
        <div className='logos'>
        <AiFillFacebook/>
        <AiOutlineYoutube/>
        <AiFillTwitterCircle/>
        <AiOutlineInstagram/>
        </div>
     </div>
    </footer>
  )
}
