import React from 'react';
import './cases-section.styles.scss';
import cases1Img from '../../assets/images/cases/cases1.jpg';
import cases2Img from '../../assets/images/cases/cases2.jpg';
import cases3Img from '../../assets/images/cases/cases3.jpg';
import cases4Img from '../../assets/images/cases/cases4.jpg';
import cases5Img from '../../assets/images/cases/cases5.jpg';
import cases6Img from '../../assets/images/cases/cases6.jpg';
import cases7Img from '../../assets/images/cases/cases7.jpg';
import cases8Img from '../../assets/images/cases/cases8.jpg';

const CasesSection = () => {
  return (
    <section className="cases-section">
      <header>
        <h4>This is what we do</h4>
        <h2>Business Cases</h2>
        <p>
          We shake hands a lot and computers are being used. We also smile and
          like to look at skyscrapers.
        </p>
      </header>
      <div className="images">
        <div className="column">
          <img src={cases1Img} alt="case" />
          <img src={cases2Img} alt="case" />
        </div>
        <div className="column">
          <img src={cases3Img} alt="case" />
          <img src={cases4Img} alt="case" />
        </div>
        <div className="column">
          <img src={cases5Img} alt="case" />
          <img src={cases6Img} alt="case" />
        </div>
        <div className="column">
          <img src={cases7Img} alt="case" />
          <img src={cases8Img} alt="case" />
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
