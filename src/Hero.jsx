import React from 'react';
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam
            nam, mollitia quos quisquam veniam ratione accusantium quia harum
            voluptates! Iusto incidunt velit esse ut! Veritatis suscipit vitae
            ipsam impedit?
          </p>
          <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
