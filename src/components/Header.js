import React from 'react';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import background from '../images/background_home.svg';

const Header = () => {
  return (
    <GridContainer justify="center" alignItems="center">
      <GridItem>
        <img src={background} alt="home" style={{width: '100%', height: 'auto'}} />
      </GridItem>
    </GridContainer>
  );
};

export default Header;
