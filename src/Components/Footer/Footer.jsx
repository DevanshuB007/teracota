import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTiktok, FaSnapchat, FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <div className='main-footer'>
      <div className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-input-section">
          <div className="subscribe">SUBSCRIBE NOW!</div>
          <div className="input">
            <input type="text" placeholder='Your email' />
            <div className="subscribebtn">
              <button>Subscribe</button>
            </div>
          </div>
          <div className="icons">
            <div className="facebook">
              <FaFacebook />
            </div>
            <div className="instagram">
              <FaInstagram />
            </div>
            <div className="tiktok">
              <FaTiktok />
            </div>
            <div className="snapchat">
              <FaSnapchat />
            </div>
            <div className="twitter">
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="company-info">
          <div className="our-companay">
            <div className="company-info-title">Our Companay</div>
            <p>Personal  info</p>
            <p>Orders</p>
            <p>Credit Slips</p>
            <p>Content</p>
            <p>Addresses</p>
          </div>
          <div className="our-products">
            <div className="company-info-title">PRODUCTS</div>
            <p>Product-1</p>
            <p>Product-2</p>
            <p>Product-3</p>
            <p>Product-4</p>
            <p>Product-5</p>
          </div>
          <div className="about-us">
            <div className="company-info-title">About Us</div>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FaQs</p>
            <p>New Products</p>
            <p>Best Sales</p>
          </div>
          <div className="your-acc">
            <div className="company-info-title">Your Account</div>
            <p>Login</p>
            <p>Forget password</p>
            <p>My Account</p>
            <p>Registraton</p>
          </div>
        </div>
          <div className="copyright">
          <div>© 2023, TerraCotta Sectioned Shopify Theme</div>
          <div className="card">
            <div><img src="https://logodownload.org/wp-content/uploads/2019/09/apple-pay-logo-0.png" height="50px" width="50px" alt="card"></img></div>
            <div><img src="https://static.vecteezy.com/system/resources/previews/017/221/782/non_2x/google-pay-logo-transparent-free-png.png" height="50px" width="50px" alt="card"></img></div>
            <div><img src="https://th.bing.com/th/id/R.e1c08ee82680b977435ce532eddd4e16?rik=v1Pwr8gDe5lrEw&amp;riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f04%2fVisa-logo.png&amp;ehk=qIZIg9FgR13cA8GuriQJA08iBENw05br%2fN54qs9k%2ftU%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0" height="20px" width="50px" alt="card"></img></div>
            <div><img src="https://www.pngmart.com/files/22/Mastercard-Logo-PNG-HD.png" height="30px" width="50px" alt="card"></img></div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
