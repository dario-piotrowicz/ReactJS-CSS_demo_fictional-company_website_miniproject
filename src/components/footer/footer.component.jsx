import React from 'react';
import './footer.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const githubBaseUrl = 'https://github.com/dario-piotrowicz/';
const githubRepoName = 'ReactJS-CSS_demo_fictional-company_website_miniproject';
const githubRepoUrl = `${githubBaseUrl}${githubRepoName}`;

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="social">
        <a href={githubRepoUrl} target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <p>Copyright &copy; 2020 - FictionalFinances</p>
    </footer>
  );
};

export default Footer;
