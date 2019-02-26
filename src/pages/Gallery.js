import React from 'react';
import Section from '../components/Section';
import CustomCarousel from '../components/CustomCarousel';
import { gallery_members } from '../constants/gallery'

const Gallery = () => {
  return (
    <section>
      <Section text="Gallery" />
      <div className="container">
        <CustomCarousel items={gallery_members} />
      </div>
    </section>
  )
}

export default Gallery;
