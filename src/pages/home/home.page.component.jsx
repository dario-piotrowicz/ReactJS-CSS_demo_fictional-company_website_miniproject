import React from 'react';
import './home.styles.scss';
import Hero from '../../components/hero/hero.component';
import InfoIconsSection from '../../components/info-icons-section/info-icons-section.component';

const Home = () => (
  <main>
    <Hero />
    <InfoIconsSection />
  </main>
);

export default Home;
