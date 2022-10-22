import React from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../images/exploreIcon.svg';
import '../Style/footer.css';

function Footer() {
  const footerClass = {
    position: 'fixed',
    bottom: 0,
    left: 0,
  };

  return (
    <div
      className="footer"
    >

      <footer
        style={ footerClass }
        data-testid="footer"
        className="footer"
      >
        <div className="one">
          <Link
            to="/explore"
          >
            <img src={ exploreIcon } alt="imgExplore" data-testid="explore-bottom-btn" />
          </Link>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
