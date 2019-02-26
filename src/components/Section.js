import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import sectionPic from '../images/section.png'

const Section = ({ classes, text }) => {
  return (
    <div className={classes.container}>
      <img src={sectionPic} className={classes.img} alt={text} />
      <Typography className={classes.text} color="primary">{text}</Typography>
    </div>
  )
}

const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 100,
    margin: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
  }
})

export default withStyles(styles)(Section);
