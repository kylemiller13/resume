import React from 'react';
import { Typography, Divider, List, ListItem } from '@material-ui/core';

function Skills() {
  return (
    <div>
    <Typography  align="left" variant="h5"><strong>Skills</strong></Typography>
    <Divider variant="fullWidth" style={{ backgroundColor: '#000' }} />
    <List type="ordered"  style={{ paddingTop: 0 }}>
      <ListItem style={{ paddingTop: 0, marginLeft: '1em', paddingBottom: 0 }}>• HTML • CSS/Bootstrap • JavaScript • Ruby on Rails • React • Test Driven Development • Material UI • Git • MySQL/PSQL </ListItem>
    </List>
    </div>
  );
}

export default Skills;