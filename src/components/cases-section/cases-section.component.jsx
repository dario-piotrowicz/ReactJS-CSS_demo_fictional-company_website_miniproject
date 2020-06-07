import React, { useState } from 'react';
import './cases-section.styles.scss';
import cases1Img from '../../assets/images/cases/cases1.jpg';
import cases2Img from '../../assets/images/cases/cases2.jpg';
import cases3Img from '../../assets/images/cases/cases3.jpg';
import cases4Img from '../../assets/images/cases/cases4.jpg';
import cases5Img from '../../assets/images/cases/cases5.jpg';
import cases6Img from '../../assets/images/cases/cases6.jpg';
import cases7Img from '../../assets/images/cases/cases7.jpg';
import cases8Img from '../../assets/images/cases/cases8.jpg';
import Lightbox from 'react-image-lightbox';

const casesImages = [
  cases1Img,
  cases2Img,
  cases3Img,
  cases4Img,
  cases5Img,
  cases6Img,
  cases7Img,
  cases8Img,
];

const CasesSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightboxOn = (index) => {
    setLightboxIdx(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
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
          <div className="pair">
            <img src={cases1Img} alt="case" onClick={() => openLightboxOn(0)} />
            <img src={cases2Img} alt="case" onClick={() => openLightboxOn(1)} />
          </div>
          <div className="pair">
            <img src={cases3Img} alt="case" onClick={() => openLightboxOn(2)} />
            <img src={cases4Img} alt="case" onClick={() => openLightboxOn(3)} />
          </div>
          <div className="pair">
            <img src={cases5Img} alt="case" onClick={() => openLightboxOn(4)} />
            <img src={cases6Img} alt="case" onClick={() => openLightboxOn(5)} />
          </div>
          <div className="pair">
            <img src={cases7Img} alt="case" onClick={() => openLightboxOn(6)} />
            <img src={cases8Img} alt="case" onClick={() => openLightboxOn(7)} />
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <Lightbox
          enableZoom={false}
          mainSrc={casesImages[lightboxIdx]}
          nextSrc={casesImages[(lightboxIdx + 1) % casesImages.length]}
          prevSrc={
            casesImages[
              (lightboxIdx + casesImages.length - 1) % casesImages.length
            ]
          }
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            setLightboxIdx(
              (lightboxIdx + casesImages.length - 1) % casesImages.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIdx((lightboxIdx + 1) % casesImages.length)
          }
        />
      )}
    </>
  );
};

export default CasesSection;
