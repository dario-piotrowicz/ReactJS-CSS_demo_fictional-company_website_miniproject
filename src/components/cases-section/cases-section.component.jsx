import React, { useState } from 'react';
import './cases-section.styles.scss';
import Lightbox from 'react-image-lightbox';

const casesImages = [
  './images/cases/cases1.jpg',
  './images/cases/cases2.jpg',
  './images/cases/cases3.jpg',
  './images/cases/cases4.jpg',
  './images/cases/cases5.jpg',
  './images/cases/cases6.jpg',
  './images/cases/cases7.jpg',
  './images/cases/cases8.jpg'
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
            <img src="./images/cases/cases1.jpg" alt="case" onClick={() => openLightboxOn(0)} />
            <img src="./images/cases/cases2.jpg" alt="case" onClick={() => openLightboxOn(1)} />
          </div>
          <div className="pair">
            <img src="./images/cases/cases3.jpg" alt="case" onClick={() => openLightboxOn(2)} />
            <img src="./images/cases/cases4.jpg" alt="case" onClick={() => openLightboxOn(3)} />
          </div>
          <div className="pair">
            <img src="./images/cases/cases5.jpg" alt="case" onClick={() => openLightboxOn(4)} />
            <img src="./images/cases/cases6.jpg" alt="case" onClick={() => openLightboxOn(5)} />
          </div>
          <div className="pair">
            <img src="./images/cases/cases7.jpg" alt="case" onClick={() => openLightboxOn(6)} />
            <img src="./images/cases/cases8.jpg" alt="case" onClick={() => openLightboxOn(7)} />
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
