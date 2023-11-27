import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Your efforts will bear fruits.</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request early access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links-logo">
          <img src={gpt3Logo} alt="" />
          <p>Your efforts will bear fruits.</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Home.</p>
          <p>About.</p>
          <p>Sitemap.</p>
          <p>Contact.</p>

        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Information.</p>
          <p>Sponsors</p>
          <p>Lucrative deals</p>
          <p>Explore.</p>

        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Fine grains.</p>
          <p>Products.</p>
          <p>Tutorials</p>
          <p>Good luck.</p>

        </div>

      </div>

      <div className="gpt3__footer-copyright">
        <p>Copyright@2023 | Fathi Abdi.</p>
      </div>

    </div>
  )
}

export default Footer