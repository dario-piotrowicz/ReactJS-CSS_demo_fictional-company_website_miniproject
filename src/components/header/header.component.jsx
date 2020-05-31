import React from 'react';
import './header.styles.scss';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header id="main-header">
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
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Cases</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
