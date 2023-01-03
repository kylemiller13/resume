import React from 'react';
import { Typography} from '@material-ui/core';

function Header() {
  return (
    <div className='header'>
      <Typography align="center" variant="h4"><strong>Kyle Miller</strong></Typography>
      <Typography align="center" variant="h4">Software Engineer</Typography>
    </div>
  );
}

export default Header;