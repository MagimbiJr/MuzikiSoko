import React from 'react';
import { Link } from 'gatsby';
import Toolbar from '../Toolbar/Toolbar';
import CEO from '../../assets/img/HEADPHONES.jpg'

import './aboutUs.css'

export default () => (
    <>
      <Toolbar />
      <section className="about_us_header">
          <div className="container">
              <div className="about_header_content">
                  <h2>MzikiSoko is the Africa's No.1 Music streaming and shoping Platform. With you anytime anywhere</h2>
                  <h4>Happy to be your Wingman</h4>
              </div>
              <div className="about_to_contact">
                  <p>Want to find more?</p>
                  <Link to="contact">Contact Us</Link>
              </div>
          </div>
      </section>
      <section className="about_content">
        <div className="tab">
            <button className="tab_active">Mission</button>
            <button>What we do</button>
            <button>Our Team</button>
            <button>Location</button>
        </div>
        <div className="about_cont_wrapper">
            <div className="mission">
            <i className="fab fa-battle-net"></i>
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
            <div className="what_we_team">
            <i className="fab fa-buffer"></i>
            <h1>What We Do</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
        </div>    
        <section className="our_team_section">
            <div className="our_team">
               <i className="fas fa-users"></i>
               <h1>Our Team</h1>
               <div className="img_right">
                   <div className="feat_photo">
                       <img src={CEO} alt="CEO" />
                   </div>
                   <div className="photo_info">
                       <h4>Goodluck Gozbeth</h4>
                       <span>CEO, Co Founder</span>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                       <div className="social">
                           <Link to="/">
                               <i className="fab fa-facebook-f"></i>
                           </Link>
                           <Link to="/">
                               <i className="fab fa-instagram"></i>
                           </Link>
                           <Link to="/">
                               <i className="fab fa-twitter"></i>
                           </Link>
                       </div>
                   </div>
               </div>
               <div className="img_left">
                   <div className="photo_info">
                       <h4>Goodluck Gozbeth</h4>
                       <span>CEO, Co Founder</span>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                       <div className="social">
                           <Link to="/">
                               <i className="fab fa-facebook-f"></i>
                           </Link>
                           <Link to="/">
                               <i className="fab fa-instagram"></i>
                           </Link>
                           <Link to="/">
                               <i className="fab fa-twitter"></i>
                           </Link>
                       </div>
                   </div>
                   <div className="feat_photo">
                       <img src={CEO} alt="CEO" />
                   </div>
               </div>
               <div className="img_right">
                   <div className="feat_photo">
                       <img src={CEO} alt="CEO" />
                   </div>
                   <div className="photo_info">
                       <h4>Goodluck Gozbeth</h4>
                       <span>CEO, Co Founder</span>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                       <div className="social">
                           <Link to="/">
                               <i className="fab fa-facebook-f"></i>
                           </Link>
                           <Link to="/">
                               <i className="fab fa-instagram"></i>
                           </Link>
                           <Link to="/">
                               <i className="fab fa-twitter"></i>
                           </Link>
                       </div>
                   </div>
               </div>
               <div className="img_left">
                   <div className="photo_info">
                       <h4>Goodluck Gozbeth</h4>
                       <span>CEO, Co Founder</span>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                       <div className="social">
                           <Link to="/">
                               <i className="fab fa-facebook-f"></i>
                           </Link>
                           <Link to="/">
                               <i className="fab fa-instagram"></i>
                           </Link>
                           <Link to="/">
                               <i className="fab fa-twitter"></i>
                           </Link>
                       </div>
                   </div>
                   <div className="feat_photo">
                       <img src={CEO} alt="CEO" />
                   </div>
               </div>
            </div>
        </section>
      </section>
    </>
)