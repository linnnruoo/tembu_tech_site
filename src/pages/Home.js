import React from 'react';
import Gallery from 'react-photo-gallery';
import Header from '../components/Header';
import gallery from '../constants/gallery';
import Committee from './Committee';

const Home = () => {
  return (
    <div>
      <Header />
      
      <div className="mt-5" id="workshop">
        <Gallery photos={gallery} />
      </div>
      <div id="committee">
        <Committee />
      </div>
    </div>
  )
}

export default Home;
