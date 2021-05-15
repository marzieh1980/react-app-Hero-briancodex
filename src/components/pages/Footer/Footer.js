import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin, 
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';


import { MdFingerprint } from 'react-icons/md';    //MdFilterVintage

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Unisciti al nostro abbonamento esclusivo per ricevere le ultime notizie.
        </p>
        <p className='footer-subscription-text'>
        È possibile unsubscribe  in qualsiasi momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Investors</Link>
           
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <h4>
              <FaEnvelope /> info @ panema.it
            </h4>
          </div>
        </div>
        
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
          <div className='footer-link-items'>
          
          <h2>Location</h2>
          <p >22, Via Cottolegno, Torino</p>
          <h4>
             <FaPhone /> (392) 754-3010
          </h4>
         
          
        </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              PANEMA
            </Link>
          </div>
         
          <p className='website-rights'>Copyright @ <script>document.write(new Date).getFullYear());</script>2021 All rights reserved</p>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
            className='social-icon-link'
            to={
              '//www.youtube.com/watch?v=rPxffUTsQ04&t=2117s'
            }
            target='_blank'
            aria-label='Youtube'
          >
            <FaYoutube />
          </Link>
            
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;