import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer_heading'>
        <h1 className='gradient__text'>Do you want to step into the futuro before others?</h1>
      </div>
      <div className='gpt3__footer_button'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer_links'>
        <div className='gpt3__footer_links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Made with 💙 by dev.alejandrojgr23, All rights reserved.</p>
        </div>
        <div className='gpt3__footer_links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer_links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer_links_div'>
          <h4>Get in Touch</h4>
          <p>000 000 000</p>
          <p>Montevideo Street, the blue door</p>
          <p>dev.alejandrojgr23@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer_copyright'>
        <p>2022, Made with 💙. All rights reserved.</p>
      </div>
    </div>
  )
}
export default Footer;
