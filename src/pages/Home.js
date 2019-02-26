import React from 'react';
import Header from '../components/Header';
import Committee from './Committee';
import Project from './Project';
import Workshop from './Workshop';
import Talk from './Talk';
import Gallery from './Gallery';

const Home = () => {
  return (
    <div>
      <div id="home">
        <Header />
      </div>

      <div className="mt-5">
      </div>

      <div className="mt-5 mb-5" id="#workshop">
        <Workshop />
      </div>
      <div className="mt-5 mb-5" id="#project">
        <Project />
      </div>
      <div className="mt-5 mb-5" id="#talk">
        <Talk />
      </div>
      <div className="mt-5 mb-5" id="committee">
        <Committee />
      </div>
      <div className="mt-5 mb-5" id="#gallery">
        <Gallery />
      </div>
    </div>
  )
}

export default Home;
