import React from 'react';

const Banner = ({ bannerImg }) => {
  return (
    <img 
      style={
        {
          width: '100%',
          height: 'auto',
          maxHeight: '480px',
          objectFit: 'cover'
        }
      }
      src={bannerImg}
      alt="banner"
    />
  );
}

export default Banner;
