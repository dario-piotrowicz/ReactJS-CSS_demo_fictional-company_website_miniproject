import React, { useEffect, useState } from 'react';
import './header.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomeOrBlog =
    location.pathname === '/' || location.pathname.startsWith('/blog');

  const [transparentBg, setTransparentBg] = useState(true);
  useEffect(() => {
    if (!isHomeOrBlog) return;

    const updateBackgroundOnScroll = () => {
      const yOffset = window.pageYOffset;
      if (yOffset > 250) {
        setTransparentBg(false);
      } else {
        setTransparentBg(true);
      }
    };
    window.addEventListener('scroll', updateBackgroundOnScroll);
    return () => window.removeEventListener('scroll', updateBackgroundOnScroll);
  }, [isHomeOrBlog, window]);

  return (
    <header
      id="main-header"
      className={`${isHomeOrBlog && transparentBg ? 'transparent-bg' : ''}`}
    >
      <h1>
        <span className="text-primary">
          <span className="fa-icon">
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </span>
          Fictional
        </span>
        Finances
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cases">Cases</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
