import React from 'react';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import background from '../images/background_home.svg';
import IconButton from './IconButton';
import { MailIcon, PageNextOutlineIcon } from '../constants/IconList';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
    <section>
      <GridContainer justify="center" alignItems="center">
        <GridItem xs={12} sm={7} align="center">
          <div className="ml-md-3 mr-md-1">
            <img src={background} alt="home" style={{width: '100%', height: 'auto'}} />
          </div>
        </GridItem>
        <GridItem xs={12} sm={5} align="center">
          <Typography gutterBottom variant="display1" color="primary">Tembusu Technologies</Typography>
          <Typography gutterBottom variant="h6" color="secondary">Programming | Engineering | Learning</Typography>
          <Typography gutterBottom paragraph color="secondary">Formly known as the _tCoders, Tembusu Technologies is an interest group founded by students possessing a vision of wanting to solve the world's big problems using technology. Currently at 139 members strong, our activities include working with hardware and software and organising workshops, industrial talks and student-led projects.</Typography>
          <IconButton pathName={MailIcon} color="#2b7a78" link="mailto:tembusutech@gmail.com" />
          <IconButton pathName={PageNextOutlineIcon} color="#2b7a78" link="https://tembusucoders.firebaseapp.com/" />
        </GridItem>
      </GridContainer>
    </section>
  );
};

export default Header;
