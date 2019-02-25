import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const PersonCard = ({ classes, name, desc, url }) => {
  return (
    <Card className={classes.card}>
      <img className={classes.image} src={url} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography paragraph>lorem ipsum</Typography>
      </CardContent>
    </Card>
  )
}

const styles = {
  card: {
    textAlign: 'center',
    height: 'auto',
    width: '100%',
    boxShadow: 'none',
    margin: '0px auto',
    maxWidth: '13.6em',
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
};

export default withStyles(styles)(PersonCard);
