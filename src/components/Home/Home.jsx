import React, { useState } from 'react';
import './Home.css';
import profileImage from '../../assets/profile.jpg';

// ✅ Image icon imports
import closeIcon from '../Home/icons/FaTimes.jpg'; 
import facebookIcon from '../Home/icons/FaFacebook.jpg';
import twitterIcon from '../Home/icons/FaTwitter.png';
import linkedinIcon from '../Home/icons/FaLinkedin.png';
import whatsappIcon from '../Home/icons/FaWhatsapp.png'; 
import instagramIcon from '../Home/icons/FaInstagram.jpg';
import Tiktok from '../Home/icons/Tiktok.png';
import Email from '../Home/icons/Email.jpg';



function Home() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="home-container">
      <p className="greeting">Hey, I'm Ntokungwia Lordsy 👋</p>
      <h1 className="home-title">Web Developer</h1>
      <p className="home-description">
        I'm a frontend developer based in Cameroon, I build beautiful websites you will love.
      </p>

      <div className="home-buttons">
        <button className="btn primary" onClick={toggleContact}>Get In Touch</button>
      </div>

      {showContact && (
        <div className="contact-popup">
          <button className="close-btn" onClick={toggleContact}>
            <img src={closeIcon} alt="Close" style={{ width: '20px', height: '20px' }} />
          </button>
          <form className="contact-form">
            {/* <h3>Contact Me</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button> */}
            <div className="social-links">
              <a href="https://www.facebook.com/ntohkuns.lordsy" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://x.com/Lordsy96428?t=LH_ZscZsELqySr5t7Yr6vQ&s=09" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="X" />
              </a>
              <a href="https://www.linkedin.com/in/ntokungwia-lordsy-b335b430a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.tiktok.com/@ntokungwialordsy?_t=ZM-8xFujzdWF30&_r=1" target="_blank" rel="noreferrer">
                <img src={Tiktok} alt="Tiktok" />
              </a>
              <a href="https://www.instagram.com/lordsy31?igsh=Mjk1M3JrdXV4dWh1" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://wa.me/message/5XT3PIBUM5SKJ1" target="_blank" rel="noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
            </div>
          </form>
        </div>
      )}

      <div className="home-image-container">
        <img src={profileImage} alt="Lordsy" className="profile-image" />
      </div>
    </div>
  );
}

export default Home;