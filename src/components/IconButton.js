import React from 'react';
import Fab from '@material-ui/core/Fab';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconButton = ({ link, color, fontSize, pathName }) => {
  return (
    <Fab
      style={{boxShadow: 'none', background: 'transparent'}}
      href={link}
    >
      <SvgIcon style={{color: `${color}`, fontSize: `${fontSize}`}}>
        <path d={pathName} />
      </SvgIcon>
    </Fab>
  )
}

export default IconButton;
