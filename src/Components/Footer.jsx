import React from 'react'
import { FaUserAlt,FaCartPlus,FaHeart,FaSearch,FaChevronRight,FaChevronLeft,FaChevronDown,FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,FaCcVisa,FaCcMastercard,FaCcDiscover,FaCcPaypal,FaApplePay,FaGooglePay,FaBitcoin,FaTimes } from 'react-icons/fa';

import logo from '../images/puma-logo-cover-removebg-preview.png';

const Footer = () => {
  return (
    <>
    <div className='content'></div>
    <div className="footer">
             <div className='footer1'>
                <div className="footme">
                  <div>Support</div>
                  <div className="support1">
                      <div className='portal1'>
                         <div>Customer Service</div>
                         <div>FAQS</div>
                         <div>Contact Us</div>
                         <div>Purchase a Digital Gift Card</div>
                         <div>Student Discount</div>
                         <div>Privacy Policy</div>
                         <div>Cookie Settings</div>
                      </div>
                      <div className='portal1'>
                         <div>Shipping and Delivery</div>
                         <div>Return Policy</div>
                         <div>Store Locator</div>
                         <div>Service Discount</div>
                         <div>Terms & Conditions</div>
                         <div>Transparency in Supply Chain</div>
                         <div>Check Gift Card Balance</div>
                      </div>
                  </div>

                </div>
                <div className="footme">
                <div>About</div>
                  <div  className="support1">
                      <div className='portal1'>
                         <div>Company</div>
                         <div>Press Center</div>
                         <div>Investors</div>
                         <div>Careers</div>
                      </div>
                      <div className='portal1'>
                         <div>Corporate News</div>
                         <div>#REFORM</div>
                         <div>Sustainability</div>
                      
                      </div>
                  </div>
                </div>
      
      <div className="footme">
                  <div>Newsletter sign up</div>
        
        
        <div className="newsme">
          <div className='mycla1'><input placeholder='Email' className='myinput1' /></div>
          <div className='mycla2'><FaChevronRight /></div>
        </div>
       
        <div className="newsme1">
<div>🇬🇧 SELECT LANGUAGE</div>
<div><FaChevronDown /></div>
        </div>

    <div className="newsme11">
      <div>Explore Our Apps</div>
      <div className='marky'>
          <div className="wiz">
            <div className='img1'><img src={logo} /></div>
            <div className='wiz1'>APP</div>
          </div>
          <div className="wiz">
             <div className='img2'><img src={logo} /></div>
            <div className='wiz1'>TRAC</div>
          </div>
      </div>
        </div>   

      </div>
    </div>



      <div className='footer2'>
               <div className='iconme'>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaPinterest />
                <FaYoutube />
               </div>
               <div className="footmiddle">
                <div>© PUMA North America, Inc.</div>
                <div>Imprint and Legal Data</div>
               </div>
               <div className='cardme'>
                <div><FaCcVisa /></div>
                <div><FaCcMastercard /></div>
                <div><FaBitcoin /></div>
                <div><FaCcDiscover /></div>
                <div><FaCcPaypal /></div>
                <div><FaApplePay /></div>
                <div><FaGooglePay/></div> 
                 <div><FaCcVisa /></div>
               </div>
      </div>
           
           
           
           </div> 
           </>
  )
}

export default Footer