import React from 'react';
import './cases-section.styles.scss';
import cases1 from '../../assets/images/cases/cases1.jpg';
import cases2 from '../../assets/images/cases/cases2.jpg';
import cases3 from '../../assets/images/cases/cases3.jpg';
import cases4 from '../../assets/images/cases/cases4.jpg';
import cases5 from '../../assets/images/cases/cases5.jpg';
import cases6 from '../../assets/images/cases/cases6.jpg';
import cases7 from '../../assets/images/cases/cases7.jpg';
import cases8 from '../../assets/images/cases/cases8.jpg';

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
          <img src={cases1} alt="case" />
          <img src={cases2} alt="case" />
        </div>
        <div className="column">
          <img src={cases3} alt="case" />
          <img src={cases4} alt="case" />
        </div>
        <div className="column">
          <img src={cases5} alt="case" />
          <img src={cases6} alt="case" />
        </div>
        <div className="column">
          <img src={cases7} alt="case" />
          <img src={cases8} alt="case" />
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
